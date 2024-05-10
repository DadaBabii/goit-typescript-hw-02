import React, { useState } from "react";
import { useEffect } from "react";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage";
import { requestPhotosByQuery } from "./services/api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import Modal from "react-modal";
import SearchBar from "./components/SearchBar/SearchBar";
import { Images, Response } from "./types";

function App() {
  const [images, setImages] = useState<Images[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalpages, setTtotalpages] = useState<number>(0);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<Images[]>([]);

  useEffect(() => {
    if (query.length === 0) return;

    async function fetchImages() {
      try {
        setError(false);
        setLoading(true);

        const data = await requestPhotosByQuery<Response>(query, page);
        console.log(data);

        setTtotalpages(data.total_pages);

        setImages((previmage) => [...previmage, ...data.results as Images[]]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [query, page]);

  const handleMoreImages = ():void => {
    setPage((page) => page + 1);
    // console.log(data.results);
  };
  const onSearchImages = (inputValue : string) :void =>  {
    if (inputValue === query) {
      // setQuery(inputValue);
      setImages(images);
    } else {
      setPage(1);
      setImages([]);
      setQuery(inputValue);
    }
  };

  const onClickImage = (e:React.ChangeEvent<HTMLInputElement>):void => {
    console.log(e.target.id);


    const find = images.filter((image) => image.id === e.target.id);
    setModalImage(find);

    openModal();
  };

  Modal.setAppElement("#root");

  function openModal():void {
    setIsOpen(true);
  }
  function closeModal():void {
    setIsOpen(false);
  }

  return (
    <>
      <SearchBar onSearch={onSearchImages} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images && <ImageGallery images={images} onClick={onClickImage} />}
      {modalIsOpen && (
        <ImageModal
          modalImage={modalImage}
          isOpen={modalIsOpen}
          closeModal={closeModal}
        />
      )}
      {page < totalpages && <LoadMoreBtn onClick={handleMoreImages} />}
    </>
  );
}

export default App;
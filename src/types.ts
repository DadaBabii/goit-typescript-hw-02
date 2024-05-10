export interface Images {
    id: string;
    urls: {
      regular: string;
      small: string;
    };
    alt?: string;
    width?: number;
    height?: number;
}
export type Response = {
    total: number;
    total_pages: number;
    results: object[];
}


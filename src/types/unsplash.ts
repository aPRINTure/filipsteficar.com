export interface UnsplashPhoto {
    statistics?: {
        views: {
            total: number;
        }
    }
    urls: {
        small: string;
        regular: string;
        full: string;
        raw: string; 
    };
    user: {
        name: string;
    }
    links: {
        html: string;
        self: string;
    }
    views: number;
    width: number;
    height: number;
}
declare const newsResponse: {
    _meta: {
        status: string;
        status_code: number;
        message: null;
    };
    news: {
        id: number;
        image_url: string;
        title: string;
        subtitle: string;
        description: string;
        link: null;
        created_at: string;
    }[];
    total: number;
};
export default newsResponse;

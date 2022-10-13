declare const restaurantsResponse: {
    _meta: {
        status: string;
        status_code: number;
        message: null;
    };
    restaurant: ({
        id: number;
        name: string;
        rate: number;
        address: string;
        subtext: string;
        description: string;
        who_added: {
            id: number;
            name: string;
            surname: string;
            avatar: string;
        };
        links: {
            link1: string;
            link2: null;
            link3: null;
            link4: null;
        };
        images: {
            id: number;
            image_url: string;
        }[];
        categories: {
            id: number;
            name: string;
            image_url: string;
        }[];
    } | {
        id: number;
        name: string;
        rate: number;
        address: string;
        subtext: string;
        description: string;
        who_added: {
            id: number;
            name: string;
            surname: string;
            avatar: string;
        };
        links: {
            link1: string;
            link2: string;
            link3: null;
            link4: null;
        };
        images: {
            id: number;
            image_url: string;
        }[];
        categories: {
            id: number;
            name: string;
            image_url: string;
        }[];
    })[];
};
export default restaurantsResponse;

declare const notificationsResponse: {
    _meta: {
        status: string;
        status_code: number;
        message: null;
    };
    notifications: ({
        id: number;
        content: string;
        relation_users: null;
        is_read: number;
        is_notified: number;
        is_special: number;
        type: null;
        created_at: string;
        user: {
            id: number;
            name: string;
            surname: string;
            email: string;
            avatar: string;
        };
        detail: null;
    } | {
        id: number;
        content: string;
        relation_users: null;
        is_read: number;
        is_notified: number;
        is_special: number;
        type: {
            code: string;
            title: string;
            description: string;
        };
        created_at: string;
        user: {
            id: number;
            name: string;
            surname: string;
            email: string;
            avatar: string;
        };
        detail: {
            comment: string;
        };
    })[];
};
export default notificationsResponse;

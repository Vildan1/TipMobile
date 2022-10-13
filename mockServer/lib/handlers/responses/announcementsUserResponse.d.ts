declare const announcementsUserResponse: {
    _meta: {
        status: string;
        status_code: number;
        message: null;
    };
    announcement_users: {
        id: number;
        avatar: string;
        user_id: number;
        user_name: string;
        user_surname: string;
        job_title: string;
        start_date: string;
    }[];
};
export default announcementsUserResponse;

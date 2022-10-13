declare const birthdaysResponse: {
    _meta: {
        status: string;
        status_code: number;
        message: null;
    };
    users: {
        id: number;
        name: string;
        surname: string;
        email: string;
        avatar: string;
        phone: string;
        birthday: string;
        started_at: string;
        finish_working_try_date: string;
    }[];
};
export default birthdaysResponse;

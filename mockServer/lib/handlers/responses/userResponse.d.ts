declare const userResponse: {
    _meta: {
        status: string;
        status_code: number;
        message: null;
    };
    user: {
        id: number;
        name: string;
        surname: string;
        email: string;
        avatar: string;
        phone: string;
        blood_type: string;
        contact_person_name: string;
        contact_person_phone: string;
        last_mod: string;
        user_bonus_count: number;
        is_orientation_completed: number;
        started_at: string;
        department: {
            id: number;
            name: string;
            manager: null;
        };
        job: {
            id: number;
            title: string;
        };
        applications: null;
        remaining_annual_day: string;
        is_super_user: null;
        is_leave_manager: boolean;
        used_annual_day: string;
    };
    rating_menu: null;
};
export default userResponse;

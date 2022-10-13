"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notificationsResponse = {
    _meta: {
        status: "succes",
        status_code: 200,
        message: null,
    },
    notifications: [
        {
            id: 6107671,
            content: "İzniniz Ingrid Chu tarafından onaylanmıştır.",
            relation_users: null,
            is_read: 0,
            is_notified: 0,
            is_special: 0,
            type: null,
            created_at: "18-08-2022 09:29:04",
            user: {
                id: 1,
                name: "System",
                surname: "Teknasyon",
                email: "system@teknasyon.com",
                avatar: "users/user-1.jpg",
            },
            detail: null,
        },
        {
            id: 6107612,
            content: "Nancy Sadowski Kişisinden 'Teşekkür Bonusu' aldınız.",
            relation_users: null,
            is_read: 0,
            is_notified: 0,
            is_special: 0,
            type: {
                code: "takenbonus",
                title: "Tebrikler!",
                description: "<p>Teşekk&uuml;r Bonusu aldınız.</p>",
            },
            created_at: "17-08-2022 14:06:44",
            user: {
                id: 1,
                name: "System",
                surname: "Teknasyon",
                email: "system@teknasyon.com",
                avatar: "users/user-1.jpg",
            },
            detail: {
                comment: "Dokümantasyon sürecindeki detaylı yardımların için teşekkür ederim.",
            },
        },
        {
            id: 6105038,
            content: "İzniniz Onaylanmıştır",
            relation_users: null,
            is_read: 0,
            is_notified: 0,
            is_special: 0,
            type: null,
            created_at: "21-07-2022 16:22:21",
            user: {
                id: 1,
                name: "System",
                surname: "Teknasyon",
                email: "system@teknasyon.com",
                avatar: "users/user-1.jpg",
            },
            detail: null,
        },
    ],
};
exports.default = notificationsResponse;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restaurantsResponse = {
    _meta: {
        status: "succes",
        status_code: 200,
        message: null,
    },
    restaurant: [
        {
            id: 11,
            name: "Corvino",
            rate: 1,
            address: "Kuzguncuk Mahallesi, İcadiye Caddesi, Bereketli Sokak, No 2/A, Üsküdar, İstanbul",
            subtext: "Kuzguncuk / Üsküdar",
            description: "Küçük ama mimari olarak güzel dizayn edilmiş bir yer. Yemeklerinin yanında kahve ve tatlıları için de tercih edilesi.",
            who_added: {
                id: 237,
                name: "James L.",
                surname: "Gullette",
                avatar: "https://i.pravatar.cc/150?img=15",
            },
            links: {
                link1: "https://www.zomato.com/tr/istanbul/corvino-kuzguncuk-istanbul",
                link2: null,
                link3: null,
                link4: null,
            },
            images: [
                {
                    id: 20,
                    image_url: "https://teknasyon-tip.s3-eu-central-1.amazonaws.com/restaurants/11/d6856a058ac13e929254b155d265dd75.jpg",
                },
            ],
            categories: [
                {
                    id: 3,
                    name: "Akşam Yemeği",
                    image_url: "https://teknasyon-tip.s3-eu-central-1.amazonaws.com/restaurant-categories/February2019/Z9YyYzhL1m3mjGnMoFY3.png",
                },
                {
                    id: 4,
                    name: "Kahve Molası",
                    image_url: "https://teknasyon-tip.s3-eu-central-1.amazonaws.com/restaurant-categories/February2019/Dfhk64COzZsY8yMleTTu.png",
                },
                {
                    id: 5,
                    name: "Öğle yemeği",
                    image_url: "https://teknasyon-tip.s3-eu-central-1.amazonaws.com/restaurant-categories/February2019/veGTGmiAGsDyYBdYEzPd.png",
                },
            ],
        },
        {
            id: 12,
            name: "Journey Lounge",
            rate: 1,
            address: "Kılıçali Paşa Mahallesi, Akarsu Yokuşu 21/A",
            subtext: "İstanbul/Cihangir",
            description: "Kahvaltı için ideal bir mekan. Oldukça zengin menüsü var ve huzurlu bir ortama sahip.",
            who_added: {
                id: 228,
                name: "George C.",
                surname: "Renfro",
                avatar: "https://i.pravatar.cc/150?img=15",
            },
            links: {
                link1: "http://www.journeycihangir.com/",
                link2: "https://www.zomato.com/tr/istanbul/journey-cihangir-istanbul/reviews",
                link3: null,
                link4: null,
            },
            images: [
                {
                    id: 21,
                    image_url: "https://teknasyon-tip.s3-eu-central-1.amazonaws.com/restaurants/12/42424a2ce6f8e2870d0bbb3c52a15d92.jpg",
                },
                {
                    id: 29,
                    image_url: "https://teknasyon-tip.s3-eu-central-1.amazonaws.com/restaurants/12/f341d218e09a4a6a426a2653f0c5c899.jpg",
                },
            ],
            categories: [
                {
                    id: 1,
                    name: "Kahvaltı",
                    image_url: "https://teknasyon-tip.s3-eu-central-1.amazonaws.com/restaurant-categories/February2019/yKITrP1Bvi3hbXOnQyUS.png",
                },
                {
                    id: 4,
                    name: "Kahve Molası",
                    image_url: "https://teknasyon-tip.s3-eu-central-1.amazonaws.com/restaurant-categories/February2019/Dfhk64COzZsY8yMleTTu.png",
                },
                {
                    id: 5,
                    name: "Öğle yemeği",
                    image_url: "https://teknasyon-tip.s3-eu-central-1.amazonaws.com/restaurant-categories/February2019/veGTGmiAGsDyYBdYEzPd.png",
                },
            ],
        },
        {
            id: 13,
            name: "Anzer Sofrası",
            rate: 1,
            address: "Cumhuriyet Mahallesi, Kefeliköy Bağlar Yolu Sk. No:5, 34457 Sarıyer/İstanbul",
            subtext: "İstanbul/Sarıyer",
            description: "Karadeniz yöresi yemekler yapan bir yer. Mıhlama ve karadeniz yöresine özel çorbaları var. \nÇoklu katılımlı organizasyonlar için müsait. \nAracınız için valesi mevcut.",
            who_added: {
                id: 11,
                name: "Anna R.",
                surname: "Johnson",
                avatar: "https://i.pravatar.cc/150?img=15",
            },
            links: {
                link1: "http://www.anzersofrasi.com/",
                link2: "https://www.zomato.com/istanbul/anzer-sofras%C4%B1-kire%C3%A7burnu-istanbul",
                link3: null,
                link4: null,
            },
            images: [
                {
                    id: 22,
                    image_url: "https://teknasyon-tip.s3-eu-central-1.amazonaws.com/restaurants/13/7794283ee0ea8e668542ff32c7293efc.jpg",
                },
                {
                    id: 23,
                    image_url: "https://teknasyon-tip.s3-eu-central-1.amazonaws.com/restaurants/13/e032046736a8db1eec883cfe3a65930f.jpg",
                },
                {
                    id: 24,
                    image_url: "https://teknasyon-tip.s3-eu-central-1.amazonaws.com/restaurants/13/af65d9efd7346c30708b9069b4eef371.jpg",
                },
            ],
            categories: [
                {
                    id: 1,
                    name: "Kahvaltı",
                    image_url: "https://teknasyon-tip.s3-eu-central-1.amazonaws.com/restaurant-categories/February2019/yKITrP1Bvi3hbXOnQyUS.png",
                },
                {
                    id: 3,
                    name: "Akşam Yemeği",
                    image_url: "https://teknasyon-tip.s3-eu-central-1.amazonaws.com/restaurant-categories/February2019/Z9YyYzhL1m3mjGnMoFY3.png",
                },
                {
                    id: 5,
                    name: "Öğle yemeği",
                    image_url: "https://teknasyon-tip.s3-eu-central-1.amazonaws.com/restaurant-categories/February2019/veGTGmiAGsDyYBdYEzPd.png",
                },
            ],
        },
    ],
};
exports.default = restaurantsResponse;

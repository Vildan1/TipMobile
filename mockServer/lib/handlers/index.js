"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlers = void 0;
const msw_1 = require("msw");
const newsResponse_1 = __importDefault(require("./responses/newsResponse"));
const birthdaysResponse_1 = __importDefault(require("./responses/birthdaysResponse"));
const notificationsResponse_1 = __importDefault(require("./responses/notificationsResponse"));
const openPositionsResponse_1 = __importDefault(require("./responses/openPositionsResponse"));
const announcementsUserResponse_1 = __importDefault(require("./responses/announcementsUserResponse"));
const userResponse_1 = __importDefault(require("./responses/userResponse"));
const restaurantsResponse_1 = __importDefault(require("./responses/restaurantsResponse"));
const baseURL = "http://localhost:9090";
exports.handlers = [
    msw_1.rest.get(`${baseURL}/news`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(newsResponse_1.default));
    }),
    msw_1.rest.get(`${baseURL}/birthdays`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(birthdaysResponse_1.default));
    }),
    msw_1.rest.get(`${baseURL}/notifications`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(notificationsResponse_1.default));
    }),
    msw_1.rest.get(`${baseURL}/openPositions`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(openPositionsResponse_1.default));
    }),
    msw_1.rest.get(`${baseURL}/announcements-user`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(announcementsUserResponse_1.default));
    }),
    msw_1.rest.get(`${baseURL}/user`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(userResponse_1.default));
    }),
    msw_1.rest.get(`${baseURL}/restaurants`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(restaurantsResponse_1.default));
    }),
];

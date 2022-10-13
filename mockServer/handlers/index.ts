import { rest } from "msw";

import newsResponse from "./responses/newsResponse";
import birthdaysResponse from "./responses/birthdaysResponse";
import notificationsResponse from "./responses/notificationsResponse";
import openPositionsResponse from "./responses/openPositionsResponse";
import announcementsUserResponse from "./responses/announcementsUserResponse";
import userResponse from "./responses/userResponse";
import restaurantsResponse from "./responses/restaurantsResponse";

const baseURL = "http://localhost:9090";

export const handlers = [
  rest.get(`${baseURL}/news`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(newsResponse));
  }),
  rest.get(`${baseURL}/birthdays`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(birthdaysResponse));
  }),
  rest.get(`${baseURL}/notifications`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(notificationsResponse));
  }),
  rest.get(`${baseURL}/openPositions`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(openPositionsResponse));
  }),
  rest.get(`${baseURL}/announcements-user`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(announcementsUserResponse));
  }),
  rest.get(`${baseURL}/user`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userResponse));
  }),
  rest.get(`${baseURL}/restaurants`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(restaurantsResponse));
  }),
];

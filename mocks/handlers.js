import { rest } from "msw";
import users from "../data/users";

export const handlers = [
  rest.get("/api/users", (req, res, ctx) => {
    return res(ctx.json(users));
  }),

  // rest.get("/users/:id/messages", (req, res, ctx) => {
  //   return res(ctx.json(messages));
  // }),

  // rest.post("/users/:id/messages", (req, res, ctx) => {
  //   const { message } = JSON.parse(req.body);

  //   return res(
  //     ctx.json({
  //       id: Math.random(),
  //       message,
  //     })
  //   );
  // }),
];

/**
 * @jest-environment jsdom
 */

import "whatwg-fetch";
// again, these first two imports are something you'd normally handle in
// your testing framework configuration rather than importing them in every file.
import "@testing-library/jest-dom";
import * as React from "react";
// import API mocking utilities from Mock Service Worker.
import { rest } from "msw";
import { setupServer } from "msw/node";
// import testing utilities
import { render, fireEvent, screen } from "@testing-library/react";
import { server } from "../mocks/server";
import GabeDashboard from "../components/GabeDashboard";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// const server = setupServer(
//   rest.post("/api/gabe", (req, res, ctx) => {
//     return res(
//       ctx.json({
//         first_name: "Gabe",
//         last_name: "Jensen",
//       })
//     );
//   })
// );

test("Does MSW and real life requests", async () => {
  server.listen();

  render(<GabeDashboard />);
  fireEvent.click(screen.getByTestId(/gabe-btn/i));

  const content = await screen.findByTestId("gabe-text");
  expect(content).toHaveTextContent(/Jones/i);

  server.resetHandlers();
  server.close();
});

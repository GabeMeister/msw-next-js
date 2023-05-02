/**
 * @jest-environment jsdom
 */

import "whatwg-fetch";
// again, these first two imports are something you'd normally handle in
// your testing framework configuration rather than importing them in every file.
import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { server } from "../mocks/server";
import GabeDashboard from "../components/GabeDashboard";

// function delay(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

beforeAll(() => {
  server.listen();
});

test("MSW works", async () => {
  render(<GabeDashboard />);
  fireEvent.click(screen.getByTestId(/gabe-btn/i));

  const content = await screen.findByTestId("gabe-text");
  expect(content).toHaveTextContent(/Jones/i);
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import SubRoute from "./SubRoute";
import { BrowserRouter } from "react-router";

test("Shows React + Vite", () => {
  render(
    <BrowserRouter>
      <SubRoute />
    </BrowserRouter>
  );

  expect(screen.getByTestId("react-page")).toHaveTextContent("Vite + React");
});

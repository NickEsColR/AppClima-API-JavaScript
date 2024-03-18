import React from "react";
import {
  act,
  render,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("Show title", () => {
  const component = render(<App />)
  component.getByText("Buscador del clima")
});
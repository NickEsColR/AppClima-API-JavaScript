import React from "react";
import {
  act,
  render,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MainComponent } from "./MainComponent";

describe("WeatherCard container", () => {
  let component
  beforeEach(() => {
    component = render(<MainComponent />);
  });

  it("show add card", () => {
    component.getByText("+")
  });

  it("add card", () => {
    act(() => {
      userEvent.click(component.getByText("+"));
    });
    component.getByText("x");
    component.getByText("Agrege pais y cuidad");
  });

  it("remove card", () => {
    act(() => {
      userEvent.click(component.getByText("+"));
    });
    const deleteButton = component.getByText("x");
    act(() => {
      userEvent.click(deleteButton);
    });

    expect(component.queryByText("Agrege pais y cuidad")).toBeNull();
  });
});
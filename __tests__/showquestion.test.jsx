import React from "react";
import { render } from "react-dom";
import ShowQuestion from "../src/pages/ShowQuestion";

describe("show question page", () => {
  it("should give me some content", () => {
    const element = document.createElement("div");
    render(<ShowQuestion />, element);
    expect(element.innerHTML).toMatchSnapshot();
  });
});

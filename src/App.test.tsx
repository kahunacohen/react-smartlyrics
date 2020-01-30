import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { queryAllByText } = render(<App />);
  const el = queryAllByText(/Home/i)[0];
  expect(el).toBeInTheDocument();
});

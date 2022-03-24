/** @format */

import { render, screen } from "@testing-library/react";
import { HeaderLogo, RegisterForm } from "../components";
import userEvent from "@testing-library/user-event";

test("whether HeaderLogo component is present", () => {
  render(<HeaderLogo />);
  const headerLogoEl = screen.getByText(/BUMPER/i);
  expect(headerLogoEl).toBeInTheDocument();
});

it("shows error message when the input has no value", async () => {
  render(<RegisterForm />);

  const submitFormButton = await screen.findByTestId("submitBtn");
  userEvent.click(submitFormButton);
  const errorMsg = await screen.findByText(/name is a required field/i);

  expect(errorMsg).toBeInTheDocument();
});

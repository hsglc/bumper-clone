/** @format */

import { render, screen, fireEvent } from "@testing-library/react";
import { HeaderLogo, RegisterForm } from "../components";
import { act } from "react-dom/test-utils";

test("whether HeaderLogo component is present", () => {
  render(<HeaderLogo />);
  const headerLogoEl = screen.getByText(/BUMPER/i);
  expect(headerLogoEl).toBeInTheDocument();
});

describe("SignIn", () => {
  describe("with valid inputs", () => {
    it("calls the onSubmit function", async () => {
      const { getByLabelText, getByRole } = render(<RegisterForm />);

      await act(async () => {
        fireEvent.change(getByLabelText("Email Address *"), {
          target: { value: "email@test.com" },
        });
        fireEvent.change(getByLabelText("Password *"), {
          target: { value: "1234567" },
        });
      });

      await act(async () => {
        fireEvent.click(getByRole("button"));
      });

      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });
});

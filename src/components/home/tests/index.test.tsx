import { render, screen } from "@testing-library/react";
import { Route, Routes } from "react-router-dom";

import ComponentTestHarness from "test-utils/component-test-harness";
import HomePage from "pages/home";
import { waitForNoLoadingSpinner } from "test-utils/loading";

const Wrapper = (): JSX.Element => {
  return (
    <ComponentTestHarness initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ComponentTestHarness>
  );
};

describe("HomePage", () => {
  it("renders home page view", () => {
    render(<Wrapper />);

    expect(
      screen.getByText("You can find the code for this project on GitHub.")
    ).toBeInTheDocument();
  });

  it("should have a github repo's link", async () => {
    render(<Wrapper />);

    await waitForNoLoadingSpinner();

    const link = screen.getByRole("link", { name: /To GitHub/ });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      "https://github.com/Grofen/miles-subdomain-challenge"
    );
  });
});

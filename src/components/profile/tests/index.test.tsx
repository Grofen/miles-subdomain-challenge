import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Route, Routes } from "react-router";

import userData from "test-utils/mocks/user.json";

import ComponentTestHarness from "test-utils/component-test-harness";
import Profile from "../";

const Wrapper = (): JSX.Element => {
  return (
    <ComponentTestHarness initialEntries={["/profile"]}>
      <Routes>
        <Route path="/profile" element={<Profile user={userData} />} />
      </Routes>
    </ComponentTestHarness>
  );
};

describe("<Profile />", () => {
  it("Should display user name", () => {
    render(<Wrapper />);
    expect(
      screen.getByText(`Welcome back, ${userData.name}!`)
    ).toBeInTheDocument();
    expect(screen.getByText(userData.email)).toBeInTheDocument();
  });
});

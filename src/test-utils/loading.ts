import { screen, waitFor } from "@testing-library/react";

export const waitForNoLoadingSpinner = async (): Promise<void> =>
  waitFor(() => {
    expect(screen.queryAllByText("Loading").length).toBe(0);
  });

import { render, screen } from "@testing-library/react";
import Home from "../src/pages/index";

import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const code = ["USD", "CUP"];

describe("Home", () => {
  it("renders a page", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Home currencies={code} />
      </QueryClientProvider>,
    );

    const heading = screen.getByRole("heading", {
      name: "Exchange Calculator",
    });

    const input = screen.getByRole("textbox", {
      name: "",
    });
    const button = screen.getByRole("button", {
      name: "Convert",
    });

    const select = screen.getByText("From");
    const select2 = screen.getByText("to");

    expect(heading).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(select2).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});

import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../src/pages/index";

import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const code = ["USD", "CUP"];

describe("Home", () => {
  describe("render", () => {
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

      const select = screen.getByTestId("From");

      const select2 = screen.getByTestId("to");

      expect(heading).toBeInTheDocument();
      expect(input).toBeInTheDocument();
      expect(select).toBeInTheDocument();
      expect(select2).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  describe("behavior", () => {
    it("should show a value", async () => {
      const queryClient = new QueryClient();
      render(
        <QueryClientProvider client={queryClient}>
          <Home currencies={code} />
        </QueryClientProvider>,
      );

      const input = screen.getByRole("textbox", {
        name: "",
      });

      const button = screen.getByRole("button", {
        name: "Convert",
      });

      const select = screen.getByTestId("From");

      const select2 = screen.getByTestId("to");

      // Escribe datos de prueba en el componente de entrada
      await userEvent.type(input, "20");

      // Selecciona una opción en el componente select
      await userEvent.selectOptions(select, "USD");

      // Selecciona una opción en el componente select
      await userEvent.selectOptions(select2, "CUP");

      await userEvent.click(button);

      expect(input).toHaveValue("20");
      expect(screen.getByTestId("From-USD").selected).toBe(true);
      expect(screen.getByTestId("to-CUP").selected).toBe(true);
    });
  });
});

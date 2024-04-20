import "@testing-library/jest-dom";
import ProductPage from "@/pages/product/index";
import { render, screen } from "@testing-library/react";

jest.mock("next/router", () => ({
  returns: {
    useRouter() {
      return {
        route: "/product",
        pathname: "",
        query: "",
        asPath: "",
        push: jest.fn(),
        events: {
          on: jest.fn(),
          off: jest.fn(),
        },
        beforePopState: jest.fn(),
        prefetch: jest.fn(),
        isReady: true,
      };
    },
  },
}));

describe("product page", () => {
  it("render product page", () => {
    const page = render(<ProductPage />);
    expect(screen.getByTitle("productPage")).toMatchSnapshot();
    expect(page).toMatchSnapshot();
  });
});

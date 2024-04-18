import "@testing-library/jest-dom";
import ProductPage from "@/pages/product/server";
import { render, screen } from "@testing-library/react";

import { Product } from "@/types/product.type";

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
    const page = render(<ProductPage products={[]} />);
    expect(page).toMatchSnapshot();
  });
});

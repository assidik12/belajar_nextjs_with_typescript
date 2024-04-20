import Navbar from "@/components/layouts/Navbar";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Navbar", () => {
  it("render navbar", () => {
    const page = render(<Navbar />);
    expect(screen.getByText("logo")).toBeInTheDocument();
    expect(page).toMatchSnapshot();
  });
});

import "@testing-library/jest-dom";
import AboutPage from "@/pages/about";
import { render, screen } from "@testing-library/react";

describe("about page", () => {
  it("render about page", () => {
    const page = render(<AboutPage />);
    expect(screen.getByText("aboutPage")).toBeInTheDocument();
    expect(page).toMatchSnapshot();
  });
});

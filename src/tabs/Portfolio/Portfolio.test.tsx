import { render } from "@testing-library/react-native";
import Portfolio from "./Portfolio";

/*
1- Portfolio should be rendered.
*/

describe("Portfolio Unit Tests", () => {
  // TODO: Fix
  test.skip("should render correctly", () => {
    const portfolio = render(<Portfolio />);
    expect(portfolio).toMatchSnapshot();
  });
});

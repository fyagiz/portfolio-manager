import { render } from "@testing-library/react-native";
import Portfolio from "./Portfolio";

/*
1- Dashboard should be rendered.
*/

describe("Portfolio Unit Tests", () => {
  test("should render correctly", () => {
    const portfolio = render(<Portfolio />);
    expect(portfolio).toMatchSnapshot();
  });
});

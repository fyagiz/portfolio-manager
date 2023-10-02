import { render } from "@testing-library/react-native";
import Dashboard from "./Dashboard";

/*
1- Dashboard should be rendered.
*/

describe("Card Component Unit Tests", () => {
  test("should render correctly", () => {
    const investmentCardComponent = render(<Dashboard />);
    expect(investmentCardComponent).toMatchSnapshot();
  });
});

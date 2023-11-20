import { render } from "@testing-library/react-native";
import Dashboard from "./Dashboard";

/*
1- Dashboard should be rendered.
*/

describe("Dashboard Component Unit Tests", () => {
  test("should render correctly", () => {
    const dashboardComponent = render(<Dashboard />);
    expect(dashboardComponent).toMatchSnapshot();
  });
});

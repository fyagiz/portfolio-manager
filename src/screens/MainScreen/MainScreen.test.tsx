import { render } from "@testing-library/react-native";
import MainScreen from "./MainScreen";

/*
1- Dashboard should be rendered.
*/

describe("MainScreen Unit Tests", () => {
  test("should render correctly", () => {
    const mainScreen = render(<MainScreen />);
    expect(mainScreen).toMatchSnapshot();
  });
});

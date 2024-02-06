import { render } from "@testing-library/react-native";
import Loading from "./Loading";

/*
1- Loading should be rendered
*/

describe("Loading Component Unit Tests", () => {
  test("should render correctly", () => {
    const loadingComponent = render(<Loading isLoading />);
    expect(loadingComponent).toMatchSnapshot();
  });
});

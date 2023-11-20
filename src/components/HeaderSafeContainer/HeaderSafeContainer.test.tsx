import { render } from "@testing-library/react-native";
import HeaderSafeContainer from "./HeaderSafeContainer";
import { Button } from "react-native";

/*
1- HeaderSafeContainer should be rendered.
2- HeaderSafeContainer should render childrens.
*/

describe("HeaderSafe Component Unit Tests", () => {
  test("should render correctly", () => {
    const headerSafeContainerComponent = render(
      <HeaderSafeContainer>
        <Button title="TestButton" />
      </HeaderSafeContainer>,
    );
    expect(headerSafeContainerComponent).toMatchSnapshot();
  });
  test("should display children component", () => {
    const headerSafeContainerComponent = render(
      <HeaderSafeContainer>
        <Button title="TestButton" testID="testButton" />
      </HeaderSafeContainer>,
    );
    const testButton = headerSafeContainerComponent.getByTestId("testButton");
    expect(testButton).not.toBeNull();
  });
});

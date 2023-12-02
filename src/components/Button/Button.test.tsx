import { fireEvent, render } from "@testing-library/react-native";
import Button from "./Button";

/*
1- Button should be rendered
*/

describe("Button Component Unit Tests", () => {
  test("should render correctly", () => {
    const buttonComponent = render(<Button text="Test Button" />);
    expect(buttonComponent).toMatchSnapshot();
  });

  test("should show button text", () => {
    const buttonComponent = render(<Button text="Test Button" />);
    const buttonChildren = buttonComponent.getByTestId("buttonText").children;
    const buttonName = buttonChildren.join("");
    expect(buttonName).toMatch("Test Button");
  });

  test("should be pressed and run the onPress function", () => {
    const mockFunction = jest.fn();
    const investmentCardComponent = render(<Button text="Test Button" onPress={mockFunction} testOnly_pressed />);
    const pressable = investmentCardComponent.getByTestId("pressable");
    fireEvent(pressable, "click");
    expect(mockFunction).toBeCalled();
  });
});

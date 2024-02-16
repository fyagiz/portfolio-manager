import { render, fireEvent } from "@testing-library/react-native";
import InvestmentCard from "./InvestmentCard";

/*
1- InvestmentCard should be rendered.
2- InvestmentCard should show investmentName.
3- InvestmentCard should show profit.
4- InvestmentCard should show profit percentage.
5- InvestmentCard should be pressed.
*/

describe("InvestmentCard Component Unit Tests", () => {
  test("should render correctly", () => {
    const investmentCardComponent = render(<InvestmentCard testID="test" investmentName="Test Fund" profit="5000 TL" profitPercentage="5" />);
    expect(investmentCardComponent).toMatchSnapshot();
  });

  test("should show investmentName", () => {
    const investmentCardComponent = render(<InvestmentCard testID="test" investmentName="Test Fund" profit="5000 TL" profitPercentage="5" />);
    const investmentCardChildren = investmentCardComponent.getByTestId("testInvestmentCardInvestmentName").children;
    const investmantName = investmentCardChildren.join("");
    expect(investmantName).toMatch("Test Fund");
  });

  test("should show profit", () => {
    const investmentCardComponent = render(<InvestmentCard testID="test" investmentName="Test Fund" profit="5000 TL" profitPercentage="5" />);
    const investmentCardChildren = investmentCardComponent.getByTestId("testInvestmentCardProfitNumber").children;
    const profit = investmentCardChildren.join("");
    expect(profit).toMatch("5000 TL");
  });

  test("should show profit percentage", () => {
    const investmentCardComponent = render(<InvestmentCard testID="test" investmentName="Test Fund" profit="5000 TL" profitPercentage="5" />);
    const investmentCardChildren = investmentCardComponent.getByTestId("testInvestmentCardPercentageNumber").children;
    const profitPercentage = investmentCardChildren.join("");
    expect(profitPercentage).toMatch("5");
  });

  test("should be pressed", () => {
    const mockFunction = jest.fn();
    const investmentCardComponent = render(
      <InvestmentCard testID="test" investmentName="Test Fund" profit="5000 TL" profitPercentage="5" onPress={mockFunction} testOnly_pressed />,
    );
    const pressable = investmentCardComponent.getByTestId("testInvestmentCardPressable");
    fireEvent(pressable, "click");
    expect(mockFunction).toBeCalled();
  });
});

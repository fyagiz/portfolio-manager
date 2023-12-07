import { render } from "@testing-library/react-native";
import { renderIcon } from "./renderIcon";

describe("Utils Unit Tests", () => {
  test("should renderIcon render Ionicons icons", () => {
    const icon = render(renderIcon({ iconType: "Ionicons", color: "red", iconName: "add", size: 24 }));
    expect(icon).toMatchSnapshot();
  });
  test("should renderIcon render MaterialCommunityIcons icons", () => {
    const icon = render(renderIcon({ iconType: "MaterialCommunityIcons", color: "red", iconName: "ab-testing", size: 24 }));
    expect(icon).toMatchSnapshot();
  });
  test("should renderIcon render unknown icons", () => {
    // To test default branch.
    // @ts-expect-error
    const icon = render(renderIcon({ iconType: "UnknownIcon", color: "red", iconName: "ab-testing", size: 24 }));
    expect(icon).toMatchSnapshot();
  });
});

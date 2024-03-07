import { render } from "@testing-library/react-native";
import InputField from "./InputField";

/*
1- InputField should be rendered
*/

describe("InputField Component Unit Tests", () => {
  test("should render correctly", () => {
    const inputField = render(<InputField testID="test" mode="capital_letter" inputText="test" textInputProps={{}} />);
    expect(inputField).toMatchSnapshot();
  });
});

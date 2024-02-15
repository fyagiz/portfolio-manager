import { render } from "@testing-library/react-native";
import DatePicker from "./DatePicker";

/*
1- DatePicker should be rendered.
*/

describe("DatePicker Component Unit Tests", () => {
  test("should render correctly", () => {
    const today = new Date();
    const onChange = jest.fn();
    const datePickerComponent = render(<DatePicker date={today} onChange={onChange} text="Text" textInputStyle={{}} />);
    expect(datePickerComponent).toMatchSnapshot();
  });
});

import { render } from "@testing-library/react-native";
import AddForm from "./AddForm";

/*
1- AddForm should be rendered
*/

describe("AddForm Component Unit Tests", () => {
  test("should render correctly", () => {
    const addForm = render(<AddForm testID="test" />);
    expect(addForm).toMatchSnapshot();
  });
});

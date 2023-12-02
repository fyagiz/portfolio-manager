import { render } from "@testing-library/react-native";
import AddAssetModal from "./AddAssetModal";

/*
1- AddAssetModal should be rendered
*/

describe("AddAssetModal Unit Tests", () => {
  test("should render correctly", () => {
    const addAssetModal = render(<AddAssetModal modalProps={{ visible: true }} />);
    expect(addAssetModal).toMatchSnapshot();
  });
});

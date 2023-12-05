import { render } from "@testing-library/react-native";
import AddAsset from "./AddAsset";

/*
1- AddAsset should be rendered
*/

describe("AddAssetModal Unit Tests", () => {
  test("should render correctly", () => {
    const addAssetModal = render(<AddAsset />);
    expect(addAssetModal).toMatchSnapshot();
  });
});

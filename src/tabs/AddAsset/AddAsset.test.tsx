import { render } from "@testing-library/react-native";
import AddAsset from "./AddAsset";

/*
1- AddAsset should be rendered
*/

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
      addListener: jest.fn(),
    }),
  };
});

describe("AddAsset Unit Tests", () => {
  test("should render correctly", () => {
    const addAssetModal = render(<AddAsset />);
    expect(addAssetModal).toMatchSnapshot();
  });
});

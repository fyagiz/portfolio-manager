import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

type IoniconsIconType = {
  iconType: "Ionicons";
  iconName: keyof typeof Ionicons.glyphMap;
};

type MaterialCommunityIconsType = {
  iconType: "MaterialCommunityIcons";
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
};

export type RenderIconType = (MaterialCommunityIconsType | IoniconsIconType) & {
  color: string;
  size: number;
};

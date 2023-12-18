import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { RenderIconType } from "./helpers.type";

const renderIcon = (renderIconSpecs: RenderIconType) => {
  const { iconType, iconName, color, size } = renderIconSpecs;
  switch (iconType) {
    case "Ionicons":
      return <Ionicons name={iconName} color={color} size={size} />;
    case "MaterialCommunityIcons":
      return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
    default:
      return <MaterialCommunityIcons name="map-marker-question" size={24} color="black" />;
  }
};

export default renderIcon;

import { Ionicons } from "@expo/vector-icons";

const renderIcon = (iconName: keyof typeof Ionicons.glyphMap, color: string, size: number) => {
  return <Ionicons name={iconName} color={color} size={size} />;
};

export default renderIcon;

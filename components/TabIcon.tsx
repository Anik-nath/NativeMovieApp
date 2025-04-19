import React from "react";
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  StyleSheet,
} from "react-native";

type TabIconProps = {
  label: string;
  icon: ImageSourcePropType;
  focused: boolean;
};

const TabIcon: React.FC<TabIconProps> = ({ label, icon, focused }) => {
  return (
    <View style={[styles.container, focused ? styles.focused : ""]}>
      <Image
        source={icon}
        style={[styles.icon, !focused && styles.iconUnfocused]}
      />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 1,
    paddingVertical: 6,
    marginTop: 10,
    borderRadius: 999,
    width: 90,
    height: 46,
    marginLeft: 20,
    marginRight: 20,
  },
  focused: {
    backgroundColor: "#5755f7", // purple-400
  },
  icon: {
    width: 20,
    height: 20,
  },
  iconUnfocused: {
    opacity: 0.5,
  },
  label: {
    marginLeft: 8,
    fontSize: 12,
    fontWeight: "600",
    color: "#fff",
  },
});

export default TabIcon;

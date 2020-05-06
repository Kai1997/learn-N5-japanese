import React from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 400
  },
  circle: {
    backgroundColor: "#ff4136",
    width: screen.width / 5,
    height: screen.width / 5,
    borderRadius: screen.width / 2,
    alignItems: "center",
    justifyContent: "center"
  },
  circleCorrect: {
    backgroundColor: "#28A125"
  },
  icon: {
    width: screen.width / 10
  }
});

export const Alert = ({ correct, visible }) => {
  if (!visible) return null;

  const icon = correct
    ? require("../assert/imgs/check.png")
    : require("../assert/imgs/close.png");

  const circleStyles = [styles.circle];

  if (correct) {
    circleStyles.push(styles.circleCorrect);
  }

  return (
    <View style={styles.container}>
      <View style={circleStyles}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
      </View>
      <Text>{correct?("Đúng rồi"):("Tiếc quá. Chọn lại nào.")}</Text>

    </View>
  );
};
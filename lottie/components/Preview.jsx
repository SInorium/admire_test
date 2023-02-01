import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

const Preview = () => {
  return (
    <View style={styles.animationContainer}>
      <LottieView
        style={{
          width: 400,
          height: 400,
        }}
        autoPlay
        source={require("../assets/lottie_animation.json")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default Preview;

import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, View } from "react-native";
export default function LoadingPage() {
  const activeIndex = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(activeIndex, {
          toValue: 3,
          duration: 1200,
          useNativeDriver: false,
        }),
        Animated.timing(activeIndex, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }, []);

  return (
    <View style={styles.view}>
      <LinearGradient
        colors={["#8C61B7", "#008CFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      >
        <Image
          source={require("../assets/images/logos/white-logo.png")}
          style={styles.icon}
          resizeMode="contain"
        />

        <Image
          source={require("../assets/images/logos/oralesion-name.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Loading */}
        <View style={styles.loadingContainer}>
          {[0, 1, 2, 3].map((index) => {
            const backgroundColor = activeIndex.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: ["#FFFFFF", "#8C61B7", "#FFFFFF"],
              extrapolate: "clamp",
            });

            return (
              <Animated.View
                key={index}
                style={[styles.square, { backgroundColor }]}
              />
            );
          })}
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 70,
    height: 70,
    marginBottom: 0,
  },
  logo: {
    width: 230,
    height: 80,
    marginBottom: 14,
  },
  loadingContainer: {
    flexDirection: "row",
    gap: 8,
  },
  square: {
    width: 30,
    height: 30,
    borderRadius: 3,
  },
});

import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

export function GradientIcon({
  icon,
  size,
  colors,
}: {
  icon: React.ReactNode;
  size: number;
  colors: string[];
}) {
  return (
    <MaskedView
      maskElement={
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon}
        </View>
      }
    >
      <LinearGradient
        colors={colors as any}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ width: size, height: size }}
      />
    </MaskedView>
  );
}

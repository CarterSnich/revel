import { MaterialIcons } from "@expo/vector-icons";
import {
  Pressable,
  PressableAndroidRippleConfig,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface ButtonProps extends PressableProps {
  icon?: keyof typeof MaterialIcons.glyphMap;
  text?: string;
}

const Button: React.FC<ButtonProps> = ({ text, icon, ...props }) => {
  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.button} {...props} android_ripple={rippleConfig}>
        {icon && <MaterialIcons name={icon} size={24} color="black" />}
        {text && <Text style={styles.text}>{text}</Text>}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    overflow: "hidden",
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#FC15A5",
    padding: 16,
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Inter_400Regular",
  },
});

const rippleConfig: PressableAndroidRippleConfig = {
  borderless: false,
  foreground: false,
};

export { Button };


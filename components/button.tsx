import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

interface ButtonProps extends PressableProps {
  icon?: keyof typeof MaterialIcons.glyphMap;
  text?: string;
}

const Button: React.FC<ButtonProps> = ({ text, icon, ...props }) => {
  return (
    <Pressable style={styles.button} {...props}>
      {icon && <MaterialIcons name={icon} size={24} color="black" />}
      {text && <Text style={styles.text}>{text}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FC15A5",
    padding: 16,
    borderRadius: 8,
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Inter_400Regular"
  },
});


export { Button };


import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface TextFieldProps extends TextInputProps {
  icon?: keyof typeof MaterialIcons.glyphMap;
}

const TextField: React.FC<TextFieldProps> = ({ icon, ...props }) => {
  return (
    <KeyboardAvoidingView>
      <View style={styles.inputField}>
        {icon && (
          <MaterialIcons
            name={icon}
            size={24}
            color="black"
            style={styles.icon}
          />
        )}
        <TextInput style={styles.textField} {...props} />
      </View>
    </KeyboardAvoidingView>
  );
};

const PasswordField: React.FC<TextFieldProps> = ({
  icon = "password",
  ...props
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.inputField}>
      <MaterialIcons name={icon} size={24} color="black" style={styles.icon} />
      <TextInput
        style={styles.textField}
        {...props}
        secureTextEntry={!isPasswordVisible}
      />
      <Pressable onPress={() => setPasswordVisible(!isPasswordVisible)}>
        {isPasswordVisible ? (
          <MaterialIcons name="visibility" size={24} color="black" />
        ) : (
          <MaterialIcons name="visibility-off" size={24} color="black" />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 8,
    gap: 8,
    elevation: 5,
    justifyContent: "center",

    padding: 12,
  },
  icon: {},
  textField: {
    fontSize: 16,
    flex: 1,
    fontFamily: "Inter_400Regular",
  },
});

export { PasswordField, TextField };


import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from "react-native";

enum FontStyle {
  Thin = "Inter_100Thin",
  ExtraLight = "Inter_200ExtraLight",
  Light = "Inter_300Light",
  Regular = "Inter_400Regular",
  Medium = "Inter_500Medium",
  SemiBold = "Inter_600SemiBold",
  Bold = "Inter_700Bold",
  ExtraBold = "Inter_800ExtraBold",
  Black = "Inter_900Black",
}
interface TextProps extends RNTextProps {
  fontStyle?: FontStyle;
  style?: TextStyle;
}

const Text: React.FC<TextProps> = ({
  children,
  fontStyle = FontStyle.Regular,
  style,
  ...props
}) => {
  return (
    <RNText style={{ fontFamily: fontStyle, ...style }} {...props}>
      {children}
    </RNText>
  );
};

export { FontStyle, Text };


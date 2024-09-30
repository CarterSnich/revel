import { Stack } from "expo-router/stack";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, animation: "fade" }}
      />
    </Stack>
  );
};
export default _layout;

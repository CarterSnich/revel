import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { Tabs } from "expo-router/tabs";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const Icon = (props) => <options.tabBarIcon {...props} />;
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={() => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            }}
            onLongPress={() => {
              navigation.emit({
                type: "tabLongPress",
                target: route.key,
              });
            }}
            key={index}
            style={styles.tab}
          >
            <Icon color={isFocused ? styles.tabTextFocus.color : "black"} />
            <Text style={isFocused ? styles.tabTextFocus : styles.tabText}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const _layout = () => {
  return (
    <Tabs
      sceneContainerStyle={styles.container}
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="translate"
        options={{
          title: "Translate",
          tabBarIcon: (props) => (
            <MaterialIcons name="translate" size={24} {...props} />
          ),
        }}
      />
      <Tabs.Screen
        name="lessons"
        options={{
          title: "Lessons",
          tabBarIcon: (props) => (
            <FontAwesome5 name="book-reader" size={24} {...props} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: (props) => (
            <FontAwesome name="user-circle" size={24} {...props} />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF0FA",
  },
  tabBar: {
    flexDirection: "row",
    textAlign: "center",
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    fontFamily: "Inter",
    backgroundColor: "white",
  },
  tabText: {
    fontFamily: "Inter",
  },
  tabTextFocus: {
    color: "#FC15A5",
    fontFamily: "Inter",
  },
});

export default _layout;

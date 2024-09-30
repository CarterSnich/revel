import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LessonsIndex = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./../../../../assets/icon.png")}
          style={styles.logo}
        />

        <View style={styles.search}>
          <Ionicons name="search" size={24} color="black" />

          <TextInput
            style={styles.searchInput}
            placeholder="Search "
            placeholderTextColor="#868DA0"
          />
        </View>

        <TouchableOpacity style={styles.headerButton}>
          <Ionicons
            name="options-outline"
            size={24}
            color={styles.headerButton.color}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.headerButton}>
          <FontAwesome5
            name="bell"
            size={24}
            color={styles.headerButton.color}
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollview}>
        <View style={styles.group}>
          <Text style={styles.groupTitle}>Tutorial</Text>
          <TouchableOpacity style={styles.groupItem}>
            <Text style={styles.itemEmoji}>🔤</Text>
            <View style={styles.item}>
              <Text style={styles.itemName}>Alphabet</Text>
              <Text style={styles.itemDescription}>A-Z</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.groupItem}>
            <Text style={styles.itemEmoji}>🔢</Text>
            <View style={styles.item}>
              <Text style={styles.itemName}>Numbers</Text>
              <Text style={styles.itemDescription}>0-9</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.group}>
          <Text style={styles.groupTitle}>Tutorial</Text>
          <TouchableOpacity style={styles.groupItem}>
            <Text style={styles.itemEmoji}>🔤</Text>
            <View style={styles.item}>
              <Text style={styles.itemName}>Alphabet</Text>
              <Text style={styles.itemDescription}>A-Z</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.groupItem}>
            <Text style={styles.itemEmoji}>🔢</Text>
            <View style={styles.item}>
              <Text style={styles.itemName}>Numbers</Text>
              <Text style={styles.itemDescription}>0-9</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.group}>
          <Text style={styles.groupTitle}>Tutorial</Text>
          <TouchableOpacity style={styles.groupItem}>
            <Text style={styles.itemEmoji}>🔤</Text>
            <View style={styles.item}>
              <Text style={styles.itemName}>Alphabet</Text>
              <Text style={styles.itemDescription}>A-Z</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.groupItem}>
            <Text style={styles.itemEmoji}>🔢</Text>
            <View style={styles.item}>
              <Text style={styles.itemName}>Numbers</Text>
              <Text style={styles.itemDescription}>0-9</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.group}>
          <Text style={styles.groupTitle}>Tutorial</Text>
          <TouchableOpacity style={styles.groupItem}>
            <Text style={styles.itemEmoji}>🔤</Text>
            <View style={styles.item}>
              <Text style={styles.itemName}>Alphabet</Text>
              <Text style={styles.itemDescription}>A-Z</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.groupItem}>
            <Text style={styles.itemEmoji}>🔢</Text>
            <View style={styles.item}>
              <Text style={styles.itemName}>Numbers</Text>
              <Text style={styles.itemDescription}>0-9</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.group}>
          <Text style={styles.groupTitle}>Tutorial</Text>
          <TouchableOpacity style={styles.groupItem}>
            <Text style={styles.itemEmoji}>🔤</Text>
            <View style={styles.item}>
              <Text style={styles.itemName}>Alphabet</Text>
              <Text style={styles.itemDescription}>A-Z</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.groupItem}>
            <Text style={styles.itemEmoji}>🔢</Text>
            <View style={styles.item}>
              <Text style={styles.itemName}>Numbers</Text>
              <Text style={styles.itemDescription}>0-9</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.group}>
          <Text style={styles.groupTitle}>Tutorial</Text>
          <TouchableOpacity style={styles.groupItem}>
            <Text style={styles.itemEmoji}>🔤</Text>
            <View style={styles.item}>
              <Text style={styles.itemName}>Alphabet</Text>
              <Text style={styles.itemDescription}>A-Z</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.groupItem}>
            <Text style={styles.itemEmoji}>🔢</Text>
            <View style={styles.item}>
              <Text style={styles.itemName}>Numbers</Text>
              <Text style={styles.itemDescription}>0-9</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.group}>
          <Text style={styles.groupTitle}>Tutorial</Text>
          <TouchableOpacity style={styles.groupItem}>
            <Text style={styles.itemEmoji}>🔤</Text>
            <View style={styles.item}>
              <Text style={styles.itemName}>Alphabet</Text>
              <Text style={styles.itemDescription}>A-Z</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.groupItem}>
            <Text style={styles.itemEmoji}>🔢</Text>
            <View style={styles.item}>
              <Text style={styles.itemName}>Numbers</Text>
              <Text style={styles.itemDescription}>0-9</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#1E1E1E",
    borderBottomWidth: 1,
    gap: 8,
  },
  logo: {
    height: 48,
    width: 48,
  },
  headerButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
    color: "black",
  },
  search: {
    flexGrow: 1,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    fontFamily: "Inter",
    fontSize: 16,
  },
  scrollview: {
    gap: 4,
  },
  group: {},
  groupTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  groupItem: {
    marginHorizontal: 16,
    paddingVertical: 16,
    paddingStart: 16,
    flexDirection: "row",
    gap: 12,

    alignItems: "center",
    borderBottomColor: "#141316",
    borderBottomWidth: 1,
  },
  itemEmoji: {
    fontSize: 24,
  },
  itemName: {
    fontSize: 18,
    fontFamily: "Inter",
  },
  itemDescription: {
    fontSize: 16,
    fontFamily: "Inter",
  },
});

export default LessonsIndex;

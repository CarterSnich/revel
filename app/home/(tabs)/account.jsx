import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../../../firebaseConfig";

const Account = () => {
  const [isForm, setIsForm] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.userProfile}
          source={require("./../../../assets/profile.png")}
        />
        <Text style={styles.fullname}>{auth.currentUser.emailVerified}</Text>
        <TouchableOpacity style={styles.progressLink}>
          <Text style={styles.progressLinkText}>Progress</Text>
          <FontAwesome6
            name="chevron-right"
            size={12}
            color={styles.progressLinkText.color}
          />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.profilePictureWrapper}>
          <View>
            <Image
              source={require("./../../../assets/profile.png")}
              style={styles.profilePicture}
            />
            <FontAwesome6
              style={styles.profilePictureEdit}
              name="pen-to-square"
              size={16}
              color="white"
            />
          </View>
        </View>
        <View style={styles.personalInformation}>
          <Text style={styles.headerText}>Personal information</Text>
          <View style={styles.infoViews}>
            <View style={styles.infoItem}>
              <MaterialIcons name="email" size={24} color="black" />
              <Text style={styles.infoLabel}>Email</Text>
              {isForm ? (
                <TextInput placeholder="Email" />
              ) : (
                <Text style={styles.infoText}>09123456789</Text>
              )}
            </View>
            <View style={styles.infoItem}>
              <FontAwesome5 name="user-alt" size={24} color="black" />
              <Text style={styles.infoLabel}>Name</Text>
              {isForm ? (
                <TextInput placeholder="Email" />
              ) : (
                <Text style={styles.infoText}>09123456789</Text>
              )}
            </View>
            <View style={styles.infoItem}>
              <FontAwesome6 name="phone" size={24} color="black" />
              <Text style={styles.infoLabel}>Phone number</Text>
              {isForm ? (
                <TextInput placeholder="Email" />
              ) : (
                <Text style={styles.infoText}>09123456789</Text>
              )}
            </View>
            <View style={styles.infoItem}>
              <MaterialIcons name="home-filled" size={24} color="black" />
              <Text style={styles.infoLabel}>Address</Text>
              {isForm ? (
                <TextInput placeholder="Email" />
              ) : (
                <Text style={styles.infoText}>09123456789</Text>
              )}
            </View>
            <Pressable style={styles.editProfileButton}>
              <Text style={styles.editProfileText}>Edit profile</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#1E1E1E",
    borderBottomWidth: 1,
    gap: 8,
  },
  userProfile: {
    height: 48,
    width: 48,
    backgroundColor: "#DCE3E1",
    borderRadius: 50,
  },
  fullname: {
    fontFamily: "Inter",
    fontSize: 18,
    flex: 1,
  },
  progressLink: {
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 8,
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 8,
    gap: 8,
    fontFamily: "Inter",
  },
  progressLinkText: {
    fontFamily: "Inter",
    fontSize: 12,
  },
  profilePictureWrapper: {
    flex: 1,
    padding: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  profilePicture: {
    height: 128,
    width: undefined,
    aspectRatio: 1,
    borderRadius: 64,
    borderColor: "black",
    borderWidth: 2,
  },
  profilePictureEdit: {
    position: "absolute",
    bottom: -4,
    right: -4,
  },
  personalInformation: {
    margin: 12,
    flex: 1,
    gap: 8,
  },
  headerText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
  },
  infoViews: {
    gap: 8,
  },
  infoItem: {
    flexDirection: "row",
    gap: 12,
    padding: 8,
    alignItems: "center",
    borderBottomColor: "#1E1E1E",
    borderBottomWidth: 2,
  },
  infoLabel: {
    fontFamily: "Inter",
    flex: 1,
    fontSize: 16,
  },
  infoText: {
    fontFamily: "Inter",
    flex: 1,
    textAlign: "right",
    fontSize: 16,
  },
  editProfileButton: {
    marginTop: 16,
    backgroundColor: "#FC15A5",
    borderColor: "#1E1E1E",
    // borderWidth: 2,
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  editProfileText: {
    fontFamily: "Poppins_500Medium",
    color: "white",
    fontSize: 16,
  },
});

export default Account;

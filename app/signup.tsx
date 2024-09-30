import { Link, router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { Button } from "~/components/button";
import { PasswordField, TextField } from "~/components/text-field";
import { actionCodeSettings, auth } from "~/firebaseConfig";
import { validateEmail } from "~/utils";

SplashScreen.preventAutoHideAsync();

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRetype, setPasswordRetype] = useState("");

  function signUp() {
    if (!email.length && !password.length && !passwordRetype.length) {
      Alert.alert("Sign up", "Please, fill-up all fields.", [
        {
          text: "Okay",
          style: "default",
        },
      ]);
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Sign up", "Invalid email format.", [
        {
          text: "Okay",
          style: "default",
        },
      ]);
      return;
    }

    if (password !== passwordRetype) {
      Alert.alert("Sign up", "Password does not match.", [
        {
          text: "Okay",
          style: "default",
        },
      ]);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sendEmailVerification(userCredential.user, actionCodeSettings)
          .then(() => {
            Alert.alert(
              "Sign up",
              "We've sent a verification link to your email. Please check your inbox and spam folder.",
              [{ text: "Ok" }]
            );
          })
          .catch((error) => {
            Alert.alert("Sign up", `${error.code}: ${error.message}.`, [
              {
                text: "Okay",
                style: "default",
              },
            ]);
          });

        router.replace("/");
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Sign up", `${error.code}: ${error.message}`, [
          {
            text: "Okay",
            style: "default",
          },
        ]);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Image source={require("./../assets/logo.png")} style={styles.logo} />
      </View>

      <View style={styles.form}>
        <Text style={styles.formText}>Sign up for account</Text>
        <TextField
          placeholder="Email"
          onChangeText={setEmail}
          textContentType="emailAddress"
          icon="email"
        />
        <PasswordField
          icon="password"
          placeholder="Password"
          textContentType="newPassword"
          onChangeText={setPassword}
        />
        <PasswordField
          placeholder="Re-type password"
          textContentType="newPassword"
          onChangeText={setPasswordRetype}
        />
        <Button text="Continue" onPress={signUp} />
      </View>

      <Link replace href="/" style={{ textAlign: "center", marginTop: 16 }}>
        Already have an account? Log in here.
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
    height: "100%",
    flexGrow: 1,
    paddingHorizontal: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "40%",
    height: undefined,
    aspectRatio: 1,
  },
  hero: {
    alignItems: "center",
    marginBottom: 48,
  },
  form: {
    gap: 16,
    width: "100%",
  },
  formText: {
    textAlign: "center",
    fontSize: 24,
  },
});

export default SignUp;

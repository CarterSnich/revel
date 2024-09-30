import { Link, router } from "expo-router";
import {
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Alert, Image, StyleSheet, View } from "react-native";
import { Button } from "~/components/button";
import { Text } from "~/components/text";
import { PasswordField, TextField } from "~/components/text-field";
import { actionCodeSettings, auth } from "../firebaseConfig";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function logIn() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.emailVerified) {
          router.replace("./home");
        } else {
          sendEmailVerification(user, actionCodeSettings)
            .then(() => {
              setPassword("");
              Alert.alert(
                "Log in",
                "We've sent a verification link to your email. Please check your inbox and spam folder.",
                [{ text: "Okay" }]
              );
            })
            .catch((error) => {
              console.error(RangeError);
            });
        }
      })
      .catch((error) => {
        Alert.alert("Login", `${error.code}: ${error.message}`, [
          {
            text: "Ok",
            style: "default",
          },
        ]);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Image source={require("~/assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>Revolutionizing E-Learning:</Text>
        <Text style={styles.title}>Sign Language</Text>
        <Text>Sign. Connect. Thrive.</Text>
        <Text>Welcome to our Sign Language App</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>Log in</Text>
        <TextField
          placeholder="Email"
          icon="email"
          textContentType="emailAddress"
          value={email}
          onChangeText={setEmail}
        />
        <PasswordField
          placeholder="Password"
          icon="password"
          onChangeText={setPassword}
          value={password}
        />
        <Button text="Log in" onPress={logIn} />
      </View>
      <Link
        replace
        href="/signup"
        style={{
          textAlign: "center",
          fontFamily: "Inter_400Regular",
          marginTop: 16,
        }}
      >
        Don't have an account? Sign up here.
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
  title: {
    fontSize: 28,
  },
  form: {
    gap: 16,
    width: "100%",
  },
  formText: {
    textAlign: "center",
    fontSize: 24,
  },
  inputGroup: {
    gap: 16,
  },
});

export default Index;

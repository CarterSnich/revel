import { sendEmailVerification } from "firebase/auth";
import { Alert, View } from "react-native";
import { Button } from "~/components/button";
import { Text } from "~/components/text";
import { actionCodeSettings, auth } from "~/firebaseConfig";

const Onboarding = () => {
  return (
    <View>
      <Text>Email: {auth.currentUser.email}</Text>
      <Text>Verified: {auth.currentUser.emailVerified ? "true" : "false"}</Text>
      <Text>Name: {auth.currentUser.displayName}</Text>

      {!auth.currentUser.emailVerified && (
        <Button
          text="Send verification"
          onPress={() => {
            sendEmailVerification(auth.currentUser, actionCodeSettings).then(
              () => {
                Alert.alert("", "Sent", [{ text: "Ok" }]);
              }
            );
          }}
        />
      )}
    </View>
  );
};

export default Onboarding;

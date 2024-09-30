import { sendEmailVerification } from "firebase/auth";
import { Alert, View } from "react-native";
import { Button } from "~/components/button";
import { Text } from "~/components/text";
import { actionCodeSettings, auth } from "~/firebaseConfig";

const Onboarding = () => {
  const user = auth.currentUser
  return (
    <View>
      <Text>Email: {user.email}</Text>
      <Text>Verified: {user.emailVerified ? "true" : "false"}</Text>
      <Text>Name: {user.displayName}</Text>

      {!user.emailVerified && (
        <Button
          text="Send verification"
          onPress={() => {
            sendEmailVerification(user, actionCodeSettings).then(
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

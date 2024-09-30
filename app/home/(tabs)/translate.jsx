import { FontAwesome5 } from "@expo/vector-icons";
import { Camera, CameraType } from "expo-camera";
import { useFocusEffect } from "expo-router";
import { useCallback, useRef, useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "~/components/text";

const Translate = () => {
  const [cameraState, setCameraState] = useState(true);
  const [type, setType] = useState(CameraType.back);
  const [_permission, requestPermission] = Camera.useCameraPermissions();
  const camera = useRef();

  requestPermission();

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  useFocusEffect(
    useCallback(() => {
      setCameraState(true);
      return () => {
        setCameraState(false);
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("~/assets/icon.png")}
          style={styles.logo}
        />
        <TouchableOpacity style={styles.headerButton}>
          <FontAwesome5 name="bell" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        <View style={styles.cameraWrapper}>
          {cameraState ? (
            <Camera ref={camera} style={styles.camera} type={type} ratio="4:3">
              <Pressable
                onPress={toggleCameraType}
                style={styles.cameraToggle}
              />
            </Camera>
          ) : (
            <View />
          )}
        </View>

        <View style={styles.translationsWrapper}>
          <Text numberOfLines={4} style={styles.translations}>
            Lorem ipsum dolor sit amet. Nam placeat delectus est accusamus culpa
            hic aliquam tempore ut blanditiis corporis ut aliquid molestias.
          </Text>
        </View>
      </View>
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
  },
  main: {
    flexGrow: 1,
    padding: 8,
  },
  cameraWrapper: {
    aspectRatio: 3 / 4,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "black",
  },
  camera: {
    aspectRatio: 3 / 4,
  },
  cameraToggle: {
    flexGrow: 1,
  },

  translationsWrapper: {
    flexGrow: 1,
    flexGrow: 1,
    justifyContent: "center",
  },
  translations: {
    padding: 16,
    fontSize: 24,
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default Translate;

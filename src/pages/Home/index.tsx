import { useState, useCallback } from "react";
import YouTubeIframe, { PLAYER_STATES } from "react-native-youtube-iframe";
import * as ScreenOrientation from "expo-screen-orientation";
import {
  View,
  ActivityIndicator,
  useWindowDimensions,
  Alert,
} from "react-native";

import { styles, videoHeight, screenSpace } from "./styles";

export function Home() {
  const { width } = useWindowDimensions();
  const videoWidth = width - screenSpace * 2;

  const [videoReady, setVideoReady] = useState(false);

  const onFullScreenChange = useCallback((isFullScreen: boolean) => {
    if (isFullScreen) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  }, []);

  const onChangeState = useCallback((state: string) => {
    if (state === PLAYER_STATES.ENDED) {
      Alert.alert("Gostou?", "Então deixa o seu like!");
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.player}>
        <YouTubeIframe
          videoId="ugxgtYSBFXw"
          width={videoWidth}
          height={videoReady ? videoHeight : 0}
          onReady={() => setVideoReady(true)}
          onFullScreenChange={onFullScreenChange}
          onChangeState={onChangeState}
        />
        {!videoReady && <ActivityIndicator color="red" size="large" />}
      </View>
    </View>
  );
}

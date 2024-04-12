import { useState } from "react";

import Nubank from "../../assets/nubank-96.png";
import Heading from "./components/Heading";

import {
  ArrowDown,
  Chat,
  Eye,
  EyeSlash,
  Fire,
  QrCode,
  UserPlus,
} from "phosphor-react-native";
import { FlatList, TouchableOpacity } from "react-native";

import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

import * as Styled from "./styles";

export default function Home() {
  const DATA = [
    {
      title: "Indicar amigos",
      component: <UserPlus size={24} color="#fff" />,
    },
    {
      title: "Cobrar",
      component: <Chat size={24} color="#fff" />,
    },
    {
      title: "Transferência",
      component: <ArrowDown size={24} color="#fff" />,
    },
  ];
  const [visible, setVisible] = useState(true);

  const translateY = useSharedValue(0);
  const contextY = useSharedValue(0);

  const DEVICE_HEIGHT = Dimensions.get("window").height;

  const gestureHandler = Gesture.Pan()
    .onStart((event) => (contextY.value = translateY.value))
    .onChange((event) => {
      translateY.value = contextY.value + event.translationY;

      if (translateY.value <= 0) return (translateY.value = 0);

      if (translateY.value >= DEVICE_HEIGHT * 0.36)
        return (translateY.value = DEVICE_HEIGHT * 0.36);
    })
    .onEnd((event) => {
      if (translateY.value <= 0) return (translateY.value = 0);

      if (translateY.value >= DEVICE_HEIGHT * 0.36)
        return (translateY.value = DEVICE_HEIGHT * 0.36);
    });

  const rStyledCard = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(translateY.value),
        },
      ],
    };
  }, []);

  const rStyledQrcode = useAnimatedStyle(() => {
    return {
      opacity: interpolate(translateY.value, [0, 300], [0, 1]),
      transform: [
        {
          scale: interpolate(translateY.value, [0, 300], [0, 1]),
        },
      ],
    };
  }, []);

  return (
    <Styled.Container>
      <Heading />
      <GestureDetector gesture={gestureHandler}>
        <Styled.GestureContainer>
          <Styled.Card style={rStyledCard}>
            <Styled.Heading>
              <Styled.Picture source={Nubank} resizeMode="cover" />
              <TouchableOpacity
                activeOpacity={0.72}
                onPress={() => setVisible((oldValue) => !oldValue)}
              >
                {visible === true ? (
                  <EyeSlash
                    size={24}
                    color="rgba(17, 17, 17, 0.7)"
                    weight="fill"
                  />
                ) : (
                  <Eye size={24} color="rgba(17, 17, 17, 0.7)" weight="fill" />
                )}
              </TouchableOpacity>
            </Styled.Heading>
            <Styled.Content>
              <Styled.Span>Saldo Disponível</Styled.Span>
              <Styled.Title>R$ {visible ? "7.611,25" : "*****"}</Styled.Title>
            </Styled.Content>
            <Styled.Footer>
              <Styled.Span
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "rgba(17, 17, 17, 0.7)",
                }}
              >
                Transferência de R$ 20 recebida de {"\n"} Carlos Acutis hoje às
                17:30.
              </Styled.Span>
            </Styled.Footer>
          </Styled.Card>
          <Styled.QRCode style={rStyledQrcode}>
            <QrCode size={260} color="#fff" />
            <Styled.Span>Pagamento Pix com QRCode</Styled.Span>
          </Styled.QRCode>
        </Styled.GestureContainer>
      </GestureDetector>
      <Styled.SelectContainer>
        <FlatList
          data={DATA}
          keyExtractor={(_, index) => `key=${index}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <Styled.Select activeOpacity={0.42}>
                {item.component}
                <Styled.Span style={{ color: "#fff" }}>
                  {item.title}
                </Styled.Span>
              </Styled.Select>
            );
          }}
        />
      </Styled.SelectContainer>
    </Styled.Container>
  );
}

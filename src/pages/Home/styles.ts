import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background: rgba(136, 68, 238, 0.95);
`;

export const GestureContainer = styled.View`
  flex: 1;
  position: relative;
  z-index: 100;
`;

export const Card = styled(Animated.View)`
  height: 360px;
  margin: 25px;

  background: #fff;
  border-radius: 4px;
`;

export const Heading = styled.View`
  height: 80px;
  flex-direction: row;

  padding: 18px 16px;
  align-items: center;
  justify-content: space-between;
`;

export const Picture = styled.Image`
  width: 40px;
  height: 20px;
`;

export const Content = styled.View`
  height: 200px;
  padding: 0 16px;

  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #111111;
`;

export const Span = styled.Text`
  font-size: 14px;
  color: #c2c2c2;
  margin-bottom: 4px;
`;

export const QRCode = styled(Animated.View)`
  flex: 1;
  position: absolute;

  width: 100%;
  padding: 0px 25px;

  align-items: center;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 12px 16px;

  border-radius: 4px;
  background-color: #d9d9d9;

  margin-top: auto;
`;

export const SelectContainer = styled(Animated.View)`
  width: 100%;
  padding: 12px 16px;

  border-radius: 4px;

  margin-top: auto;
  margin-bottom: 12px;

  bottom: 0;
`;

export const Select = styled.TouchableOpacity`
  position: relative;

  width: 150px;
  height: 120px;

  margin-right: 12px;
  padding: 18px;

  border-radius: 12px;
  background: rgba(136, 68, 238, 1);

  justify-content: space-between;
`;

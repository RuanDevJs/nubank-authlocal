import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Heading = styled.View`
  height: 260px;
  justify-content: center;
  align-items: flex-start;
  padding: 0 32px;
`;

export const Image = styled.Image`
  width: 40px;
  height: 20px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 32px;
`;

export const Text = styled.Text`
  font-size: 22px;
  color: #333;
  line-height: 24px;
`;

export const Description = styled.Text`
  font-size: 12px;
  color: #333;
`;

export const Footer = styled.View`
  font-size: 12px;
  color: #333;
  line-height: 24px;

  margin-top: 12px;
  padding: 0 32px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  background-color: #8844ee;
  padding: 14px 12px;

  justify-content: center;
  align-items: center;

  border-radius: 50px;
  margin-bottom: 12px;
`;

export const Buttontext = styled.Text`
  font-size: 18px;
  color: #fff;
  line-height: 24px;
`;

export const Advice = styled.View`
  padding: 14px 32px;
  background-color: #f2f2f2;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

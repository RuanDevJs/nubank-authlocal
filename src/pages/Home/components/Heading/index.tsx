import { Gear, Question } from "phosphor-react-native";
import * as Styled from "./styles";
import { TouchableOpacity } from "react-native";

export default function Heading() {
  return (
    <Styled.Container>
      <Styled.Heading>
        <Styled.Picture>
          <TouchableOpacity activeOpacity={0.72}>
            <Styled.Image source={require("../../../../assets/picture.png")} />
          </TouchableOpacity>
          <Styled.Notification />
        </Styled.Picture>
        <Styled.Icons>
          <TouchableOpacity activeOpacity={0.72}>
            <Gear size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.72}>
            <Question size={24} color="#fff" />
          </TouchableOpacity>
        </Styled.Icons>
      </Styled.Heading>
      <Styled.Text>Olá, Ruan Vitor</Styled.Text>
    </Styled.Container>
  );
}

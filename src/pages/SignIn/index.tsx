import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Alert, Switch, TouchableOpacity } from "react-native";
import { ArrowUpRight } from "phosphor-react-native";

import SVGImg from "../../assets/nubank-96.png";
import * as LocalAuthentication from "expo-local-authentication";

import * as Styled from "./styles";

export default function SignIn() {
  const navigate = useNavigation();
  const [activeSwitch, setActiveSwitch] = useState(false);

  async function verifyAvaliableLocalAuthentication() {
    const compatible = await LocalAuthentication.hasHardwareAsync();

    if (!compatible) {
      return Alert.alert("Dispositivo não compatível com sistema biométrico!");
    }
  }

  async function handleLocalAuthentication() {
    const isBiometricenrolled = await LocalAuthentication.isEnrolledAsync();

    if (!isBiometricenrolled) {
      return Alert.alert("Biometria não encontrada!");
    }

    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Desbloqueie seu celular.",
      cancelLabel: "Biometria não reconhecida",
    });

    if (auth) {
      navigate.navigate("Home");
    }
  }

  useEffect(() => {
    verifyAvaliableLocalAuthentication();
  }, []);

  return (
    <Styled.Container>
      <Styled.Heading>
        <Styled.Image source={SVGImg} />
      </Styled.Heading>
      <Styled.Content>
        <Styled.Text>
          Queremos deixar seu roxinho ainda mais protegido. Por isso, sempre
          vamos pedir uma senha para acessar o aplicativo.
        </Styled.Text>
        <TouchableOpacity
          activeOpacity={0.72}
          style={{ alignItems: "center", flexDirection: "row", marginTop: 16 }}
        >
          <Styled.Description>
            Saiba mais sobre essa iniciativa.{" "}
          </Styled.Description>
          <ArrowUpRight size={16} color="#8844ee" />
        </TouchableOpacity>
      </Styled.Content>
      <Styled.Footer>
        <Styled.ButtonContainer
          activeOpacity={0.72}
          onPress={handleLocalAuthentication}
        >
          <Styled.Buttontext>Usar senha do celular</Styled.Buttontext>
        </Styled.ButtonContainer>
        <Styled.Description style={{ paddingBottom: 24, textAlign: "center" }}>
          Essa senha é a mesma forma de validação que você {"\n"}usa para
          desbloquear seu celular.
        </Styled.Description>
      </Styled.Footer>
      <Styled.Advice>
        <Styled.Description style={{ width: 280 }}>
          Pular esta explicação da próxima vez que {"\n"}eu abrir o aplicativo
          do Nubank
        </Styled.Description>
        <Switch
          trackColor={{ false: "#3e3e3e", true: "#8844ee" }}
          thumbColor={activeSwitch ? "#8844ee" : "#fff"}
          onChange={() => setActiveSwitch((oldValue) => !oldValue)}
          value={activeSwitch}
        />
      </Styled.Advice>
    </Styled.Container>
  );
}

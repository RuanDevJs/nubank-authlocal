import styled from "styled-components/native";

export const Container = styled.View`
  height: 160px;
  justify-content: center;

  align-items: flex-start;
  padding: 0px 32px;

  background-color: #8844ee;
`;

export const Heading = styled.View`
  /* margin-top: 50px; */
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Icons = styled.View`
  /* margin-top: 50px; */
  flex-direction: row;
  gap: 12px;
`;

export const Picture = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  position: relative;
`;

export const Notification = styled.View`
  position: absolute;
  width: 15px;

  height: 15px;
  background-color: #fff;

  border-radius: 50px;
  border: 2px solid #8844ee;

  right: 0;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #fff;

  top: 20px;
`;

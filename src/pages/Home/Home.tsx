import React from "react";
import { IonContent, IonButton, IonPage } from "@ionic/react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "@pt/constants/routes";

const CenteredContent = styled(IonContent)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate(RoutePaths.PlayerInput);
  };

  return (
    <IonPage>
      <CenteredContent>
        <IonButton onClick={startGame}>Start Game</IonButton>
      </CenteredContent>
    </IonPage>
  );
};

export default HomePage;

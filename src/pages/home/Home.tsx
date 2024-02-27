import React from "react";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "@pt/constants/routes";
import { Explaination, HomeContainer } from "./Home.style";
import PanTalkButton from "@pt/shared/panTaclkButton/PanTaclkButton";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate(RoutePaths.PlayerInput);
  };

  return (
    <HomeContainer>
      <h1>PanTalk</h1>
      <Explaination>
        "Pan-Talk" is a riveting game of wits and words for teams of two, each
        identified by a unique color. Players select categories and take turns
        when their name reaches the circle's bottom. The challenge is to
        describe a word verbally to teammates without actually saying it. Use
        the 'helper' button strategically to swap the word or pause the game for
        a tactical edge. Be cautious though, as the round's timer ticks away! If
        a team's timer runs out, they lose the round, adding an exciting race
        against time. It's a thrilling blend of quick thinking, clever
        communication, and strategic gameplay! 🕒🚫🗣️.
      </Explaination>
      <PanTalkButton onClick={startGame}>Start Game</PanTalkButton>
    </HomeContainer>
  );
};

export default HomePage;

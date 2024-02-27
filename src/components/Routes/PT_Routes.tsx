import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "@pt/constants/routes";
import PlayerInputPage from "@pt/pages/PlayerInput/PlayerInput";
import Home from "@pt/pages/home/Home";
import PlayingGround from "@pt/pages/playingGround/PlayingGround";

const PT_Routes = () => {
  return (
    <Routes>
      <Route path={RoutePaths.Home} element={<Home />} />
      <Route path={RoutePaths.PlayerInput} element={<PlayerInputPage />} />
      <Route path={RoutePaths.PlayingGround} element={<PlayingGround />} />
    </Routes>
  );
};

export default PT_Routes;

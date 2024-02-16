import { Route, Routes } from "react-router-dom";
import PlayinGround from "@pt/pages/playinGround/PlayinGround";
import { RoutePaths } from "@pt/constants/routes";
import PlayerInputPage from "@pt/pages/PlayerInput/PlayerInput";
import Home from "@pt/pages/Home/Home";

const PT_Routes = () => {
  return (
    <Routes>
      <Route path={RoutePaths.Home} element={<Home />} />
      <Route path={RoutePaths.PlayerInput} element={<PlayerInputPage />} />
      <Route path={RoutePaths.PlayinGround} element={<PlayinGround />} />
    </Routes>
  );
};

export default PT_Routes;

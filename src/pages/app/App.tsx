import React from "react";
import { BrowserRouter } from "react-router-dom";
import PT_Routes from "../../components/Routes/PT_Routes";

const App: React.FC = () => (
    <BrowserRouter>
      <PT_Routes />
    </BrowserRouter>
);

export default App;

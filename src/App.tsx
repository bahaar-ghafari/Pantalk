import Main from "./pages/playinGround/PlayinGround";
import { setupIonicReact } from '@ionic/react';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/core.css';

setupIonicReact();

function App() {
  return <Main />;
}

export default App;

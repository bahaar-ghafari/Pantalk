import React from 'react';
import { setupIonicReact } from "@ionic/react";
import { IonApp, IonRouterOutlet, IonPage } from '@ionic/react';
import { BrowserRouter } from 'react-router-dom';
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/core.css";
import PT_Routes from './components/Routes/PT_Routes';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <BrowserRouter>
      <IonPage>
        <IonRouterOutlet>
         <PT_Routes/>
        </IonRouterOutlet>
      </IonPage>
    </BrowserRouter>
  </IonApp>
);

export default App;

import React,{ useState } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonModal
} from '@ionic/react';

const App: React.FC = () => {


  const [showModal, setShowModal] = useState(false);

  return (
    <IonApp>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>MainPage</IonCardSubtitle>
              <IonCardTitle>Under Construction</IonCardTitle>
            </IonCardHeader>
          </IonCard>
         

          <IonModal isOpen={showModal}>
            <p>Under Construction</p>
            <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
          </IonModal>
          <IonButton onClick={() => setShowModal(true)}>About Us</IonButton>
          
        </IonContent>
      </IonApp>
  );
}

export default App;

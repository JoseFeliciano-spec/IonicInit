import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
/* import ExploreContainer from '../components/ExploreContainer'; */
import './Tab3.css';
import TerceraTab from '../components/TerceraTab';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Historia Hibrida</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <TerceraTab />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;

import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import SegundaTab from '../components/SegundaTab';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Historia Nativa </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <SegundaTab />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

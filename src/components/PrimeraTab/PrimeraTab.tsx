import React from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';
import './PrimeraTab.css';

const PrimeraTab: React.FC = () => {
    return (
        <IonContent>
            {/*-- List of Text Items --*/}
            <IonList className="contenedor">
                <IonItem>
                    <IonLabel>Nombre: José Feliciano Anaya Simanca</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>DNI: 1048434066</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>Cel: 30158512179</IonLabel>
                </IonItem>
            </IonList>
        </IonContent>
    )
}
export default PrimeraTab;
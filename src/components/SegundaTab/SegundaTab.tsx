import React from 'react';
import './SegundaTab.css';
import { IonLabel } from '@ionic/react';

const palabra = 'Una aplicación móvil, también conocida como aplicación móvil o simplemente aplicación, es un programa informático o una aplicación de software diseñada para ejecutarse en un dispositivo móvil, como un teléfono, tableta o reloj. Las aplicaciones originalmente estaban destinadas a la asistencia de productividad, como correo electrónico, calendario y bases de datos de contactos, pero la demanda pública de aplicaciones provocó una rápida expansión a otras áreas como juegos móviles, automatización de fábricas, GPS y servicios basados ​​en la ubicación, seguimiento de pedidos y tickets. compras, de modo que ahora hay millones de aplicaciones disponibles. Las aplicaciones generalmente se descargan de plataformas de distribución de aplicaciones que son operadas por el propietario del sistema operativo móvil, como App Store (iOS) o Google Play Store. Algunas aplicaciones son gratuitas y otras tienen un precio, y el beneficio se divide entre el creador de la aplicación y la plataforma de distribución. Las aplicaciones móviles a menudo contrastan con las aplicaciones de escritorio que están diseñadas para ejecutarse en computadoras de escritorio y las aplicaciones web que se ejecutan en navegadores web móviles en lugar de directamente en el dispositivo móvil, pero todo comienza en la medida de que estas se crean bajo los sdk nativos que suministran las empresas que mantienen a estas, pues usan cada gota del hardware que tiene que ofrecer de manera eficiente además que aporta seguridad';
const SegundaTab: React.FC = () => {
    return (
        <div className="contenedor-hibrida">
            <IonLabel className="text-principal">
                Historia de las aplicaciones Nativas
            </IonLabel>
            <IonLabel className="text-secundario">
                {palabra}
            </IonLabel>
        </div>
    )
}
export default SegundaTab;
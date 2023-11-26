import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import React from 'react';
import { checkmarkDoneCircleOutline } from 'ionicons/icons';


const Register: React.FC = () => {
    const router = useIonRouter();
    const doRegister = (event: any) => {
        event.preventDefault();
        console.log('doRegister');
        router.goBack();

    }
    return (
        <IonPage>
            <IonHeader >
                <IonToolbar color={'success'}>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <IonGrid fixed>
                    <IonRow className='ion-justify-content-center'>
                        <IonCol size="12" sizeMd='8' sizeLg='6' sizeXl='4'>
                            <IonCard>
                                <IonCardContent>
                                    <form onSubmit={doRegister}>
                                        <IonInput fill='outline' labelPlacement='floating' type='text' label='Pseudo' placeholder='test@example.com'></IonInput>
                                        <IonInput fill='outline' className='ion-margin-top' labelPlacement='floating' type='email' label='Email' placeholder='test@example.com'></IonInput>
                                        <IonInput fill='outline' labelPlacement='floating' className='ion-margin-top' type='password' label='Password' placeholder='Password'></IonInput>
                                        <IonInput fill='outline' labelPlacement='floating' className='ion-margin-top' type='password' label='Confirme Password' placeholder='Confirm password'></IonInput>
                                        <IonButton className='ion-margin-top' type='submit' expand='block'>Create my account
                                            <IonIcon icon={checkmarkDoneCircleOutline} slot='end' />
                                        </IonButton>
                                    </form>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Register;
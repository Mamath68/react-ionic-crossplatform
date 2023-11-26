import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import FCC from '../assets/fcc.svg'
import { logInOutline, personCircleOutline } from 'ionicons/icons';
import Intro from '../components/Intro';
import { Preferences } from '@capacitor/preferences';

const INTRO_KEY = 'intro-seen';

const Login: React.FC = () => {
    const router = useIonRouter();
    const [introSeen, setIntroSeen] = useState(false);
    const [present, dismiss] = useIonLoading();

    useEffect(() => {
        const checkStorage = async () => {
            const seen = await Preferences.get({ key: INTRO_KEY });
            // console.log("🚀 ~ file: Login.tsx:18 ~ checkStorage ~ seen:", seen)
            setIntroSeen(seen.value === 'true');
        }
        checkStorage();
    }, [])
    const doLogin = async (event: any) => {
        event.preventDefault();
        await present('Logging in ...');
        setTimeout(async () => {
            dismiss();
            router.push('/app', 'root');
        }, 2000)
    }

    const finishIntro = async () => {
        console.log('FIN');
        setIntroSeen(true);
        Preferences.set({ key: INTRO_KEY, value: 'true' });
    };

    const seeIntroAgain = () => {
        setIntroSeen(false);
        Preferences.remove({ key: INTRO_KEY });
    }


    return (
        <>
            {!introSeen ? (
                <Intro onFinish={finishIntro} />
            ) : (
                <IonPage>
                    <IonHeader >
                        <IonToolbar color={'success'}>
                            <IonTitle>Login</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent scrollY={false} className='ion-padding'>
                        <IonGrid fixed>
                            <IonRow className='ion-justify-content-center'>
                                <IonCol size="12" sizeMd='8' sizeLg='6' sizeXl='4'>
                                    <div className='ion-text-center ion-padding'>
                                        <img src={FCC} alt="FCC Logo" width={'50%'} />
                                    </div>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                        <IonGrid fixed>
                            <IonRow className='ion-justify-content-center'>
                                <IonCol size="12" sizeMd='8' sizeLg='6' sizeXl='4'>
                                    <IonCard>
                                        <IonCardContent>
                                            <form onSubmit={doLogin}>
                                                <IonInput fill='outline' labelPlacement='floating' type='email' label='Email' placeholder='test@example.com'></IonInput>
                                                <IonInput fill='outline' labelPlacement='floating' className='ion-margin-top' type='password' label='Password' placeholder='Password'></IonInput>
                                                <IonButton className='ion-margin-top' type='submit' expand='block'>Login
                                                    <IonIcon icon={logInOutline} slot='end' />
                                                </IonButton>
                                                <IonButton routerLink='/register' color={'secondary'} className='ion-margin-top' type='button' expand='block'>Create account
                                                    <IonIcon icon={personCircleOutline} slot='end' />
                                                </IonButton>
                                                <IonButton onClick={seeIntroAgain} size='small' fill='clear' color={'medium'} className='ion-margin-top' type='button' expand='block'>
                                                    Watch intro again
                                                </IonButton>
                                            </form>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonContent>
                </IonPage>
            )}
        </>
    );
};

export default Login;
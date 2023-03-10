import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent} from '@ionic/react';
// import { useParams } from 'react-router';
// import ExploreContainer from '../components/ExploreContainer';
import './Schedule.css';
import { IonItem, IonLabel, IonCol, IonGrid,  IonRow, IonAvatar } from '@ionic/react';
// import { IonList, IonSelect, IonSelectOption, IonIcon, IonThumbnail } from '@ionic/react';
// import { IonReactRouter } from '@ionic/react-router';
import { Link} from 'react-router-dom';

// import Menu from '../components/Menu';




const Schedule: React.FC = () => {
    // const current = new Date();
    // const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    // const { name } = useParams<{ name: string; }>();

    return (

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Thời khóa biểu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='container'>
                <IonCard className='card-home'>
                    <IonCardContent className='card-content'>
                        <IonGrid>
                            <IonRow className='row'>
                                <IonCol><IonLabel className='lable-name'>Họ và tên :</IonLabel></IonCol>
                                <IonCol className='tt' size='7'>
                                    <h5>Nguyễn Văn A</h5>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>

                <Link to='/scheduleDetail'>
                    <IonItem button  detail={true} className="item-list"    >
                        <IonAvatar className='img-list'>
                            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                        </IonAvatar>
                        <IonLabel style={{ marginLeft: "10px", marginRight: "15px", fontSize: "20px" }} slot='end'>Thứ 2</IonLabel>
                    </IonItem>
                </Link>
                <Link to='/scheduleDetail'>
                    <IonItem button detail={true} className="item-list"    >
                        <IonAvatar className='img-list'>
                            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                        </IonAvatar>
                        <IonLabel style={{ marginLeft: "10px", marginRight: "15px", fontSize: "20px" }} slot='end'>Thứ 3</IonLabel>
                    </IonItem>
                </Link>
                <Link to='/scheduleDetail'>
                    <IonItem button detail={true} className="item-list"    >
                        <IonAvatar className='img-list'>
                            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                        </IonAvatar>
                        <IonLabel style={{ marginLeft: "10px", marginRight: "15px", fontSize: "20px" }} slot='end'>Thứ 4</IonLabel>
                    </IonItem>
                </Link>
                <Link to='/scheduleDetail'>
                    <IonItem button detail={true} className="item-list"    >
                        <IonAvatar className='img-list'>
                            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                        </IonAvatar>
                        <IonLabel style={{ marginLeft: "10px", marginRight: "15px", fontSize: "20px" }} slot='end'>Thứ 5</IonLabel>
                    </IonItem>
                </Link>
                <Link to='/scheduleDetail'>
                    <IonItem button detail={true} className="item-list"    >
                        <IonAvatar className='img-list'>
                            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                        </IonAvatar>
                        <IonLabel style={{ marginLeft: "10px", marginRight: "15px", fontSize: "20px" }} slot='end'>Thứ 6</IonLabel>
                    </IonItem>
                </Link>
                <Link to='/scheduleDetail'>
                    <IonItem button detail={true} className="item-list"  style={{backgroundColor:"#9400D3"}}  >
                        <IonAvatar className='img-list'>
                            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                        </IonAvatar>
                        <IonLabel style={{ marginLeft: "10px", marginRight: "15px", fontSize: "20px" }} slot='end'>Thứ 7</IonLabel>
                    </IonItem>
                </Link>
                <Link to='/scheduleDetail'>
                    <IonItem button detail={true} className="item-list" style={{backgroundColor:"#FF7F50"}}>
                        <IonAvatar className='img-list'>
                            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                        </IonAvatar>
                        <IonLabel style={{ marginLeft: "10px", marginRight: "15px", fontSize: "20px" }} slot='end'>Chủ nhật</IonLabel>
                    </IonItem>
                </Link>
            </IonContent>
            {/* <FooterBar></FooterBar> */}
        </IonPage >
    );
};

export default Schedule;

import { IonButtons, IonContent, IonHeader, IonBackButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './News_open.css';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonBreadcrumb, IonBreadcrumbs, IonIcon, IonLabel } from '@ionic/react';
import { camera, film, flash, home,notifications ,newspaper} from 'ionicons/icons';
const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
     <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Tin tức</IonTitle>
        </IonToolbar>
      </IonHeader>
    
      <IonContent fullscreen>
            <IonCard className="card_none">
              <IonCardHeader className="card_h">
                <IonCardTitle className="triangle"><p className="text">SỞ GIÁO DỤC VÀ ĐÀO TẠO TPHCM</p></IonCardTitle>
              </IonCardHeader>

              <IonCardContent className="content">
              HOẠT ĐỘNG KÉO CO TẠI TRƯỜNG HỌC  NGÀY 22/12/22222
              </IonCardContent>
              <IonCardContent className="p-2">
              <IonBreadcrumbs>
                <IonBreadcrumb href="/home">
                  Home
                  <IonIcon slot="end" icon={home}></IonIcon>
                </IonBreadcrumb>
                <IonBreadcrumb href="/notification">
                  Thông báo
                  <IonIcon slot="end" icon={notifications}></IonIcon>
                </IonBreadcrumb>
                <IonBreadcrumb href="/news">
                  Tin tức
                  <IonIcon slot="end" icon={newspaper}></IonIcon>
                </IonBreadcrumb>
              </IonBreadcrumbs>
              </IonCardContent>
            </IonCard>
            <IonCard>
            <img alt="Silhouette of mountains" src="https://edu.viettel.vn/upload/49555/fck/files/cb4d9baaa7ed5ab303fc.jpg" />
            <IonCardSubtitle className="anh">Hình 1: Hoạt động đầu giờ của trường</IonCardSubtitle>
            <IonCardContent className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus viverra lectus sit amet lobortis.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque faucibus
          consectetur mauris eget lobortis. Maecenas efficitur efficitur mauris ac vehicula. Sed ut lectus laoreet,
          semper nisi vel, maximus massa. Duis at lorem vitae sem auctor condimentum a at neque. Phasellus vel
          scelerisque dui. Morbi varius nibh eu finibus rutrum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus viverra lectus sit amet lobortis.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque faucibus
          consectetur mauris eget lobortis. Maecenas efficitur efficitur mauris ac vehicula. Sed ut lectus laoreet,
          semper nisi vel, maximus massa. Duis at lorem vitae sem auctor condimentum a at neque. Phasellus vel
          scelerisque dui. Morbi varius nibh eu finibus rutrum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus viverra lectus sit amet lobortis.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque faucibus
          consectetur mauris eget lobortis. Maecenas efficitur efficitur mauris ac vehicula. Sed ut lectus laoreet,
          semper nisi vel, maximus massa. Duis at lorem vitae sem auctor condimentum a at neque. Phasellus vel
          scelerisque dui. Morbi varius nibh eu finibus rutrum.
            </IonCardContent>
            <img alt="Silhouette of mountains" src="https://edu.viettel.vn/upload/49555/fck/files/cb4d9baaa7ed5ab303fc.jpg" />
            <IonCardSubtitle className="anh">Hình 1: Hoạt động đầu giờ của trường</IonCardSubtitle>
            <IonCardContent className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus viverra lectus sit amet lobortis.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque faucibus
          consectetur mauris eget lobortis. Maecenas efficitur efficitur mauris ac vehicula. Sed ut lectus laoreet,
          semper nisi vel, maximus massa. Duis at lorem vitae sem auctor condimentum a at neque. Phasellus vel
          scelerisque dui. Morbi varius nibh eu finibus rutrum.
            </IonCardContent>
            <img alt="Silhouette of mountains" src="https://edu.viettel.vn/upload/49555/fck/files/cb4d9baaa7ed5ab303fc.jpg" />
            <IonCardSubtitle className="anh">Hình 1: Hoạt động đầu giờ của trường</IonCardSubtitle>
            <IonCardContent className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus viverra lectus sit amet lobortis.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque faucibus
          consectetur mauris eget lobortis. Maecenas efficitur efficitur mauris ac vehicula. Sed ut lectus laoreet,
          semper nisi vel, maximus massa. Duis at lorem vitae sem auctor condimentum a at neque. Phasellus vel
          scelerisque dui. Morbi varius nibh eu finibus rutrum.
          
            </IonCardContent>
          </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Page;

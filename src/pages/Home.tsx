import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,

} from "@ionic/react";
import { useParams } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/react';
import { camera, film, flash, home,notifications ,newspaper} from 'ionicons/icons';
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import { IonSearchbar } from "@ionic/react";
import Menu from "../components/Menu";
import { searchCircle } from "ionicons/icons";
import { IonRippleEffect } from "@ionic/react";
import React from "react";
import { IonList, IonThumbnail } from "@ionic/react";
import { IonCol, IonGrid, IonInput, IonRow } from "@ionic/react";
import { IonIcon } from "@ionic/react";
import { logoIonic, cloudDownload, image,earth, call,location } from "ionicons/icons";
import { Link } from "react-router-dom";
const Home: React.FC = () => {
  // const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="container">
        <IonLabel>
          <div className="titie2 ">Hoạt động tiêu biểu</div>
        </IonLabel>
        <IonItem className="itemTt">
          <div className="container2">
            <div id="carousel">
              <figure>
                <img src="https://edu.viettel.vn/upload/49555/fck/files/cb4d9baaa7ed5ab303fc.jpg" />
              </figure>
              <figure>
                <img src="https://kinhtenongthon.vn/srv_thumb.ashx?w=300&h=200&f=data/data/Baoinktnt/2017/Thang%2011/Ngay%2024/tr13.JPG" />
              </figure>
              <figure>
                <img src="https://cdnmedia.baotintuc.vn/Upload/gYJXHsn6VBCJnSv7rj8xYQ/files/2022/04/anhdo.jpg" />
              </figure>
              <figure>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzlhxXOkqcxaDelO0kpUFTWLSvQeyYaz-woQ&usqp=CAU" />
              </figure>
              <figure>
                <img src="https://lawnet.vn/uploads/image/2020/02/12/084151060.jpg" />
              </figure>
              <figure>
                <img src="https://lawnet.vn/uploads/image/2020/02/12/084151060.jpg" />
              </figure>
              <figure>
                <img src="https://media.baodansinh.vn/files/content/2022/01/19/mam-non-151911.jpg" />
              </figure>
              <figure>
                <img src="https://i.imgur.com/DjwL2R8.jpg" />
              </figure>
              <figure>
                <img src="https://i.imgur.com/ZCeK0MQ.jpg" />
              </figure>
            </div>
          </div>
        </IonItem>
        <IonItem className="itemTt2">
          {/* <IonLabel>
            <div className="titiel">Tin Tức hôm nay</div>
          </IonLabel> */}
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
        </IonItem>
        <IonSearchbar></IonSearchbar>
        <div className="list-group">
        <Link to="/News_open" className="list-group-item  p-0 list-group-item-action">
          <IonCard className="card-news cl">
            <img
              alt="Silhouette of mountains"
              src="http://baoninhbinh.org.vn/Images/Uploaded/Share/2016/10/19/Untitled2-copy11.jpg"
            />
            <IonCardHeader className="pd">
              <IonCardTitle className="font">
                Hoạt động kéo co tại trường học Văn An ( ngày 20/2/2022)
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent className="news">
              Thông tin sở giáo dục và đào tạo hoạt động trường dự trên, tin sở
              giáo dục và đào tạo hoạt động trường dự trên ...
              <IonCardSubtitle className="color-tt">
                Ngày đăng tải: 22/2/2022
              </IonCardSubtitle>
              <IonCardSubtitle className="color-11">Đọc thêm...</IonCardSubtitle>
              <IonCardSubtitle className=""></IonCardSubtitle>
            </IonCardContent>
          </IonCard>
        </Link>
        <Link to="/News_open" className="list-group-item  p-0 list-group-item-action">
          <IonCard className="card-news cl">
            <img
              alt="Silhouette of mountains"
              src="http://baoninhbinh.org.vn/Images/Uploaded/Share/2016/10/19/Untitled2-copy11.jpg"
            />
            <IonCardHeader className="pd">
              <IonCardTitle className="font">
                Hoạt động kéo co tại trường học Văn An ( ngày 20/2/2022)
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent className="news">
              Thông tin sở giáo dục và đào tạo hoạt động trường dự trên, tin sở
              giáo dục và đào tạo hoạt động trường dự trên ...
              <IonCardSubtitle className="color-tt">
                Ngày đăng tải: 22/2/2022
              </IonCardSubtitle>
              <IonCardSubtitle className="color-11">Đọc thêm...</IonCardSubtitle>
              <IonCardSubtitle className=""></IonCardSubtitle>
            </IonCardContent>
          </IonCard>
        </Link>
        <Link to="/News_open" className="list-group-item  p-0 list-group-item-action">
          <IonCard className="card-news cl">
            <img
              alt="Silhouette of mountains"
              src="http://baoninhbinh.org.vn/Images/Uploaded/Share/2016/10/19/Untitled2-copy11.jpg"
            />
            <IonCardHeader className="pd">
              <IonCardTitle className="font">
                Hoạt động kéo co tại trường học Văn An ( ngày 20/2/2022)
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent className="news">
              Thông tin sở giáo dục và đào tạo hoạt động trường dự trên, tin sở
              giáo dục và đào tạo hoạt động trường dự trên ...
              <IonCardSubtitle className="color-tt">
                Ngày đăng tải: 22/2/2022
              </IonCardSubtitle>
              <IonCardSubtitle className="color-11">Đọc thêm...</IonCardSubtitle>
              <IonCardSubtitle className=""></IonCardSubtitle>
            </IonCardContent>
          </IonCard>
        </Link>
        <Link to="/News_open" className="list-group-item  p-0 list-group-item-action">
          <IonCard className="card-news cl">
            <img
              alt="Silhouette of mountains"
              src="http://baoninhbinh.org.vn/Images/Uploaded/Share/2016/10/19/Untitled2-copy11.jpg"
            />
            <IonCardHeader className="pd">
              <IonCardTitle className="font">
                Hoạt động kéo co tại trường học Văn An ( ngày 20/2/2022)
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent className="news">
              Thông tin sở giáo dục và đào tạo hoạt động trường dự trên, tin sở
              giáo dục và đào tạo hoạt động trường dự trên ...
              <IonCardSubtitle className="color-tt">
                Ngày đăng tải: 22/2/2022
              </IonCardSubtitle>
              <IonCardSubtitle className="color-11">Đọc thêm...</IonCardSubtitle>
              <IonCardSubtitle className=""></IonCardSubtitle>
            </IonCardContent>
          </IonCard>
        </Link>
        </div>
        <IonCard>
          <IonCardHeader className="notifile">
            <IonCardTitle>Thông báo mới</IonCardTitle>
            <IonCardSubtitle className="colordate">
              ngày 22/12/2022
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent className="pg">
            <IonList className="pd0">
              <IonItem className="item-inner" button detail={true}>
                <IonThumbnail className="img" slot="start">
                  <img
                    className="img2"
                    alt="Silhouette of mountains"
                    src="http://baoninhbinh.org.vn/Images/Uploaded/Share/2016/10/19/Untitled2-copy11.jpg"
                  />
                </IonThumbnail>
                <IonLabel>
                  <IonRow>
                    <IonCol>
                      <IonLabel>
                        <h2>Thông báo Hợp phụ huynh ngày 20/3/2022</h2>
                        <div className="dp">
                          <IonIcon
                            className="icondownload"
                            icon={image}
                          ></IonIcon>{" "}
                          <div className="noti">
                            Thông báo đến phụ huynh.pnj
                          </div>
                        </div>
                      </IonLabel>
                    </IonCol>
                  </IonRow>
                </IonLabel>
              </IonItem>

              <IonItem className="item-inner" button detail={true}>
                <IonThumbnail className="img" slot="start">
                  <img
                    className="img2"
                    alt="Silhouette of mountains"
                    src="http://baoninhbinh.org.vn/Images/Uploaded/Share/2016/10/19/Untitled2-copy11.jpg"
                  />
                </IonThumbnail>
                <IonLabel>
                  <IonRow>
                    <IonCol>
                      <IonLabel>
                        <h2>Thông báo Hợp phụ huynh ngày 20/3/2022</h2>
                        <div className="dp">
                          <IonIcon
                            className="icondownload"
                            icon={image}
                          ></IonIcon>{" "}
                          <div className="noti">
                            Thông báo đến phụ huynh.pnj
                          </div>
                        </div>
                      </IonLabel>
                    </IonCol>
                  </IonRow>
                </IonLabel>
              </IonItem>

              <IonItem className="item-inner" button detail={true}>
                <IonThumbnail className="img" slot="start">
                  <img
                    className="img2"
                    alt="Silhouette of mountains"
                    src="http://baoninhbinh.org.vn/Images/Uploaded/Share/2016/10/19/Untitled2-copy11.jpg"
                  />
                </IonThumbnail>
                <IonLabel>
                  <IonRow>
                    <IonCol>
                      <IonLabel>
                        <h2>Thông báo Hợp phụ huynh ngày 20/3/2022</h2>
                        <div className="dp">
                          <IonIcon
                            className="icondownload"
                            icon={image}
                          ></IonIcon>{" "}
                          <div className="noti">
                            Thông báo đến phụ huynh.pnj
                          </div>
                        </div>
                      </IonLabel>
                    </IonCol>
                  </IonRow>
                </IonLabel>
              </IonItem>

              <IonItem className="item-inner" button detail={true}>
                <IonThumbnail className="img" slot="start">
                  <img
                    className="img2"
                    alt="Silhouette of mountains"
                    src="http://baoninhbinh.org.vn/Images/Uploaded/Share/2016/10/19/Untitled2-copy11.jpg"
                  />
                </IonThumbnail>
                <IonLabel>
                  <IonRow>
                    <IonCol>
                      <IonLabel>
                        <h2>Thông báo Hợp phụ huynh ngày 20/3/2022</h2>
                        <div className="dp">
                          <IonIcon
                            className="icondownload"
                            icon={image}
                          ></IonIcon>{" "}
                          <div className="noti">
                            Thông báo đến phụ huynh.pnj
                          </div>
                        </div>
                      </IonLabel>
                    </IonCol>
                  </IonRow>
                </IonLabel>
              </IonItem>
            </IonList>
            <IonCardHeader className="notifile2">
              <IonCardSubtitle className="colordate">
                <IonRow>
                  <IonCol className="text1" size="6">
                    January 20, 2015
                  </IonCol>
                  <IonCol className="text2" size="6">
                    Xem thêm...
                  </IonCol>
                </IonRow>
              </IonCardSubtitle>
            </IonCardHeader>
          </IonCardContent>
          <IonLabel>
            <h1 className="titiel mt-2 mb-2">Giới thiệu:</h1>
          </IonLabel>
          <IonCard className="card-news cl-2 m-0">
            <img
              alt="Silhouette of mountains"
              src="https://bcp.cdnchinhphu.vn/Uploaded/phungthithuhuyen/2020_06_16/Resize%20of%20truonghoc.png"
            />
            <IonCardHeader className="pd">
              <IonCardTitle className="font font2">
                Trường tiểu học Lê Qúy Đôn
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent className="news">
              Thông tin sở giáo dục và đào tạo hoạt động trường dự trên, tin sở
              giáo dục và đào tạo hoạt động trường dự trên ...
              <IonCardSubtitle className="">
                <IonCardContent className="pg p-0 cl">
                  <IonList className="pd0">
                    <IonList className="">
                      <IonItem className="h ">
                        <IonThumbnail className="m-0   text-center" slot="start">
                           <IonIcon className="iconic "icon={earth}></IonIcon>
                        </IonThumbnail>
                        <IonLabel className="m-0 p-0 ">www.eclo.vn</IonLabel>
                      </IonItem>

                      <IonItem className="h">
                        <IonThumbnail className="m-0 text-center" slot="start">
                        <IonIcon className="iconic"icon={call}></IonIcon>
                        </IonThumbnail>
                        <IonLabel className="m-0">070099999</IonLabel>
                      </IonItem>

                      <IonItem className="h">
                        <IonThumbnail className="m-0 text-center" slot="start">
                        <IonIcon className="iconic" icon={location}></IonIcon>
                        </IonThumbnail>
                        <IonLabel className="m-0">54 bàu cát 6 phường 12 quận tân bình</IonLabel>
                      </IonItem>

                      <IonItem className="h">
                        <IonThumbnail className="m-0 text-center" slot="start">
                        <IonIcon className="iconic"icon={earth}></IonIcon>
                        </IonThumbnail>
                        <IonLabel className="m-0">eclo@gmail.com </IonLabel>
                      </IonItem>
                    </IonList>
                  </IonList>
                  <IonCardHeader className="notifile2">
                    <IonCardSubtitle className="colordate">
                      <IonRow>
                        <IonCol className="text1" size="6">
                          January 20, 2015
                        </IonCol>
                      </IonRow>
                    </IonCardSubtitle>
                  </IonCardHeader>
                </IonCardContent>
              </IonCardSubtitle>
            </IonCardContent>
          </IonCard>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;

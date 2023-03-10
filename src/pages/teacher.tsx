import {
  IonButtons,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonAvatar,
} from "@ionic/react";
 
// import { useParams } from "react-router";
// import ExploreContainer from "../components/ExploreContainer";
import "./teacher.css";

const Page: React.FC = () => {


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Danh sách giáo viên</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="box_content">
        <IonAccordionGroup className="mt-3 mx-2">
          <IonLabel className="p-3 mb-3 fw-bold">
            GIÁO VIÊN CHỦ NHIỆM :
          </IonLabel>
          <IonAccordion value="1" className="mt-3 acc">
            <IonItem slot="header" color="red" className="item-teacher-1">

              <IonAvatar slot="start">
                <img
                  alt="Silhouette of a person's head"
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <IonLabel className="fw-bold">
                Nguyễn Thị Thắm
                <p className="mt-2 text-secondary">Môn dạy : Tiếng Việt</p>
              </IonLabel>
            </IonItem>
            <div className="ion-padding p-0 pe-2" slot="content">
              <p
                className="link text-center mt-2"
                style={{ background: "#e3edf5" }}
              >
                <img
                  className="img-teacher w-50  rounded-circle"
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                />
              </p>

              <ol id="accordion" className="rounded-list accordion">
                <li>
                  <ol>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Họ và tên :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Nguyễn Thị Thắm
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Môn dạy :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Tiếng Việt
                          </IonCol>
                        </IonRow>{" "}
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Học hàm :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Thạc sĩ
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Điện thoại :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            0123456789
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Giới tính :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Nữ
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Ngày sinh :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            02/04/1989
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">Email :</IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            info@eclo.vn
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Địa chỉ :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            54 Bàu Cát 6, P14, Tân Bình, tpHCM
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </IonAccordion>
        </IonAccordionGroup>

        <IonAccordionGroup className="mt-4 mx-2">
          <IonLabel className="p-3 mb-2 fw-bold">GIÁO VIÊN BỘ MÔN :</IonLabel>
          <IonAccordion value="2" className="mt-3 acc">
            <IonItem slot="header" color="red" className="item-teacher-1">
              <IonAvatar slot="start">
                <img
                  alt="Silhouette of a person's head"
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <IonLabel className="fw-bold">
                Nguyễn Thị Thắm
                <p className="mt-2 text-secondary">Môn dạy : Tiếng Việt</p>
              </IonLabel>
            </IonItem>
            <div className="ion-padding p-0 pe-2" slot="content">
              <p
                className="link text-center mt-2"
                style={{ background: "#e3edf5" }}
              >
                <img
                  className="img-teacher w-50  rounded-circle"
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                />
              </p>
              <ol id="accordion" className="rounded-list accordion">
                <li>
                  <ol>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Họ và tên :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Nguyễn Thị Thắm
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Môn dạy :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Tiếng Việt
                          </IonCol>
                        </IonRow>{" "}
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Học hàm :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Thạc sĩ
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Điện thoại :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            0123456789
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Giới tính :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Nữ
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Ngày sinh :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            02/04/1989
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">Email :</IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            info@eclo.vn
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Địa chỉ :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            54 Bàu Cát 6, P14, Tân Bình, tpHCM
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </IonAccordion>
          <IonAccordion value="first" className="mt-3 acc">
            <IonItem slot="header" color="red" className="item-teacher-1">
              <IonAvatar slot="start">
                <img
                  alt="Silhouette of a person's head"
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <IonLabel className="fw-bold">
                Nguyễn Thị Thắm
                <p className="mt-2 text-secondary">Môn dạy : Tiếng Việt</p>
              </IonLabel>
            </IonItem>
            <div className="ion-padding p-0 pe-2" slot="content">
              <p
                className="link text-center mt-2"
                style={{ background: "#e3edf5" }}
              >
                <img
                  className="img-teacher w-50  rounded-circle"
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                />
              </p>
              <ol id="accordion" className="rounded-list accordion">
                <li>
                  <ol>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Họ và tên :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Nguyễn Thị Thắm
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Môn dạy :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Tiếng Việt
                          </IonCol>
                        </IonRow>{" "}
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Học hàm :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Thạc sĩ
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Điện thoại :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            0123456789
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Giới tính :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Nữ
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Ngày sinh :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            02/04/1989
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">Email :</IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            info@eclo.vn
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Địa chỉ :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            54 Bàu Cát 6, P14, Tân Bình, tpHCM
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </IonAccordion>
          <IonAccordion value="3" className="mt-3 acc">
            <IonItem slot="header" color="red" className="item-teacher-1">
              <IonAvatar slot="start">
                <img
                  alt="Silhouette of a person's head"
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <IonLabel className="fw-bold">
                Nguyễn Thị Thắm
                <p className="mt-2 text-secondary">Môn dạy : Tiếng Việt</p>
              </IonLabel>
            </IonItem>
            <div className="ion-padding p-0 pe-2" slot="content">
              <p
                className="link text-center mt-2"
                style={{ background: "#e3edf5" }}
              >
                <img
                  className="img-teacher w-50  rounded-circle"
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                />
              </p>
              <ol id="accordion" className="rounded-list accordion">
                <li>
                  <ol>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Họ và tên :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Nguyễn Thị Thắm
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Môn dạy :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Tiếng Việt
                          </IonCol>
                        </IonRow>{" "}
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Học hàm :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Thạc sĩ
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Điện thoại :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            0123456789
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Giới tính :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Nữ
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Ngày sinh :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            02/04/1989
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">Email :</IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            info@eclo.vn
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Địa chỉ :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            54 Bàu Cát 6, P14, Tân Bình, tpHCM
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
      {/* <FooterBar></FooterBar> */}
    </IonPage>
  );
};

export default Page;

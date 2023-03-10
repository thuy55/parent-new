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
  IonCard,
  IonCardContent,
  IonGrid,
  IonSelect,
  IonSelectOption,
  IonInput,
} from "@ionic/react";

// import { useParams } from "react-router";
// import ExploreContainer from "../components/ExploreContainer";
import "./Cash.css";

const Cash: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Sổ thu chi</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="box_content">
        <IonCard className="card-home-cash">
          <IonCardContent className="card-content">
            <IonGrid className="py-0">
              <IonRow className="row px-5 align-items-center d-flex">
                <IonCol>
                  <IonLabel className="lable-name">Tháng :</IonLabel>
                </IonCol>
                <IonCol size="8">
                  <div style={{ width: "100%" }}>
                    <IonInput type="month" className="bg-white p-1" ></IonInput>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

        <div className="card border-0 border-top mt-3">
          <div className="card-header">
            <ul
              className="nav nav-pills  d-flex justify-content-around"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#nav-thu"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Qũy lớp
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#nav-chi"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Chi tiêu
                </button>
              </li>
              
            </ul>
          </div>
          <form className="card-body tab-content px-2">
            <div className="tab-pane active" id="nav-thu">
              <IonLabel className="fw-bold text-end">
                <p>Tổng tiền hiện tại: 1.456.000VND</p>
                
              </IonLabel>
              <IonAccordionGroup className="mt-3 mx-2">
                <IonAccordion value="1" className="mt-3 acc">
                  <IonItem slot="header" color="red" className="item-Cash">
                    <div className="item-count bg-color-green">T</div>
                    <IonLabel className="fw-bold">
                      Thu tiền vệ sinh tháng 3
                      <p className="mt-2 text-secondary">Số tiền: 30.000VND</p>
                    </IonLabel>
                  </IonItem>
                  <div className="ion-padding p-0 pe-2" slot="content">
                    <ol id="accordion" className="rounded-list accordion">
                      <li>
                        <ol>
                          <li>
                            <p className="link">
                              <IonRow className="row text-align-center">
                                <IonCol>
                                  <IonLabel className="lable-name">
                                    Nội dung:
                                  </IonLabel>
                                </IonCol>
                                <IonCol size="8" className="nd">
                                  Thu tiền vệ sinh tháng 3
                                </IonCol>
                              </IonRow>
                            </p>
                          </li>
                          <li>
                            <p className="link">
                              <IonRow className="row text-align-center">
                                <IonCol>
                                  <IonLabel className="lable-name">
                                    Số tiền :
                                  </IonLabel>
                                </IonCol>
                                <IonCol size="8" className="nd">
                                  30.000VND
                                </IonCol>
                              </IonRow>{" "}
                            </p>
                          </li>
                          <li>
                            <p className="link">
                              <IonRow className="row text-align-center">
                                <IonCol>
                                  <IonLabel className="lable-name">
                                    Ngày:
                                  </IonLabel>
                                </IonCol>
                                <IonCol size="8" className="nd">
                                  06/03/2023
                                </IonCol>
                              </IonRow>
                            </p>
                          </li>
                          <li>
                            <p className="link">
                              <IonRow className="row text-align-center">
                                <IonCol>
                                  <IonLabel className="lable-name">
                                    Ghi chú:
                                  </IonLabel>
                                </IonCol>
                                <IonCol size="8" className="nd">
                                  aaaaaaaaaaaaaa
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
              <IonAccordionGroup className="mt-3 mx-2">
                <IonAccordion value="1" className="mt-3 acc">
                  <IonItem slot="header" color="red" className=" item-Cash">
                    <div className="item-count bg-color-green">T</div>
                    <IonLabel className="fw-bold">
                      Thu tiền vệ sinh tháng 3
                      <p className="mt-2 text-secondary">Số tiền: 30.000VND</p>
                    </IonLabel>
                  </IonItem>
                  <div className="ion-padding p-0 pe-2" slot="content">
                    <ol id="accordion" className="rounded-list accordion">
                      <li>
                        <ol>
                          <li>
                            <p className="link">
                              <IonRow className="row text-align-center">
                                <IonCol>
                                  <IonLabel className="lable-name">
                                    Nội dung:
                                  </IonLabel>
                                </IonCol>
                                <IonCol size="8" className="nd">
                                  Thu tiền vệ sinh tháng 3
                                </IonCol>
                              </IonRow>
                            </p>
                          </li>
                          <li>
                            <p className="link">
                              <IonRow className="row text-align-center">
                                <IonCol>
                                  <IonLabel className="lable-name">
                                    Số tiền :
                                  </IonLabel>
                                </IonCol>
                                <IonCol size="8" className="nd">
                                  30.000VND
                                </IonCol>
                              </IonRow>{" "}
                            </p>
                          </li>
                          <li>
                            <p className="link">
                              <IonRow className="row text-align-center">
                                <IonCol>
                                  <IonLabel className="lable-name">
                                    Ngày:
                                  </IonLabel>
                                </IonCol>
                                <IonCol size="8" className="nd">
                                  06/03/2023
                                </IonCol>
                              </IonRow>
                            </p>
                          </li>
                          <li>
                            <p className="link">
                              <IonRow className="row text-align-center">
                                <IonCol>
                                  <IonLabel className="lable-name">
                                    Ghi chú:
                                  </IonLabel>
                                </IonCol>
                                <IonCol size="8" className="nd">
                                  aaaaaaaaaaaaaa
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
            </div>
            <div className="tab-pane" id="nav-chi">
            <IonLabel className="fw-bold text-end">
                <p>Tổng tiền chi: 1.456.000VND</p>
                
              </IonLabel>
              <IonAccordionGroup className="mt-3 mx-2">
                <IonAccordion value="1" className="mt-3 acc">
                  <IonItem slot="header" color="red" className=" item-Cash">
                    <div className="item-count bg-color-green">C</div>
                    <IonLabel className="fw-bold">
                      Thanh toán tiền photo tháng 3
                      <p className="mt-2 text-secondary">Số tiền: 150.000VND</p>
                    </IonLabel>
                  </IonItem>
                  <div className="ion-padding p-0 pe-2" slot="content">
                    <ol id="accordion" className="rounded-list accordion">
                      <li>
                        <ol>
                          <li>
                            <p className="link">
                              <IonRow className="row text-align-center">
                                <IonCol>
                                  <IonLabel className="lable-name">
                                    Nội dung:
                                  </IonLabel>
                                </IonCol>
                                <IonCol size="8" className="nd">
                                  Thu tiền vệ sinh tháng 3
                                </IonCol>
                              </IonRow>
                            </p>
                          </li>
                          <li>
                            <p className="link">
                              <IonRow className="row text-align-center">
                                <IonCol>
                                  <IonLabel className="lable-name">
                                    Số tiền :
                                  </IonLabel>
                                </IonCol>
                                <IonCol size="8" className="nd">
                                  30.000VND
                                </IonCol>
                              </IonRow>{" "}
                            </p>
                          </li>
                          <li>
                            <p className="link">
                              <IonRow className="row text-align-center">
                                <IonCol>
                                  <IonLabel className="lable-name">
                                    Ngày:
                                  </IonLabel>
                                </IonCol>
                                <IonCol size="8" className="nd">
                                  06/03/2023
                                </IonCol>
                              </IonRow>
                            </p>
                          </li>
                          <li>
                            <p className="link">
                              <IonRow className="row text-align-center">
                                <IonCol>
                                  <IonLabel className="lable-name">
                                    Ghi chú:
                                  </IonLabel>
                                </IonCol>
                                <IonCol size="8" className="nd">
                                  aaaaaaaaaaaaaa
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
            </div>
          </form>
        </div>
      </IonContent>
      {/* <FooterBar></FooterBar> */}
    </IonPage>
  );
};

export default Cash;

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
import "./Debt.css";

const Debt: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Quản lý thu chi</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="box_content">
        <IonCard>
          <IonCardContent className="card-content">
            <IonGrid className="py-0">
              <IonRow className="row px-5 align-items-center d-flex">
                <IonCol>
                  <IonLabel className="lable-name">Học kì :</IonLabel>
                </IonCol>
                <IonCol size="7">
                  <div style={{ width: "100%" }}>
                    <IonSelect
                      className="select-name"
                      color="primary"
                      slot="start"
                      interface="popover"
                      placeholder="Tất cả"
                    >
                      <IonSelectOption value="0">Tất cả</IonSelectOption>
                      <IonSelectOption value="1">
                        HK1 (2022-2023)
                      </IonSelectOption>
                      <IonSelectOption value="2">
                        HK2 (2022-2023)
                      </IonSelectOption>
                    </IonSelect>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        <IonAccordionGroup className="mt-3 mx-3">
          <IonAccordion value="1" className="mt-3 acc">
            <IonItem slot="header" color="red" className="item-teacher">
              <IonLabel className="fw-bold ps-3 py-1">
                Tiền học phí tháng 3
                <p className="mt-2 text-secondary">Số tiền: 600.000VND</p>
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
                              Nội dung thu :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="7" className="nd">
                            Học phí học kỳ 2
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
                          <IonCol size="7" className="nd">
                            600.000 VND
                          </IonCol>
                        </IonRow>{" "}
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Miễn giảm :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="7" className="nd">
                            0%
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">Đã nộp :</IonLabel>
                          </IonCol>
                          <IonCol size="7" className="nd">
                            600.000 VND
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Ngày nộp :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="7" className="nd">
                            03/02/2023
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Công nợ :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="7" className="nd">
                            0 VND
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Trạng thái :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="7" className="nd">
                            ĐÃ NỘP
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
        <IonAccordionGroup className="mt-3 mx-3">
          <IonAccordion value="1" className="mt-3 acc">
            <IonItem slot="header" color="red" className="item-teacher">
              <IonLabel className="fw-bold ps-3 py-1">
                Tiền học phí tháng 3
                <p className="mt-2 text-secondary">Số tiền: 600.000VND</p>
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
                              Nội dung thu :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="7" className="nd">
                            Học phí học kỳ 2
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
                          <IonCol size="7" className="nd">
                            600.000 VND
                          </IonCol>
                        </IonRow>{" "}
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Miễn giảm :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="7" className="nd">
                            0%
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">Đã nộp :</IonLabel>
                          </IonCol>
                          <IonCol size="7" className="nd">
                            600.000 VND
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Ngày nộp :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="7" className="nd">
                            03/02/2023
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Công nợ :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="7" className="nd">
                            0 VND
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Trạng thái :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="7" className="nd">
                            ĐÃ NỘP
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
        <IonAccordionGroup className="mt-3 mx-3">
          <IonAccordion value="1" className="mt-3 acc">
            <IonItem slot="header" color="red" className="item-teacher">
              <IonLabel className="fw-bold ps-3 py-1">
                Tiền học phí tháng 3
                <p className="mt-2 text-secondary">Số tiền: 600.000VND</p>
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
                              Nội dung thu :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="7" className="nd">
                            Học phí học kỳ 2
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
                          <IonCol size="7" className="nd">
                            600.000 VND
                          </IonCol>
                        </IonRow>{" "}
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Miễn giảm :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="7" className="nd">
                            0%
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">Đã nộp :</IonLabel>
                          </IonCol>
                          <IonCol size="7" className="nd">
                            600.000 VND
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Ngày nộp :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="7" className="nd">
                            03/02/2023
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Công nợ :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="7" className="nd">
                            0 VND
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Trạng thái :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="7" className="nd">
                            ĐÃ NỘP
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

export default Debt;

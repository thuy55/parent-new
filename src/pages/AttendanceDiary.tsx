import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonPage,
  IonRow,
  IonCol,
} from "@ionic/react";
import { IonAccordion, IonAccordionGroup, IonItem } from "@ionic/react";
import React from "react";
import { checkmarkDoneOutline } from "ionicons/icons";
import { IonChip, IonAvatar, IonLabel, IonIcon } from "@ionic/react";
import "./AttendanceDiary.css";

const AttendanceDiary: React.FC = () => {
  // const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" style={{ color: "#f08c00" }}>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Nhật ký điểm danh</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="container">
        <IonItem style={{ marginTop: "10px" }}>
          <label>Chọn ngày:</label>
          <input
            type="date"
            id="typeDate"
            name="typeDate"
            value="2023-03-08"
          ></input>
        </IonItem>
        <IonAccordionGroup className=" mx-2 ">
          <IonAccordion value="2" className="acc my-2">
            <IonItem slot="header" color="red" className="item-scores">
              <IonLabel className="fw-bold text-success">
                Thứ 2<p className="mt-2 text-success">Ngày: 8/3/2023</p>
              </IonLabel>
            </IonItem>
            <div className="ion-padding p-0 pe-2" slot="content">
              <p
                className="link text-center mt-2"
                style={{ background: "#e3edf5" }}
              ></p>

              <ol id="accordion" className="rounded-list accordion">
                <li>
                  <ol>
                    <li>
                      <p className="link">
                        <IonRow className="row d-flex align-items-center">
                          <IonCol className="p-0">
                            <IonLabel className="lable-name text-success fw-bold text-">
                              Loại:
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd p-0">
                            <IonChip color="success">P</IonChip>
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row">
                          <IonCol>
                            <IonLabel className="lable-name text-success fw-bold">
                              Ghi chú:
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Nghỉ có phép
                          </IonCol>
                        </IonRow>{" "}
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row">
                          <IonCol>
                            <IonLabel className="lable-name text-success fw-bold">
                              Lý do:
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Vắng đi khám bệnh
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </IonAccordion>
          <IonAccordion value="3" className="acc my-2">
            <IonItem slot="header" color="red" className="item-scores">
              <IonLabel className="fw-bold text-success">
                Thứ 3<p className="mt-2 text-success">Ngày: 9/3/2023</p>
              </IonLabel>
            </IonItem>
            <div className="ion-padding p-0 pe-2" slot="content">
              <p
                className="link text-center mt-2"
                style={{ background: "#e3edf5" }}
              ></p>

              <ol id="accordion" className="rounded-list accordion">
                <li>
                  <ol>
                    <li>
                      <p className="link">
                        <IonRow className="row d-flex align-items-center">
                          <IonCol className="p-0">
                            <IonLabel className="lable-name text-success fw-bold text-">
                              Loại:
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd p-0">
                            <IonChip color="danger">K</IonChip>
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row">
                          <IonCol>
                            <IonLabel className="lable-name text-success fw-bold">
                              Ghi chú:
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Nghỉ không phép
                          </IonCol>
                        </IonRow>{" "}
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row">
                          <IonCol>
                            <IonLabel className="lable-name text-success fw-bold">
                              Lý do:
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Vắng đi khám bệnh
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </IonAccordion>
          <IonAccordion value="4" className="acc my-2">
            <IonItem slot="header" color="red" className="item-scores">
              <IonLabel className="fw-bold text-success">
                Thứ 4<p className="mt-2 text-success">Ngày: 10/3/2023</p>
              </IonLabel>
            </IonItem>
            <div className="ion-padding p-0 pe-2" slot="content">
              <p
                className="link text-center mt-2"
                style={{ background: "#e3edf5" }}
              ></p>

              <ol id="accordion" className="rounded-list accordion">
                <li>
                  <ol>
                    <li>
                      <p className="link">
                        <IonRow className="row d-flex align-items-center">
                          <IonCol className="p-0">
                            <IonLabel className="lable-name text-success fw-bold text-">
                              Loại:
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd p-0">
                            <IonChip color="medium">L</IonChip>
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row">
                          <IonCol>
                            <IonLabel className="lable-name text-success fw-bold">
                              Ghi chú:
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Nghỉ ngày lễ
                          </IonCol>
                        </IonRow>{" "}
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row">
                          <IonCol>
                            <IonLabel className="lable-name text-success fw-bold">
                              Lý do:
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Vắng đi khám bệnh
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </IonAccordion>
          <IonAccordion value="5" className="acc my-2">
            <IonItem slot="header" color="red" className="item-scores">
              <IonLabel className="fw-bold text-success">
                Thứ 5<p className="mt-2 text-success">Ngày: 10/3/2023</p>
              </IonLabel>
            </IonItem>
            <div className="ion-padding p-0 pe-2" slot="content">
              <p
                className="link text-center mt-2"
                style={{ background: "#e3edf5" }}
              ></p>

              <ol id="accordion" className="rounded-list accordion">
                <li>
                  <ol>
                    <li>
                      <p className="link">
                        <IonRow className="row d-flex align-items-center">
                          <IonCol className="p-0">
                            <IonLabel className="lable-name text-success fw-bold text-">
                              Loại:
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd p-0">
                            <IonChip color="tertiary">C</IonChip>
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row">
                          <IonCol>
                            <IonLabel className="lable-name text-success fw-bold">
                              Ghi chú:
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Nghỉ cố định
                          </IonCol>
                        </IonRow>{" "}
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row">
                          <IonCol>
                            <IonLabel className="lable-name text-success fw-bold">
                              Lý do:
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Vắng đi khám bệnh
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </IonAccordion>
          <IonAccordion value="6" className="acc my-2">
            <IonItem slot="header" color="red" className="item-scores">
              <IonLabel className="fw-bold text-success">
                Thứ 6<p className="mt-2 text-success">Ngày: 10/3/2023</p>
              </IonLabel>
            </IonItem>
            <div className="ion-padding p-0 pe-2" slot="content">
              <p
                className="link text-center mt-2"
                style={{ background: "#e3edf5" }}
              ></p>

              <ol id="accordion" className="rounded-list accordion">
                <li>
                  <ol>
                    <li>
                      <p className="link">
                        <IonRow className="row d-flex align-items-center">
                          <IonCol className="p-0">
                            <IonLabel className="lable-name text-success fw-bold text-">
                              Loại:
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd p-0">
                            <IonChip color="warning">B</IonChip>
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row">
                          <IonCol>
                            <IonLabel className="lable-name text-success fw-bold">
                              Ghi chú:
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Bỏ tiết
                          </IonCol>
                        </IonRow>{" "}
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row">
                          <IonCol>
                            <IonLabel className="lable-name text-success fw-bold">
                              Lý do:
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Vắng đi khám bệnh
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </IonAccordion>
          <IonAccordion value="7" className="acc my-2">
            <IonItem slot="header" color="red" className="item-scores">
              <IonLabel className="fw-bold text-success">
                Thứ 7<p className="mt-2 text-success">Ngày: 10/3/2023</p>
              </IonLabel>
            </IonItem>
            <div className="ion-padding p-0 pe-2" slot="content">
              <p
                className="link text-center mt-2"
                style={{ background: "#e3edf5" }}
              ></p>

              <ol id="accordion" className="rounded-list accordion">
                <li>
                  <ol>
                    <li>
                      <p className="link">
                        <IonRow className="row d-flex align-items-center">
                          <IonCol className="p-0">
                            <IonLabel className="lable-name text-success fw-bold text-">
                              Loại:
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd p-0">
                            <IonChip color="warning">B</IonChip>
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row">
                          <IonCol>
                            <IonLabel className="lable-name text-success fw-bold">
                              Ghi chú:
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Bỏ tiết
                          </IonCol>
                        </IonRow>{" "}
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row">
                          <IonCol>
                            <IonLabel className="lable-name text-success fw-bold">
                              Lý do:
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Vắng đi khám bệnh
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
    </IonPage>
  );
};

export default AttendanceDiary;

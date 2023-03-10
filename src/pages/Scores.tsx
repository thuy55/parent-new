import {
  IonAccordion,
  IonAccordionGroup,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonRow,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { starSharp } from "ionicons/icons";

import "./Scores.css";

const OpinionDetail: React.FC = () => {
  // const diem=

  // }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
            {/* <IonBackButton></IonBackButton> */}
          </IonButtons>
          <IonTitle>Kết quả học tập</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="container">
        <IonGrid style={{ marginTop: "10px" }}>
          <IonRow>
            <IonSearchbar
              style={{ textAlign: "start" }}
              className="searchbar"
              color="medium"
              debounce={1000}
              // onIonChange={(ev) => handleChange(ev)}
            ></IonSearchbar>
          </IonRow>
          <IonRow className="me-5 d-flex align-items-center ms-2">
            <IonCol>
              <IonLabel className="lable-name">Học kì :</IonLabel>
            </IonCol>
            <IonCol size="9">
              <div style={{ width: "100%" }}>
                <IonSelect
                  className="select-name"
                  color="primary"
                  slot="start"
                  interface="popover"
                  placeholder="HỌC KÌ 1"
                >
                  <IonSelectOption value="0">HỌC KÌ 1</IonSelectOption>
                  <IonSelectOption value="1">HỌC KÌ 2</IonSelectOption>
                </IonSelect>
              </div>
            </IonCol>
          </IonRow>

          <IonAccordionGroup className="mt-2 p-2">
            <IonAccordion value="first" className="p-1 bg-color  mb-2">
              <IonItem slot="header" color="red" className="item-scores">
                <IonIcon
                  icon={starSharp}
                  style={{ marginBottom: 1, marginRight: "20px"}}
                ></IonIcon>
                <IonLabel className="ten">
                  TIẾNG VIỆT
                  <p className="mt-2 text-secondary fw-medium">
                    Giáo viên: Nguyễn Thị Thắm
                  </p>
                </IonLabel>
              </IonItem>
              <div className="p-1" slot="content">
                <IonCard className="bg-card">
                  <IonCardContent className="card-content-grid-list">
                    <IonRow className="row">
                      <IonCol>
                        <IonLabel className="lable-name">Thường kỳ 1:</IonLabel>
                      </IonCol>
                      <IonCol className="tt" size="3">
                        <h5>9.0</h5>
                      </IonCol>
                    </IonRow>
                    <IonRow className="row">
                      <IonCol>
                        <IonLabel className="lable-name">Thường kỳ 2:</IonLabel>
                      </IonCol>
                      <IonCol className="tt" size="3">
                        <h5>9.0</h5>
                      </IonCol>
                    </IonRow>
                    <IonRow className="row">
                      <IonCol>
                        <IonLabel className="lable-name">
                          Kiểm tra 15p:
                        </IonLabel>
                      </IonCol>
                      <IonCol className="tt" size="3">
                        <h5 className="diem">4.0</h5>
                      </IonCol>
                    </IonRow>
                    <IonRow className="row">
                      <IonCol>
                        <IonLabel className="lable-name">
                          Kiểm tra 45p:
                        </IonLabel>
                      </IonCol>
                      <IonCol className="tt" size="3">
                        <h5>9.0</h5>
                      </IonCol>
                    </IonRow>
                    <IonRow className="row">
                      <IonCol>
                        <IonLabel className="lable-name">Giữa kỳ:</IonLabel>
                      </IonCol>
                      <IonCol className="tt" size="3">
                        <h5>9.0</h5>
                      </IonCol>
                    </IonRow>
                    <IonRow className="row">
                      <IonCol>
                        <IonLabel className="lable-name">Cuối kỳ:</IonLabel>
                      </IonCol>
                      <IonCol className="tt" size="3">
                        <h5>9.0</h5>
                      </IonCol>
                    </IonRow>
                  </IonCardContent>
                </IonCard>
              </div>
            </IonAccordion>
            <IonAccordion value="second" className="p-1 bg-color my-2">
              <IonItem slot="header" color="red" className="item-scores">
                <IonIcon
                  icon={starSharp}
                  style={{ marginBottom: 1, marginRight: "20px"  }}
                ></IonIcon>
                <IonLabel className="ten">
                  TOÁN
                  <p className="mt-2 text-secondary fw-medium">
                    Giáo viên: Nguyễn Thị Thắm
                  </p>
                </IonLabel>
              </IonItem>
              <div className="p-1" slot="content">
                <IonCard className="bg-card">
                  <IonCardContent className="card-content-grid-list">
                    <IonRow className="row">
                      <IonCol>
                        <IonLabel className="lable-name">Thường kỳ 1:</IonLabel>
                      </IonCol>
                      <IonCol className="tt" size="3">
                        <h5>9.0</h5>
                      </IonCol>
                    </IonRow>
                    <IonRow className="row">
                      <IonCol>
                        <IonLabel className="lable-name">Thường kỳ 2:</IonLabel>
                      </IonCol>
                      <IonCol className="tt" size="3">
                        <h5>9.0</h5>
                      </IonCol>
                    </IonRow>
                    <IonRow className="row">
                      <IonCol>
                        <IonLabel className="lable-name">
                          Kiểm tra 15p:
                        </IonLabel>
                      </IonCol>
                      <IonCol className="tt" size="3">
                        <h5>9.0</h5>
                      </IonCol>
                    </IonRow>
                    <IonRow className="row">
                      <IonCol>
                        <IonLabel className="lable-name">
                          Kiểm tra 45p:
                        </IonLabel>
                      </IonCol>
                      <IonCol className="tt" size="3">
                        <h5>9.0</h5>
                      </IonCol>
                    </IonRow>
                    <IonRow className="row">
                      <IonCol>
                        <IonLabel className="lable-name">Giữa kỳ:</IonLabel>
                      </IonCol>
                      <IonCol className="tt" size="3">
                        <h5>9.0</h5>
                      </IonCol>
                    </IonRow>
                    <IonRow className="row">
                      <IonCol>
                        <IonLabel className="lable-name">Cuối kỳ:</IonLabel>
                      </IonCol>
                      <IonCol className="tt" size="3">
                        <h5>9.0</h5>
                      </IonCol>
                    </IonRow>
                  </IonCardContent>
                </IonCard>
              </div>
            </IonAccordion>
            <IonAccordion value="third" className="p-1 bg-color my-2">
              <IonItem slot="header" color="red" className="item-scores">
                <IonIcon
                  icon={starSharp}
                  style={{ marginBottom: 1, marginRight: "20px"}}
                ></IonIcon>
                <IonLabel className="ten">
                  TIN HỌC
                  <p className="mt-2 text-secondary fw-medium">
                    Giáo viên: Nguyễn Thị Thắm
                  </p>
                </IonLabel>
              </IonItem>
              <div className="p-1" slot="content">
                <IonCard className="bg-card">
                  <IonCardContent className="card-content-grid-list">
                    <IonRow className="row">
                      <IonCol>
                        <IonLabel className="lable-name">Thường kỳ 1:</IonLabel>
                      </IonCol>
                      <IonCol className="tt" size="3">
                        <h5>9.0</h5>
                      </IonCol>
                    </IonRow>
                    <IonRow className="row">
                      <IonCol>
                        <IonLabel className="lable-name">Thường kỳ 2:</IonLabel>
                      </IonCol>
                      <IonCol className="tt" size="3">
                        <h5>9.0</h5>
                      </IonCol>
                    </IonRow>
                    <IonRow className="row">
                      <IonCol>
                        <IonLabel className="lable-name">
                          Kiểm tra 15p:
                        </IonLabel>
                      </IonCol>
                      <IonCol className="tt" size="3">
                        <h5>9.0</h5>
                      </IonCol>
                    </IonRow>
                    <IonRow className="row">
                      <IonCol>
                        <IonLabel className="lable-name">
                          Kiểm tra 45p:
                        </IonLabel>
                      </IonCol>
                      <IonCol className="tt" size="3">
                        <h5>9.0</h5>
                      </IonCol>
                    </IonRow>
                    <IonRow className="row">
                      <IonCol>
                        <IonLabel className="lable-name">Giữa kỳ:</IonLabel>
                      </IonCol>
                      <IonCol className="tt" size="3">
                        <h5>9.0</h5>
                      </IonCol>
                    </IonRow>
                    <IonRow className="row">
                      <IonCol>
                        <IonLabel className="lable-name">Cuối kỳ:</IonLabel>
                      </IonCol>
                      <IonCol className="tt" size="3">
                        <h5>9.0</h5>
                      </IonCol>
                    </IonRow>
                  </IonCardContent>
                </IonCard>
              </div>
            </IonAccordion>
            <IonAccordion value="fourth" className="p-1 bg-color my-2">
              <IonItem slot="header" color="red" className="item-scores">
                <IonIcon
                  icon={starSharp}
                  style={{ marginBottom: 1, marginRight: "20px" }}
                ></IonIcon>
                <IonLabel className="ten">
                  TIẾNG ANH
                  <p className="mt-2 text-secondary fw-medium">
                    Giáo viên: Nguyễn Thị Thắm
                  </p>
                </IonLabel>
              </IonItem>
              <div className="p-1" slot="content">
                <IonCard className="bg-card">
                  <IonCardContent className="card-content-grid-list">
                    <IonRow className="row">
                      <IonCol>
                        <IonLabel className="lable-name">Thường kỳ 1:</IonLabel>
                      </IonCol>
                      <IonCol className="tt" size="3">
                        <h5>9.0</h5>
                      </IonCol>
                    </IonRow>
                    <IonRow className="row">
                      <IonCol>
                        <IonLabel className="lable-name">Thường kỳ 2:</IonLabel>
                      </IonCol>
                      <IonCol className="tt" size="3">
                        <h5>9.0</h5>
                      </IonCol>
                    </IonRow>
                    <IonRow className="row">
                      <IonCol>
                        <IonLabel className="lable-name">
                          Kiểm tra 15p:
                        </IonLabel>
                      </IonCol>
                      <IonCol className="tt" size="3">
                        <h5>9.0</h5>
                      </IonCol>
                    </IonRow>
                    <IonRow className="row">
                      <IonCol>
                        <IonLabel className="lable-name">
                          Kiểm tra 45p:
                        </IonLabel>
                      </IonCol>
                      <IonCol className="tt" size="3">
                        <h5>9.0</h5>
                      </IonCol>
                    </IonRow>
                    <IonRow className="row">
                      <IonCol>
                        <IonLabel className="lable-name">Giữa kỳ:</IonLabel>
                      </IonCol>
                      <IonCol className="tt" size="3">
                        <h5>9.0</h5>
                      </IonCol>
                    </IonRow>
                    <IonRow className="row">
                      <IonCol>
                        <IonLabel className="lable-name">Cuối kỳ:</IonLabel>
                      </IonCol>
                      <IonCol className="tt" size="3">
                        <h5>9.0</h5>
                      </IonCol>
                    </IonRow>
                  </IonCardContent>
                </IonCard>
              </div>
            </IonAccordion>
          </IonAccordionGroup>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default OpinionDetail;

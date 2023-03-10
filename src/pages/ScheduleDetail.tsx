import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
// import { useParams } from "react-router";
// import ExploreContainer from "../components/ExploreContainer";
import "./ScheduleDetail.css";
import {  IonBackButton } from "@ionic/react";
import { IonIcon } from "@ionic/react";
// import { IonReactRouter } from "@ionic/react-router";
// import { Link, Redirect, Route } from "react-router-dom";
// import Menu from "../components/Menu";
import { cubeSharp } from "ionicons/icons";
 

const ScheduleDetail: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            {/* <IonMenuButton /> */}
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Chi tiết thời khóa biểu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="container">
        
        <div className="row d-flex justify-content-center px-2" style={{marginTop: "10px"}}>
          <div className="col-md-6">
            <div className="main-card mb-3 card">
              <div className="card-body">
                <h5 className="card-title mt-1">Thời khóa biểu thứ 2</h5>
                <div className="vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                  <div className="vertical-timeline-item vertical-timeline-element">
                    <div>
                      <span className="vertical-timeline-element-icon bounce-in">
                        <IonIcon
                          className="badge-dot-xl"
                          icon={cubeSharp}
                          size="large"
                          color="tertiary"
                        ></IonIcon>
                      </span>
                      <div className="vertical-timeline-element-content bounce-in">
                        <div
                          style={{
                            marginLeft: "10px",
                            padding: "10px",
                            backgroundColor: "#FFCCCC",
                            borderRadius: "10px",
                          }}
                        >
                          <p>Môn học: Tiếng Việt</p>
                          <h4 className="timeline-title">
                            Giáo viên : Nguyễn Thị Thắm
                          </h4>
                        </div>
                        <div className="vertical-timeline-element-date">
                          <p>Tiết 1</p>
                          6h30-7h20
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vertical-timeline-item vertical-timeline-element">
                    <div>
                      <span className="vertical-timeline-element-icon bounce-in">
                        <IonIcon
                          className="badge-dot-xl"
                          icon={cubeSharp}
                          size="large"
                          color="tertiary"
                        ></IonIcon>
                      </span>
                      <div className="vertical-timeline-element-content bounce-in">
                        <div
                          style={{
                            marginLeft: "10px",
                            padding: "10px",
                            backgroundColor: "#FFDAB9",
                            borderRadius: "10px",
                          }}
                        >
                          <p>Môn học: Tiếng Việt</p>
                          <h4 className="timeline-title">
                            Giáo viên : Nguyễn Thị Thắm
                          </h4>
                        </div>
                        <div className="vertical-timeline-element-date">
                          <p>Tiết 2</p>
                          7h30-8h20
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vertical-timeline-item vertical-timeline-element">
                    <div>
                      <span className="vertical-timeline-element-icon bounce-in">
                        <IonIcon
                          className="badge-dot-xl"
                          icon={cubeSharp}
                          size="large"
                          color="tertiary"
                        ></IonIcon>
                      </span>
                      <div className="vertical-timeline-element-content bounce-in">
                        <div
                          style={{
                            marginLeft: "10px",
                            padding: "10px",
                            backgroundColor: "#FFFFCC",
                            borderRadius: "10px",
                          }}
                        >
                          <p>Môn học: Tiếng Việt</p>
                          <h4 className="timeline-title">
                            Giáo viên : Nguyễn Thị Thắm
                          </h4>
                        </div>
                        <div className="vertical-timeline-element-date">
                          <p>Tiết 3</p>
                          6h30-7h20
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vertical-timeline-item vertical-timeline-element">
                    <div>
                      <span className="vertical-timeline-element-icon bounce-in">
                        <IonIcon
                          className="badge-dot-xl"
                          icon={cubeSharp}
                          size="large"
                          color="tertiary"
                        ></IonIcon>
                      </span>
                      <div className="vertical-timeline-element-content bounce-in">
                        <div
                          style={{
                            marginLeft: "10px",
                            padding: "10px",
                            backgroundColor: "#CCFFFF",
                            borderRadius: "10px",
                          }}
                        >
                          <p>Môn học: Tiếng Việt</p>
                          <h4 className="timeline-title">
                            Giáo viên : Nguyễn Thị Thắm
                          </h4>
                        </div>
                        <div className="vertical-timeline-element-date">
                          <p>Tiết 4</p>
                          6h30-7h20
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vertical-timeline-item vertical-timeline-element">
                    <div>
                      <span className="vertical-timeline-element-icon bounce-in">
                        <IonIcon
                          className="badge-dot-xl"
                          icon={cubeSharp}
                          size="large"
                          color="tertiary"
                        ></IonIcon>
                      </span>
                      <div className="vertical-timeline-element-content bounce-in">
                        <div
                          style={{
                            marginLeft: "10px",
                            padding: "10px",
                            backgroundColor: "#FFCCFF",
                            borderRadius: "10px",
                          }}
                        >
                          <p>Môn học: Tiếng Việt</p>
                          <h4 className="timeline-title">
                            Giáo viên : Nguyễn Thị Thắm
                          </h4>
                        </div>
                        <div className="vertical-timeline-element-date">
                          <p>Tiết 5</p>
                          6h30-7h20
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vertical-timeline-item vertical-timeline-element">
                    <div>
                      <span className="vertical-timeline-element-icon bounce-in">
                        <IonIcon
                          className="badge-dot-xl"
                          icon={cubeSharp}
                          size="large"
                          color="tertiary"
                        ></IonIcon>
                      </span>
                      <div className="vertical-timeline-element-content bounce-in">
                        <div
                          style={{
                            marginLeft: "10px",
                            padding: "10px",
                            // backgroundColor: "black",
                            borderRadius: "10px",
                          }}
                        >
                          {/* <p>Môn học: Tiếng Việt</p> */}
                          <h4 className="timeline-title" >
                            GIỜ NGHỈ TRƯA
                          </h4>
                        </div>
                        <div className="vertical-timeline-element-date">
                          
                          11h30-12h20
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vertical-timeline-item vertical-timeline-element">
                    <div>
                      <span className="vertical-timeline-element-icon bounce-in">
                        <IonIcon
                          className="badge-dot-xl"
                          icon={cubeSharp}
                          size="large"
                          color="tertiary"
                        ></IonIcon>
                      </span>
                      <div className="vertical-timeline-element-content bounce-in">
                        <div
                          style={{
                            marginLeft: "10px",
                            padding: "10px",
                            backgroundColor: "#E0EEE0",
                            borderRadius: "10px",
                          }}
                        >
                          <p>Môn học: Tiếng Việt</p>
                          <h4 className="timeline-title">
                            Giáo viên : Nguyễn Thị Thắm
                          </h4>
                        </div>
                        <div className="vertical-timeline-element-date">
                          <p>Tiết 6</p>
                          6h30-7h20
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vertical-timeline-item vertical-timeline-element">
                    <div>
                      <span className="vertical-timeline-element-icon bounce-in">
                        <IonIcon
                          className="badge-dot-xl"
                          icon={cubeSharp}
                          size="large"
                          color="tertiary"
                        ></IonIcon>
                      </span>
                      <div className="vertical-timeline-element-content bounce-in">
                        <div
                          style={{
                            marginLeft: "10px",
                            padding: "10px",
                            backgroundColor: "#E0EEE0",
                            borderRadius: "10px",
                          }}
                        >
                          <p>Môn học: Tiếng Việt</p>
                          <h4 className="timeline-title">
                            Giáo viên : Nguyễn Thị Thắm
                          </h4>
                        </div>
                        <div className="vertical-timeline-element-date">
                          <p>Tiết 6</p>
                          6h30-7h20
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vertical-timeline-item vertical-timeline-element">
                    <div>
                      <span className="vertical-timeline-element-icon bounce-in">
                        <IonIcon
                          className="badge-dot-xl"
                          icon={cubeSharp}
                          size="large"
                          color="tertiary"
                        ></IonIcon>
                      </span>
                      <div className="vertical-timeline-element-content bounce-in">
                        <div
                          style={{
                            marginLeft: "10px",
                            padding: "10px",
                            backgroundColor: "#E0EEE0",
                            borderRadius: "10px",
                          }}
                        >
                          <p>Môn học: Tiếng Việt</p>
                          <h4 className="timeline-title">
                            Giáo viên : Nguyễn Thị Thắm
                          </h4>
                        </div>
                        <div className="vertical-timeline-element-date">
                          <p>Tiết 6</p>
                          6h30-7h20
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vertical-timeline-item vertical-timeline-element">
                    <div>
                      <span className="vertical-timeline-element-icon bounce-in">
                        <IonIcon
                          className="badge-dot-xl"
                          icon={cubeSharp}
                          size="large"
                          color="tertiary"
                        ></IonIcon>
                      </span>
                      <div className="vertical-timeline-element-content bounce-in">
                        <div
                          style={{
                            marginLeft: "10px",
                            padding: "10px",
                            backgroundColor: "#E0EEE0",
                            borderRadius: "10px",
                          }}
                        >
                          <p>Môn học: Tiếng Việt</p>
                          <h4 className="timeline-title">
                            Giáo viên : Nguyễn Thị Thắm
                          </h4>
                        </div>
                        <div className="vertical-timeline-element-date">
                          <p>Tiết 6</p>
                          6h30-7h20
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </IonContent>
      {/* <FooterBar></FooterBar> */}
    </IonPage>
  );
};

export default ScheduleDetail;

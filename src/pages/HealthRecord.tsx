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
  IonIcon,
} from "@ionic/react";
// import { useParams } from 'react-router';
// import ExploreContainer from '../components/ExploreContainer';
import "./HealthRecord.css";
import { IonLabel, IonCol, IonGrid, IonRow } from "@ionic/react";
// import { IonList, IonSelect, IonSelectOption, IonIcon, IonThumbnail } from '@ionic/react';
// import { IonReactRouter } from '@ionic/react-router';
// import { Link, Redirect, Route } from 'react-router-dom';
// import Menu from '../components/Menu';
import { fitnessOutline, gitNetworkOutline, resizeOutline, scaleOutline, sparklesOutline, thermometerOutline } from "ionicons/icons";


const HealthRecord: React.FC = () => {
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
          <IonTitle>Hồ sơ sức khỏe</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="container">
        <IonCard className="card-home">
          <IonCardContent className="card-content">
            <IonGrid className="py-0">
              <IonRow className="row">
                <IonCol>
                  <IonLabel className="lable-name">Họ và tên :</IonLabel>
                </IonCol>
                <IonCol className="tt" size="7">
                  <h5>Nguyễn Văn A</h5>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonGrid  className="py-0">
              <IonRow className="row">
                <IonCol>
                  <IonLabel className="lable-name">Mã BHYT :</IonLabel>
                </IonCol>
                <IonCol className="tt" size="7">
                  <h5>123456789123</h5>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonGrid  className="py-0">
              <IonRow className="row">
                <IonCol>
                  <IonLabel className="lable-name">Mã BH thân thể :</IonLabel>
                </IonCol>
                <IonCol className="tt" size="7">
                  <h5>044642646541</h5>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

        <div className="card border-0 border-top mt-3">
          <div className="card-header">
            <ul className="nav nav-pills  d-flex justify-content-around" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Tổng quan
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#nav-ts"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Tiểu sử
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#nav-tc"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Tiêm chủng
                </button>
              </li>
            </ul>
          </div>
          <form className="card-body tab-content">
            <div className="tab-pane active" id="nav-home">
              <div className="row d-flex justify-content-between mt-1">
                <div className="w-50 d-flex justify-content-center">
                  <div className="card w-100 bg-white rounded-4">
                    <div className="card-body text-center py-0 pt-2 p-1">
                      <div className="d-flex justify-content-between text-danger">
                        <div className="w-25">
                        <IonIcon icon={fitnessOutline}  className="icon-list" color="danger"></IonIcon>
                        </div>
                        <div className="w-75 fs-1 ms-3">
                          <b>105</b>
                          <h6 className="mt-2">Nhịp/phút</h6>
                        </div>
                      </div>
                      <div className="d-flex fs-5 ms-2">
                        <b>Nhịp tim</b>
                      </div>
                      <div className="d-flex ms-2">
                        <h6>Đo lúc :</h6>
                      </div>
                      <div className="d-flex ms-2">
                        <h6 className="mt-1"> 8:00- 12/01/2023</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-50 d-flex justify-content-center">
                  <div className="card w-100 bg-white rounded-4">
                    <div className="card-body text-center py-0 pt-2 p-1">
                      <div className="d-flex justify-content-between text-warning">
                        <div className="w-25">
                        <IonIcon icon={gitNetworkOutline}  className="icon-list" color="warning"></IonIcon>
                        </div>
                        <div className="w-75 fs-3 ms-2">
                          <b>118/68</b>
                          <h6 className="mt-2">mmHg</h6>
                        </div>
                      </div>
                      <div className="d-flex fs-5 ms-2">
                        <b>Huyết áp</b>
                      </div>
                      <div className="d-flex ms-2">
                        <h6>Đo lúc :</h6>
                      </div>
                      <div className="d-flex ms-2">
                        <h6 className="mt-1"> 8:00- 12/01/2023</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-between mt-3">
                <div className="w-50 d-flex justify-content-center">
                  <div className="card w-100 bg-white rounded-4">
                    <div className="card-body text-center py-0 pt-2 p-1">
                      <div className="d-flex justify-content-between text-success">
                        <div className="w-25">
                        <IonIcon icon={thermometerOutline}  className="icon-list" color="success"></IonIcon>
                        </div>
                        <div className="w-75 fs-1 ms-3">
                          <b>36.5</b>
                          <h6 className="mt-2">°C</h6>
                        </div>
                      </div>
                      <div className="d-flex fs-5 ms-2">
                        <b>Nhiệt độ</b>
                      </div>
                      <div className="d-flex ms-2">
                        <h6>Đo lúc :</h6>
                      </div>
                      <div className="d-flex ms-2">
                        <h6 className="mt-1"> 8:00- 12/01/2023</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-50 d-flex justify-content-center">
                  <div className="card w-100 bg-white rounded-4">
                    <div className="card-body text-center py-0 pt-2 p-1">
                      <div className="d-flex justify-content-between text-primary">
                        <div className="w-25">
                        <IonIcon icon={sparklesOutline}  className="icon-list" color="primary"></IonIcon>
                        </div>
                        <div className="w-75 fs-1 ms-4">
                          <b>20.2</b>
                          <h6 className="mt-2">kg/m²</h6>
                        </div>
                      </div>
                      <div className="d-flex fs-5 ms-2">
                        <b>Chỉ số BMI</b>
                      </div>
                      <div className="d-flex ms-2">
                        <h6>Tính lúc:</h6>
                      </div>
                      <div className="d-flex ms-2">
                        <h6 className="mt-1"> 8:00- 12/01/2023</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-between mt-3">
                <div className="w-50 d-flex justify-content-center">
                  <div className="card w-100 bg-white rounded-4">
                    <div className="card-body text-center py-0 pt-2 p-1">
                      <div className="d-flex justify-content-between text-info">
                        <div className="w-25">
                        <IonIcon icon={scaleOutline}  className="icon-list" color="secondary"></IonIcon>
                        </div>
                        <div className="w-75 fs-1 ms-3">
                          <b>30</b>
                          <h6 className="mt-2">kg</h6>
                        </div>
                      </div>
                      <div className="d-flex fs-5 ms-3">
                        <b>Cân nặng</b>
                      </div>
                      <div className="d-flex ms-2">
                        <h6>Cân lúc :</h6>
                      </div>
                      <div className="d-flex ms-2">
                        <h6 className="mt-1"> 8:00- 12/01/2023</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-50 d-flex justify-content-center">
                  <div className="card w-100 bg-white rounded-4">
                    <div className="card-body text-center py-0 pt-2 p-1">
                      <div className="d-flex justify-content-between text-secondary">
                        <div className="w-25">
                        <IonIcon icon={resizeOutline}  className="icon-list" color="medium"></IonIcon>
                        </div>
                        <div className="w-75 fs-1 ms-4">
                          <b>1.22</b>
                          <h6 className="mt-2">m</h6>
                        </div>
                      </div>
                      <div className="d-flex fs-5 ms-2">
                        <b>Chiều cao</b>
                      </div>
                      <div className="d-flex ms-2">
                        <h6>Đo lúc:</h6>
                      </div>
                      <div className="d-flex ms-2">
                        <h6 className="mt-1"> 8:00- 12/01/2023</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="nav-ts">
              <p className=" card-text fs-6">Không có tiền sử bệnh án</p>
            </div>
            <div className="tab-pane" id="nav-tc">
              <p className=" card-text fs-6 fw-bold">
                Đã tiêm 2 mũi vacxin Corona
              </p>
              <div className="card rounded-4 mt-3" color="#FFF0F5">
                <div className="card-body bg-cardbody rounded-4 text-start" color="#FFF0F5">
                  <h5 className="mt-1 text-success fw-bold">Mũi 1</h5>
                  <div className="row">
                    <h6 className="col-5">Tên Vacxin:</h6>
                    <p className="col-7">Vero Cell</p>
                  </div>
                  <div className="row">
                    <h6 className="col-5">Xuất xứ:</h6>
                    <p className="col-7">China</p>
                  </div>
                  <div className="row">
                    <h6 className="col-5">Ngày tiêm:</h6>
                    <p className="col-7">12/03/2022</p>
                  </div>
                 
                </div>
              </div>
              <div className="card rounded-4 mt-3" color="#FFF0F5">
                <div className="card-body bg-cardbody rounded-4 text-start" color="#FFF0F5">
                  <h5 className="mt-1 text-success fw-bold">Mũi 2</h5>
                  <div className="row">
                    <h6 className="col-5">Tên Vacxin:</h6>
                    <p className="col-7">Vero Cell</p>
                  </div>
                  <div className="row">
                    <h6 className="col-5">Xuất xứ:</h6>
                    <p className="col-7">China</p>
                  </div>
                  <div className="row">
                    <h6 className="col-5">Ngày tiêm:</h6>
                    <p className="col-7">12/06/2022</p>
                  </div>
                 
                </div>
              </div>
            </div>
          </form>
        </div>
      </IonContent>
      {/* <FooterBar></FooterBar> */}
    </IonPage>
  );
};

export default HealthRecord;

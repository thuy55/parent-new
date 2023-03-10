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
  IonCardTitle,
  IonItem,
  IonAvatar,
  IonFooter,
  IonTabButton,
  IonChip,
  IonCardSubtitle,
  IonList,
  IonThumbnail,
  useIonAlert,
  useIonLoading,
} from "@ionic/react";
import React from "react";
import axios from "axios";
// import { useParams } from 'react-router';
// import ExploreContainer from '../components/ExploreContainer';
import "./Dashboard.css";
import { IonLabel, IonCol, IonGrid, IonRow } from "@ionic/react";
import { IonSelect, IonSelectOption, IonIcon } from "@ionic/react";
// import { IonReactRouter } from '@ionic/react-router';
// import { Redirect, Route } from 'react-router-dom';
// import Menu from '../components/Menu';
import {
  calendarOutline,
  schoolOutline,
  alarmOutline,
  fitnessOutline,
  notifications,
  notificationsCircleOutline,
  brush,
  layersOutline,
  backspaceOutline,
  peopleOutline,
  personCircleOutline,
  person,
  printOutline,
  createOutline,
  calculatorOutline,
  playCircle,
  radio,
  library,
  search,
  earth,
  call,
  locationOutline,
} from "ionicons/icons";
import { Link } from "react-router-dom";
import { setUserSession } from "./Common";
import { useState, useEffect } from "react";

const dataMeals = [
  {
    idMeal: 1,
    title: "Cơm chiên dương châu hải sản",
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=713&q=80",
    kcal: "151",
  },
  {
    idMeal: 2,
    title: "Thịt bò xào sả ớt cay xé lưỡi",
    img: "https://images.unsplash.com/photo-1622732777601-e744c3401d44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
    kcal: "152",
  },
  {
    idMeal: 3,
    title: "Bò xào sa tế đầy đủ dinh dưỡng",
    img: "https://images.unsplash.com/photo-1604106701789-98a5aa51bc2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=711&q=80",
    kcal: "153",
  },
  {
    idMeal: 4,
    title: "Gà hấp hành full toping",
    img: "https://images.unsplash.com/photo-1550728193-be87c574be86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    kcal: "155",
  },
];

const listMeal = [
  { id: 1, name: "Bữa sáng", color1: "#93291e", color2: " #ed213a" },
  // { id: 2, name: "Bữa trưa", color1: "#087f5b", color2: "#0ca678" },
  // { id: 3, name: "Bữa chiều", color1: "#364fc7", color2: "#4c6ef5" },
];

interface Props {
  text: any;
  color1: any;
  color2: any;
  id: any;
}
interface ContainerProps {}

const Home: React.FC = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  // const [posts, setPosts]= useState();
  // const apiEndPoint = 'https://school.hewo.vn/api/students-list' ;
  // useEffect(() =>{
  //   const getPosts= async () =>{
  //     const {data: res} = await axios.post(apiEndPoint);
  //     setPosts(res);
  //   };
  //   getPosts();
  // },[]
  // );

  const [presentAlert] = useIonAlert();
  const [present, dismiss] = useIonLoading();
  const [students, setStudents] = useState([] as any[]);
  useEffect(() => {
    const api = axios.create({
      baseURL: "https://school.hewo.vn/api",
    });
    var x = localStorage.getItem("token");
    const loginData = {
      token: x,
    };
    api
      .post("/students-list", loginData)
      .then((res) => {
        if (res.data.status == "success") {
          setStudents(res.data.content);
        }
      })
      .catch((error) => {});
  }, []);
  // useEffect(() => {
  //     const api = axios.create({
  //       baseURL: "https://school.hewo.vn/api",
  //     })
  //
  //   const loginData = {
  //     "token": x
  // }
  //   api.post("/students-list",loginData).then((res) => {

  //     if(res.data.status=='error'){
  //       dismiss();
  //       presentAlert({
  //         header: 'Lỗi',
  //         message: res.data.content,
  //         buttons: ['OK'],
  //       });
  //     }else if(res.data.status=='success'){
  //       // console.log(res.data.content);
  //       // setStudents = 'asdasd';
  //       setStudents(res.data);
  //       dismiss();
  //     }
  //     })
  //     .catch((error) => {
  //       dismiss();
  //       presentAlert({
  //         header: "Lỗi",
  //         message: "không thể kết nối đến máy chủ",
  //         buttons: ["OK"],
  //       });
  //     });
  //   }
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
        <IonCard className="card-home-dashboard">
          <IonCardContent className="card-content-dashboard">
            <IonGrid className="grid">
              <IonRow className="row">
                <IonCol>
                  <IonLabel className="lable-name">Họ và tên :</IonLabel>
                </IonCol>
                <IonCol size="7">
                  <div style={{ width: "100%" }}>
                    <IonSelect
                      placeholder="Chon hoc sinh"
                      className="select-name"
                      name="form-fied-name"
                      color="primary"
                      slot="start"
                      interface="popover"
                    >
                      {students.map((student) => {
                        return (
                          <IonSelectOption key={student.id}>
                            {student.firstname} {student.lastname}
                          </IonSelectOption>
                        );
                      })}
                    </IonSelect>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonGrid className="grid">
              <IonRow className="row">
                <IonCol>
                  <IonLabel className="lable-name">Mã học sinh :</IonLabel>
                </IonCol>
                <IonCol className="tt" size="7">
                  <h5>123345</h5>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonGrid className="grid">
              <IonRow className="row">
                <IonCol>
                  <IonLabel className="lable-name">Lớp :</IonLabel>
                </IonCol>
                <IonCol className="tt" size="7">
                  <h5>3A</h5>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonGrid className="grid">
              <IonRow className="row">
                <IonCol>
                  <IonLabel className="lable-name">Phòng :</IonLabel>
                </IonCol>
                <IonCol className="tt" size="7">
                  <h5>2.14</h5>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonGrid className="grid">
              <IonRow className="row">
                <IonCol>
                  <IonLabel className="lable-name">GVCN :</IonLabel>
                </IonCol>
                <IonCol className="tt" size="7">
                  <h5>Nguyễn Thị Thắm</h5>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonGrid className="grid">
              <IonRow className="row">
                <IonCol>
                  <IonLabel className="lable-name">Ngày hiện tại :</IonLabel>
                </IonCol>
                <IonCol className="tt" size="7">
                  <h5>{date}</h5>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonGrid className="grid">
              <IonRow className="row">
                <IonCol>
                  <IonLabel className="lable-name">Giờ vào : 6h30</IonLabel>
                </IonCol>
                <IonCol className="tt" size="7">
                  Giờ ra : 6h30
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard
                className="card-grid-dashboard item-list-dashboard"
                button
              >
                <IonCardContent className="card-content-grid">
                  <IonIcon
                    icon={alarmOutline}
                    size="large"
                    color="warning"
                    style={{ marginBottom: 1, color: "#FF1493" }}
                  ></IonIcon>
                  <h6>Điểm danh</h6>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <Link to="/Scores">
                <IonCard
                  className="card-grid-dashboard item-list-dashboard"
                  button
                >
                  <IonCardContent className="card-content-grid">
                    <IonIcon
                      icon={brush}
                      size="large"
                      style={{ marginBottom: 1, color: "#CD853F" }}
                    ></IonIcon>
                    <h6>Điểm</h6>
                  </IonCardContent>
                </IonCard>
              </Link>
            </IonCol>
            <IonCol>
              <Link to="/Schedule">
                <IonCard
                  className="card-grid-dashboard item-list-dashboard"
                  button
                >
                  <IonCardContent className="card-content-grid">
                    <IonIcon
                      icon={calendarOutline}
                      size="large"
                      color="tertiary"
                      style={{ marginBottom: 1 }}
                    ></IonIcon>
                    <h6>Thời khóa biểu</h6>
                  </IonCardContent>
                </IonCard>
              </Link>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard
                className="card-grid-dashboard item-list-dashboard"
                button
              >
                <IonCardContent className="card-content-grid">
                  <IonIcon
                    icon={layersOutline}
                    size="large"
                    style={{ marginBottom: 1, color: "#000080" }}
                  ></IonIcon>
                  <h6>Thực đơn</h6>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <Link to="/page/Inbox">
                <IonCard
                  className="card-grid-dashboard item-list-dashboard"
                  button
                >
                  <IonCardContent className="card-content-grid">
                    <IonIcon
                      icon={backspaceOutline}
                      size="large"
                      color="danger"
                      style={{ marginBottom: 1 }}
                    ></IonIcon>
                    <h6>Xin nghỉ phép</h6>
                  </IonCardContent>
                </IonCard>
              </Link>
            </IonCol>
            <IonCol>
              <Link to="/HealthRecord">
                <IonCard
                  className="card-grid-dashboard item-list-dashboard"
                  button
                >
                  <IonCardContent className="card-content-grid">
                    <IonIcon
                      icon={fitnessOutline}
                      size="large"
                      style={{ marginBottom: 1, color: "#800080" }}
                    ></IonIcon>
                    <h6>Sức khỏe</h6>
                  </IonCardContent>
                </IonCard>
              </Link>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <Link to="/home">
                <IonCard
                  className="card-grid-dashboard item-list-dashboard"
                  button
                >
                  <IonCardContent className="card-content-grid">
                    <IonIcon
                      icon={schoolOutline}
                      size="large"
                      color="primary"
                      style={{ marginBottom: "1" }}
                    ></IonIcon>
                    <h6>Hoạt động</h6>
                  </IonCardContent>
                </IonCard>
              </Link>
            </IonCol>
            <IonCol>
              <IonCard
                className="card-grid-dashboard item-list-dashboard"
                button
              >
                <IonCardContent className="card-content-grid">
                  <IonIcon
                    icon={notifications}
                    size="large"
                    color="success"
                    style={{ marginBottom: 1 }}
                  ></IonIcon>
                  <h6>Thông báo</h6>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard
                className="card-grid-dashboard item-list-dashboard"
                button
              >
                <IonCardContent className="card-content-grid">
                  <IonIcon
                    icon={notificationsCircleOutline}
                    size="large"
                    color="medium"
                    style={{ marginBottom: 1 }}
                  ></IonIcon>
                  <h6>Thông báo GV</h6>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <Link to="/Teacher">
                <IonCard
                  className="card-grid-dashboard item-list-dashboard"
                  button
                >
                  <IonCardContent className="card-content-grid">
                    <IonIcon
                      icon={peopleOutline}
                      size="large"
                      style={{ marginBottom: 1, color: "#FF00FF" }}
                    ></IonIcon>
                    <h6>Giáo viên</h6>
                  </IonCardContent>
                </IonCard>
              </Link>
            </IonCol>
            <IonCol>
              <Link to="/page/Profile">
                <IonCard
                  className="card-grid-dashboard item-list-dashboard"
                  button
                >
                  <IonCardContent className="card-content-grid">
                    <IonIcon
                      icon={personCircleOutline}
                      size="large"
                      style={{ marginBottom: 1, color: "#C71585" }}
                    ></IonIcon>
                    <h6>Hồ sơ học sinh</h6>
                  </IonCardContent>
                </IonCard>
              </Link>
            </IonCol>
            <IonCol>
              <Link to="/Account">
                <IonCard
                  className="card-grid-dashboard item-list-dashboard"
                  button
                >
                  <IonCardContent className="card-content-grid">
                    <IonIcon
                      icon={person}
                      size="large"
                      style={{ marginBottom: 1, color: "#006400" }}
                    ></IonIcon>
                    <h6>Tài khoản</h6>
                  </IonCardContent>
                </IonCard>
              </Link>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <Link to="/Debt">
                <IonCard
                  className="card-grid-dashboard item-list-dashboard"
                  button
                >
                  <IonCardContent className="card-content-grid">
                    <IonIcon
                      icon={printOutline}
                      size="large"
                      color="danger"
                      style={{ marginBottom: 1 }}
                    ></IonIcon>
                    <h6>Công nợ</h6>
                  </IonCardContent>
                </IonCard>
              </Link>
            </IonCol>
            <IonCol>
              <Link to="/Opinion">
                <IonCard
                  className="card-grid-dashboard item-list-dashboard"
                  button
                >
                  <IonCardContent className="card-content-grid">
                    <IonIcon
                      icon={createOutline}
                      size="large"
                      color="dark"
                      style={{ marginBottom: 1 }}
                    ></IonIcon>
                    <h6>Góp ý</h6>
                  </IonCardContent>
                </IonCard>
              </Link>
            </IonCol>
            <IonCol>
              <Link to="/Cash">
                <IonCard
                  className="card-grid-dashboard item-list-dashboard"
                  button
                >
                  <IonCardContent className="card-content-grid">
                    <IonIcon
                      icon={calculatorOutline}
                      size="large"
                      style={{ marginBottom: 1, color: "#808000" }}
                    ></IonIcon>
                    <h6>Sổ thu chi</h6>
                  </IonCardContent>
                </IonCard>
              </Link>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonRow className="d-flex align-items-center">
            <IonCol className="text-2" size="9">
              Lịch trình đưa đón học sinh:
            </IonCol>
            <IonCol style={{ fontSize: "12px" }}>
              <Link to="/move" className="text-dark">
                Xem chi tiết
              </Link>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonCard>
          <img
            alt="Silhouette of mountains"
            src="https://vnn-imgs-a1.vgcloud.vn/znews-photo.zadn.vn/w1024/Uploaded/lce_cjvcc/2019_08_07/Blue_Bird_Vision_Montevideo_54.jpg"
          />
          <IonCardHeader className="p-1 ps-1">
            <IonCardTitle className="car-name text-wrap fs-4">
              <IonItem href="#">
                <IonAvatar slot="start">
                  <img
                    alt="Silhouette of a person's head"
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                  />
                </IonAvatar>
                <IonLabel className="text-center text-danger fw-bold">
                  Tài xế: Chu chỉ nhược
                </IonLabel>
              </IonItem>
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonGrid className="">
              <IonRow className="pt-1">
                <IonCol className="text-2">Loại xe:</IonCol>
                <IonCol className="text-11" size="7">
                  14 chỗ
                </IonCol>
              </IonRow>
              <IonRow className="pt-3">
                <IonCol className="text-2">Biển số xe:</IonCol>
                <IonCol className="text-11" size="7">
                  552277-NB
                </IonCol>
              </IonRow>
              <IonRow className="pt-3">
                <IonCol className="text-2">Số học sinh:</IonCol>
                <IonCol className="text-11" size="7">
                  14
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        <IonGrid>
          <IonRow className="d-flex align-items-center">
            <IonCol className="text-2" size="9">
              Thực đơn hôm nay:
            </IonCol>
            <IonCol style={{ fontSize: "12px" }}>
              <Link to="/meals" className="text-dark">
                Xem chi tiết
              </Link>
            </IonCol>
          </IonRow>
        </IonGrid>
        {/* <>
          {listMeal.map((e) => (
            <>
              <MenuCard
                id={e.id}
                text={e.name}
                color1={e.color1}
                color2={e.color2}
              />
            </>
          ))}
        </> */}

        <IonLabel>
          <h1 className="text-dark fs-6 mt-2 mb-2 p-2">Giới thiệu:</h1>
        </IonLabel>
        <IonCard
          className="card-news m-0 mx-2"
          style={{ backgroundColor: "#e7eaf1" }}
        >
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
              <IonCardContent className="p-0 ">
                <IonList className="pd0">
                  <IonList className="">
                    <IonItem className="h ">
                      <IonThumbnail className="m-0   text-center" slot="start">
                        <IonIcon className="iconic " icon={earth}></IonIcon>
                      </IonThumbnail>
                      <IonLabel className="m-0 p-0 ">www.eclo.vn</IonLabel>
                    </IonItem>

                    <IonItem className="h">
                      <IonThumbnail className="m-0 text-center" slot="start">
                        <IonIcon className="iconic" icon={call}></IonIcon>
                      </IonThumbnail>
                      <IonLabel className="m-0">070099999</IonLabel>
                    </IonItem>

                    <IonItem className="h">
                      <IonThumbnail className="m-0 text-center" slot="start">
                        <IonIcon
                          className="iconic"
                          icon={locationOutline}
                        ></IonIcon>
                      </IonThumbnail>
                      <IonLabel className="m-0">
                        54 bàu cát 6 phường 12 quận tân bình
                      </IonLabel>
                    </IonItem>

                    <IonItem className="h">
                      <IonThumbnail className="m-0 text-center" slot="start">
                        <IonIcon className="iconic" icon={earth}></IonIcon>
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
      </IonContent>
    </IonPage>
  );
};

export default Home;

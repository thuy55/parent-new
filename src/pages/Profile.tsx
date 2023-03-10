
import { useParams } from "react-router";
import {IonCol, IonAvatar, IonItem, IonLabel, IonThumbnail, IonButton,IonGrid, IonRow,IonIcon, IonCard,IonPage,IonHeader,IonToolbar,IonButtons,IonMenuButton,IonTitle,IonContent, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import {
timer,home
} from "ionicons/icons";
import { Link } from "react-router-dom";
import "./Profile.css";
const Page: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="box_content">
      <article className="bg-xl pb-1">
        <div className=" before-bg-style">
          <div className="profile">
            <div className="avatar">
              <img className="avatar-img" src="https://toquoc.mediacdn.vn/2019/9/5/001a3513-15676514560451166952689.jpg" alt="" />
            </div>
            <IonCardContent className="bg-3 ms-0 me-0 profile ps-2">
              <IonGrid className="pv">
                <IonRow className="pt-3">
                  <IonCol className="text-2">Mẫ học sinh:</IonCol>
                  <IonCol className="text-1" size="7">22077551</IonCol>
                </IonRow>
                <IonRow className="pt-3">
                  <IonCol className="text-2">Họ và tên:</IonCol>
                  <IonCol className="text-1" size="7">Nguyễn Thị Thanh thúi</IonCol>
                </IonRow>
                <IonRow className="pt-3">
                  <IonCol className="text-2">Ngày sinh:</IonCol>
                  <IonCol className="text-1" size="7">17/08/2000</IonCol>
                </IonRow>
                <IonRow className="pt-3">
                  <IonCol className="text-2">Đối tượng:</IonCol>
                  <IonCol className="text-1" size="7">Cận nghèo</IonCol>
                </IonRow>
                <IonRow className="pt-3">
                  <IonCol className="text-2">Bảo hiểm y tế:</IonCol>
                  <IonCol className="text-1" size="7">33222555</IonCol>
                </IonRow>
                <IonRow className="pt-3">
                  <IonCol className="text-2">Bảo hiểm thân thể:</IonCol>
                  <IonCol className="text-1" size="7">613261651</IonCol>
                </IonRow>
                <IonRow className="pt-3">
                  <IonCol className="text-2">Dân tộc:</IonCol>
                  <IonCol className="text-1" size="7">Kinh</IonCol>
                </IonRow>
                <IonRow className="pt-3">
                  <IonCol className="text-2">Tôn giáo:</IonCol>
                  <IonCol className="text-1" size="7">Phật giáo</IonCol>
                </IonRow>
                <IonRow className="pt-3">
                  <IonCol className="text-2">Nơi sinh:</IonCol>
                  <IonCol className="text-1" size="7">An Giang</IonCol>
                </IonRow>
                <IonRow className="pt-3">
                  <IonCol className="text-2">Quố tịch:</IonCol>
                  <IonCol className="text-1" size="7">Việt Nam</IonCol>
                </IonRow>
              </IonGrid>
              <IonCardTitle className="fw-1 p-2"></IonCardTitle>
          </IonCardContent>
          </div>
        </div>
        <IonCard>
      <img alt="Silhouette of mountains" src="https://vnn-imgs-a1.vgcloud.vn/znews-photo.zadn.vn/w1024/Uploaded/lce_cjvcc/2019_08_07/Blue_Bird_Vision_Montevideo_54.jpg" />
      <IonCardHeader className="p-2 ps-4">
        <IonCardTitle className="car-name text-wrap fs-4" >
         
            <IonItem href="#">
                  <IonAvatar slot="start">
                    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                  </IonAvatar>
                  <IonLabel className="text-center">
                    Tài xế: Chu chỉ nhược
                  </IonLabel>
                </IonItem>
          </IonCardTitle>

      </IonCardHeader>

      <IonCardContent>
            <IonGrid className="">
                <IonRow className="pt-1">
                  <IonCol className="text-2">Loại xe</IonCol>
                  <IonCol className="text-1" size="7">14 chỗ</IonCol>
                </IonRow>
                <IonRow className="pt-3">
                  <IonCol className="text-2">Biển số xe:</IonCol>
                  <IonCol className="text-1" size="7">552277-NB</IonCol>
                </IonRow>
                <IonRow className="pt-3">
                  <IonCol className="text-2">Số học sinh:</IonCol>
                  <IonCol className="text-1" size="7">14</IonCol>
                </IonRow>          
               
               </IonGrid>
      </IonCardContent>
    </IonCard>
        <IonCard className="card-profile">
          <IonCardHeader >
            <IonCardTitle className="fw-1">THÔNG TIN HỒ SƠ HỌC SINH</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="bg-2 ps-2">
              <IonGrid className="pv">
                <IonRow className="pt-3">
                  <IonCol className="text-2">Mẫ hồ sơ:</IonCol>
                  <IonCol className="text-1" size="7">22077551</IonCol>
                </IonRow>
                <IonRow className="pt-3">
                  <IonCol className="text-2">Ngày nhập học:</IonCol>
                  <IonCol className="text-1" size="7">17/20/2222</IonCol>
                </IonRow>
                <IonRow className="pt-3">
                  <IonCol className="text-2">Bật đào tạo:</IonCol>
                  <IonCol className="text-1" size="7">Tiểu học</IonCol>
                </IonRow>
                <IonRow className="pt-3">
                  <IonCol className="text-2">Năm học:</IonCol>
                  <IonCol className="text-1" size="7">2022-2023</IonCol>
                </IonRow>
                <IonRow className="pt-3">
                  <IonCol className="text-2">Khóa học:</IonCol>
                  <IonCol className="text-1" size="7">2020-2024</IonCol>
                </IonRow>
                <IonRow className="pt-3">
                  <IonCol className="text-2">Loại đào tạo:</IonCol>
                  <IonCol className="text-1" size="7">Chính quy</IonCol>
                </IonRow>
                <IonRow className="pt-3">
                  <IonCol className="text-2">Đơn vị đào tạo:</IonCol>
                  <IonCol className="text-1" size="7">Trường tiểu học lương văn an</IonCol>
                </IonRow>
              </IonGrid>
              <IonCardTitle className="fw-1 p-2"></IonCardTitle>
          </IonCardContent>
        </IonCard>
        <IonCard className="card-profile">
        <IonCardHeader>
            <IonCardTitle className="fw-1">QUAN HỆ GIA ĐÌNH</IonCardTitle>
          </IonCardHeader>
          <IonCardHeader className="bg-2  p-1 ps-0 pt-3">
          <section className="page-section p-4 pt-0">
              <ul className="linetime">
                  <li>
                      <div className="linetime-img rounded-circle">
                          <img src="https://anhnendep.net/wp-content/uploads/2016/04/hinh-avata-chibi-de-thuong-cute-10.jpg" alt="" className="img-fluid"/>
                      </div>
                      <div className="linetime-panel">
                          <div className="linetime-panel-heading">
                              <h4 className="size-18">Thông tin mẹ</h4>
                          </div>
                          <div className="linetime-panel-subheading">
                          <h3 className="size-18 text-primary fw-bold">Nguyễn văn bé</h3>
                          </div>
                          <div className="linetime-panel-content">
                          <Link to="/Profile_mom" className="list-group-item  p-0 list-group-item-action">
                          <IonButton className="w-bt" color="tertiary" expand="block">Xem thêm...</IonButton>
                          </Link>
                          </div>
                      </div>
                  </li>
                  <li>
                      <div className="linetime-img rounded-circle">
                          <img src="https://anhnendep.net/wp-content/uploads/2016/04/hinh-avata-chibi-de-thuong-cute-10.jpg" alt="" className="img-fluid"/>
                      </div>
                      <div className="linetime-panel inverted">
                      <div className="linetime-panel-heading">
                              <h4 className="size-18">Thông tin cha</h4>
                          </div>
                          <div className="linetime-panel-subheading">
                          <h3 className="size-18 text-primary fw-bold">Nguyễn Văn Anh</h3>
                          </div>
                          <div className="linetime-panel-content">
                          <Link to="/Profile_dad" className="list-group-item  p-0 list-group-item-action">
                          <IonButton className="w-bt bg-bt"  color="warning"  expand="block">Xem thêm...</IonButton>
                          </Link>
                          </div>
                      </div>
                  </li>
              </ul>
        </section>             
          </IonCardHeader>
        </IonCard>
      </article>
     
      </IonContent>
    </IonPage>
  );
};

export default Page;

import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import React from "react";
import { Link } from "react-router-dom";

const MealsDetail: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            {/* <Link to="/Meals">
              <IonIcon
                icon={arrowBackOutline}
                size="large"
                style={{ color: "#f08c00", marginLeft: "12px" }}
              ></IonIcon>
            </Link> */}
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Chi tiết món ăn</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="container">
        <IonCard style={{ marginTop: "10px", borderRadius: "15px" }}>
          <img
            alt="Silhouette of mountains"
            src="https://images.unsplash.com/photo-1604106701789-98a5aa51bc2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=711&q=80"
          />
          <IonCardHeader>
            <IonCardTitle style={{ color: "#e8590c" }}>
              Cơm chiên dương châu hải sản
            </IonCardTitle>
            <IonCardSubtitle style={{ color: "#fd7e14" }}>
              517 Kcal
            </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent style={{ textAlign: "justify" }}>
            Cơm chiên Dương Châu là một loại cơm chiên nổi tiếng thế giới, là
            một món ăn ngon và nổi tiếng đến nỗi hầu như tất cả các nhà hàng
            Trung Quốc nào cũng có cả. Món ăn này được xuất phát từ triều đại
            nhà Thanh của Trung Quốc vào năm 1754. Cơm chiên này được đặt tên là
            Dương Châu là do đặt theo tên của vùng Dương Châu, tương truyền là
            do ông Y Bỉnh Thụ của thời nhà Thanh tạo ra chứ món này không bắt
            nguồn từ thành phố Dương Châu. Cơm chiên này được đặt tên là Dương
            Châu là do đặt theo tên của vùng Dương Châu, tương truyền là do ông
            Y Bỉnh Thụ của thời nhà Thanh tạo ra chứ món này không bắt nguồn từ
            thành phố Dương Châu. Cơm chiên này được đặt tên là Dương Châu là do
            đặt theo tên của vùng Dương Châu, tương truyền là do ông Y Bỉnh Thụ
            của thời nhà Thanh tạo ra chứ món này không bắt nguồn từ thành phố
            Dương Châu. Cơm chiên này được đặt tên là Dương Châu là do đặt theo
            tên của vùng Dương Châu, tương truyền là do ông Y Bỉnh Thụ của thời
            nhà Thanh tạo ra chứ món này không bắt nguồn từ thành phố Dương
            Châu.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default MealsDetail;

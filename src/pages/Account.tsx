// import { useParams } from "react-router";
import {
  IonCol,
  IonGrid,
  IonRow,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  createAnimation,
  IonTitle,
  IonContent,
  IonLabel,
  IonButton,
  IonModal,
  IonList,
  IonItem,
  IonInput,
  IonTextarea,
  IonFooter,
  IonTabsContext,
  IonTabButton,
  IonIcon,
  IonCardContent,
  IonCardTitle,
} from "@ionic/react";
import { home, library, playCircle, radio, search } from "ionicons/icons";
import "./Account.css";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Account: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);

  function dismiss() {
    modal.current?.dismiss();
  }

  const enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = createAnimation()
      .addElement(root?.querySelector("ion-backdrop")!)
      .fromTo("opacity", "0.01", "var(--backdrop-opacity)");

    const wrapperAnimation = createAnimation()
      .addElement(root?.querySelector(".modal-wrapper")!)
      .keyframes([
        { offset: 0, opacity: "0", transform: "scale(0)" },
        { offset: 1, opacity: "0.99", transform: "scale(1)" },
      ]);

    return createAnimation()
      .addElement(baseEl)
      .easing("ease-out")
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  const leaveAnimation = (baseEl: HTMLElement) => {
    return enterAnimation(baseEl).direction("reverse");
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Thông tin tài khoản</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="box_content">
        <article className="bg-xl">
          <div className=" before-bg-style">
            <div className="profile">
              <div className="avatar">
                <img
                  className="avatar-img"
                  src="https://toquoc.mediacdn.vn/2019/9/5/001a3513-15676514560451166952689.jpg"
                  alt=""
                />
              </div>
              <IonCardContent className="bg-3 ms-0 me-0 profile ps-2">
                <IonGrid className="pv mt-4">
                  <IonRow className="align-items-center my-2">
                    <IonCol>Họ và tên:</IonCol>
                    <IonCol className="text-1" size="7">
                      <IonInput value="Trần Thị A"></IonInput>
                    </IonCol>
                  </IonRow>
                  
                  <IonRow className="align-items-center my-2">
                    <IonCol>Số điện thoại:</IonCol>
                    <IonCol className="text-1" size="7">
                      <IonInput value="0123456789" readonly={true}></IonInput>
                    </IonCol>
                  </IonRow>
                
                  <IonRow className="align-items-center my-2">
                    <IonCol>Ngày sinh:</IonCol>
                    <IonCol className="text-1" size="7">
                      <IonInput type="date" value="02/05/1994"></IonInput>
                    </IonCol>
                  </IonRow>
                
                  <IonRow className="align-items-center my-2">
                    <IonCol>Chức vụ :</IonCol>
                    <IonCol className="text-1" size="7">
                      <IonInput value="Mẹ"></IonInput>
                    </IonCol>
                  </IonRow>
                
                  <IonRow className="align-items-center my-2">
                    <IonCol>Dân tộc :</IonCol>
                    <IonCol className="text-1" size="7">
                      <IonInput value="Kinh"></IonInput>
                    </IonCol>
                  </IonRow>
                
                  <IonRow className="align-items-center my-2">
                    <IonCol>Quốc tịch :</IonCol>
                    <IonCol className="text-1" size="7">
                      <IonInput value="Việt Nam"></IonInput>
                    </IonCol>
                  </IonRow>
               
                  <IonRow className="align-items-center my-2">
                    <IonCol>Địa chỉ:</IonCol>
                    <IonCol className="text-1" size="7">
                      <IonTextarea value="54 Bàu Cát 6, phường 14, Tân Bình, tpHCM"></IonTextarea>
                    </IonCol>
                  </IonRow>
                </IonGrid>
                
               
              </IonCardContent>
              {/* <div className="profile-main-account">
                <IonGrid>
                  <IonRow className="align-items-center">
                    <IonCol>Họ và tên:</IonCol>
                    <IonCol className="text-1" size="7">
                      <IonInput value="Trần Thị A"></IonInput>
                    </IonCol>
                  </IonRow>
                </IonGrid>
                <IonGrid>
                  <IonRow className="align-items-center">
                    <IonCol>Số điện thoại:</IonCol>
                    <IonCol className="text-1" size="7">
                      <IonInput value="0123456789" readonly={true}></IonInput>
                    </IonCol>
                  </IonRow>
                </IonGrid>
                <IonGrid>
                  <IonRow className="align-items-center">
                    <IonCol>Ngày sinh:</IonCol>
                    <IonCol className="text-1" size="7">
                      <IonInput type="date" value="02/05/1994"></IonInput>
                    </IonCol>
                  </IonRow>
                </IonGrid>
                <IonGrid>
                  <IonRow className="align-items-center">
                    <IonCol>Chức vụ :</IonCol>
                    <IonCol className="text-1" size="7">
                      <IonInput value="Mẹ"></IonInput>
                    </IonCol>
                  </IonRow>
                </IonGrid>
                <IonGrid>
                  <IonRow className="align-items-center">
                    <IonCol>Dân tộc :</IonCol>
                    <IonCol className="text-1" size="7">
                      <IonInput value="Kinh"></IonInput>
                    </IonCol>
                  </IonRow>
                </IonGrid>
                <IonGrid>
                  <IonRow className="align-items-center">
                    <IonCol>Quốc tịch :</IonCol>
                    <IonCol className="text-1" size="7">
                      <IonInput value="Việt Nam"></IonInput>
                    </IonCol>
                  </IonRow>
                </IonGrid>
                <IonGrid>
                  <IonRow className="align-items-center">
                    <IonCol>Địa chỉ:</IonCol>
                    <IonCol className="text-1" size="7">
                      <IonTextarea value="54 Bàu Cát 6, phường 14, Tân Bình, tpHCM"></IonTextarea>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </div> */}
            </div>
          </div>
        </article>
        <IonRow className="justify-content-center mt-4 d-flex">
          <IonButton
            className="w-75"
            color="warning"
            id="open-modal-update"
            expand="block"
          >
            CẬP NHẬT THÔNG TIN
          </IonButton>
        </IonRow>

        <IonRow className="justify-content-center mt-2 d-flex">
          <IonButton
            className="w-75"
            color="tertiary"
            id="open-modal-repass"
            expand="block"
          >
            ĐỔI MẬT KHẨU
          </IonButton>
          <IonModal
            id="example-modal"
            ref={modal}
            trigger="open-modal-repass"
            enterAnimation={enterAnimation}
            leaveAnimation={leaveAnimation}
          >
            <IonContent>
              <IonToolbar>
                <IonTitle className="text-center">Đổi mật khẩu</IonTitle>
                <IonButtons slot="end">
                  <IonButton onClick={() => dismiss()}>X</IonButton>
                </IonButtons>
              </IonToolbar>
              <IonList className="p-3">
                <IonLabel>Nhập mật khẩu cũ :</IonLabel>
                <IonItem fill="outline" className="mt-2 mb-3">
                  <IonInput type="password" placeholder="******"></IonInput>
                </IonItem>
                <IonLabel>Nhập mật khẩu mới :</IonLabel>
                <IonItem fill="outline" className="mt-2 mb-3">
                  <IonInput type="password" placeholder="******"></IonInput>
                </IonItem>
                <IonLabel>Nhập lại mật khẩu mới :</IonLabel>
                <IonItem fill="outline" className="mt-2 mb-3">
                  <IonInput type="password" placeholder="******"></IonInput>
                </IonItem>

                <IonRow
                  class="row-btn"
                  style={{ textAlign: "center", marginTop: "20px" }}
                >
                  <IonCol>
                    <IonButton color="tertiary" style={{ width: "110px" }}>
                      CẬP NHẬT
                    </IonButton>
                  </IonCol>
                  <IonCol>
                    <IonButton
                      onClick={() => dismiss()}
                      color="dark"
                      style={{ width: "110px" }}
                    >
                      CANCEL
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonList>
            </IonContent>
          </IonModal>
        </IonRow>
        <IonRow className="justify-content-center mt-2 d-flex">
          <IonButton className="w-75" color="dark">
            ĐĂNG XUẤT
          </IonButton>
        </IonRow>
      </IonContent>

      {/* <FooterBar></FooterBar> */}
    </IonPage>
  );
};

export default Account;

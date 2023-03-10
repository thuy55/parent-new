import {
  IonButtons,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonCol,
  IonGrid,
  IonModal,
  createAnimation,
  IonCard,
  IonCardContent,
  IonInput,
  IonButton,
  IonTextarea,
  IonFabList,
  IonRow,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonFab,
  IonFabButton,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle
} from "@ionic/react";
import { useParams } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import {
  chevronUpCircle,
  colorPalette,
  document,
  closeOutline,
  trashOutline,
  duplicateOutline,
  globe,
  add,
} from "ionicons/icons";
import "./Leave.css";
import React, { useRef } from "react";
const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
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
          <IonTitle>Xin nghỉ phép</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="box_content">
        {/* <ol id="accordion" className="rounded-list accordion">
        <li>
            <ol>
                <li><p className="link">Responsive</p>
                </li>
                <li><p className="link">SEO Friendly </p></li>
                <li><p className="link">Google Testing Tool Validator </p></li>
                <li><p className="link">Mobile Friendly</p></li>
                
                
            </ol>
        </li>
    </ol> */}
        <IonAccordionGroup className="bg-x">
        
          <IonAccordion className="bg-t"  value="r">
            <IonItem className="clo-1" slot="header" color="red">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">1</IonCol>
                    <IonCol>Ngày xin phép:</IonCol>
                    <IonCol>01/3/2022</IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding p-0 pe-2" slot="content">
              <ol id="accordion" className="rounded-list accordion">
                <li>
                  <ol>
                    <li>
                      <p className="link">
                        <IonRow>
                          <IonCol className="clo-3">Số lương</IonCol>
                          <IonCol size="9">2</IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow>
                          <IonCol className="clo-3">Bắt đầu</IonCol>
                          <IonCol size="9">22/2/2022</IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow>
                          <IonCol className="clo-3">Kết thúc</IonCol>
                          <IonCol size="9">22/22/2022</IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        {" "}
                        <IonRow>
                          <IonCol className="clo-3">Nội dung</IonCol>
                          <IonCol size="9">
                            {" "}
                            It is shown by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element.{" "}
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </IonAccordion>
          <IonAccordion className="bg-t" value="ee">
            <IonItem className="clo-2" slot="header" color="red">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">1</IonCol>
                    <IonCol>Ngày xin phép:</IonCol>
                    <IonCol>01/3/2022</IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding p-0 pe-2" slot="content">
              <ol id="accordion" className="rounded-list accordion">
                <li>
                  <ol>
                    <li>
                      <p className="link">
                        <IonRow>
                          <IonCol className="clo-3">Số lương</IonCol>
                          <IonCol size="9">2</IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow>
                          <IonCol className="clo-3">Bắt đầu</IonCol>
                          <IonCol size="9">22/2/2022</IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow>
                          <IonCol className="clo-3">Kết thúc</IonCol>
                          <IonCol size="9">22/22/2022</IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        {" "}
                        <IonRow>
                          <IonCol className="clo-3">Nội dung</IonCol>
                          <IonCol size="9">
                            {" "}
                            It is shown by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element.{" "}
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </IonAccordion>
          <IonAccordion className="bg-t" value="eq">
            <IonItem className="clo-1" slot="header" color="red">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">1</IonCol>
                    <IonCol>Ngày xin phép:</IonCol>
                    <IonCol>01/3/2022</IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding p-0 pe-2" slot="content">
              <ol id="accordion" className="rounded-list accordion">
                <li>
                  <ol>
                    <li>
                      <p className="link">
                        <IonRow>
                          <IonCol className="clo-3">Số lương</IonCol>
                          <IonCol size="9">2</IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow>
                          <IonCol className="clo-3">Bắt đầu</IonCol>
                          <IonCol size="9">22/2/2022</IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow>
                          <IonCol className="clo-3">Kết thúc</IonCol>
                          <IonCol size="9">22/22/2022</IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        {" "}
                        <IonRow>
                          <IonCol className="clo-3">Nội dung</IonCol>
                          <IonCol size="9">
                            {" "}
                            It is shown by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element.{" "}
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </IonAccordion>
          <IonAccordion className="bg-t" value="e3">
            <IonItem className="clo-2" slot="header" color="red">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">1</IonCol>
                    <IonCol>Ngày xin phép:</IonCol>
                    <IonCol>01/3/2022</IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding p-0 pe-2" slot="content">
              <ol id="accordion" className="rounded-list accordion">
                <li>
                  <ol>
                    <li>
                      <p className="link">
                        <IonRow>
                          <IonCol className="clo-3">Số lương</IonCol>
                          <IonCol size="9">2</IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow>
                          <IonCol className="clo-3">Bắt đầu</IonCol>
                          <IonCol size="9">22/2/2022</IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow>
                          <IonCol className="clo-3">Kết thúc</IonCol>
                          <IonCol size="9">22/22/2022</IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        {" "}
                        <IonRow>
                          <IonCol className="clo-3">Nội dung</IonCol>
                          <IonCol size="9">
                            {" "}
                            It is shown by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element.{" "}
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </IonAccordion>
          <IonAccordion className="bg-t" value="e5">
            <IonItem className="clo-1" slot="header" color="red">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">1</IonCol>
                    <IonCol>Ngày xin phép:</IonCol>
                    <IonCol>01/3/2022</IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding p-0 pe-2" slot="content">
              <ol id="accordion" className="rounded-list accordion">
                <li>
                  <ol>
                    <li>
                      <p className="link">
                        <IonRow>
                          <IonCol className="clo-3">Số lương</IonCol>
                          <IonCol size="9">2</IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow>
                          <IonCol className="clo-3">Bắt đầu</IonCol>
                          <IonCol size="9">22/2/2022</IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow>
                          <IonCol className="clo-3">Kết thúc</IonCol>
                          <IonCol size="9">22/22/2022</IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        {" "}
                        <IonRow>
                          <IonCol className="clo-3">Nội dung</IonCol>
                          <IonCol size="9">
                            {" "}
                            It is shown by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element.{" "}
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </IonAccordion>
          <IonAccordion value="d">
            <IonItem className="clo-2" slot="header" color="red">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">1</IonCol>
                    <IonCol>Ngày xin phép:</IonCol>
                    <IonCol>01/3/2022</IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding p-0 pe-2" slot="content">
              <ol id="accordion" className="rounded-list accordion">
                <li>
                  <ol>
                    <li>
                      <p className="link">
                        <IonRow>
                          <IonCol className="clo-3">Số lương</IonCol>
                          <IonCol size="9">2</IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow>
                          <IonCol className="clo-3">Bắt đầu</IonCol>
                          <IonCol size="9">22/2/2022</IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow>
                          <IonCol className="clo-3">Kết thúc</IonCol>
                          <IonCol size="9">22/22/2022</IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        {" "}
                        <IonRow>
                          <IonCol className="clo-3">Nội dung</IonCol>
                          <IonCol size="9">
                            {" "}
                            It is shown by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element.{" "}
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </IonAccordion>
          <IonAccordion value="first">
            <IonItem className="clo-1" slot="header" color="red">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">1</IonCol>
                    <IonCol>Ngày xin phép:</IonCol>
                    <IonCol>01/3/2022</IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding p-0 pe-2" slot="content">
              <ol id="accordion" className="rounded-list accordion">
                <li>
                  <ol>
                    <li>
                      <p className="link">
                        <IonRow>
                          <IonCol className="clo-3">Số lương</IonCol>
                          <IonCol size="9">2</IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow>
                          <IonCol className="clo-3">Bắt đầu</IonCol>
                          <IonCol size="9">22/2/2022</IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow>
                          <IonCol className="clo-3">Kết thúc</IonCol>
                          <IonCol size="9">22/22/2022</IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        {" "}
                        <IonRow>
                          <IonCol className="clo-3">Nội dung</IonCol>
                          <IonCol size="9">
                            {" "}
                            It is shown by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element.{" "}
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </IonAccordion>
          <IonAccordion value="first">
            <IonItem className="clo-2" slot="header" color="red">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">1</IonCol>
                    <IonCol>Ngày xin phép:</IonCol>
                    <IonCol>01/3/2022</IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding p-0 pe-2" slot="content">
              <ol id="accordion" className="rounded-list accordion">
                <li>
                  <ol>
                    <li>
                      <p className="link">
                        <IonRow>
                          <IonCol className="clo-3">Số lương</IonCol>
                          <IonCol size="9">2</IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow>
                          <IonCol className="clo-3">Bắt đầu</IonCol>
                          <IonCol size="9">22/2/2022</IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow>
                          <IonCol className="clo-3">Kết thúc</IonCol>
                          <IonCol size="9">22/22/2022</IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        {" "}
                        <IonRow>
                          <IonCol className="clo-3">Nội dung</IonCol>
                          <IonCol size="9">
                            {" "}
                            It is shown by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element.{" "}
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </IonAccordion>
          <IonAccordion value="first">
            <IonItem className="clo-1" slot="header" color="red">
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">1</IonCol>
                    <IonCol>Ngày xin phép:</IonCol>
                    <IonCol>01/3/2022</IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
            <div className="ion-padding p-0 pe-2" slot="content">
              <ol id="accordion" className="rounded-list accordion">
                <li>
                  <ol>
                    <li>
                      <p className="link">
                        <IonRow>
                          <IonCol className="clo-3">Số lương</IonCol>
                          <IonCol size="9">2</IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow>
                          <IonCol className="clo-3">Bắt đầu</IonCol>
                          <IonCol size="9">22/2/2022</IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow>
                          <IonCol className="clo-3">Kết thúc</IonCol>
                          <IonCol size="9">22/22/2022</IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        {" "}
                        <IonRow>
                          <IonCol className="clo-3">Nội dung</IonCol>
                          <IonCol size="9">
                            {" "}
                            It is shown by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element.{" "}
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
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton id="open-modal">
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>

        <IonModal
          id="example-modal"
          ref={modal}
          trigger="open-modal"
          enterAnimation={enterAnimation}
          leaveAnimation={leaveAnimation}
          style={{ alignItems: "start" }}
          className="overflow-hidden"
        >
          <IonContent  className="overflow-hidden">        
            <div className="container mb-0 pb-0 overflow-hidden">
              <div className="d-flex justify-content-center pt-2">  
                  <h2 className="font-weight-bold">Xin nghỉ phép</h2>
                  <IonButtons slot="end">
                     <IonButton onClick={() => dismiss()}>
                      <IonIcon color="dark" slot="end" icon={closeOutline}></IonIcon>
                     </IonButton>
                  </IonButtons>
              </div>
              <div className="d-flex justify-content-center text-muted">
                Phụ huynh vui lòng điền nội dung vào bên dưới!
              </div>
              <div className="d-md-flex flex-md-row justify-content-center py-4">
              <div className="d-flex flex-column contact px-4">
                  <div className="d-md-flex justify-content-center icon py-2">
                    {" "}
                    <span className="fa " > PHỤ HUYNH:</span>{" "}
                    <span className="mobile-info text-dark p-2 pb-3">
                    ĐINH TẤN TỚI
                    </span>{" "}
                  </div>
                  <div className="contact-info">ĐINH TẤN TỚI:</div>
                </div>
                <div className="d-flex flex-column contact px-4">
                  <div className="d-md-flex justify-content-center icon py-2">
                    {" "}
                    <span className="fa ">HỌC SINH</span>{" "}
                    <span className="mobile-info text-dark p-2 pb-3">
                   ĐINH TẤN TỚI
                    </span>{" "}
                  </div>
                  <div className="contact-info">HỌC SINH: ĐINH TẤN TỚI</div>
                </div>
                <div className="d-flex flex-column contact px-4">
                  <div className="d-md-flex justify-content-center icon py-2">
                    {" "}
                    <span className="fa "> GVCN:</span>{" "}
                    <span className="mobile-info text-dark p-2 pb-3">
                   ĐINH TẤN TỚI
                    </span>{" "}
                  </div>
                  <div className="contact-info">ĐINH TẤN TỚI</div>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-center">
                <form className="w-xl-50 w-lg-75">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          {" "}
                          <label>Ngày bắt đầu:</label>
                          <div className="input-field">
                            {" "}
                            <span className="fa fa-user-o p-2 border-right"></span>{" "}
                            <input type="date" required />{" "}
                          </div>
                        </div>
                        <div className="form-group">
                          {" "}
                          <label>Ngày kết thúc:</label>
                          <div className="input-field">
                            {" "}
                            <span className="fa fa-envelope-o p-2"></span>{" "}
                            <input type="date" required />{" "}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group"> <label>Nội dung:</label>
                            <div className="input-field bg-light"> <textarea name="message" id="msg"  className="form-control bg-light" placeholder="Nội dung"></textarea> </div>
                        </div>
                    </div>
                      <div className="d-flex flex-row justify-content-center w-100">
                        {" "}
                        <input
                          type="button"
                          value="Gửi"
                          className="btn"
                        />{" "}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Page;

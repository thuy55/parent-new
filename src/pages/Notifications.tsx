import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import React from "react";
import { IonItem } from "@ionic/react";
import { checkmarkDoneOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import { IonChip, IonAvatar, IonLabel, IonIcon } from "@ionic/react";
// import TabApp from "./TabApp";
const Notifications: React.FC = () => {
  // const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" style={{ color: "#f08c00" }}>
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end">
            <IonIcon
              icon={checkmarkDoneOutline}
              size="large"
              style={{ color: "#f08c00" }}
            ></IonIcon>
          </IonButtons>
          <IonTitle>Thông báo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="container">
        <Link to="/NotificationDetail">
          <IonItem button detail={true} style={{ marginTop: "15px" }}>
          <IonAvatar>
                  <img
                    alt="Silhouette of a person's head"
                    src="https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg"
                  />
                </IonAvatar>
            <IonLabel style={{ marginLeft: "10px" }}>
              <h2>Thông báo họp phụ huynh</h2>
              <p>Họp phụ huynh về vấn đề đánh nhau ở trường học</p>
              <IonChip style={{ margin: 0 }}>
                <IonAvatar>
                  <img
                    alt="Silhouette of a person's head"
                    src="https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg"
                  />
                </IonAvatar>
                <IonLabel>Kế hoạch nghỉ tết.docx</IonLabel>
              </IonChip>
            </IonLabel>
          </IonItem>
        </Link>
        <Link to="/NotificationDetail">
          <IonItem button detail={true}>
            <IonAvatar>
              <img
                alt="Silhouette of a person's head"
                src="https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg"
              />
            </IonAvatar>
            <IonLabel style={{ marginLeft: "10px" }}>
              <h2>Thông báo họp phụ huynh</h2>
              <p>Họp phụ huynh về vấn đề đánh nhau ở trường học</p>
              <IonChip style={{ margin: 0 }}>
                <IonAvatar>
                  <img
                    alt="Silhouette of a person's head"
                    src="https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg"
                  />
                </IonAvatar>
                <IonLabel>Kế hoạch nghỉ tết.docx</IonLabel>
              </IonChip>
            </IonLabel>
          </IonItem>
        </Link>
        <Link to="/NotificationDetail">
          <IonItem button detail={true}>
            <IonAvatar>
              <img
                alt="Silhouette of a person's head"
                src="https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg"
              />
            </IonAvatar>
            <IonLabel style={{ marginLeft: "10px" }}>
              <h2>Thông báo họp phụ huynh</h2>
              <p>Họp phụ huynh về vấn đề đánh nhau ở trường học</p>
              <IonChip style={{ margin: 0 }}>
                <IonAvatar>
                  <img
                    alt="Silhouette of a person's head"
                    src="https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg"
                  />
                </IonAvatar>
                <IonLabel>Kế hoạch nghỉ tết.docx</IonLabel>
              </IonChip>
            </IonLabel>
          </IonItem>
        </Link>
        <Link to="/NotificationDetail">
          <IonItem button detail={true}>
            <IonAvatar>
              <img
                alt="Silhouette of a person's head"
                src="https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg"
              />
            </IonAvatar>
            <IonLabel style={{ marginLeft: "10px" }}>
              <h2>Thông báo họp phụ huynh</h2>
              <p>Họp phụ huynh về vấn đề đánh nhau ở trường học</p>
              <IonChip style={{ margin: 0 }}>
                <IonAvatar>
                  <img
                    alt="Silhouette of a person's head"
                    src="https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg"
                  />
                </IonAvatar>
                <IonLabel>Kế hoạch nghỉ tết.docx</IonLabel>
              </IonChip>
            </IonLabel>
          </IonItem>
        </Link>
        <Link to="/NotificationDetail">
          <IonItem button detail={true}>
            <IonAvatar>
              <img
                alt="Silhouette of a person's head"
                src="https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg"
              />
            </IonAvatar>
            <IonLabel style={{ marginLeft: "10px" }}>
              <h2>Thông báo họp phụ huynh</h2>
              <p>Họp phụ huynh về vấn đề đánh nhau ở trường học</p>
              <IonChip style={{ margin: 0 }}>
                <IonAvatar>
                  <img
                    alt="Silhouette of a person's head"
                    src="https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg"
                  />
                </IonAvatar>
                <IonLabel>Kế hoạch nghỉ tết.docx</IonLabel>
              </IonChip>
            </IonLabel>
          </IonItem>
        </Link>
        <Link to="/NotificationDetail">
          <IonItem button detail={true}>
            <IonAvatar>
              <img
                alt="Silhouette of a person's head"
                src="https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg"
              />
            </IonAvatar>
            <IonLabel style={{ marginLeft: "10px" }}>
              <h2>Thông báo họp phụ huynh</h2>
              <p>Họp phụ huynh về vấn đề đánh nhau ở trường học</p>
              <IonChip style={{ margin: 0 }}>
                <IonAvatar>
                  <img
                    alt="Silhouette of a person's head"
                    src="https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg"
                  />
                </IonAvatar>
                <IonLabel>Kế hoạch nghỉ tết.docx</IonLabel>
              </IonChip>
            </IonLabel>
          </IonItem>
        </Link>
        <Link to="/NotificationDetail">
          <IonItem button detail={true}>
            <IonAvatar>
              <img
                alt="Silhouette of a person's head"
                src="https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg"
              />
            </IonAvatar>
            <IonLabel style={{ marginLeft: "10px" }}>
              <h2>Thông báo họp phụ huynh</h2>
              <p>Họp phụ huynh về vấn đề đánh nhau ở trường học</p>
              <IonChip style={{ margin: 0 }}>
                <IonAvatar>
                  <img
                    alt="Silhouette of a person's head"
                    src="https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg"
                  />
                </IonAvatar>
                <IonLabel>Kế hoạch nghỉ tết.docx</IonLabel>
              </IonChip>
            </IonLabel>
          </IonItem>
        </Link>
        <Link to="/NotificationDetail">
          <IonItem button detail={true}>
            <IonAvatar>
              <img
                alt="Silhouette of a person's head"
                src="https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg"
              />
            </IonAvatar>
            <IonLabel style={{ marginLeft: "10px" }}>
              <h2>Thông báo họp phụ huynh</h2>
              <p>Họp phụ huynh về vấn đề đánh nhau ở trường học</p>
              <IonChip style={{ margin: 0 }}>
                <IonAvatar>
                  <img
                    alt="Silhouette of a person's head"
                    src="https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg"
                  />
                </IonAvatar>
                <IonLabel>Kế hoạch nghỉ tết.docx</IonLabel>
              </IonChip>
            </IonLabel>
          </IonItem>
        </Link>
        <Link to="/NotificationDetail">
          <IonItem button detail={true}>
            <IonAvatar>
              <img
                alt="Silhouette of a person's head"
                src="https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg"
              />
            </IonAvatar>
            <IonLabel style={{ marginLeft: "10px" }}>
              <h2>Thông báo họp phụ huynh</h2>
              <p>Họp phụ huynh về vấn đề đánh nhau ở trường học</p>
              <IonChip style={{ margin: 0 }}>
                <IonAvatar>
                  <img
                    alt="Silhouette of a person's head"
                    src="https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg"
                  />
                </IonAvatar>
                <IonLabel>Kế hoạch nghỉ tết.docx</IonLabel>
              </IonChip>
            </IonLabel>
          </IonItem>
        </Link>
      </IonContent>
    </IonPage>
  );
};

export default Notifications;

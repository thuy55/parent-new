import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import React from "react";
import { IonItem, IonLabel } from "@ionic/react";
import { IonIcon } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import { IonFooter } from "@ionic/react";

const NotificationDetail: React.FC = () => {
  // const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <Link to="/Notifications">
              <IonIcon
                icon={arrowBackOutline}
                size="large"
                style={{ color: "#f08c00", marginLeft: "12px" }}
              ></IonIcon>
            </Link>
          </IonButtons>
          <IonTitle>Chi tiết thông báo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="container">
        <IonCard style={{ marginTop: "10px" }}>
          <IonCardHeader>
            <IonCardTitle>Thông báo họp phụ huynh</IonCardTitle>
            <IonCardSubtitle>
              Họp phụ huynh về vấn đề đánh nhau ở trường học...
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil
            laborum facere cumque ratione minus aperiam officiis consequuntur
            cum nam deserunt odio eligendi maxime ipsa quia dolorum suscipit
            quis debitis aliquam omnis, nobis sint. Quaerat animi sint beatae
            tempore! Assumenda aliquid sequi nostrum rerum accusantium odit
            consectetur veritatis laudantium quod a dolore officiis et obcaecati
            aut quaerat suscipit reprehenderit facere necessitatibus maxime hic
            sunt, quos beatae! Reprehenderit magnam totam sit laudantium commodi
            corrupti animi accusantium molestiae, quod quaerat unde quae laborum
            recusandae perferendis id dolor temporibus. Cum, eius sunt. Modi
            tenetur dolor vel reiciendis non, reprehenderit facere autem
            laudantium possimus Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Esse nihil laborum facere cumque ratione minus
            aperiam officiis consequuntur cum nam deserunt odio eligendi maxime
            ipsa quia dolorum suscipit quis debitis aliquam omnis, nobis sint.
            Quaerat animi sint beatae tempore! Assumenda aliquid sequi nostrum
            rerum accusantium odit consectetur veritatis laudantium quod a
            dolore officiis et obcaecati aut quaerat suscipit reprehenderit
            facere necessitatibus maxime hic sunt, quos beatae! Reprehenderit
            magnam totam sit laudantium commodi corrupti animi accusantium
            molestiae, quod quaerat unde quae laborum recusandae perferendis id
            dolor temporibus. Cum, eius sunt. Modi tenetur dolor vel reiciendis
            non, reprehenderit facere autem laudantium possimus. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Esse nihil laborum
            facere cumque ratione minus aperiam officiis consequuntur cum nam
            deserunt odio eligendi maxime ipsa quia dolorum suscipit quis
            debitis aliquam omnis, nobis sint. Quaerat animi sint beatae
            tempore! Assumenda aliquid sequi nostrum rerum accusantium odit
            consectetur veritatis laudantium quod a dolore officiis et obcaecati
            aut quaerat suscipit reprehenderit facere necessitatibus maxime hic
            sunt, quos beatae! Reprehenderit magnam totam sit laudantium commodi
            corrupti animi accusantium molestiae, quod quaerat unde quae laborum
            recusandae perferendis id dolor temporibus. Cum, eius sunt. Modi
            tenetur dolor vel reiciendis non, reprehenderit facere autem
            laudantium possimus.
          </IonCardContent>
          <IonFooter>
            <IonToolbar>
              <IonItem slot="start">Hiệu trưởng</IonItem>
              <IonItem slot="end">01-03-2023</IonItem>
            </IonToolbar>
          </IonFooter>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default NotificationDetail;

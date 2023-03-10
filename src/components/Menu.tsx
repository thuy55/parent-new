import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRow,
} from '@ionic/react';
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { getToken, removeUserSession , setUserSession } from '../pages/Common';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp, homeOutline, homeSharp, alarmOutline, alarmSharp, layersOutline, layersSharp, backspaceOutline, backspaceSharp, schoolOutline, schoolSharp, busOutline, busSharp, notificationsOutline, notificationsSharp, personCircleOutline, personCircleSharp } from 'ionicons/icons';
import './Menu.css';
import {createOutline, createSharp,  fitnessOutline, fitnessSharp, calendarOutline, calendarSharp, brushOutline, brushSharp, peopleOutline, peopleSharp,
  personOutline, personSharp, printOutline, printSharp, calculatorOutline, calculatorSharp } from 'ionicons/icons';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [

  // {
  //   title: 'HealthRecord',
  //   url: '/HealthRecord',
  //   iosIcon: warningOutline,
  //   mdIcon: warningSharp
  // },
  {
    title: 'Trang chủ',
    url: '/dashboard',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Nhật ký điểm danh',
    url: '/attendanceDiary',
    iosIcon: alarmOutline,
    mdIcon:alarmSharp
  },
  {
    title: 'Kết quả học tập',
    url: '/scores',
    iosIcon: brushOutline,
    mdIcon:brushSharp
  },
  {
    title: 'Thời khóa biểu',
    url: '/schedule',
    iosIcon: calendarOutline,
    mdIcon: calendarSharp
  },
  {
    title: 'Thực đơn',
    url: '/meals',
    iosIcon: layersOutline,
    mdIcon: layersSharp
  },
  {
    title: 'Xin nghỉ phép',
    url: '/leave',
    iosIcon: backspaceOutline,
    mdIcon: backspaceSharp
  },
  {
    title: 'Hồ sơ sức khỏe',
    url: '/healthRecord',
    iosIcon: fitnessOutline,
    mdIcon: fitnessSharp
  },
  {
    title: 'Hoạt động trường',
    url: '/news',
    iosIcon: schoolOutline,
    mdIcon: schoolSharp
  },
 
  {
    title: 'Hồ sơ học sinh',
    url: '/Profile',
    iosIcon: personCircleOutline,
    mdIcon: personCircleSharp
  },
  
  {
    title: 'Danh sách giáo viên',
    url: '/Teacher',
    iosIcon: peopleOutline,
    mdIcon: peopleSharp
  },
  {
    title: 'Thông tin tài khoản',
    url: '/Account',
    iosIcon: personOutline,
    mdIcon: personSharp
  },
  {
    title: 'Tra cứu công nợ',
    url: '/Debt',
    iosIcon: printOutline,
    mdIcon: printSharp,
  },
  {
    title: 'Sổ thu chi',
    url: '/Cash',
    iosIcon: calculatorOutline,
    mdIcon: calculatorSharp,
  },
  {
    title: 'Đưa đón học sinh',
    url: '/Move',
    iosIcon: busOutline,
    mdIcon: busSharp
  },

  {
    title: 'Đóng góp ý kiến',
    url: '/opinion',
    iosIcon: createOutline,
    mdIcon: createSharp
  },
  {
    title: 'Thông báo',
    url: '/notifications',
    iosIcon: notificationsOutline,
    mdIcon: notificationsSharp
  },
  


];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const handleLogout = () => {
    removeUserSession();
    history.push('/');
  }

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>ECLO</IonListHeader>
          <IonNote>www.eclo.vn</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonRow className='justify-content-center mt-4 d-flex'>
          {/* <IonButton className='w-50'  color="dark">ĐĂNG XUẤT</IonButton> */}
          <input type="button" className='w-50 bg-danger text-white p-2 fw-bold rounded-3' onClick={handleLogout} value="ĐĂNG XUẤT" />
          </IonRow>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;

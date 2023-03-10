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
  IonIcon,IonButton
} from "@ionic/react";
import './Move.css';
// import { useParams } from 'react-router';
// import ExploreContainer from '../components/ExploreContainer';

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
          <IonTitle>Đưa đón học sinh</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="container">
        <div className="card border-0 mb-0 border-top mt-0">
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
                  Xe đón đi
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
                 Xe đón về
                </button>
              </li>
            </ul>
          </div>
          <form className="card-body tab-content p-0">
            <div className="tab-pane active" id="nav-home">
            <div className="page-content page-container" id="page-content">
            <div className="">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="timeline mb-0 p-1 pt-3 block mb-4">
                            <div className="tl-item active">
                                <div className="tl-dot"><a className="tl-author" href="#" data-abc="true"><span className="w-32 avatar2 circle gd-warning">Thứ 2</span></a></div>
                                <div className="tl-content w-100">
                                <div className="tl-date text-muted mt-1">22 june,2018</div>
                                        <IonCard className="me-2 move-1">
                                                <IonCardContent>
                                                      <IonGrid className="">
                                                          <IonRow className="pt-1">
                                                            <IonCol className="text-2">Loại xe</IonCol>
                                                            <IonCol className="text-1" size="7">14 chỗ</IonCol>
                                                          </IonRow>
                                                          <IonRow className="pt-3">
                                                            <IonCol className="text-2">Biển số:</IonCol>
                                                            <IonCol className="text-1" size="7">552277-NB</IonCol>
                                                          </IonRow>
                                                          <IonRow className="pt-3">
                                                            <IonCol className="text-2">tài xế: </IonCol>
                                                            <IonCol className="text-1" size="7">Chu Văn An</IonCol>
                                                          </IonRow>          
                                                          <IonButton expand="block" className="mt-3">Xem thêm...</IonButton>
                                                        </IonGrid>
                                                </IonCardContent>
                                              </IonCard>
                                           
                                        </div>
                                    </div>
                                    <div className="tl-item active">
                                        <div className="tl-dot"><a className="tl-author" href="#" data-abc="true"><span className="w-32 avatar2 circle gd-warning">Thứ 3</span></a></div>
                                        <div className="tl-content w-100">
                                        <div className="tl-date text-muted mt-1">22 june,2018</div>
                                        <IonCard className="me-2 move-2">
                                                <IonCardContent>
                                                      <IonGrid className="">
                                                          <IonRow className="pt-1">
                                                            <IonCol className="text-2">Loại xe</IonCol>
                                                            <IonCol className="text-1" size="7">14 chỗ</IonCol>
                                                          </IonRow>
                                                          <IonRow className="pt-3">
                                                            <IonCol className="text-2">Biển số:</IonCol>
                                                            <IonCol className="text-1" size="7">552277-NB</IonCol>
                                                          </IonRow>
                                                          <IonRow className="pt-3">
                                                            <IonCol className="text-2">tài xế: </IonCol>
                                                            <IonCol className="text-1" size="7">Chu Văn An</IonCol>
                                                          </IonRow>          
                                                          <IonButton expand="block" className="mt-3">Xem thêm...</IonButton>
                                                        </IonGrid>
                                                </IonCardContent>
                                              </IonCard>
                                        </div>
                                    </div>
                                    <div className="tl-item active">
                                        <div className="tl-dot"><a className="tl-author" href="#" data-abc="true"><span className="w-32 avatar2 circle gd-warning">Thứ 4</span></a></div>
                                        <div className="tl-content w-100">
                                        <div className="tl-date text-muted mt-1">22 june,2018</div>
                                        <IonCard className="me-2 move-3">
                                                <IonCardContent>
                                                      <IonGrid className="">
                                                          <IonRow className="pt-1">
                                                            <IonCol className="text-2">Loại xe</IonCol>
                                                            <IonCol className="text-1" size="7">14 chỗ</IonCol>
                                                          </IonRow>
                                                          <IonRow className="pt-3">
                                                            <IonCol className="text-2">Biển số:</IonCol>
                                                            <IonCol className="text-1" size="7">552277-NB</IonCol>
                                                          </IonRow>
                                                          <IonRow className="pt-3">
                                                            <IonCol className="text-2">tài xế: </IonCol>
                                                            <IonCol className="text-1" size="7">Chu Văn An</IonCol>
                                                          </IonRow>          
                                                          <IonButton expand="block" className="mt-3">Xem thêm...</IonButton>
                                                        </IonGrid>
                                                </IonCardContent>
                                              </IonCard>
                                           
                                        </div>
                                    </div>
                                    <div className="tl-item active">
                                        <div className="tl-dot"><a className="tl-author" href="#" data-abc="true"><span className="w-32 avatar2 circle gd-warning">Thứ 5</span></a></div>
                                        <div className="tl-content w-100">
                                        <div className="tl-date text-muted mt-1">22 june,2018</div>
                                        <IonCard className="me-2 move-4">
                                                <IonCardContent>
                                                      <IonGrid className="">
                                                          <IonRow className="pt-1">
                                                            <IonCol className="text-2">Loại xe</IonCol>
                                                            <IonCol className="text-1" size="7">14 chỗ</IonCol>
                                                          </IonRow>
                                                          <IonRow className="pt-3">
                                                            <IonCol className="text-2">Biển số:</IonCol>
                                                            <IonCol className="text-1" size="7">552277-NB</IonCol>
                                                          </IonRow>
                                                          <IonRow className="pt-3">
                                                            <IonCol className="text-2">tài xế: </IonCol>
                                                            <IonCol className="text-1" size="7">Chu Văn An</IonCol>
                                                          </IonRow>          
                                                          <IonButton expand="block" className="mt-3">Xem thêm...</IonButton>
                                                        </IonGrid>
                                                </IonCardContent>
                                              </IonCard>
                                           
                                        </div>
                                    </div>
                                    <div className="tl-item active">
                                        <div className="tl-dot"><a className="tl-author" href="#" data-abc="true"><span className="w-32 avatar2 circle gd-warning">Thứ 6</span></a></div>
                                        <div className="tl-content w-100">
                                        <div className="tl-date text-muted mt-1">22 june,2018</div>
                                        <IonCard className="me-2 move-5">
                                                <IonCardContent>
                                                      <IonGrid className="">
                                                          <IonRow className="pt-1">
                                                            <IonCol className="text-2">Loại xe</IonCol>
                                                            <IonCol className="text-1" size="7">14 chỗ</IonCol>
                                                          </IonRow>
                                                          <IonRow className="pt-3">
                                                            <IonCol className="text-2">Biển số:</IonCol>
                                                            <IonCol className="text-1" size="7">552277-NB</IonCol>
                                                          </IonRow>
                                                          <IonRow className="pt-3">
                                                            <IonCol className="text-2">tài xế: </IonCol>
                                                            <IonCol className="text-1" size="7">Chu Văn An</IonCol>
                                                          </IonRow>          
                                                          <IonButton expand="block" className="mt-3">Xem thêm...</IonButton>
                                                        </IonGrid>
                                                </IonCardContent>
                                              </IonCard>
                          
                                        </div>
                                    </div>
                              </div>
                            </div>     
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane" id="nav-ts">
            <div className="page-content page-container" id="page-content">
            <div className="">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="timeline p-1 pt-3 block mb-4">
                            <div className="tl-item active">
                                <div className="tl-dot"><a className="tl-author" href="#" data-abc="true"><span className="w-32 avatar2 circle gd-warning">Thứ 2</span></a></div>
                                <div className="tl-content w-100">
                                <div className="tl-date text-muted mt-1">22 june,2018</div>
                                <IonCard className="me-2 move-1">
                                        <IonCardContent>
                                              <IonGrid className="">
                                                  <IonRow className="pt-1">
                                                    <IonCol className="text-2">Loại xe</IonCol>
                                                    <IonCol className="text-1" size="7">14 chỗ</IonCol>
                                                  </IonRow>
                                                  <IonRow className="pt-3">
                                                    <IonCol className="text-2">Biển số:</IonCol>
                                                    <IonCol className="text-1" size="7">552277-NB</IonCol>
                                                  </IonRow>
                                                  <IonRow className="pt-3">
                                                    <IonCol className="text-2">tài xế: </IonCol>
                                                    <IonCol className="text-1" size="7">Công Lý</IonCol>
                                                  </IonRow>          
                                                  <IonButton expand="block" className="mt-3">Xem thêm...</IonButton>
                                                </IonGrid>
                                        </IonCardContent>
                                      </IonCard>
                                   
                                </div>
                            </div>
                            <div className="tl-item active">
                                <div className="tl-dot"><a className="tl-author" href="#" data-abc="true"><span className="w-32 avatar2 circle gd-warning">Thứ 3</span></a></div>
                                <div className="tl-content w-100">
                                <div className="tl-date text-muted mt-1">22 june,2018</div>
                                <IonCard className="me-2 move-2">
                                        <IonCardContent>
                                              <IonGrid className="">
                                                  <IonRow className="pt-1">
                                                    <IonCol className="text-2">Loại xe</IonCol>
                                                    <IonCol className="text-1" size="7">14 chỗ</IonCol>
                                                  </IonRow>
                                                  <IonRow className="pt-3">
                                                    <IonCol className="text-2">Biển số:</IonCol>
                                                    <IonCol className="text-1" size="7">552277-NB</IonCol>
                                                  </IonRow>
                                                  <IonRow className="pt-3">
                                                    <IonCol className="text-2">tài xế: </IonCol>
                                                    <IonCol className="text-1" size="7">Chu Văn An</IonCol>
                                                  </IonRow>          
                                                  <IonButton expand="block" className="mt-3">Xem thêm...</IonButton>
                                                </IonGrid>
                                        </IonCardContent>
                                      </IonCard>
                                </div>
                            </div>
                            <div className="tl-item active">
                                <div className="tl-dot"><a className="tl-author" href="#" data-abc="true"><span className="w-32 avatar2 circle gd-warning">Thứ 4</span></a></div>
                                <div className="tl-content w-100">
                                <div className="tl-date text-muted mt-1">22 june,2018</div>
                                <IonCard className="me-2 move-3">
                                        <IonCardContent>
                                              <IonGrid className="">
                                                  <IonRow className="pt-1">
                                                    <IonCol className="text-2">Loại xe</IonCol>
                                                    <IonCol className="text-1" size="7">14 chỗ</IonCol>
                                                  </IonRow>
                                                  <IonRow className="pt-3">
                                                    <IonCol className="text-2">Biển số:</IonCol>
                                                    <IonCol className="text-1" size="7">552277-NB</IonCol>
                                                  </IonRow>
                                                  <IonRow className="pt-3">
                                                    <IonCol className="text-2">tài xế: </IonCol>
                                                    <IonCol className="text-1" size="7">Chu Văn An</IonCol>
                                                  </IonRow>          
                                                  <IonButton expand="block" className="mt-3">Xem thêm...</IonButton>
                                                </IonGrid>
                                        </IonCardContent>
                                      </IonCard>
                                  
                                </div>
                            </div>
                            <div className="tl-item active">
                                <div className="tl-dot"><a className="tl-author" href="#" data-abc="true"><span className="w-32 avatar2 circle gd-warning">Thứ 5</span></a></div>
                                <div className="tl-content w-100">
                                <div className="tl-date text-muted mt-1">22 june,2018</div>
                                <IonCard className="me-2 move-4">
                                        <IonCardContent>
                                              <IonGrid className="">
                                                  <IonRow className="pt-1">
                                                    <IonCol className="text-2">Loại xe</IonCol>
                                                    <IonCol className="text-1" size="7">14 chỗ</IonCol>
                                                  </IonRow>
                                                  <IonRow className="pt-3">
                                                    <IonCol className="text-2">Biển số:</IonCol>
                                                    <IonCol className="text-1" size="7">552277-NB</IonCol>
                                                  </IonRow>
                                                  <IonRow className="pt-3">
                                                    <IonCol className="text-2">tài xế: </IonCol>
                                                    <IonCol className="text-1" size="7">Chu Văn An</IonCol>
                                                  </IonRow>          
                                                  <IonButton expand="block" className="mt-3">Xem thêm...</IonButton>
                                                </IonGrid>
                                        </IonCardContent>
                                      </IonCard>
                                   
                                </div>
                            </div>
                            <div className="tl-item active">
                                <div className="tl-dot"><a className="tl-author" href="#" data-abc="true"><span className="w-32 avatar2 circle gd-warning">Thứ 6</span></a></div>
                                <div className="tl-content w-100">
                                <div className="tl-date text-muted mt-1">22 june,2018</div>
                                <IonCard className="me-2 move-5">
                                        <IonCardContent>
                                              <IonGrid className="">
                                                  <IonRow className="pt-1">
                                                    <IonCol className="text-2">Loại xe</IonCol>
                                                    <IonCol className="text-1" size="7">14 chỗ</IonCol>
                                                  </IonRow>
                                                  <IonRow className="pt-3">
                                                    <IonCol className="text-2">Biển số:</IonCol>
                                                    <IonCol className="text-1" size="7">552277-NB</IonCol>
                                                  </IonRow>
                                                  <IonRow className="pt-3">
                                                    <IonCol className="text-2">tài xế: </IonCol>
                                                    <IonCol className="text-1" size="7">Chu Văn An</IonCol>
                                                  </IonRow>          
                                                  <IonButton expand="block" className="mt-3">Xem thêm...</IonButton>
                                                </IonGrid>
                                        </IonCardContent>
                                      </IonCard>
                                </div>
                            </div>
                       </div>
                    </div>     
                </div>
            </div>
        </div>
            </div>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HealthRecord;

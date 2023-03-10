import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
  IonChip,
} from "@ionic/react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./Meals.css";
import { Link } from "react-router-dom";

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
    title: "Gà hấp hành tiêu ngò full toping",
    img: "https://images.unsplash.com/photo-1550728193-be87c574be86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    kcal: "155",
  },
];

interface Props {
  text: any;
  color1: any;
  color2: any;
  id: any;
}
const listMeal = [
  { id: 1, name: "Bữa sáng", color1: "#93291e", color2: " #ed213a" },
  { id: 2, name: "Bữa trưa", color1: "#087f5b", color2: "#0ca678" },
  { id: 3, name: "Bữa chiều", color1: "#364fc7", color2: "#4c6ef5" },
];
const MenuCard: React.FC<Props> = (props: Props) => {
  return (
    <>
      <IonChip
        className="fs-5"
        style={{
          color: "white",
          backgroundImage: `linear-gradient(140deg, ${props.color1} 50% , ${props.color2}  75%)`,
          marginBottom: "12px",
        }}
      >
        {props.text}
      </IonChip>
      <div className="meals d-flex gap-3 mx-3" style={{ overflowX: "scroll" }}>
        {dataMeals.map((item) => (
          <>
            <ul className="d-flex list-unstyled">
              <Link to="./MealsDetail">
                <li style={{ width: "173px" }} key={item.idMeal}>
                  <div className="rounded-4 overflow-hidden shadow-sm border bg-white">
                    <img
                      src={item.img}
                      alt="..."
                      style={{ width: "172px", height: "140px" }}
                    />
                    <div className="card-title text-dark text-center fw-bold p-1 mt-2">
                      {item.title}
                    </div>
                    <p
                      className="card-text text-center fs-6 p-1 my-2 fw-bold"
                      style={{ color: "#d6336c" }}
                    >
                      {item.kcal} Kcal
                    </p>
                  </div>
                </li>
              </Link>
            </ul>
          </>
        ))}
      </div>
    </>
  );
};
const Meals: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" style={{ color: "#f08c00" }}>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Thực đơn</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="container">
        <div style={{ marginTop: "10px" }}>
          <ul
            className="nav nav-pills mx-3  w-100 "
            id="pills-tab"
            role="tablist"
            style={{ overflowX: "scroll" }}
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="thu2"
                data-bs-toggle="pill"
                data-bs-target="#pills-thu2"
                type="button"
                role="tab"
                aria-controls="pills-thu2"
                aria-selected="true"
              >
                Thứ 2
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="thu3"
                data-bs-toggle="pill"
                data-bs-target="#pills-thu3"
                type="button"
                role="tab"
                aria-controls="pills-thu3"
                aria-selected="false"
              >
                Thứ 3
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="thu4"
                data-bs-toggle="pill"
                data-bs-target="#pills-thu4"
                type="button"
                role="tab"
                aria-controls="pills-thu4"
                aria-selected="false"
              >
                Thứ 4
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="thu5"
                data-bs-toggle="pill"
                data-bs-target="#pills-thu5"
                type="button"
                role="tab"
                aria-controls="pills-thu5"
                aria-selected="false"
              >
                Thứ 5
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="thu6"
                data-bs-toggle="pill"
                data-bs-target="#pills-thu6"
                type="button"
                role="tab"
                aria-controls="pills-thu6"
                aria-selected="false"
              >
                Thứ 6
              </button>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-thu2"
            role="tabpanel"
            aria-labelledby="thu2"
          >
            <IonSearchbar
              color="warning"
              placeholder="Tìm kiếm món ăn"
              style={{
                paddingLeft: "14px",
                paddingRight: "14px",
              }}
            ></IonSearchbar>
            <>
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
            </>
          </div>
          <div
            className="tab-pane fade"
            id="pills-thu3"
            role="tabpanel"
            aria-labelledby="thu3"
          >
            <IonSearchbar
              color="warning"
              placeholder="Tìm kiếm món ăn"
              style={{
                paddingLeft: "14px",
                paddingRight: "14px",
              }}
            ></IonSearchbar>
            <>
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
            </>
          </div>
          <div
            className="tab-pane fade"
            id="pills-thu4"
            role="tabpanel"
            aria-labelledby="thu4"
          >
            <IonSearchbar
              color="warning"
              placeholder="Tìm kiếm món ăn"
              style={{
                paddingLeft: "14px",
                paddingRight: "14px",
              }}
            ></IonSearchbar>
            <>
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
            </>
          </div>
          <div
            className="tab-pane fade"
            id="pills-thu5"
            role="tabpanel"
            aria-labelledby="thu5"
          >
            <IonSearchbar
              color="warning"
              placeholder="Tìm kiếm món ăn"
              style={{
                paddingLeft: "14px",
                paddingRight: "14px",
              }}
            ></IonSearchbar>
            <>
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
            </>
          </div>
          <div
            className="tab-pane fade"
            id="pills-thu6"
            role="tabpanel"
            aria-labelledby="thu6"
          >
            <IonSearchbar
              color="warning"
              placeholder="Tìm kiếm món ăn"
              style={{
                paddingLeft: "14px",
                paddingRight: "14px",
              }}
            ></IonSearchbar>
            <>
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
            </>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Meals;

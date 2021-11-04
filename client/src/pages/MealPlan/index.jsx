import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Button, { BackButton } from "../../components/Buttons";
import { Container } from "../../components/Containers";
import axios from "axios";

const MealPlan = () => {
  const params = useParams();
  const id = params?.recipeId;

  const [mealPlanData, setMealPlanData] = useState();
  useEffect(() => {
    async function fetchMealPlanData() {
      const res = await axios.get(`/api/mealPlan/${id}`);
      setMealPlanData(res.data);
    }
    fetchMealPlanData();
  }, [id]);

  const shoppingList = mealPlanData?.shoppingList;
  const picture = mealPlanData?.recipe?.picture?.avatar;

  return (
    <>
      <Container
        style={{
          textAlign: "left",
          paddingLeft: "100px",
          margin: "0 auto",
          width: "600px",
          marginTop: "100px",
        }}
      >
        <BackButton
          style={{ margin: "25px 80px 0px -50px", position: "absolute" }}
        />
        <h1>Meal Planner</h1>
        <div>
          {shoppingList?.map((item) => {
            return (
              <div key={item._id}>
                <label style={{ marginLeft: "10px" }}>
                  <input
                    type="checkbox"
                    id={`${item._id}`}
                    name={`${item.name}`}
                    value="shoppingList"
                    style={{ marginLeft: "10px", marginBottom: "15px" }}
                    className="strikethrough"
                  />{" "}
                  <span>
                    <b>{`${item.amount} ${item.unit}`}</b> {`${item.name}`}
                  </span>
                </label>
              </div>
            );
          })}
        </div>
        <Link
          to={{
            pathname: `/planner/${id}/steps`,
            state: { data: { mealPlanData } },
          }}
        >
          <Button.Alt
            style={{
              width: "150px",
              color: "white",
              backgroundColor: "black",
              marginTop: "60px",
            }}
          >
            Next
          </Button.Alt>
        </Link>
        <img
          src={picture}
          alt="food"
          style={{
            height: "400px",
            width: "350px",
            marginLeft: "500px",
            marginTop: "20px",
            position: "absolute",
          }}
        />
      </Container>
    </>
  );
};

export default MealPlan;

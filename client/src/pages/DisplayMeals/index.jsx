import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons/index";

const DisplayMeals = () => {
  const [card, setCard] = useState();
  const [breakfast, setBreakfast] = useState();
  const [lunch, setLunch] = useState();
  const [dinner, setDinner] = useState();

  useEffect(() => {
    async function fetchRecipeData() {
      const res = await axios.get("/api/recipes");
      setCard(res.data);

      //* Filter by type (Breakfast)
      const bkfast = res.data?.filter((item)=>{
        return(
            item.type === "Breakfast"
        )
      })
      setBreakfast(bkfast)

      //* Filter by type (Lunch)
      const lunchData = res.data?.filter((item)=>{
        return(
            item.type === "Lunch"
        )
      })
      setLunch(lunchData)

      //* Filter by type (Dinner)
      const dinnerData = res.data?.filter((item)=>{
        return(
            item.type === "Dinner"
        )
      })
      setDinner(dinnerData)

    }
    fetchRecipeData();

  }, []);

  //* All recipe data
  console.log("All cards", card);
  console.log("Breakfast", breakfast)
  console.log("Lunch", lunch)
  console.log("Dinner", dinner)


  return (
    <>
      <div className="menuIndex">
        <h1>Meals</h1>

        <h3>Breakfast</h3>
        <div className="container">
          {breakfast?.map((item) => {
            return (
              <>
                <div key={item._id} className="card">
                  <img
                    src={item.picture}
                    alt="Avatar"
                    style={{ width: "100%" }}
                    className="landing-image"
                  />
                  <div className="card-text" key={item._id}>
                    <Link
                      to={`/recipes/${item._id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <h4>
                        <b>{item.name}</b>
                      </h4>
                    </Link>
                    <p>
                      {item.time.hour > 0 ? `${item.time.hour} hours` : null}{" "}
                      {item.time.minutes > 0
                        ? `${item.time.minutes} mins`
                        : null}{" "}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <Link to={`/recipes`}>
          <Button.Ghost
            style={{
              borderRadius: "5px",
              padding: "10px 30px 10px 30px",
              marginTop: "30px",
              marginBottom: "100px",
            }}
          >
            See More
          </Button.Ghost>
        </Link>

        <h3>Lunch</h3>
        <div className="container">
          {lunch?.map((item) => {
            return (
              <>
                <div key={item._id} className="card">
                  <img
                    src={item.picture}
                    alt="Avatar"
                    style={{ width: "100%" }}
                    className="landing-image"
                  />
                  <div className="card-text" key={item._id}>
                    <Link
                      to={`/recipes/${item._id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <h4>
                        <b>{item.name}</b>
                      </h4>
                    </Link>
                    <p>
                      {item.time.hour > 0 ? `${item.time.hour} hours` : null}{" "}
                      {item.time.minutes > 0
                        ? `${item.time.minutes} mins`
                        : null}{" "}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <Link to={`/recipes`}>
          <Button.Ghost
            style={{
              borderRadius: "5px",
              padding: "10px 30px 10px 30px",
              marginTop: "30px",
              marginBottom: "100px",
            }}
          >
            See More
          </Button.Ghost>
        </Link>

        <h3>Dinner</h3>
        <div className="container">
          {dinner?.map((item) => {
            return (
              <>
                <div key={item._id} className="card">
                  <img
                    src={item.picture}
                    alt="Avatar"
                    style={{ width: "100%" }}
                    className="landing-image"
                  />
                  <div className="card-text" key={item._id}>
                    <Link
                      to={`/recipes/${item._id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <h4>
                        <b>{item.name}</b>
                      </h4>
                    </Link>
                    <p>
                      {item.time.hour > 0 ? `${item.time.hour} hours` : null}{" "}
                      {item.time.minutes > 0
                        ? `${item.time.minutes} mins`
                        : null}{" "}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <Link to={`/recipes`}>
          <Button.Ghost
            style={{
              borderRadius: "5px",
              padding: "10px 30px 10px 30px",
              marginTop: "30px",
              marginBottom: "100px",
            }}
          >
            See More
          </Button.Ghost>
        </Link>
      </div>
    </>
  );
};

export default DisplayMeals;

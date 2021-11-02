import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons/index";

const Landing = () => {
  const [card, setCard] = useState();

  useEffect(() => {
    async function fetchRecipeData() {
      const res = await axios.get("/api/recipes");
      setCard(res.data);
    }
    fetchRecipeData();
  }, []);
  console.log("card", card);

  return (
    <>
      <div className="landing-div">
        <div className="image-container">
          <img
            src={
              "https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1167&q=80"
            }
            alt="whatscookin"
            style={{ height: "250px" }}
          />
          <div className="centered">
            <h1 style={{ color: "black" }}>
              <span>What's </span>
              <span style={{ color: "#FFB800" }}>Cookin</span>
            </h1>
          </div>
        </div>
        <div>
          <h3 className="landing">About Us</h3>
          <p className="landing">
            Stuck at home coding and thinking about your next fancy meal? Well
            look no further because What's Cookin is your go to service provider
            that offers you a wide array of recipes, from breakfast to dinner!
            Members of What's Cookin are able to use our service to its fullest
            potential, so what are you waiting for, sign up today!
          </p>
        </div>
        <div>
          <h3 className="how">How it works</h3>
          <div className="how-container">
            <div className="bar-container">
              <div className="child">1</div>
              <p className="how-text">Sign Up as a member!</p>
            </div>

            <div className="bar-container">
              <div className="child">2</div>
              <p className="how-text">
                Customise your profile and add your next meal to the planner!
              </p>
            </div>

            <div className="bar-container">
              <div className="child">3</div>
              <p className="how-text">Add your own recipes and reviews!</p>
            </div>

            <div className="bar-container">
              <div className="child">4</div>
              <p className="how-text">
                Follow along with our ingredient checklist and recipe!
              </p>
            </div>
          </div>

          <div className="bar-container" style={{ margin: "0px" }}></div>
        </div>
        <h3 style={{ textAlign: "left" }}>Meals</h3>
        <div className="container">
          {card?.map((item) => {
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
                      {item.time.hour > 0 ? `${item.time.hour} hr` : null}{" "}
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
        <Link to={`/meals`}>
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
        <div className="bottom-signup">
          <h4 style={{ margin: "20px 0px 0px 0px" }}>
            What are you waiting for?
          </h4>
          <Link
            to={`/signup`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Button.Alt
              style={{
                borderRadius: "5px",
                color: "white",
                margin: "20px",
                padding: "10px 30px 10px 30px",
              }}
            >
              Sign Up
            </Button.Alt>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landing;

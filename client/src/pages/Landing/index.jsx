import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons/index"

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

  const handleClick = (event) => {
    console.log("CLICKED", event.target);
  }

  return (
    <>
      <div className="landing-div">
        <div>
          <h1 className="landing">Landing Image</h1>
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
          <div className="bar-container">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
          <div className="bar-container" style={{ margin: "0px" }}>
            <p className="how-text1">Sign Up as a member!</p>
            <p className="how-text2">
              Customise your profile and add your next meal to the planner!
            </p>
            <p className="how-text3">Add your own recipes and reviews!</p>
            <p className="how-text4">
              Follow along with our ingredient checklist and recipe!
            </p>
          </div>
        </div>
        <h3 style={{ "textAlign": "left" }}>Meals</h3>
        <div className="container">
          {card?.map((item) => {
            return (
              <>
                <div key={item._id} className="card" onClick={handleClick} >
                    <Link to={`/recipes/${item._id}`} style={{textDecoration: "none", color:"black"}}>
                  <img
                    src={item.picture}
                    alt="Avatar"
                    style={{ width: "100%" }}
                    className="landing-image"
                  />
                  <div className="card-text" key={item._id}>
                    <h4>
                      <b>{item.name}</b>
                    </h4>
                    <p>
                      {item.time.hour > 0 ? `${item.time.hour} hours` : null}{" "}
                      {item.time.minutes > 0
                        ? `${item.time.minutes} mins`
                        : null}{" "}
                    </p>
                  </div>
                        </Link>
                </div>
              </>
            );
        })}
        </div>
        <Link to={`/recipes`}>
        <Button.Ghost style={{borderRadius: "5px"}}>See More</Button.Ghost>
        </Link>
      </div>
      <div className="bottom-signup">
      <h4>What are you waiting for?</h4>
      <Link to={`/signup`} style={{textDecoration: "none", color:"black"}}>
          <Button.Alt style={{borderRadius: "5px"}}>Sign Up!</Button.Alt>
      </Link>
      </div>
    </>
  );
};

export default Landing;

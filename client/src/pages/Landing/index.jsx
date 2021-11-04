import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons/index";
import Card from "../../components/Cards";
import { Section } from "../../components/Containers";
import { Banner } from "./components";
import Footer from "../../components/Footer";

const Landing = () => {
  const [card, setCard] = useState();

  useEffect(() => {
    async function fetchRecipeData() {
      const res = await axios.get("/api/recipes");
      setCard(res.data);
    }
    fetchRecipeData();
  }, []);
  // console.log("card", card);

  return (
    <>
      <div className="landing-div">
        <Banner />

        <Section>
          <h3 className="landing">About Us</h3>
          <p className="landing">
            Stuck at home coding and thinking about your next fancy meal? Well
            look no further because What's Cookin is your go to service provider
            that offers you a wide array of recipes, from breakfast to dinner!
            Members of What's Cookin are able to use our service to its fullest
            potential, so what are you waiting for, sign up today!
          </p>
        </Section>

        <Section>
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
        </Section>
        <h3 style={{ textAlign: "left" }}>Meals</h3>
        <div className="container" style={{paddingBottom: '-12px', justifyContent: 'center'}}>
          {card?.map((item, index) => {
            return (<>
              {index < 5 && (
                <Card.Recipe
                  id={item._id}
                  image={item.picture.avatar}
                  name={item.name}
                  time={item.time}
                  style={{margin: '6px 12px', marginTop: 0}}
                />
              )}
            </>);
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

        <Section className="bottom-signup" last>
          <h3 style={{ margin: 0, marginBottom: 10 }}>
            What are you waiting for?
          </h3>
          <p style={{margin: 0, marginBottom: 20, opacity: .6}}>Sign up now and start your journey to great meals!</p>
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
        </Section>
      </div>
      <Footer />
    </>
  );
};

export default Landing;

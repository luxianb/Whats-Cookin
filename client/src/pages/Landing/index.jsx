import React from "react";

const Landing = () => {
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
          that offers you a wide array of recipes, from breakfast to dinner.
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
        <div className="bar-container" style={{"margin": "0px"}}>
          <p>Sign Up as a member!</p>
          <p>Customise your profile and add <br/> your next meal to the planner!</p>
          <p>Add your own recipes and reviews!</p>
          <p>Follow along with our ingredient <br/> checklist and recipe!</p>
        </div>
        
      </div>
    </div>
      {/* add their go-to recipes to share with the rest of the community and recieve reviews! Members can also keep track of recipes that they would like to experiement */}
    </>
  );
};

export default Landing;

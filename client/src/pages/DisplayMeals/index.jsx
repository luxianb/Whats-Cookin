import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/Index";

const DisplayMeals = (props) => {
  const allMeals = props.recipes;
  const [filteredMeal, setFilteredMeal] = useState(allMeals);

  return (
    <>
      <div className="menuIndex">
        <h1 style={{marginBottom:"70px", marginTop:"50px"}}>Meals</h1>
        <SearchBar recipes={allMeals} setFilteredMeal={setFilteredMeal} />
        <div className="container">
          {filteredMeal?.map((item) => {
            return (
              <div key={item._id} className="card">
                <img
                  src={item.picture.avatar}
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
                    {item.time.minutes > 0 ? `${item.time.minutes} mins` : null}{" "}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DisplayMeals;

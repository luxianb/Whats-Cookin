import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DisplayBreakfast = () => {
  const [breakfast, setBreakfast] = useState();

  useEffect(() => {
    async function fetchRecipeData() {
      const res = await axios.get("/api/recipes");

      //* Filter by type (Breakfast)
      const bkfast = res.data?.filter((item)=>{
        return(
            item.type === "Breakfast"
        )
      })
      setBreakfast(bkfast)
    }
    fetchRecipeData();

  }, []);

  //* All recipe data
  console.log("Breakfast", breakfast)


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
      </div>
    </>
  );
};

export default DisplayBreakfast;

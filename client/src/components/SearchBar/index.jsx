import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";

const SearchBarStyle = styled.div`
  .searchInputs {
    margin-top: 105px;
    display: flex;
  }

  .search input {
    background-color: #dee2e6;
    border: 0;
    border-radius: 10px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    font-size: 18px;
    padding: 15px;
    height: 20px;
    width: 300px;
    margin: 0 auto;
    margin-bottom: 50px;
    margin-top: -80px;
  }

  .searchIcon {
    height: 60px;
    width: 50px;
    background-color: white;
    display: grid;
    place-items: center;
  }

  input:focus {
    outline: none;
  }
  .searchIcon svg {
    font-size: 35px;
  }

  .dataResult {
    margin-top: 5px;
    width: 300px;
    height: 200px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: hidden;
    overflow-y: auto;
  }

  .dataResult::-webkit-scrollbar {
    display: none;
  }

  .dataResult .dataItem {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    color: black;
  }

  .dataItem p {
    margin-left: 10px;
  }
  a {
    text-decoration: none;
  }

  a:hover {
    background-color: lightgrey;
  }

  #clearBtn {
    cursor: pointer;
  }
`;

// function SearchBar(props) {
//     const data = props.recipes
//     console.log("SEARCH BAR DATA", data)
//   const [filteredData, setFilteredData] = useState([]);
//   const [wordEntered, setWordEntered] = useState("");

//   const handleFilter = (event) => {
//     const searchWord = event.target.value;
//     setWordEntered(searchWord);
//     const newFilter = data?.filter((value) => {
//       return value.name.toLowerCase().includes(searchWord.toLowerCase());
//     });

//     if (searchWord === "") {
//       setFilteredData([]);
//     } else {
//       setFilteredData(newFilter);
//     }
//   };

//   const clearInput = () => {
//     setFilteredData([]);
//     setWordEntered("");
//   };

//   return (
//     <SearchBarStyle>
//       <div className="search">
//         <div className="searchInputs">
//           <input
//             type="text"
//             placeholder={"Looking for something?"}
//             value={wordEntered}
//             onChange={handleFilter}
//           />
//           {/* <div className="searchIcon">
//             {filteredData.length === 0 ? (
//               <SearchIcon />
//             ) : (
//               <CloseIcon id="clearBtn" onClick={clearInput} />
//             )}
//           </div> */}
//         </div>
//         {filteredData?.length != 0 && (
//           <div className="dataResult">
//             {filteredData?.map((value, key) => {
//               return (
//                 <>
//                 <div key={value._id} className="card">
//                   <img
//                     src={value.picture}
//                     alt="Avatar"
//                     style={{ width: "100%" }}
//                     className="landing-image"
//                   />
//                   <div className="card-text" key={value._id}>
//                     <Link
//                       to={`/recipes/${value._id}`}
//                       style={{ textDecoration: "none", color: "black" }}
//                     >
//                       <h4>
//                         <b>{value.name}</b>
//                       </h4>
//                     </Link>
//                     <p>
//                       {value.time.hour > 0 ? `${value.time.hour} hours` : null}{" "}
//                       {value.time.minutes > 0
//                         ? `${value.time.minutes} mins`
//                         : null}{" "}
//                     </p>
//                   </div>
//                 </div>
//               </>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </SearchBarStyle>
//   );
// }

// export default SearchBar;







function SearchBar(props) {
  const allMeals = props.recipes;
  console.log("props", props)
  console.log("SEARCH BAR DATA", allMeals);
//   const [allMeals, setAllMeals] = useState();
  const [searchTerm, setSearchTerm] = useState("");

//   setAllMeals(data);
//   useEffect(() => {
//   }, [data]);
  console.log("SEARCH BAR AFTER USEEFFECT", allMeals);

  //* filter
  const filteredData = allMeals?.filter((item)=>{
            if (searchTerm === "") {
                return item;
              } else if (item.name.toLowerCase() === searchTerm.toLowerCase()) {
                return item;
              }
  })

  const filteredComponent = () => {
          filteredData?.map((item)=>{
      return(
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
      )
  })
  }
  console.log("search term", searchTerm)


  return (
    <>
      <div classname="searchBar">
        <input
          type="text"
          placeholder="Looking for something?"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <div className="container">
          {filteredComponent()}
        </div>
      </div>
    </>
  );
}

export default SearchBar;

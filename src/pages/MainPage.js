import React from "react";

import NewShowForm from "../component/forms/NewShowForm";
import NewMovieForm from "../component/forms/NewMovieForm";
import NewMangaForm from "../component/forms/NewMangaForm";

import ShowItem from "../component/items/ShowItem";
import { useState } from "react";

function MainPage() {
  const [showsArray, setShowsArray] = useState([]);
  //   const handleClick = () => {
  //     const tempNumber = number;
  //     setNumber(tempNumber + 1);

  //     console.log("number: " + number + ", tempNumber: " + tempNumber);
  //     const newItem = {
  //       title: "title is " + number,
  //       test: "test",
  //     };
  //     const tempItems = Object.assign([], showsArray);
  //     tempItems.push(newItem);
  //     setShowsArray(tempItems);
  //   };

  return (
    // <div class="bg-discordbg">
    <div>
      <NewShowForm showsArray={showsArray} setShowsArray={setShowsArray} />
      {/* <NewMovieForm />
      <NewMangaForm />] */}
      <div>
        {showsArray.map((show) => (
          <div>
            <ShowItem show={show} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;

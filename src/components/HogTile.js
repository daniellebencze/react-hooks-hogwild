import { useState } from "react";

export default function HogTile({ hog }) {
  //   console.log(hog);
  const [showDetails, setShowDetails] = useState(true);

  function handleClick() {
    // console.log("h1 clicked!");

    setShowDetails(!showDetails);
  }

  return (
    <div onClick={handleClick} className="pigTile">
      <h2>{hog.name}</h2>
      <img src={hog.image} alt={hog.name} />
      {showDetails ? (
        <section className="moreData">
          <div>{hog.weight} lbs.</div>
          <div>
            <strong>Specialty: {hog.specialty}</strong>
          </div>
          <div>
            <strong>Highest Medal: {hog["highest medal achieved"]}</strong>
          </div>
          <div>{hog.greased ? "" : "Not"} Greased</div>
        </section>
      ) : (
        ""
      )}
    </div>
  );
}

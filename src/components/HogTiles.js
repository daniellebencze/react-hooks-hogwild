import HogTile from "./HogTile";

function HogTiles({ hogs }) {
  //   console.log(hogs);

  return (
    <main>
      {hogs.map((hog) => (
        <HogTile hog={hog} key={hog.name} />
      ))}
    </main>
  );
}

export default HogTiles;

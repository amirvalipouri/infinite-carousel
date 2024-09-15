import Carousel from "./components/Carousel"


function App() {
  const movies = [
    {  name: "Airplane" },
    {
      name: "Family man",
    },
    {

      name: "Laboratory",
    },
    { name: "Napoleon" },
    {

      name: "Person in Darkness",
    },
    {
      name: "Scary Building",
    },
    {  name: "Stars" },
  ];
  return (
    <>
      <div
        className=" space-y-3 pt-4 "
      >
        <Carousel movies={movies} />
      </div>
    </>
  )
}

export default App

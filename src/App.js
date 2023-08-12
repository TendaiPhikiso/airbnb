import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import "./style.css";

function App() {
  // Mapping through the data to create an array of Card components.
  const dataElements = data.map((item) => {
    return <Card key={item.id} item={item} />; // Creating a Card component for each item in the data array.
  });
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <section className="cards-list">{dataElements}</section>
    </div>
  );
}

export default App;

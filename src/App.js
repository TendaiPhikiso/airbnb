import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import "./style.css";

function App() {
  const dataElements = data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
        // img={item.img}
        // star={item.star}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
      />
    );
  });
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <section className="cards-list">{dataElements}</section>

      {/* <header className="App-header"></header> */}
    </div>
  );
}

export default App;

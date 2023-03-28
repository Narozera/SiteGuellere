import Header from "./Components/Header";
import About from "./Sections/About";
import Hero from "./Sections/Hero";
import Jobs from "./Sections/Jobs";
import Form from "./Sections/Form";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <Jobs />
      <About />
      <Form />
    </div>
  );
}

export default App;

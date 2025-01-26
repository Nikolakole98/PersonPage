import Header from "./components/Header";
import HeroSection from "./components/MainSector/HeroSection"
import AboutSection from "./components/MainSector/AboutSection"
function App() {
  return (
    <div className="index-page">
      <Header/>
      <main>
        <HeroSection/>
        <AboutSection/>

      </main>
    </div>
  );
}

export default App;

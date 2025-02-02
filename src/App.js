import Header from "./components/Header";
import HeroSection from "./components/MainSector/HeroSection"
import AboutSection from "./components/MainSector/AboutSection"
import ResumeSection from "./components/MainSector/ResumeSection";
function App() {
  return (
    <div className="index-page dark-background">
      <Header/>
      <main>
        <HeroSection/>
        <AboutSection/>
        <ResumeSection/>

      </main>
    </div>
  );
}

export default App;

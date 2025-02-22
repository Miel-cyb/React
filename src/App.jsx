import React from "react";
import Header from "./pages/Header";
import HeroSection from "./pages/HeroSection";
import FeatureSection from "./pages/FeatureSection";
import FAQSection from "./pages/FAQSection";
import tv from "./assets/images/tv.png"
import boy from "./assets/images/girl.jpg"
import boxshot from "./assets/images/boxshot.png"
import kids from "./assets/images/kids.png"
import Footer from "./pages/Footer";



function App(){
  return(
    <>
      <div className="bg-[black] text-white">
        <Header />
        <HeroSection />
        <FeatureSection showboxshot={true} image={boy} title="Enjoy on your TV" description="Watch on Smart Tvs,Playstations,Xbox,Chromecast,Apple TV,Blu-Ray players and more."/>
        <FeatureSection reverse={true} showvideo= {true} video="/netflix.m4v" image= {tv} title="Download your shows to watch offline" description="Save your favorites easily and always have something to watch" />
        <FeatureSection image= {kids} title="Create a profile for kids" description="Send kids on an adventure with their favorite characters in space made just for them -- free with your membership" />
        <FAQSection />
       <Footer />
    </div>
    </>
  )

}
export default App;
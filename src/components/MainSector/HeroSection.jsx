import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
//import hero from '../../img/hero-bg.jpg';


export default function HeroSection() 
{
    return(
        <section id="hero" className="hero section light-background">
        {/*<img src={hero} alt=' '/>*/}

      <div className="container" data-aos="zoom-out">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2>Nikola Nikolic</h2>
            <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer">Designer</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
            <div className="social-links">
              <a href="# "><FaFacebook/></a>
              <a href="# "><FaInstagram/></a>
              <a href="# "><FaLinkedin/></a>
            </div>
          </div>
        </div>
      </div>

    </section>
    )
    
}
import './css/about.css';
import profilImg from '../../img/profile-img.jpg';
import { FaChevronRight } from "react-icons/fa";


export default function AboutSection(){
    return(
        <section id="about" className="about section dark-background">
<div className="container section-title" data-aos="fade-up">
  <h2>About</h2>
</div>

<div className="container" data-aos="fade-up" data-aos-delay="90">

  <div className="row gy-2 justify-content-flex-center">
    <div className="col-lg-2 about-img">
      <img src={profilImg} className="img-fluid" alt=""/>
    </div>
    <div className="col-lg-6 content">
      <h2>Frontend & Backend development</h2>
      <p className="fst-italic py-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <div className="row">
        <div className="col-lg-6">
          <ul>
            <li><i><FaChevronRight/></i> <strong>Birthday:</strong> <span>16 October 1998</span></li>
            <li><i><FaChevronRight/></i> <strong>Website:</strong> <span>www.example.com</span></li>
            <li><i><FaChevronRight/></i> <strong>Phone:</strong> <span>+381 638785927</span></li>
            <li><i><FaChevronRight/></i> <strong>City:</strong> <span>Vlasotince, Serbia</span></li>
          </ul>
        </div>
        <div className="col-lg-6 r">
          <ul>
            <li><i><FaChevronRight/></i><strong>Age:</strong> <span>26</span></li>
            <li><i><FaChevronRight/></i><strong>Degree:</strong> <span>High School</span></li>
            <li><i><FaChevronRight/></i> <strong>Email:</strong> <span>kolenikola98@gmail.com</span></li>
            <li><i><FaChevronRight/></i> <strong>Freelance:</strong> <span>Available</span></li>
          </ul>
        </div>
      </div>
      <p className="py-3">
        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
        Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
      </p>
    </div>
  </div>

</div>

</section>

   );
}
import { IoHome } from "react-icons/io5";
//import { HiMenu } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";


export default function Header() {
return(
<header id="header" className="header d-flex flex-column justify-content-center">

{/*<i className="header-toggle d-xl-none bi bi-list"><HiMenu/></i>*/}

<nav id="navmenu" className="navmenu">
  <ul>
    <li><a href="#hero" className="active"><IoHome/><span>Home</span></a></li>
    <li><a href="#about"><BsPersonFill/><span>About</span></a></li>
    <li><a href="#resume"><span>Resume</span></a></li>
    <li><a href="#portfolio"><span>Portfolio</span></a></li>
    <li><a href="#services"><span>Services</span></a></li>
    <li><a href="#contact"><span>Contact</span></a></li>
  </ul>
</nav>

</header>
);    




}

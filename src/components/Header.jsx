import './header.css';
import { IoHome } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";
import { GoBookmarkFill } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { HiDesktopComputer } from "react-icons/hi";
import { MdContactMail } from "react-icons/md";

export default function Header() {
return(
<header id="header" className="header d-flex flex-column justify-content-center">

<i className="header-toggle d-xl-none bi bi-list"><HiMenu/></i>

<nav id="navmenu" className="navmenu">
  <ul>
    <li><a href="#hero" className="active"><i><IoHome/></i><span>Home</span></a></li>
    <li><a href="#about"><i><BsPersonFill/></i><span>About</span></a></li>
    <li><a href="#resume"><i><GoBookmarkFill/></i><span>Resume</span></a></li>
    <li><a href="#services"><i><HiDesktopComputer/></i><span>Skills</span></a></li>
    <li><a href="#portfolio"><i><GrProjects/></i><span>Portfolio</span></a></li>
    <li><a href="#contact"><i><MdContactMail/></i><span>Contact</span></a></li>
  </ul>
</nav>

</header>
);    




}

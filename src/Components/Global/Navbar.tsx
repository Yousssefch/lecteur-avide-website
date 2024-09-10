import LecteurAvideLogo from "../../assets/LecteurAvideLogo.png";
import InstaLogo from "../../assets/InstaLogo.png";
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react";


function Navbar() {
  useEffect(() => {
    document.addEventListener('scroll', ()=> {
      const Nav = document.querySelector('.Nav') as HTMLElement;
      const Link = document.querySelectorAll('.NavLink') as NodeListOf<HTMLElement>;
      if(window.scrollY > 0){
        Nav.classList.add("scrolled");
        Link.forEach((link) => {
          link.classList.add("scrolled");
        });
      }
      else{
        Nav.classList.remove("scrolled");
        Link.forEach((link) => {
          link.classList.remove("scrolled");})
      }
    });

    });
  return (
    <nav  className="Nav">
        <img className="LecteurAvideLogo" src={LecteurAvideLogo} />
      <ul className="navUl">
        <li className="navLi hideOnMobile"><a href="/" className="NavLink">Home</a></li>
        <li className="navLi hideOnMobile"><a href="/About" className="NavLink">About us</a></li>
        <li className="navLi hideOnMobile"><a href="/Books" className="NavLink">Books</a></li>
        <li className="navLi hideOnMobile"><a href="/Events" className="NavLink">Events</a></li>
        <li className="navLi hideOnMobile"><a href="/Contact" className="NavLink">Contact Us</a></li>
        <li className="navLi" onClick= {() => {showSideBar()}}><a  className="NavLink hideOnLargerScreen" ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
      </ul>

      <ul className="navUl sideBar">
        <li className="navLi nav-item" onClick={() => {closeSideBar()}}><a className="CloseIcon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
        <a href="/" className="SideNavLink"><li className="navLi nav-item">Home</li></a>
        <a href="/About" className="SideNavLink"><li className="navLi">About us</li></a>
        <a href="/Books" className="SideNavLink"><li className="navLi">Books</li></a>
        <a href="/Events" className="SideNavLink"><li className="navLi">Events</li></a>
        <a href="/Contact" className="SideNavLink"><li className="navLi">Contact Us</li></a>
      </ul>
    </nav>
  );

  function showSideBar() {
    const sideBar = document.querySelector(".sideBar") as HTMLElement;
    if (sideBar) {
      sideBar.style.display = "flex";
    }
  }

  function closeSideBar() {
    var sideBar = document.querySelector(".sideBar");
    sideBar.style.display = "none";
  }

  }
  


export default Navbar;
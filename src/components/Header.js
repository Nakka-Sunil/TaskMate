import logo from "../assets/logo.jpg";
import "./Header.css";
export const Header = () => {
  return (
   <header>
    <img src={ logo } alt="" />
    <a href="/">Home</a>
   </header>
  )
}

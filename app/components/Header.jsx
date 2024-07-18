import Nav from "./Nav.jsx";
import headerStyles from "../../styles/Header.module.css"

const Header = () => {
  return (
    <header className={headerStyles.header}>
    
      <Nav />
    </header>
  )
}

export default Header
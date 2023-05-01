import Button from '../Button/Button'
import Searchbar from '../SearchBar/SearchBar'
import './Nav.scss'

const Nav = () => {
  const handleClick = () => {
    //login/logout
  }

  return (
    <nav>
      <div className="searchbar-container">
        <Searchbar />
      </div>
      <div className="logout-container">
        <Button label="Login" handleClick={handleClick} />
      </div>
    </nav>
  )
}
export default Nav

// label logged in ? login : Logout

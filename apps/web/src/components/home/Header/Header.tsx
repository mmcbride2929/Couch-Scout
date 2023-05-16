import './Header.scss'
import logo from '../../../Assets/FINAL53-lack.png'

const Header = () => {
  return (
    <div className="home-header">
      <div className="header-logo-container">
        <img src={logo} alt="logo" className="header-logo" />
      </div>
      <p>
        Choose any NFL team & build a final 53 man roster before the season
        kicks off. Team rosters are updated weekly & we are updating the app
        periodically to enhance our user's experience.
      </p>
    </div>
  )
}
export default Header

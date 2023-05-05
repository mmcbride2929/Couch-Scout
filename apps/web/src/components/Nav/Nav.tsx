import './Nav.scss'
import ravenIcon from '../../Assets/ravensLogo.png'

const Nav = () => {
  return (
    <nav>
      <a href="https://www.baltimoreravens.com/team/players-roster/">
        <img src={ravenIcon} alt="logo" />
      </a>
    </nav>
  )
}
export default Nav

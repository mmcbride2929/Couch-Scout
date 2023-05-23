import { Link } from 'react-router-dom'
import './Footer.scss'
import logo from '../../Assets/FINAL53.png'

const Footer = () => {
  return (
    <nav className="footer">
      <Link to="/">
        <img className="logo" src={logo} alt="app-logo" />
      </Link>
    </nav>
  )
}
export default Footer

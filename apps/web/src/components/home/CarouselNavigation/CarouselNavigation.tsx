import './CarouselNavigation.scss'

interface Props {
  handleClick: () => void
  selectedTeam: string
}

const CarouselNavigation = ({ handleClick, selectedTeam }: Props) => {
  return (
    <div className="carousel-navigation-container">
      <h1>{selectedTeam.toUpperCase()}</h1>
      <button onClick={handleClick}>START</button>
    </div>
  )
}
export default CarouselNavigation

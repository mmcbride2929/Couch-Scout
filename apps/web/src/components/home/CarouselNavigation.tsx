interface Props {
  handleClick: () => void
  selectedTeam: string
}

const CarouselNavigation = ({ handleClick, selectedTeam }: Props) => {
  return (
    <div>
      <h1> Current Team: {selectedTeam}</h1>
      <button onClick={handleClick}>Begin</button>
    </div>
  )
}
export default CarouselNavigation

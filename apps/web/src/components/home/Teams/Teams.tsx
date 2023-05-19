import { useEffect, useState } from 'react'
import TeamLogo from '../TeamLogo/TeamLogo'
import leftIcon from '../../../Assets/leftIcon.svg'
import rightIcon from '../../../Assets/rightIcon.svg'
import './Teams.scss'

interface Props {
  setTeam: (team: string) => void
  teamArray: string[]
  selectedTeam: string
}

const Teams = ({ setTeam, teamArray, selectedTeam }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(1)

  useEffect(() => {
    setTeam(teamArray[currentIndex])
  }, [currentIndex, teamArray])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamArray.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamArray.length - 1 ? 0 : prevIndex + 1
    )
  }

  let visibleTeams = []
  if (currentIndex === 0) {
    visibleTeams = [
      teamArray[teamArray.length - 1],
      teamArray[currentIndex],
      teamArray[currentIndex + 1],
    ]
  } else if (currentIndex === teamArray.length - 1) {
    visibleTeams = [
      teamArray[currentIndex - 1],
      teamArray[currentIndex],
      teamArray[0],
    ]
  } else {
    visibleTeams = [
      teamArray[currentIndex - 1],
      teamArray[currentIndex],
      teamArray[currentIndex + 1],
    ]
  }

  return (
    <div className="carousel-container">
      <img
        src={leftIcon}
        className="arrow-icon"
        alt="previous-button"
        onClick={handlePrev}
      />
      {visibleTeams.map((singleTeam, index) => {
        return (
          <div className="team-carousel-container">
            <TeamLogo
              selectedTeam={selectedTeam}
              key={index}
              team={singleTeam}
            />
          </div>
        )
      })}
      <img
        src={rightIcon}
        className="arrow-icon"
        alt="next-button"
        onClick={handleNext}
      />
    </div>
  )
}
export default Teams

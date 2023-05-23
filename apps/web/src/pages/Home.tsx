import { useEffect, useState } from 'react'
import TeamLogoContainer from '../components/home/TeamLogoContainer/TeamLogoContainer'
import { useAppDispatch } from '../app/hooks'
import { setActiveTeam } from '../features/application/activeTeamSlice'
import { useNavigate } from 'react-router-dom'
import CarouselNavigation from '../components/home/CarouselNavigation/CarouselNavigation'
import Header from '../components/home/Header/Header'
import { resetRoster } from '../features/application/rosterListSlice'

const Teams = () => {
  const [selectedTeam, setSelectedTeam] = useState<string>('')

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const setTeam = (team: string) => {
    setSelectedTeam(team)
  }

  const handleClick = () => {
    if (selectedTeam !== '') {
      dispatch(setActiveTeam(selectedTeam))
      navigate(`/${selectedTeam}`)
    }
  }

  const handleReset = () => {
    dispatch(resetRoster())
  }

  useEffect(() => {
    handleReset()
  })

  return (
    <div className="home-page-content-container">
      <Header />

      <TeamLogoContainer setTeam={setTeam} selectedTeam={selectedTeam} />

      <CarouselNavigation
        selectedTeam={selectedTeam}
        handleClick={handleClick}
      />
    </div>
  )
}
export default Teams

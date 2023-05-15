import { useState } from 'react'
import TeamLogoContainer from '../components/home/TeamLogoContainer/TeamLogoContainer'
import { useAppDispatch } from '../app/hooks'
import { setActiveTeam } from '../features/application/activeTeamSlice'
import { useNavigate } from 'react-router-dom'
import CarouselNavigation from '../components/home/CarouselNavigation'

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
  return (
    <div>
      <TeamLogoContainer setTeam={setTeam} selectedTeam={selectedTeam} />

      <CarouselNavigation
        selectedTeam={selectedTeam}
        handleClick={handleClick}
      />
    </div>
  )
}
export default Teams

// afc/nfc current state for toggle
// state for if selected  => team?
//need link to be team name on dashboard & also for fetching link
// logoState needs to be passed from here, and set from children

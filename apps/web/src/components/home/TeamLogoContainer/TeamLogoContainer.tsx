import Teams from '../Teams/Teams'
import teamArray from '../../../app/teamArray'
import './TeamLogoContainer.scss'

interface Props {
  setTeam: (team: string) => void
  selectedTeam: string
}

const TeamLogoContainer = ({ setTeam, selectedTeam }: Props) => {
  return (
    <div className="team-logo-container">
      <Teams
        setTeam={setTeam}
        teamArray={teamArray}
        selectedTeam={selectedTeam}
      />
    </div>
  )
}
export default TeamLogoContainer

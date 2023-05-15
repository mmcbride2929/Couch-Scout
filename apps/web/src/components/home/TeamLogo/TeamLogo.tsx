import './TeamLogo.scss'
import images from './TeamLogoImports'

interface Props {
  team: string
  selectedTeam: string
}

const TeamLogo = ({ team, selectedTeam }: Props) => {
  const imageSrc = images[team]

  return (
    <div
      className={`${
        selectedTeam === team ? 'active-team' : ''
      } logo-icon-container`}
    >
      <img className="logo-icon" src={imageSrc} alt="team-logo" />
    </div>
  )
}

export default TeamLogo

import TeamLogo from '../TeamLogo/TeamLogo'

interface Props {
  setTeam: (team: string) => void
  selectedTeam: string
}

const NFCTeams = ({ setTeam, selectedTeam }: Props) => {
  return (
    <div division-container>
      <div className="team-row">
        <TeamLogo team="eagles" setTeam={setTeam} selectedTeam={selectedTeam} />
        <TeamLogo team="giants" setTeam={setTeam} selectedTeam={selectedTeam} />
        <TeamLogo
          team="commanders"
          setTeam={setTeam}
          selectedTeam={selectedTeam}
        />
        <TeamLogo
          team="cowboys"
          setTeam={setTeam}
          selectedTeam={selectedTeam}
        />
      </div>
      <div className="team-row">
        <TeamLogo
          team="fortyniners"
          setTeam={setTeam}
          selectedTeam={selectedTeam}
        />
        <TeamLogo
          team="seahawks"
          setTeam={setTeam}
          selectedTeam={selectedTeam}
        />
        <TeamLogo team="rams" setTeam={setTeam} selectedTeam={selectedTeam} />
        <TeamLogo
          team="cardinals"
          setTeam={setTeam}
          selectedTeam={selectedTeam}
        />
      </div>
      <div className="team-row">
        <TeamLogo
          team="buccaneers"
          setTeam={setTeam}
          selectedTeam={selectedTeam}
        />
        <TeamLogo team="saints" setTeam={setTeam} selectedTeam={selectedTeam} />
        <TeamLogo
          team="panthers"
          setTeam={setTeam}
          selectedTeam={selectedTeam}
        />
        <TeamLogo
          team="falcons"
          setTeam={setTeam}
          selectedTeam={selectedTeam}
        />
      </div>
      <div className="team-row">
        <TeamLogo
          team="vikings"
          setTeam={setTeam}
          selectedTeam={selectedTeam}
        />
        <TeamLogo team="bears" setTeam={setTeam} selectedTeam={selectedTeam} />
        <TeamLogo
          team="packers"
          setTeam={setTeam}
          selectedTeam={selectedTeam}
        />
        <TeamLogo team="lions" setTeam={setTeam} selectedTeam={selectedTeam} />
      </div>
    </div>
  )
}
export default NFCTeams

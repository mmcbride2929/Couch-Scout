import TeamLogo from '../TeamLogo/TeamLogo'

interface Props {
  setTeam: (team: string) => void
  selectedTeam: string
}

const AFCTeams = ({ setTeam, selectedTeam }: Props) => {
  return (
    <div division-container>
      <div className="team-row">
        <TeamLogo
          team="broncos"
          setTeam={setTeam}
          selectedTeam={selectedTeam}
        />
        <TeamLogo
          team="raiders"
          setTeam={setTeam}
          selectedTeam={selectedTeam}
        />
        <TeamLogo team="chiefs" setTeam={setTeam} selectedTeam={selectedTeam} />
        <TeamLogo
          team="chargers"
          setTeam={setTeam}
          selectedTeam={selectedTeam}
        />
      </div>
      <div className="team-row">
        <TeamLogo
          team="steelers"
          setTeam={setTeam}
          selectedTeam={selectedTeam}
        />
        <TeamLogo
          team="bengals"
          setTeam={setTeam}
          selectedTeam={selectedTeam}
        />
        <TeamLogo team="browns" setTeam={setTeam} selectedTeam={selectedTeam} />
        <TeamLogo team="ravens" setTeam={setTeam} selectedTeam={selectedTeam} />
      </div>
      <div className="team-row">
        <TeamLogo team="bills" setTeam={setTeam} selectedTeam={selectedTeam} />
        <TeamLogo
          team="dolphins"
          setTeam={setTeam}
          selectedTeam={selectedTeam}
        />
        <TeamLogo
          team="patriots"
          setTeam={setTeam}
          selectedTeam={selectedTeam}
        />
        <TeamLogo team="jets" setTeam={setTeam} selectedTeam={selectedTeam} />
      </div>
      <div className="team-row">
        <TeamLogo team="titans" setTeam={setTeam} selectedTeam={selectedTeam} />
        <TeamLogo team="texans" setTeam={setTeam} selectedTeam={selectedTeam} />
        <TeamLogo team="colts" setTeam={setTeam} selectedTeam={selectedTeam} />
        <TeamLogo
          team="jaguars"
          setTeam={setTeam}
          selectedTeam={selectedTeam}
        />
      </div>
    </div>
  )
}
export default AFCTeams

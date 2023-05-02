import './PlayerTableHeader.scss'

const PlayerTableHeader = () => {
  return (
    <div className="list-header-container">
      <div className="player-properties">
        <h1 className="name">Name</h1>
        <h1 className="position">Position</h1>
        <h1 className="age">Age</h1>
      </div>
      <div className="empty"></div>
    </div>
  )
}
export default PlayerTableHeader

import './RosterTableHeader.scss'

const RosterTableHeader = () => {
  return (
    <div className="list-header-container">
      <div className="roster-properties">
        <h1 className="name">Name</h1>
        <h1 className="position">Position</h1>
        <h1 className="age">Age</h1>
      </div>
      <div className="empty"></div>
    </div>
  )
}
export default RosterTableHeader

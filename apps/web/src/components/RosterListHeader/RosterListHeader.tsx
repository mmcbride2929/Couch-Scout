interface Props {
  header: string
}

const RosterListHeader = ({ header }: Props): React.ReactElement => {
  return (
    <>
      <h1>{header}</h1>
    </>
  )
}
export default RosterListHeader

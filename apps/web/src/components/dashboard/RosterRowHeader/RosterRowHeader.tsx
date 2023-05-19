import './RosterListHeader.scss'

interface Props {
  header: string
  amount: number
}

const RosterRowHeader = ({ header, amount }: Props): React.ReactElement => {
  return (
    <h1 className="table-header">
      {header !== 'Special Teams' ? header : 'SPT'}: {amount}
    </h1>
  )
}
export default RosterRowHeader

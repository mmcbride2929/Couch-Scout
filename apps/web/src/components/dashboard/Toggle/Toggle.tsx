import './Toggle.scss'

interface Props {
  handleClick: () => void
}

const Toggle = ({ handleClick }: Props) => {
  return (
    <>
      <label className="toggle-switch">
        <input onClick={handleClick} type="checkbox" />
        <div className="toggle-switch-background">
          <div className="toggle-switch-handle"></div>
        </div>
      </label>
    </>
  )
}
export default Toggle

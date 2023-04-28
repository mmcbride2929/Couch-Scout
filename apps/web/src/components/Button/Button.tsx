interface Props {
  handleClick?: () => void
  label: string
  disabled?: boolean
}

const Button = ({ handleClick, label, disabled = false }: Props) => {
  return (
    <button disabled={disabled} onClick={handleClick}>
      {label}
    </button>
  )
}
export default Button

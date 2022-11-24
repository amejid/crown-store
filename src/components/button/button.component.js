import './button.styles.scss'

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
}

const Button = ({children, buttonType, type, onClick}) => {
  return (
    <button type={type} className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
import './button.styles.scss'

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
}

const Button = ({children, buttonType, type}) => {
  return (
    <button type={type} className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}>
      {children}
    </button>
  )
}

export default Button
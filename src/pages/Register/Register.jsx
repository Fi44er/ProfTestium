import style from './Register.module.css'
import Input from "../../components/globalComponents/Input/Input"
import Button from "../../components/globalComponents/Buttons/Button"

const handleSubmit = (event) => {
  event.preventDefault()
}

const Register = () => {
  return (
    <div className={style.main}>
      <form onSubmit={handleSubmit} className={style.regForm}>
        <h1>Зарегестрироваться</h1>
        <div className={style.inpBlock}>
          <Input
            placeInp="Имя"
            backInp="rgba(255, 255, 255, 0.5)"
            colorInp="#000"
          />
          <Input
            typeBtn="password"
            placeInp="Фам"х
            backInp="rgba(255, 255, 255, 0.5)"
            colorInp="#000"
          />
          <Input
            placeInp="Логин, почта или телефон"
            backInp="rgba(255, 255, 255, 0.5)"
            colorInp="#000"
          />
          <Input
            placeInp="Логин, почта или телефон"
            backInp="rgba(255, 255, 255, 0.5)"
            colorInp="#000"
          />
          <Input
            placeInp="Логин, почта или телефон"
            backInp="rgba(255, 255, 255, 0.5)"
            colorInp="#000"
          />
          <Input
            placeInp="Логин, почта или телефон"
            backInp="rgba(255, 255, 255, 0.5)"
            colorInp="#000"
          />
          <Button backBtn="#fff" colorBtn="#000">
            Войти
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Register

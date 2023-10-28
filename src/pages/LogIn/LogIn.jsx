import style from "./LogIn.module.css"
import Input from "../../components/globalComponents/Input/Input"
import Button from "../../components/globalComponents/Buttons/Button"

const handleSubmit = (event) => {
  event.preventDefault()
}

const LogIn = () => {
  return (
    <div className={style.main}>
      <form onSubmit={handleSubmit} className={style.logForm}>
        <h1>Войти</h1>
        <div className={style.inpBlock}>
          <Input placeInp="Логин, почта или телефон" backInp='rgba(255, 255, 255, 0.5)'/>
          <Input typeBtn="password" placeInp="Ваш пароль" />
          <Button backBtn='#fff' colorBtn='#d31313'>Войти</Button>
        </div>
      </form>
    </div>
  )
}

export default LogIn

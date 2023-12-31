import style from "./TrialBlock.module.css";
import Button from "../../../components/globalComponents/Buttons/Button";
import Input from "../../../components/globalComponents/Input/Input";
function TrialBlock() {
  return (
    <div className={style.trialContent}>
      <div className={style.trialBlock}>
        <div className={style.trialTitle}>
          <div className={style.trialText}>
            <h1>
              Попробуйте платформу
              <br />
              прямо сейчас
            </h1>
            <p>
              Приглашаем вас начать свой увлекательный путь уже <br /> сегодня.
              Создайте свой портал или школу и <br /> наполните ее необходимым
              контентом.
            </p>
            <div className={style.trialButton}>
              <Button backBtn="#fff" colorBtn="#6d32ff" widthBtn={246}>
                Попробовать бесплатно
              </Button>
              <Button
                backBtn="none"
                colorBtn="#fff"
                borderBtn="1px solid #fff"
                widthBtn={246}
              >
                Создать портал
              </Button>
            </div>
          </div>
          <div className={style.trialImg}>
            <img src="/public/digital02_pixian_ai 1.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default TrialBlock;

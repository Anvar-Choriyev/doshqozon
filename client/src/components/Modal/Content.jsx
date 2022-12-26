import React, { useState } from "react";
import { ReactComponent as Close } from "./close.svg";
import osh from "./osh.png";
import qazi from "./qazi.png";
import style from "./Content.module.css";

const Content = ({ setOpen }) => {
  const [disabled, setDisabled] = useState(true);

  return (
    <section className={style.container}>
      <Close className={style.close} onClick={() => setOpen(false)} />
      <div>
        <img src={osh} alt="osh" />
        <p>Andijon Oshi</p>
        <p className={style.pText}>1kg</p>
        <p className={style.pSum}>100 000 so'm</p>
      </div>

        <div className={style.item}>
          <div  className={style.imgDiv}>
            <img src={qazi} alt="" />
            <p>Qazi</p>
          </div>
          <div className={style.itemChange}>
            <button className={style.buttonMinus}>-</button>
            <p>1X</p>
            <button className={style.buttonPlus}>+</button>
          </div>
        </div>
        <div className={style.item}>
          <div  className={style.imgDiv}>
            <img src={qazi} alt="" />
            <p>Qazi</p>
          </div>
          <div className={style.itemChange}>
            <button className={style.buttonMinus}>-</button>
            <p>1X</p>
            <button className={style.buttonPlus}>+</button>
          </div>
        </div>
    </section>
  );
};

export default Content;

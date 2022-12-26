import React from "react";
import { ReactComponent as Close } from "./close.svg";
import style from "./Content.module.css";

const Content = (props) => {
  return (
    <section className={style.container}>
      <Close className={style.close} onClick={() => props.setOpen(false)} />
      <div>
        <img src={props.img} alt="" />
        <p>{props.name}</p>
        <p className={style.pText}>
          {props.number}
          {/* 1kg */}
        </p>
        <p className={style.pSum}>
          {props.sum}
          {/* 100 000 so'm */}
        </p>
      </div>
      {props.item.map((i) => (
        <div key={i.id}>
          <div className={style.item}>
            <div className={style.imgDiv}>
              <img src={i.img} alt="" />
              <p>{i.name}</p>
            </div>
            <div className={style.itemChange}>
              <button className={style.buttonMinus}>-</button>
              <p>1X</p>
              <button className={style.buttonPlus}>+</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Content;

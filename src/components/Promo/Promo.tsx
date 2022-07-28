import React, { FC } from "react";
import promoImg from '../../images/shutterstock_1493491943 1.png'
import './Promo.css'

const Promo: FC = () => {
   return <section>
    <h1 className="promo__title">Tours to the Maldives </h1>
    <img src={promoImg} alt="" className="promo__img"/>
   </section>;
};

export default Promo;

import { useState } from 'react';
import pizzaLogo from './../../assets/pizza-logo.png';
import shopCart from './../../assets/shop-cart.svg';
import styles from './Header.module.scss';

interface IHeader {
    totalPrice: number | undefined;
    itemsInCart: number | undefined;
}

const Header = ({ totalPrice, itemsInCart }: IHeader) => {
    return (
        <header className={styles.Header}>
            <div className={styles.LogoBlock}>
                <img src={pizzaLogo} alt='Пицца' />
                <div className={styles.TitleBlock}>
                    <span className={styles.MainText}>pizza for all</span>
                    <span className={styles.SecondaryText}>
                        самая вкусная пицца во вселенной
                    </span>
                </div>
            </div>
            <div className={styles.CartButton}>
                <span className={styles.Price}>{totalPrice || 0} ₽</span>
                <div className={styles.Vl}></div>
                <img src={shopCart} alt='Корзина' />
                <span className={styles.CountItems}>{itemsInCart || 0}</span>
            </div>
        </header>
    );
};

export default Header;

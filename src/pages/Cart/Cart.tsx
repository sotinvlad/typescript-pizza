import styles from './Cart.module.scss';
import shoppingCartImg from './../../assets/shopping-cart.png';
import trashBucketSvg from './../../assets/trash-bucket.svg';
import returnArrowSvg from './../../assets/return-arrow.svg';
import CartItem from '../../components/CartItem/CartItem';

interface ICart {
    items?: [];
}

const itemsExample = [
    {
        id: 8,
        imageUrl:
            'https://dodopizza-a.akamaihd.net/static/Img/Products/01735d5a70154bd3884899030a671629_366x366.jpeg',
        title: 'Сырный цыпленок',
        type: 1,
        size: 40,
        price: 469,
        count: 2,
    },
    {
        id: 3,
        imageUrl:
            'https://dodopizza-a.akamaihd.net/static/Img/Products/5bf1c77b3ff44f93bb01c840ab35b033_366x366.jpeg',
        title: 'Гавайская',
        type: 0,
        size: 26,
        price: 369,
        count: 1,
    },
    {
        id: 0,
        imageUrl:
            'https://dodopizza-a.akamaihd.net/static/Img/Products/eb6d128bbcd340e98fd4f14b377e769f_366x366.jpeg',
        title: 'Пепперони фреш',
        type: 1,
        size: 30,
        price: 369,
        count: 3,
    },
];

const Cart: React.FC<ICart> = ({ items = itemsExample }) => {
    const totalPrice = items.reduce(
        (totalPrice, item) => totalPrice + item.price * item.count,
        0,
    );
    return (
        <div className={styles.Cart}>
            <div className={styles.Header}>
                <div className={styles.Logo}>
                    <img src={shoppingCartImg} alt='Корзина' />
                    <span>Корзина</span>
                </div>
                <div className={styles.ClearCartButton}>
                    <img src={trashBucketSvg} alt='Очистить' />
                    <span>Очистить корзину</span>
                </div>
            </div>
            <div className={styles.MainContent}>
                {items.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))}
            </div>
            <div className={styles.TotalBlock}>
                <div className={styles.TotalAmount}>
                    Всего пицц: <span>{items.length} шт.</span>
                </div>
                <div className={styles.TotalPrice}>
                    Сумма заказа: <span>{totalPrice} ₽</span>
                </div>
            </div>
            <div className={styles.Buttons}>
                <div className={styles.ReturnButton}>
                    <img src={returnArrowSvg} alt='Возврат назад' />
                    <span>Вернуться назад</span>
                </div>
                <div className={styles.PayNow}>Оплатить сейчас</div>
            </div>
        </div>
    );
};
export default Cart;

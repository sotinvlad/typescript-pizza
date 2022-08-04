import styles from './CartItem.module.scss';
import removeCrossPng from './../../assets/remove-cross.png';

interface ICartItem {
    id: number;
    imageUrl: string;
    title: string;
    type: number;
    size: number;
    price: number;
    count: number;
}

const CartItem: React.FC<ICartItem> = ({
    imageUrl,
    title,
    type,
    size,
    price,
    count,
}) => {
    return (
        <div className={styles.CartItem}>
            <div className={styles.PizzaAbout}>
                <img src={imageUrl} alt='Пицца' />
                <div className={styles.Description}>
                    <span className={styles.Title}>{title}</span>
                    <span className={styles.Parameters}>
                        {type === 1 ? 'толстое тесто' : 'тонкое тесто'} {size}{' '}
                        см.
                    </span>
                </div>
            </div>
            <div className={styles.Counter}>
                <div className={styles.Minus}>-</div>
                <div className={styles.Count}>{count}</div>
                <div className={styles.Plus}>+</div>
            </div>
            <div className={styles.Price}>{price * count} ₽</div>
            <div className={styles.Delete}>
                <img src={removeCrossPng} alt='Удалить пиццу' />
            </div>
        </div>
    );
};
export default CartItem;

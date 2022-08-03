import classNames from 'classnames';
import { useState } from 'react';

import styles from './PizzaBlock.module.scss';

interface IPizzaBlock {
    id: number;
    title: string;
    sizes: number[];
    types: number[];
    imageUrl: string;
    price: number;
    rating: number;
    category: number;
    countInCart?: number;
}

const PizzaBlock: React.FC<IPizzaBlock> = ({
    id,
    title,
    sizes,
    types,
    imageUrl,
    price,
    rating,
    category,
    countInCart,
}) => {
    const [selectedType, setSelectedType] = useState<number>(0);
    const [selectedSize, setSelectedSize] = useState<number>(0);
    return (
        <div className={styles.PizzaBlock}>
            <img src={imageUrl} alt={'Изображение пиццы'} />
            <span className={styles.Title}>{title}</span>
            <div className={styles.Preferences}>
                <div className={styles.Types}>
                    {types.map((type, index) => (
                        <span
                            className={classNames(styles.Type, {
                                [styles.Type_selected]: selectedType === index,
                            })}
                            key={index}
                            onClick={() => setSelectedType(index)}>
                            {type === 0 ? 'тонкое' : 'традиционное'}
                        </span>
                    ))}
                </div>
                <div className={styles.Sizes}>
                    {sizes.map((size, index) => (
                        <span
                            className={classNames(styles.Size, {
                                [styles.Size_selected]: selectedSize === index,
                            })}
                            key={index}
                            onClick={() => setSelectedSize(index)}>
                            {size} см.
                        </span>
                    ))}
                </div>
            </div>
            <div className={styles.Footer}>
                <span className={styles.Price}>От {price} ₽</span>
                <div className={styles.AddButton}>
                    <span className={styles.Plus}>+</span>
                    <span className={styles.AddButtonText}>Добавить</span>
                    {countInCart && <span className={styles.Counter}>1</span>}
                </div>
            </div>
        </div>
    );
};

export default PizzaBlock;

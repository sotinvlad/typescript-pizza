import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

import PopUpCategories from '../PopUpCategories/PopUpCategories';
import sortingArrow from './../../assets/sorting-arrow.svg';
import styles from './Categories.module.scss';

const categories = [
    'Все',
    'Мясные',
    'Вегетарианские',
    'Гриль',
    'Острые',
    'Закрытые',
];

const sorting = ['популярности', 'цене', 'алфавиту'];

const Categories: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<number>(0);
    const [showPopUp, setShowPopUp] = useState<boolean>(false);
    const [selectedSorting, setSelectedSorting] = useState(sorting[0]);
    const sortingBlockRef = useRef(null);
    const onExternalClick = (event: MouseEvent) => {
        const path = event.composedPath();
        if (
            sortingBlockRef.current &&
            !path.includes(sortingBlockRef.current)
        ) {
            setShowPopUp(false);
        }
    };
    useEffect(() => {
        document.body.addEventListener('click', onExternalClick);
        return () => {
            document.body.removeEventListener('click', onExternalClick);
        };
    }, []);
    return (
        <div className={styles.Categories}>
            <div className={styles.List}>
                {categories.map((categoryName, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => setSelectedCategory(index)}
                            className={classNames(styles.Item, {
                                [styles.Item_selected]:
                                    selectedCategory === index,
                            })}>
                            {categoryName}
                        </div>
                    );
                })}
            </div>
            <div className={styles.SortingBlock} ref={sortingBlockRef}>
                <img src={sortingArrow} />
                <span className={styles.Main}>Сортировка по:</span>
                <span
                    className={styles.Secondary}
                    onClick={() => {
                        setShowPopUp((e) => !e);
                    }}>
                    {selectedSorting}
                </span>
                {showPopUp && (
                    <PopUpCategories
                        selectedSorting={selectedSorting}
                        types={sorting}
                        setSelectedSorting={setSelectedSorting}
                        setShowPopUp={setShowPopUp}
                    />
                )}
            </div>
        </div>
    );
};

export default Categories;

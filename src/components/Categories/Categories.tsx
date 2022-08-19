import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
    setSelectedCategory,
    setSelectedSorting,
    setShowPopUp,
} from '../../redux/slices/filterSlice';

import PopUpCategories from '../PopUpCategories/PopUpCategories';
import sortingArrow from './../../assets/sorting-arrow.svg';
import styles from './Categories.module.scss';

const Categories: React.FC = () => {
    const {
        selectedCategory,
        selectedSorting,
        showPopUp,
        categories,
        sortingTypes,
    } = useAppSelector((state) => state.filter);
    const dispatch = useAppDispatch();

    const sortingBlockRef = useRef(null);

    const onExternalClick = (event: MouseEvent) => {
        const path = event.composedPath();
        if (
            sortingBlockRef.current &&
            !path.includes(sortingBlockRef.current)
        ) {
            dispatch(setShowPopUp(false));
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
                            onClick={() => dispatch(setSelectedCategory(index))}
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
                <img src={sortingArrow} alt='Сортировка' />
                <span className={styles.Main}>Сортировка по:</span>
                <span
                    className={styles.Secondary}
                    onClick={() => {
                        dispatch(setShowPopUp(!showPopUp));
                    }}>
                    {sortingTypes[selectedSorting]}
                </span>
                {showPopUp && <PopUpCategories />}
            </div>
        </div>
    );
};

export default Categories;

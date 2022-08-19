import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
    setSelectedSorting,
    setShowPopUp,
} from '../../redux/slices/filterSlice';
import styles from './PopUpCategories.module.scss';

const PopUpCategories: React.FC = () => {
    const { selectedSorting, sortingTypes } = useAppSelector(
        (state) => state.filter,
    );
    const dispatch = useAppDispatch();
    return (
        <div className={styles.Main}>
            {sortingTypes.map((type, index) => (
                <div
                    className={classNames(styles.Type, {
                        [styles.Type_selected]:
                            sortingTypes[selectedSorting] === type,
                    })}
                    onClick={() => {
                        dispatch(setSelectedSorting(index));
                        dispatch(setShowPopUp(false));
                    }}>
                    {`по ${type}`}
                </div>
            ))}
        </div>
    );
};
export default PopUpCategories;

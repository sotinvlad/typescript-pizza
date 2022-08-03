import classNames from 'classnames';
import styles from './PopUpCategories.module.scss';

interface PopUpCategory {
    selectedSorting: string;
    setSelectedSorting: (type: string) => void;
    setShowPopUp: (action: boolean) => void;
    types: string[];
}

const PopUpCategories: React.FC<PopUpCategory> = ({
    selectedSorting,
    setSelectedSorting,
    setShowPopUp,
    types,
}) => {
    return (
        <div className={styles.Main}>
            {types.map((type) => (
                <div
                    className={classNames(styles.Type, {
                        [styles.Type_selected]: selectedSorting === type,
                    })}
                    onClick={() => {
                        setSelectedSorting(type);
                        setShowPopUp(false);
                    }}>
                    {`по ${type}`}
                </div>
            ))}
        </div>
    );
};
export default PopUpCategories;

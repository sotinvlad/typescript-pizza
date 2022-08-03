import pizzas from '../../assets/pizzas.json';
import PizzaBlock from '../PizzaBlock/PizzaBlock';
import styles from './PizzasList.module.scss';

const PizzasList: React.FC = () => {
    return (
        <div className={styles.PizzasList}>
            {pizzas.map((pizzaItem) => {
                return <PizzaBlock key={pizzaItem.id} {...pizzaItem} />;
            })}
        </div>
    );
};

export default PizzasList;

import Categories from '../../components/Categories/Categories';
import PizzasList from '../../components/PizzasList/PizzasList';
import styles from './Home.module.scss';

const Home: React.FC = () => {
    return (
        <div>
            <Categories />
            <h1 className={styles.ContentTitle}>Все пиццы</h1>
            <PizzasList />
        </div>
    );
};
export default Home;

import React from 'react';
import Header from './components/Header/Header';
import styles from './App.module.scss';
import { Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PizzaPage from './pages/PizzaPage/PizzaPage';
import NotFound from './pages/NotFound/NotFound';

const App: React.FC = () => {
    return (
        <div className={styles.App}>
            <Header totalPrice={1680} itemsInCart={3} />
            <div className={styles.MainContent}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/pizza/:id' element={<PizzaPage />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;

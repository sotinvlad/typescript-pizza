interface ICart {
    items: [];
}

const Cart: React.FC<ICart> = ({ items }) => {
    return <div>Cart</div>;
};
export default Cart;

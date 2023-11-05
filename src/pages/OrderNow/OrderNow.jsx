
const OrderNow = () => {
    const handlePurchase = e => {
        e.preventDefault();
        console.log('food purchase');
    }
    return (
        <section className="h-96 bg-red-100">
            <h2>Order Now</h2>
            <button onClick={handlePurchase} className="btn btn-primary btn-sm">Buy Now</button>
        </section>
    );
};

export default OrderNow;
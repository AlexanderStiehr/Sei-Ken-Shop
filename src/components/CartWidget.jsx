
const CarWidget = ({counter}) => {
    return(
        <div className="carWidgetContainer">
            <img src="./public/pictures/cart.png" alt="cart" className="cartIcon"/>
            <p className="cartCounter">{counter}</p>
        </div>
    )
}

export default CarWidget
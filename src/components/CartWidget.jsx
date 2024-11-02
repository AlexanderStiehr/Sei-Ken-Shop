
const CarWidget = ({counter}) => {
    return(
        <div className="carWidgetContainer">
            <img src="public\pictures\png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png" alt="cart" className="cartIcon"/>
            <p className="cartCounter">{counter}</p>
        </div>
    )
}

export default CarWidget
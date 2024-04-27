import CartIcon from "./CartIcon";
import './CartWidget.css'

function CartWidget(){
    return(
        <div className = "cart">
            <CartIcon ancho={45} height={45}/>
            <spam className="cart-num">5</spam>
        </div>
    );
}

export default CartWidget;
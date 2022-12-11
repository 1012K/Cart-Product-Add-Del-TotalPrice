import React from 'react';
import './index.css'


const CartItem = (props) => {




    // increaseQuantity = () => {
    //     //this.state.qty +=1;
    //     //console.log('this.state',this.state);

    //     // ye method bhi use kar sakte hai

    //     /* this.setState({
    //          qty: this.state.qty += 1
    //      }); */

    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty + 1
    //         }
    //     });
    // }

    // decreaseQuantity = () => {
    //     const { qty } = this.state;
    //     if (qty === 0) {
    //         return;
    //     }
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty - 1
    //         }
    //     });
    // }


    // console.log('this.props', this.props);

    //const { price, title, qty } = this.state;
    const { qty, price, title } = props.product;

    const { product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteProduct } = props;

    return (

        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={product.img}/>
            </div>

            <div className="right-block">
                <div style={{ fontSize: 25 }}>{title}</div> {/*av har jagah this.state likne ki jagah object destructuring kar dege const */}
                <div style={{ color: 'blue' }}>Rs.{price}</div>
                <div style={{ color: 'blue' }}>Qty:{qty}</div>
                <div className="cart-item-actions">
                    <img
                        alt=" increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png"
                        onClick={() => onIncreaseQuantity(props.product)}
                    />

                    <img
                        alt=" decrease" className="action-icons" src="  https://cdn-icons-png.flaticon.com/128/1828/1828906.png"
                        onClick={() => onDecreaseQuantity(props.product)}
                    />

                    <img
                        alt=" delete" className="action-icons" src=" https://cdn-icons-png.flaticon.com/128/6861/6861362.png"
                        onClick={() => onDeleteProduct(product.id)}
                    />
                </div>

            </div>
        </div>
    );
}


const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        color: 'blue'
    }
}
export default CartItem;

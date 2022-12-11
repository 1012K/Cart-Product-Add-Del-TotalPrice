import React from "react";

import Cart from "./Cart"
import Navbar from "./Navbar";


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 99,
                    title: 'Watch',
                    qty: 1,
                    img: 'https://media.istockphoto.com/id/533714204/photo/businessman-checking-time-from-watch.jpg?s=612x612&w=0&k=20&c=bJN94WW68Rw8uEogp3GKtBYnhcrNFNnf1SkWb0KDvGo=',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Mobile',
                    qty: 10,
                    img: 'https://media.istockphoto.com/id/1214808295/vector/illustration-of-hand-holding-smart-phone-with-text-messaging-screen.jpg?s=612x612&w=0&k=20&c=eTsO1ksndUM8CTRsF4IQx6An3xtNKd08jMM5T_5F6eA=',
                    id: 2
                },
                {
                    price: 39999,
                    title: 'Laptop',
                    qty: 1,
                    img: 'https://media.istockphoto.com/id/1222160402/photo/women-using-laptop-computer.jpg?s=612x612&w=0&k=20&c=pE4fJnDVx3fr8FWZru30rwQgrPolpupbVBf83Us7MwM=',
                    id: 3
                }
            ]

        }
    }
    handleIncreaseQuantity = (product) => {
        console.log('hey ,please increase the qty of', product);

        const { products } = this.state;

        const index = products.indexOf(product);
        products[index].qty += 1;



        this.setState({
            products
        })
    }

    handleDecreaseQuantity = (product) => {
        console.log('hey ,please decrease the qty of', product);

        const { products } = this.state;

        const index = products.indexOf(product);
        if (products[index].qty === 0) {
            return;
        }

        products[index].qty -= 1;



        this.setState({
            products
        })
    }

    handleDeleteProduct = (id) => {
        const { products } = this.state;
        const item = products.filter((item) => item.id !== id);
        this.setState({
            products: item
        })
    }

    getCartCount = () => {
        const { products } = this.state;

        let count = 0;

        products.forEach(product => {
            count += product.qty;

        })

        return count;
    }

    getCartTotal = () => {
        const { products } = this.state;

        let cartTotal = 0;
        products.map((product) => {
            cartTotal = cartTotal + product.qty * product.price;

           

        })
        return cartTotal;


    }

    render() {
        const { products } = this.state;

        return (

            <div className="App">
                <Navbar count={this.getCartCount()} />
                <Cart
                    products={products}
                    onIncreaseQuantity={this.handleIncreaseQuantity}
                    onDecreaseQuantity={this.handleDecreaseQuantity}
                    onDeleteProduct={this.handleDeleteProduct}

                />

                <div style ={{padding:10, fontSize:20}}> ToTAL:{this.getCartTotal()} </div>
            </div>
        );
    }
}
export default App
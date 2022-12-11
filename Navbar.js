import React from 'react';
import './index.css';
 


const Navbar = (props) => {

    return (

        <div style={styles.nav} >
            <div style={styles.cartItemContainer}>
                <img style={styles.cartIcon} src=" https://cdn-icons-png.flaticon.com/512/3144/3144456.png " alt="cart-icon " />
                <span style={styles.cartCount}> {props.count}</span>
            </div>

        </div>
    );
}


const styles = {

    cartIcon: {
        height: 40,
        marginRight: 20,
        marginTop: 10
    },
    nav: {
        height: 70,
        background: 'lightBlue',
        display: 'flex',
        justifyContent: 'flex-end',
        alighItems: 'center'
    },
    cartItemContainer: {
        position: 'relative'

    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }
}
export default Navbar;

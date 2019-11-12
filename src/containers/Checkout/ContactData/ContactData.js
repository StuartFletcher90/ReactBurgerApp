import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postCode: ''
        }
    }
    render () {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact info</h4>
                <form>
                    <input type="text" name="name" placeholder="Your Name"/>
                    <input type="text" name="email" placeholder="BurgerLover@burger.com"/>
                    <input type="text" name="street" placeholder="Burger Avenue"/>
                    <input type="text" name="postal" placeholder="Postal Code"/>
                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        )
    }
}

export default ContactData;


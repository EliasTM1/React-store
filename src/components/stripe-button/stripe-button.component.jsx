import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KYG6KLdiOYolBRYRUDsCpmshCN10QflMkqfXAptyZb2WlbcGw1URV36DDFkOakAEGyU0Vic04SosfW5Z4xUtwR900wZxtF5lb'


    const onToken = token => {
        console.log(token)
    }

    return (
        <StripeCheckout
            label='Pay AHORA'
            name='Excalibruh Ltd.'
            billingAddress
            shippingAddress
            image=''
            description={`Your total is $${price}`}
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;

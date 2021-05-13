import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IqSzMLwEZADbqzwn4qYAFdrUtoH0qxeV5pj9fEqvIb1wSWoZ95U4jnzCnHDCjJsDiktjRafFkwi690iYcFncS1d007cJrFJzD";

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful')
    }

    return (
        <StripeCheckout
            label='Pay Now'        
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};


export default StripeCheckoutButton;
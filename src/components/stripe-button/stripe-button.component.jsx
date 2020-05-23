import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_4sXCgwzfed9QXED7Thrr9lCH00ZzuZ06Pq";

    const onToken = (token) => {
        console.log(token);
        alert("Payment processed");
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="AK Clothing"
            billingAddress
            shippingAddress
            image=""
            description={`Yopur total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;

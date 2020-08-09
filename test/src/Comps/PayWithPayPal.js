import React, { useState, useEffect, useRef } from 'react'


function PayWithPayPal (props) {

    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    
    const paypalRef = useRef();
    
    
    useEffect(() => {
        
        window.paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            description: props.description,
                            amount: {
                                currency_code: 'USD',
                                value: props.amount,
                            }
                        }]
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    setPaidFor(true);
                    console.log('ORDER', order);
                },
                onError: err => {
                    setError(err);
                    console.error('ERROR', err);
                },
            })
            .render(paypalRef.current);
    }, []);
    

    if (paidFor) {
        return (
            <div>
                Thanks for making the purchase.
            </div>
        )
    }

    if (error) {
        return (
            <div>
                Error in processing order. Please Retry again
            </div>
        )
    }
    
    
    return (
        <div>
            
            <div>Total {props.amount} For {props.description}</div>
            <div ref={paypalRef} />
        </div>
    )
    
}

export default PayWithPayPal;
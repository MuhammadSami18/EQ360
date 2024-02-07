import React, { useRef } from 'react'

const PaypalCheckOut = ({ value }) => {
    const float = parseFloat(value).toFixed(2);
    const paypal = useRef()
        window.paypal.Buttons({
            createOrder: (data, actions, error) => {
                data = float
                return actions.order.create({
                    intent: 'Capture',
                    purchase_units: [{
                        description: 'Create Table Content',
                        amount: {
                            currency_code: 'USD',
                            value: data
                        }
                    }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                alert('You have successful purchase the package')
            }
        })
            .render(paypal.current)

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}

export default PaypalCheckOut

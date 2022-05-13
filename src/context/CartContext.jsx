import * as React from 'react';

const CartContext = React.createContext();

    function cartReducer( state, action ) {
        switch (action.type) {
            case 'increment': {
                return { count: state.count + 1 }
            }
            case 'decrement': {
            return { count: state.count - 1 }
            }
            default: {
            throw new Error('Unhandled action type:$ {action.type}')
            }
        }

        function CartProvider({ children }) {
            const [state, dispatch] =
                React.useReducer(cartReducer, { count: 0 });

            const value = { state, dispatch }
                return <CartContext.Provider value={value}></CartContext.Provider>
        }   
    }

export { CartProvider };
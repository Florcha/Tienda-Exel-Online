import React from "react";
const CartContext = React.createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case 'increment': {
      return { count: state.count + 1 }
    }
    case 'decrement': {
      return { count: state.count - 1 }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = React.useReducer(cartReducer, { count: 0 });

  const value = { state, dispatch };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

function useCart() {
  const context = React.useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

function CartConsumer({children}) {
  return (
    <CartContext.Consumer>
      {context => {
        if (context === undefined) {
          throw new Error('CountConsumer must be used within a CountProvider')
        }
        return children(context);
      }}
    </CartContext.Consumer>
  )
}

export { CartProvider, useCart, CartConsumer };
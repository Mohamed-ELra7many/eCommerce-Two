const Products = []

export const HandlePro = (state = Products, action) => {
    const product = action.payload
    switch (action.type) {
        case "ADD_PRO":         ////this is function add item
            const find = state.find((item) => item.id === product.id)
            console.log(state)
            if (find) {
                return state.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
            } else {
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            };

        case "REMOVE_PRO":      //this is function remove item
            const find2 = state.find((item) => item.id === product.id)
            if (find2) {
                return state.filter((item) => item.id !== product.id)
            } else {
                return state.map((v) => v.id === product.id ? { ...v, qty: v.qty - 1 } : v)
            }


        default:
            return state;
    }
}
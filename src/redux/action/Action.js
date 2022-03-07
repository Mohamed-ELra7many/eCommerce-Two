export const AddProduct = (product) => {     //this is function add item
    return {
        type: "ADD_PRO",
        payload: product
    }
}

export const DeletProduct = (product) => {    //this is function delet item
    return {
        type: "REMOVE_PRO",
        payload: product
    }
}
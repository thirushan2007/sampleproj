const initialState: any = {
    id: 123,
    productName: "",
}

const ProductInformation = (state = initialState, action: any) => {
    switch (action.type){
        case "GET_PRODUCT":
            return{
                ...state
            }
            default: 
            return state;
    }
}

export default ProductInformation;
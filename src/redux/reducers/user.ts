const initialState: any = {
    user: undefined,
    name: "hello",
    loggedIn: false,
    signOut: false,
};

const currentUser = (state = initialState, action: any) => {
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                name: action.payload,
                loggedIn: true,
            };
            case "GET_USER":
                return {
                    ...state,
                    name: "",
                    loggedIn: false,
                };
                default:
                    return state;
    }
}

export default currentUser;

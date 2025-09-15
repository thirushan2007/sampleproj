const setUser = (userObj: any) => {
    console.log("setuser")
    return {
        type: "SET_USER",
        payload: userObj,
    };
};

const getUser = (userObj: any) => {
    return {
        type: "GET_USER",
        payload: userObj,
    };
};

export {
    setUser,
    getUser
}
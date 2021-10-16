import { postApi } from "./api"

const createUserApi = async (username, email, password, bio) => {
    return await postApi("/users", {
        username,
        email,
        password,
        bio,
    })
}

const loginUserApi = async (username, password) => {
    return await postApi("/login", {
        username,
        password,
    })
}

export { createUserApi, loginUserApi }
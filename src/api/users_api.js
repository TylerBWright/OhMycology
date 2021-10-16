import { getApi, postApi, putApi } from "./api"

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

const getUserApi = async (userUuid) => {
    return await getApi(`/users/${userUuid}`)
}

const updateUserApi = async (userUuid, user) => {
    return await putApi(`/users/${userUuid}`, user)
}

export { createUserApi, loginUserApi, getUserApi, updateUserApi }
import axios from "axios"
import { getApi, postApi } from "./api"

const listPostsApi = async () => {
    return await getApi("/posts")
}

const getPostApi = async (postId) => {
    return await getApi(`/posts/${postId}`)
}

const createPostApi = async (
    title,
    color,
    heightInCm,
    diameterInCm,
    cap,
    stem,
    underside,
    sporePrint,
    texture,
    substrate,
    location,
    description,
    family,
    genus,
    commonName,
    edible,
) => {
    return await postApi("/posts", {
        title,
        color,
        heightInCm,
        diameterInCm,
        cap,
        stem,
        underside,
        sporePrint,
        texture,
        substrate,
        location,
        description,
        family,
        genus,
        commonName,
        edible,
    })
}

const addPostImageApi = async (postUuid, formData) => {
    const config = {
        headers: {
            "content-type": "multipart/form-data",
        },
    };

    return await axios
        .post(
            `${process.env.REACT_APP_BASE_URL}/posts/${postUuid}/image`,
            formData,
            config
        )
}

export { listPostsApi, getPostApi, createPostApi, addPostImageApi }
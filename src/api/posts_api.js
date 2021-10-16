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

export { listPostsApi, getPostApi, createPostApi }
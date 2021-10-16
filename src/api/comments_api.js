import { deleteApi, postApi } from "./api";

const addCommentApi = async (postId, content) => {
    return await postApi("/comments", {
        postId,
        content,
    })
};

const deleteCommentApi = async (commentId) => {
    return await deleteApi(`/comments/${commentId}`)
}

export { addCommentApi, deleteCommentApi }
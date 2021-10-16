import axios from "axios";

const getApi = async (relativeUrl) => {
    const token = localStorage.getItem("token")

    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return await axios.get(relativeUrl)
}

const postApi = async (relativeUrl, body) => {
    const token = localStorage.getItem("token")

    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    return await axios.post(relativeUrl, body)
}

const putApi = async (relativeUrl, body) => {
    const token = localStorage.getItem("token")

    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    return await axios.put(relativeUrl, body)
}

const deleteApi = async (relativeUrl, body) => {
    const token = localStorage.getItem("token")

    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return await axios.delete(relativeUrl)
}

export { getApi, postApi, putApi, deleteApi }
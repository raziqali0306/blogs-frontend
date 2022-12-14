import { BASE_URL } from "../utils/constants";

export function resources() {
    return {
        getMyposts: wrapPromise(getMyPosts()),
        getAllPosts: wrapPromise(getAllPosts()),
        getTags: wrapPromise(getTags())
    }
}

const wrapPromise = promise => {
    let status = 'pending';
    let result;
    let suspender = promise.then(
        res => {
            result = res;
            status = 'success';
        },
        err => {
            result = err;
            status = 'error';
        }
    )

    return {
        read() {
            if (status === 'pending') {
                throw suspender;
            }
            else if (status === 'error') {
                throw result;
            }
            else if (status === 'success') {
                return result;
            }
        }
    }
}

const getMyPosts = () => {
    const access_token = fetchAccessToken();
    if (access_token === null) return;
    return fetch(`${BASE_URL}/posts/myposts`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ access_token }),
    })
        .then((res) => res.json())
        .then((res) => res.data)
        .catch(err => err);
}

const getAllPosts = () => {
    return fetch(`${BASE_URL}/posts/`)
        .then((res) => res.json())
        .then((res) => res.data)
        .catch(err => err);
}

const getTags = () => {
    return fetch(`${BASE_URL}/posts/tags`)
        .then((res) => res.json())
        .then((res) => res)
        .catch((err) => err);
}

const fetchAccessToken = () => {
    if (localStorage.getItem('blogs') === null) {
        window.location.href = '/sign';
        return null;
    }
    return JSON.parse(localStorage.getItem('blogs'))?.user.accessToken || null;
}

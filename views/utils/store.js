export const getKey = () => {
    return localStorage.getItem('tk');
};

export const setKey = (value) => {
    return localStorage.setItem('tk', value);
};

export const setUser = (value) => {
    return localStorage.setItem('usr', JSON.stringify(value));
};

export const getUser = () => {
    return JSON.parse(localStorage.getItem('usr'));
};

export const removeUser = () => {
    localStorage.removeItem('usr');
    localStorage.removeItem('tk');
};

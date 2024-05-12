export const HOST = 'http://127.0.0.1:3000';

export const HttpClient = {
    send: (method, endpoint, params) => {
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');

        const requestOptions = {
            method: method,
            headers: headers,
            body: params,
        };

        return fetch(`${HOST}${endpoint}`, requestOptions);
    },
};

import jwt          from 'jsonwebtoken';

export function getToken() {
    return localStorage.getItem('token');
}

export function decode(token) {
    const profile = jwt.decode(token) || { exp: null };

    return profile;
}

export function isExpired() {
    const { exp } = decode(getToken());
    const now     = Date.now().valueOf() / 1000;

    return now - exp > 0;
}

export function isLogged() {
    return getToken() && !isExpired();
}

export function getProfile() {
    return decode(getToken());
}

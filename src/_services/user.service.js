import config from 'config';
import { handleResponse, requestOptions } from '@/_helpers';

export const userService = {
    getAll,
    getById,
    GetbyUser,
    getClients,
    getProjects,
    getProjectsW
};

function getAll() {
    return fetch(`${config.apiUrl}/users`, requestOptions.get())
        .then(handleResponse);
}
function GetbyUser() {
    return fetch(`${config.apiUrl}/users/h`, requestOptions.get())
        .then(handleResponse);
}

function getById(id) {
    return fetch(`${config.apiUrl}/users/${id}`, requestOptions.get())
        .then(handleResponse);
}
function getClients() {
    return fetch(`${config.apiUrl}/api/Client`, requestOptions.get())
        .then(handleResponse);
}
function getProjects(id) {
    return fetch(`${config.apiUrl}/api/Project/${id}`, requestOptions.get())
        .then(handleResponse);
}
function getProjectsW() {
    return fetch(`${config.apiUrl}/api/Project}`, requestOptions.get())
        .then(handleResponse);
}
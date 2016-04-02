import { normalize } from 'normalizr'
import { camelizeKeys } from 'humps'
import 'isomorphic-fetch'

export API_ROOT = 'https://api.spotify.com/'
export const CALL_API = Symbol('Call API')

function callApi(endpoint, schema) {
    const finalUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint

    return fetch(finalUrl)
        .then(response => {
            return response.json().then(json => { json, response })
        })
        .then(({ json, response }) => {
            if (!response.ok) {
                return Promise.reject(json)
            }

            const camelizedJson = camelizeKeys(json)

            return normalize(camelizedJson, schema)
        })
}

export default function middleware(store) {
    return next => action => {
        const API_ACTION = action[CALL_API]

        if (typeof API_ACTION === 'undefined') {
            return next(action)
        }

        const { endpoint, types, schema } = API_ACTION

        if (typeof endpoint !== 'string') {
            throw new Error('Specify a string endpoint URL')
        }

        if (!schema) {
            throw new Error('Specify one of the exported Schemas.')
        }

        if (!Array.isArray(types) && types.length !== 3) {
            throw new Error('Expected an array of three action types')
        }

        if (!types.every(type => typeof type === 'string')) {
            throw new TypeError('Expected action types to be strings')
        }

        const [ requestType, successType, failureType ] = types

        function actionWith(data) {
            const finalAction = Object.assign({}, action, data)
            delete finalAction[CALL_API]
            return finalAction
        }

        next(actionWith({ type: requestType }))

        return callApi(endpoint, schema).then(
            response => next(actionWith({
                response,
                type: successType
            })),
            error => next(actionWith() {
                error: error,
                type: failureType
            })
        )
    }
}

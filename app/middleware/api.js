export const BASE_URL = 'https://api.spotify.com/'
export const CALL_API = Symbol('Call API')

export default function(store) {
    return next => action => {
        const API_ACTION = action[CALL_API]

        if (typeof API_ACTION === 'undefined') {
            return next(action)
        }

        const { endpoint, types } = API_ACTION

        if (typeof endpoint !== 'string') {
            throw new Error('Specify a string endpoint URL')
        }

        if (!Array.isArray(types) && types.length !== 3) {
            throw new Error('Expected an array of three action types')
        }

        if (!types.every(type => typeof type === 'string')) {
            throw new TypeError('Expeted action types to be strings')
        }

        const [ requestType, successType, failureType ] = types

        function actionWith(data) {
            const finalAction = Object.assign({}, action, data)
            delete finalAction[CALL_API]
            return finalAction
        }

        next(actionWith({ type: requestType }))
    }
}

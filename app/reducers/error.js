const initialState = null

export default function error(state = initialState, action) {
    if (action.error) {
        return action.error
    }

    return state
}

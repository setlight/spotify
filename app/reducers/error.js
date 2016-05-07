const initialState = null

export default function error(state = initialState, action) {
    const { error } = action

    return error ? error : state
}

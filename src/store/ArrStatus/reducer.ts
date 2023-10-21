import handler from './index'
const reducer = (state = { ...handler.state }, action: { type: string }) => {
    const newState = JSON.parse(JSON.stringify(state))
    for (let key in handler.actions) {
        if (key === action.type) {
            handler.actions[key](newState, action)
            break;
        }
    }
    return newState
}
export default reducer
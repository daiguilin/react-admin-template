import handleNum from './index'
const reducer = (state = { ...handleNum.state }, action: { type: string, val: number }) => {
    const newState = JSON.parse(JSON.stringify(state))
    // switch (action.type) {
    //     case handleNum.add1:
    //         handleNum.actions[handleNum.add1](newState, action)
    //         break
    //     case handleNum.add2:
    //         handleNum.actions[handleNum.add2](newState, action)
    //         break
    //     default:
    //         break
    // }
    for (let key in handleNum.actions) {
        if (key === action.type) {
            handleNum.actions[key](newState, action)
            break;
        }
    }
    return newState
}
export default reducer
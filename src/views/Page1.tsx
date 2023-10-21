import { useDispatch, useSelector } from "react-redux"
// import store from "@/store"
//TS中提供的returnType，来获取函数类型的返回值
// type RootState = ReturnType<typeof store.getState>
import numStatus from "@/store/numStatus"
const View = () => {
    const { num,sarr } = useSelector((state:RootState) => {
        return {
            num: state.handleNum.num,
            sarr:state.handleArrStatus.sarr
        }
    })
    const dispatch = useDispatch()
    const changeNum2 = () => {
        dispatch(numStatus.asyncActions.asyncAdd1)
    }
    const changeNum = () => {
        dispatch({
            type: 'add2',
            val:10
        })
    }
    const changeArr = () => {
        dispatch({
            type: 'sarrpush',
            val:40
        })
    }
    return (
        <div>
            <p>sarr--{sarr}</p>
            
            <button onClick={changeArr}>changeArr</button>

            <p>num---{num}</p>
            
            <button onClick={changeNum}>同步按钮</button>
            <button onClick={changeNum2}>异步按钮</button>
        </div>
    )
}
export default View;
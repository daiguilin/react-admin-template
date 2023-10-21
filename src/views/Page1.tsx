import { useDispatch, useSelector } from "react-redux"
// import store from "@/store"
//TS中提供的returnType，来获取函数类型的返回值
// type RootState = ReturnType<typeof store.getState>
const View = () => {
    const { num,sarr } = useSelector((state:RootState) => {
        return {
            num: state.handleNum.num,
            sarr:state.handleArrStatus.sarr
        }
    })
    const dispatch = useDispatch()
    const changeNum = () => {
        dispatch({
            type: 'add1',
            val:1
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
            
            <button onClick={changeNum}>changeNum</button>
        </div>
    )
}
export default View;
export default {
    state: {
        num: 20
    },
    actions: {
        add1(newState: { num: number }) {
            newState.num++
        },
        add2(newState: { num: number }, action: { type: string, val: number }) {
            newState.num += action.val
        },
    },
    asyncActions: {
        asyncAdd1(dispatch: Function) {
            setTimeout(() => {
                dispatch({ type: 'add1' })
            }, 1000)
        }
    }
}
 //封装的目的：最终是有利于我们开发或者维护
 //封装的思路是：将来开发的时候值需要把数据和方法写入到这个状态文件中，例如：XxxxxStatus/index.ts，而不需要再去操作其他的文件（我们往着方向去封装）
import { ChangeEvent, useEffect, useState } from 'react'
import { Space, Input, Button, message } from "antd"
import initLoginBg from './init'
import { useNavigate } from "react-router-dom"
import { CaptchaAPI, LoginAPI } from "@/request/api"
import styles from "./login.module.scss"
import "./login.less"
const View = () => {
    const navigateTo = useNavigate()
    useEffect(() => {
        initLoginBg()
        getCaptchaImg()
        window.onresize = () => {
            initLoginBg()
        }
    }, [])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [captcha, setCaptcha] = useState('')
    const [captchaImg, setCaptchaImg] = useState('')
    const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }
    const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const captchaChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCaptcha(e.target.value)
    }
    const gotoLogin = async () => {
        console.log(username, password, captcha)
        //验证是否有空值
        if (!username.trim() || !password.trim() || !captcha.trim()) {
            message.warning('请输入完整信息!')
            return
        }
        //发起登录请求
        const loginApiRes = await LoginAPI({
            username,
            password,
            code: captcha,
            uuid: localStorage.getItem('uuid') as string
        })
        if (loginApiRes.code === 200) {
            //1，提示登录成功
            message.success('登录成功')
            //2， 保存token
            localStorage.setItem('token', loginApiRes.token)
            //3，跳转到/page1
            navigateTo('/page1')
            //4，删除本地保存的uuid
            localStorage.removeItem('uuid')
        }
    }
    const getCaptchaImg = async () => {
        // CaptchaAPI()
        // .then(res=>{
        //     console.log(res)
        // })
        const captchaAPIRes = await CaptchaAPI()
        console.log(captchaAPIRes);
        if (captchaAPIRes.code === 200) {
            //1，把图片数据显示在img上面
            setCaptchaImg("data:image/gif;base64," + captchaAPIRes.img)
            //2，本地保存uuid，给登录的时候用
            localStorage.setItem("uuid", captchaAPIRes.uuid)
        }


    }
    return (
        <div className={styles.loginPage}>
            {/* 存放背景 */}
            <canvas id='canvas' style={{ display: "block" }}></canvas>
            {/* 登录盒子 */}
            <div className={styles.loginBox + " loginbox"}>
                {/* 标题部分 */}
                <div className={styles.title}>
                    <h1>通用后台管理系统</h1>
                    <p>Strive Everyday</p>
                </div>
                {/* 表单部分 */}
                <div className='form'>
                    <Space direction='vertical' size="large" style={{ display: "flex" }}>
                        <Input placeholder="用户名" onChange={usernameChange} />
                        <Input.Password placeholder="密码" onChange={passwordChange} />
                        <div className="captchaBox">
                            <Input placeholder="验证码" onChange={captchaChange} />
                            <img height={38} src={captchaImg} alt="验证码" className="captchaImg" onClick={getCaptchaImg} />
                        </div>
                        <Button type='primary' block onClick={gotoLogin}>登录</Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}
export default View;
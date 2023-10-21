import { ChangeEvent, useEffect,useState } from 'react'
import { Space,Input,Button } from "antd"
import initLoginBg from './init'
import {CaptchaAPI} from "@/request/api"
import styles from "./login.module.scss"
import "./login.less"
const View = () => {
    useEffect(() => {
        initLoginBg()
        getCaptchaImg()
        window.onresize = () => {
            initLoginBg()
        }
    }, [])
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [captcha,setCaptcha] = useState('')
    const usernameChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setUsername(e.target.value)
    }
    const passwordChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
    }
    const captchaChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setCaptcha(e.target.value)
    }
    const gotoLogin = () => {
        console.log(username,password,captcha)
    }
    const getCaptchaImg = async() => {
        // CaptchaAPI()
        // .then(res=>{
        //     console.log(res)
        // })
        const  captchaAPIRes = await CaptchaAPI()
        console.log(captchaAPIRes);
        
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
                        <Input placeholder="用户名" onChange={usernameChange}/>
                        <Input.Password placeholder="密码" onChange={passwordChange}/>
                        <div className="captchaBox">
                            <Input placeholder="验证码"onChange={captchaChange}/>
                            <img height={38} src='' alt="验证码" className="captchaImg" onClick={getCaptchaImg}/>
                        </div>
                        <Button type='primary' block onClick={gotoLogin}>登录</Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}
export default View;
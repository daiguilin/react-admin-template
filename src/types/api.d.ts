//这个文件专门定义请求参数的类型和响应类型
interface CaptchaAPIRes{
    msg:string;
    img:string;
    code:number;
    captchaEnabled:boolean;
    uuid:string;
}
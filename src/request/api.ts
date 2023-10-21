import request from './index'

export const CaptchaAPI = ():Promise<CaptchaAPIRes> => request.get("/prod-api/captchaImage")
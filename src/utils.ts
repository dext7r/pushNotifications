import { getInput as getActionInput } from '@actions/core'
import dotenv from 'dotenv'

dotenv.config()
/**
 * 获取环境变量参数
 *
 * @param name 参数名称
 * @returns  参数值
 */
export function getInput(name: string): string {
  // eslint-disable-next-line node/prefer-global/process
  return getActionInput(name) || process.env[name] || ''
}

export const msgTypeList = [
  'ServerChanTurbo',
  'Dingtalk',
  'CustomEmail',
  'WechatRobot',
  'WechatApp',
  'PushPlus',
  'IGot',
  'Qmsg',
  'XiZhi',
  'PushDeer',
  'Discord',
  'Telegram',
  'OneBot',
]
/**
 * 检查消息类型是否合法
 *
 * @param msgType 消息类型
 * @returns 是否合法
 */
export async function checkMsgType(msgType: string): Promise<boolean> {
  if (!msgTypeList.includes(msgType)) return false
  return true
}

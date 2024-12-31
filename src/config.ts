import type {
  CustomEmailType,
  OneBotMsgType,
  PushDeerPushType,
  PushPlusChannelType,
  PushPlusTemplateType,
  QmsgPushType,
  WechatAppMsgType,
} from 'push-all-in-one'
import type { PushConfig, PushType } from './type'
import { getInput } from './utils'

export interface pushConfig {
  isConsole: boolean // 是否输出到控制台
  type: PushType
  title: string
  desp: string
}

export const config: pushConfig & PushConfig = {
  isConsole: Boolean(getInput('IS_CONSOLE')),
  type: getInput('TYPE') as PushType,
  title: getInput('TITLE'),
  desp: getInput('DESP'),
  ServerChanTurbo: {
    SCTKEY: getInput('SCTKEY'),
  },
  Dingtalk: {
    ACCESS_TOKEN: getInput('ACCESS_TOKEN'),
    SECRET: getInput('SECRET'),
  },
  WechatRobot: {
    WX_ROBOT_KEY: getInput('WX_ROBOT_KEY'),
    MSG_TYPE: getInput('MSG_TYPE') as WechatAppMsgType,
  },
  CustomEmail: {
    EMAIL_TYPE: getInput('EMAIL_TYPE') as CustomEmailType,
    EMAIL_TO_ADDRESS: getInput('EMAIL_TO_ADDRESS'),
    EMAIL_AUTH_USER: getInput('EMAIL_AUTH_USER'),
    EMAIL_AUTH_PASS: getInput('EMAIL_AUTH_PASS'),
    EMAIL_HOST: getInput('EMAIL_HOST'),
    EMAIL_PORT: Number(getInput('EMAIL_PORT')),
  },
  WechatApp: {
    WX_APP_CORPID: getInput('WX_APP_CORPID'),
    WX_APP_AGENTID: Number(getInput('WX_APP_AGENTID')),
    WX_APP_SECRET: getInput('WX_APP_SECRET'),
    WX_APP_USERID: getInput('WX_APP_USERID'),
    WX_APP_TOUSER: getInput('WX_APP_TOUSER'),
    WX_APP_MSG_TYPE: getInput('WX_APP_MSG_TYPE') as WechatAppMsgType,
  },
  PushPlus: {
    PUSH_PLUS_TOKEN: getInput('PUSH_PLUS_TOKEN'),
    TEMPLATE_TYPE: getInput('TEMPLATE_TYPE') as PushPlusTemplateType,
    CHANNEL_TYPE: getInput('CHANNEL_TYPE') as PushPlusChannelType,
  },
  IGot: {
    I_GOT_KEY: getInput('I_GOT_KEY'),
  },
  Qmsg: {
    QMSG_KEY: getInput('QMSG_KEY'),
    QMSG_QQ: getInput('QMSG_QQ'),
    QMSG_PUSH_TYPE: getInput('QMSG_PUSH_TYPE') as QmsgPushType,
  },
  XiZhi: {
    XI_ZHI_KEY: getInput('XI_ZHI_KEY'),
  },
  PushDeer: {
    PUSH_DEER_PUSH_KEY: getInput('PUSH_DEER_PUSH_KEY'),
    PUSH_DEER_ENDPOINT: getInput('PUSH_DEER_ENDPOINT'),
    PUSH_DEER_PUSH_TYPE: getInput('PUSH_DEER_PUSH_TYPE') as PushDeerPushType,
  },
  Discord: {
    DISCORD_WEBHOOK: getInput('DISCORD_WEBHOOK'),
    DISCORD_USERNAME: getInput('DISCORD_USERNAME'),
  },
  Telegram: {
    TELEGRAM_BOT_TOKEN: getInput('TELEGRAM_BOT_TOKEN'),
    TELEGRAM_CHAT_ID: Number(getInput('TELEGRAM_CHAT_ID')),
    TELEGRAM_SEND_SILENTLY: Boolean(getInput('TELEGRAM_SEND_SILENTLY')),
    TELEGRAM_PROTECT_CONTENT: Boolean(getInput('TELEGRAM_PROTECT_CONTENT')),
    TELEGRAM_MESSAGE_THREAD_ID: getInput('TELEGRAM_MESSAGE_THREAD_ID'),
  },
  OneBot: {
    ONE_BOT_BASE_URL: getInput('ONE_BOT_BASE_URL'),
    ONE_BOT_ACCESS_TOKEN: getInput('ONE_BOT_ACCESS_TOKEN'),
    ONE_BOT_MSG_TYPE: 'private',
    ONE_BOT_RECIEVER_ID: Number(getInput('ONE_BOT_RECIEVER_ID')),
  },
}

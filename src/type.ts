import type {
  CustomEmailType,
  OneBotMsgType,
  PushDeerPushType,
  PushPlusChannelType,
  PushPlusTemplateType,
  QmsgPushType,
  WechatAppMsgType,
} from 'push-all-in-one'

export type PushConfig = Required<{
  ServerChanTurbo?: {
    SCTKEY: string
  }
  Dingtalk?: {
    ACCESS_TOKEN: string
    SECRET?: string
  }
  CustomEmail?: {
    EMAIL_TYPE: CustomEmailType // 邮件类型
    EMAIL_TO_ADDRESS: string // 收件人
    EMAIL_AUTH_USER: string // 发件邮箱
    EMAIL_AUTH_PASS: string // 密码/授权码
    EMAIL_HOST: string // 发件域名
    EMAIL_PORT: number // 发件端口
  }
  WechatRobot?: {
    WX_ROBOT_KEY: string
    MSG_TYPE: WechatAppMsgType
  }
  WechatApp?: {
    WX_APP_CORPID: string
    WX_APP_AGENTID: number
    WX_APP_SECRET: string
    WX_APP_USERID: string
    WX_APP_TOUSER: string
    WX_APP_MSG_TYPE: WechatAppMsgType
  }
  PushPlus?: {
    PUSH_PLUS_TOKEN: string
    TEMPLATE_TYPE?: PushPlusTemplateType
    CHANNEL_TYPE?: PushPlusChannelType
  }
  IGot?: {
    I_GOT_KEY: string
  }
  Qmsg?: {
    QMSG_KEY: string
    QMSG_QQ: string
    QMSG_PUSH_TYPE: QmsgPushType
  }
  XiZhi?: {
    XI_ZHI_KEY: string
  }
  PushDeer?: {
    PUSH_DEER_PUSH_KEY: string
    PUSH_DEER_ENDPOINT?: string
    PUSH_DEER_PUSH_TYPE?: PushDeerPushType
  }
  Discord?: {
    DISCORD_WEBHOOK: string
    DISCORD_USERNAME: string
  }
  Telegram?: {
    TELEGRAM_BOT_TOKEN: string
    TELEGRAM_CHAT_ID: number
    TELEGRAM_SEND_SILENTLY?: boolean
    TELEGRAM_PROTECT_CONTENT?: boolean
    TELEGRAM_MESSAGE_THREAD_ID?: string
  }
  OneBot?: {
    ONE_BOT_BASE_URL: string
    ONE_BOT_ACCESS_TOKEN?: string
    ONE_BOT_MSG_TYPE: 'private'
    ONE_BOT_RECIEVER_ID: number
  }
}>

export type PushType = keyof PushConfig

export interface MetaPushConfig<T extends PushType> {
  type: T
  config: PushConfig[T]
}

export declare type PushAllInOneConfig<T extends PushType = PushType> =
  T extends any ? MetaPushConfig<T> : never

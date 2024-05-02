<h1 align="center">pushNotifications</h1>
<p>
  <a href="https://www.npmjs.com/package/@dext7r/push-notifications" target="_blank">
    <img alt="Version" src="https://img.shields.io/badge/version-1.0.1-blue.svg?cacheSeconds=2592000">
  </a>
  <a href="https://github.com/dext7r/pushNotifications/actions/workflows/push-notifications.yml" target="_blank">
    <img alt="GitHub Workflow Status" src="https://github.com/dext7r/pushNotifications/actions/workflows/push-notifications.yml/badge.svg">
  </a>
  <img src="https://img.shields.io/badge/node-%3E%3D12-blue.svg" />
  <a href="https://github.com/dext7r/pushNotifications#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/dext7r/pushNotifications/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/dext7r/pushNotifications/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

# pushNotifications

pushNotifications 是基于[push-all-in-one](https://github.com/CaoMeiYouRen/push-all-in-one) 封装的github action版本。也可使用 [@dext7r/push-notifications](https://www.npmjs.com/@dext7r/push-notifications),在node环境下使用

## action

### 新建一个workflow文件
  ```yaml .github/workflows/push-notifications.yml
  name: Push Notifications

on:
  push:
    branches:
      - main

jobs:
  push-notifications:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Run Push Notifications action
      uses: dext7r/push-notifications@v1.0.1
      with:
        TYPE: ${{ secrets.TYPE }}
        TITLE: ${{ secrets.TITLE }}
        DESP: ${{ secrets.DESP }}
        SCTKEY: ${{ secrets.SCTKEY }}
        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        SECRET: ${{ secrets.SECRET }}
        WX_ROBOT_KEY: ${{ secrets.WX_ROBOT_KEY }}
        MSG_TYPE: ${{ secrets.MSG_TYPE }}
        EMAIL_TYPE: ${{ secrets.EMAIL_TYPE }}
        EMAIL_TO_ADDRESS: ${{ secrets.EMAIL_TO_ADDRESS }}
        EMAIL_AUTH_USER: ${{ secrets.EMAIL_AUTH_USER }}
        EMAIL_AUTH_PASS: ${{ secrets.EMAIL_AUTH_PASS }}
        EMAIL_HOST: ${{ secrets.EMAIL_HOST }}
        EMAIL_PORT: ${{ secrets.EMAIL_PORT }}
        WX_APP_CORPID: ${{ secrets.WX_APP_CORPID }}
        WX_APP_AGENTID: ${{ secrets.WX_APP_AGENTID }}
        WX_APP_SECRET: ${{ secrets.WX_APP_SECRET }}
        WX_APP_USERID: ${{ secrets.WX_APP_USERID }}
        PUSH_PLUS_TOKEN: ${{ secrets.PUSH_PLUS_TOKEN }}
        TEMPLATE_TYPE: ${{ secrets.TEMPLATE_TYPE }}
        CHANNEL_TYPE: ${{ secrets.CHANNEL_TYPE }}
        I_GOT_KEY: ${{ secrets.I_GOT_KEY }}
        QMSG_KEY: ${{ secrets.QMSG_KEY }}
        QMSG_QQ: ${{ secrets.QMSG_QQ }}
        QMSG_PUSH_TYPE: ${{ secrets.QMSG_PUSH_TYPE }}
        XI_ZHI_KEY: ${{ secrets.XI_ZHI_KEY }}
        PUSH_DEER_PUSH_KEY: ${{ secrets.PUSH_DEER_PUSH_KEY }}
        PUSH_DEER_ENDPOINT: ${{ secrets.PUSH_DEER_ENDPOINT }}
        PUSH_DEER_PUSH_TYPE: ${{ secrets.PUSH_DEER_PUSH_TYPE }}
        DISCORD_WEBHOOK: ${{ secrets.DISCORD_WEBHOOK }}
        DISCORD_USERNAME: ${{ secrets.DISCORD_USERNAME }}
        TELEGRAM_BOT_TOKEN: ${{ secrets.TELEGRAM_BOT_TOKEN }}
        TELEGRAM_CHAT_ID: ${{ secrets.TELEGRAM_CHAT_ID }}
        TELEGRAM_SEND_SILENTLY: ${{ secrets.TELEGRAM_SEND_SILENTLY }}
        TELEGRAM_PROTECT_CONTENT: ${{ secrets.TELEGRAM_PROTECT_CONTENT }}
        TELEGRAM_MESSAGE_THREAD_ID: ${{ secrets.TELEGRAM_MESSAGE_THREAD_ID }}
        ONE_BOT_BASE_URL: ${{ secrets.ONE_BOT_BASE_URL }}
        ONE_BOT_ACCESS_TOKEN: ${{ secrets.ONE_BOT_ACCESS_TOKEN }}
        ONE_BOT_MSG_TYPE: ${{ secrets.ONE_BOT_MSG_TYPE }}
        ONE_BOT_RECIEVER_ID: ${{ secrets.ONE_BOT_RECIEVER_ID }}
```

## 参数

| 变量名                  | 描述                                       | 可选值          | 默认值  | 必填  |
|-----------------------|------------------------------------------|---------------|--------|--------|
| TYPE                  | 通知类型                                    | ServerChanTurbo, Dingtalk, CustomEmail, WechatRobot, WechatApp, PushPlus, IGot, Qmsg, XiZhi, PushDeer, Discord, Telegram, OneBot      | 无      | 是  |
| TITLE                 | 通知标题                                    | 任意字符串       | 无      | 是  |
| DESP                  | 通知内容                                    | 任意字符串       | 无      | 是  |
| SCTKEY                | Server酱的SCKEY                            | 字符串          | 无      | 否 |
| ACCESS_TOKEN          | 推送服务的ACCESS_TOKEN                     | 字符串          | 无      | 否 |
| SECRET                | 推送服务的SECRET                           | 字符串          | 无      | 否 |
| WX_ROBOT_KEY          | 微信机器人的KEY                             | 字符串          | 无      | 否 |
| MSG_TYPE              | 微信机器人的消息类型                         | 所有消息类型      | 无      | 否 |
| EMAIL_TYPE            | 邮件通知类型                                | 所有邮件类型      | 无      | 否 |
| EMAIL_TO_ADDRESS      | 邮件接收地址                                | 有效邮箱地址      | 无      | 否 |
| EMAIL_AUTH_USER       | 邮件发送者邮箱                               | 有效邮箱地址      | 无      | 否 |
| EMAIL_AUTH_PASS       | 邮件发送者授权密码                           | 字符串          | 无      | 否 |
| EMAIL_HOST            | 邮件发送者邮箱服务器                          | 有效域名         | 无      | 否 |
| EMAIL_PORT            | 邮件发送者邮箱端口                            | 数字           | 无      | 否 |
| WX_APP_CORPID         | 企业微信的CORPID                            | 字符串          | 无      | 否 |
| WX_APP_AGENTID        | 企业微信的AGENTID                           | 数字           | 无      | 否 |
| WX_APP_SECRET         | 企业微信的SECRET                            | 字符串          | 无      | 否 |
| WX_APP_USERID         | 企业微信的USERID                            | 字符串          | 无      | 否 |
| PUSH_PLUS_TOKEN       | PUSH_PLUS的TOKEN                            | 字符串          | 无      | 否 |
| TEMPLATE_TYPE         | 钉钉机器人的模板类型                          | 所有模板类型      | 无      | 否 |
| CHANNEL_TYPE          | 钉钉机器人的通道类型                          | 所有通道类型      | 无      | 否 |
| I_GOT_KEY             | iGot的KEY                                  | 字符串          | 无      | 否 |
| QMSG_KEY              | Qmsg的KEY                                  | 字符串          | 无      | 否 |
| QMSG_QQ               | Qmsg的QQ                                   | 字符串          | 无      | 否 |
| QMSG_PUSH_TYPE        | Qmsg的推送类型                               | 所有推送类型      | 无      | 否 |
| XI_ZHI_KEY            | 喜知的KEY                                  | 字符串          | 无      | 否 |
| PUSH_DEER_PUSH_KEY    | PushDeer的PUSH_KEY                         | 字符串          | 无      | 否 |
| PUSH_DEER_ENDPOINT    | PushDeer的ENDPOINT                         | 字符串          | 无      | 否 |
| PUSH_DEER_PUSH_TYPE   | PushDeer的推送类型                           | 所有推送类型      | 无      | 否 |
| DISCORD_WEBHOOK       | Discord的WEBHOOK                           | 字符串          | 无      | 否 |
| DISCORD_USERNAME      | Discord的用户名                             | 字符串          | 无      | 否 |
| TELEGRAM_BOT_TOKEN    | Telegram的BOT_TOKEN                        | 字符串          | 无      | 否 |
| TELEGRAM_CHAT_ID      | Telegram的CHAT_ID                          | 数字           | 无      | 否 |
| TELEGRAM_SEND_SILENTLY| Telegram的是否静默发送                        | true或false     | false  | 否 |
| TELEGRAM_PROTECT_CONTENT| Telegram的是否保护内容                      | true或false     | false  | 否 |
| TELEGRAM_MESSAGE_THREAD_ID| Telegram的消息线程ID                      | 字符串          | 无      | 否 |
| ONE_BOT_BASE_URL      | OneBot的BASE_URL                          | 字符串          | 无      | 否 |
| ONE_BOT_ACCESS_TOKEN  | OneBot的ACCESS_TOKEN                      | 字符串          | 无      | 否 |
| ONE_BOT_MSG_TYPE      | OneBot的消息类型                          | 所有消息类型      | 无      | 否 |
| ONE_BOT_RECIEVER_ID   | OneBot的接收者ID                          | 数字           | 无      | 否 |

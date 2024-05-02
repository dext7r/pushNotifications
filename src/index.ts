import { setFailed, setOutput } from '@actions/core'
import { config } from './config'
import { runPushAllInOne } from './push'
import { checkMsgType, msgTypeList } from './utils'

async function run() {
  try {
    const { title, desp, type, isConsole, ...rest } = config
    console.log('Push notification started...')
    const isMsgTypeValid = await checkMsgType(type)
    if (!isMsgTypeValid) {
      if (isConsole) {
        console.error('Invalid message type!')
        console.info(`You entered message type: ${type}`)
        console.info('Available message types:', msgTypeList.join(', '))
      }
      setOutput('status', 'failed')
      return
    }
    const response = await runPushAllInOne(title, desp, type, rest)

    if (isConsole) {
      console.info('Notification title:', title)
      console.info('Notification type:', type)
      console.log('Push notification successful.')
    }
    setOutput('response', response)
    setOutput('status', 'success')
  } catch (error: any) {
    setFailed(error.message)
    setOutput('error', error.message)
    setOutput('status', 'failed')
  }
}

run()

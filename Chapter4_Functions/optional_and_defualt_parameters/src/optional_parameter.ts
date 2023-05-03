/* // using '?'
function optionalParameters(name: string, userId?: number) {
  console.log(`name: ${name}, userId: ${userId || 'Not signed in'}`)
}

// defualt parameters
function defaultParameters(name: string, userId = 'Not signed in') {
  console.log(`name: ${name}, userId: ${userId}`)
}

defaultParameters('Jason', '1')
defaultParameters('Kevin')
 */

import {get} from 'http'

type Context = {
  appId?: string
  userId?: string
}

function getContext(
  name: string,
  context: Context = {appId: 'Apple', userId: '100'}
) {
  let time = new Date().toUTCString()
  console.log(
    `time: ${time}, appId: ${context.appId}, userId: ${context.userId}`
  )
}

getContext('Jason')

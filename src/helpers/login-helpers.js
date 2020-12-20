import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import { mainCache } from '../index.js'

/**
 * Login to Netflix and try to act as human as possible
 *
 * @param {string} email
 * @param {string} password
 */
const loginToNetflix = async (email, password) => {
  console.log('Logging in...')

  puppeteer.use(StealthPlugin())
  const browser = await puppeteer.launch({})
  const page = await browser.newPage()
  await page.goto('https://www.netflix.com/login')

  // Fill in login form
  await page.type('#id_userLoginId', email)
  await page.type('#id_password', password)
  await page.keyboard.press('Enter')

  const buildIdentifier = await page.evaluate(
    'netflix.appContext.state.model.models.serverDefs.data.BUILD_IDENTIFIER',
  )
  const authURL = await page.evaluate(
    'netflix.reactContext.models.userInfo.data.authURL',
  )

  mainCache.put('buildIdentifier', buildIdentifier)
  mainCache.put('authURL', authURL)

  // We're going to intercept what the server is returning
  await page.setRequestInterception(true)

  page.on('request', request => {
    request.continue()
  })

  page.on('response', async response => {
    if (response.status() === 302 && response.url().includes('/login')) {
      const headers = response.headers()
      mainCache.put('cookies', headers['set-cookie'])
      console.log(
        'Netflix redirected us, seems like everything is going as planned',
      )
      await browser.close()
    }
  })
}

export { loginToNetflix }

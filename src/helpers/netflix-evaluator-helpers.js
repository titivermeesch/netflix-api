import axios from 'axios'
// import stringUriEncode from 'strict-uri-encode'
import { mainCache } from '../index.js'
import { parseMultiCookieString } from './cookies/cookie-parser.js'

const pathEvaluate = async (paths = []) => {
  const pathStrings = paths.map(
    path => '&path=' + encodeURIComponent(JSON.stringify(path)),
  )

  const res = await axios({
    method: 'post',
    url: `https://www.netflix.com/api/shakti/${mainCache.get(
      'buildIdentifier',
    )}/pathEvaluator?authURL=${mainCache.get('authURL')}${pathStrings}`,
    headers: {
      'Content-Type': 'multipart/form-data',
      Cookie: parseMultiCookieString(mainCache.get('cookies')),
    },
  })

  return res.data.value
}

export { pathEvaluate }

import axios from 'axios'
import stringUriEncode from 'strict-uri-encode'
import { mainCache } from '../index.js'

const pathEvaluate = async (urlParamsObject, paths = []) => {
  const pathStrings = paths.map(
    path => '&path=' + stringUriEncode(JSON.stringify(path)),
  )

  const res = await axios({
    method: 'post',
    url: `https://www.netflix.com/api/shakti/${mainCache.get(
      'buildIdentifier',
    )}/pathEvaluator?authURL=${mainCache.get('authURL')}${pathStrings}`,
    headers: {
      'Content-Type': 'multipart/form-data',
      Cookie: mainCache.get('cookies'),
    },
  })

  return res.data
}

export { pathEvaluate }

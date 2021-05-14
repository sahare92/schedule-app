import axios from 'axios'

async function HTTPPostRequest(endpoint, body, headers=null) {
  var responseError = null
  var response = await axios
   .post(endpoint,
    JSON.stringify(body),
    {headers: headers || {'Content-Type': 'application/json'}})
   .catch((error) => {
     responseError = error.response
   })

   if (responseError) {
     return responseError
   }

   return response
}

export { HTTPPostRequest };

import axios from "axios"

//import apiBaseUrl from "../../utils/apiBaseUrl.js"

export default async function(req) {
  try {
    const cookie = req.headers.cookie ? req.headers.cookie : ""

    const response = await axios({
      url: "http://localhost:5000/dev-blog-9a969/us-central1/admin/blog-posts/get-all",
      headers: req ? {cookie: cookie} : "",
      withCredentials: true
    })

    return response.data
  } catch(error) {
    return {submitError: true}
  }
}
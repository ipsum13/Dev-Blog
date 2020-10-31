import axios from "axios"

export default async function getBlogPostByUrlTitle(urlTitle) {
  try {
    const response = await axios(`http://localhost:5000/dev-blog-9a969/us-central1/api/get-blog-post-by-url-title?urlTitle=${urlTitle}`)
    return response.data
  } catch(error) {
    return {getDataError: true}
  }
}
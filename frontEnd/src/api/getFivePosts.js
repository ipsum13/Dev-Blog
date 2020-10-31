import axios from "axios"

export default async function getFivePosts() {
  try {
    const response = await axios("http://localhost:5000/dev-blog-9a969/us-central1/api/posts/get-five-newest-posts")
    return response.data
  } catch(error) {
    return {getDataError: true}
  }
}
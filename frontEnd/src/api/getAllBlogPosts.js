import axios from "axios"


export default async function getAllBlogPosts () {
  try {
    const response = await axios("http://localhost:5000/dev-blog-9a969/us-central1/api/posts/get-all-blog-posts")
    return response.data
  } catch(error) {
    return {getDataError: true}
  }
}
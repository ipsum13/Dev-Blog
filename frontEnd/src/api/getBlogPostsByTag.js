import axios from "axios"

export default async function getBlogPostsByTag(tag) {
  try {
    const response = await axios(`http://localhost:5000/dev-blog-9a969/us-central1/api/posts/get-blog-posts-by-tag?tag=${tag}`)
    return response.data
  } catch(error) {
    return {getDataError: true}
  }
}
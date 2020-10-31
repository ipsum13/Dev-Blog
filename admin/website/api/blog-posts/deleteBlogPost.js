import axios from "axios"

//import apiBaseUrl from "../../utils/apiBaseUrl.js"

export default function(id, callback) {
  axios.put("http://localhost:5000/dev-blog-9a969/us-central1/admin/blog-posts/delete", {
    id: id
  }, {
    withCredentials: true
  })
  .then(function(response) {
    callback(response.data)
  })
  .catch(function(error) {
    callback({submitError: true})
  })
}
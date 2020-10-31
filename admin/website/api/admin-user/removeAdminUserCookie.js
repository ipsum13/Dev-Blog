import axios from "axios"

//import apiBaseUrl from "../../utils/apiBaseUrl.js"

export default function() {
  axios.put("http://localhost:5000/dev-blog-9a969/us-central1/admin/users/remove-admin-user-cookie", {}, {withCredentials: true})
  .then(function(response) {
    return response.data
  })
  .catch(function(error) {
    return
  })
}
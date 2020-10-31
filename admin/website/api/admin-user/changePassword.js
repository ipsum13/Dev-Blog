import axios from "axios"

//import apiBaseUrl from "../../utils/apiBaseUrl.js"

export default function(currentPassword, newPassword, callback) {
  axios.put("http://localhost:5000/dev-blog-9a969/us-central1/admin/users/change-password", {
    currentPassword: currentPassword,
    newPassword: newPassword
  }, {
    withCredentials: true
  })
  .then(function(response) {
    callback(response.data)
  })
  .catch(function(error) {
    callback({submitError: false})
  })
}
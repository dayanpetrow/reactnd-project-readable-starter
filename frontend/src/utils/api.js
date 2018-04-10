export const API = 'http://192.168.1.134:3001' //http://localost:3000
let token = localStorage.token

if(!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

export const headers = {
  'Authorization': token,
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export const fetchCategories = () => {
  return fetch(`${API}/categories`, { headers }).then(res => res.json())
}

export const fetchAllPosts = () => {
  return fetch(`${API}/posts`, { headers }).then(res => res.json())
}

export const fetchPostComments = (post_id) => {
  return fetch(`${API}/posts/${post_id}/comments`, { headers }).then(res => res.json())
}

export const fetchPost = (post_id) => {
  return fetch(`${API}/posts/${post_id}`, { headers }).then(res => res.json())
}

export const addPost = (post) => {
  return fetch(`${API}/posts`, { method: 'POST', headers, body: JSON.stringify(post) })
}

export const deletePost = (post_id) => {
  return fetch(`${API}/posts/${post_id}`, { method: 'DELETE', headers}).then(res => res.json)
}

export const votePost = (post_id, option) => {
  return fetch(`${API}/posts/${post_id}`, { method: 'POST', headers,
    body: JSON.stringify({option})}).then(res => res.json())
}

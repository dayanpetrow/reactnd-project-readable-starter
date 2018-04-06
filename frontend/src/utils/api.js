export const API = 'http://192.168.1.134:3001'
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

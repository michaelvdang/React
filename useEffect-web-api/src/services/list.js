export function getList() {
  return fetch('http://localhost:3333/list')
    .then(data => data.json())
}

export function postItem(item) {
 return fetch('http://localhost:3333/list', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({ 'name' : item , 'deleted': false})
 })
   .then(data => data.json())
}

export function deleteItem(id) {
  return fetch(`http://localhost:3333/list/${id}`, {
    method: 'DELETE'
  })
    .then(data => data.json())
}
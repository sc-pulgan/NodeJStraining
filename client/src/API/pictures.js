export const getPictures = (page) =>
fetch(`http://localhost:5000/api/pictures/${page}`, {
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
  },
})
.then(res => res.json())
.then(data => data)




export const getPicturesCount = () =>
fetch(`http://localhost:5000/api/pictures/`, {
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
  },
})
.then(res => res.json())
.then(data => data)

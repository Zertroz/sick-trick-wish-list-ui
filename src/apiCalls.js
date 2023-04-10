const getTricks = () => {
  return fetch('http://localhost:3001/api/v1/tricks')
  .then(res => res.json())
  .then(data => data)
}

export default getTricks;

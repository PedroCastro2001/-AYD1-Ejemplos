const axios = require('axios')
const API_URL = `https://www.fruityvice.com/api/fruit`

const getFruit = (Name) =>
    axios.get(`${API_URL}/${Name}`)
    .then((response) => response.data)

module.exports = {getFruit}
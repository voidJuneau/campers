export default class Api {
  
  static async all(table) {
    const axios = require('axios').default;
    const response = await axios.get(
      `https://postgres-db-api.herokuapp.com/api.php/records/${table}/`)
      .then(res => res.data.records)
    return response;
  }
}

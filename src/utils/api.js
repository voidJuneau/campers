export default class Api {
  
  static async all(table) {
    const axios = require('axios').default;
    const response = await axios.get(
      `https://ham-campers.herokuapp.com/api.php/records/${table}/`)
      .then(res => res.data.records)
    return response;
  }

  static async new(entry) {
    const axios = require('axios').default;
    const formData = new FormData();
    for (let property in entry) {
      formData.append(property, entry[property])
    }
    return axios.post(`https://ham-campers.herokuapp.com/api.php/records/ground`, 
      formData)
  }

  static async edit(entry, id) {
    const axios = require('axios').default;
    return axios.put(`https://ham-campers.herokuapp.com/api.php/records/ground/${id}`, 
      JSON.stringify(entry))
  }
}

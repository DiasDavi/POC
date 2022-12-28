import axios from "axios";
import { fixedIp } from "./IpConfig";

export default {
  /* GET region */
  async getConfig() {
    return new Promise((resolve, reject) => {
      try {
        axios.get(`${fixedIp}/configs`).then(res => resolve(res));
      } catch (error) {
        console.log(error);
        return reject(error)
      }
    });
  },

  async getLocations() {
    return new Promise((resolve, reject) => {
      try {
        axios.get(`${fixedIp}/locations`).then(res => resolve(res));
      } catch (error) {
        console.log(error);
        return reject(error)
      }
    })
  },

  async getLocationsToEdit(id) {
    return new Promise((resolve, reject) => {
      try {
        axios.get(`${fixedIp}/locations/${id}`).then(res => resolve(res));
      } catch (error) {
        console.log(error);
        return reject(error)
      }
    })
  },

  async getPhotos() {
    return new Promise((resolve, reject) => {
      try {
        axios.get(`${fixedIp}/images`).then(res => resolve(res))
      } catch (error) {
        console.log(error)
        return reject(error)
      }
    })
  },

  async getSchedule() {
    return new Promise((resolve, reject) => {
      try {
        axios.get(`${fixedIp}/schedule`).then(res => resolve(res));
      } catch (error) {
        console.log(error);
        return reject(error)
      }
    })
  },

  async getScheduleToEdit(id) {
    return new Promise((resolve, reject) => {
      try {
        axios.get(`${fixedIp}/schedule/${id}`).then(res => resolve(res));
      } catch (error) {
        console.log(error);
        return reject(error)
      }
    })
  },

  /* POST region */
  async postSchedule(data) {
    await axios.post(`${fixedIp}/schedule`, data).then(res => {
      if (res.data[Object.keys(res.data)[0]].status === "BAD") {
        console.log("Status BAD")
        return
      }
      console.log("POST realizada com sucesso - \n", res)
    })
      .catch(error => {
        console.log("Erro ao tentar executar POST - \n", error)
      })
  },


  async postLocal(data) {
    await axios.post(`${fixedIp}/locations`, data).then(res => {
      if (res.data[Object.keys(res.data)[0]].status === "BAD") {
        console.log("Status BAD")
        return
      }
      console.log("POST realizada com sucesso - \n", res)
    })
      .catch(error => {
        console.log("Erro ao tentar executar POST - \n", error)
      })
  },


  /* PUT region */
  async putSchedule(id, data) {
    await axios.put(`${fixedIp}/schedule/${id}`, data)
      .then(res => {
        if (res.data[Object.keys(res.data)[0]].status === "BAD") {
          console.log("Status BAD");
        }
        console.log("Atualização realizada com sucesso - \n", res)
      })
      .catch(error => {
        console.log("Erro ao tentar executar PUT - \n", error)
      })
  },

  async putLocal(id, data) {
    await axios.put(`${fixedIp}/locations/${id}`, data)
      .then(res => {
        if (res.data[Object.keys(res.data)[0]].status === "BAD") {
          console.log("Status BAD");
        }
        console.log("Atualização realizada com sucesso - \n", res)
      })
      .catch(error => {
        console.log("Erro ao tentar executar PUT - \n", error)
      })
  },

  /* DELETE region */
  async deleteSchedule(id) {
    await axios.delete(`${fixedIp}/schedule/${id}`)
  },

  async deleteLocal(id) {
    await axios.delete(`${fixedIp}/locations/${id}`)
  }
};




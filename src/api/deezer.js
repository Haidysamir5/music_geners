import axios from "axios";
const BaseURL='https://cors-anywhere.herokuapp.com/https://api.deezer.com';
// const BaseURL= `https://deezerdevs-deezer.p.rapidapi.com/`;

export default axios.create({
  baseURL: BaseURL,
  // headers: {
  //   "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  //   "x-rapidapi-key": "9284e6746fmshe20ec42e950a2ecp1c45f1jsn386e62035fcf",
  // },
  // headers: {
  //   "Authorization":"Bearer fr70uDLaPAhBIUHABBLGw7fV5FHrq8S4ryZqBXuUMUqtZ6XpX5w"
  //   // "x-rapidapi-key": "9284e6746fmshe20ec42e950a2ecp1c45f1jsn386e62035fcf",
  // },
  // dataType: "json"

});

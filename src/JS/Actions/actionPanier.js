import axios from "axios";

export const savePanier = (newPanier) => () => {
  axios.post("/store", newPanier).catch((err) => console.log(err));
};

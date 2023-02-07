const axios = require("axios");
const fs = require('fs');

module.exports.getTransactions = async () => {

  const response = await axios
    .post("http://localhost:8080/api/transaction/all", {
      vendorId: "JEDX00453",
    })
    .catch((e) => {
      console.log("error occured");
    });
  console.log(response.data);
};

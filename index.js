const crypto = require('crypto-js')


const key = "djkbfhjksrgfjhwsfhjrhjfbebrfebrfhubeah"
const payload = {
  "_id": "sdsds",
  "name": "Sammit Pal"
}


function verify(token, key) {
  try {
    const bytes = crypto.AES.decrypt(token, key);
    const originalText = bytes.toString(crypto.enc.Utf8);
    const json = JSON.parse(originalText);
    if (json.exp && json.exp < Date.now()) {
      return ("Token Expired");
    }
    else {
      return (JSON.parse(originalText));
    }
  } catch (error) {
    return false
  }
}
function tokenize(obj, key, exp) {
  let payloadData=""
  if(exp){
    payloadData= {
      ...obj,
      exp: Date.now()+exp*1000 
    }
  }
  else{
    payloadData = {
      ...obj,
    }
  }
  const cypherText = crypto.AES.encrypt(JSON.stringify(payloadData), key).toString();
  return cypherText;
}
const awt = {
  tokenize,
  verify
}

module.exports = awt
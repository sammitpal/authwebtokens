# **AUTH WEB TOKEN (AWT) 🔐**
A token that enables authentication.

## **Installation**
    npm i authwebtoken 
## ***More Information on AWT***
 
 * Login with payload data
 * AWT returns a hashed token 🔑
 * Store that in Front End with localStorage or cookies
 * Verify that token with your backend
    * If vaild token --> AWT returns payload data 

## **How to use?**

**AWT tokenize 🔒**

    const awt = require('awt');
    const payload = {
      "_id": "sdhgd3782g378",
      "name" "xyz",
      "password: "s3e32344sad@4#$$"
    }
    const key = PROCESS.env.key; //keyboardcat
    const token = awt.tokenize(payload,key)
    console.log(token) 

    //U2FsdGVkX19fw6LdQL21FA116uLaQNUfcTGz1FMsLz5PchpWQpy32Ngqtc4hPHqhpN4qFCB3sKwwAvjaZhHDozyNBOJVK/+zY3YGksnCGQ8=

  ***options***
   * exp (in seconds) 30
   > example: awt.tokenize(pay,key,60) // token valid for 1 minute
  
**AWT verify 🔓**

    const awt = require('awt');
    const key = PROCESS.env.key; //keyboardcat
    const verifiedUser = awt.verify(token, key);

    if(verifiedUser){
      console.log(verifiedUser);
      /*const payload = {
        "_id": "sdhgd3782g378",
        "name" "xyz",
        "password: "s3e32344sad@4#$$"
      }*/
    }

***DEV Dependencies***
  * Crypto

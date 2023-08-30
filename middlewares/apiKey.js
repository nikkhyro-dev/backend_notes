
function apiKey(req,res,next){
    // global api key 
const api_key = '1234567';
// check is apiKey  matching with global api_key 
// if not matches then we send user to file is not found 
// /products?api_key=123467 
// is a query string and can be get by req.query
console.log( req.query.api_key)

const userApi_key =req.query.api_key;
if(userApi_key && (userApi_key === api_key)){
   
    next();
    
console.log("next")
}
else{
  res.json({"message":"Looking for the search list "})
}

}

module.exports = apiKey;

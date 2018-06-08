var exports = function(payload) {
  var signature = payload.headers['X-Signature'];
  
  console.log("payload:", payload.headers);
  
  var queryArg = payload.query.arg || '';
  
  var body = {};
  
  if (payload.body) {
    body = JSON.parse(payload.body.text());
  }
  
  var digest = utils.crypto.hmac(payload.body.text(), "peanuts", "sha1", "hex");

  // console.log("signature:", signature);
  // console.log("digest:", digest);
  
  //Only write the data if the digest matches Segments x-signature!

    console.log("Digest Matches");
    
    var mongodb = context.services.get("mongodb-atlas");
    
    // Set the collection up to write data
    var coll = mongodb.db("myths").collection("myths");
    
    // Write the data
    coll.insertOne(body);

  return queryArg + ' ' + body.msg;
};
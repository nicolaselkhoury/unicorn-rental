module.exports = { 
    friendlyName : "Health API", 
 
    descriptions : "Returns a response 200", 
 
    extendedDescription : "This is a health check API. It is used to ensure that the service is up and running. Upon being called, the API returns a 200 response", 
    
    inputs : {}, 
    
    exits : sails.config.custom.responseTypes, 
    
    fn : async function(inputs, exits) { 
        return exits.success({status: "success", data: "The Unicorn Rental service is running"});  
    } 
} 
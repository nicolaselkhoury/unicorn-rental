module.exports = { 
    friendlyName : "Unicorn Status", 
 
    descriptions : "Returns all the unicorns object", 
 
    extendedDescription : "Returns a JSON object that represents all the unicorns present, along with their booking status", 
    
    inputs : {}, 
    
    exits : sails.config.custom.responseTypes, 
    
    fn : async function(inputs, exits) {
        // The unicorns object is stored in the globals file, and is fetched as follows: sails.config.globals.unicorns
        return exits.success({status: "success", data: sails.config.globals.unicorns});  
    } 
} 
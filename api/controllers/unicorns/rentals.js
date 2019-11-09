module.exports = { 
    friendlyName : "Unicorn Status", 
 
    descriptions : "Returns all the unicorns object", 
 
    extendedDescription : "Returns a JSON object that represents all the unicorns present, along with their booking status", 
    // List the inputs required, along with the necessary information
    inputs : {
        rentType : {
            type: "string",
            required: true,
            description: "Specifies whether it is a rental or a return of the unicorn. Accepted Values: [rental | return]",
            isIn: ["rental", "return"]
        },
        unicornId: {
            type : "string",
            required: true,
            description: "The ID of the unicorn to be rented/returned",
            isIn: ["pinkyPie", "rainbowDash", "fluttershy", "twilightSparkle"]
        }
    }, 
    
    exits : {}, 
    
    fn : async function(inputs, exits) {
        // Retrieve the unicorn object
        // There is no need to validate the unicorn Id, since Sails JS will automatically perform the 
        // necessary validations specified in the inputs object above
        let requiredUnicorn = sails.config.globals.unicorns[inputs.unicornId];
        // Handle the case of returning a unicorn
        if (inputs.rentType === "return") {
            // Return an error when returning a unicorn that is not rented
            if(!requiredUnicorn.isRented)
                return exits.success({status: "error", data: `${requiredUnicorn.name} is not rented. There is no need to return it`});
            // If the unicorn is rented, modify its rental state to false, and the last rental date to now
            requiredUnicorn.isRented = false;
            requiredUnicorn.lastRentalTime = new Date();
            // Log the status of every unicorn. This is only printed for demo purposes, to ensure that everything is running smoothly
            sails.log.info("UNICORN STATUS REPORT:");
            sails.log.info(sails.config.globals.unicorns);
            return exits.success({status: "success", data: `${requiredUnicorn.name} is successfully returned`});
        }
        // Handle the case of renting a unicorn
        else {
            // Return an error when attempting to rent a unicorn that is already rented
            if(requiredUnicorn.isRented) 
                return exits.success({status: "error", data: `${requiredUnicorn.name} is rented. Unable to rent it`});
            // Return an error if the unicorn did not complete its rest time
            let restTimeElapsed = (new Date() - requiredUnicorn.lastRentalTime) / 1000;
            if(requiredUnicorn.lastRentalTime && restTimeElapsed < requiredUnicorn.restTime) 
                return exits.success({status: "error", data: `${requiredUnicorn.name} still requires ${(requiredUnicorn.restTime - restTimeElapsed).toFixed(2)} seconds of rest. Unable to rent it at the moment`});
            // If all the checks are correct, rent the unicorn
            // Change the rental status of the unicorn and return a response
            requiredUnicorn.isRented = true;
            // Log the status of every unicorn. This is only printed for demo purposes, to ensure that everything is running smoothly
            sails.log.info("UNICORN STATUS REPORT:");
            sails.log.info(sails.config.globals.unicorns);
            return exits.success({status: "success", data: `${requiredUnicorn.name} is successfully rented`});

        }
    } 
} 
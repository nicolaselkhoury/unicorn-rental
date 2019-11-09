# Unicorn Rental

## Introduction

A Microservice built in NodeJS using the [SailsJS framework](https://sailsjs.com/), that allows to rent and return unicorns.
This README file serves as a walkthrough to install, run, and use the microservice.

## Installation
After downloading the repository, access the root directory, and perform the following two actions:
1. Install the dependencies `npm install`.
2. Run the microservice (Runs on port 1337): `node app.js`.

## APIs
The API routes are defined in the `routes.js` file under the `config` directory.
This microservice possesses three APIs

1. `GET /healtz`: Returns a 200 response signaling that the microservice is running and is responsive. The API is written in the file `api/controllers/health/health.js`
<br />Example Request: `http://localhost:1337/healtz`
<br />Example Response: `{
    "status": "success",
    "data": "The Unicorn Rental service is running"
}`

2. `GET /unicorns/status`: Returns a JSON object containing information about every unicorn available. The API is written in the file `api/controllers/unicorns/status.js`
<br />Example Request: `http://localhost:1337/unicorns/status`
<br />Example Response: `{
    "status": "success",
    "data": {
        "pinkyPie": {
            "name": "Pinky Pie",
            "isRented": false,
            "lastRentalTime": null,
            "restTime": 15
        },
        "rainbowDash": {
            "name": "Rainbow Dash",
            "isRented": false,
            "lastRentalTime": null,
            "restTime": 15
        },
        "fluttershy": {
            "name": "Fluttershy",
            "isRented": false,
            "lastRentalTime": null,
            "restTime": 15
        },
        "twilightSparkle": {
            "name": "Twilight Sparkle",
            "isRented": false,
            "lastRentalTime": null,
            "restTime": 30
        }
    }
}`

Below is a description of every piece of information for a unicorn:
<br /> The JSON key of every unicorn is this unicorn's ID.
<br /> Each unicorn object possesses the following attributes:
* name: The name of the unicorn
* isRented: Boolean value that specifies if the unicorn is rented or not.
* lastRentalTime: The time at which the unicorn was last rented.
* restTime: Time, in seconds, required by the unicorn to rest before it can be rented again. The time is in seconds. instead of minutes, for demo purposes only.

3. `GET /unicorns/rentals/:unicornId`: API used to rent/return a unicorn. The API is written in the file `api/controllers/unicorns/rentals.js`.
The API requires two inputs: unicorn ID `(pinkyPie, rainbowDash, fluttershy, twilightSparkle)` and rentType `(rental, return)`
<br /> Below are the scenarios for this API:
* Successfully rent a unicorn:
<br />Example Request: `localhost:1337/unicorns/rentals/pinkyPie?rentType=rental`
<br />Example Response: `{
    "status": "success",
    "data": "Pinky Pie is successfully rented"
}`

* Rent a unicorn that is already rented:
<br />Example Request: `localhost:1337/unicorns/rentals/pinkyPie?rentType=rental`
<br />Example Response: `{
    "status": "error",
    "data": "Pinky Pie is rented. Unable to rent it"
}`

* Successfully return a unicorn:
<br />Example Request: `localhost:1337/unicorns/rentals/pinkyPie?rentType=return`
<br />Example Response: `{
    "status": "success",
    "data": "Pinky Pie is successfully returned"
}`

* Rent a unicorn that is still resting:
<br />Example Request: `localhost:1337/unicorns/rentals/pinkyPie?rentType=rental`
<br />Example Response: `{
    "status": "error",
    "data": "Pinky Pie still requires 7.86 seconds of rest. Unable to rent it at the moment"
}`

* Return a unicorn that is not rented:
<br />Example Request: `localhost:1337/unicorns/rentals/pinkyPie?rentType=return`
<br />Example Response: `{
    "status": "error",
    "data": "Pinky Pie is not rented. There is no need to return it"
}`
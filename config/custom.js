/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */

module.exports.custom = {

	responseTypes: {
		unauthorized: {
			description: 'This response type informs the client that an unauthorized action has been requested',
			responseType: 'unauthorized',
			statusCode: 401
		},
		handledError: {
			description: 'This response type informs the client that there was an error, specifically handled by the respective microservice',
			responseType: 'handledError',
			statusCode: 400
		},
		unhandledError: {
			description: 'This response type informs the client that an unexpected error has occurred in the catch block of the action',
			responseType: 'unhandledError',
			statusCode: 500
		},
	}
};

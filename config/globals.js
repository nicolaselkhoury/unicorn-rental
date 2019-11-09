/**
 * Global Variable Configuration
 * (sails.config.globals)
 *
 * Configure which global variables which will be exposed
 * automatically by Sails.
 *
 * For more information on any of these options, check out:
 * https://sailsjs.com/config/globals
 */

module.exports.globals = {
	_: require('@sailshq/lodash'),
	async: false,
	models: true,
	sails: true,

	unicorns : {
		pinkyPie : {
			name: "Pinky Pie",
			isRented: false,
			lastRentalTime: null,
			restTime: 15
		},
		rainbowDash : {
			name: "Rainbow Dash",
			isRented: false,
			lastRentalTime: null,
			restTime: 15
		},
		fluttershy : {
			name: "Fluttershy",
			isRented: false,
			lastRentalTime: null,
			restTime: 15
		},
		twilightSparkle : {
			name: "Twilight Sparkle",
			isRented: false,
			lastRentalTime: null,
			restTime: 30
		},
	}
};

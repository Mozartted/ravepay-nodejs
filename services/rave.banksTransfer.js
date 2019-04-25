var morx = require('morx');
var q = require('q');

var spec =  morx.spec()  
				.build('__n', 'required:false, eg:NGN')  
				.end();

function service(data, _rave){

	var d = q.defer();

	q.fcall( () => {

		//var validated = morx.validate(data, spec, _rave.MORX_DEFAULT);
		//var params = validated.params; 


		return {};

	})
	.then( params  => {

		 
		//params.SECKEY = _rave.getSecretKey(); 
		params.method = "GET"; 
		return _rave.request(`/v2/banks/${data.country}/?public_key=${_rave.getPublicKey()}`, params)
	})
	.then( response => {

		//console.log(response);
		d.resolve(response);

	})
	.catch( err => {

		d.reject(err);

	})

	return d.promise;
	
	

}
service.morxspc = spec;
module.exports = service;
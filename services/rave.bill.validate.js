// {
//     "secret_key": "FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X",
//     "service": "bills_validate_CB182_BIL121_10409163051",
//     "service_method": "get",
//     "service_version": "v1",
//     "service_channel": "rave"
//   }
var morx = require('morx');
var q = require('q');

var spec =  morx.spec()  
				.build('service', 'required:required, eg: bills_validate_CB182_BIL121_45345093051')  
				.end();

function service(data, _rave){

	var d = q.defer();

	q.fcall( () => {

		var validated = morx.validate(data, spec, _rave.MORX_DEFAULT);
		var params = validated.params;

		return params; 


		// return {};

	})
	.then( params  => {

		 
		params.secret_key= _rave.getSecretKey(); 
		params.service_method= "get" 
		params.service_channel= "rave"
		params.service_version= "v1"
		params.method = "POST"; 
		return _rave.request(`/v2/services/confluence`, params)
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
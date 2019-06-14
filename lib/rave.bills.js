
var billCategories = require("../services/rave.bills.getCategories");
var validateDetails = require("../services/rave.bill.validate");

function Bills(RaveBase){
	this.validate = function (data) {
		return validateDetails(data, RaveBase)
	}

	this.getCategories= function (){
		return billCategories(null, RaveBase);
	}
}
module.exports = Bills;
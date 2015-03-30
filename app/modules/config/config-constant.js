angular.module('config', [])

.constant('CONFIG', {app:{version:'0.0.1',mode:'staging',name:'Vodafone',staging:{webServiceUrl:'mock/'},production:{},extras:{}},requests:{getCountryList:'country-list.json',getTopUpAmounts:'top-up-amount.json',submitForTopup:'recharge/submit'}})

.value('debug', true)

;
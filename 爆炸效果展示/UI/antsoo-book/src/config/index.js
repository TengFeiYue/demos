const dev = {
	development: 'http://192.168.1.8:8752/antsooWXApp',
	production: 'www.antsoo.com/'
}
const inject = dev.development;
const api = {
	book: {
		getData: {
			method: 'post',
			url: inject + 'booddetail/'
		}
	},
	my: {
		getData: {
			method: 'post',
			url: inject + 'booddetail/'
		}
	},
	common: {
		getCode: {
			method: 'POST',
			url: inject + '/user/sendValidatecode'
		}
	}
}
export default api;
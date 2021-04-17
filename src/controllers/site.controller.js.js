const siteController = {
	async home(req, res, next) {
		return res.render('index.pug');
	}
};

export default siteController;

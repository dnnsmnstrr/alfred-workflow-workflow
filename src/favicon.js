const alfy = require('alfy');

(async () => {
	try {
		console.log('process.argv', process.argv);
		const url = process.argv[2] || 'test.com';
		console.log('url', url);
		const data = await alfy.fetch('http://favicongrabber.com/api/grab/' + url);
		console.log('data', data);
	} catch (err) {
		console.log(err);
        // Deal with the fact the chain failed
	}
})();

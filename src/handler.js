const query = process.argv[2]; // query
const {BASE_URL} = process.env; // environment variables

(async () => {
	try {
		console.log(query); // Pass query back to alfred
	} catch (error) {
		console.log('err', err);
	}
})();

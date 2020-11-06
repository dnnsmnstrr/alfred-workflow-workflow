const got = require('got');
const alfy = require('alfy');
const {isValidUrl} = require('./helper');

const url = alfy.input

const formatItem = (element) => ({
  title: element.src,
  subtitle: `Size: ${element.sizes} | Type: ${element.type}`,
  arg: element.src
})

const getHighestRes = (icons = []) => {
  const highestRes = icons.reduce((previous, current) => {
		if (!previous.sizes || (current.sizes && parseInt(current.sizes.split('x')[0]) > parseInt(previous.sizes.split('x')[0]))) {
			return current;
		}
		return previous;
	}, {})
  return formatItem(highestRes, 'Highest resolution')
}

if (url > 3 && isValidUrl(url)) {
  alfy.output([
    {
      title: 'Invalid URL',
      subtitle: 'Please enter a valid url'
    }
  ])
} else {
  const {icons} = await alfy.fetch('http://favicongrabber.com/api/grab/' + url);
  if (!icons || !icons.length) {
    alfy.output([
      {
        title: 'No icons found',
        subtitle: 'Please try a different url'
      }
    ])
  } else {
    const compareIcons = (a, b) => {
      if (!a.sizes) {
        return 1
      }
      if (!b.sizes) {
        return -1;
      }
      return parseInt(a.sizes.split('x')[0]) - parseInt(b.sizes.split('x')[0])
    }
    alfy.output(icons.map(formatItem).sort(compareIcons))
  }
}


// (async () => {
// 	try {
// 		const url = process.argv[2] || 'test.com';
// 		console.log('url', url);
// 		const res = await got('http://favicongrabber.com/api/grab/' + url, {json: true});
// 		if (res.body && res.body.icons) {
// 			console.log('res.body.icons', res.body.icons);
// 			const highestRes = res.body.icons.reduce((previous, current) => {
// 				if (!previous.sizes || (current.sizes && parseInt(current.sizes.split('x')[0]) > parseInt(previous.sizes.split('x')[0]))) {
// 					return current;
// 				}
// 				return previous;
// 			});
// 			console.log('highestRes', highestRes);
// 		}
// 	} catch (err) {
// 		console.log(err);
//         // Deal with the fact the chain failed
// 	}
// })();

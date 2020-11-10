// if($selection == "cssToObj") {
// 	out = $input.replace(/: ?/g, ": '")
// 		.replace(/;/g, "',")
// 		.replace(/-[^0-9]/g, function (v) {
// 			return v.charAt(1).toUpperCase()
// 		});
// 	console.log(out);
// 	$("#output").val(out);
// } else {
// 	out = $input
// 	console.log(out);
// 	$("#output").val(out);
// }

export function jsx2css(obj) {
	Object.keys(obj).forEach((k) => {
		if (typeof obj[k] === 'string') {
			obj[k] = obj[k].toLowerCase()
		}
	})
	return JSON.stringify(obj).replace(/: ?'/g, ": ")
		.replace(/,/g, ";")
		.replace(/"/g, '')
		.replace(/[a-z][A-Z]/g, function (v) {
			return v.charAt(0) + '-' + v.charAt(1).toLowerCase()
		}).replace(/#?[0-9]+%?/g, function (v) {
			if (!v.startsWith('#') && !v.endsWith('%')) return v + 'px'
			return v
		}).replace(/(#[0-9a-z]+)px/g, (v, s1) => {
			return s1
		}).slice(1, -1) + ';'
}
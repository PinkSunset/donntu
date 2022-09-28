const fetch = require('node-fetch');
const seed = require('../save-seed');
const sheetID = "1umMmfrt1Im1vNF2C5LC7B3YLbiVU5tooJIpMPYCKgjY";
const API_KEY = "AIzaSyAM8YvnuFe0Z7_WFbLk1Eq_UpNSHiCpi1Q";
const googleSheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}?fields=sheets.data.rowData.values.formattedValue&key=${API_KEY}`;

async function load() {
	try {
		let data = await (await fetch(googleSheetUrl)).json()
		data = data.sheets[0].data[0].rowData

		let dataFormated = {
			products: []
		}

		let i = 0
		data.forEach(item => {
			i += 1
			if(i === 1) return

			let row = []

			item.values.forEach(item => {
				row.push(item.formattedValue)
			})

			dataFormated.products.push({
				"code": row[0],
				"price": row[1],
				"oldPrice": row[2],
				"optPrice": row[3]
			})
		});

		seed(JSON.stringify(dataFormated), `${__dirname}/../../src/_data/api/all-api.json`);

		return dataFormated
	} catch(e) {
		console.log('Error :', e);
		return e
	}
}
load()


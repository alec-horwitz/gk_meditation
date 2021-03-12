const express = require('express')
// const multer = require('multer')
const bodyParser = require('body-parser')
const tesseract = require("node-tesseract-ocr")
const app = express()
const port = 3000

app.use(bodyParser.json());


// const Storage = multer.diskStorage({
//   destination(req, file, callback) {
//     callback(null, './images');
//   },
//   filename(req, file, callback) {
//     callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
//   },
// });

// const upload = multer({ storage: Storage });

runTesseract = async () => {
	const config = {
	  lang: "eng",
	  oem: 1,
	  psm: 3,
	}

	let result
	 
	await tesseract.recognize(`https://images.ctfassets.net/4efzc1v8z48a/4VolH59inrgi0Laxg7W0KP/6bab752e5872e369f04bcdc1f37be4c7/image3.jpg`, config)
	  .then(text => {
	    console.log("Result:", text)
	    result = text
	  })
	  .catch(error => {
	    console.log(error.message)
	    result = null
	  })
	//In the config object you can pass any OCR options. Also you can pass here any control parameters or use ready-made sets of config files (like hocr):

	// const result = await tesseract.recognize("testImage.png", {
	//   load_system_dawg: 0,
	//   tessedit_char_whitelist: "0123456789",
	//   presets: ["tsv"],
	// })
	// console.log("result: ", Object.keys(result))

	return result
}

app.post('/api/upload', (req, res) => {
    // console.log('File: ', req.files);
	console.log('Body: ', req.body);
    // res.send(`${await runTesseract()}`)
    res.status(200).json({
	    message: 'success!',
	  });
});

app.get('/', async (req, res) => {
  res.send(`${await runTesseract()}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
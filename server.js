const express = require('express')
const cors = require("cors");
const multer = require('multer')
const bodyParser = require('body-parser')
const tesseract = require("node-tesseract-ocr")
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


const Storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, './uploaded_images');
  },
  filename(req, file, callback) {
    callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: Storage });

runTesseract = async () => {
	const config = {
	  lang: "eng",
	  oem: 1,
	  psm: 3,
	}

	let result
	 
	await tesseract.recognize("testImage.png", config)
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

app.post('/api/upload', upload.any(), (req, res, next) => {
	console.log('typeof req: ', typeof req);
	console.log('req: ',Object.keys(req));
    console.log('files: ', req.files);
    console.log("file =>", req.file);
	console.log('body: ', req.body);
	console.log('params: ', req.params);
    // req.send(`${await runTesseract()}`)
    if (req.files || req.file) {
	    res.status(200).json({
			message: 'Success!',
		});
    } else {
		console.log('Insufficient data! Please upload a file!');
		const error = new Error('Insufficient data! Please upload a file!')
	    error.httpStatusCode = 400
	    return next(error)
    }
});

app.get('/', async (req, res) => {
  res.send(`${await runTesseract()}`)
})

app.listen(port, () => {
  console.log(`Tesseract node server listening at http://localhost:${port}`)
})
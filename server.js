const express = require('express')
const cors = require("cors");
var fs = require('fs');
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
    callback(null, './');
  },
  filename(req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: Storage });

// runTesseract = async (fileName) => {
// 	const config = 

// 	let result
	 
// 	await tesseract.recognize(fileName, {
// 	  lang: "eng",
// 	  oem: 1,
// 	  psm: 3,
// 	})
//   .then(text => {
//     console.log("Result:", text)
//     result = text
//   })
//   .catch(error => {
//     console.log(error.message)
//     result = null
//   })

// 	return result
// }

app.post('/api/upload', upload.any(), async (req, res, next) => {
	const fileName = req.files[0].originalname
  if (req.files) {
		await tesseract.recognize(fileName, {
		  lang: "eng",
		  oem: 1,
		  psm: 3,
		})
	  .then(text => {
	  	fs.unlink(fileName, (err) => {
			  if (err) throw err;
			  console.log(`${fileName} was deleted`);
			});
	    console.log("OCR OUTPUT: ", text)
	  	res.status(200).json({
				message: 'Success!',
				result: text
			});
	  })
	  .catch(error => {
	  	fs.unlink(fileName, (err) => {
			  if (err) throw err;
			  console.log(`${fileName} was deleted`);
			});
	    console.log("ERROR: ", error.message)
	  	res.status(200).json({
				message: 'Tesseract failed to recognize any text in the image provided.',
				result: null,
				error: error.message
			});
	    result = null
	  })
  } else {
	console.log('Insufficient data! Please upload a file!');
	const error = new Error('Insufficient data! Please upload a file!')
    error.httpStatusCode = 400
    return next(error)
  }
});

app.get('/', async (req, res) => {
  res.status(200).json({
  	message: 'Success!',
  })
})

app.listen(port, () => {
  console.log(`Tesseract node server listening at http://localhost:${port}`)
})
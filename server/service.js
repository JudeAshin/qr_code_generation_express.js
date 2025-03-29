const QRCode = require('qrcode');

exports.formatData = (data) => {
	const qrCodeText = `Product ID: ${data.id}, Price: $${data.price}`;
	return qrCodeText;
};

exports.generateQRCode = async (qrCodeText) => {
	const options = {
		errorCorrectionLevel: 'M',
		type: 'image/png',
		margin: 1
	};

	return QRCode.toBuffer(qrCodeText, options);
};

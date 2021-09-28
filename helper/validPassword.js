const checkPasswordValidity = ( password ) => {
	let errors = [];

	const isNonWhiteSpace = /^\S*$/;
	if ( !isNonWhiteSpace.test( password ) ) {
		errors.push( "Password tidak boleh mengandung spasi." );
	}

	const isContainsUppercase = /^(?=.*[A-Z]).*$/;
	if ( !isContainsUppercase.test( password ) ) {
		errors.push( "Password harus mengandung minimal 1 huruf besar." );
	}

	const isContainsLowercase = /^(?=.*[a-z]).*$/;
	if ( !isContainsLowercase.test( password ) ) {
		errors.push( "Password harus mengandung minimal 1 huruf kecil." );
	}

	const isContainsNumber = /^(?=.*[0-9]).*$/;
	if ( !isContainsNumber.test( password ) ) {
		errors.push( "Password harus mengandung minimal 1 angka." );
	}

	const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
	if ( !isContainsSymbol.test( password ) ) {
		errors.push( "Password harus mengandung minimal 1 karakter khusus." );
	}

	const isValidLength = /^.{6,}$/;
	if ( !isValidLength.test( password ) ) {
		errors.push( "Password minimal 6 karakter." );
	}

	return errors;
}

// console.log( checkPasswordValidity( '@' ) );

module.exports = {
	checkPasswordValidity
}
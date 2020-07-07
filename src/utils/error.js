export function pickFirstValidationErrorMessage(error = {}) {
	const errorDetails = error.details || [];
	const firstError = errorDetails.length > 0 ? errorDetails[0] : {};

	return firstError.message;
}

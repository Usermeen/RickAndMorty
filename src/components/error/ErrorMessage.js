import error from './img/error.png'
function ErrorMessage() {
	return (
		<>
			<p>Something goes wrong</p>
			<img src={error} alt="ErrorPng"></img>
		</>
	)
}

export default ErrorMessage;
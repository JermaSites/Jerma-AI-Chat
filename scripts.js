const userAction = async () => {
const response = await fetch('http://localhost:5000/api', {
	method: 'GET',
	headers: {
	  'Content-Type': 'application/json'
	}
  });
  const myJson = await response.json(); //extract JSON from the http response
  console.log(myJson);
};

userAction();
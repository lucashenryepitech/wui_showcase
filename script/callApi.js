async function newMessageApi(_firstName, _lastName, _mail, _country, _object, _message){
  axios.post(` http://185.223.73.69:8080/pushnewform ` ,{
    firstName: _firstName,
    lastName: _lastName,
    mail: _mail,
    country: _country,
    object: _object,
    message: _message,
  }, {
    headers: {
      'content-type': 'application/json',
    },
  },
  )
  .then(response => {
      console.log(response.data);
      return response.data;
  });
}

async function GetAllMessageApi(){
  axios.get(` http://185.223.73.69:8080/getallforms `)
  .then(response => {
      console.log(response.data);
      return response.data;
  });
}


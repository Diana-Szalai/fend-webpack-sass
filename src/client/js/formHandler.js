function handleSubmit(event) {
    event.preventDefault()
     
        let long;
        let lat;
       // let temperatureDescription = document.querySelector('.temperature-description');
       // let temperatureDegree = document.querySelector('.temperature-degree');
       // let locationTimezone= document.querySelector('.location-timezone');
        if(navigator.geolocation){
           navigator.geolocation.getCurrentPosition(position => {
               long = position.coords.longitude;
               lat = position.coords.latitude;
               let baseURL = 'http://api.openweathermap.org/data/2.5/weather?';
               let apiKey = '&APPID=84b379cb9ec28aaca002d6de5f4d7c07';
               const metric= `&units=metric`;
               const api= `${baseURL}lat=${lat}&lon=${long}${apiKey}${metric}`;
               //console.log(api)

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)
    console.log("::: Form Submitted :::")
               fetch(api)
                   .then(response => {
                       return response.json();
                   })
                   .then(data => {
                       document.getElementById('location-timezone').innerHTML = data.name;
                       document.getElementById('results').innerHTML =`${formText}`;
                       //document.getElementById('results').innerHTML = data.main.temp;
                       //console.log(data);
                       //const { temperature, summary } = data.currently;
                       //const temperature = data.main.temp;
                       //const description = data.weather[0].description;
                       //const countryName = data.sys.country;
                       //Set DOM Elements from the API
                       //temperatureDegree.textContent = temperature;
                       //temperatureDescription.textContent = description;
                       //locationTimezone.textContent = `${cityName} / ${countryName}`;
                       
                       });
                   });
           };
       

    //fetch('http://localhost:8081/test')
    //.then(res => {
    //    return res.json()
    //})
    //.then(function(data) {
    //    document.getElementById('results').innerHTML = data.message
    //})
}

export { handleSubmit }
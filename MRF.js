//a.Get all the countries from Asia continent /region using Filter function:
//fetch method:
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
    const asiaCountries = data.filter(country => country.region?.includes('Asia'));//include check the value is true (occured on the data) or flase(not ocuured on the data)
    console.log(asiaCountries);
  })
  .catch(error => console.error('Error fetching data:', error));
//xml method
var request=new XMLHttpRequest();
//console.log(request);
request.open("GET",'https://restcountries.com/v3.1/all');
request.send();
request.onload=function (){
  var countryData=JSON.parse(this.response);
  //console.log(countryData);
  const asia=countryData.filter((a)=>{
    if(a.region==='Asia'){
        return a.name;
    }
})
console.log(asia);}
//b.Get all the countries with a population of less than 2 lakhs using Filter function
//fetch method:
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
    const countriesWithLowPopulation = data.filter(country => country.population < 200000);
    console.log(countriesWithLowPopulation);
  })
.catch(error => console.error('Error fetching data:', error));
//xml method
var request=new XMLHttpRequest();
//console.log(request);
request.open("GET",'https://restcountries.com/v3.1/all');
request.send();
request.onload=function (){
var countryData=JSON.parse(this.response);
  //console.log(countryData);
  const popu=countryData.filter((element)=>{
    return element.population<200000;
})
console.log(popu);}
//c.Print the following details name, capital, flag, using forEach function
//fetch method:
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
      data.forEach(country => {
      console.log('Name:', country.name.common);
      console.log('Capital:', country.capital);
      console.log('Flag:', country.flags.png);
      console.log('-------------------');
    });
  })
  .catch(error => console.error('Error fetching data:', error));
//xml method
var request=new XMLHttpRequest();
//console.log(request);
request.open("GET",'https://restcountries.com/v3.1/all');
request.send();
request.onload=function (){
var countryData=JSON.parse(this.response);
  //console.log(countryData);
  countryData.forEach((element)=>{
  console.log(element.name,element.capital,element.flag);
})}
//d.Print the total population of countries using reduce function
//fetch method:
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const totalPopulation = data.reduce((accumulator, country) => accumulator + (country.population || 0), 0);
    console.log('Total Population:', totalPopulation);
  })
  .catch(error => console.error('Error fetching data:', error));
//xml method
var request=new XMLHttpRequest();
//console.log(request);
request.open("GET",'https://restcountries.com/v3.1/all');
request.send();
request.onload=function (){
var countryData=JSON.parse(this.response); 
  //console.log(countryData);
  const population=countryData.reduce((acc,element)=>{
  return acc+element.population;
},0)
console.log('Total Population:',population);}
//e.Print the country that uses US dollars as currency.
//fetch method
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
  const countriesWithUSD = data.filter(country => country.currencies && country.currencies.USD);
    console.log('Countries using US dollars:', countriesWithUSD.map(country => country.name.common));
  })
.catch(error => console.error('Error fetching data:', error));
//xml method
var request=new XMLHttpRequest();
//console.log(request);
request.open("GET",'https://restcountries.com/v3.1/all');
request.send();
request.onload=function (){
var countryData=JSON.parse(this.response);
console.log(countryData);
        for(i=0;i<countryData.length;i++){
            if(countryData[i].currencies && countryData[i].currencies.USD) {
              console.log("Name:", countryData[i].name.common, "==>", "Currency Code: USD");
            }
        }
    }
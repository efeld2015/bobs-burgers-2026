
//event listener to activate button
document.querySelector('.burgBtn').addEventListener('click', getFetch)



//function goes here
function getFetch(){
  let randomElement = Math.floor(Math.random() * 50)
 const url = ''
  //grab url value
  fetch('https://bobsburgers-api.herokuapp.com/burgerOfTheDay')
  .then(res => res.json()) //parse response as JSON
  .then(data => {
    console.log(data)
   document.querySelector('.burgerMenu').innerText = data[randomElement].name
    document.querySelector('p').innerText = `${data[randomElement].season}`
    document.querySelector('.epNum').innerText = `${data[randomElement].episode}`
    
  })
  .catch((err) => {
    console.log(`error ${err}`)
  });
}

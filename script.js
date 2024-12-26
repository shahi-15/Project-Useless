const factButton = document.getElementById('fact-button');
const factDisplay = document.getElementById('fact-display');
const jokeButton = document.getElementById('joke-button');
const jokeDisplay = document.getElementById('joke-display');

factButton.addEventListener('click',async()=>{
try{
    factDisplay.textContent = 'Loading...'; 
    const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
    const data = await response.json();
    factDisplay.textContent = data.text; 
  } 
catch(error){
    factDisplay.textContent ='Oops! Something went wrong. Try again.';
    console.error('Error fetching fact:',error);
  }
});

jokeButton.addEventListener('click',async()=>{
try{
    jokeDisplay.textContent = 'Loading...'; 
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    jokeDisplay.textContent = `${data.setup} - ${data.punchline}`;
  } 
catch(error){
    jokeDisplay.textContent ='Oops! Something went wrong. Try again.';
    console.error('Error fetching joke:',error);
  }
});
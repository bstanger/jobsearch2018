// Write a function that takes in a sentence, and returns the word with the most characters.
// If it's a tie between two words, return the first one.
// e.g. longestWord('what is the songest longest word?') --> 'longest'

var longestWord = function(sentence){
  var longestWord = '';
  var sentArray = sentence.split(' ');
  sentArray.forEach(function(word){
    if(word.length > longestWord.length){
      longestWord = word;
    }
  })
  return longestWord;
}

console.log(longestWord('what is the songest longest word?'));



// Callbacks
// 1. What is callback?
// 2. Write out example of callback.

fs.readFile('./data.json', (err, result) => {
  if(err){
    console.log(err);
  } else {
    console.log(result);
  }
})


// Promises
// 1. What is a promise?
// 2. Write out example of promise based on callback function.


readFile()
	.then(function(result){
  	return result + 1
	.then(() => {

	}).catch(function(err){
    console.log(err);
  })



// Async/Await
// 1. What is async/await?
// 2. Write out example...








// Throttle or progress bar...

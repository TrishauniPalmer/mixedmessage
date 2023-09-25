// Arrays of random messages to display
const greetings = ['Hello', 'Hi', 'How are you doing?', 'How is the day going?'];
const comments = ['No', 'Yes, that will be all', 'The show is about to start',
'They come when it is dark', 'The walls can talk'];
const punctuations = ['?', '.', ',', '!'];
const subjects = ['Space', 'Main Coon', 'Loof of bread'];


//Function to generate random element from an array
function getRandomElement(arr) {
        const randomIndex =Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
}

// To generate mixed messages
function generateMixedMessage(){
const greeting = getRandomElement(greetings);
const comment = getRandomElement(comments);
const punctuation = getRandomElement(punctuations);
const subject = getRandomElement(subjects);

const mixedMessage = `${greeting}, ${comment}. How is ${subject}?`;
return mixedMessage;
}

// Display mixed message
const mixedMessage = generateMixedMessage();
console.log(mixedMessage);

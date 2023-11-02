// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }

//     return gifts;
// }

// wrapGifts(gifts);

//for loop

// 1. Create the main function. (In index.js, build a function named writeCards() that accepts two arguments: an array of string names, and an event name.)
function writeCards(namesArray, eventName) {

    // 2. Initialize an empty array to store messages. (create a new, empty array to hold the messages;)
    let messagesArray = [];

    // 3. Use a for loop to iterate through the provided names array. (Create a for loop with a counter that starts at 0 and increments at the end of each loop. The for loop should stop once it has iterated over the length of the array.iterate through the input array and, inside the loop, build out the 'thank you' message for each name using string interpolation, then add that message to the new array you created;)
    for (let i = 0; i < namesArray.length; i++) {
        // 4. Construct the thank you message using string interpolation.
        let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
        // 5. Push the constructed message into the messages array.
        messagesArray.push(message);
    }

    // 6. Return the array containing all the messages.(after the loop finishes and all of the messages have been added to the new array, return the new array.)
    return messagesArray;

}

// 1. Define the countDown function.
// It takes a starting number as its parameter.
function countDown(countStart) {

    // 2. Start a while loop. 
    // The loop continues as long as the provided starting number is non-negative (greater than or equal to zero).
    while (countStart >= 0) {

        // 3. Inside the loop, log the current number to the console.
        console.log(countStart);

        // 4. After logging, decrement the number.
        // This ensures the loop progresses towards its termination condition (number reaching below 0).
        countStart--;
    }
}


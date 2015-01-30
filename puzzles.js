/*
  First, do problems 1-5 in javascript only, don't worry about the HTML page at all!
  After you complete each function, write some lines that console.log your results, 
  so that you can test that it works!
*/

// 1. Write a function called "first" which takes in an array and returns it's first element.


// When you've written your function above, you can uncomment these lines to test it:
// console.log("Testing first:");
// console.log(first([1, 2, 3])); // Should print: 1
// console.log(first([3, 2, 1])); // Should print: 3




// 2. Write a function called "last" which takes in an array and returns it's last element.


// When you've written your function above, you can uncomment these lines to test it:
// console.log("Testing last:");
// console.log(last([1, 2, 3])); // Should print: 3
// console.log(last([3, 2, 1])); // Should print: 1




// 3. Write a function called "longerString" which takes in two arguments, both of them strings,
//    and returns the string which is longest. If they are the same length, you can return either.


// When you've written your function above, you can uncomment these lines to test it:
// console.log("Testing longerString:");
// console.log(longerString('charlie', 'bob')); // Should print 'charlie'
// console.log(longerString('kim', 'michelle')); // Should print 'michelle'





// 4. Write a function called "contains" which takes in two arguments, an array and a string.
//    The function should return true if the element is in the array, and false otherwise.



// Now, write your own code to test your function. Here are some arguments to consider:
// Pass in the array ['bill', 'bob', 'benjamin'] and the string 'bob'. It should return true
// Try passing in ['kim', 'kristina', 'kristy'] and the string 'kyle'. It should return false





// 5. Write a function called "longestString" which takes one arguemnt: an array of strings.
//    The function should return the longest string inside of the array.
//    I would advise you to do this one on paper first, it's tricky!


// Now, write your own code to test your function. Here are some arguments to consider:
// Pass in the array ['bill', 'bob', 'benjamin']. It should return 'benjamin'.
// Try passing in ['kim', 'kristina', 'kristy']. It should return 'kristina'.








////////////////////////////////////////////
// NEXT SECTION
////////////////////////////////////////////


// Ready? This is about to get cray. Take a look at the variable we've declared below:

var puzzles = [
  {
    number: 6, 
    prompt: "6. Put me on the page!"
  },
  {
    number: 7, 
    prompt: '7. Turn this text green! You already know how to "select" this element with javascript. Instead of setting the innerHTML, you\'ll need to set its style.color.'
  },

  { 
    number: 8, 
    prompt: "8. Put the string 'Found it' into the div with class 'whereisit'."
  },
  { 
    number: 9, 
    prompt: "9. Find every element with class 'sneakysneaky'. Loop through them and set their CSS 'display' property to 'block'."
  },
  { 
    number: 10, 
    prompt: "10. Give the sneaky paragraph you just revealed above a background color of blue, and change the text to white. Heck, give it some padding, too. The paragraph itself doesn't have a unique ID, but the small tag inside of it does! Try \"selecting\" the small tag, and then look up \"parentNode\"."
  },
  { 
    number: 11, 
    prompt: "11. Take a look at the HTML for the buttons below. What is onClick? What happens when you click them? (Look in your console). Now take a look at the bottom of puzzles.js. See those functions? Making any sense? Rewrite those three functions to change the font size of this text to 30px, 14px, and 5px, respectively."
  },
  { 
    number: 12, 
    prompt: "12. Ok. Last one! There's a button here. But it doesn't do anything... Let's hook it up to our \"done()\" function with an onClick attribute. You are officially allowed to edit the HTML for this one!"
  }
];

// Ok, what is this puzzles thing? What is it's data type? What is the data type of each element in puzzles?

/*
   Lesson time:
   In javascript, you can write code which actually modifies the HTML and CSS of the page. 
   There are lots of ways to do this, so we're going to start with just one.
   Take a look at the HTML page, and find the p with the id 'problem_number_6'.
   Now, copy and paste this line into your console:

   document.getElementById('problem_number_6').innerHTML = 'Whatever I want it to be.';

   ... whoa. Ok, if that made any sense (or it didn't), let's keep solving problems.
*/

// Caveat: For annoying reasons, we must do the rest of our problems inside of this function. 
// Don't worry, it's not worth worrying about just yet! Everything is chill.
document.addEventListener("DOMContentLoaded", function() { 

  // Everything is chill... We're just in here now. Continue on...


  // 6. Let's put this puzzle on the page!

  // Step 1: First write (on paper) the line of code which returns the prompt for puzzle 6
  // (This is just like the paper exercise we did earlier, but with the puzzles variable).
  // Type your line into the console to make sure it returns "Put me on the page!"

  // Step 2: copy the line from above which actually changes the HTML, but instead of 
  // setting it to 'Whatever I want it to be.', how can you use your code from Step 1
  // to set it to "Put me on the page!"? 

  // Put it here:




  // Have you got Puzzle 6 appearing on the page? Nice job!

  // Step 3: Put the rest of the puzzles onto the page! It should take one line of code per puzzle.
  // Put them here:




  /*
    Ok, when you've got all of the problems appearing on the page, start attacking them!
    We haven't provided too much guidance on these ones, so think about how to 
    formulate your questions, and then Google them!

    Googling tips:
    1. Always start with the language you're working in (eg. "javascript how to change the color of text")
    2. Stack Overflow is better than everything else, *IF* you can find someone with your exact question.
       2a. READ THE QUESTIONS on Stack Overflow. You need to know if you're having the same issue!
       2b. Answers on SO are organized in order of "correctness".
    3. For snippets of code and one-liners, you can often try them by just copy-pasting into the console.
    4. Variables will always have different names online than your variables, make sure to replace them!
  */


  // Put the rest of your code below!







});

function makeItBig() {
  console.log('someone called makeItBig');
}

function makeItLittle() {
  console.log('someone called makeItLittle');
}

function makeItTiny() {
  console.log('someone called makeItTiny');
}






function done() {
  document.getElementsByClassName('container')[0].innerHTML = '<div class="congrats"> You\'re the best!</div>';
  window.open("http://youtu.be/WgcovIu3k9o?t=1m25s")
}


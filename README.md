
Deployed site : https://celebrated-hotteok-a3b3bb.netlify.app


I decided to build the game Tenzies where the player has 10 dice and the goal is that all dice have the same number.

To be honest it was really fun and I learnt a lot about React building this game.

First of all I created a function which returns an object with three properties.
A value which holds a random number
isHeld property which initializes with false
and an id which I initialized with the nanoid package.

The next function creates an empty array. 
Then I used a for loop to push the previous function (which creates an object) to this array.

Now I have an Array of 10 Objects with the desired properties when I call this function.

So I could use state to create my dice and set the value to the previous function.

After creating my die component for the game I mapped over the dice state and created 10 die elements with the props I needed.

Holding the Dice was quite a challenge! In the end I chose to create a function holdDice that uses a parameter id.
I could create a prop with the id so I could target exactly the one dice that was clicked.

I mapped over the dice and if id of the dice object and the id of the clicked element was the same then I was able
to only flip the value of isHeld and dont change the rest of the object.
If the id's dont match then just return the object as it is.

Then I created the rollDice function. I mapped over the dice state again and chicked if the isHeld property is true
if that's the case then return the object as it is but if not generate a new die and return that.

Thanks to that everytime a dice gets clicked the isHeld property is flipped to true and doesnt get replaced when clicking the 
roll Button. Only the objects that have isHeld set to false will be replaced by a new object with a random number.

To check if the player has all dices held and all that all dices have the same value I used an useEffect function
which triggers everytime the dice state changes.
In that callback function I checked if all objects in the dice array have the isHeld property set to true and
if all objects have the same value.
For both of that I used the every method.
For isHeld quite simple just checking over the array if the property is True
Checking if all the values are the same took quite some time but in the end first I created a variable which holds
the value of the first object in the array.
Then again with the every method I checked if the value of the first object is the same as all the other values.

If both cases return true means the user has won.
Initially I created a state calles tenzies which is set to false but if both cases return true i set the state to true
Then I conditionally rendered if tenzies is true ,a new element gets rendered which displays the winning message.
I also used a condition to change the button text. If tenzies is false then "Roll" and if it's true "New Game" and I installed
a confetti packages which only renders if tenzies is true.


After that I updated my rollDice function so when the button gets clicked after you have won tenzies is set to false and
it generates all new dice for the dice state again.(just like in the start)

Now I had a working game and it felt good but I still wanted to accomplish a few things.
I had the values of the dice displayed as numbers and I wanted it to look like real dice with the dots.
I also wanted to track how many rolls the user needed for winning and how much time he needs for the game.

To be honest I thought a lot about how can i can make it possible to display the value as dots.
In the end I chose to make a function with if statements that check which value the dice has.
Since every dot in my solution was his own span element i needed to create html markup for each value.
Thankfully I found this great tutorial https://betterprogramming.pub/creating-dice-in-flexbox-in-css-a02a5d85e516
to show me how to create the dots on the dice and position them acccordingly. (flexbox).

To track how many rolls the user needs before ending the game I created a state called count which adds one to its value
everytime the rollDice function gets called.

Tracking the time was a bit more tricky. I set up two states called startGame and endGame with empty strings.
When the page gets load the startGame state initialites with the new Date() method to the current time.
The endGame state gets initialized with the new Date() method when the player wins.
Then i subtracted the endGame state with the startGame state and voilà i had my time.

To display the time in seconds i divided the startGame state and endGame state with 1000

Now I could display the rolls and the time in the conditionally rendered winning element. 




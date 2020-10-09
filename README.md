# PasswordGenerator
The objective of this assignment was to create a password generator in JavaScript using an existing html
To create the generator I started by declaring the html variables I would need to use when creating the event listener, and 
  to pass the random text into the generator box
I then created variables for the different types of characters that would be used in the password generation function, including upper case,
  lowercase, numbers, and special characters.
I created a start function to signal when the user presses the generate button, with multiple prompts for the user to determine length, and type
  of characters desired in the random password.
To generate the password I used the confirm variables from the start function in a series of 'if' statements to generate a character string
  using the inputs defined by the user. I also used Math.random, .toString(), and .slice() to convert the characters
Finally, I added an event listener so when the user clicks on the generate button the functions start and the application begins

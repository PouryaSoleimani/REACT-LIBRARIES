<!-- ? THEME TOGGLE TUTORIAL -->
1 - FIRST we import {styled} and {ThemeProvider} from styled-components

2 - SECOND we wrap the whole component with the <ThemeProvider></ThemeProvider> Component 

3 - THIRD we define two different themes : `DARKTHEME` and `LIGHTTHEME` with different styles such as BODY , TEXT , HEADER , PRIMARY , SECONDARY , ...

4 - FOURTH we make our own styled Components Like : Wrapper , Title , Text , Button , ...

5 - FIFTH we make two Different buttons for DARK and LIGHT theme with 2 different styles

6 - SIXTH we save our theme in a STATE using {useState} --> `const [theme , setTheme] = useState(LightTheme)`

7 - SEVENTH we make a function to toggle the themes by using {setTheme} --> `function themeToggler (inputTheme) {setTheme (inputTheme)}`

8 - EIGHTH we pass the {themeToggler} function to our DARK AND LIGHT THEME BUTTONS -> for the light theme in gets the word (LightTheme) as input and for the dark theme it gets (DarkTheme) as input

9 - NINETH now we can switch between themes by using the function `themeToggler` and the button , and every button set the theme to dark or light

10 - TENTH dont forget to pass the state `theme` to the <ThemeProvider> as a value for theme Attribute --> <ThemeProvider theme={theme}></ThemeProvider>
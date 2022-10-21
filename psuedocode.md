# Components
    - input
        - will hold the input box and btn
    - toDoItem
        - has the complete function
        - return the individual item using a template
        - has a delete function 
    - toDoList
        - holds all of the items that are created (will probably style in here)
    - buttons
        - will control the items.
        - when the button is clicked it will setPage to a string
        - it will check if that string matches the string its 
        checking it will return a filtered list of the items
        - then i will map through it and return it into state.
        
# Functions
    - Complete()

        - will change the active value of the obj to completed (example; completed: true)
        - will also make the item crossed out by grabbing the id (don't know if you can do that in react)
    - Submit()

        - make a variable that has the value from the input box
        - make a variable that sets the activeStatus to true
        - make a variable that sets an id to useId (changed using date.now() )
        - sets state to an obj

    - DeleteItem()

# Objects
    - the only objects i would have are possibly the pushed up ones unless i used a template for them to do
# Process
    - once the elements are created when the person types an input in and presses the button.

    - on button press it will then use set to the obj and have the input value, if its active, and id pass as key value pairs inside the obj.

    - once the object is added using a submit function. then create the item by mapping through the list of obj in state and then return 
# Questions
    - how do we push an obj into an array??? (fixed used spread with brackets)
    - how do we get a unique id??? (FIXED used date.now always will be a unique id since it always counts up time)
# Junk Drawer


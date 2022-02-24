/*

* Steps to move data to it own reducer
! Step 1 : Create the documents
* shop.reducer.js
* shop.selector.js

!  Step 2
* Inside shop.reducer.js 
* Import the data from data file
* Create an object with that data 
* Create reducer function that takes
* the state and by default 
* return the data with a switch statement 

!  Step 3 inside: root.reducer.js
* We need to import the shop reducer  
* inside the function "combine reducers"
* agregar nuestro SHOP reducercp p p

!  Step 4 Inside shopSelector 
* We need to import reselect 
* and create the selector with
* create selector function 
 
!  Step 5 Insider the component where we need the data
* import the selector, connect and createStructuredSelector
* En lugar de tomar la data directamente del componente
* ahora podemos acceder desde el store de Redux
* and map it inside mapStateToProps
*
*/




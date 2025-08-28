## 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`

- **`getElementById("id")`**
  - Selects **one element** with a specific `id`.
  - Always returns a single element (or `null` if not found).

- **`getElementsByClassName("class")`**
  - Selects **all elements** with a given class.
  - Returns an **HTMLCollection** (live list) which is not an array but can be looped.

- **`querySelector("selector")`**
  - Selects the **first matching element** based on a CSS selector (`#id`, `.class`, `div p`).
  - More flexible than `getElementById`.

- **`querySelectorAll("selector")`**
  - Selects **all matching elements** based on a CSS selector.
  - Returns a **NodeList** (can use `forEach`).




  ## 2. How do you create and insert a new element into the DOM?

Steps:
1. Create a new element:
   ```javascript
   let newDiv = document.createElement("div");
   newDiv.textContent = "Hello, I am a new div!";
   document.body.appendChild(newDiv);



## 3. What is Event Bubbling and how does it work?

Event bubbling means when an event occurs on an element, it first runs the handlers on that element, and then it bubbles up to its parent elements, all the way up to the document object.


## 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique where you attach a single event listener to a parent element to manage events on its child elements.


## 5. Difference between preventDefault() and stopPropagation()

preventDefault()

Stops the browser’s default action for the event.

stopPropagation()

Stops the event from bubbling up (or capturing down) the DOM tree.
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
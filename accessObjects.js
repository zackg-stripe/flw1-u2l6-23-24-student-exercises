const pupInfo = {
pupName: "Buddy",
age: 1,
favFood: "popcorn",
favActivity: "fetch"
}

// 1. When we click the button, it doesn't show our info! 
//  - Using dot notation, include the appropriate values from our object. 
//  - We're inserting JS into our HTML using string interpolation.
//  - Remeber to wrap the values in a $ and curly braces! 

document.querySelector("button").addEventListener("click", () => {
    document.querySelector(".info").innerHTML = 
    `<p>This is (insert name)! 
    They are (insert age) months old and love to eat (insert favorite food). 
    Their favorite thing to do is (insert favorite activity). 
    They're perfect.</p>`
  })
  
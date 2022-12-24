let products = {
    data: [
      {
        productName: "Engineering Mechanics",
        category: "Minors-EM",
        
        image: "em.jpeg",
        url: "https://drive.google.com/file/d/1j9Gah5tP742xnt4tleOAGOAexHDfAqS0/view?usp=share_link",
      },
      {
        productName: "Programming with Python",
        category: "Minors-Python",
        
        image: "python.jpeg",
        url: "https://drive.google.com/file/d/1j4b3Y5r2h5wyRVY3Q3AWhiQeC4mPGRJZ/view?usp=share_link",
      },

      {
        productName: "Communication Skills",
        category: "CS-Minors",
        
        image: "cs.jpeg",
        url: "https://drive.google.com/file/d/1jftU6FYG7Zbk97fWMgGyeiy5d8N5OUZX/view?usp=share_link",
      },
      {
        productName: "BEE",
        category: "BEE-Minors",
        url: "https://drive.google.com/file/d/1j7WqBDNmG6-H9FVADvBjq0KFeg5v_bXu/view?usp=share_link",
        image: "bee.jpeg",
      },


      
      {
        productName: "Computer Organization & Architecture",
        category: "COA-Minors",
        url: "https://drive.google.com/file/d/1jXduImfps7BFqou9O9aJCHwymneZ77OK/view?usp=share_link",
        image: "coa.jpeg",
      },
      {
        productName: "Applied Maths-I",
        category: "Minors-Maths",
       url:"https://drive.google.com/file/d/1jSIes0lfJ9LqUT6isgqK1AAOlqlFWKF7/view?usp=share_link",
        image: "maths.jpeg",
      },
      {
        productName: "Applied Maths(AI)",
        category: "Minors-Maths",
       url:"https://drive.google.com/file/d/1jO3rLAarmcQ3pWN5O3VGozi-blVy5kO5/view?usp=share_link",
        image: "maths.jpeg",
      },
      {
        productName: "Applied Physics(AI)",
        category: "Physics-Minors",
       url:"https://drive.google.com/file/d/1jQMPRmTAUcQWy5ANzMbpjfaCO3emEJfP/view?usp=share_link",
        image: "physicscore.jpeg",
      },
      {
        productName: "Applied Chemistry",
        url:"https://drive.google.com/file/d/1j9pEK-SNEJnpnFYFcc2JR8oO1yXs-8pN/view?usp=share_link",
        category:"Chem-Minors",
        image:"chem.jpeg",
      },
      {
        productName: "Applied Physics",
        category: "Physics-Minors",
        url:"https://drive.google.com/file/d/1jRvhIEqJpoAWeP4slxgGjPJxxtS-WP1t/view?usp=share_link",
        image: "physics.jpeg",
      },
      {
        productName: "Intelligent Systems",
        category: "IS-Minors",
       url:"https://drive.google.com/file/d/1jfQs-pxsCTGdP4PWHWuCfjVtcSsqXDs1/view?usp=share_link",
        image: "is.jpeg",
      },
      {
        productName: "Analog Electronics",
        category: "AE-Minors",
       url:"https://drive.google.com/file/d/1j830lxT9xo6KlTUPPPO54iuvlfOqlnLW/view?usp=share_link",
        image: "ae.jpeg",
      },
      {
        productName: "Programming in C",
        category: "Minors-C",
        url:"https://drive.google.com/file/d/1jPP72bGRjk5nK_qBkHk89xg62V19nnWG/view?usp=share_link",
        image: "c.png",
      },
      
      
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
   
    
    var a = document.createElement('a'); 
                  
                // Create the text node for anchor element.
                var link = document.createTextNode(i.category);
                  
                // Append the text node to anchor element.
                a.appendChild(link); 
                  
                // Set the title.
                a.title = i.category; 
                  
                // Set the href property.
                a.href = i.url; 
                  
                // Append the anchor element to the body.
                container.appendChild(a);
    
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };
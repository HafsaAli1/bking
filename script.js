document.addEventListener("DOMContentLoaded", function () {
    
  
// Image data 
const imageData = [
        { imageUrl: "T1.webp", info: "YourBurgerKing Earn points and get rewarded with every order on the BK App.", buttonLabel: "Get rewarded" },
        
      { imageUrl: "T2.webp", info: "BK® Delivers, powered by Deliveroo®  Get your flame-grilled favourites straight to your door today!", buttonLabel: "Order now" },
        
      { imageUrl: "T3.webp", info: "Peppercorn Gourmet Kings  150g of Aberdeen Angus or Crispy Chicken with a classic Peppercorn mayo", buttonLabel: "Discover the range" },
        
      { imageUrl: "T4.webp", info: "NEW Doritos Tangy Cheese Chicken Fries  Chicken Fries, but make it Tangy. Get your hands on this tasty collaboration!", buttonLabel: "Order now" }
    ];
  


// Image grid container
const imageGrid = document.getElementById("imageGrid");

  
// Loop through image data and create image containers with information boxes
imageData.forEach(function (data, index) {
        
      
// Image container
const imageContainer = document.createElement("div");
        

// Image element
const img = document.createElement("img");
img.src = data.imageUrl;

        
// Unique ID for each image
img.id = "image" + (index + 1);
img.style.position = "relative";
img.style.width = "480px";
img.style.height = "250px";
img.style.borderRadius = "10px";


// Create the information box
const infoBox = document.createElement("div");
infoBox.className = "infoBox";
infoBox.style.position = "absolute";
infoBox.style.backgroundColor = "white";
infoBox.style.padding = "10px";
infoBox.style.width = "462px";
infoBox.style.height = "70px";
infoBox.style.borderBottomLeftRadius = "10px"
infoBox.style.borderBottomRightRadius = "10px";
infoBox.style.color = "#502314";
        

// Unique ID for each info box
infoBox.id = "infoBox" + (index + 1);

infoBox.textContent = data.info;

      
// Create the button
const button = document.createElement("button");
button.textContent = data.buttonLabel;

      
// Unique ID for each button
button.id = "button" + (index + 1);
button.style.borderRadius = "20px";
button.style.padding = "10px 10px";
button.style.border = "1px solid red";
button.style.fontFamily = "Flame Sans";
button.style.fontSize = "18px";
button.style.fontWeight = "bold";


// Append the button to the info box
infoBox.appendChild(button);

        
// Append the image and info box to the image container
imageContainer.appendChild(img);
imageContainer.appendChild(infoBox);

        
// Append the image container to the image grid
imageGrid.appendChild(imageContainer);
    


// To create Phone Section
if (!document.getElementById("phoneSection")) {
const phoneSection = document.createElement("div");

// ID for phone section
phoneSection.id = "phoneSection";

//Styling for new section
phoneSection.style.backgroundColor = "#efe1cc";
phoneSection.style.position = "relative";
phoneSection.style.top = "425px";
phoneSection.style.right = "10px";
phoneSection.style.width = "1218px";
phoneSection.style.height = "440px";
phoneSection.style.color = "#502314";
phoneSection.style.fontFamily = "sans-serif";
phoneSection.style.fontSize = "11px";
phoneSection.style.fontWeight = "bold";

  
// Content new section
phoneSection.innerHTML = "<h2 id='h2'>Save £££</h2><h3 id ='h3'>With offers on</h3><h4 id='h4'>demand</h4>" +
"<p id='paragraph1'>Apple and the Apple logo are trademarks of Apple Inc., registered in the</p>" +
    "<p id='paragraph2'>U.S. and other countries. App Store is a service mark of Apple Inc. Google</p>" + "<p id='paragraph3'>Play is a trademark of Google Inc. Terms apply.</p>";



// To insert image of phone
const phoneImage = document.createElement("img");
phoneImage.src = "phoneSS.png";
phoneImage.style.position = "relative";
phoneImage.style.bottom = "511px";
phoneImage.style.left = "400px";
phoneImage.style.width = "370px";
phoneImage.style.height = "500px";


// Append phone image to phone section
phoneSection.appendChild(phoneImage);

  
// Append the new section to the body of the document
document.body.appendChild(phoneSection);
  }


// To create Footer
  if (!document.getElementById("footer")) {
    const footer = document.createElement("div");

// ID for phone footer
footer.id = "footer";

//Styling for new section
footer.style.backgroundColor = "#2b0200";
footer.style.position = "relative";
footer.style.top = "380px";
footer.style.right = "10px";
footer.style.width = "1218px";
footer.style.height = "520px";
footer.style.color = "#f5ebdc";
footer.style.fontFamily = "sans-serif";
footer.style.fontSize = "11px";
footer.style.fontWeight = "bold";


 // Content for footer
footer.innerHTML = "<h5 id='h5'>BK® INFO</h5>" + "<h6 id='h6'>BK AND YOU</h6>" + "<h7 id='h7'>BURGER KING</H7>";
    



// Create an unordered list
var list = document.createElement("ul");
    
// Add list items to the unordered list
var listItems = ["About BK", "FAQs", "Policies", "Get in touch", "Terms & Conditions", "Guest Trac", "Trademarks"];
listItems.forEach(function(itemText) {
var listItem = document.createElement("li");
listItem.textContent = itemText;
      
list.style.position = "relative";
list.style.left = "62px";
list.style.bottom = "50px";
list.style.fontSize = "13px";
list.style.color = "#b6a391";
list.style.listStyleType = "none";

      
list.appendChild(listItem);
    });

// Append the unordered list to the section
footer.appendChild(list);


  

// Create another unordered list
var list2 = document.createElement("ul");
    
// Add list items to the unordered list
var listItems2 = ["Careers", "Privacy Policy", "Modern Slavery Statement", "Tax Strategy"];
listItems2.forEach(function(itemText) {
var listItem2 = document.createElement("li");
listItem2.textContent = itemText;

list2.style.position = "relative";
list2.style.left = "562px";
list2.style.bottom = "170px";
list2.style.fontSize = "13px";
list2.style.color = "#b6a391";
list2.style.listStyleType = "none";

list2.appendChild(listItem2);
  });

// Append the unordered list to the section
footer.appendChild(list2);
    


    
// Create a new paragraph for footer
const paragraph = document.createElement("p");

// ID for paragraph
paragraph.id = "paragraph";

// Contents of paragraph
paragraph.innerHTML = "TM & Copyright 2021 Burger King Corporation. All Rights Reserved.";

paragraph.style.color = "#b6a391";
paragraph.style.position = "relative";
paragraph.style.left = "100px";
paragraph.style.fontSize = "10px";

// Append the paragraph to the footer
footer.appendChild(paragraph);




// <hr> element
const hr = document.createElement("hr");
  
// Append the <hr> element to the footer
hr.id = "hr";
    
footer.appendChild(hr);

hr.style.width = "1010px";
hr.style.color = "#efe1cc";
hr.style.position = "relative";
hr.style.bottom = "100px";




// <hr> element
const hr2 = document.createElement("hr");

// Append the <hr> element to the footer
hr2.id = "hr2";

footer.appendChild(hr2);

hr2.style.width = "1010px";
hr2.style.color = "#efe1cc";
hr2.style.position = "relative";
hr2.style.top = "40px";

    

// Append the footer to the body of the document
document.body.appendChild(footer);
  }







  
});
});




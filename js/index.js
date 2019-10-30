const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// NAV
// let nav = document.querySelector("nav");
// document.querySelector('nav').style.color = 'green';

//Anchors
let Links = document.getElementsByTagName("a");
Links[0].textContent = siteContent.nav["nav-item-1"];
Links[1].textContent = siteContent.nav["nav-item-2"];
Links[2].textContent = siteContent.nav["nav-item-3"];
Links[3].textContent = siteContent.nav["nav-item-4"];
Links[4].textContent = siteContent.nav["nav-item-5"];
Links[5].textContent = siteContent.nav["nav-item-6"];
console.log(Links);

// DOM IS AWESOME
let textCta = document.getElementsByClassName("cta-text");
document.querySelector('h1').textContent = siteContent.cta["h1"];
document.querySelector('button').textContent = siteContent.cta["button"];
console.log(textCta);

let imgCta = document.getElementById("cta-img");
imgCta.setAttribute("src", siteContent["cta"]["img-src"]);
console.log(imgCta);


// MIDDLE SECTION 
let textContent = document.getElementsByClassName("main-content");
document.querySelector('h4').textContent = siteContent.cta["h4"];

let imgMid = document.getElementById("middle-img");
imgMid.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
console.log(imgMid);

//Change Nav to Green
const multipleSelections = document.querySelectorAll('.container nav a');
[].forEach.call(multipleSelections, (e) => {
  e.style.color = 'green';
});


//Content
const ctaText2 = document.querySelector("cta-text, h1");
const ctaButton = document.querySelector("cta-text, button");
ctaText2.textContent = siteContent["cta"]["h1"];
ctaButton.textContent = siteContent["cta"]["button"];

const mainFour = document.querySelectorAll("h4");

mainFour[0].textContent = siteContent["main-content"]["features-h4"];
mainFour[1].textContent = siteContent["main-content"]["about-h4"];
mainFour[2].textContent = siteContent["main-content"]["services-h4"];
mainFour[3].textContent = siteContent["main-content"]["product-h4"];
mainFour[4].textContent = siteContent["main-content"]["vision-h4"];
mainFour[5].textContent = siteContent["main-content"]["contact-h4"];

const mainCont = document.querySelectorAll("p");
mainCont[0].textContent = siteContent["main-content"]["features-content"];
mainCont[1].textContent = siteContent["main-content"]["about-content"];
mainCont[2].textContent = siteContent["main-content"]["services-content"];
mainCont[3].textContent = siteContent["main-content"]["product-content"];
mainCont[4].textContent = siteContent["main-content"]["vision-content"];
mainCont[5].textContent = siteContent["contact"]["address"];
mainCont[6].textContent = siteContent["contact"]["phone"];
mainCont[7].textContent = siteContent["contact"]["email"];
mainCont[8].textContent = siteContent["footer"]["copyright"];

//preppend
const newContent =
document.createElement("div");
console.log(newContent)
newContent.textContent = "Blog";
const secondaryContent = document.querySelector('nav');
console.log(secondaryContent)
secondaryContent.prepend(newContent);

//Append
const newContent2 =
document.createElement("div");
console.log(newContent2)
newContent2.textContent = "Home";
const secondaryContent2 = document.querySelector('nav');
secondaryContent2.append(newContent2);
document.querySelector('nav').style.color = 'green';

//Examples that don't work on project
var parent = document.createElement("div");
parent.append("Some text");
parent.prepend("Headline: ");

console.log(parent.textContent);

var parent = document.createElement("div");
var p = document.createElement("p");
parent.prepend("Some text", p);

console.log(parent.childNodes); 

//DOM IS AWESOME TO RESIZE
const title = 
document.querySelector(".cta-text h1");
title.textContent = siteContent["cta"]["h1"];

document.getElementById('domHeading').innerHTML =
"DOM" + "<br>" + "Is" + "<br>" + "Awesome";

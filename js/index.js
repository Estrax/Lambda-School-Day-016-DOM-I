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
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// navbar
let nav = document.getElementsByTagName('nav')[0];

let nav_items = nav.querySelectorAll("a");
nav_items.forEach((elem, id) => elem.textContent = siteContent["nav"][`nav-item-${id}`]);

// add two elements to navbar
let first_added = document.createElement("a");
first_added.textContent = "First Added";
nav.appendChild(first_added);

let second_added = document.createElement("a");
second_added.textContent = "Second Added";
nav.prepend(second_added);

// nav - color green [task 4]
nav_items.forEach(elem => elem.style.color = "green");

// cta
let cta = document.querySelector(".cta");
let cta_h1_content = siteContent["cta"]["h1"].split(" ");
cta_h1_content.splice(1, 0, "<br>");
cta_h1_content.splice(3, 0, "<br>");

let cta_h1 = cta.getElementsByTagName("h1")[0].innerHTML = cta_h1_content.join(" ");

let cta_button = cta.getElementsByTagName("button")[0].textContent = siteContent["cta"]["button"];

let cta_img = document.getElementById("cta-img").setAttribute('src', siteContent["cta"]["img-src"]);

// main content
let main_content_text = document.querySelectorAll(".main-content .text-content");

let features_h4 = main_content_text[0].getElementsByTagName('h4')[0].textContent = siteContent["main-content"]["features-h4"];
let features_content = main_content_text[0].getElementsByTagName('p')[0].textContent = siteContent["main-content"]["features-content"];

let about_h4 = main_content_text[1].getElementsByTagName('h4')[0].textContent = siteContent["main-content"]["about-h4"];
let about_content = main_content_text[1].getElementsByTagName('p')[0].textContent = siteContent["main-content"]["about-content"];

let services_h4 = main_content_text[2].getElementsByTagName('h4')[0].textContent = siteContent["main-content"]["services-h4"];
let services_content = main_content_text[2].getElementsByTagName('p')[0].textContent = siteContent["main-content"]["services-content"];

let product_h4 = main_content_text[3].getElementsByTagName('h4')[0].textContent = siteContent["main-content"]["product-h4"];
let product_content = main_content_text[3].getElementsByTagName('p')[0].textContent = siteContent["main-content"]["product-content"];

let vision_h4 = main_content_text[4].getElementsByTagName('h4')[0].textContent = siteContent["main-content"]["vision-h4"];
let vision_content = main_content_text[4].getElementsByTagName('p')[0].textContent = siteContent["main-content"]["vision-content"];

let main_img = document.getElementById("middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// contact
let contact = document.querySelector(".contact");

let contact_h4 = contact.getElementsByTagName('h4')[0].textContent = siteContent["contact"]["contact-h4"];
let contact_address = contact.getElementsByTagName('p')[0].textContent = siteContent["contact"]["address"];
let contact_phone = contact.getElementsByTagName('p')[1].textContent = siteContent["contact"]["phone"];
let contact_email = contact.getElementsByTagName('p')[2].textContent = siteContent["contact"]["email"];


// footer
let footer = document.querySelector("footer");

let footer_copyright = footer.getElementsByTagName('p')[0].textContent = siteContent["footer"]["copyright"];

//Check If There's LocalStorage Color Option
let mainColor = localStorage.getItem("color_option");


if(mainColor !== null){
    //console.log('Local Storage Not Empty You Can Set It Root New');
    // console.log(mainColor);
    document.documentElement.style.setProperty('--main--color', mainColor);

    // Remove Active Class From All Color List
    document.querySelectorAll(".color-list li").forEach(element => {
        element.classList.remove('active');

        // Add Active Class On Element With Data-color === Local Storage Item
        if(element.dataset.color === mainColor){
            // Add Active Class
            element.classList.add('active');
        }   
    });

}

// Rndom Background Option
let backgroundOption = true;

// Variable To ControlThe Intervale
let backgroundInterval;

// Toggle Spin Class On Incon
document.querySelector(".toggle-setting .fa-gear").onclick = function(){
    // Toggle Class  Fa-spin For Rotation On self
    this.classList.toggle("fa-spin");

    // Toggle Class Opne ON Main Settings Box
    document.querySelector(".setting-box").classList.toggle("open");
};


// Switcher Colors
const colorLi = document.querySelectorAll('.color-list li');

// Loop List Items
colorLi.forEach(li => {
    // Click On Every List Items
    li.addEventListener("click", (e) => {

        // Set Color On Root
        document.documentElement.style.setProperty('--main--color', e.target.dataset.color );

        // Set Color On Local Storage
        localStorage.setItem("color_option", e.target.dataset.color );

        // Remove Active Class From All Childrens
        e.target.parentElement.querySelectorAll('.active').forEach(element => {
            element.classList.remove('active');
        });

        // Add Active Class On Self
        e.target.classList.add('active');
    });
});

// Switch Random Background Option
const randomBackElem = document.querySelectorAll('.random-background span');

// Loop On All Spans
randomBackElem.forEach(span => {

    span.addEventListener("click", (e) =>{
        // Remove Active Class From All CHilders
        e.target.parentElement.querySelectorAll('.active').forEach(element =>{
            
            element.classList.remove("active");
        });
        e.target.classList.add("active");
        if(e.target.dataset.background === 'yes'){
            backgroundOption = true;
            randmizeImgs();
        }else{
            backgroundOption = false;
            clearInterval(backgroundInterval);
        }
    });
});
 


// Select Landing Page
let landingPage = document.querySelector(".landding-page");

// Get Array Of Imgs
 let imgsArray = ["slide1.png", "slide2.jpg", "slide3.jpg", "slide4.jpg", "slide5.jpg"];

// Function To RnadomzeImgs
function randmizeImgs(){

    if(backgroundOption === true){
        backgroundInterval = setInterval(() =>{
            // Get Random Number
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            // Change Background Image Url
            landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber]+ '")';
        
         }, 1000);
    }
}

randmizeImgs();


//Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function(){
    // Skills Offset Top
    let skillOffsetTop = ourSkills.offsetTop;

    // Outer Height Skills
    let skillsOuterHeight = ourSkills.offsetHeight;


    // Window Hight 
    let windowHeight = this.innerHeight;

    // Window ScrollTop
    let windowScrollTop = this.pageYOffset;
    console.log(windowScrollTop);
     if(windowScrollTop > (skillOffsetTop + skillsOuterHeight - windowHeight)){


        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill => { 
            skill.style.width = skill.dataset.progress;
        });
     }
    };

    // Create Popup With The Image
    let ourGallery = document.querySelectorAll(".gallery img");
     ourGallery.forEach(img =>{
        img.addEventListener('click', (e) =>{
            // Create Overlay Element
            let overlay = document.createElement("div");

            //Add Class To Overlay
            overlay.className = 'popup-overlay';

            // Append Overlay To The Body
            document.body.appendChild(overlay);

            // Create The Popup
            let popupBox = document.createElement("div");

            // Add Class To The Popup Box
            popupBox.className = 'popup-box';

            
            if(img.alt !== null){
                // Create Heading
                let imgHeading = document.createElement("h3");

                // Create Text For Heading

                let imgText = document.createTextNode(img.alt);

                // Apppend The Text To The Heading
                imgHeading.appendChild(imgText);

                // Append The Heading To The Popup Box

                popupBox.appendChild(imgHeading);
            }

            // Create The Image
            let popupImage = document.createElement("img");

            // Set Image Source

            popupImage.src = img.src;

            // Add Image To Popup Box

            popupBox.appendChild(popupImage);

            // Append The Popupp Box To Body
            document.body.appendChild(popupBox);

            // Create The Close Span

            let closeButton = document.createElement("span");

            // Create The Button Text

            let closeButtonText = document.createTextNode("X");

            // Append Text To Class Button

            closeButton.appendChild(closeButtonText);
        
        });
     });
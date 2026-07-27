// ===============================
// CV TEMPLATE JAVASCRIPT
// ===============================


// Page loading animation

document.addEventListener("DOMContentLoaded", function () {

    const cv = document.querySelector(".cv-container");

    if (cv) {

        cv.style.opacity = "0";

        setTimeout(() => {

            cv.style.transition = "0.8s";
            cv.style.opacity = "1";

        }, 100);

    }


});





// ===============================
// AUTOMATIC YEAR
// ===============================


const year = new Date().getFullYear();


const footer = document.querySelector("footer");


if (footer) {

    footer.innerHTML += 
    `<p style="font-size:14px; font-family:Arial;">
    © ${year} Muhammad Uzair | CV Portfolio
    </p>`;

}







// ===============================
// PRINT CV FUNCTION
// ===============================


function printCV(){

    window.print();

}






// ===============================
// IMAGE ERROR HANDLING
// ===============================


const profileImage = document.querySelector(".profile-box img");


if(profileImage){

    profileImage.onerror = function(){

        this.src =
        "https://via.placeholder.com/150?text=Profile";

    };

}






// ===============================
// SMOOTH LINK CLICK
// ===============================


const links = document.querySelectorAll("a");


links.forEach(link => {


    link.addEventListener("click", function(){


        this.style.opacity = "0.6";


        setTimeout(()=>{

            this.style.opacity="1";

        },300);


    });


});






// ===============================
// ADD PRINT BUTTON AUTOMATICALLY
// ===============================


const button = document.createElement("button");


button.innerHTML = 
"Download / Print CV";


button.style.position="fixed";
button.style.bottom="20px";
button.style.right="20px";
button.style.padding="12px 20px";
button.style.background="#082c50";
button.style.color="white";
button.style.border="none";
button.style.borderRadius="8px";
button.style.cursor="pointer";
button.style.fontSize="15px";


button.onclick = printCV;


document.body.appendChild(button);
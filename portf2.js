const navs=document.querySelectorAll(".nav-list li");
const cube=document.querySelector(".box");
const sections=document.querySelectorAll(".section");
const resumeLists=document.querySelectorAll(".resume-list");
const resumeBoxs=document.querySelectorAll(".resume-box");
const portfolioLists=document.querySelectorAll(".portfolio-list");
const portfolioBoxs=document.querySelectorAll(".portfolio-box");
//navbar actions and all section actions along with cube rotation when navbar is clicked
navs.forEach((nav, idx) =>{
    nav.addEventListener("click",()=> {
         document.querySelector(".nav-list li.active").classList.remove("active");
         nav.classList.add("active");
         cube.style.transform=`rotateY(${idx * -90}deg)`;
          document.querySelector(".section.active").classList.remove("active");
          sections[idx].classList.add("active");
          const array=Array.from(sections);
          const arrSecs=array.slice(1,-1);
          arrSecs.forEach(arrSec => {
               if(arrSec.classList.contains('active'))
               {
                sections[4].classList.add('action-contact');
               }
            });
        if(sections[0].classList.contains('active')){
            sections[4].classList.remove('action-contact');
        }
    });
});
//resume section when clicking tab-list
resumeLists.forEach((list, idx) =>{
    list.addEventListener("click",()=> {
        document.querySelector(".resume-list.active").classList.remove("active");
         list.classList.add("active");
         document.querySelector(".resume-box.active").classList.remove("active");
         resumeBoxs[idx].classList.add("active");
    });
});
//portfolio section when clicking tab-list
portfolioLists.forEach((list, idx) =>{
    list.addEventListener("click",()=> {
        document.querySelector(".portfolio-list.active").classList.remove("active");
         list.classList.add("active");
         document.querySelector(".portfolio-box.active").classList.remove("active");
         portfolioBoxs[idx].classList.add("active");    
    });
});
//visibility for contact section when reloading(cube reloading animation)
setTimeout(()=>{
    sections[4].classList.remove('active');
},1500);

const form = document.querySelector(".contact-form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const fullName = form.querySelector('input[placeholder="Full Name"]').value;
    const email = form.querySelector('input[placeholder="Email Address"]').value;
    const phone = form.querySelector('input[placeholder="Phone Number"]').value;
    const subject = form.querySelector('input[placeholder="Email Subject"]').value;
    const message = form.querySelector("textarea").value;
    const templateParams = {
        fullName: fullName,
        email: email,
        phone: phone,
        subject: subject,
        message: message
    };
    emailjs.send("service_t0g40rz", "template_6hjsirc", templateParams)
    .then(() => {
        alert("Message sent successfully!");
        form.reset();
    }, (error) => {
        console.log("FAILED...", error);
        alert("Failed to send message. Try again!");
    });
});
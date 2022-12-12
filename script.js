
let typed = new Typed('#changing', {
    strings: ['REACT JS', 'JAVASCRIPT', 'NODE JS', 'MONGODB', 'EXPRESS'],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

$("a[href^='#']").click(function (e) {
    e.preventDefault();
    var position = $($(this).attr("href")).offset().top;
    $("body, html").animate({
        scrollTop: position
    } /* speed */);
})


// Email Js 
const contactForm = document.getElementById("contact-form"),
    contactName = document.getElementById("contact-name"),
    contactEmail = document.getElementById("contact-email"),
    contactProject = document.getElementById("conatct-project"),
    contactMessage = document.getElementById("contact-message")

const sendEmail = (e) => {
    e.preventDefault()
    // console.log(e)
    if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
        contactMessage.classList.remove('color_blue')
        contactMessage.classList.add('color_red')
        contactMessage.textContent = "Write all the input fields"
    } else {
        contactMessage.textContent = ""
        contactMessage.classList.remove('color_red')
        emailjs.sendForm('service_7tuk1bn', 'template_1myey2t', '#contact-form', 'Ew6YeGH6D0oumukwX')
            .then(() => {
                contactMessage.classList.add('color_blue')
                contactMessage.textContent = "Message sent"
                setTimeout(() => {
                    contactMessage.textContent =""

                }, 2000)
            }).catch(() => {
                contactMessage.textContent ="Something went wrong"
            })
    }

}
if (contactForm) {
    // contact_us.addEventListener('click', swapper, false);
    contactForm.addEventListener('submit', sendEmail)

}
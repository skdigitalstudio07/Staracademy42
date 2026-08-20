function toggleMenu() {

    const menu = document.getElementById("navMenu");

    menu.classList.toggle("show");

}


function sendWhatsApp(event) {

    event.preventDefault();


    const name =
        document.getElementById("studentName").value;


    const mobile =
        document.getElementById("mobile").value;


    const course =
        document.getElementById("course").value;


    const message =
        document.getElementById("message").value;


    const whatsappNumber =
        "919116007402";


    const text =
        "Hello Star Academy!%0A%0A" +

        "Student/Parent Name: " +
        encodeURIComponent(name) +

        "%0AMobile: " +
        encodeURIComponent(mobile) +

        "%0AClass/Exam: " +
        encodeURIComponent(course) +

        "%0AMessage: " +
        encodeURIComponent(message);


    window.open(

        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        text,

        "_blank"

    );

}

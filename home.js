function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.querySelector(".email").value,
    message: document.getElementById("mess").value,
  };

  const serviceID = "service_988zw6l";
  const templateID = "template_2vz8i99";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.querySelector(".email").value = "";
      document.getElementById("mess").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}

function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}

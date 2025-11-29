document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;

    const whatsappMessage =
        `Hello, my name is ${name}. I just paid for the Knowledge Monetization Ebook (₦2,000). Here are my details:%0A%0A` +
        `Name: ${name}%0A` +
        `WhatsApp: ${number}%0A` +
        `Email: ${email}%0A%0A` +
        `I have completed the payment on Opay.`;

    const url = `https://wa.me/2348051780169?text=${whatsappMessage}`;
    window.location.href = url;
});

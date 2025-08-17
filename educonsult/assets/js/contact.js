document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const responseBox = document.getElementById("form-response");
    responseBox.style.display = "block";
    responseBox.innerHTML = "🎉 ধন্যবাদ! আপনার বার্তা সফলভাবে পাঠানো হয়েছে।";

    // Optional: Clear form
    this.reset();
});
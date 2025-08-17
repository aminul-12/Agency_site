document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("q-btn");
    const cgpaInput = document.getElementById("q-cgpa");
    const ieltsInput = document.getElementById("q-ielts");
    const resultBox = document.getElementById("q-result");

    btn.addEventListener("click", function () {
        const cgpa = parseFloat(cgpaInput.value);
        const ielts = parseFloat(ieltsInput.value);

        if (isNaN(cgpa) || isNaN(ielts)) {
            resultBox.style.display = "block";
            resultBox.innerHTML = "❌ Please enter both CGPA and IELTS/TOEFL score.";
            return;
        }

        fetch("/src/scripts/eligibility_scholerships.json")
            .then(res => res.json())
            .then(data => {
                const eligible = data.filter(s => {
                    return cgpa >= s.minCGPA && (s.minIELTS === null || ielts >= s.minIELTS);
                });

                if (eligible.length > 0) {
                    resultBox.style.display = "block";
                    resultBox.innerHTML = `<h3>✅ You are eligible for the following scholarships:</h3>`;
                    eligible.forEach(s => {
                        resultBox.innerHTML += `<p><strong>${s.title}</strong> - ${s.level} (${s.coverage})</p>`;
                        resultBox.innerHTML += `<p>Minimum CGPA: ${s.minCGPA}, Minimum IELTS: ${s.minIELTS || "N/A"}</p>`;
                        resultBox.innerHTML += `<a href="${s.link}" target="_blank">Apply Now</a><hr>`;
                    });
                } else {
                    resultBox.style.display = "block";
                    resultBox.innerHTML = "❌ Sorry, you are not eligible for any scholarships.";
                }
            })
            .catch(err => {
                resultBox.style.display = "block";
                resultBox.innerHTML = "⚠ Error loading scholarships. Please try again.";
                console.error(err);
            });
    });
});
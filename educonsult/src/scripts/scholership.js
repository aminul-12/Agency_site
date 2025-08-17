document.addEventListener("DOMContentLoaded", () => {
    const scholarshipList = document.getElementById("scholarshipList");
    const searchInput = document.getElementById("searchInput");

    // Load JSON data
    fetch("/educonsult/src/scripts/scholerships_1.json")
        .then(response => response.json())
        .then(data => {
            renderScholarships(data);

            // Search functionality
            searchInput.addEventListener("input", () => {
                const query = searchInput.value.toLowerCase();
                const filtered = data.filter(scholarship =>
                    scholarship.title.toLowerCase().includes(query) ||
                    scholarship.level.toLowerCase().includes(query) ||
                    scholarship.coverage.toLowerCase().includes(query) ||
                    scholarship.eligibility.toLowerCase().includes(query)
                );
                renderScholarships(filtered);
            });
        });

    function renderScholarships(scholarships) {
        scholarshipList.innerHTML = "";
        scholarships.forEach(s => {
            const card = document.createElement("div");
            card.className = "scholarship-card";
            card.innerHTML = `
        <h2>${s.title}</h2>
        <p><strong>Level:</strong> ${s.level}</p>
        <p><strong>Coverage:</strong> ${s.coverage}</p>
        <p><strong>Eligibility:</strong> ${s.eligibility}</p>
        <a href="${s.link}" target="_blank" class="btn">Apply Now</a>
      `;
            scholarshipList.appendChild(card);
        });
    }
});
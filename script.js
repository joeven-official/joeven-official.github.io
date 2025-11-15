const container = document.getElementById("video-list");

VIDEOS.forEach(v => {
    const card = `
        <div class="video-card">
            <iframe width="100%" height="250"
                src="https://www.youtube.com/embed/${v.youtube}"
                frameborder="0" allowfullscreen></iframe>

            <h3>${v.title}</h3>
            <a class="btn" href="video.html?id=${v.id}">View Details</a>
        </div>
    `;
    container.innerHTML += card;
});

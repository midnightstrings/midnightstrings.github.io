
AOS.init({ duration: 1000 });

function openVideo(url) {
    document.getElementById('videoFrame').src = url;
    new bootstrap.Modal(document.getElementById('videoModal')).show();
}

var modal = document.getElementById('videoModal');
modal.addEventListener('hidden.bs.modal', function () {
    document.getElementById('videoFrame').src = "";
});

particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js/particles.json');

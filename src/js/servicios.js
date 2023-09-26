var options = {
    fluid: true,
    responsive: true,
    autoplay: false,
    controls: false,
};

var player1 = videojs("video-activacion", options, function onPlayerReady() {});
var player2 = videojs("video-especiales", options, function onPlayerReady() {});
var playe3 = videojs("video-marketing", options, function onPlayerReady() {});
var playe4 = videojs(
    "video-coorporativo",
    options,
    function onPlayerReady() {}
);

const cardsServicios = document.querySelectorAll(".servicios__card");

for (const cardsServiciosEl of cardsServicios) {
    cardsServiciosEl.addEventListener("mouseover", () => {
        let idVideo = cardsServiciosEl.querySelector(".video-js").id;
        let player = videojs(idVideo, options, function onPlayerReady() {});
        player.play();
    });

    cardsServiciosEl.addEventListener("mouseleave", () => {
        let idVideo = cardsServiciosEl.querySelector(".video-js").id;
        let player = videojs(idVideo, options, function onPlayerReady() {});
        player.pause();
    });
}

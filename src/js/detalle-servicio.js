// VIDEO

var options = {
    fluid: true,
    responsive: true,
    autoplay: false,
    controls: true,
};
var player1 = videojs("video-activacion", options, function onPlayerReady() {});

/// GALERIA
lightbox.option({
    albumLabel: "%1 of %2",
    fadeDuration: 300,
    imageFadeDuration: 300,
    resizeDuration: 300,
    disableScrolling: true,
    fitImagesInViewport: true,
    wrapAround: true,
    // maxWidth: 700,
    // maxHeight: 700,
});

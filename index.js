var playerInstance = jwplayer("myElement");

playerInstance.setup({
    "file": "http://brianw.success.jwplayer.com/files/EasyVideo.mp4",
    "image": "http://brianw.success.jwplayer.com/files/EasyImage.jpg",
    "width": "400",
    "height": "300",
});

// TODO: helpful link from API demonstrating how to write calls
// https://www.jwplayer.com/developers/web-player-demos/dynamic-ad-playback/
playerInstance.on('complete', () => alert("thanks for watching!"));
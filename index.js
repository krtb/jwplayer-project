
    // TODO: Easy
    // NOTES -> helpful links from JWPlayer API
    // https://www.jwplayer.com/developers/web-player-demos/dynamic-ad-playback/
    // https://developer.jwplayer.com/jwplayer/docs/jw8-reference
    //  

    // instantiate jwPlayer, assign to const variable
    const playerInstance = jwplayer("myElement");

    // use setup() method to configure jwplayer instance
    playerInstance.setup({
        "file": "http://brianw.success.jwplayer.com/files/EasyVideo.mp4",
        "image": "http://brianw.success.jwplayer.com/files/EasyImage.jpg",
        "width": "400",
        "height": "300",
    });

    // on video completion, alert user with message
    playerInstance.on('complete', () => alert("Thanks for watching!"));

    // TODO: Medium

    // grab second video's parent div via its class. Assign to a const variable
    const secondVideoClick = document.querySelector('.loadSecondVideo')

    // attach an event listener function to div
    secondVideoClick.addEventListener('click', (e)=> {
        // https://developer.jwplayer.com/jwplayer/docs/jw8-player-errors-reference#202621
        // needed to be a JSON object, overwriting properties that need changing. Like video file & image
        e.preventDefault()
        // load second video, re-assigning file and image properties to new items
        playerInstance.load({
        "file": "http://brianw.success.jwplayer.com/files/MediumVideo.mp4",
            "image": "http://brianw.success.jwplayer.com/files/MediumImage.jpg"
        });
        // play second video immediately after loading
        playerInstance.play();
    })

    // TODO: Hard

    // grab first image div by class
    const firstImg = document.querySelector('.firstImg');
    // style image with JS, minimize original size
    firstImg.style.width = "50px";

    // create a second JWPlayer instance, pass in .secondElement class of parent div
    const secondInstance = jwplayer("secondElement");
    secondInstance.setup({
        "file": "http://brianw.success.jwplayer.com/files/HardVideo.mp4",
        "image": "http://brianw.success.jwplayer.com/files/HardImage.jpg",
        "width": "400",
        "height": "300",
    });

    // jwplayer().on('time') = While the player is playing, this event is fired as the playback position gets updated. 
    secondInstance.on('time', (e)=> {
        // Time Event can has the following properties: duration / position / viewable

        // e variable represents Event, use dot notation to access "position" property
        // capture video time in seconds, transform to whole number with Math.round()
        const videoTime = Math.round(e.position) - 1 // subtract 1 as video was stopping one second before 5
        // when video hits 5 seconds, pause, change Mario img to Wario img dynamically
        if(videoTime === 5){
        // jwplayer().pause() => Pauses playback, changing the state of JW Player from playing to paused. 
        secondInstance.pause();
            // overwrite original Mario img src attribute, to display second image of Wario.
            firstImg.src = "https://www.mariowiki.com/images/thumb/2/2a/Wario_Basic_Line_Artwork.svg/200px-Wario_Basic_Line_Artwork.svg.png"
            // resize original Wario image to be smaller with JS
            firstImg.style.width = "50px";
        }
    });

// --------------- EXTRA -------------------- //

const previousVideoClick = document.querySelector('.loadPreviousVideo')

// attach an event listener function to div
previousVideoClick.addEventListener('click', (e) => {
    // https://developer.jwplayer.com/jwplayer/docs/jw8-player-errors-reference#202621
    // needed to be a JSON object, overwriting properties that need changing. Like video file & image
    e.preventDefault()
    // load first video, will not play 
    playerInstance.load({
        "file": "http://brianw.success.jwplayer.com/files/EasyVideo.mp4",
        "image": "http://brianw.success.jwplayer.com/files/EasyImage.jpg"
    });
})
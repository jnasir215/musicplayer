var main = function() {
    //var state;
    var volume;
    var muted;
    var currentTime;

    //The PLAY button
    /*document.getElementById('play').addEventListener('click', function(){
        document.getElementById('message').textContent = "Playing track...";
        document.getElementById('player').dispatchEvent( new Event('play'));
    });
    */
    //JQuery Equivalent to PLAY
        $('#play').click(function(){
            $('#message').text("Playing track...");
            $('#player').trigger("play");
        });
    
    //The PAUSE button
    /*document.getElementById('pause').addEventListener('click', function(){
        document.getElementById('message').textContent = "Track paused...";
        document.getElementById('player').dispatchEvent( new Event('pause'));
    });
    */
    //JQuery Equivalent to PAUSE
        $('#pause').click(function(){
            $('#message').text("Track paused...");
            $('#player').trigger("pause");
        });
    
    //The MUTE button
    /*document.getElementById('mute').addEventListener('click', function(){
        document.getElementById('message').textContent = "Track muted...";
        muted = document.getElementById('player').muted;
        document.getElementById('player').muted = true;
    });
    */
    //JQuery Equivalent to MUTE
        $('#mute').click(function(){
            $('#message').text("Track muted");
            muted = $('#player').prop('muted');
            $('#player').prop('muted',true);
        });
    
    //The UNMUTE button
    /*document.getElementById('unmute').addEventListener('click', function(){
        document.getElementById('message').textContent = "Track unmuted...";
        document.getElementById('player').muted = false;
    });
    */
    //JQuery Equivalent to UNMUTE
        $('#unmute').click(function(){
            $('#message').text("Track unmuted...");
            $('#player').prop('muted',false);
        });
    
    //The STOP button
    /*document.getElementById('stop').addEventListener('click', function(){
        document.getElementById('message').textContent = "Track stopped and reset...";
        document.getElementById('player').dispatchEvent( new Event('pause'));
        currentTime = document.getElementById('player').currentTime;
        document.getElementById('player').currentTime = 0;
    });
    */
    //JQuery Equivalent to STOP
        $('#stop').click(function(){
            $('#message').text("Track stopped and reset...");
            $('#player').trigger("pause");
            currentTime = $('#player').prop('currentTime');
            $('#player').prop('currentTime', 0);
        });
    
    //The VOLUME UP button
    /*document.getElementById('volUp').addEventListener('click', function(){
        document.getElementById('message').textContent = "Volume increased...";
        volume = document.getElementById('player').volume;
        if(volume < 1) {
            document.getElementById('player').volume = +0.1;
        }
    });
    */
    //JQuery Equivalent to VOLUME UP
        $('#volUp').click(function(){
            $('#message').text("Volume increased...");
            volume = $('#player').prop('volume');
            if(volume < 1){
                volume = volume + 0.1;
                $('#player').prop('volume', volume);
            }
        })
    
    //The VOLUME DOWN button
    /*document.getElementById('volDown').addEventListener('click', function(){
        document.getElementById('message').textContent = "Volume decreased...";
        volume = document.getElementById('player').volume;
        if(volume > 0) {
            document.getElementById('player').volume = -0.1;
        }
    });
    */
    //JQuery Equivalent to VOLUME DOWN
        $('#volDown').click(function(){
            $('#message').text("Volume decreased...");
            volume = $('#player').prop('volume');
            if(volume > 0){
                volume = volume - 0.1;
                $('#player').prop('volume', volume);
            }
        })
    
}

document.addEventListener('DOMContentLoaded', main);
//JQuery Equivalent
//$(document).ready(main);
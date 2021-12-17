console.log('Start Debug here!');
setTimeout( function (){
    list_of_videos = document.getElementsByClassName('ytd-thumbnail-overlay-time-status-renderer');
    let hour = 0;
    let min = 0;
    let second = 0;
    for(const video of Object.entries(list_of_videos)){
        let string_after_trim = video[1].innerText.trim();
        let str_tmp = string_after_trim.split(':');
        if(string_after_trim.length == 4 || string_after_trim.length == 5){
            min += parseInt(str_tmp[0]);
            second += parseInt(str_tmp[1]);
        }
        if(string_after_trim.length == 7 || string_after_trim.length == 8){
            hour += parseInt(str_tmp[0]);
            min += parseInt(str_tmp[1]);
            second += parseInt(str_tmp[2]);
        }
        console.log(video[1].innerText);
    }
    
    min += Math.floor(second/60);
    second = second % 60;
    
    hour += Math.floor(min/60);
    min = min % 60;
    
    console.log('This playlist have ' + list_of_videos.length/2 + ' video' + ' with' + hour + ':' + min + ':' + second);
    
    let stats = document.getElementById('stats');
    stats.innerText += 'Total time in this playlist ' + hour + ':' + min + ':' + second;
},3000);

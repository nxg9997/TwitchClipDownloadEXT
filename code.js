// Twitch Clip Downloader Extension by Nathan Glick

let clipPage = document.querySelector("html");
AddButton();

function downloadClip(){
    let player = document.querySelector(".player__video");
    let vidPath = player.src;
    let len = vidPath.length;
    vidPath = vidPath.substring(0, len - 4);
    window.open(vidPath);
}

function AddButton(){
    let btnHTML = '<div class="flex__item flex-shrink-0"><a class="button button--hollow button--icon block clips-button ellipsis"><figure class="icon"><svg class="svg-heart" height="16px" version="1.1" viewBox="0 0 16 16" width="16px" x="0px" y="0px"><path clip-rule="evenodd" d="M8,14L1,7V4l2-2h3l2,2l2-2h3l2,2v3L8,14z" fill-rule="evenodd"></path></svg></figure><span class="follow-btn--text clip-downloader">Download</span></a></div>';

    let btn = document.createElement('div');
    btn.innerHTML = btnHTML;

    let btnBar = document.querySelector(".view-clip__bc");
    btnBar.appendChild(btn);

    let dlBtn = document.querySelector(".clip-downloader");

    dlBtn.onmousedown = downloadClip;
}

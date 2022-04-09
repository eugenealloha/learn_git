let liked = [false, false, false];



function MouseOverNews(){
    document.getElementById("news").style.width ="455px";
    document.getElementById("news").style.height = "422px";
    document.getElementById("newspic").style.width ="455px";
    document.getElementById("newspic").style.height = "422px";
    document.getElementById("newstext").style.marginTop ="336px";
    document.getElementById("newstext").style.marginLeft ="152px";
}

function MouseOutNews(){
    document.getElementById("news").style.width ="435px";
    document.getElementById("news").style.height = "402px";
    document.getElementById("newspic").style.width ="435px";
    document.getElementById("newspic").style.height = "402px";
    document.getElementById("newstext").style.marginTop ="320px";
    document.getElementById("newstext").style.marginLeft ="145px";
}

function MouseOverPeople(){
    document.getElementById("people").style.width ="426px";
    document.getElementById("people").style.height = "196px";
    document.getElementById("peoplepic").style.width ="426px";
    document.getElementById("peoplepic").style.height = "196px";
    document.getElementById("peopletext").style.marginTop ="21px";
    document.getElementById("peopletext").style.marginLeft ="123px";
}

function MouseOutPeople(){
    document.getElementById("people").style.width ="416px";
    document.getElementById("people").style.height = "186px";
    document.getElementById("peoplepic").style.width ="416px";
    document.getElementById("peoplepic").style.height = "186px";
    document.getElementById("peopletext").style.marginTop ="20px";
    document.getElementById("peopletext").style.marginLeft ="120px";
}

function MouseOverAchive(){
    document.getElementById("achive").style.width ="199px";
    document.getElementById("achive").style.height = "196px";
    document.getElementById("achivepic").style.width ="199px";
    document.getElementById("achivepic").style.height = "196px";
    document.getElementById("achivetext").style.marginTop ="148px";
    document.getElementById("achivetext").style.marginLeft ="32px";
}

function MouseOutAchive(){
    document.getElementById("achive").style.width ="189px";
    document.getElementById("achive").style.height = "186px";
    document.getElementById("achivepic").style.width ="189px";
    document.getElementById("achivepic").style.height = "186px";
    document.getElementById("achivetext").style.marginTop ="140";
    document.getElementById("achivetext").style.marginLeft ="30px";
}

function MouseOverTeam(){
    document.getElementById("team").style.width ="199px";
    document.getElementById("team").style.height = "196px";
    document.getElementById("teampic").style.width ="199px";
    document.getElementById("teampic").style.height = "196px";
    document.getElementById("teamtext").style.marginTop ="118px";
    document.getElementById("teamtext").style.marginLeft ="26px";
}

function MouseOutTeam(){
    document.getElementById("team").style.width ="189px";
    document.getElementById("team").style.height = "186px";
    document.getElementById("teampic").style.width ="189px";
    document.getElementById("teampic").style.height = "186px";
    document.getElementById("teamtext").style.marginTop ="112px";
    document.getElementById("teamtext").style.marginLeft ="25px";
}

function LikeClick_1(el){
    if(liked[0] == false){
        el.src = "images/liked.png";
        liked[0] = true;
    }
    else{
        el.src = "images/notliked.png"
        liked[0] = false;
    }
}

function LikeClick_2(el){
    if(liked[1] == false){
        el.src = "images/liked.png";
        liked[1] = true;
    }
    else{
        el.src = "images/notliked.png"
        liked[1] = false;
    }
}

function LikeClick_3(el){
    if(liked[2] == false){
        el.src = "images/liked.png";
        liked[2] = true;
    }
    else{
        el.src = "images/notliked.png"
        liked[2] = false;
    }
}

function MouseOverLike(el){
    el.style.width = "70px";
    el.style.height = "70px";
    el.style.marginLeft = "1308px";

    switch(el.id){
        case "like_1":
            el.style.marginTop = "295px";
            break;
        case "like_2":
            el.style.marginTop = "680px";
            break;
        case "like_3":
            el.style.marginTop = "1065px";
            break;
    }
}

function MouseOutLike(el){
    el.style.width = "60px";
    el.style.height = "60px";
    el.style.marginLeft = "1315px";

    switch(el.id){
        case "like_1":
            el.style.marginTop = "300px";
            break;
        case "like_2":
            el.style.marginTop = "685px";
            break;
        case "like_3":
            el.style.marginTop = "1070px";
            break;
    }
}
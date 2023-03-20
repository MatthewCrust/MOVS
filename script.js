var horrorZanr = "1"
var animZanr = "2"
var thrilZanr = "3"
var crimeZanr = "4"
var comedyZanr = "5"
var scifiZanr = "6"
var actionZanr = "7"

var zanrList = [];
var btnText = document.getElementById("menuBtn");
var i = 0;

var x ={};

function ranNum(){
    num = Math.random() * (27 - 0) + 0;
    x.cislo = Math.round(num);
}

function fun1(){
    let filmy = [ 

        ["the-witch", "2016","1","zap5hpFCWSvdWSuPGAQyjUv2wAC","","-2015"],    
        ["halloween", "1978","1","wijlZ3HaYMvlDTPqJoTCWKFkCPU","","-1978"],
        ["hereditary", "2018","1","u3EEVihxNbFIOvnUkBJIJK93Jcn","7784604-",""],
        ["barbarian", "2022","1","idT5mnqPcJgSkvpDX7pJffBzdVH","15791034-","-2022"],

        ["shrek", "2001","2","phBeKjtDYmUpIT4VbNF1lYT0oEa","",""],
        ["coraline","2009","2","gPMh5rsVrDDAYMDbTcz6Up1DQ4z","",""],  
        ["spider-man-into-the-spider-verse", "2018","2","iiZZdoQBEYBv6id8su7ImL0oCbD","4633694-",""],
        ["the-lego-batman-movie", "2017","2","snGwr2gag4Fcgx2OGmH9otl6ofW","",""],

        ["the-menu", "2022","3","fPtUgMcLIboqlTlPrq0bQpKK8eq","9764362-","-2022"],
        ["parasite","2019","3","7IiTTgloJzvGI1TAYymCfbfl3vT","6751668-","-2019"],  
        ["fight-club", "1999","3","jSziioSwPVrOy9Yow3XhWIBDjq1","",""],
        ["nightcrawler", "2014","3","gYPIRu0jX2CGYdeO422cq3N78ju","",""],

        ["prisoners", "2013","4","tuZhZ6biFMr5n9YSVuHOJnNL1uU","",""],
        ["se7en","1995","4","69Sns8WoET6CfaYlIkHbla4l7nC","",""],  
        ["knives-out", "2019","4","pThyQovXQrw2m0s9x82twj48Jq4","8946378-","-2019"],
        ["pulp-fiction", "1994","4","d5iIlFn5s0ImszYzBPb8JPIfbXD","",""],

        ["superbad", "2007","5","ek8e8txUyUwd2BNqj6lFEerJfbq","",""],
        ["the-hangover","2009","5","uluhlXubGu1VxU63X9VHCLWDAYP","",""],  
        ["the-wolf-of-wall-street", "2013","5","34m2tygAYBGqA9MXKhRDtzYd4MR","",""],
        ["borat-cultural-learnings-of-america-for-make-benefit-glorious-nation-of-kazakhstan", "2006","5","kfkyALfD4G1mlBJI1lOt2QCra4i","",""],

        ["interstellar", "2014","6","gEU2QniE6E77NI6lCU6MxlNBvIx","",""],
        ["arrival","2016","6","x2FJsf1ElAgr63Y3PNPtJrcmpoe","2543164-","-2016"],  
        ["blade-runner-2049", "2017","6","gajva2L0rPYkEWjzgFlBXCAVBE5","",""],
        ["upgrade", "2018","6","5f28TXtvHioXirX2n1XH8EJ314v","6499752-",""],

        ["baby-driver", "2017","7","rmnQ9jKW72bHu8uKlMjPIb2VLMI","",""],
        ["john-wick-chapter-2","2017","7","kL99FVq572hNPfMyfQCT7tGFNeQ","4425200-",""],  
        ["mad-max-fury-road", "2015","7","hA2ple9q4qnwxp3hKVNhroipsir","",""],
        ["pacific-rim", "2013","7","8wo4eN8dWKaKlxhSvBz19uvj8gA","",""],

    ];
    

    while(i<1){
        ranNum()
        i=+1;
    }

    var picPoster = document.getElementById("poster");
    var bombujLink = document.getElementById("bombujLink");
    var csfdLink = document.getElementById("csfdLink");
    var links = document.getElementById("buttonBox");


    while(true){
        ranNum()
        var zanrCheck = new RegExp(zanrList.join('|')).test(filmy[x.cislo][2]);
        
        if(zanrCheck==true){
            picPoster.src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/"+filmy[x.cislo][3]+".jpg";
            bombujLink.href= "https://lookmovie.foundation/movies/view/"+filmy[x.cislo][4]+""+filmy[x.cislo][0]+"-"+filmy[x.cislo][1];
            csfdLink.href="https://letterboxd.com/film/"+filmy[x.cislo][0]+""+filmy[x.cislo][5]+"/";
            picPoster.style.display="block";
            links.style.visibility="visible";
            ranNum();
            break;
        }
    }

}

function horror(){
    zanrList = [];
    btnText.value="Horror";
    zanrList.push(horrorZanr);
}
function anim(){
    zanrList = [];
    btnText.value="Animated";
    zanrList.push(animZanr);
}

function thril(){
    zanrList = [];
    btnText.value="Thriller";
    zanrList.push(thrilZanr);
}

function crime(){
    zanrList = [];
    btnText.value="Crime";
    zanrList.push(crimeZanr);
}

function comedy(){
    zanrList = [];
    btnText.value="Comedy";
    zanrList.push(comedyZanr);
}

function scifi(){
    zanrList = [];
    btnText.value="Sci-Fi";
    zanrList.push(scifiZanr);
}

function action(){
    zanrList = [];
    btnText.value="Action";
    zanrList.push(actionZanr);
}

function work(){
    zanrList = [];
    btnText.value="Choose a genre";
}

function h(){
    ranNum();
    alert(x.cislo);
}
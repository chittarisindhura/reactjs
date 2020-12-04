(function(){

function loadJSON(file,callback){
  
     var xhrObject= new XMLHttpRequest();
     xhrObject.overrideMimeType('application/json')
     xhrObject.open("GET",file,true);

     xhrObject.onreadystatechange=function()
     {
        if(xhrObject.readyState ===  4 && xhrObject.status=="200"){
            callback(xhrObject.responseText);
     	}
     }
     xhrObject.send();

}

loadJSON("data.json",function(text){
    var data=JSON.parse(text);
    console.log(data);
    profile(data);
    skills(data.skills);
    education(data.education);
})

function profile(pdata){
    console.log(pdata);
    var main=document.getElementById("main");
    var left=document.getElementById("left");
    var card=document.createElement("div");
    card.classList.add("card");
    
    var pic=document.createElement("img");
    pic.src= "img/g.png";
    pic.width="200";
    card.appendChild(pic);
    var name=document.createElement('h2');
    name.textContent=pdata.name;
    card.appendChild(name);
    var phone=document.createElement('h3');
    phone.textContent=pdata.phone;
    card.appendChild(phone);
    var email=document.createElement('h4');
    email.textContent=pdata.email;
    card.appendChild(email);
    left.appendChild(card);
    main.appendChild(left);
}

function skills(eskills){
    console.log(eskills)
    var right=document.getElementById("right");


    var pskills=document.createElement('h1');
    pskills.textContent="Skills:"
    right.appendChild(pskills);
    main.appendChild(right);
    var hr=document.createElement('hr')
    right.appendChild(hr);
    for(i in eskills)
    {
        var course=document.createElement('h3');
        course.textContent=eskills[i].course+":";
        right.appendChild(course);

        for(k in eskills[i].keywords){
            var keys=document.createElement('p');
            keys.textContent=eskills[i].keywords[k];
            right.appendChild(keys);
        }
    }
}



function education(education){
    console.log(education)

var ed=document.createElement("h2");
    ed.innerHTML="Educational details:";
    right.appendChild(ed);
    var ehr=document.createElement("hr");
  right.appendChild(ehr);
   var etable=document.createElement("table");
   etable.border="1";
   var tr1="<tr><td>sno</td>><td>institute</td><td>percentage</td></tr>";
var tr2="";
for(i=0;i<education.length;i++){
  tr2=tr2+"<tr><td>"+education[i].sno+"</td><td>"+education[i].institute+"</td><td>"+education[i].percentage+"</td></tr>";

}
etable.innerHTML=tr1+tr2;
right.appendChild(etable);

}


}())
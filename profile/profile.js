(function(){



function loadJSON(file,callback){
  
     var xhrObject= new XMLHttpRequest();
     xhrObject.overrideMimeType('application/json')
     xhrObject.open('GET',file,true);

     xhrObject.onreadystatechange=function()
     {
      
      if(xhrObject.readyState === 4  && xhrObject.status=="200"){
                 callback(xhrObject.responseText);
      }



    }
     xhrObject.send();

}

loadJSON("data1.json",function(text)
{
    var data1=JSON.parse(text);
    console.log(data1);
    profile(data1);
    skills(data1.skills);
})
function profile(pdata){
    console.log(pdata);
    var main=document.getElementById("main");
    var left=document.getElementById("left");
    var card=document.createElement("div");
    card.classList.add("card");
    
    var pic=document.createElement('img');
    pic.src="admin.png";
    pic.width="200px";
    card.appendChild(pic);
    var name=document.createElement('h2');
    ename.textContent=pdata.name;
    card.appendChild(ename);
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
    pskills.textContent="skills:"
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

}())

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

loadJSON("data.json",function(text)
{
    var data=JSON.parse(text);
    console.log(data);

})





}())

$(function() {
    var //valueCount = $("counter").value(),
        counter = $("#counter"),
        addBtn = $("#add"),
        value = $("#counter").html();

      addBtn.on("click", function() {

      counter.html(value ++);  //this value is not incremented.
      console.log(value);      //this value gets incremented.
      return

    });

  });​
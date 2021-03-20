function getParagraph1(){
    var inputs = [];
    
    for (var i=1; i<=5; i++){
      inputs.push(document.getElementById("para1_inputbox"+i).value);
    }
    inputs.join(". ");
    document.getElementById("showParagraph1").innerHTML = inputs.join(". ");
  }

function getParagraph2(){
    var inputs = [];
    
    for (var i=1; i<=5; i++){
      inputs.push(document.getElementById("para2_inputbox"+i).value);
    }
    inputs.join(". ");
    document.getElementById("showParagraph2").innerHTML = inputs.join(". ");
  }

  function getParagraph3(){ 
    var inputs = [];
    
    for (var i=1; i<=5; i++){
      inputs.push(document.getElementById("para3_inputbox"+i).value);
    }
    inputs.join(". ");
    document.getElementById("showParagraph3").innerHTML = inputs.join(". ");

  }
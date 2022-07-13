function onSvgLoad() {
    var belowGround = document.getElementById('Below_ground_gas');
    belowGround.style.visibility = 'hidden'
    var aboveGround = document.getElementById('Above_ground_Gas');
    aboveGround.style.visibility = 'hidden'
    var emerganyGasValves = document.getElementById('Emergany_Gas_Isolation_valves');
    emerganyGasValves.style.visibility = 'hidden'
  }
  
  function toggleLayer(id) {
      var element = document.getElementById(id);
      var elementText = document.getElementById(id + '_text');
      if (element.style.visibility == 'hidden') {
          element.style.visibility = 'visible';
          elementText.innerText = 'Hide';
        } else {
          element.style.visibility = 'hidden';
          elementText.innerText = 'Show';
      }
  }

function toggleLegendOn() {
  var toggle = document.getElementById("toggle");
  toggle.style.display = "none";
  var legend = document.getElementById("legend");
  legend.style.width = "250px";
  legend.style.visibility = "visible";
}

function toggleLegendOff() {
  var toggle = document.getElementById("toggle");
  toggle.style.display = "block";
  document.getElementById("toggle").style.visibility = "visible";
  var legend = document.getElementById("legend");
  legend.style.width = "0";
  legend.style.visibility = "hidden";
}
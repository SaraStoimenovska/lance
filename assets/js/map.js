function onSvgOsbourneLoad() {
  var belowGround = document.getElementById('Below_ground_gas');
  belowGround.style.visibility = 'hidden'
  var aboveGround = document.getElementById('Above_ground_Gas');
  aboveGround.style.visibility = 'hidden'
  var emerganyGasValves = document.getElementById('Emergany_Gas_Isolation_valves');
  emerganyGasValves.style.visibility = 'hidden'
}

function onSvgFalkinLoad() {
  var belowGround = document.getElementById('Below_ground_gas_pipeline');
  belowGround.style.visibility = 'hidden'
  var aboveGround = document.getElementById('Above_ground_gas_pipeline');
  aboveGround.style.visibility = 'hidden'
}
  
  function toggleLayer(id, btn) {
    var element = document.getElementById(id);
    if (element.style.visibility == 'hidden') {
        element.style.visibility = 'visible';
        btn.style.backgroundColor = '#6882a3';
      } else {
        element.style.visibility = 'hidden';
        btn.style.backgroundColor = '#244d7b';
    }
  }

function toggleLegendOn() {
  var toggle = document.getElementById("toggle");
  toggle.style.display = "none";
  var legend = document.getElementById("legend");
  legend.style.display = "flex";
}

function toggleLegendOff() {
  var toggle = document.getElementById("toggle");
  toggle.style.display = "block";
  var legend = document.getElementById("legend");
  legend.style.display = "none";
}
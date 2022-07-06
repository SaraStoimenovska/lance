function onSvgLoad() {
    var belowGround = document.getElementById('Below_ground_gas_pipeline');
    belowGround.style.visibility = 'hidden'
    var aboveGround = document.getElementById('Above_ground_gas_pipeline');
    aboveGround.style.visibility = 'hidden'
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
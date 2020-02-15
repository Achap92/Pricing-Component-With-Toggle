  document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.querySelector('input[type="checkbox"]');
  
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        var bm = document.querySelectorAll("h1.basic-monthly").length;
        var pm = document.querySelectorAll("h1.professional-monthly").length;
        var mm = document.querySelectorAll("h1.master-monthly").length;
  
        for (var i = 0; i < bm; i++) {
          document.getElementsByClassName("basic-annual")[i].classList.add("invisible");
          document.getElementsByClassName("basic-monthly")[i].classList.remove("invisible");
        }

        for (var j = 0; j < pm; j++) {
          document.getElementsByClassName("professional-annual")[j].classList.add("invisible");
          document.getElementsByClassName("professional-monthly")[j].classList.remove("invisible");
        }

        for (var k = 0; k < mm; k++) {
          document.getElementsByClassName("master-annual")[k].classList.add("invisible");
          document.getElementsByClassName("master-monthly")[k].classList.remove("invisible");
        }

      } else {
  
        var bm = document.querySelectorAll("h1.basic-monthly").length;
        var pm = document.querySelectorAll("h1.professional-monthly").length;
        var mm = document.querySelectorAll("h1.master-monthly").length;
  
        for (var i = 0; i < bm; i++) {
          document.getElementsByClassName("basic-annual")[i].classList.remove("invisible");
          document.getElementsByClassName("basic-monthly")[i].classList.add("invisible");
        }

        for (var j = 0; j < pm; j++) {
          document.getElementsByClassName("professional-annual")[j].classList.remove("invisible");
          document.getElementsByClassName("professional-monthly")[j].classList.add("invisible");
        }

        for (var k = 0; k < mm; k++) {
          document.getElementsByClassName("master-annual")[k].classList.remove("invisible");
          document.getElementsByClassName("master-monthly")[k].classList.add("invisible");
        }
      }
    });
  });
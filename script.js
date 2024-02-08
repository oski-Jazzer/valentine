let clickCount = 0;

    function acceptValentine() {
      if (clickCount === 0) {
        window.location.href = "tak.html";
      } else {
        window.location.href = "nie.html";
      }
    }

    function destroyHeart() {
      if (clickCount < 7) {
        clickCount++;
        document.querySelector("#yes-button").style.fontSize = `${46 + clickCount}px`;
        let messages = ["Jesteś tego pewna?", "Będziesz żałować!", "Ranisz moje serce!!", "To boli!!!", "Wiesz co tracisz?", "Na pewno mnie nie chcesz?","Dobra koniec tego"];
        document.getElementById('answer').innerText = messages[clickCount - 1];
        document.querySelector("#destroy-button").style.fontSize = `${13 - clickCount}px`;
      } else {
        window.location.href = "nie.html";
      }
    }
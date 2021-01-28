function pageLoad() {
  // 1. tile - 1 html button alap és clickesemény háttérszín színváltós

  (function setBgColor() {
    document.getElementById("btnchangeColor").style.background =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  })();

  function changeColor() {
    // console.log("sikeres click gombra");
    document.getElementById("btnchangeColor").style.backgroundColor =
      "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  }

  // 2. tile - 1 gomb vanilla js

  (function createOneButton() {
    const DivSelect = document.getElementById("second-tile");
    const button = document.createElement("button");
    button.innerHTML = "2.gomb";
    DivSelect.appendChild(button);
  })();

  // 3. tile - 5 gomb vanilla js -  default háttérszín random

  (function createFiveButton() {
    const btn = [];
    for (let i = 1; i < 6; i++) {
      const button = document.createElement("button");
      button.setAttribute("id", "fiveButtons");
      const DivSelect = document.getElementById("third-tile");
      button.innerHTML = `${i}. gomb`;
      DivSelect.appendChild(button);
      button.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
  })();
  // 4. tile - 5 gomb vanilla js -  onclick eseménnyel

  /*
  function changeColorThirdTile(e) {
    // console.log("sikeres click gombra");
    e.target.document.getElementById("fiveButtons").style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  (function createFourButton() {
    let btn = [];
    for (let i = 1; i < 5; i++) {
      const button = document.createElement("button");
      const DivSelect = document.getElementById("fourth-tile");

      button.style.backgroundColor = Bg;
    }
  })();

const createThreeButton = () => {
  const btn = [];
  let BgColor;
  for (let i = 1; i < 4; i++) {
  BgColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  btn.push(<Button style={{backgroundColor: BgColor}} onClick = {(e) => {
  e.target.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  }
 }/>)
  };
*/
}
window.addEventListener("load", pageLoad);

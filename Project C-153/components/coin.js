AFRAME.registerComponent("coins", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        
        const id = `coins${i}`;
  
    
        const posX = Math.random() * 100 + -50;
        const posY = Math.random() *5 + -5;
        const posZ = Math.random() * 60 + -40;
  
        const position = { x: posX, y: posY, z: posZ };
  
        
        this.createCoins(id, position);
      }
    },
  
    createCoions: function (id, position) {
      const treasureEntity = document.querySelector("#treasureCoins");
      var coinEl = document.createElement("a-entity");
  
      coinEl.setAttribute("id", id);
      coinEl.setAttribute("material", "color", "#ff9100");
      coinEl.setAttribute("position", position);
      coinEl.setAttribute("geometry", { primitive: "circle", radius: 1 });

      coinEl.setAttribute("animation",{
        property: "rotation",
        to : "0 360 0",
        loop : "true",
        dur : 1000
      })
      treasureEntity.appendChild(coinEl)
    }
  });
  
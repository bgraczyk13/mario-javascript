var Engine = {
  init: function () {
    var skyCanvas = document.getElementById("sky-canvas");
    var bgCanvas = document.getElementById("bg-canvas");
    var fgCanvas = document.getElementById("fg-canvas");

    var canvas = {
      skyCanvas: skyCanvas,
      bgCanvas: bgCanvas,
      fgCanvas: fgCanvas,
      skyCtx: skyCanvas.getContext("2d"),
      bgCtx: bgCanvas.getContext("2d"),
      fgCtx: fgCanvas.getContext("2d"),
    };

    var graphics = new Image();
    graphics.src = "img/stylesheet.png";

    graphics.addEventListener("load", function () {
      var graphics = this;
    });

    var data = {
      noFrame: 0,
      canvas: canvas,
      graphics: graphics,
    };

    Objects.init(data);
    Engine.start(data);
  },

  start: function (data) {
    var petla = function () {
      Engine.entry(data);
      Engine.updates(data);
      Engine.render(data);

      data.noFrame++;

      window.requestAnimationFrame(petla);
    };

    petla();
  },

  entry: function (data) {},

  updates: function (data) {
    Animations.update(data);
    Physics.update(data);
  },

  render: function (data) {
    Render.update(data);
  },
};

window.onload = Engine.init();

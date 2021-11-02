var Physics = {
  update: function (data) {
    Physics.tasks.Gravitation(data.objects.mario);
    Physics.tasks.DetectingCollision(data);
  },

  tasks: {
    Gravitation: function (objects) {
      objects.pedY += 1;
      objects.y += objects.pedY;
    },

    DetectingCollision: function (data) {
      var mario = data.objects.mario;

      var DetectingCollision = function (objects) {
        if (
          mario.x < objects.x + objects.w &&
          mario.x + mario.w > objects.x &&
          mario.y < objects.y + objects.h &&
          mario.y + mario.h > objects.y
        ) {
          Physics.tasks.Collision(data, objects);
        }
      };

      data.objects.tableWall.forEach(function (walls) {
        DetectingCollision(walls);
      });
    },

    Collision: function (data, objects) {
      var mario = data.objects.mario;

      if (objects.type === "wall") {
        if (
          mario.y + mario.h > objects.y &&
          mario.x + mario.w > objects.x + 10 &&
          mario.x < objects.x + objects.w - 10 &&
          mario.pedY >= 0
        ) {
          mario.y = objects.y - mario.h;
          mario.pedY = 0;
        }
      }
    },
  },
};

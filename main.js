$(document).ready(function() {

    $("#stopWobb").click(function() {
        $("#wobble").removeClass("wobble");
        console.log("stopped");
    });
    console.log("This is working")


    var stage = new createjs.Stage("makeCircle");

    function init() {
        var circle = new createjs.Shape();
        circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
        circle.x = 100;
        circle.y = 100;
        stage.addChild(circle);
        stage.update();
    }
    $("#drawCircle").click(function() {
        init();
        console.log("I drew a Circle");
    });


    var stageOne, label, shape, oldX, oldY, size, color;

    function initOne() {
        stageOne = new createjs.Stage("fingerPaint");
        stageOne.enableDOMEvents(true);
        label = new createjs.Text("finger paint", "24px Arial");
        label.x = label.y = 10;

        shape = new createjs.Shape();
        stageOne.addChild(shape, label);

        // set up our defaults:
        color = "#0FF";
        size = 2;

        // add handler for stage mouse events:
        stageOne.on("stagemousedown", function(event) {
            size = 10;
        })

        stageOne.on("stagemouseup", function(event) {
            color = createjs.Graphics.getHSL(Math.random() * 360, 100, 50);
            size = 2;
        })


        stageOne.on("stagemousemove", function(evt) {
            if (oldX) {
                shape.graphics.beginStroke(color)
                    .setStrokeStyle(size, "round")
                    .moveTo(oldX, oldY)
                    .lineTo(evt.stageX, evt.stageY);
                stageOne.update();
            }
            oldX = evt.stageX;
            oldY = evt.stageY;
        })

        stageOne.update();
    }
    initOne();

});
$(document).ready(function() {

    var timer;
    // var div = document.createElement('div');
    // var icon = document.createElement('img');
    // div.append("<img id='mouse-icon'>");
    $('#canvas-background').append("<div id='mouse-icon' style='position: absolute'><img src='pict/stamp_mark_star.png'></div>");
    $('#mouse-icon').hide();

    $('#canvas-background').hover(function(e) {
            $('#mouse-icon').show();

            $(document).mousemove(function(event) {
                // $('#stamppad-canvas').mousemove(function(event) {
                // clearTimeout(timer);
                timer = setTimeout(function() {
                    clearTimeout(timer);
                    var w = $('#mouse-icon').width();
                    var h = $('#mouse-icon').height();
                    // console.log(w + ' ' + h);

                    var px = event.pageX - w / 2;
                    var py = event.pageY - h / 2;

                    $('#mouse-icon').css({
                        left: px,
                        top: py
                    });

                    var box = $('#canvas-background');
                    var pos = box.position();

                    var x1 = pos.left,
                        x2 = pos.left + box.width(),
                        y1 = pos.top,
                        y2 = pos.top + box.height();

                    if (px >= x1 && px <= x2 && py >= y1 && py <= y2) {
                        // console.log('in');
                        $('#mouse-icon').show();
                    } else {
                        // console.log('out');
                        clearTimeout(timer);
                        $('#mouse-icon').hide();
                    }

                }, 1);

            });
        },
        function() {
            clearTimeout(timer);
            $('#mouse-icon').hide();
        });



    //clickable
    $("img[stamper='star']").click(function() {
        $('#mouse-icon img').attr('src', 'pict/stamp_mark_star.png');
    });

    $("img[stamper='heart']").click(function() {
        $('#mouse-icon img').attr('src', 'pict/stamp_mark_heart.png');
    });

    $("img[stamper='mickey']").click(function() {
        $('#mouse-icon img').attr('src', 'pict/stamp_mark_mickey.png');
    });

    $("img[stamper='paw']").click(function() {
        $('#mouse-icon img').attr('src', 'pict/stamp_mark_paw.png');
    });

    $("img[stamper='crown']").click(function() {
        $('#mouse-icon img').attr('src', 'pict/stamp_mark_crown.png');
    });

    //stamp
    $('#mouse-icon').click(function(event) {

        var src = $('#mouse-icon img').attr('src');
        console.log(src);

        var w = $('#mouse-icon').width();
        var h = $('#mouse-icon').height();
        // console.log(w + ' ' + h);

        var px = event.pageX - w / 2;
        var py = event.pageY - h / 2;

        $('#mouse-icon').before("<div style='position: absolute; left:" + px + "px;     top:" + py + "px'" + "'><img src='" + src +
            "'></div>");


    });
});
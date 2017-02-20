//���������canvas������ֵ...
function windowToCanvas(canvas, clientX, clientY) {
    var boundingRect = canvas.getBoundingClientRect();
    return {
        //����x-boundingRect��x
        x: (clientX - boundingRect.left) / (boundingRect.width / canvas.width), //boundingRect.width/canvas.width���ǷŴ�ı���
        y: (clientY - boundingRect.top) / (boundingRect.height / canvas.height)
    }

}

//���ݽǶȷ��ػ���...
function degreeToRad(degree) {
    var rad = degree * Math.PI / 180;
    return rad;
}

//������
function drawSolidGrid(ctx, step) {
    ctx.save();
    ctx.strokeStyle = 'lightgray';
    ctx.lineWidth = 0.5;
    for (var i = step + 0.5; i < canvas.width; i += step) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
    }
    for (var i = step + 0.5; i < canvas.height; i += step) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
    }
    ctx.restore();
}


//����ͻָ��滭����
function saveDrawingSurface(canvas, ctx) {
    drawingSurfaceImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
}

function restoreDrawingSurface(ctx) {
    ctx.putImageData(drawingSurfaceImageData, 0, 0);
}


//��������xy
function drawGuidewires(canvas, ctx, x, y) {
    ctx.save();
    ctx.strokeStyle = 'rgba(0,0,230,0.4)';
    ctx.lineWidth = 0.5;
    drawHorizontalLine(y);
    drawVerticalLine(x);
    ctx.restore();


    function drawHorizontalLine(y) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }

    function drawVerticalLine(x) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
}
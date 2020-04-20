let canvas, ctx;

document.addEventListener('DOMContentLoaded', ()=>{
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = 700;
    canvas.height = 1000;
    ctx.fillStyle = 'cornflowerblue';
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 2;
    ctx.textAlign = 'start';
    ctx.font = 'normal 30px Arial';
    drawGrid(100);
    
    let x = 100;
    let y = 100;

//Aksi1
    //Badan
    //Kotak

    ctx.save();
    ctx.beginPath();
    ctx.translate(100, 300);
    ctx.rect(0,0,100,100)
    ctx.fillStyle = 'salmon';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Tangan
    //Kiri 
    ctx.save();
    ctx.beginPath();
    ctx.translate(100, 300);
    ctx.rotate(Math.PI*-11/8);        //3.14 radians 180 deg
    ctx.rect(0,0,100,25)
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Kanan
    ctx.save();
    ctx.beginPath();
    ctx.translate(200, 300);
    ctx.rotate(Math.PI*3/8);        //3.14 radians 180 deg
    ctx.rect(0,0,100,-25)
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Muka
    //Mata Kiri
    ctx.save();
    ctx.beginPath();
    ctx.translate(125, 325)
    ctx.scale(1,1)
    ctx.arc(0, 0, 15, 0, Math.PI*2);
    ctx.fillStyle = 'gold';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Mata Kanan
    ctx.save();
    ctx.beginPath();
    ctx.translate(175, 325)
    ctx.scale(1,1)
    ctx.arc(0, 0, 15, 0, Math.PI*2);
    ctx.fillStyle = 'gold';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Bandul
    //Bola
    //Bola
    ctx.save();
    ctx.beginPath();
    ctx.translate(150,0)
    ctx.rotate(Math.PI*6/8); 
    ctx.arc(200, 0, 40, 0, Math.PI*2);
    ctx.fillStyle = 'gold';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Tali
    ctx.save();
    ctx.beginPath();
    ctx.translate(150, 0);
    ctx.rotate(Math.PI*6/8);        //3.14 radians 180 deg
    ctx.rect(0,0,200,5)
    ctx.fillStyle = 'gold';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Penyangga
    ctx.save();
    ctx.beginPath();
    ctx.arc(150, 0, 25, 0, Math.PI);
    ctx.fill();
    ctx.closePath();
    ctx.restore();


//Aksi2
    //Badan
    //Kotak

    ctx.save();
    ctx.beginPath();
    ctx.translate(500, 280);
    ctx.rect(0,0,100,100)
    ctx.fillStyle = 'salmon';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Tangan
    //Kiri 
    ctx.save();
    ctx.beginPath();
    ctx.translate(500, 280);
    ctx.rotate(Math.PI*-9/8);        //3.14 radians 180 deg
    ctx.rect(0,0,100,25)
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Kanan
    ctx.save();
    ctx.beginPath();
    ctx.translate(600, 280);
    ctx.rotate(Math.PI*1/8);        //3.14 radians 180 deg
    ctx.rect(0,0,100,-25)
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Muka
    //Mata Kiri
    ctx.save();
    ctx.beginPath();
    ctx.translate(525, 305)
    ctx.scale(1,1)
    ctx.arc(0, 0, 15, 0, Math.PI*2);
    ctx.fillStyle = 'gold';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Mata Kanan
    ctx.save();
    ctx.beginPath();
    ctx.translate(575, 305)
    ctx.scale(1,1)
    ctx.arc(0, 0, 15, 0, Math.PI*2);
    ctx.fillStyle = 'gold';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Bandul
    //Bola
    ctx.save();
    ctx.beginPath();
    ctx.translate(550,0)
    ctx.rotate(Math.PI*4/8); 
    ctx.arc(200, 0, 40, 0, Math.PI*2);
    ctx.fillStyle = 'gold';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Tali
    ctx.save();
    ctx.beginPath();
    ctx.translate(550, 0);
    ctx.rotate(Math.PI*4/8);        //3.14 radians 180 deg
    ctx.rect(0,0,200,5)
    ctx.fillStyle = 'gold';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Penyangga
    ctx.save();
    ctx.beginPath();
    ctx.arc(550, 0, 25, 0, Math.PI);
    ctx.fill();
    ctx.closePath();
    ctx.restore();



//Aksi3
    //Badan
    //Kotak

    ctx.save();
    ctx.beginPath();
    ctx.translate(100, 760);
    ctx.rect(0,0,100,100)
    ctx.fillStyle = 'salmon';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Tangan
    //Kiri 
    ctx.save();
    ctx.beginPath();
    ctx.translate(100, 760);
    ctx.rotate(Math.PI*-7/8);        //3.14 radians 180 deg
    ctx.rect(0,0,100,25)
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Kanan
    ctx.save();
    ctx.beginPath();
    ctx.translate(200, 760);
    ctx.rotate(Math.PI*-1/8);        //3.14 radians 180 deg
    ctx.rect(0,0,100,-25)
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Muka
    //Mata Kiri
    ctx.save();
    ctx.beginPath();
    ctx.translate(125, 785)
    ctx.scale(1,1)
    ctx.arc(0, 0, 15, 0, Math.PI*2);
    ctx.fillStyle = 'gold';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Mata Kanan
    ctx.save();
    ctx.beginPath();
    ctx.translate(175, 785)
    ctx.scale(1,1)
    ctx.arc(0, 0, 15, 0, Math.PI*2);
    ctx.fillStyle = 'gold';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Bandul
    //Bola
    //Bola
    ctx.save();
    ctx.beginPath();
    ctx.translate(150,500)
    ctx.rotate(Math.PI*2/8); 
    ctx.arc(200, 0, 40, 0, Math.PI*2);
    ctx.fillStyle = 'gold';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Tali
    ctx.save();
    ctx.beginPath();
    ctx.translate(150, 500);
    ctx.rotate(Math.PI*2/8);        //3.14 radians 180 deg
    ctx.rect(0,0,200,5)
    ctx.fillStyle = 'gold';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Penyangga
    ctx.save();
    ctx.beginPath();
    ctx.arc(150, 500, 25, 0, Math.PI);
    ctx.fill();
    ctx.closePath();
    ctx.restore();


//Aksi4
    //Badan
    //Kotak

    ctx.save();
    ctx.beginPath();
    ctx.translate(500, 750);
    ctx.rect(0,0,100,100)
    ctx.fillStyle = 'salmon';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Tangan
    //Kiri 
    ctx.save();
    ctx.beginPath();
    ctx.translate(500, 750);
    ctx.rotate(Math.PI*11/8);        //3.14 radians 180 deg
    ctx.rect(0,0,100,25)
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Kanan
    ctx.save();
    ctx.beginPath();
    ctx.translate(600, 750);
    ctx.rotate(Math.PI*-3/8);        //3.14 radians 180 deg
    ctx.rect(0,0,100,-25)
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Muka
    //Mata Kiri
    ctx.save();
    ctx.beginPath();
    ctx.translate(525, 775)
    ctx.scale(1,-1)
    ctx.arc(0, 0, 15, 0, Math.PI);
    ctx.fillStyle = 'gold';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Mata Kanan
    ctx.save();
    ctx.beginPath();
    ctx.translate(575, 775)
    ctx.scale(1,-1)
    ctx.arc(0, 0, 15, 0, Math.PI);
    ctx.fillStyle = 'gold';
    ctx.fill();
    ctx.closePath();
    ctx.restore();


    //Bandul
    //Bola
    ctx.save();
    ctx.beginPath();
    ctx.translate(550,500)
    ctx.rotate(Math.PI*4/8); 
    ctx.arc(200, 0, 40, 0, Math.PI*2);
    ctx.fillStyle = 'gold';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Tali
    ctx.save();
    ctx.beginPath();
    ctx.translate(550, 500);
    ctx.rotate(Math.PI*4/8);        //3.14 radians 180 deg
    ctx.rect(0,0,200,5)
    ctx.fillStyle = 'gold';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Penyangga
    ctx.save();
    ctx.beginPath();
    ctx.arc(550, 500, 25, 0, Math.PI);
    ctx.fill();
    ctx.closePath();
    ctx.restore();


//Angka
    //Satu
    ctx.save();
    ctx.beginPath();
    ctx.translate(150,450)
    ctx.fillText('1.', 0, 0);
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Dua
    ctx.save();
    ctx.beginPath();
    ctx.translate(550,450)
    ctx.fillText('2.', 0, 0);
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Tiga
    ctx.save();
    ctx.beginPath();
    ctx.translate(150,950)
    ctx.fillText('3.', 0, 0);
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Empat
    ctx.save();
    ctx.beginPath();
    ctx.translate(550,950)
    ctx.fillText('4.', 0, 0);
    ctx.fill();
    ctx.closePath();
    ctx.restore();




  //pustaka : https://www.youtube.com/watch?v=BqCPrkWzl-E
  
    
});

function drawGrid(gap){
    ctx.beginPath();
    for(x=gap; x<canvas.width; x=x+gap){
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
    }
    for(let y=gap; y<canvas.height; y=y+gap){
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.height, y);
    }
    ctx.stroke();
    ctx.closePath();
}
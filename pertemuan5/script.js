// let txt = document.getElementById("text");

// txt.innerHTML = "Selamat Sore!";

let tex = $("#txt")


$(document).ready(function(){
    $('#btn').click(function(){
        tex.text("Hello World!")
    })

    $('#btn1').click(function(){
        $('ol').hide()
    })

    $('#btn2').click(function(){
        $('ol').show()
    })

    $('#btn3').click(function(){
        $('ol').toggle()
    })

    $('#btn4').click(function(){
        $('ol li:last').append("<li>data anyar</li>")
    })

    $('#btn5').click(function(){
        $('ol li:last').remove()
    })

    $('#fadein').click(function(){
        $('#div1').fadeIn();
        $('#div2').fadeIn("slow");
        $('#div3').fadeIn(3000);
    })

    $('#fadeout').click(function(){
        $('#div1').fadeOut();
        $('#div2').fadeOut("slow");
        $('#div3').fadeOut(3000);
    })

    $('#fadetoggle').click(function(){
        $('#div1').fadeToggle();
        $('#div2').fadeToggle("slow");
        $('#div3').fadeToggle(3000);
    })
    // tex.innerHTML = "Selamat Sore!"
    
})

(function(){

    const kolo = document.querySelector('.kolo');
    const przycisk = document.querySelector('.btSpin');
    let deg = 0; 
    
    przycisk.addEventListener('click', () => {
    
        przycisk.style.pointerEvents = 'none';
    
        deg = Math.floor(5000 + Math.random() * 5000);
    
        kolo.style.transition = 'all 10s ease';
        kolo.style.transform = `rotate(${deg}deg)`; 
    });
    
    kolo.addEventListener('transitionend', () => {
        

        przycisk.style.pointerEvents = 'auto';

        kolo.style.transition = 'none';

        const actualDeg = deg % 360;
        kolo.style.transform = `rotate(${actualDeg}deg)`; 
        
        var element = document.getElementById("wynik");
        var kolor = document.getElementById("inp");

        if (actualDeg>=0 && actualDeg<10 ){
            document.getElementById("wynik").innerHTML="26 BLACK";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            if(document.getElementById("czarny").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }

        }
        if (actualDeg>=10 && actualDeg<20 ){
            document.getElementById("wynik").innerHTML="3 RED";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            if(document.getElementById("czerwony").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=20 && actualDeg<30 ){
            document.getElementById("wynik").innerHTML="35 BLACK";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            if(document.getElementById("czarny").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=30 && actualDeg<39 ){
            document.getElementById("wynik").innerHTML="12 RED";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            if(document.getElementById("czerwony").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=39 && actualDeg<49 ){
            document.getElementById("wynik").innerHTML="28 BLACK";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            if(document.getElementById("czarny").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=49 && actualDeg<59 ){
            document.getElementById("wynik").innerHTML="7 RED";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            if(document.getElementById("czerwony").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=59 && actualDeg<69 ){
            document.getElementById("wynik").innerHTML="29 BLACK";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            if(document.getElementById("czarny").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=69 && actualDeg<78 ){
            document.getElementById("wynik").innerHTML="18 RED";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            if(document.getElementById("czerwony").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=78 && actualDeg<88 ){
            document.getElementById("wynik").innerHTML="22 BLACK";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            if(document.getElementById("czarny").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=88 && actualDeg<98 ){
            document.getElementById("wynik").innerHTML="9 RED";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            if(document.getElementById("czerwony").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=98 && actualDeg<107 ){
            document.getElementById("wynik").innerHTML="31 BLACK";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            if(document.getElementById("czarny").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=107 && actualDeg<117 ){
            document.getElementById("wynik").innerHTML="14 RED";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            if(document.getElementById("czerwony").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=117 && actualDeg<127 ){
            document.getElementById("wynik").innerHTML="20 BLACK";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            if(document.getElementById("czarny").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=127 && actualDeg<137 ){
            document.getElementById("wynik").innerHTML="1 RED";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            if(document.getElementById("czerwony").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=137 && actualDeg<146 ){
            document.getElementById("wynik").innerHTML="33 BLACK";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            if(document.getElementById("czarny").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=146 && actualDeg<156 ){
            document.getElementById("czerwony").innerHTML="16 RED";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            if(document.getElementById("czarny").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=156 && actualDeg<166 ){
            document.getElementById("wynik").innerHTML="24 BLACK";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            if(document.getElementById("czarny").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=166 && actualDeg<176 ){
            document.getElementById("wynik").innerHTML="5 RED";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            if(document.getElementById("czerwony").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=176 && actualDeg<185 ){
            document.getElementById("wynik").innerHTML="10 BLACK";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            if(document.getElementById("czarny").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=185 && actualDeg<195 ){
            document.getElementById("wynik").innerHTML="23 RED";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            if(document.getElementById("czerwony").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=195 && actualDeg<205 ){
            document.getElementById("wynik").innerHTML="8 BLACK";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            if(document.getElementById("czarny").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=205 && actualDeg<215 ){
            document.getElementById("wynik").innerHTML="30 RED";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            if(document.getElementById("czerwony").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=215 && actualDeg<224 ){
            document.getElementById("wynik").innerHTML="11 BLACK";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            if(document.getElementById("czarny").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=224 && actualDeg<234 ){
            document.getElementById("wynik").innerHTML="36 RED";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            if(document.getElementById("czerwony").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=234 && actualDeg<244 ){
            document.getElementById("wynik").innerHTML="13 BLACK";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            if(document.getElementById("czarny").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=244 && actualDeg<253 ){
            document.getElementById("wynik").innerHTML="21 RED";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            if(document.getElementById("czerwony").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=253 && actualDeg<263 ){
            document.getElementById("wynik").innerHTML="6 BLACK";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            if(document.getElementById("czarny").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=263 && actualDeg<273 ){
            document.getElementById("wynik").innerHTML="34 RED";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            if(document.getElementById("czerwony").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=273 && actualDeg<283 ){
            document.getElementById("wynik").innerHTML="17 BLACK";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            if(document.getElementById("czarny").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=283 && actualDeg<292 ){
            document.getElementById("wynik").innerHTML="25 RED";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            if(document.getElementById("czerwony").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=292 && actualDeg<302 ){
            document.getElementById("wynik").innerHTML="2 BLACK";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            if(document.getElementById("czarny").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=302 && actualDeg<312 ){
            document.getElementById("wynik").innerHTML="21 RED";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            if(document.getElementById("czerwony").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=312 && actualDeg<322 ){
            document.getElementById("wynik").innerHTML="4 BLACK";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            if(document.getElementById("czarny").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=322 && actualDeg<331 ){
            document.getElementById("wynik").innerHTML="19 RED";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            if(document.getElementById("czerwony").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=331 && actualDeg<341 ){
            document.getElementById("wynik").innerHTML="15 BLACK";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            if(document.getElementById("czarny").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
         }
        if (actualDeg>=341 && actualDeg<350 ){
            document.getElementById("wynik").innerHTML="32 RED";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            if(document.getElementById("czerwony").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }
        if (actualDeg>=350 && actualDeg<360 ){
            document.getElementById("wynik").innerHTML="0 GREEN";
            element.classList.remove("black");
            element.classList.remove("red");
            element.classList.add("green");
            if(document.getElementById("zielony").checked == true)
            {
                document.getElementById("wynik").innerHTML+=" - Wygrałeś!";
            }
            else
            {
                document.getElementById("wynik").innerHTML+=" - Przegrałeś";
            }
        }


    });
    
})();
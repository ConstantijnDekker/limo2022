var sponsoren = [
    ["Vrije Universiteit Amsterdam", "http://bachelors.vu.nl/nl/opleidingen/wiskunde/index.aspx"],
    ["Transtrend", "http://www.transtrend.com/nl/"],
    ["Universiteit Utrecht", "https://www.uu.nl/bachelors/wiskunde"],
    ["KNAW", "https://www.knaw.nl/"],
    ["Universiteit Leiden", "http://www.studereninleiden.nl/studies/info/wiskunde/"],
    ["ASML", "https://www.asml.com/asml/en/s427"],
    ["TU Eindhoven", "https://www.tue.nl/en/university/departments/mathematics-and-computer-science/education/undergraduate-programs/applied-mathematics/"],
    ["DIAMANT", "http://websites.math.leidenuniv.nl/diamant/"],
    ["TU Delft", "http://www.tudelft.nl/studeren/bacheloropleidingen/overzicht-opleidingen/technische-wiskunde/"],
    ["Optiver", "http://www.optiver.com/"],
    ["Universiteit van Amsterdam", "http://www.uva.nl/onderwijs/bachelor/bacheloropleidingen/content/wiskunde/wiskunde.html"],
    ["Radboud Universiteit Nijmegen", "http://www.ru.nl/opleidingen/bachelor/wiskunde/"],
    ["WONDER", "http://web.science.uu.nl/WONDER/"],
    ["Rijksuniversiteit Groningen", "http://www.rug.nl/bachelors/mathematics/"],
    ["GQT", "http://www.gqt.nl/"],
    ["KHMW", "http://www.khmw.nl/"]


];
var n = sponsoren.length;
var imgstart = Math.floor(Math.random() * n);

setInterval(imgs, 30000);
setTimeout(veranderimgs, 0);

function imgs()
{
    veranderDoorzichtigheid(0);
    setTimeout(veranderimgs, 500);
    setTimeout(veranderDoorzichtigheid, 500, 1);
}

function veranderDoorzichtigheid(d)
{
    for (i = 0; i < 7; i++)
    {
        document.getElementById("sponsurl"+i).style.opacity = d;
    }
}

function veranderimgs()
{
    for (i = 0; i < 7; i++)
    {
        document.getElementById("sponsurl"+i).href = sponsoren[imgstart%n][1];
        document.getElementById("sponsimg"+i).src = "img/logos/"+sponsoren[imgstart%n][0]+".png";
        document.getElementById("sponsimg"+i).title = sponsoren[imgstart%n][0];
        imgstart++;
    }
}
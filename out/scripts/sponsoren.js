var sponsoren = [
	["ASML", "https://www.asml.com/careers/"],
	["FlowTraders", "https://www.flowtraders.com/"],
	["Digital Capability Company", "http://www.thedigitalcapabilitycompany.com/"],
    ["Vrije Universiteit Amsterdam", "http://bachelors.vu.nl/nl/opleidingen/wiskunde/index.aspx"],
    ["Transtrend", "http://www.transtrend.com/nl/"],
    ["Universiteit Utrecht", "https://www.uu.nl/bachelors/wiskunde"],
    ["Universiteit Leiden", "http://www.studereninleiden.nl/studies/info/wiskunde/"],
    ["TU Eindhoven", "https://www.tue.nl/en/university/departments/mathematics-and-computer-science/education/undergraduate-programs/applied-mathematics/"],
    ["TU Delft", "http://www.tudelft.nl/studeren/bacheloropleidingen/overzicht-opleidingen/technische-wiskunde/"],
    ["Optiver", "http://www.optiver.com/"],
    ["Universiteit van Amsterdam", "http://www.uva.nl/onderwijs/bachelor/bacheloropleidingen/content/wiskunde/wiskunde.html"],
    ["Radboud Universiteit Nijmegen", "http://www.ru.nl/opleidingen/bachelor/wiskunde/"],
    ["Rijksuniversiteit Groningen", "http://www.rug.nl/bachelors/mathematics/"],
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
		console.log(imgstart % n)
		console.log(sponsoren)
		console.log(sponsoren[imgstart % n])
		document.getElementById("sponsurl"+i).href = sponsoren[imgstart%n][1];
        document.getElementById("sponsimg"+i).src = "img/logos/"+sponsoren[imgstart%n][0]+".png";
        document.getElementById("sponsimg"+i).title = sponsoren[imgstart%n][0];
        imgstart++;
    }
}
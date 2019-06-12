
//kobler til HTML
const main = document.querySelector("main");
const db = firebase.database();
const messe = db.ref("Deltagere");

function genererHTML(snap){
  let messe = snap.val();
  let key = snap.key;
  main.innerHTML +=`
    <div class="innhold">

      <h1>${messe.navn}</h1>
      <p>Adresse:${messe.adresse}</p>
      <p>Type kjøretøy:${messe.type}</p>
      <p>Ønsket plass:${messe.plass}</p>
      <p>Tlf:${snap.key}</p>
      <a href="messeDetaljer.html?id=${key}"> Detaljer </a>
    </div>
`
}
//on er en spørring, her på alt sammen. Sender resultatet til funksjonen genererHTML
messe.on("child_added",genererHTML);


<script src="Kladd.js"></script>
Select - .on - spørring
Insert - set -
Deltet - remove
Update - .on
 (sql)    (javascript)

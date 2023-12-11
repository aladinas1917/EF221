// forma.js

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('forma');
  const formResultsDiv = document.getElementById('formResults');

  const duomenys = {};
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    duomenys.vardas = form.querySelector('input[name="vardas"]').value;
    duomenys.pavarde = form.querySelector('input[name="pavarde"]').value;
    duomenys.emailas = form.querySelector('input[name="emailas"]').value;
    duomenys.telefonas = form.querySelector('input[name="telefonas"]').value;
    duomenys.salis = form.querySelector('input[name="salis"]').value;
    duomenys.miestas = form.querySelector('input[name="miestas"]').value;
    duomenys.gatve = form.querySelector('input[name="gatve"]').value;
    duomenys.namobutonumeris = form.querySelector('input[name="namobutonumeris"]').value;
    duomenys.pastokodas = form.querySelector('input[name="pastokodas"]').value;
    duomenys.gimimodata = form.querySelector('input[name="gimimodata"]').value;
    duomenys.mokykla = form.querySelector('input[name="mokykla"]').value;
    duomenys.atlyginimas = Number(form.querySelector('input[name="atlyginimas"]').value);
    duomenys.atlyginimas1 = Number(form.querySelector('input[name="atlyginimas1"]').value);
    duomenys.atlyginimas2 = Number(form.querySelector('input[name="atlyginimas2"]').value);

    let atlyginimoVidurkis = (duomenys.atlyginimas + duomenys.atlyginimas1 + duomenys.atlyginimas2) / 3;

    if (duomenys.atlyginimas1 === 0) {
      atlyginimoVidurkis = (duomenys.atlyginimas + duomenys.atlyginimas2) / 2;
    }

    atlyginimoVidurkis = Math.round(atlyginimoVidurkis, 2);

    console.log('Vardas:', duomenys.vardas);
    console.log('Pavardė:', duomenys.pavarde);
    console.log('Elektroninis paštas:', duomenys.emailas);
    console.log('Telefono numeris:', duomenys.telefonas);
    console.log('Gimimo data:', duomenys.gimimodata);
    console.log('Mokyklos pabaigimo metai:', duomenys.mokykla);
    console.log('Pageidaujamas atlyginimas:', duomenys.atlyginimas);
    console.log('Preaitas atlyginimas:', duomenys.atlyginimas);
    console.log('Didžiausias atlyginimas:', duomenys.atlyginimas);

    Adresas = (duomenys.salis + ', ' + duomenys.miestas + ', ' + duomenys.gatve + ' ' + duomenys.namobutonumeris + ', ' + duomenys.pastokodas)
    console.log('Adresas: ', Adresas);

    form.reset();

    formResultsDiv.innerHTML = `
      <p><span class="spanasforma">Vardas</span>: ${duomenys.vardas}</p>
      <p><span class="spanasforma">Pavardė</span>: ${duomenys.pavarde}</p>
      <p><span class="spanasforma">Elektroninis paštas</span>: ${duomenys.emailas}</p>
      <p><span class="spanasforma">Telefono numeris</span>: ${duomenys.telefonas}</p>
      <p><span class="spanasforma">Gimimo data</span>: ${duomenys.gimimodata}</p>
      <p><span class="spanasforma">Mokyklos pabaigimo metai</span>: ${duomenys.mokykla}</p>
      <p><span class="spanasforma">Pageidaujamas atlyginimas</span>: ${duomenys.atlyginimas}</p>
      <p><span class="spanasforma">Praeitas atlyginimas</span>: ${duomenys.atlyginimas1}</p>
      <p><span class="spanasforma">Didžiausias atlyginimas</span>: ${duomenys.atlyginimas2}</p>
      <p><span class="spanasforma">Adresas</span>: ${Adresas}</p>
      <br><br>
      <p><span class="spanasforma">Duomenys</span>: ${duomenys.vardas} ${duomenys.pavarde} (${duomenys.emailas}) : ${atlyginimoVidurkis} $</p>
    `;
  });
});
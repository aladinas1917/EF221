// forma.js
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('forma');
  const formResultsDiv = document.getElementById('formResults');
  const duomenys = {};
  form.addEventListener('submit', function(e) {
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

      let emailasyr = '0';
      let telefonasyr = '0';
      let adresasyr = '0';
      
      if (!duomenys.emailas.includes('@') || !duomenys.emailas.includes('.')) {
        console.log('Netinkamas el. pašto formatas');
        emailasyr = '1';
    }
      
      if (duomenys.telefonas.length !== 12) {
          console.log('Telefono numeris netinkamas');
          telefonasyr = '1';
      }
      
      if (!duomenys.salis || !duomenys.miestas || !duomenys.gatve || !duomenys.namobutonumeris || !duomenys.pastokodas) {
          console.log('Netinkamas adreso formatas');
          adresasyr = '1';
      }
      
      if (adresasyr === '1' && emailasyr === '1' && telefonasyr === '1') {
          alert("Netinkamas telefono numeris, adresas ir elektroninis paštas");
          return;
      } else if (adresasyr === '1' && emailasyr === '1') {
          alert("Netinkamas adresas ir elektroninis paštas");
          return;
      } else if (emailasyr === '1' && telefonasyr === '1'){
          alert("Netinkamas elektronins paštas ir telefono numeris");
          return;
      } else if (adresasyr === '1' && telefonasyr === '1'){
          alert("Netinkamas adresas ir telefono numeris");
          return;
      } else if (adresasyr === '1'){
          alert("Netinkamas adresas");
          return;
      } else if(emailasyr === '1'){
          alert("Netinkamas elektroninis paštas");
          return;
        } else if (telefonasyr === '1'){
          alert("Netinkamas telefono numeris");
          return;
        }
      
      duomenys.adresas = `${duomenys.salis}, ${duomenys.miestas}, ${duomenys.gatve} ${duomenys.namobutonumeris}, ${duomenys.pastokodas}`;
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

    Adresas = (duomenys.salis + ', ' + duomenys.miestas + ', ' + duomenys.gatve + ' ' + duomenys.namobutonumeris + ', ' + duomenys.pastokodas);
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
      <p><span class="spanasforma">Duomenys</span>: <span class=raudona>${duomenys.vardas} ${duomenys.pavarde}</span> <span class=oranzine>(${duomenys.emailas})</span> : <span class=zalia>${atlyginimoVidurkis} $</span></p>
    `;
  });
});
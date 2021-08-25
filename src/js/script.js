selectElement('#searchForm').addEventListener('submit', async evt => {
  try {
    debugger;
    evt.preventDefault();

    const name = selectElement('#searchInputName')
                        .value
                        .trim()
                        .toUpperCase()
                        .replace(/ /g, '+');

    const getFilesUrl = `http://127.0.0.1:3000/files?name=${name}`;

    const response = await fetch(getFilesUrl);

    const bodyData = await response.json(); 

    if (response.status != 200) {
      throw bodyData;
    } else if (!bodyData.length) {
      throw { error: 'Arquivo não encontrado' };
    }

    selectElement('#tableBody').innerHTML = '';
    selectElement('#table').setAttribute('style', 'display: none');

    bodyData.forEach(file => {
      selectElement('#tableBody').innerHTML += `
			  <div class="table__row">
				  <p>${file.number}</p>
					<p>${file.name}</p>
					<p>${file.box}</p>
					<p align="center"><a href=""><i class="far fa-edit"></i></a></p>
				</div>
      `;
    });

    $('#table').fadeIn('slow');
  } catch (e) {
    alert(e.error);
  }
});

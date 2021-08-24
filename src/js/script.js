selectElement('#searchForm').addEventListener('submit', async evt => {
  try {
    evt.preventDefault();

    const searchValue = selectElement('#searchInput')
                        .value
                        .toUpperCase()
                        .replace(/ /g, '+');

    const getFilesUrl = `http://127.0.0.1:3000/files?name=${searchValue}`;

    const response = await fetch(getFilesUrl);

    if (response.status != 200) {
      throw await response.json();
    }

    const data = await response.json(); 

    selectElement('#tableBody').innerHTML = '';

    data.forEach(file => {
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
    console.log(e.error);
  }
});

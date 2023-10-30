const form = document.querySelector('#urlForm');
const urlInput = document.querySelector('#urlInput');
const analyzeButton = document.querySelector('#analyzeButton');
const table = document.querySelector('.meta-table');

analyzeButton.addEventListener('click', () => {

  const url = urlInput.value; 

  fetch('analyze-meta.php', {
    method: 'POST', 
    body: JSON.stringify({url})
  })
  .then(res => res.json())
  .then(data => {

    const headerRow = document.createElement('tr');

    const header1 = document.createElement('th');
    header1.textContent = 'Meta Tag';

    const header2 = document.createElement('th'); 
    header2.textContent = 'Content';

    headerRow.appendChild(header1);
    headerRow.appendChild(header2);

    table.appendChild(headerRow); 

    for (const metaTag in data.meta) {
      
      const row = document.createElement('tr');

      const nameCell = document.createElement('td');
      const contentCell = document.createElement('td');

      nameCell.textContent = metaTag;
      contentCell.textContent = data.meta[metaTag];

      row.appendChild(nameCell);
      row.appendChild(contentCell);

      table.appendChild(row);

    }

  })
  .catch(err => {
    console.error('Error:', err);
  });

});
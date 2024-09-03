function downloadCSV() {
  const data =  [
    {name: 'Alice', age: 30, city: 'New York'},
    {name: 'Bob', age: 25, city: 'San Francisco'},
    {name: 'Charlie', age: 35, city: 'Los Angeles'}
  ];

  const jsonData = JSON.stringify(data);
  let arrData = JSON.parse(jsonData);
  console.log('--func--jsonData: ', jsonData);
  console.log('--func--arrData: ', arrData);


  let CSV = '';
  // CSV += "IVR채널" + '\r\n\n';

  let row = "";
  for (let index in arrData[0]) {
    row += index + ',';
  }
  console.log('--func--row: ', row);
  row = row.slice(0, -1);
  CSV += row + '\r\n';

  for (let i = 0; i < arrData.length; i++) {
    let row = "";
    for (let index in arrData[i]) {
      row += '"' + arrData[i][index] + '",';
    }

    row.slice(0, row.length - 1);
    CSV += row + '\r\n';
  }

  if (CSV == '') {
    alert("Invalid data");
    return;
  }

  let fileName = "jsonToCsV";
  // fileName += "IVR채널".replace(/ /g, "_");

  //Initialize file format you want csv or xls
  let uri = 'data:text/csv;charset=utf-8,' + encodeURI(CSV);

  let link = document.createElement("a");
  link.href = uri;
  link.style = "visibility:hidden";
  link.download = fileName + ".csv";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function aa() {

  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더합니다.
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

// 원하는 형식으로 포맷
  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  console.log(formattedDate); // e.g., "2024-09-03 15:24:30"
}

aa();


function bbbb() {
  // document.getElementById('downloadCsv').addEventListener('click', () => {
  console.log('--func--bbbb: ');
  const jsonData = [
    {name: 'Alice', age: 30, city: 'New York'},
    {name: 'Bob', age: 25, city: 'San Francisco'},
    {name: 'Charlie', age: 35, city: 'Los Angeles'}
  ];

  // Convert JSON to CSV
  const {parse} = window.json2csv;
  const csv = parse(jsonData);
  console.log('--func--csv: ', csv);

  // Create a downloadable link
  const blob = new Blob([csv], {type: 'text/csv'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'output.csv';
  a.click();
  URL.revokeObjectURL(url);
  // });
}



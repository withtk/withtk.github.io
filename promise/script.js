
const dum1 = [
  { id: 1, parentId: 6, name:'1111' },
  { id: 2, parentId: 5 , name:'2222'},
  { id: 3, parentId: 2, name:'3333' },
  { id: 4, parentId: 1 , name:'4444'},
  { id: 5, parentId: null, name:'5555' },
  { id: 6, parentId: 2 , name:'6666'},
];

function createTree3() {
  const data = dum1;
  const map = data.reduce((acc, node) => {
    acc[node.id] = { ...node, children: [] };
    return acc;
  }, {});

  // const tree = [];
  let result = {}
  data.forEach((node) => {
    if (node.parentId && map[node.parentId]) {
      map[node.parentId].children.push(map[node.id]);
    } else {
      // tree.push(map[node.id]);
      result = map[node.id]
    }
  });

  console.log('--func--result: ', result);
  document.getElementById('result').innerText = JSON.stringify(result, null, 2);
  document.getElementById('btn1').hidden = true;
  document.getElementById('btn2').hidden = false;
}

function reset(){
  document.getElementById('result').innerText = JSON.stringify(dum1, null, 2);
  document.getElementById('btn1').hidden = false;
  document.getElementById('btn2').hidden = true;
}


document.getElementById('result').innerText = JSON.stringify(dum1, null, 2);

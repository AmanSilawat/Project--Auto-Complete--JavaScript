let data = [
    {
        dom: document.querySelector('#input1'),
        json: 'data/data1.json',
        limit: 50
    },
    {
        dom: document.querySelector('#input2'),
        json: 'data/data2.json',
        limit: 100
    }
]

for (const item of data) {
    getData(item.json)
        .then((dropdownArr) => {
            new Auto_complete({dom: item.dom, data: dropdownArr, limit: item.limit});
        });
}

async function getData(path) {
    let response = await fetch(path);
    return await response.json();
}
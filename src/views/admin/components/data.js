const tmp = [
    {
        "product_id": "641d47b11f3abd2c9c087949",
        "product_name": "Nike Air Force 2",
        "price": "90",
        "image": "1681870155200.webp",
        "number": 5
    },
    {
        "product_id": "641d49291f3abd2c9c087a44",
        "product_name": "Nike Air Force 1 ",
        "price": "999",
        "image": "1679640873386.png",
        "number": 0
    },
    {
        "product_id": "641d57ef1f3abd2c9c088351",
        "product_name": "puma super sport ",
        "price": "1000",
        "image": "1679644655168.jpeg",
        "number": 8
    },
    {
        "product_id": "641d588b1f3abd2c9c0883b2",
        "product_name": "CA Pro Tumble Core Sneakers",
        "price": "150",
        "image": "1679644811462.jpeg",
        "number": 6
    },
    {
        "product_id": "641d593f1f3abd2c9c088425",
        "product_name": "Cali Dream Women's Sneakers",
        "price": "300",
        "image": "1679644991036.jpeg",
        "number": 19
    },
    {
        "product_id": "641d59b01f3abd2c9c08846d",
        "product_name": "Air Jordan 1 Mid SE",
        "price": "500",
        "image": "1679645104791.jpeg",
        "number": 12
    },
    {
        "product_id": "64298a671f3abd2c9c0b495e",
        "product_name": "sa11223asd12",
        "price": "123",
        "image": "1680444007766.log",
        "number": 0
    },
    {
        "product_id": "643f4a741eabcba38b239199",
        "product_name": "Jordan Flight Essentials",
        "price": "110",
        "image": "1681869428041.webp",
        "number": 0
    },
    {
        "product_id": "643f4c771eabcba38b2392fd",
        "product_name": "Giannis",
        "price": "50",
        "image": "1681869943414.webp",
        "number": 0
    }
  ]
  
const name = []
const figure = []
tmp.forEach(function(element) {
  name.push(element.product_name);
  figure.push(element.number);
});
  
export const chartData = {
  labels: name,
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: figure
    }
  ]
}

  
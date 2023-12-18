const importImages = async (pic, count) => {
  const images = [];
  //this  was supposedly for single page there are many pics that shares same name + index 
  for (let i = 1; i <= count; i++) {
    const modulePath = `./imgs/${pic}${i}.jpeg`;
    
    images.push(modulePath);
  }
  console.log('====================================');
  console.log(images);
  console.log('====================================');
  return images;
};

class MyProduct {
  constructor(title, description, ...images) {
    this.title = title;
    this.description = description;
    this.images = images;
   
  }
}

const StockData = [
  ["Hp Pavilion", "intel pentium gold 6405U 2.4 GHz, 4GB DDR4, 128GB SSD, webcam, USB-C, HDMI, wifi, windows 10 s", "hp", 20],
  ["Apple Ipad Air 4", "256GB WIFI MME63LL/A (Latest Model)", "ipad", 32],
  ["keycaps", "123 keys PBT keycap set XDA", "kb", 54],
  ["Apple Iphone 12", "64GB GSM/CDMA Smartphone", "ipho", 35],
  ["PS5+Controller", "ps5 skins", "ps", 5],
  ["Dell Precision 5530 Laptop", "Xeon E-2176M 2.7GHz, 32GB, 1TB SSD, 15.6in UHD Touch Screen, Win10P64, Webcam, Manufacturer Refurbished", "dell", 5],
  ["Microsoft Surface Laptop", "Intel Core i7, 16GB RAM, 512GB SSD", "micro", 5],
  ["Samsung Galaxy A32 5G", "SM-A326U, 64GB", "sam", 5],
  ["Huawei P40 Pro 5G", "SmartPhone Kirin 990 6.58, 90Hz", "hua", 5],
  ["Oppo Phone", "SmartPhone Kirin 990 6.58, 90Hz", "oppo", 5],
  ["Xbox One S", "1TB Console, white", "xboxs", 58],
  ["VersionTECH", "Stereo Gaming Headset for Xbox, PS4 And PC", "hdp", 122],
  ["RGB Mouse", "Gaming Mouse Rechargeable", "ms", 35],
  ["Graphics Card", "GeForce RTX 3080 OC 10GB", "rtx", 24],
];

const ProductList = Promise.all(StockData.map(async ([title, description, pic, count]) => {
  const images = await importImages(pic, count);
  return new MyProduct(title, description, ...images);
})).then((products) => products);

const listof = document.querySelector('#listof');

ProductList.then((products) => {
  products.forEach((product, index) => {
    listof.innerHTML += `
      <div class="card" style="width: 18rem;">
        <img src="${product.images[0]}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.description}</p>
          <button id="${index}"  class="item">Buy</button>
        </div>
      </div>
    `;
  });
//HERE TO ADD TO CART STARTS
  const buttons = document.querySelectorAll('.item');
  const already = [];
  const quantities = [];
  const tbody = document.querySelector('.tabled');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (e) {
      e.preventDefault();
      console.log("clicked");
  
      let selectedIdx = parseInt(e.target.id);
      let selectedProduct = products[selectedIdx];
      let element = selectedProduct.title; 
  
      console.log('====================================');
      console.log(selectedIdx);
      console.log(selectedProduct);
      console.log('====================================');
  
      //this will be used to check 
      const cartIndex = already.indexOf(element);
  
      if (cartIndex !== -1) {
        // Product exists in the cart 
        quantities[cartIndex]++;
        console.log("Product already in the cart");
        console.log("Quantity: ", quantities[cartIndex]);
  
        // Update quantity in the HTML
        const quantityElement = document.querySelector(`#p${cartIndex}`);
        quantityElement.innerText = quantities[cartIndex];
      } else {
        // Product is not in the cart
        already.push(element);
        quantities.push(1);
  
        // Add to cart in HTML
        tbody.innerHTML += `
          <tr>
            <td class="name">${element}</td>
            <td class="quantities" id="p${already.length - 1}">this is quantity :${quantities[already.length - 1]}</td>
         
            <td><button class="delete" data-index="${already.length - 1}">Delete</button></td>
          </tr>
        `;
  
        // Add event listener for the delete button
        const deleteButton = document.querySelector(`.delete[data-index="${already.length - 1}"]`);
        deleteButton.addEventListener('click', function (e) {
          e.preventDefault();
          const index = parseInt(e.target.getAttribute('data-index'));
          already.splice(index, 1);
          quantities.splice(index, 1);
          updateCart();
        });
      }
      
      console.log(already);
      console.log(quantities);
    });
  }
  
  function updateCart() {
    tbody.innerHTML = '';
    for (let i = 0; i < already.length; i++) {
      tbody.innerHTML += `
        <tr>
          <td class="name">${already[i]}</td>
          <td class="quantities" id="p${i}">${quantities[i]}</td>
          <td><button class="delete" data-index="${i}">Delete</button></td>
        </tr>
      `;
    }
  
    //delete action
    const deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach(button => {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        const index = parseInt(e.target.getAttribute('data-index'));
        already.splice(index, 1);
        quantities.splice(index, 1);
        updateCart();
      });
    });
  }
  
  



})
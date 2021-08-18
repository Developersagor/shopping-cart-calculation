function updateProductNumber(product, isIncreasing, price) {
  const productInput = document.getElementById(`${product}-number`);
  let productNumber = productInput.value;
  if (isIncreasing == true) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;

  // update product total
  const productTotal = document.getElementById(`${product}-total`);
  productTotal.innerText = productNumber * price;

  // update card Total

  cardTotal();
}

// set handler for increasing and decresing phone number
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", true, 1219);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", false, 1219);
});

// set handler for increasing and decreading case number
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", true, 59);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", false, 59);
});


// update card total ballance

function getProductInput(product) {
  const productInput = document.getElementById(`${product}-number`);
  const productNumber = parseInt(productInput.value);
  return productNumber;
}
function cardTotal() {
  const phoneTotal = getProductInput("phone") * 1219;
  const caseTotal = getProductInput("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;
  const totalPrice = subTotal + tax;

  // update subtotal , tax and total in card

  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = tax;
  document.getElementById("total-price").innerText = totalPrice;
}


// chekout btn

document.getElementById("cheak-out-btn").addEventListener("click", function () {
  const price = document.getElementById("total-price").innerText;
  const cardTotalPrice = price;
  if (cardTotalPrice > 0) {
    window.location.href = "welcome.html";
  } else {
    alert("Sorry ! please add minimum a product");
  }
});

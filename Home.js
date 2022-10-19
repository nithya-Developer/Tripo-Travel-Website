function loadCoupon() {
  document.getElementById("coupon").style.visibility = "visible";
  document.getElementById("main").style.opacity = "0.9";
}

function closeCoupon() {
  document.getElementById("coupon").style.visibility = "hidden";
  document.getElementById("main").style.opacity = "1";
}
// ==== Dark theme =====


function changeMode() {
  let mybody = document.body;
  mybody.classList.toggle("mydark");
}

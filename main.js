function openNav() {
  document.getElementById("mySidenav").style.width = "320px";
   document.getElementById("inform").style.opacity = "0.2";
  document.getElementById("podvalimg").style.opacity = "0.2";
  document.getElementById("mainimg").style.opacity = "0.2";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
  document.getElementById("inform").style.opacity = "1";
  document.getElementById("podvalimg").style.opacity = "1";
  document.getElementById("mainimg").style.opacity = "1";
}
function arrow() {
  window.scrollTo((top = "650"), (left = "650"));
}
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-20%";
  }
}

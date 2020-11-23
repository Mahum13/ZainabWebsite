function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function displayModal(source) {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("videoPlaying").src = source;

}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  location.reload();
}

function videoTitleScroll() {
  var div = document.getElementById("videoTitle");
  var rect = div.getBoundingClientRect();
  var x = rect.left;
  var y = rect.top;
  scroll(x, y);
}

function scroll(x, y) {

  window.scrollTo((x-2), (y-2));
}

document.getElementById("iya").onclick = function() {
    document.getElementById("header").innerHTML = "Anda Berbohong!";
    document.getElementById("image").src = "image 3.png";
    document.getElementById("text").innerHTML = "Anda adalah seorang Teknisi"
    document.getElementById("box").style.backgroundColor = "#E12E2E";
    document.getElementById("iya").style.visibility = "hidden";
    document.getElementById("tidak").style.visibility = "hidden";
  };
  
  document.getElementById("tidak").onclick = function() {
    document.getElementById("header").innerHTML = "Anda Benar!";
    document.getElementById("image").src = "image 2.png";
    document.getElementById("text").innerHTML = "Anda adalah seorang Mahasiswa"
    document.getElementById("box").style.backgroundColor = "#6FD240";
    document.getElementById("iya").style.visibility = "hidden";
    document.getElementById("tidak").style.visibility = "hidden";
  };
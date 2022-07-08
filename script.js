new kursor({
  type: 4,
  removeDefaultCursor: true,
});

var jam = setInterval(function () {
  var waktu = new Date();
  var jam = String(waktu.getHours()).padStart(2, "0");
  var menit = String(waktu.getMinutes()).padStart(2, "0");
  var detik = String(waktu.getSeconds()).padStart(2, "0");
  var amorpm = document.getElementById("amorpm");
  var hari = waktu.getDay();
  var tanggal = waktu.getDate();
  var bulan = waktu.getMonth();
  var tahun = waktu.getFullYear();

  if (hari == 0) {
    hari = "Minggu";
  } else if (hari == 1) {
    hari = "Senin";
  } else if (hari == 2) {
    hari = "Selasa";
  } else if (hari == 3) {
    hari = "Rabu";
  } else if (hari == 4) {
    hari = "Kamis";
  } else if (hari == 5) {
    hari = "Jumat";
  } else if (hari == 6) {
    hari = "Sabtu";
  }

  document.getElementById("jam").innerHTML = jam;
  document.getElementById("menit").innerHTML = menit;
  document.getElementById("detik").innerHTML = detik;
  document.getElementById("date").innerHTML = tanggal;
  document.getElementById("mth").innerHTML = bulan;
  document.getElementById("yr").innerHTML = tahun;
  document.getElementById("dino").innerHTML = hari;

  if (jam > 12) {
    amorpm.innerHTML = "PM";
  } else {
    amorpm.innerHTML = "AM";
  }
}, 1000);

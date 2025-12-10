// === MENU RESPONSIVE ===
$(document).ready(function () {
  const tombolMenu = $(".tombol-menu");
  const menu = $("nav .menu ul");

  // Klik menu untuk toggle
  tombolMenu.on("click", function (e) {
    e.preventDefault();
    menu.slideToggle(); // animasi smooth
  });

  // Saat resize layar
  $(window).resize(function () {
    const width = $(window).width();
    if (width > 989) {
      menu.show();
    } else {
      menu.hide();
    }
  });

  // === EFEK SCROLL NAVBAR ===
  $(window).scroll(function () {
    const scrollPos = $(this).scrollTop();
    if (scrollPos > 0) {
      $("nav").addClass("putih");
      $("nav img.hitam").show();
      $("nav img.putih").hide();
    } else {
      $("nav").removeClass("putih");
      $("nav img.hitam").hide();
      $("nav img.putih").show();
    }
  });

  // === LEAFLET MAP ===
  if (document.getElementById("map")) {
    const map = L.map("map").setView([-6.0, 105.9], 11); // Cilegon area
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Tambahkan marker contoh (Pelabuhan Ciwandan)
    L.marker([-6.017, 105.995])
      .addTo(map)
      .bindPopup("<b>Pelabuhan Ciwandan</b><br>Cilegon, Banten")
      .openPopup();
  }

  const sstLayer = L.tileLayer(
  'https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Aqua_L3_SST_MidIR_4km_Day/default/{time}/GoogleMapsCompatible_Level9/{z}/{y}/{x}.png',
  {
    time: '2023-07-15',
    tileSize: 256,
    minZoom: 1,
    maxZoom: 7,
    attribution: 'NASA GIBS - MODIS SST',
  }
);

});

// ===========================
// DATA GRAFIK
// ===========================

// Budidaya
const wilayahBudidaya = ["Jombang", "Purwakarta", "Cibeber", "Cilegon", "Ciwandan"];
const produksiBudidaya = [420000, 310000, 240000, 230000, 180000];

// Tangkap
const wilayahTangkap = ["Pulomerak", "Citangkil", "Ciwandan", "Grogol", "Cibeber"];
const produksiTangkap = [570000, 290000, 210000, 90000, 10000];

// ===========================
// GRAFIK BUDIDAYA
// ===========================
new Chart(document.getElementById("grafikBudidaya"), {
  type: "bar",
  data: {
    labels: wilayahBudidaya,
    datasets: [{
      label: "Produksi Budidaya (ton)",
      data: produksiBudidaya,
      backgroundColor: "#1f77b4"
    }]
  },
  options: {
    indexAxis: "y",
    responsive: true
  }
});

// ===========================
// GRAFIK TANGKAP
// ===========================
new Chart(document.getElementById("grafikTangkap"), {
  type: "bar",
  data: {
    labels: wilayahTangkap,
    datasets: [{
      label: "Produksi Tangkap (ton)",
      data: produksiTangkap,
      backgroundColor: "#2ca02c"
    }]
  },
  options: {
    indexAxis: "y",
    responsive: true
  }
});

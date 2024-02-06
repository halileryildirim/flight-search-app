import fakeResults from "./fake-api";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("flight-search-form");
  const resultsList = document.getElementById("results-list");
  const returnDateInput = document.getElementById("return-date");

  let displayedResults = []; // Önceki sonuçları saklamak için array

  let searchTimer; // Arama gecikmesini takip etmek için bir zamanlayıcı tanımla

  form.addEventListener("input", function () {
    clearTimeout(searchTimer); // Önceki zamanlayıcıyı temizle

    // Yeni bir arama gecikmesi başlat
    searchTimer = setTimeout(function () {
      // Formdaki verileri al
      const departureAirport =
        form.elements["departure-airport"].value.toUpperCase();
      const arrivalAirport =
        form.elements["arrival-airport"].value.toUpperCase();

      // Yükleniyor mesajını güncelle
      updateLoadingMessage("Yükleniyor...");

      // Sunucudan sahte veriyi filtreleyerek sonuçları göster
      setTimeout(function () {
        filterResults(departureAirport, arrivalAirport);
        if (displayedResults.length === 0) {
          // Eğer uygun uçuş bulunamadıysa, uygun uçuş bulunamadı mesajını ekleyin
          updateLoadingMessage("Uygun uçuş bulunamadı.");
        }
      }, 1000); // 1 saniye sonra aramayı başlat
    }, 500); // 0.5 saniye sonra aramayı başlat
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle

    // Formdaki verileri al girişleri kontrol et.
    const departureAirport =
      form.elements["departure-airport"].value.toUpperCase();
    const arrivalAirport = form.elements["arrival-airport"].value.toUpperCase();

    return false;
  });

  document.getElementById("one-way").addEventListener("change", function () {
    returnDateInput.disabled = this.checked;
  });

  // Sıralama kriterine göre uçuşları sırala ve sonuçları göster
  function sortAndDisplayFlights(sortBy) {
    // Yükleniyor mesajını güncelle
    updateLoadingMessage("Yükleniyor...");

    // Sıralama işlemi
    displayedResults.sort((a, b) => {
      if (sortBy === "departureTime") {
        return a.departureTime.localeCompare(b.departureTime);
      } else if (sortBy === "arrivalTime") {
        return a.arrivalTime.localeCompare(b.arrivalTime);
      } else if (sortBy === "duration") {
        return a.duration.localeCompare(b.duration);
      } else if (sortBy === "price") {
        return (
          parseFloat(a.price.replace("$", "")) -
          parseFloat(b.price.replace("$", ""))
        );
      }
    });

    // Sonuçları ekranda göster
    displayResults();
  }

  // Sıralama kriteri değiştiğinde çağrılacak fonksiyon
  document
    .getElementById("sort-select")
    .addEventListener("change", function (event) {
      const selectedOption = event.target.value;
      sortAndDisplayFlights(selectedOption);
    });

  // Sonuçları ekranda göster
  function displayResults() {
    resultsList.innerHTML = ""; // Önceki sonuçları temizle

    if (displayedResults.length === 0) {
      // Eğer uygun uçuş bulunamadıysa, uygun uçuş bulunamadı mesajı göster
      updateLoadingMessage("Uygun uçuş bulunamadı.");
    } else {
      displayedResults.forEach(function (result) {
        const li = document.createElement("li");
        li.textContent = `${result.flightNumber} - ${result.departure}-${result.arrival}, Departure: ${result.departureTime}, Arrival: ${result.arrivalTime}, Price: ${result.price}`;
        resultsList.appendChild(li);
      });
    }
  }

  // Sonuçlara dair mesajı güncelleyen fonksiyon
  function updateLoadingMessage(message) {
    resultsList.textContent = message;
  }

  // Sonuçları filtrele ve ekranda göster
  function filterResults(departureAirport, arrivalAirport) {
    const filteredResults = fakeResults.filter(function (result) {
      return (
        result.departure.toUpperCase() === departureAirport &&
        result.arrival.toUpperCase() === arrivalAirport
      );
    });

    displayedResults = filteredResults; // Sonuçları sıralamada vb. kullanmak için sakla
    displayResults(); // Sonuçları ekranda göster
  }
});

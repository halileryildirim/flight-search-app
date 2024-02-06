/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./fake-api.js":
/*!*********************!*\
  !*** ./fake-api.js ***!
  \*********************/
/***/ ((module) => {

eval("const fakeResults = [\n  {\n    flightNumber: \"TK123\",\n    departure: \"IST\",\n    arrival: \"JFK\",\n    departureTime: \"08:00\",\n    arrivalTime: \"14:00\",\n    duration: \"6h\",\n    price: \"$500\",\n  },\n  {\n    flightNumber: \"TK456\",\n    departure: \"JFK\",\n    arrival: \"IST\",\n    departureTime: \"15:00\",\n    arrivalTime: \"21:00\",\n    duration: \"6h\",\n    price: \"$550\",\n  },\n  {\n    flightNumber: \"TK789\",\n    departure: \"IST\",\n    arrival: \"LHR\",\n    departureTime: \"10:00\",\n    arrivalTime: \"12:00\",\n    duration: \"2h\",\n    price: \"$400\",\n  },\n  {\n    flightNumber: \"TK111\",\n    departure: \"LHR\",\n    arrival: \"IST\",\n    departureTime: \"14:00\",\n    arrivalTime: \"18:00\",\n    duration: \"4h\",\n    price: \"$450\",\n  },\n  // Sıralamayı test etmek için aynı kalkış ve varış noktasına sahip uçuşlar\n  {\n    flightNumber: \"TK222\",\n    departure: \"JFK\",\n    arrival: \"LHR\",\n    departureTime: \"09:30\",\n    arrivalTime: \"15:30\",\n    duration: \"6h\",\n    price: \"$600\",\n  },\n  {\n    flightNumber: \"TK888\",\n    departure: \"JFK\",\n    arrival: \"LHR\",\n    departureTime: \"18:30\",\n    arrivalTime: \"00:30\",\n    duration: \"6h\",\n    price: \"$720\",\n  },\n  {\n    flightNumber: \"TK333\",\n    departure: \"JFK\",\n    arrival: \"LHR\",\n    departureTime: \"11:00\",\n    arrivalTime: \"18:00\",\n    duration: \"7h\",\n    price: \"$620\",\n  },\n  {\n    flightNumber: \"TK444\",\n    departure: \"JFK\",\n    arrival: \"LHR\",\n    departureTime: \"12:30\",\n    arrivalTime: \"14:30\",\n    duration: \"2h\",\n    price: \"$640\",\n  },\n\n  {\n    flightNumber: \"TK999\",\n    departure: \"JFK\",\n    arrival: \"LHR\",\n    departureTime: \"20:00\",\n    arrivalTime: \"02:00\",\n    duration: \"6h\",\n    price: \"$740\",\n  },\n  {\n    flightNumber: \"TK555\",\n    departure: \"JFK\",\n    arrival: \"LHR\",\n    departureTime: \"14:00\",\n    arrivalTime: \"18:00\",\n    duration: \"4h\",\n    price: \"$660\",\n  },\n  {\n    flightNumber: \"TK777\",\n    departure: \"JFK\",\n    arrival: \"LHR\",\n    departureTime: \"17:00\",\n    arrivalTime: \"20:00\",\n    duration: \"3h\",\n    price: \"$700\",\n  },\n\n  {\n    flightNumber: \"TK666\",\n    departure: \"JFK\",\n    arrival: \"LHR\",\n    departureTime: \"15:30\",\n    arrivalTime: \"21:30\",\n    duration: \"6h\",\n    price: \"$680\",\n  },\n];\n\nmodule.exports = fakeResults;\n\n\n//# sourceURL=webpack://flight-search-app/./fake-api.js?");

/***/ }),

/***/ "./flight-search.js":
/*!**************************!*\
  !*** ./flight-search.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fake_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fake-api */ \"./fake-api.js\");\n/* harmony import */ var _fake_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fake_api__WEBPACK_IMPORTED_MODULE_0__);\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const form = document.getElementById(\"flight-search-form\");\n  const resultsList = document.getElementById(\"results-list\");\n  const returnDateInput = document.getElementById(\"return-date\");\n\n  let displayedResults = []; // Önceki sonuçları saklamak için array\n\n  let searchTimer; // Arama gecikmesini takip etmek için bir zamanlayıcı tanımla\n\n  form.addEventListener(\"input\", function () {\n    clearTimeout(searchTimer); // Önceki zamanlayıcıyı temizle\n\n    // Yeni bir arama gecikmesi başlat\n    searchTimer = setTimeout(function () {\n      // Formdaki verileri al\n      const departureAirport =\n        form.elements[\"departure-airport\"].value.toUpperCase();\n      const arrivalAirport =\n        form.elements[\"arrival-airport\"].value.toUpperCase();\n\n      // Yükleniyor mesajını güncelle\n      updateLoadingMessage(\"Yükleniyor...\");\n\n      // Sunucudan sahte veriyi filtreleyerek sonuçları göster\n      setTimeout(function () {\n        filterResults(departureAirport, arrivalAirport);\n        if (displayedResults.length === 0) {\n          // Eğer uygun uçuş bulunamadıysa, uygun uçuş bulunamadı mesajını ekleyin\n          updateLoadingMessage(\"Uygun uçuş bulunamadı.\");\n        }\n      }, 1000); // 1 saniye sonra aramayı başlat\n    }, 500); // 0.5 saniye sonra aramayı başlat\n  });\n\n  form.addEventListener(\"submit\", function (event) {\n    event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle\n\n    // Formdaki verileri al girişleri kontrol et.\n    const departureAirport =\n      form.elements[\"departure-airport\"].value.toUpperCase();\n    const arrivalAirport = form.elements[\"arrival-airport\"].value.toUpperCase();\n\n    return false;\n  });\n\n  document.getElementById(\"one-way\").addEventListener(\"change\", function () {\n    returnDateInput.disabled = this.checked;\n  });\n\n  // Sıralama kriterine göre uçuşları sırala ve sonuçları göster\n  function sortAndDisplayFlights(sortBy) {\n    // Yükleniyor mesajını güncelle\n    updateLoadingMessage(\"Yükleniyor...\");\n\n    // Sıralama işlemi\n    displayedResults.sort((a, b) => {\n      if (sortBy === \"departureTime\") {\n        return a.departureTime.localeCompare(b.departureTime);\n      } else if (sortBy === \"arrivalTime\") {\n        return a.arrivalTime.localeCompare(b.arrivalTime);\n      } else if (sortBy === \"duration\") {\n        return a.duration.localeCompare(b.duration);\n      } else if (sortBy === \"price\") {\n        return (\n          parseFloat(a.price.replace(\"$\", \"\")) -\n          parseFloat(b.price.replace(\"$\", \"\"))\n        );\n      }\n    });\n\n    // Sonuçları ekranda göster\n    displayResults();\n  }\n\n  // Sıralama kriteri değiştiğinde çağrılacak fonksiyon\n  document\n    .getElementById(\"sort-select\")\n    .addEventListener(\"change\", function (event) {\n      const selectedOption = event.target.value;\n      sortAndDisplayFlights(selectedOption);\n    });\n\n  // Sonuçları ekranda göster\n  function displayResults() {\n    resultsList.innerHTML = \"\"; // Önceki sonuçları temizle\n\n    if (displayedResults.length === 0) {\n      // Eğer uygun uçuş bulunamadıysa, uygun uçuş bulunamadı mesajı göster\n      updateLoadingMessage(\"Uygun uçuş bulunamadı.\");\n    } else {\n      displayedResults.forEach(function (result) {\n        const li = document.createElement(\"li\");\n        li.textContent = `${result.flightNumber} - ${result.departure}-${result.arrival}, Departure: ${result.departureTime}, Arrival: ${result.arrivalTime}, Price: ${result.price}`;\n        resultsList.appendChild(li);\n      });\n    }\n  }\n\n  // Sonuçlara dair mesajı güncelleyen fonksiyon\n  function updateLoadingMessage(message) {\n    resultsList.textContent = message;\n  }\n\n  // Sonuçları filtrele ve ekranda göster\n  function filterResults(departureAirport, arrivalAirport) {\n    const filteredResults = _fake_api__WEBPACK_IMPORTED_MODULE_0___default().filter(function (result) {\n      return (\n        result.departure.toUpperCase() === departureAirport &&\n        result.arrival.toUpperCase() === arrivalAirport\n      );\n    });\n\n    displayedResults = filteredResults; // Sonuçları sıralamada vb. kullanmak için sakla\n    displayResults(); // Sonuçları ekranda göster\n  }\n});\n\n\n//# sourceURL=webpack://flight-search-app/./flight-search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./flight-search.js");
/******/ 	
/******/ })()
;
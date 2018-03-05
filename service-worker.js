/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
(function() {
  "use strict";

  var CACHE_NAME = "static-cache";

  //one time cache to demostrate PWA feature,
  var urlsToCache = [
    ".",
    "index.html",
    "style/main.css",
    "dist/build.js",
    "manifest.json",
    "https://mighty-garden-54587.herokuapp.com/getBatsmanAggScore",
    "https://mighty-garden-54587.herokuapp.com/getDissmisalType",
    "https://mighty-garden-54587.herokuapp.com/getOrangePurpleSeries",
    "https://mighty-garden-54587.herokuapp.com/getMatchPerformance",
    "https://mighty-garden-54587.herokuapp.com/getMatchPerformanceGraph",
    "https://mighty-garden-54587.herokuapp.com/getMmostWisketTackers"
  ];

  self.addEventListener("install", function(event) {
    event.waitUntil(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.addAll(urlsToCache);
      })
    );
  });

  self.addEventListener("fetch", function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetchAndCache(event.request);
      })
    );
  });

  function fetchAndCache(url) {
    return fetch(url)
      .then(function(response) {
        // Check if we received a valid response
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return caches.open(CACHE_NAME).then(function(cache) {
          cache.put(url, response.clone());
          return response;
        });
      })
      .catch(function(error) {
        console.log("Request failed:", error);
        // You could return a custom offline 404 page here
      });
  }
})();

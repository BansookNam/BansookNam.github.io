'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5be5d1e9462aa2674e2ccd14f5f25d68",
"version.json": "2c488f8ccacf5dfa934a41a238a0cefe",
"index.html": "0ede24973d2d719e867f666e18fddcd1",
"/": "0ede24973d2d719e867f666e18fddcd1",
"main.dart.js": "b7f640726fb434c61ea9ce97b1f7cb8a",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "fbaa3624ce288dcf1ff923fbdd54974d",
"icons/Icon-192.png": "8ce6e2398386034681677910446f8c56",
"icons/Icon-maskable-192.png": "bdd01e05ffb4f39ae48f006edcb9693c",
"icons/Icon-maskable-512.png": "0a1e3ce4323e1076d900b634734cc5d3",
"icons/Icon-512.png": "bfaf6b972dcd3c762d6a6902fb077090",
"manifest.json": "ac27129d23d2adf0ae20a4068f08ea4c",
"assets/AssetManifest.json": "7e80be349a45175b7a7ecd7f97e8ddf8",
"assets/NOTICES": "01609d9cd3d88be156aa354a01a6ca2b",
"assets/FontManifest.json": "634f1efc2f689271ca4f617f6319eccb",
"assets/AssetManifest.bin.json": "3fd8446afbe6cdc107d93992bf6f497d",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/eva_icons_flutter/lib/fonts/Eva-Icons.ttf": "b3cfd6832181cbaa3c98988c49d34641",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "43d4cba352f833e8ab12a68cfeb4e4f3",
"assets/fonts/MaterialIcons-Regular.otf": "4fc1936cdda58faa15195bbe2ff51120",
"assets/assets/images/bansook.png": "0cb28e16414e7606e31017809c92ae9f",
"assets/assets/images/profile_aging.png": "a583ba739ca8a28ed4e83bae6a42b239",
"assets/assets/images/flags/flag_kr.png": "7031da225a3f3244fc1815bcca550c30",
"assets/assets/images/flags/flag_us.png": "8b1c835585133c08aae7fe1dedcbd3e6",
"assets/assets/images/darkmode/moon.png": "0ea07f6a8f0b88d91f2f496fc3d86a8b",
"assets/assets/images/darkmode/sun.png": "7ead1e17fdfa009f1317134821fbb18c",
"assets/assets/images/projects/p0_cafe.png": "ece3bbe6a754502ce21783c81133fa30",
"assets/assets/images/projects/p1_post.png": "3c16acda4fb29d658f4973ec76824fe5",
"assets/assets/images/projects/p3_disco.png": "b2fbec5b472f30288aee5aaf64c0dfe7",
"assets/assets/images/projects/p2_blog.png": "e139816b1150ecbc1d4aec24fed497d5",
"assets/assets/images/projects/p6_lawfully.png": "c194d429d72d662c1aebb8ab47cceb95",
"assets/assets/images/projects/p5_selective.png": "a931f165f582272e77d13bd0d65cddcd",
"assets/assets/images/projects/p4_audioclip.png": "3c6604df64faf3d4f8601f1499f9bbd4",
"assets/assets/images/small_arrow_right.svg": "3350f8b3a334fcbfa17f9e6bde0d68e6",
"assets/assets/images/profile.png": "4c2b4c0669df734b90fd0da1aed56e89",
"assets/assets/images/og/og1.png": "a43aeee3f9401cc6ade0429c39d05a7c",
"assets/assets/images/og/og2.png": "bfcbc9762605c320dee6b9aabd48a066",
"assets/assets/images/og/og3.png": "7e47b758dc71e14620d554c12b3c09a6",
"assets/assets/images/og/og6.png": "43efeee5ff573147253a1767f7802bb1",
"assets/assets/images/og/og4.png": "350bbdbe4f6eed5b8a20d73883e941c3",
"assets/assets/images/og/og5.png": "988c621c3cf290a62ad83abb1a99dac7",
"assets/assets/images/egg.png": "08b99ecad13c4a25e217db4678eb2850",
"assets/assets/json/licenses.json": "8f29a8e13d4172608fb4e501ad25f7a4",
"assets/assets/translations/kr.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/translations/en.json": "563c293fbca4b1f36be60b0117649c4e",
"assets/assets/translations/ko.json": "789483d8f3b53a1030926e848b2af59f",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

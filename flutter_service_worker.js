'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "deaf3824ee89d08bda0a2e1ec75238a5",
"index.html": "f48d560d80eee4b221c11842642bd1d3",
"/": "f48d560d80eee4b221c11842642bd1d3",
"main.dart.js": "96a87dbfab9fdf2a7862309bda47ce68",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "407208c5246e3b720db84c91fac1095a",
".git/config": "b5db707c4acb97e3005a145e3e60e3a5",
".git/objects/0c/03c018497a1996c2877c9197e1fde4816ec836": "8aa92f1d5a0277d3bd3ececf10a5915b",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/51/3b320b34074cc8f4b73c6fb9ab29e755400b25": "6e5a8ed4d52a56fa4fde52db98b60b00",
".git/objects/34/6db7bdc60c97b151e702f8ffb34accbe173041": "3f399d1212fc0613747e98b6e79d6099",
".git/objects/9d/3805dbf1f6e862dd864f5598c72e818cf78099": "fa52cec3754176a3c88132e5a49b089f",
".git/objects/d7/6ec707134c48540d22b4c43479e56af920b2db": "a7441780f68fac02467ab7b1bf0e4332",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/b3f66a6f34f5009becd0ec3d197360be577c14": "7df6f10cc39b8f476df923881658f095",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/f5318c42d759ee4004c9a8c9de841c70646531": "066db298732e1c16a35d5e9c15a8f4df",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/e3/56baa9180eeac4aaa10ec72143a04544cf2c32": "5ae23d3aa4cb508b74595f4c55e95ebc",
".git/objects/4b/ba949d303ed23c4a22f21b16964dc0480168e5": "72c77084bf2bf3324e675326eb75fb98",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/45/72a4fc3bc727a35abb42d23c5874a1fc22bdee": "ee344dcf959bbc9447ce6448220aca37",
".git/objects/87/2533fc7bb31f8dc0041fa6e0b88f76901ba1e5": "2124e4e1f5c4fdba4843a9b2564ec077",
".git/objects/80/d6d9d21a55ac28a4f50d1aef2263a89efa235a": "ed2736cea4da7dbb83a71b362265b9c1",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/ee1d4c3bef9df96680284e60816865a4bd8e86": "1430347ba5e4bd064c1f58b66bc548d4",
".git/objects/7e/9687d2bc161c596f0c81010021651ddd86ec05": "e46c98a8f444002896f6e0d1a3ce64df",
".git/objects/44/7a6a831f7b5d179dc9865faf679e8eb2bb707d": "9da3aa176a8a8a73846ab0289e7a9406",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/209721f95cb7f68042e7d13ce04115101a52ed": "945780343a4e892f2a8fa987182ebc64",
".git/objects/38/d300cad1c1a3bd12a32aaaacb3a8b0063915db": "97bbdcf5a1d494e96f46be75982837a5",
".git/objects/91/8b44ee94ec770972061853990a7b67e42f70b4": "5d588c40a28aab5006b6bf1a64df3699",
".git/objects/65/fd2c8335764d870a1ec789e389f3ae8b7d145f": "0b3221acd9f4e8edebc4f597678cde6a",
".git/objects/96/b447a73a7141fe2f894f7ab5b689db962dd479": "c56d74516bb1be1ae6f6c606d60191ee",
".git/objects/53/b42479499e450cdc63a36555eaae998c564d07": "d89a15f2f1e194e780f3e4723b1f1c0f",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/55/7db03de997c86a4a028e1ebd3a1ceb225be238": "8860a360209f66ea0340a3c3a9aed75b",
".git/objects/97/698fdb721b9cbe3e45fa6f98145b20edcdec51": "e210ced217442d6c734e1842a1b6511f",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/dd/0931227c0258f0a03e9ffed3f009f27c07a4ae": "a8a9983f8a74c1d7fc1c906076cc7c58",
".git/objects/d2/48396878ec881cc533f6f73b30530024c5236b": "54748bd559a81c035e9a492742b37f3d",
".git/objects/aa/cbbcfb4e85d5e1e04ff99297a56da368dfe5a8": "d1d89ec2ea3b6296197f60f4f9723bb8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b0/59f7ce2be8b41ed4b8f30249cb7332780bea40": "683393d22113c8d48ef869210eac7baa",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/df2e215f6850c872e5e23ccfebc1b0b979d6c2": "d46764fdf199417a4ca628210fc8a479",
".git/objects/b9/10432ca209d8f6042ad02e906c425176a323d4": "0d807bc8715f3bc81056792df3476843",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/bd263bc3503e5ebc193a8051ee264b461f89bf": "37ee5cfe1b27b5ae32ba45a74648d083",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f0/6364b78d554ea5666e411fec1c37a05c314a0e": "f3075f876918a6ca828c89dc8428a6dc",
".git/objects/e8/e84735d8162faa248c67ab500e768ebb970428": "9d1efd9869e5a769daebbdd20fc29712",
".git/objects/e9/ad63ec29cf5cda4fd4739fc2e3dacc4e9f754e": "8f06e2ac97fec51d67a9fbdd6fca64f2",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/e2dcc87efea708f6c02ba8a1c1282b451194c3": "f607bdbef66abb09d72ae0e99ad356f2",
".git/objects/41/89e8aac9757e88570833e9d02b37d1e0f9098e": "ce1912c21fe9017b340c3aca808d76f2",
".git/objects/70/239d1eb46da652d7eed423197cff8df44dda4c": "1145644c237a5b7776a0d82a6038c2fb",
".git/objects/1e/251230387d105d801dead5dabc1755960a556f": "f86f5ac6984ce79cc3ed36c42656ff9f",
".git/objects/12/d36a809b448f36dcadbd958d5cab2a83202997": "b82524c720176a8522ea468ef34e4a6d",
".git/objects/12/fd9ad113e2390f8f06f41a7f767960110eccc5": "a11218d02c7e6936717c35abeb385491",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/7a/40d90614fd171dc55443a8d68a6c44fa30210c": "19274b1055cee5c7a0195999652f114c",
".git/objects/14/ef009ed52a3124340f6efd61842bc358b5d833": "aed6d691b58f9be2d8493653fbe236fa",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7e2ac10cad5cfe4769e6e4ffe61e8fd9",
".git/logs/refs/heads/master": "4c5265bf134e8eea6c80fe9c13b7c60d",
".git/logs/refs/remotes/origin/gh-pages": "2ececb7bab84a2711b26d1d44e72351e",
".git/logs/refs/remotes/origin/master": "0d100a9b0e93bbd69cf7b123723060bf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "1025b1f92db0a0044811e134f9b68b77",
".git/refs/remotes/origin/gh-pages": "c63f3ff482e7c773188559201249d343",
".git/refs/remotes/origin/master": "1025b1f92db0a0044811e134f9b68b77",
".git/index": "0764b0aa7dec766042e735e17b9d6b89",
".git/FETCH_HEAD": "b3bedb665a14267f9aeabb615b7ce174",
".git/sourcetreeconfig": "72c9af5aa840f2b110998c0ff1017550",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "fb9e9695eff13a72ecc9316559bef51f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "dfa8127dd859465d787ba5fcd3d94090",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "cbdf247ab5bf90115a2edbbdff4166c5",
".git/config": "255e5accfa0123a119623c05f4423a4b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "863112ce40ac8cd63bc8573c21810569",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9e573d1029f6749d2d512f95f72cd501",
".git/logs/refs/heads/main": "7595e4af1b619c273a32d847416adcdb",
".git/logs/refs/remotes/origin/main": "f0f418ebb49bd2b6daaf863456e554d3",
".git/objects/00/109c6151cf71a5d5b37ca5dbb422b9700c9d33": "1959818e366c9c8d645c3e3be191ed29",
".git/objects/02/445d19dce5b4283d10702d8d095f4c1219d845": "b2f10b831540cc77b868b46c5e24a6ee",
".git/objects/03/015d22887f934b53877ae8203a3079dd065915": "ca73d8201278425b392bef027e9bdbbd",
".git/objects/08/2b9a2cc1499602676e709d053fa4018f3d6a06": "d4592a1a87c4d04e56fa5d880d9e6ab4",
".git/objects/09/244cef5bdd93ed0cd7a42cdddde2ef4f5535e8": "2239f70003faeebc9d077187555601e5",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/d9a4f91327c38fdf152f25bc774187d81d79bf": "35047e95e15980e077de7d1d6be7b95e",
".git/objects/0e/977514ff6de041957632eabca77c2f59f6ea99": "0d569d9263b0339e64d75e0a493eeb7e",
".git/objects/22/d8adaedd9831a9acb985e2a394d20c6ca03c2b": "df1bfc72daaeca2acc231eadebcb7ceb",
".git/objects/23/a2982cf80a5ad30103f64492c5a01b97d1169e": "fd6c7fd58e76adf303392a06f4dc5aba",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/7e4d09eecca0a30c06b00fa5f427c8dde4bb5e": "5b826f15040ecc5b2ff7b2827fbf2420",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/31/16a9657beca163d296287e7f1ef504d94a0c29": "358ac04ba9d1fe16d0cdf736a6a9c662",
".git/objects/37/42457900d51ae5c34ed53657ed8a72f17f19c6": "14c972e5155e5aa3bf2db2ef8589e81a",
".git/objects/3d/6861b42396c609e26f38f129383c558e332281": "5094a76191110339c6815fd8ca04f5b7",
".git/objects/3f/62ab4e95927e9dd3ad9bef07c841cbf6485632": "e1a1eb156f65e37266b23ec3d9ffdf74",
".git/objects/42/b8804573a3b2bf53f600793aa80f2db114adff": "5a22da48c834751e44404f54a417ada8",
".git/objects/47/eee3f7fa6144e7d211de8a7da7fa4f0a3a79e8": "384dbb441c11d4c0c09a864e1dd41015",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/57/7ad9d64a3cd50897fd05b62cf1c68c890f51c4": "227139a388526767c78a90fac110ff73",
".git/objects/5e/fc3a7b7da06206b7c9f5402ce5f346d09f8f3f": "7f7a9e8e40e02e662a9a6efdd7afb81d",
".git/objects/63/548b9c6ea5ef5775c40ee3e37c068fc5a8046d": "5fb19f63103e84b1658ea795d7890baf",
".git/objects/66/df088f49b2afdbcc602c59d90058f796136357": "b3f52fadb918339a74ff67df0733fe9c",
".git/objects/6a/ae635abb6b8b9732f01b0122b8d5c1da316fa5": "627d637e3105acb554dff193ac53c974",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/74/1bd5d52162b725eb503534f2e7e4f8eccace9a": "ad76406d91265446979bd2e233283e36",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/084aed88451b9ace90558113db803815c14d3f": "f7990a7033727890e78500a14099023d",
".git/objects/7f/6098021cdb1633d4501a46b6a92a8deb9e2347": "2da3209282b40c13f2aeaea9752e30ad",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/91/f44d23e49a16b8c483f628ed22aca9682ca827": "5ce494a295bfad5ee1f3e2329695ed19",
".git/objects/92/ee4f9e32a6e2c40298ec1583c58ec44f3680aa": "c3a0eb3f128788835e980a0b2be0db7f",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/9e/c3058a8b5ee10bb973993fd274e6f62248e17a": "68d535898f9742335d0be9393889db08",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/aa/0f21891acd0771f65dac4a823186043ffd33fe": "5d5a60d4b6ee531518c5cdf84047ea19",
".git/objects/ab/f2259281f4c0746e86a9a9f84c0b9a3b86371d": "44c362f597867827c8af9dd025823ad1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c8/f8af2e19b0a5f36a006a03c9bd5a3079af6fe4": "b6108d59a9995ab8ea5149bb49b603c5",
".git/objects/d2/088b50409efe3d43feca20c565bf074e10dda6": "80c1ee3a6fc3389a9485653cc73d40fb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/40f981a389540be5496223ade63d9f511a0722": "65d0900cfaf49a70e82cfddd9426c731",
".git/objects/fa/31c45e31dfd8567d2828d1f5aaf7fc7b6c6c50": "beeaabb6abe4717d025f13124e1f9041",
".git/objects/fc/b0ee4f01182a15baf42b471c9e89590b751c3e": "72466ee63c030ba97a8df1e48538d9bf",
".git/objects/fe/3893bedc06a24c840103c59fa0e9ac39e7474f": "fdc010de52452ddf474e5a178a52f5ea",
".git/refs/heads/main": "b4d36c29fc7b53318522789af7e18fa8",
".git/refs/remotes/origin/main": "b4d36c29fc7b53318522789af7e18fa8",
"assets/AssetManifest.json": "72095bf2db31334a9be542e3d355df9c",
"assets/assets/aya.png": "3b6f4f386ca7a4692a2334401c04bbc6",
"assets/assets/cbbank.png": "610a83d4f796a53d915fa691f884726b",
"assets/assets/hotsale.png": "6fe54da7270dc67f2f723f112fc370b7",
"assets/assets/kbz.png": "f244cfc445651d57dd2111966ed914b7",
"assets/assets/shopping.jpeg": "49cd715cc948dd6531a52820ca29ec21",
"assets/assets/Yoma.png": "a8621acf3045cb798a2504de15cc541c",
"assets/FontManifest.json": "52459c1e37eb2337a5862fb6ed360f04",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/OleoScriptSwashCaps-Bold.ttf": "6432414ab1365d58d7423f0ac6232577",
"assets/fonts/OleoScriptSwashCaps-Regular.ttf": "cedd93aff0900036032396ae5ba6fee2",
"assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/fonts/Roboto-Light.ttf": "6090d256d88dcd7f0244eaa4a3eafbba",
"assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/fonts/Roboto-Thin.ttf": "4f0b85f5b601a405bdc7b23aad6d2a47",
"assets/NOTICES": "b685edc881f10f926965ec90a9b28917",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/custom_full_image_screen/assets/default_image.png": "fcf52e1f65a63f7affc8a6f6100fd3d6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "196f34e906ef80a565ff1b0dd83cea29",
"/": "196f34e906ef80a565ff1b0dd83cea29",
"main.dart.js": "b5f6243faebd3b07216c2d08ef0642aa",
"manifest.json": "19535d46e57c92915853804779091b99",
"version.json": "29bc000d4a1dbd46aaea425517a905a2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

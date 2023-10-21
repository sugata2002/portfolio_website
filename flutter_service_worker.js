'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/apple-touch-icon.png": "96b5dd9c7a6edb93886bde755ff33bef",
"icons/android-chrome-512x512.png": "cb97f4436c9fea5158c7b7efef807ea3",
"icons/android-chrome-192x192.png": "377d755c39d17cee593abdd7edc2e711",
"manifest.json": "5e05abb07a1795fa139ca2d0600b151f",
"favicon-16x16.png": "5871308f72533f5620207cda42f48005",
"main.dart.js": "976bdfdcccec4ec7f02aba80045eb0b6",
"index.html": "2650e406a094354b866f1d26550cc7c4",
"/": "2650e406a094354b866f1d26550cc7c4",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"assets/fonts/AutourOne-Regular.ttf": "de1b19d9df2763ef7e7ebdd0f4769c5d",
"assets/fonts/MaterialIcons-Regular.otf": "5f7217245ff56f0f141550cb5148c33f",
"assets/NOTICES": "b41ede01f8010a5334b32e279063109e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "546a0eb8569b0ee360cf833287a60ca6",
"assets/FontManifest.json": "e903b5dc479031d626cdc893edf5129c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "856b25cd184fac56af5d5b44fd6fe566",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/AssetManifest.json": "f40d15aefaf4ac2bc55682e41d7de97c",
"assets/assets/images/animation_lny77598_small.gif": "68b00029863677c36320f27c1c7bacf7",
"assets/assets/images/images-removebg-preview.png": "fac2cbaf289512c4bdf9f38d0a062dc8",
"assets/assets/images/images.jpeg": "4c5d33fd45324d97ffded3e93f49ae59",
"assets/assets/images/199992-200.png": "091aa89efae0ca186292de5e0c6fd774",
"assets/assets/images/IMG_20230906_092916_603-removebg-preview(1).png": "133495f673b9f506c4241f590a93ffd8",
"splash/img/light-1x.gif": "787ceb0c18f5233c3b4dfbdd170a66b8",
"splash/img/light-3x.gif": "c565eb0402dd150beb46b001988f3300",
"splash/img/dark-4x.gif": "882f864b9744e741c2e5c0fcb764eca1",
"splash/img/dark-2x.gif": "a1c6060f05710f3279b8cb8938287ff4",
"splash/img/dark-3x.gif": "c565eb0402dd150beb46b001988f3300",
"splash/img/dark-1x.gif": "787ceb0c18f5233c3b4dfbdd170a66b8",
"splash/img/light-4x.gif": "882f864b9744e741c2e5c0fcb764eca1",
"splash/img/light-2x.gif": "a1c6060f05710f3279b8cb8938287ff4",
".git/refs/heads/main": "f3dc48d5220e0721808f4e13169b905f",
".git/refs/remotes/origin/main": "f3dc48d5220e0721808f4e13169b905f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/objects/d1/7deb245aa6b4bfb7e2b65245b07ca98f573a63": "ce984a804c922b04bc4f0d7c1e71b791",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/1b/1d08daf4442dbc220f2dd64a3220a41f60fdfc": "56d95ec8538e9a7ad8ad51f5d33eaab0",
".git/objects/ef/3ea2296b07742488313d63a314a24f68dc365e": "6090fb98399245cd348aaa80e914e332",
".git/objects/ef/139713ff72b11c7ec8db09ae8d0da447416fbe": "fd4005d8cf294867c8815641a50c40ce",
".git/objects/2c/6c013ba4c94ce70162c04c0bb91095119d6b8c": "b202c51b82ad7e50071f9491b1248f48",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/3e/5ef1e65cf674f7a5ca608a4f82cac83773af83": "72b5ef3dc3f45f4240ee25b48537af4b",
".git/objects/eb/ab8a127f4e7c3ce37f1220dde1e350c2596026": "19b160481e5f912fd30561221df0dcee",
".git/objects/eb/07c937ac83d5aeae41869174d1e3d904024087": "3754cab287ac5279a9c912901a9b7c21",
".git/objects/5b/3bce262a7a287f1f04bb12c7c84b60593b5977": "11285af88ee02d0a398a67268c0ed1f5",
".git/objects/89/da583c1ce27b721002254fa9f3e0d19993e335": "52657adfb6564caacde7c7ff03198dbb",
".git/objects/89/bb9d399614d6bce35ea5e17e2395233aea3662": "742c527b431888bc2f78c1134e56cff2",
".git/objects/1e/3b0c75073bd3459161d3037c05588962718553": "51aedb9c09d7c5b29d4ee0ac4ee20ca8",
".git/objects/26/6abad5c41665bd63627c435c3065ccc3c49567": "5c00e96b2ae0ebc2737bd8b47ca28c00",
".git/objects/f0/4e3deab6e10603df46d1a94bd69689f5c35d7a": "0952dcdaca515a9c47d6ed9697e31294",
".git/objects/75/1fa388c1d1ddb3dee5317a59dac73fd2242f9c": "154885f34a6bb9c9e15d76683beb4409",
".git/objects/3c/f248e3134d3eb2a18939998ade800e5e45d68e": "263f7c6baab7c3d90dc65a4c51c6b1fc",
".git/objects/3c/c85c0e7a7b404f78c09018aea629033156631c": "40648a711259372023048b1a091476ba",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/ac/83b28c6a8dd144d212b7058c3cf8cc3d93f840": "f154620d81d6d30977145c0b29123271",
".git/objects/4f/8b6556fbb025ac21715158b83d9fc13dfd9de8": "ec6cd453cbba9aa46a579ed7a5399b05",
".git/objects/d0/d01700e734a776ba200c5ae30203bcc5be909c": "62c0065bb63e2063c18a7fd66a98213a",
".git/objects/95/19adecb8c45ee227a98d29f41b82bb652800b7": "969c53e42b1adf7885207887d2f0add8",
".git/objects/67/2bd73d65c8b35319951a6ca85d8defc09d39e1": "569cbdd9940c195c7cd3ddff4fbf3ff5",
".git/objects/e9/970087a5a2d294a0a2183f7b6483a0e99b322e": "1e2b4e3f00edd155bd53778eee1cfaf4",
".git/objects/ff/aa95c1cc4a43985f6dce186fd6fe5fbbb32be6": "ca3f7ed3176ca48472532f6be14b0ba2",
".git/objects/ff/3a62f4353e9cb7966625e8e288f1179bf3b4ec": "e137eaa6c144d36ba375076438f0a307",
".git/objects/2b/c1e338a2810cae8c6ed78419aa6de00b9475ab": "b486da6008df8b2b6410f2f687f68855",
".git/objects/f5/38cfaaed2c58ba67cf7562acecdd378c2c5620": "23cb30be0433dabd2f51404c05a1c7f5",
".git/objects/72/4179ff442ca6a4a8c836945269599a5dc680c1": "c9f189a0505022ce4bb81bff835d4cea",
".git/objects/ca/a73c4af2874bdf76cc35a89e9a26330b88943c": "4f1d0cf26a6147a491f6190d056fbd14",
".git/objects/fb/5d87be02c25c3d8d7931af039f6499d0e140f0": "95deae2a4503cb38944894e6889e6e4b",
".git/objects/fb/2f3552fee33d8cb2694c7f300871ca8d550b55": "8229d55ac47a9a337977c7ed9671f44e",
".git/objects/18/fb317d6dcd0e00dbd64651eb838dd33648dba2": "6d53adbb6ef88625ca4e19c2105393a0",
".git/objects/6b/40e143dec66e467bf7da09ff11cab0aca5c602": "ea3cf3adb75c8ad5aaece2b44731d08b",
".git/objects/25/0d76d7f1758a11253ba3a36dd7c9192270d18f": "918287fa969c4c83c3dba3c3b0c64689",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/6eebfc01f460add89c501a93a6b4d6b6d6e09b": "5a4a0576edea196e7541c73bb5a3848d",
".git/objects/51/d6b5aafbc8b8ecb61b06eeb5416a0fbdf625d7": "ca7df68e5ce521521e193e517b8598aa",
".git/objects/60/68c4019befd1de94bef07644830c49fab210d7": "beae2079d7119f64893c86a864b6105a",
".git/objects/ee/2feba773bc38d23ec52341bb447f6cebaef80f": "4c1b6796c171424373205d7ee254ce22",
".git/objects/aa/067bf20f97580ad2cb24dfcd8d23f52431e513": "098bafc9d769d50957f96045140f4bf7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/dc37adfd14cd2b006e0ab0639395b1bf6ac788": "773859a53b1a2c116fca529a54113653",
".git/objects/7f/579f63b5af46acedaeed26103d3fdc96e54704": "76ecb5f77f030c304b95a0c412d139b3",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/1f/a5cb3913b5b91b0a32a95617a5c6adfc889ee8": "bbd3360672c2a691af3c15a0cc81e359",
".git/objects/69/0fb56441b2192475101ccec58b30d1cd45da6b": "9fe9edf47fc356d0c57256311907d5bf",
".git/objects/c5/b7c693b16cca5eb55516d9a588f533d34fff0b": "32684481675257429e5f0375b409651e",
".git/objects/04/c67cd091eaea64b63a1423f587f0d3e4e4fed9": "3dafd38821243392d0a9c6aab507d122",
".git/objects/c6/854cd1f8655f74798f1228a780bbae1a883c64": "f416fd5c879d43f8b66181de5b34767f",
".git/objects/df/7b9a407743a82715c5fce0f930459df3aeeb5c": "803a19bddc59ac16dd2b0093e592d826",
".git/objects/ae/f20396823b25cc58020bfef6ba420b95b7f226": "d84626a8192127d0a063ef69dc53f6f8",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/a9/5e4145281e7ece9d3b7e44f2276f6b855146a9": "17445feb3b7cddd8a7824fcd4a08165e",
".git/objects/84/3148f801ee40a7da0535ce51af2f7e7b668abc": "cd4cd9e79e025ad7c6650c218d650935",
".git/objects/65/357a3933b671b9d47368d9a29be5a364b27194": "709072c5f87c9b6a73e40ffa408436a0",
".git/objects/dc/a756edb2359bfcd69bc8f7b1f550d9816b6971": "394edf03370e7a760f0613dcacb2ebc3",
".git/objects/ad/88b111f2ae48a01d938b971cf5182396d4c4e4": "109d2ea93c63eae6c0ec456a1aebe376",
".git/objects/b2/7bd3d83d742b58d4e3042929d8de4457a44451": "9b5745e392adbaa3731f07a8a457a3f2",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/31/feed76f499def6b2b37a9ca324daa57a2b73a4": "1f1fea581fff3163d2843dadd06d26f1",
".git/objects/42/7d830a96e1802c5070c72813b75f28e7d4212a": "a7c5c35c454ee0da187eb94d9fce1678",
".git/objects/42/26467fb4982c60033d2c95b9161ef5f771536f": "162d90ffd766e23a24098e53eafcdd87",
".git/objects/db/7af3ba6febcc2631fddbafdf2fb08656d8452f": "3ceafd3b7eca4dd4875b5ea25de646a6",
".git/objects/db/d3fa28b83c3722146616cc2911a2ea0854437f": "1a79f46eff496316f8e5badf0374eeac",
".git/objects/d2/f783d01916105c52fa1427df3eac52b8c967f3": "3379533b9bbb85c5992d3eb7ec530c34",
".git/objects/3a/335268a127f032c10089d8dffef2bb458e97a2": "65ab675201f6c91fcaad5325d20bea46",
".git/objects/1c/06bc190e7697108821b3e8b66f8c57c78125d5": "3da2363121e4f86cd00f9d42ce725fbb",
".git/objects/1c/56a62136c7061c1d2db2ebdb915531c996cf30": "f261c9b8d6775254d7ab194599c1e986",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/fa/0eba9e67c1c74498e55a87f6c2f81739365684": "b4133fd778ec08184246b5c253efe5f5",
".git/objects/2f/ee5049c3140a5ed8f74a760dd1dd165257c884": "81b9a62fd1ecd170f71cf725e86e5347",
".git/objects/2f/be39270ef541eb4ca5175548bfec912f717b4d": "0f627c6b179b11a48d9112c4725bc246",
".git/objects/9f/b67707928401bb986ae2fdd7c346d1135a8b71": "adeab80e859240630517da46434dcf25",
".git/objects/0e/5b051b4eb078d6e114f283f8c609d64027a0e2": "6c7d0ac33556af5c292917b8e39ce0ba",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5a/58bd1fdbeb63fdc57adaf29105577287aaa7d9": "3069a069bbb1d97cc62130fa7c1a94b7",
".git/objects/b6/8588fd69b2d176658ed6bf545871b406cd9655": "e452ecb438892024ee9e74cbaf901d93",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/2d/b649760605fd37fb437ed7248af9ea30d628d1": "17a1ace4d015a6be81d67fb7baebba96",
".git/objects/70/ff76cf164312962516d1176c392ef78bf1316e": "a46e6bf7a2c6df5f24cbb66694de971c",
".git/objects/ba/811f1c4e0fac0047e2c0d711cc59c4c50d392d": "40724dcfb8bc02f8e81f472b69aebd62",
".git/objects/ba/417186d8078ef2a3fefe3a39084dfe981ce401": "64cecb1cabbb6d2bf5e2d56caccd9b13",
".git/objects/61/a3ec7f2ecc60bd28a9775000662d01e9968be8": "8b7d4dbc843630102b4e48463ae36b10",
".git/objects/91/ec5cb7ae1841db5c7886b69671ab5c97846f3e": "ab4b46b4eb4d3bb26f952b9fd5251fff",
".git/objects/f6/8afeeebbc2094240925f408f07383b9cd68aec": "3fa505ad6b8fc9b51cc175cbb9e4f3a3",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/85/b0c8999c89ffba093adb230dbc7f9ffa92b05d": "f7bcdaafba997b42ceb3716c8d44268a",
".git/objects/52/40c06d23394b932c452de0b4f9ce719f654979": "a7798378589fcdc2d84e0157c32146b9",
".git/objects/52/0b89772f873ea31257d704374737becbb6ef14": "5bfaf4a3c38191fd64ecf74025589850",
".git/objects/52/e3ed9a1db9472855b461f8d512ba768271663b": "c7a442a14a6c9fc3b23fabeefcf4660b",
".git/objects/2a/ef5b361c8b44b4c062153d2192c01a7880bbfe": "b922d7b063c85b736cf6d24566831620",
".git/objects/f4/06add1bf29a4dcc385367dd48ab6b995bb2f41": "04c3d60431d73372f0c574c1e84c38ca",
".git/objects/9d/49ffdf419fdcfdfd2fa6f14a1997ccfe3f4ca3": "4dc02035a222103b3e2af18ed3d27e58",
".git/objects/bf/00ca1e159a4039e1ee5ad18a54396d035a3e3d": "da5f803f8db356456d056f5f5965c9f1",
".git/objects/bf/6a6f614973f7279125886663afeb4a030f999b": "f791cc77e1b884080c7e6778d57c6f06",
".git/objects/63/163fd6460dbf0bb9d19cfe22c265f79af6bbf3": "57d2535be5111d511484be0738f2a3e4",
".git/objects/cc/a3d73af2bba1fb998abdbf59d0195018fd873b": "bb0827f907c32ed569d2e614b1809e0f",
".git/objects/b0/987e5c43150d0fdecadb1493f9c67fa01c3c00": "6b4f0998c4b72a225e2391a4f1fbbabe",
".git/config": "fc5de2f6b3d72c6cc33f7154bba214f8",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/index": "03610924516daaa8e2560a1c5ada2f47",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/refs/heads/main": "f80cb58a608421f9555bd8c730422c35",
".git/logs/refs/remotes/origin/main": "e8cca169998796b0565e6fd35525aa5f",
".git/logs/HEAD": "75a693de0fd91726f81be0075ab46ce0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"version.json": "980547175e325fe622a3362b84d55b6a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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

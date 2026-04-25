import * as jimpPkg from "jimp";
const Jimp = jimpPkg.default || jimpPkg.Jimp || jimpPkg;

async function makeFavicon() {
  try {
    const image = await Jimp.read('public/logo.png');
    image.resize({ w: 32, h: 32 });
    await image.write('public/favicon.png');
    console.log("Favicon generated successfully");
  } catch (err) {
    console.error("Error:", err);
  }
}

makeFavicon();

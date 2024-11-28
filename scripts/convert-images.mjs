import sharp from "sharp";
import { readdir } from "fs/promises";
import path from "path";

async function convertImages() {
  try {
    // 소스 이미지 디렉토리와 출력 디렉토리 설정
    const sourceDir = "./images";
    const outputDir = "./images";

    // 디렉토리 내의 모든 파일 읽기
    const files = await readdir(sourceDir);

    // jpg/jpeg/png 파일만 필터링
    const imageFiles = files.filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

    for (const file of imageFiles) {
      const filePath = path.join(sourceDir, file);
      const fileName = path.parse(file).name;

      // WebP 변환
      await sharp(filePath)
        .webp({ quality: 80 })
        .toFile(path.join(outputDir, `${fileName}.webp`));

      // AVIF 변환
      await sharp(filePath)
        .avif({ quality: 80 })
        .toFile(path.join(outputDir, `${fileName}.avif`));

      console.log(`Converted ${file} to WebP and AVIF formats`);
    }
  } catch (error) {
    console.error("Error converting images:", error);
  }
}

convertImages();

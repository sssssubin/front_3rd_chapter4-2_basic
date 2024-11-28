import { defineConfig } from "vite";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  root: ".",
  build: {
    outDir: "dist",
    assetsInlineLimit: 4096, // 4kb 이하의 이미지는 base64로 인라인화
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "images";
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
      },
    },
  },
  plugins: [
    viteImagemin({
      // AVIF 옵션
      avif: {
        quality: 80, // 품질 (0-100)
        speed: 5, // 속도 (0-8, 숫자가 낮을수록 압축률이 좋지만 느림)
      },
      // WebP 옵션
      webp: {
        quality: 80, // 품질 (0-100)
        lossless: false, // 무손실 압축 여부
      },
      // JPEG 옵션
      mozjpeg: {
        quality: 80, // 품질 (0-100)
        progressive: true, // 프로그레시브 스캔 사용
      },
      // PNG 옵션
      pngquant: {
        quality: [0.8, 0.9], // 품질 범위
        speed: 4, // 속도 (1-11, 숫자가 낮을수록 압축률이 좋지만 느림)
      },
    }),
  ],
});

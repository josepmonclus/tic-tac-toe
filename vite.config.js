import { defineConfig } from "vite";
import path from "node:path";

const folderName = path.basename(process.cwd()) + "/";
console.log(folderName)

export default defineConfig({
    root: "src",
    envDir: "../",
    base: './',
    resolve: {
        alias: {
            "@": new URL("./src", import.meta.url).pathname
        }
    },
    build: {
        outDir: '../dist',
        assetsDir: "./",
        emptyOutDir: true,
    }
});
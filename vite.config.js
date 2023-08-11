import { defineConfig } from "vite";

export default defineConfig({
    root: "src",
    envDir: "../",
    resolve: {
        alias: {
            "@": new URL("./src", import.meta.url).pathname
        }
    },
    build: {
        outDir: '../dist',
        base: ".",
        assetsDir: "./",
        emptyOutDir: true,
    }
});
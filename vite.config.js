import { defineConfig } from "vite";

export default defineConfig({
    root: "src",
    resolve: {
        alias: {
            "@": new URL("./src", import.meta.url).pathname
        }
    },
    build: {
        outDir: '../dist'
    }
});
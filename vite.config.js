import million from "million/compiler";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

//mport react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins:[million.vite({ auto: true }), react()],
})

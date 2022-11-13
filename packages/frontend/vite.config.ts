import { resolve } from 'path';

import { defineConfig } from 'vite';
import viteFs from 'vite-plugin-fs';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import webwriter from 'vite-plugin-content-editor-svelte';
import compiler, { recursiveDirToBooks } from 'vite-plugin-content';

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
    },
  },
  plugins: [
    svelte(),
    viteFs({
      rootDir: 'src/content',
      port: 7070,
    }),
    compiler({
      outDir: 'content',
      bookConfigs: await recursiveDirToBooks(resolve('./src/content')),
    }),
    webwriter({
      devModule: {
        type: 'path',
        path: resolve('webwriter.config.dev.js'),
      },
      prodModule: {
        type: 'path',
        path: resolve('webwriter.config.prod.js'),
      },
    }),
  ],
});

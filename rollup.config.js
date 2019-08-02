import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: 'inline'
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: 'inline'
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url({
      limit: 0, // 0 => copy all files
      include: ['**/*.?(ttf|woff|woff2|png|jpg|svg|gif)']
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    resolve(),
    commonjs()
  ]
};

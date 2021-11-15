import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';
import scss from 'rollup-plugin-scss';

export default {
    input: 'src/js/index.js',
    output: [
        {
            // Build cho trình duyệt.
            name: 'modal',
            file: 'dist/js/modal.min.js',
            format: 'iife',
        },
        {
            // Build cho môi trường sử dụng ES modules.
            name: 'modal',
            file: 'dist/js/modal.esm.js',
            format: 'es',
        },
        {
            // Build cho môi trường Node.js và trình duyệt.
            name: 'modal',
            file: 'dist/js/modal.umd.js',
            format: 'umd',
        },
    ],
    plugins: [
        babel({
            exclude: 'node_modules/**',
        }),
        scss({
            output: './dist/css/modal.css',
            failOnError: true,
            outputStyle: 'compressed'
        }),
        terser()
    ],
};
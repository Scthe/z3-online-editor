/* eslint-disable @typescript-eslint/no-var-requires */
const esbuild = require('esbuild');
const copyStaticFiles = require('esbuild-copy-static-files');
const postCssPlugin = require('esbuild-style-plugin');
const { readFile } = require('fs/promises');

/** Custom plugin that loads '.z3.mts' files using text loader instead of typescript loader. */
const ImportZ3TypeScriptAsTextPlugin = {
  name: 'CSSMinifyPlugin',
  setup(build) {
    build.onLoad({ filter: /\.z3(\.d)?\.m?[tj]s$/ }, async (args) => {
      // console.log('.z3.ts file', args);
      const contents = await readFile(args.path);
      return { loader: 'text', contents };
    });
  },
};

const config = {
  entryPoints: ['./src/index.tsx'],
  outdir: './build',
  bundle: true,
  define: {
    global: 'window',
  },
  // plugins
  plugins: [
    copyStaticFiles({
      src: './static',
      dest: './build',
      dereference: true,
      errorOnExist: false,
      recursive: true,
    }),
    postCssPlugin({
      postcss: {
        plugins: [require('tailwindcss'), require('autoprefixer')],
      },
    }),
    ImportZ3TypeScriptAsTextPlugin,
  ],
};

const defineProductionFlag = (flag) =>
  (config.define.IS_PRODUCTION = String(flag));

async function buildProd() {
  console.log('Executing prod build');
  defineProductionFlag(true);

  config.minify = true;
  // config.format = 'esm'; // produces invalid build? some module imports or smth. 'type="module"' in <script>?
  config.sourcemap = true;
  config.target = 'chrome100,firefox100,safari15'.split(',');
  await esbuild.build(config);
  console.log(
    `Build finished sucesfully. The files are in '${config.outdir}' directory.`
  );
}

async function startDev() {
  console.log('Starting dev server');
  defineProductionFlag(false);

  let ctx = await esbuild.context(config);
  await ctx.watch();

  let { host, port } = await ctx.serve({
    servedir: 'build',
  });
  console.log(`Serve: http://localhost:${port}/`);
}

const isDev = process.argv.some((e) => e == '--dev');
if (isDev) {
  startDev();
} else {
  buildProd();
}


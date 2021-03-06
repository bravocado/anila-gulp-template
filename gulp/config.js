var dest = "./dist";
var src = "./build";

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + "/**",
      // Exclude Map files
      "!" + dest + "/**.map"
    ]
  },
  sass: {
    src: src + "/sass/*.{scss, sass}",
    srcCustom: src + "/sass/**/*.{scss, sass}",    
    dest: dest + "/css"
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  templates: {
    src: [src + "/views/*.jade"],
    watchSrc: [src + "/views/*.jade", src + "/views/layouts/*.jade", src + "/views/includes/*.jade", src + "/views/data/*.json"],
    dataSrc: '../../build/views/data/',
    dest: dest
  },
  copy: {
    miscSrc: ['.htaccess'],
    miscDest: 'dist',
    sassSrc: 'build/sass/**/*',
    sassDest: 'dist/sass'
  }
};

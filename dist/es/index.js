// import fs from "fs";
// import path from "path";

// const cache = new Map<string, string>();
// const exclusions = ["node_modules"];

function EasyImport() {
  return {
    name: "easy-import", // this name will show up in logs and errors

    buildStart: function buildStart() {
      console.log("ran build start");

      // fs.promises.readdir("./", { recursive: true }).then((files) => {
      //   for (let i = 0; i < exclusions.length; i++) {
      //     const exclusion = exclusions[i];
      //     files = files.filter((file) => !file.includes(exclusion));
      //   }

      //   files = files.map((file) => path.normalize(file));

      //   console.log(files);

      //   return files;
      // });

      // while (queue.length > 0) {
      //   const path: string = queue[queue.length - 1];
      //   queue.pop();

      //   fs.readdir(path, (err, files) => {
      //     files.forEach((file) => {
      //       console.log(file, ":", path + file);

      //       if (!exclusion.includes(file)) {
      //         fs.lstat(file, (err, stats) => {
      //           if (stats.isDirectory()) {
      //             console.log("is directory: ", path + file);
      //             queue.push(path + file);
      //           }
      //         });
      //       }
      //     });
      //   });
      // }

      return null;
    },

    // renderChunk(code, chunk) {
    //   console.log(code, chunk);
    //   console.log("render chunk?");
    //   return null;
    // },

    // transform(source, importer) {
    //   // console.log("transform");
    //   // console.log({ source, importer });
    //   return null;
    // },
  };
}

export { EasyImport as default };
//# sourceMappingURL=index.js.map

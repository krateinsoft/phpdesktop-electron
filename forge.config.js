const fs = require('fs');

module.exports = {
  packagerConfig: {
    asar: true,
    icon: 'src/icon.ico',
    ignore: [
      'php',
      'www'
    ],
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
  hooks: {
    packageAfterCopy: async (config, buildPath, electronVersion, platform, arch) => {
      fs.cpSync(__dirname + "/php", buildPath+"/../../php/", {recursive: true});
      fs.cpSync(__dirname + "/www", buildPath+"/../../www/", {recursive: true});
    }
  }
};

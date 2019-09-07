# C++ in Javascript

## Call C++ functions in Javascript

### Using Node V8 C++ Addons

#### [Installation](https://github.com/nodejs/node-gyp#installation)

I recommend just running `npm install --global --production windows-build-tools`  

Once everything is installed clone the addon.cc and binding.gyp files and run

```bash
node-gyp configure build
```

If you don't run into any errors you can then simply call `node test` to run the Javascript file

##### Ignore any errors in the .cc file

// file system
const fs = require("fs"); // console.log(fs) to see what can be accessed

// with the file system you can:
// create files or directories
// copy files or directories
// rename files or directories
// delete files or directories
// add content to files
// read the content of a file
// change permissions, owner and group of a file or directory

// File System : METHODS ----------------------------------------------------------------

// ADD DATA TO A FILE -------------------------------------------------------------------

// fs.appendFile() : Asynchronously append data to a file, creating the file if it does not yet exist. Each time it runs, it will add the data to the file.
function appendFileAsyncronously(file_name, data) {
  fs.appendFile(
    file_name, // directory : if directory is not correct, file will not be created
    data, // content that gets added to the file
    (err) => {
      if (err) throw err;
      console.log("The file has been appended");
    }
  );
}

// fs.appendFileSync() : Synchronously append data to a file, creating the file if it does not yet exist. Each time it runs, it will add the data to the file.
function appendFileSynronously(file_name, data) {
  try {
    fs.appendFileSync(file_name, data);
    console.log("The file has been appended");
  } catch (err) {
    console.log(err);
  }
}

// TEST USER PERMISSIONS FOR A FILE ------------------------------

// fs.access() : Tests a user's permissions for the file or directory
// fs.accessSync();
function checkFilePermissionsSynronously(file_name, mode) {
  try {
    fs.accessSync(file_name, mode);
    // The mode argument is an optional integer that specifies the accessibility checks to be performed.
    // mode should be either the value [fs.constants.F_OK] or a mask consisting of the bitwise OR of any offs.constants.R_OK, fs.constants.W_OK, and fs.constants.X_OK (e.g.fs.constants.W_OK | fs.constants.R_OK).
    // Check File access constants for possible values of mode.
  } catch (err) {
    console.log(err);
  }
}

// CHANGE OWNER AND GROUP OF A FILE ------------------------------

// fs.chown();
// fs.chownSync() : Synchronously changes owner and group of a file. Returns undefined
function changeOwnerSyncronously(file_name, uidNumber, gidNumber) {
  try {
    fs.chownSync(file_name, uidNumber, gidNumber);
    console.log("Ownership Changed");
  } catch (err) {
    console.log(err);
  }
}

// CHANGE OR SET PERMISSIONS OF A FILE ------------------------------

// fs.chmod() : Asyncronously Change file permission of a file.
function changeFilePermission(file_name, uidNumber, gidNumber) {
  fs.chmod(file_name, uidNumber, gidNumber);
}
// fs.chmodSync() : Syncronously changes permissions of a file.

// fs.fchmod() : Asyncronously set file permissions of a file
function setFilePermissionAsyncronously(fdNumber, mode) {
  fs.fchmod(fdNumber, mode);
}
// fs.fchmodSync() : Syncronously set file permissions of a file

// fs.close();
// fs.closeSync() : Closes the file descriptor. Returns undefined
function closeFileDescriptor(fileDescriptorNumber) {
  try {
    fs.closeSync(fileDescriptorNumber);
    console.log("Closed file descriptor");
  } catch (err) {
    console.log(err);
  }
}

// COPY FILE OR DIRECTORY ------------------------------

// fs.copyFile();
// fs.copyFileSync() : Synchronously copies src to dest. By default, dest is overwritten if it already exists. Returns undefined
function copyFile(source, destination, mode) {
  try {
    fs.copyFileSync(source, destination, mode);
    console.log(`copied ${source} file to ${destination}`);
  } catch (err) {
    console.log(err);
  }
}

// fs.cp();
// fs.cpSync() : Synchronously copies the entire directory structure from src to dest, can use urls too
function copyDirectory(directorySource, destination) {
  try {
    fs.cpSync(directorySource, destination);
    console.log(`copied ${directorySource} files to ${destination}`);
  } catch (err) {
    console.log(err);
  }
}

// fs.createReadStream();
// fs.createWriteStream();

// CHECK IF FILE EXISTS ----------------------------------------------------------------

// fs.exists();
// fs.existsSync() : checks to see if the file exists. Returns Boolean
function checkFileExists(file_name) {
  console.log(
    fs.existsSync(file_name)
      ? `${file_name} exists`
      : `${file_name} does not exist`
  );
}

// SET OWNER OF A FILE --------------------------------------------------

// fs.fchown();
// fs.fchownSync() : Sets the owner of the file. Returns undefined
function setOwner(fdNumber, uidNumber, gidNumber) {
  try {
    fs.fchownSync(fdNumber, uidNumber, gidNumber);
  } catch (err) {
    console.log(err);
  }
}

// fs.fdatasync() : Forces all currently queued I/O operations associated with the file to the operating system's synchronized I/O completion state
// fs.fdatasyncSync();

// FILE DESCRIPTOR ------------------------------------------------

// fs.fstat() : Invokes the callback with the fs.Stats for the file descriptor.
// fs.fstatSync();

// fs.fsync() : Request that all data for the open file descriptor is flushed to the storage device.
// fs.fsyncSync();

// fs.ftruncate() : Truncates the file descriptor.
// fs.ftruncateSync();

// fs.futimes() : Change the file system timestamps of the object referenced by the supplied file
// fs.futimesSync();

// SYMBOLIC LINK -------------------------------------------------------------

// fs.lchown() : Set the owner of the symbolic link.
// fs.lchownSync();

// fs.link() : Creates a new link from the existingPath to the newPath.
// fs.linkSync();

// fs.lstat() : Retrieves the fs.Stats for the symbolic link referred to by the path.
// fs.lstatSync();

// fs.lutimes() : Changes the access and modification times of a file in the same way as utimes, with the difference that if the path refers to a symbolic link
// fs.lutimesSync();

// CREATE A DIRECTORY ----------------------------------------------------------------

// fs.mkdir() : Create a directory Asynchronously
// fs.mkdirSync() : Create a directory Synchronously
function createNewDirectory(path) {
  try {
    // check if this folder doesnt exist
    if (!fs.existsSync(path)) {
      // if it doesnt, create it
      fs.mkdirSync(path);
    }
  } catch (error) {
    console.log(error);
  }
}

// fs.mkdtemp() : make a temporary directory Asynchronously
function makeTempDirectory(prefix, path) {
  fs.mkdtemp(prefix, path);
}
// fs.mkdtempSync() : make a temporary directory Synchronously

// OPEN A FILE OR DIRECTORY ----------------------------------------------------------------

// fs.open() : Opens a file using a specific mode of reading, writing or both.
function openFileAsyncronously(path, flag) {
  // the flag must be from a list of existing flags which will determine the mode that the file is opened with, read only, read and write, or write only.
  // r: Opening a file for reading, throwing an exception if the file doesn't exist.
  // r+: Opening a file for both reading and writing, throwing an exception if the file doesn't exist.
  // w: Opening a file for writing, creating the file if it doesn't exist.
  fs.open(path, flag);
}
// fs.openSync();

// fs.opendir();
function openDirectoryAsyncronously(path) {
  fs.opendir(path);
}
// fs.opendirSync();

// READ A FILE OR DIRECTORY ----------------------------------------------------------------

// fs.readdir() : pass in a directory and return an array of strings from the contents of that directory
function readDirectoryAsyncronously(path) {
  fs.readdir(path);
}
// fs.readdirSync() : pass in a directory and return an array of strings from the contents of that directory

// fs.read() : Read data from the file specified
function readFileDataAsyncronously(path) {
  fs.read(path);
}
// fs.readSync();

// fs.readv();
// fs.readvSync();

// fs.readFile() : pass in a file and return an array of strings from the contents of that file, if no encoding is specified then a buffer will be returned
function readFile(directory, encoding) {
  fs.readFile(directory, encoding, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}

// fs.readFileSync();

// fs.readlink();
// fs.readlinkSync();

// fs.realpath();
// fs.realpathSync();

// RENAMING A FILE ------------------------------

// fs.rename() : Renames a file asyncronously
function renameFileAsyncronously(oldName, newName) {
  fs.rename(oldName, newName, (error) => {
    if (error) throw error;
    console.log("Rename complete!");
  });
}

// fs.renameSync() : Renames a file Syncronously
function renameFileSyncronously(oldName, newName) {
  try {
    fs.renameSync(oldName, newName);
  } catch (error) {
    console.log(error);
  }
}

// REMOVE FILES OR DIRECTORY ------------------------------

// fs.rm() : Asynchronously removes files and directories

function removeFilesAndDirectoriesAsyncronously(path) {
  fs.rm(path);
}
// fs.rmSync();

// fs.rmdir();
function removeDirectoryAsyncronously(path) {
  fs.rmdir(path);
}
// fs.rmdirSync();

// fs.stat();
// fs.statSync();
// fs.symlink();
// fs.symlinkSync();
// fs.truncate();
// fs.truncateSync();
// fs.unwatchFile();

// DELETE A FILE -------------------------------------------------

// fs.unlink(fileName, (error) => {handle errors here}) : deletes file
function deleteFile(file_name) {
  fs.unlink(file_name, (err) => {
    if (err) throw err;
    console.log(`File deleted: ${file_name}`);
  });
}
// fs.unlinkSync(fileName, (error) => {handle errors here}) : deletes file;

// fs.utimes(); : Change the file system timestamps ( creation time, modification time, last accessed)
// fs.utimesSync();

// fs.watch(file_name, optional options, listener); : Watch for changes on filename, where filename is either a file or a directory
function watchFile(file_name) {
  fs.watch(file_name);
}

// fs.watchFile();
function watchFile2(file_name) {
  fs.watchFile(
    "D:/Github Repos/javascript-notes/Frameworks/node.js/Core Modules/fsModule.js",
    (curr, prev) => {
      console.log(`the current mtime is: ${curr.mtime}`);
      console.log(`the previous mtime was: ${prev.mtime}`);
    }
  );
}

// fs.writeFile(location+name, 'content of file', (error) => {}); : Creates a new file
fs.writeFile(
  "./Frameworks/node.js/Core Modules/File System/writeFile.html",
  "<h1>Created using writeFile</h1>",
  (error) => {
    if (error) throw error;
  }
);

// fs.writeFileSync();

// fs.write();
// fs.writeSync() : Not sure what this does yet.
function writeSync(fileDescriptorNumber, buffer, offset, length, position) {
  try {
    fs.writeSync(fileDescriptorNumber, buffer, offset, length, position);
  } catch (error) {
    console.log(error);
  }
}

// fs.writev() : Write an array of ArrayBufferViews to the file specified by fd usingwritev()
// position argument : is the offset from the beginning of the file where this data should be written. If typeof position !== 'number', the data will be written at the current position.
function writeArrayBufferViews() {
  fs.writev();
}

// fs.writevSync();
function writeSync() {
  try {
    fs.writevSync();
  } catch (error) {
    console.log(error);
  }
}

// fs.Dir;

// fs.Dirent;

// fs.Stats;

// fs.ReadStream;

// fs.WriteStream;

// fs.FileReadStream();

// fs.FileWriteStream();

// fs._toUnixTimestamp();

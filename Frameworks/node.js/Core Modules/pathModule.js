const path = require("path"); // The node:path module provides utilities for working with file and directory paths.
// console.log(path); // check all path methods

// what can you do with the path object
// Think of the path as a string, which can be split into segments
// path allows us to extract this string data for use in our application. 
// this includes the root, directory, base, extention and name

// path.basename(path) :  returns the last portion of a path, either the file name, or folder name
path.basename("/foo/bar/baz/asdf/quux.html"); // Returns: 'quux.html'
path.basename("/foo/bar/baz/asdf/quux.html", ".html"); // Returns: 'quux'

// path.delimiter : Provides the platform-specific path delimiter, for windows delimiter is ;
console.log(process.env.PATH);

// path.dirname(path) :  returns the directory name of a path
path.dirname("/foo/bar/baz/asdf/quux");
// Returns: '/foo/bar/baz/asdf'

// path.extname(path) : returns the extension of file given by path
path.extname("index.html");
// Returns: '.html'

// path.format(path) : returns the format of file given by path
path.format({
  dir: "C:\\path\\dir",
  base: "file.txt",
});
// Returns: 'C:\\path\\dir\\file.txt'

// path.isAbsolute(path) : returns boolean

// path.normalize(path) : normalizes the given path, resolving '..' and '.' segments.
path.normalize("C:\\temp\\\\foo\\bar\\..\\");
// Returns: 'C:\\temp\\foo\\'

// path.parse(path) : returns an object whose properties represent significant elements of the path. Trailing directory separators are ignored,
path.parse("C:\\path\\dir\\file.txt"); // returns an object with the root, directory, base, extention and name of the path, including their values.
// Returns:
// { root: 'C:\\',
//   dir: 'C:\\path\\dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

// path.relative(from, to) : returns the relative path from from to to based on the current working directory.
path.relative("C:\\orandea\\test\\aaa", "C:\\orandea\\impl\\bbb");
// Returns: '..\\..\\impl\\bbb'

// path.resolve([...paths]) : resolves a sequence of paths or path segments into an absolute path.

// path.sep : Provides the platform-specific path segment separator, windows is \

// path.toNamespacedPath(path) : On Windows systems only, returns an equivalent namespace-prefixed path for the given path.

// path.win32 : provides access to Windows-specific implementations of the path methods.

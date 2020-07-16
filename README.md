# foldercleaner
simple Node.js CLI app that can walk a directory looking to delete files with a particular extension


I needed a quick and dirty way to clean out the .map files that had been created while working in another branch of one of my projects.  i could have just added the .map extension to the gitignore but I wanted to clean out the files instead.  This is a simple walk through the folde rstructure and look for files with a particular extension and deleting he files using the fs npm package. You can use it on the commain line like this:

```
> node folderwalker ClientApp
```

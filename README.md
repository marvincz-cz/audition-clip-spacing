# Adobe Audition Clip Spacing
A script for Adobe Audition to add spacing between imported clips.

## Instructions
* Download [ClipSpacing.jsx](ClipSpacing.jsx) to a known location
* In Adobe Audition, import files to your Multitrack Session. The clips should now be selected
* In the menu, open **File > Browse and Run Script…** and select the downloaded script file

## Configuration
The default pause that is added between clips is 3 seconds. You can change this by editing the script file.

The script starts with these lines:

```js
// CONFIGURATION - SPACING BETWEEN CLIPS IN SECONDS
var OFFSET = 3.0
```

Change the number to change the length of the pause that will be added between clips.

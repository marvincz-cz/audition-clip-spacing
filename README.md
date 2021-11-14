# Adobe Audition Clip Spacing
A script for Adobe Audition to add spacing between selected clips. The clips will be spaced evenly starting from the first one. Make sure there is enough room for the added pauses.

## Instructions
* Download [ClipSpacing.jsx](/../../raw/main/ClipSpacing.jsx) to your computer.
* In Adobe Audition, insert files to your Multitrack Session or select clips. The clips should now be selected.
* In the menu, open **File > Browse and Run Script…** and select the downloaded script file.

## Configuration
The length of the pause between clips is declared at the start of the clip. The default is 3 seconds. You can change this value by editing the script file.

The script starts with these lines:

```js
// CONFIGURATION - SPACING BETWEEN CLIPS IN SECONDS
var OFFSET = 3.0
```

Change the value to change the length of the pause that will be added between clips. Fractional values are allowed.

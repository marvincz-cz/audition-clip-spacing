// CONFIGURATION - SPACING BETWEEN CLIPS IN SECONDS
var OFFSET = 3.0



// selected clips
var selection = app.activeDocument.audioClipSelection;

if (selection && selection.length > 0) {
    // move to an array so they can be sorted
    var clips = Array();
    for (var i = 0; i < selection.length; i++) {
        clips.push(selection[i]);
    }
    // sort by start time
    clips.sort(function (first, second) { return first.startTime - second.startTime });

    // clip times are in samples, determined by the sample rate
    var sampleRate = clips[0].audioFormat.sampleRate;
    var sampleOffset = OFFSET * sampleRate;

    // first clip is also moved
    var lastEnd = clips[0].startTime;
    for (var i = 0; i < clips.length; i++) {
        var clip = clips[i];

        // move clip start to the end of the previous one plus offset
        clip.startTime = lastEnd + sampleOffset;

        lastEnd = clip.startTime + clip.duration;
    }

    "Added " + OFFSET + " second spacing to " + clips.length + " clips.";
} else {
    "No clips selected."
}
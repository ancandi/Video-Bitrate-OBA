// ==UserScript==
// @name YouTube Bitrate O/BA
// @version 1.0.0-S
// @match https://*.youtube.com/*
// @run-at document-start
// ==/UserScript==

(function(d, w) {
    'use strict';
    const s = d.createElement('style');
    s.innerText = 'video{-webkit-perspective:1000;video-rendering:optimizeQuality!important}';
    d.documentElement.append(s);
    (function loop() {
        const p = d.querySelector('#movie_player') || w.movie_player, v = d.querySelector('video');
        if (p && v) {
            const b = v.buffered.length ? v.buffered.end(0) - v.currentTime : 0;
            const q = b > 3 ? 'hd1080' : 'medium';
            p.setPlaybackQualityRange(q, 'highres');
            v.webkitVideoDecodedByteCount !== undefined && w.eval('if(window.movie_player){movie_player.setOption("adaptive","is_obfuscated",!1);movie_player.setOption("adaptive","max_frame_rate",60)}');
        }
        requestAnimationFrame(loop);
    })();
})(document, window);

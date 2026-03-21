// ==UserScript==
// @name Video Bitrate O/BA
// @version 1.0.1
// @match *://*/*
// @run-at document-start
// ==/UserScript==

(function(d, w) {
    'use strict';
    const n = w.MediaSource?.isTypeSupported;
    if (n) w.MediaSource.isTypeSupported = t => t.includes('codecs="avc1') ? !1 : n(t);

    d.addEventListener('loadedmetadata', (e) => {
        const v = e.target;
        if (v && v.tagName === 'VIDEO') {
            const r = v.videoHeight || 0;
            v.preload = "auto";
            if (w.movie_player) {
                const b = r > 1000 ? 18000 : r > 700 ? 12000 : 8000;
                w.movie_player.setOption('adaptive', 'min_bitrate', b);
                w.movie_player.setOption('adaptive', 'is_obfuscated', !1);
            }
        }
    }, true);
})(document, window);
// ==UserScript==
// @name Video Bitrate O/BA (Safari)
// @version 1.0.1
// @match *://*/*
// @run-at document-start
// ==/UserScript==

(function(d, w) {
    'use strict';
    if (w.MediaSource) {
        const n = w.MediaSource.isTypeSupported;
        w.MediaSource.isTypeSupported = t => t.includes('codecs="avc1') ? !1 : n(t);
    }

    d.addEventListener('playing', (e) => {
        const v = e.target;
        if (v.tagName === 'VIDEO') {
            v.preload = "auto";
            if (w.movie_player) {
                const r = v.videoHeight || 0;
                const b = r > 1000 ? 18000 : r > 700 ? 12000 : 8000;
                w.movie_player.setOption('adaptive', 'min_bitrate', b);
                w.movie_player.setOption('adaptive', 'is_obfuscated', !1);
            }
        }
    }, true);
})(document, window);
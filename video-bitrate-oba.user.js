// ==UserScript==
// @name Video Bitrate O/BA
// @version 1.0.0
// @match https://*/*
// @run-at document-start
// ==/UserScript==

(function(d, w) {
    'use strict';
    const n = w.MediaSource?.isTypeSupported;
    n && (w.MediaSource.isTypeSupported = t => t.includes('codecs="avc1') ? !1 : n(t));
    (function l() {
        d.querySelectorAll('video').forEach(v => {
            const p = d.querySelector('#movie_player') || w.movie_player;
            if (p && v.readyState > 0) {
                const r = v.videoHeight || 0, b = r > 1000 ? 18000 : r > 700 ? 12000 : 8000;
                p.setOption('adaptive', 'min_bitrate', b);
                p.setOption('adaptive', 'is_obfuscated', !1);
                const q = p.getAvailableQualityLevels?.();
                q?.length && p.setPlaybackQualityRange(q[0], 'highres');
            }
        });
        requestAnimationFrame(l);
    })();
})(document, window);
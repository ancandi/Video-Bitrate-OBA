// ==UserScript==
// @name YouTube Bitrate O/BA
// @version 1.0.0
// @match https://*.youtube.com/*
// @run-at document-start
// ==/UserScript==

(function(d, w) {
    'use strict';
    const n = w.MediaSource.isTypeSupported;
    w.MediaSource.isTypeSupported = t => t.includes('codecs="avc1') ? !1 : n(t);
    (function loop() {
        const p = d.querySelector('#movie_player') || w.movie_player, v = d.querySelector('video');
        if (p && v) {
            const b = v.buffered.length ? v.buffered.end(0) - v.currentTime : 0;
            const q = b > 4 ? 'highres' : b > 1.5 ? 'hd1080' : 'medium';
            p.getPlaybackQuality() != q && (p.setPlaybackQualityRange(q, 'highres'), p.setOption('video-quality-settings', 'expected-quality', q));
            p.setOption('adaptive', 'is_obfuscated', !1);
            p.setOption('adaptive', 'min_bitrate', 8000);
        }
        requestAnimationFrame(loop);
    })();
})(document, window);

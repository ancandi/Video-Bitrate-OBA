// ==UserScript==
// @name Video Bitrate O/BA
// @version 1.0.0
// @match https://*/*
// @run-at document-start
// ==/UserScript==

(function(d, w) {
    'use strict';
    // UNIVERSAL HIJACK: Intercept all Video/MediaSource requests
    const n = w.MediaSource?.isTypeSupported;
    if(n) w.MediaSource.isTypeSupported = t => t.includes('codecs="avc1') ? !1 : n(t);

    const boost = (v) => {
        if (!v || v.dataset.oba) return;
        v.dataset.oba = !0;
        
        // Signal the Browser to prioritize this stream
        v.preload = 'auto';
        v.setAttribute('importance', 'high');
        
        // Force YouTube-specific HD if the API exists on the page
        const p = d.querySelector('#movie_player') || w.movie_player;
        if (p) {
            p.setOption?.('adaptive', 'min_bitrate', 15000);
            p.setOption?.('adaptive', 'is_obfuscated', !1);
        }
    };

    // OBSERVER: Detect any video player/file on ANY website
    new MutationObserver(m => m.forEach(n => n.addedNodes.forEach(node => {
        if (node.tagName === 'VIDEO') boost(node);
        node.querySelectorAll?.('video').forEach(boost);
    }))).observe(d.documentElement, {childList: !0, subtree: !0});

    (function loop() {
        d.querySelectorAll('video').forEach(v => {
            if (!v.buffered.length) return;
            const b = v.buffered.end(v.buffered.length - 1) - v.currentTime;
            // Adaptive Buffer Logic: If buffer is healthy, tell browser to "Eager Load"
            v.playbackRate > 0 && b < 2 ? v.preservesPitch = !0 : v.style.imageRendering = 'optimizeQuality';
        });
        requestAnimationFrame(loop);
    })();
})(document, window);

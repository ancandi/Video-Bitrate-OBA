// ==UserScript==
// @name Video Bitrate O/BA [Universal-WebKit]
// @version 1.2.3
// @match https://*/*
// @run-at document-start
// ==/UserScript==

(function(d, w) {
    'use strict';
    // GPU ACCELERATION: Force WebKit to prioritize video data over battery
    const s = d.createElement('style');
    s.innerText = 'video{video-rendering:optimizeQuality!important;-webkit-font-smoothing:antialiased;image-rendering:optimizeQuality!important}';
    d.documentElement.append(s);

    const boost = (v) => {
        v.setAttribute('webkit-playsinline', '');
        v.setAttribute('playsinline', '');
        v.preload = 'auto';
    };

    new MutationObserver(m => m.forEach(n => n.addedNodes.forEach(node => {
        if (node.tagName === 'VIDEO') boost(node);
        node.querySelectorAll?.('video').forEach(boost);
    }))).observe(d.documentElement, {childList: !0, subtree: !0});

    (function loop() {
        d.querySelectorAll('video').forEach(v => {
            // Safari/iOS Power-Saving Bypass
            if (v.readyState > 0 && v.paused === false) {
                v.style.filter = 'contrast(1.001)'; // Micro-filter to keep GPU compositor active
                if (w.movie_player) w.eval('movie_player.setPlaybackQualityRange("highres")');
            }
        });
        requestAnimationFrame(loop);
    })();
})(document, window);

// ==UserScript==
// @name YouTube Bitrate O/BA
// @version 1.0.0-S
// @match https://*.youtube.com/*
// @run-at document-start
// ==/UserScript==

(function(d, w) {
    'use strict';
    // GPU ACCELERATION: Force Safari to render high-fidelity paths
    const s = d.createElement('style');
    s.innerText = 'video{video-rendering:optimizeQuality!important;-webkit-font-smoothing:antialiased}';
    d.documentElement.append(s);

    (function loop() {
        const p = d.querySelector('#movie_player') || w.movie_player, v = d.querySelector('video');
        if (p && v && v.readyState > 0) {
            const b = v.buffered.length ? v.buffered.end(v.buffered.length - 1) - v.currentTime : 0;
            const q = b > 4 ? 'hd1080' : 'medium';
            
            p.setPlaybackQualityRange?.(q, 'highres');
            // WebKit Bypass: Bypass power-saving throtte via internal eval
            if (v.webkitVideoDecodedByteCount > 0) {
                w.eval(`if(window.movie_player){
                    movie_player.setOption("adaptive","is_obfuscated",false);
                    movie_player.setOption("adaptive","max_frame_rate",60);
                }`);
            }
        }
        requestAnimationFrame(loop);
    })();
})(document, window);

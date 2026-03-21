// ==UserScript==
// @name Video Bitrate O/BA
// @version 1.0.0
// @match https://*/*
// @run-at document-start
// ==/UserScript==

(function(d, w) {
    'use strict';
    (function l() {
        d.querySelectorAll('video').forEach(v => {
            const p = w.movie_player;
            if (p && v.readyState > 0) {
                p.setPlaybackQualityRange(v.videoHeight <= 360 ? 'hd720' : 'highres', 'highres');
                w.eval('if(window.movie_player){movie_player.setOption("adaptive","min_bitrate",10000);movie_player.setOption("adaptive","max_frame_rate",60)}');
            }
            v.setAttribute('importance', 'high');
            v.preload = 'auto';
        });
        requestAnimationFrame(l);
    })();
})(document, window);
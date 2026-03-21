// ==UserScript==
// @name YouTube Bitrate O/BA
// @version 1.0.0
// @match https://*.youtube.com/*
// @run-at document-start
// ==/UserScript==

(function(d, w) {
    'use strict';
    // CODEC OVERDRIVE: Nuke low-bitrate AVC1 to force VP9/AV1
    const n = w.MediaSource.isTypeSupported;
    w.MediaSource.isTypeSupported = t => t.includes('codecs="avc1') ? !1 : n(t);

    // EXPERIMENT FLAGS: Force High-Bitrate "Desktop" Logic
    const cfg = () => {
        const c = w.yt?.config_ || w.ytcfg?.data_;
        if (c?.EXPERIMENT_FLAGS) {
            Object.assign(c.EXPERIMENT_FLAGS, {
                smart_streaming_bitrate_adjustment: !1,
                web_force_eager_ad_loading: !0,
                web_player_api_force_hd: !0,
                allow_high_bitrate_for_low_res: !0
            });
        }
    };

    (function loop() {
        cfg(); // Continuous injection to prevent YT reset
        const p = d.querySelector('#movie_player') || w.movie_player, v = d.querySelector('video');
        if (p && v && v.readyState > 2) {
            const b = v.buffered.length ? v.buffered.end(v.buffered.length - 1) - v.currentTime : 0;
            const q = b > 3 ? 'highres' : b > 1.2 ? 'hd1080' : 'medium';
            
            // Force quality and clear throttle flags
            if (p.getPlaybackQuality?.() != q) {
                p.setPlaybackQualityRange?.(q, 'highres');
                p.setOption?.('video-quality-settings', 'expected-quality', q);
            }
            p.setOption?.('adaptive', 'is_obfuscated', !1);
            p.setOption?.('adaptive', 'min_bitrate', 12000); // Massive bitrate floor
        }
        requestAnimationFrame(loop);
    })();
})(document, window);

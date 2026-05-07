# Video Bitrate O/BA 🚀📊
**Video Bitrate O/BA (Overdrive/Buffer Adaptive), A high-performance, ultra-lean solution designed to bypass mobile bitrate caps and force high-fidelity streams. maximum data-to-pixel efficiency and zero-stutter playback.**

Unlike standard quality forcers, this script hijacks the **`MediaSource API`** and player internal options to prioritize high-bitrate codecs (VP9/AV1). It ensures that even at **`lower resolutions like 144p`**, the video maintains maximum visual data and clarity by neutralizing "Auto" throtte flags.

<br>

## 📥 Installation
**[Download for Chrome / Firefox / Android](https://github.com/ancandi/Video-Bitrate-OBA/raw/refs/heads/main/video-bitrate-oba.user.js)** *(Optimized for Blink engine adaptive buffer logic)*

**[Download for Safari / iOS / macOS](https://github.com/ancandi/Video-Bitrate-OBA/raw/refs/heads/main/video-bitrate-oba-safari.user.js)** *(Optimized for WebKit hardware-accelerated decoding)*

<br>

## 🛠️ How to Use
* **Install**: Add the script via Tampermonkey, Userscripts (Safari), or your preferred mobile script manager.
* **Automatic Scaling**: The engine monitors your real-time network buffer. On strong connections, it forces desktop-grade bitrates; if the buffer starves, it dynamically yields to prevent stalling.
* **Universal Player Support**: Active across sites like YouTube, the standard watch page, and embedded mobile players.

<br>

## 🚀 Key Features
* **Codec Overdrive**: Rejects low-bitrate AVC1 streams to force video players to serve superior VP9/AV1 containers with higher bit-per-pixel density.
* **Buffer-Adaptive Sync**: Utilizes **`requestAnimationFrame`** to check buffer health at 60fps, scaling quality only when data headroom is detected.
* **Data Saver Neutralization**: Overrides internal **`is_obfuscated`** flags that video players use to silently throttle mobile users on cellular data.
* **Zero-Latency Injection**: Executes at **`document-start`** to intercept the initial MediaSource manifest before the low-quality stream initializes.

<br>

## ⚡ Technical Comparison
| Feature | Generic YouTube Web (Mobile) | Generic Video Player | Overdrive Optimized |
| :--- | :--- | :--- | :--- |
| **Bitrate Cap** | Aggressive (App-Level) | Browser-Level Throttle | **Bypassed (Desktop Logic)** |
| **Codec Priority** | Low-Bandwidth AVC1 | System Default | **High-Fidelity VP9/AV1** |
| **Buffering** | Static/Predictive | Reactive (Late) | **rAF Real-time Monitoring** |
| **Visual Clarity** | Muddy (Compression) | Standard | **Crisp (Zero-Artifact)** |
| **Data Logic** | Throttled on Cellular | Unoptimized | **Adaptive Throughput** |

<br>

## AND1 UserScripts — This is the complete collection of high-performance, streamlined userscripts designed to reclaim control over mobile web experiences. ⬇
> Otherwise, check out the full source code and technical documentation at **[github.com/ancandi](https://github.com/ancandi)**.

<br>

## 🔍 Looking for more?
### 🛠️ The Userscript Directory
> **Optimization Level:** Featherweight | **Last Updated:** 2026

#### 🚀 Primary Utilities (ancandi)
* **YouTube Mobile URL Shield AB+** — UI-driven unmute & ad-nuke (v3.0.8).
* **Video Bitrate O/BA** — Adaptive codec & bitrate overdrive (v1.0.1).
* **Force Dark Mode Exceptions** — Contrast & UI control for Chromium/Desktop (v1.0).
* **Night Mode Disabler (Whitelist)** — Contrast control for mobile UI (v1.0.1).
* **YouTube Shield (Zero UI)** — Invisible automation engine (v4.0.1).

#### 🔗 External Resources
* ⚡ **Evade** — via **[Evade - Link Bypasser](https://skipped.lol/)**
* **AdGuard Extra** — Advanced anti-adblock bypass.
* **AdsBypasser** — Countdown and redirect skip logic.
* **FMHY Base64 Auto Decoder** — Automatic string decoding for piracy/sharing.
* **Bypass All Shortlinks** — Universal link-shortener skip.
* **I don't care about cookies** — Automated cookie consent handling.

#### ⚠️ Maintenance & Status
* **Login reminder popup remover** — `[DEVELOPMENT CEASED]`
---
## AND1 UserScripts — This is the complete collection of high-performance, streamlined userscripts designed to reclaim control over mobile web experiences. ⬇
> Otherwise, check out the full source code and technical documentation at **[github.com/ancandi](https://github.com/ancandi)**.

---

#### 🚀 Video Bitrate O/BA
**Version 1.0.1** | *Adaptive Codec & Bitrate Overdrive*

Forces high-fidelity VP9/AV1 streams and bypasses mobile data throttling by hijacking the MediaSource API and mapping bitrate to real-time resolution.

* **>Install: Video Bitrate O/BA**
    * [Standard Build (Blink)](https://github.com/ancandi/YouTube-Bitrate-Overdrive/raw/main/video-bitrate-oba.user.js)
* **>Install: Video Bitrate O/BA [Safari]**
    * [Safari Build (WebKit)](https://github.com/ancandi/YouTube-Bitrate-Overdrive/raw/main/video-bitrate-oba-safari.user.js)

---

#### 🛡️ YouTube Mobile URL Shield AB+
**Version 3.0.8** | *UI-Driven Interaction Off*

Automates the "Tap to Unmute" process on mobile, nukes monetization-slots, and prevents player stalls with a custom frosted-glass UI.

* **>Install: YouTube Mobile URL Shield AB+**
    * [Standard Build](https://github.com/ancandi/YouTube-Mobile-URL-Shield-AB/raw/refs/heads/main/main/url-shield-ab+-latest-beta.user.js)
* **>Install: YouTube Mobile URL Shield AB+ [Safari]**
    * [Safari Build (WebKit)](https://github.com/ancandi/YouTube-Mobile-URL-Shield-AB/raw/refs/heads/main/main/url-shield-ab+-safari-beta.user.js)

---

#### 🌙 Night Mode Disabler & Whitelist (M)
**Version 1.0.1** | *Contrast & UI Control*

Prevents aggressive "Forced Dark Mode" on mobile browsers from breaking specific site UI elements. Includes whitelist settings to maintain original site aesthetics where dark mode fails.

* **>Install: Night Mode Disabler**
    * [Standard Build](https://github.com/ancandi/Night-Mode-Disabler-Whitelist-M/raw/main/night-mode-disabler.user.js)
* **>Install: Night Mode Disabler [Safari]**
    * [Safari Build (WebKit)](https://github.com/ancandi/Night-Mode-Disabler-Whitelist-M/raw/main/night-mode-disabler-safari.user.js)
      
---

#### 🕶 Force Dark Mode Exceptions
**Version 1.1** | *UI Fidelity & Chrome Desktop Flag Control*

Neutralizes the aggressive enable-force-dark flag in Chrome for specific sites. Prevents broken UI elements and maintains original color palettes on whitelisted domains.

* **>Install: Force Dark Mode Exceptions**
    * [Standard Build](https://github.com/ancandi/Force-Dark-Mode-Exceptions/raw/refs/heads/main/force-dark-mode-exceptions.user.js)
  
---

<br>

## 📜 Copyright
Personal use and modification are permitted. Repackaging, rebranding, or unauthorized publishing of this code is strictly forbidden. 

© Copyright 2026. All rights reserved.

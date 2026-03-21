# YouTube Bitrate O/BA 🚀📊
**YouTube Bitrate O+ (Overdrive/Buffer Adaptive), A high-performance, ultra-lean solution designed to bypass mobile bitrate caps and force high-fidelity streams. maximum data-to-pixel efficiency and zero-stutter playback.**

Unlike standard quality forcers, this script hijacks the **`MediaSource API`** and player internal options to prioritize high-bitrate codecs (VP9/AV1). It ensures that even at **`lower resolutions like 144p`**, the video maintains maximum visual data and clarity by neutralizing "Auto" throtte flags.

<br>

## 📥 Installation
**[Download for Chrome / Kiwi / Android](https://github.com/ancandi/YouTube-Bitrate-Overdrive/raw/main/youtube-bitrate-oba.user.js)** *(Optimized for Blink engine adaptive buffer logic)*

**[Download for Safari / iOS / macOS](https://github.com/ancandi/YouTube-Bitrate-Overdrive/raw/main/youtube-bitrate-oba-safari.user.js)** *(Optimized for WebKit hardware-accelerated decoding)*

<br>

## 🛠️ How to Use
* **Install**: Add the script via Tampermonkey, Userscripts (Safari), or your preferred mobile script manager.
* **Automatic Scaling**: The engine monitors your real-time network buffer. On strong connections, it forces desktop-grade bitrates; if the buffer starves, it dynamically yields to prevent stalling.
* **Universal Player Support**: Active across YouTube Shorts, the standard watch page, and embedded mobile players.

<br>

## 🚀 Key Features
* **Codec Overdrive**: Rejects low-bitrate AVC1 streams to force YouTube to serve superior VP9/AV1 containers with higher bit-per-pixel density.
* **Buffer-Adaptive Sync**: Utilizes `requestAnimationFrame` to check buffer health at 60fps, scaling quality only when data headroom is detected.
* **Data Saver Neutralization**: Overrides internal `is_obfuscated` flags that YouTube uses to silently throttle mobile users on cellular data.
* **Zero-Latency Injection**: Executes at `document-start` to intercept the initial MediaSource manifest before the low-quality stream initializes.

<br>

## ⚡ Technical Comparison
| Feature | Generic YouTube (Mobile) | Generic Video Player | Overdrive Optimized |
| :--- | :--- | :--- | :--- |
| **Bitrate Cap** | Aggressive (App-Level) | Browser-Level Throttle | **Bypassed (Desktop Logic)** |
| **Codec Priority** | Low-Bandwidth AVC1 | System Default | **High-Fidelity VP9/AV1** |
| **Buffering** | Static/Predictive | Reactive (Late) | **rAF Real-time Monitoring** |
| **Visual Clarity** | Muddy (Compression) | Standard | **Crisp (Zero-Artifact)** |
| **Data Logic** | Throttled on Cellular | Unoptimized | **Adaptive Throughput** |

<br>

## ⚙️ Other Utility Extensions
- Looking for more? Try out other userscript utilities: [Evade - Link Bypasser](https://skipped.lol/)

`[System Overview: Available Consumer-Based Active Mobile Userscripts]`

<img width="200" height="500" alt="image" src="https://github.com/user-attachments/assets/ea1f8205-4a4a-49f3-9eae-7b6e3d35873f" />

<br>

## 📜 Copyright
Personal use and modification are permitted. Repackaging, rebranding, or unauthorized publishing of this code is strictly forbidden. 

© Copyright 2026. All rights reserved.

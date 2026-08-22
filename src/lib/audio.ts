"use client";

class ForestAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private gainNode: GainNode | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;
  private filterNode: BiquadFilterNode | null = null;
  private intervalId: NodeJS.Timeout | null = null;

  private init() {
    if (typeof window === "undefined") return;
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    this.ctx = new AudioCtx();
    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(0.04, this.ctx.currentTime);
    this.gainNode.connect(this.ctx.destination);
  }

  public play() {
    if (!this.ctx) this.init();
    if (!this.ctx || this.isPlaying) return;

    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    // Create soothing wind / leaves rustle pink noise
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
      b6 = white * 0.115926;
    }

    this.noiseNode = this.ctx.createBufferSource();
    this.noiseNode.buffer = buffer;
    this.noiseNode.loop = true;

    // Filter to simulate soft forest breeze
    this.filterNode = this.ctx.createBiquadFilter();
    this.filterNode.type = "lowpass";
    this.filterNode.frequency.setValueAtTime(320, this.ctx.currentTime);

    this.noiseNode.connect(this.filterNode);
    if (this.gainNode) {
      this.filterNode.connect(this.gainNode);
    }
    this.noiseNode.start();
    this.isPlaying = true;

    // Occasional gentle bird chirp
    this.intervalId = setInterval(() => {
      if (!this.isPlaying || !this.ctx || !this.gainNode) return;
      this.playGentleChirp();
    }, 4500);
  }

  private playGentleChirp() {
    if (!this.ctx || !this.gainNode) return;
    try {
      const osc = this.ctx.createOscillator();
      const chirpGain = this.ctx.createGain();
      osc.type = "sine";
      const now = this.ctx.currentTime;
      const baseFreq = 2400 + Math.random() * 800;
      
      osc.frequency.setValueAtTime(baseFreq, now);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, now + 0.08);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.8, now + 0.16);

      chirpGain.gain.setValueAtTime(0.001, now);
      chirpGain.gain.exponentialRampToValueAtTime(0.02, now + 0.04);
      chirpGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);

      osc.connect(chirpGain);
      chirpGain.connect(this.gainNode);

      osc.start(now);
      osc.stop(now + 0.2);
    } catch {
      // AudioContext lifecycle safety
    }
  }

  public stop() {
    if (!this.isPlaying) return;
    if (this.noiseNode) {
      try {
        this.noiseNode.stop();
        this.noiseNode.disconnect();
      } catch {}
    }
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.isPlaying = false;
  }
}

export const forestAudio = new ForestAudioEngine();

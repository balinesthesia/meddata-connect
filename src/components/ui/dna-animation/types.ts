
export interface DNAStrand {
  x: number;
  y: number;
  z: number;
  radius: number;
  color: string;
  opacity: number;
}

export interface Particle {
  x: number;
  y: number;
  z: number;
  radius: number;
  color: string;
  opacity: number;
  orbitRadius: number;
  orbitSpeed: number;
  angle: number;
  fadeDirection: number;
}

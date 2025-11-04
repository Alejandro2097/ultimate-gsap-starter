import gsap from "gsap";

// Button: Quick, snappy bounce - power4.out for that responsive "pop"
// Fast entrance (0.5s) with strong deceleration = feels clickable and energetic
gsap.from(".btn", {
  y: 50,
  opacity: 0,
  duration: 0.5,
  ease: "power4.out",
  delay: 0.1
});

// Toast: Smooth slide with soft settle - power2.out for gentle, non-intrusive entry
// Moderate speed (0.8s) with gentle ease = notification that doesn't demand attention
gsap.from(".toast", {
  x: -350,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  delay: 0.3
});

// Card: Confident expansion - power3.inOut for balanced, professional feel
// Measured pace (1s) with symmetrical ease = trustworthy and polished
gsap.from(".card", {
  scale: 0.85,
  opacity: 0,
  duration: 1,
  ease: "power3.inOut",
  delay: 0.5
});
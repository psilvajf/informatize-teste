"use client";

import { useEffect, useRef } from 'react';
import Script from 'next/script';

// Declare global THREE variable for TypeScript
declare global {
  interface Window {
    THREE: any;
  }
}

interface ThreeJsTerminalProps {
  width: number;
  height: number;
}

export default function ThreeJsTerminal({ width, height }: ThreeJsTerminalProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This script will run after the component mounts and ThreeJS has loaded
    const script = document.createElement('script');
    script.innerHTML = `
      // --- Three.js Global Variables ---
      let scene, camera, renderer, planeMesh;
      let terminalTexture, terminalCanvas, terminalCtx;
      let uniforms;

      // --- Terminal State Variables ---
      const lines = ['Welcome to the KYTZO Terminal!', 'Type "help" for commands.', '> '];
      let currentLine = '> ';
      const characterWidth = 15;
      const lineHeight = 30;
      let lastBlinkTime = 0;
      const blinkInterval = 600;
      const scrollbackBuffer = 50;
      // Store the current font setting
      let currentFont = '28px "VT323", monospace';

      // --- Vertex Shader (Identical) ---
      const vertexShader = \`
          varying vec2 vUv;
          void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
      \`;

      // --- Fragment Shader (Added Base Glow) ---
      const fragmentShader = \`
          uniform sampler2D uTexture;
          uniform float uTime;
          uniform vec2 uResolution;
          uniform float uCurvature; // Curvature amount
          uniform float uScanlineIntensity;
          uniform float uVignetteIntensity;
          uniform float uNoiseAmount;
          uniform float uHumBarIntensity;

          varying vec2 vUv;

          // --- Effect Helper Functions ---
          vec2 curve(vec2 uv, float amount) { // CRT Curvature
              uv = (uv - 0.5) * 2.0;
              uv *= 1.0 + dot(uv.yx, uv.yx) * amount;
              return (uv * 0.5) + 0.5;
          }

          float random(vec2 st) { // Simple pseudo-random
              return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
          }

          float valueNoise(vec2 st) { // Smoother noise
              vec2 i = floor(st);
              vec2 f = fract(st);
              vec2 u = f * f * (3.0 - 2.0 * f);
              float a = random(i);
              float b = random(i + vec2(1.0, 0.0));
              float c = random(i + vec2(0.0, 1.0));
              float d = random(i + vec2(1.0, 1.0));
              return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
          }
          // --- End Helper Functions ---

          void main() {
              // 0. Apply Subtle Wobble/Distortion
              vec2 wobbledUv = vUv;
              float wobbleIntensity = 0.0015;
              wobbledUv.x += sin(uTime * 0.8 + vUv.y * 8.0) * wobbleIntensity;
              wobbledUv.y += cos(uTime * 0.5 + vUv.x * 10.0) * wobbleIntensity;

              // 1. Apply screen curvature (using uniform uCurvature)
              vec2 curvedUv = curve(wobbledUv, uCurvature);
              vec2 effectUv = curvedUv;
              vec2 sampleUv = curvedUv;

              // 2. Calculate Glitch Effect (Reduced Frequency)
              float glitchIntensity = 0.0;
              float glitchTrigger = random(vec2(floor(uTime * 0.6)));
              if (glitchTrigger > 0.92) {
                   if(random(vec2(uTime * 12.0)) > 0.80) {
                      glitchIntensity = random(effectUv.yx + uTime) * 0.4 + 0.3;
                      effectUv.x += (valueNoise(effectUv * 10.0 + uTime * 5.0) - 0.5) * 0.08 * glitchIntensity;
                      sampleUv = effectUv;
                   }
              }

              // 3. Sample Texture (with Chromatic Aberration during glitch)
              vec4 color = vec4(0.0, 0.0, 0.0, 1.0); // Default black
              vec4 baseSample = vec4(0.0);
              if (sampleUv.x >= 0.0 && sampleUv.x <= 1.0 && sampleUv.y >= 0.0 && sampleUv.y <= 1.0) {
                  if (glitchIntensity > 0.15) { // Chromatic Aberration
                      float r_offset = (random(sampleUv + uTime * 1.1) - 0.5) * 0.008 * glitchIntensity;
                      float b_offset = (random(sampleUv + uTime * 1.3) - 0.5) * 0.008 * glitchIntensity;
                      vec2 uvR = clamp(sampleUv + vec2(r_offset, 0.0), 0.0, 1.0);
                      vec2 uvB = clamp(sampleUv + vec2(b_offset, 0.0), 0.0, 1.0);
                      baseSample.r = texture2D(uTexture, uvR).r;
                      baseSample.g = texture2D(uTexture, sampleUv).g;
                      baseSample.b = texture2D(uTexture, uvB).b;
                      baseSample.a = texture2D(uTexture, sampleUv).a;
                  } else { // Normal Sampling
                      baseSample = texture2D(uTexture, sampleUv);
                  }
              }
              color = baseSample; // Assign the sampled color

              // 4. Apply Subtle Glow/Bloom Approximation
              float glowFactor = pow(baseSample.g, 4.0) * 0.08;
              if (glowFactor > 0.01) {
                  vec2 pixelSize = 1.0 / uResolution.xy;
                  vec4 glowSum = vec4(0.0);
                  glowSum += texture2D(uTexture, clamp(sampleUv + pixelSize * vec2( 1.0,  1.0), 0.0, 1.0));
                  glowSum += texture2D(uTexture, clamp(sampleUv + pixelSize * vec2(-1.0,  1.0), 0.0, 1.0));
                  glowSum += texture2D(uTexture, clamp(sampleUv + pixelSize * vec2( 1.0, -1.0), 0.0, 1.0));
                  glowSum += texture2D(uTexture, clamp(sampleUv + pixelSize * vec2(-1.0, -1.0), 0.0, 1.0));
                  color.rgb += glowSum.rgb * glowFactor * 0.25;
              }

              // 5. Apply Scanlines
              float flicker = sin(uTime * 18.0) * 0.008;
              float scanlineYJitter = (random(vec2(curvedUv.x + uTime * 0.1, uTime * 50.0)) - 0.5) * 0.002;
              float scanlineY = curvedUv.y + scanlineYJitter;
              float scanline = sin(scanlineY * uResolution.y * 1.5 + uTime * 3.0) * (uScanlineIntensity + flicker);
              color.rgb -= scanline * 0.5;

              // 6. Apply Interlacing Effect
              float interlaceIntensity = 0.06;
              float interlace = mod(floor(curvedUv.y * uResolution.y * 0.4), 2.0) * interlaceIntensity;
              color.rgb -= interlace;

              // 7. Apply Hum Bar
              float hum = sin(curvedUv.y * 10.0 - uTime * 4.0) * uHumBarIntensity;
              hum = smoothstep(0.0, 1.0, hum) * uHumBarIntensity;
              color.rgb += hum * 0.5;

              // 8. Apply Vignette
              float vignette = length((curvedUv - 0.5) * uVignetteIntensity);
              // Apply vignette effect *before* adding base glow
              color.rgb = mix(color.rgb, vec3(0.0), vignette);

              // 9. Apply Noise
              float noise = (valueNoise(curvedUv * vec2(1.5, 3.0) + uTime * 0.2) - 0.5) * (uNoiseAmount + glitchIntensity * 0.3);
              color.rgb += noise;

              // 10. Apply Additive Base Glow (Phosphor Glow)
              // Makes black areas slightly green, stronger towards center
              vec3 baseGlow = vec3(0.0, 0.06, 0.04); // Small green/cyan glow amount
              // Modulate glow by inverse vignette factor (stronger in center)
              color.rgb += baseGlow * (1.0 - vignette * 0.8); // Adjust 0.8 to control falloff

              // 11. Apply Multiplicative Color Tint
              color.rgb *= vec3(0.9, 1.02, 0.88); // Subtle Green Tint

              // 12. Final Clamping
              color.rgb = max(color.rgb, 0.0); // Ensure color doesn't go below black

              gl_FragColor = color;
          }
      \`;

      // --- Initialization Function ---
      function init() {
          // --- Setup 2D Canvas ---
          terminalCanvas = document.createElement('canvas');
          const containerEl = document.getElementById('terminal-container');
          const containerWidth = containerEl.clientWidth;
          const containerHeight = containerEl.clientHeight;
          const windowAspect = containerWidth / containerHeight;
          terminalCanvas.width = 1280;
          terminalCanvas.height = Math.round(terminalCanvas.width / windowAspect);
          
          terminalCtx = terminalCanvas.getContext('2d');
          terminalCtx.font = currentFont;
          
          // Enable better text rendering
          terminalCtx.textBaseline = 'top';
          terminalCtx.imageSmoothingEnabled = true;

          // --- Setup Three.js ---
          scene = new THREE.Scene();
          camera = new THREE.PerspectiveCamera(75, windowAspect, 0.1, 1000);
          renderer = new THREE.WebGLRenderer({ antialias: true });
          renderer.setSize(containerWidth, containerHeight);
          containerEl.appendChild(renderer.domElement);

          // --- Setup Texture & Material ---
          terminalTexture = new THREE.CanvasTexture(terminalCanvas);
          terminalTexture.minFilter = THREE.LinearFilter;
          terminalTexture.magFilter = THREE.LinearFilter;

          // Define uniforms (Curvature reduced)
          uniforms = {
              uTexture: { value: terminalTexture },
              uTime: { value: 0.0 },
              uResolution: { value: new THREE.Vector2(containerWidth, containerHeight) },
              uCurvature: { value: 0.07 }, 
              uScanlineIntensity: { value: 0.02 },
              uVignetteIntensity: { value: 1.3 },
              uNoiseAmount: { value: 0.03 },
              uHumBarIntensity: { value: 0.015 }
          };

          const material = new THREE.ShaderMaterial({
              uniforms: uniforms,
              vertexShader: vertexShader,
              fragmentShader: fragmentShader,
              transparent: true
          });

          // --- Create Screen Plane ---
          const planeHeight = 6;
          const planeWidth = planeHeight * (terminalCanvas.width / terminalCanvas.height);
          const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
          planeMesh = new THREE.Mesh(geometry, material);
          scene.add(planeMesh);

          // --- Position Camera ---
          camera.position.z = planeHeight / (2 * Math.tan(Math.PI * camera.fov / 360));

          // --- Setup Event Listeners ---
          window.addEventListener('resize', onWindowResize, false);
          containerEl.addEventListener('click', () => {
               document.getElementById('hiddenInput').focus();
          });
          document.getElementById('hiddenInput').addEventListener('input', onInput);
          document.getElementById('hiddenInput').addEventListener('keydown', onKeyDown);

          // --- Final Init ---
          document.getElementById('hiddenInput').value = currentLine;
          drawTerminal();
          animate();
      }

      // --- Draw Terminal Function ---
      function drawTerminal() {
          const currentTime = performance.now();
          terminalCtx.fillStyle = '#000';
          terminalCtx.fillRect(0, 0, terminalCanvas.width, terminalCanvas.height);
          terminalCtx.fillStyle = '#0f0';
          terminalCtx.font = currentFont;

          // Add padding to position content better vertically
          const verticalPadding = Math.max(30, terminalCanvas.height * 0.1);
          
          const displayableLines = Math.floor((terminalCanvas.height - (verticalPadding * 2)) / lineHeight);
          const totalHistoryLines = lines.length;
          const numHistoryToShow = Math.min(totalHistoryLines, displayableLines - 1);
          const safeNumHistoryToShow = Math.max(0, numHistoryToShow);
          const startHistoryIndex = totalHistoryLines - safeNumHistoryToShow;

          // Horizontal padding for better appearance
          const horizontalPadding = Math.max(20, terminalCanvas.width * 0.05);

          for (let i = 0; i < safeNumHistoryToShow; i++) {
              const yPos = verticalPadding + (i * lineHeight) + lineHeight;
              terminalCtx.fillText(lines[startHistoryIndex + i], horizontalPadding, yPos);
          }

          const currentLineY = verticalPadding + (safeNumHistoryToShow * lineHeight) + lineHeight;
          terminalCtx.fillText(currentLine, horizontalPadding, currentLineY);

          // Smooth Cursor Blink
          const elapsed = (currentTime - lastBlinkTime) % blinkInterval;
          const blinkPhase = elapsed / blinkInterval;
          const cursorOpacity = Math.sin(blinkPhase * Math.PI);
          if (cursorOpacity > 0) {
              const textMetrics = terminalCtx.measureText(currentLine);
              const cursorX = horizontalPadding + textMetrics.width;
              const cursorHeight = lineHeight - 4;
              const cursorY = currentLineY - cursorHeight - 1;
              terminalCtx.fillStyle = \`rgba(0, 255, 0, \${cursorOpacity.toFixed(2)})\`;
              terminalCtx.fillRect(cursorX + 2, cursorY, characterWidth / 1.5, cursorHeight);
          }
          terminalCtx.fillStyle = '#0f0'; // Reset fillStyle

          terminalTexture.needsUpdate = true;
      }

      // --- Input Event Handler ---
      function onInput(event) {
          if (event.target.value.length < 2) {
               event.target.value = '> ';
          }
          currentLine = event.target.value;
      }

      // --- KeyDown Event Handler ---
      function onKeyDown(event) {
          const inputField = event.target;
          if (event.key === 'Enter') {
              event.preventDefault();
              lines.push(currentLine);
              const commandLine = currentLine.substring(2).trim();
              // Command Processing...
              if (commandLine.toLowerCase() === 'clear') { 
                  lines.length = 0; 
                  lines.push('Terminal cleared.'); 
                  lines.push('Type "help" for commands.');
              } else if (commandLine.startsWith('echo ')) { 
                  lines.push(commandLine.substring(5));
              } else if (commandLine === 'help') { 
                  lines.push('Available commands:'); 
                  lines.push('  clear - Clear the terminal screen'); 
                  lines.push('  echo [text] - Display the text');
                  lines.push('  ai - Information about Kytzo AI');
                  lines.push('  display [mode] - Change terminal display (classic/modern/large)');
                  lines.push('  help - Show this help menu');
              } else if (commandLine === 'ai') {
                  lines.push('Kytzo AI - Your intelligent assistant');
                  lines.push('');
                  lines.push('Kytzo is a smart LLM (Large Language Model)');
                  lines.push('created specifically to help you with tasks,');
                  lines.push('answer questions, and provide assistance');
                  lines.push('whenever you need it.');
                  lines.push('');
                  lines.push('Just ask, and Kytzo will be there for you!');
              } else if (commandLine.startsWith('display ')) {
                  const displayOption = commandLine.substring(8).trim().toLowerCase();
                  
                  if (displayOption === 'classic') {
                      // Smaller text, more compact
                      lines.push('Display mode: Classic Terminal');
                      currentFont = '28px "VT323", monospace';
                  } else if (displayOption === 'modern') {
                      // Medium text with good spacing
                      lines.push('Display mode: Modern Terminal');
                      currentFont = '30px "VT323", monospace'; 
                  } else if (displayOption === 'large') {
                      // Large text for better readability
                      lines.push('Display mode: Large Terminal');
                      currentFont = '34px "VT323", monospace';
                  } else {
                      lines.push('Unknown display mode. Options: classic, modern, large');
                  }
                  
                  // Apply new font setting immediately
                  terminalCtx.font = currentFont;
              } else if (commandLine.length > 0) { 
                  lines.push(\`Unknown command: \${commandLine}\`); 
                  lines.push('Type "help" for a list of commands.');
              }
              // Prepare next line...
              lines.push('> '); 
              currentLine = '> '; 
              inputField.value = currentLine;
              // Manage scrollback buffer...
              const displayableLines = Math.floor(terminalCanvas.height / lineHeight);
              const maxHistory = displayableLines + scrollbackBuffer;
              if (lines.length > maxHistory) { 
                  lines.splice(0, lines.length - maxHistory); 
              }
              drawTerminal(); // Force redraw after command
          }
          // Handle Backspace, Arrows, Home...
          else if (event.key === 'Backspace') { 
              if (inputField.selectionStart <= 2 && inputField.selectionEnd <= 2 && currentLine.length <= 2) 
                  event.preventDefault(); 
          }
          else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp' || event.key === 'ArrowDown') { 
              if (inputField.selectionStart <= 2) { 
                  event.preventDefault(); 
                  inputField.setSelectionRange(2, 2); 
              }
          }
          else if (event.key === 'Home') { 
              event.preventDefault(); 
              inputField.setSelectionRange(2, 2); 
          }
      }

      // --- Window Resize Handler ---
      function onWindowResize() {
          const containerEl = document.getElementById('terminal-container');
          const width = containerEl.clientWidth; 
          const height = containerEl.clientHeight;
          camera.aspect = width / height; 
          camera.updateProjectionMatrix();
          renderer.setSize(width, height);
          uniforms.uResolution.value.set(width, height);
          const newAspect = width / height;
          terminalCanvas.height = Math.round(terminalCanvas.width / newAspect);
          drawTerminal(); // Redraw necessary after resize
      }

      // --- Animation Loop ---
      function animate() {
          requestAnimationFrame(animate);
          uniforms.uTime.value = performance.now() * 0.001; // Time in seconds
          renderer.render(scene, camera);
          drawTerminal(); // Redraw needed every frame for smooth cursor/effects
      }

      // Initialize when everything is loaded
      init();
      document.getElementById('hiddenInput').focus();
    `;
    
    // Only append if the container exists and ThreeJS is loaded
    if (containerRef.current && window.THREE) {
      document.body.appendChild(script);
    }

    // Clean up on unmount
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      
      // Remove any THREE.js renderer elements that might have been added
      if (containerRef.current && containerRef.current.querySelector('canvas')) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="relative">
      {/* Add the same SecondaryIllustration as ModalVideo had */}
      <div
        className="pointer-events-none absolute bottom-8 left-1/2 -z-10 -ml-28 -translate-x-1/2 translate-y-1/2"
        aria-hidden="true"
      >
        <img
          className="md:max-w-none"
          src="/images/secondary-illustration.svg"
          width={1165}
          height={1012}
          alt="Secondary illustration"
        />
      </div>
      
      {/* Container for ThreeJS */}
      <div 
        id="terminal-container" 
        ref={containerRef}
        className="rounded-2xl overflow-hidden aspect-video bg-black"
        style={{ width, height }}
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <input type="text" id="hiddenInput" className="absolute left-[-9999px] top-[-9999px] opacity-0" />
      </div>
      
      {/* Load Three.js from CDN */}
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" 
        strategy="beforeInteractive"
      />
      
      {/* Load VT323 font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
        
        #terminal-container {
          margin: 0;
          background-color: #000;
          font-family: 'VT323', monospace;
          color: #0f0;
        }
        
        #terminal-container canvas {
          display: block;
        }
        
        #hiddenInput {
          position: absolute;
          left: -9999px;
          top: -9999px;
          opacity: 0;
        }
        
        body:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
} 
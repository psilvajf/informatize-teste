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
    
    // Use an IIFE (Immediately Invoked Function Expression) to create private scope
    script.innerHTML = `
    (function() {
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
          uniform float uCurvature;
          uniform float uScanlineIntensity;
          uniform float uVignetteIntensity;
          uniform float uNoiseAmount;
          uniform float uHumBarIntensity;

          varying vec2 vUv;

          vec2 curve(vec2 uv, float amount) {
              uv = (uv - 0.5) * 2.0;
              uv *= 1.0 + dot(uv.yx, uv.yx) * amount;
              return (uv * 0.5) + 0.5;
          }

          float random(vec2 st) {
              return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
          }

          float valueNoise(vec2 st) {
              vec2 i = floor(st);
              vec2 f = fract(st);
              vec2 u = f * f * (3.0 - 2.0 * f);
              float a = random(i);
              float b = random(i + vec2(1.0, 0.0));
              float c = random(i + vec2(0.0, 1.0));
              float d = random(i + vec2(1.0, 1.0));
              return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
          }

          void main() {
              vec2 wobbledUv = vUv;
              float wobbleIntensity = 0.0015;
              wobbledUv.x += sin(uTime * 0.8 + vUv.y * 8.0) * wobbleIntensity;
              wobbledUv.y += cos(uTime * 0.5 + vUv.x * 10.0) * wobbleIntensity;

              vec2 curvedUv = curve(wobbledUv, uCurvature);
              vec2 effectUv = curvedUv;
              vec2 sampleUv = curvedUv;

              float glitchIntensity = 0.0;
              float glitchTrigger = random(vec2(floor(uTime * 0.6)));
              if (glitchTrigger > 0.92) {
                   if(random(vec2(uTime * 12.0)) > 0.80) {
                      glitchIntensity = random(effectUv.yx + uTime) * 0.4 + 0.3;
                      effectUv.x += (valueNoise(effectUv * 10.0 + uTime * 5.0) - 0.5) * 0.08 * glitchIntensity;
                      sampleUv = effectUv;
                   }
              }

              vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
              vec4 baseSample = vec4(0.0);
              if (sampleUv.x >= 0.0 && sampleUv.x <= 1.0 && sampleUv.y >= 0.0 && sampleUv.y <= 1.0) {
                  if (glitchIntensity > 0.15) {
                      float r_offset = (random(sampleUv + uTime * 1.1) - 0.5) * 0.008 * glitchIntensity;
                      float b_offset = (random(sampleUv + uTime * 1.3) - 0.5) * 0.008 * glitchIntensity;
                      vec2 uvR = clamp(sampleUv + vec2(r_offset, 0.0), 0.0, 1.0);
                      vec2 uvB = clamp(sampleUv + vec2(b_offset, 0.0), 0.0, 1.0);
                      baseSample.r = texture2D(uTexture, uvR).r;
                      baseSample.g = texture2D(uTexture, sampleUv).g;
                      baseSample.b = texture2D(uTexture, uvB).b;
                      baseSample.a = texture2D(uTexture, sampleUv).a;
                  } else {
                      baseSample = texture2D(uTexture, sampleUv);
                  }
              }
              color = baseSample;

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

              float flicker = sin(uTime * 18.0) * 0.008;
              float scanlineYJitter = (random(vec2(curvedUv.x + uTime * 0.1, uTime * 50.0)) - 0.5) * 0.002;
              float scanlineY = curvedUv.y + scanlineYJitter;
              float scanline = sin(scanlineY * uResolution.y * 1.5 + uTime * 3.0) * (uScanlineIntensity + flicker);
              color.rgb -= scanline * 0.5;

              float interlaceIntensity = 0.06;
              float interlace = mod(floor(curvedUv.y * uResolution.y * 0.4), 2.0) * interlaceIntensity;
              color.rgb -= interlace;

              float hum = sin(curvedUv.y * 10.0 - uTime * 4.0) * uHumBarIntensity;
              hum = smoothstep(0.0, 1.0, hum) * uHumBarIntensity;
              color.rgb += hum * 0.5;

              float vignette = length((curvedUv - 0.5) * uVignetteIntensity);
              color.rgb = mix(color.rgb, vec3(0.0), vignette);

              float noise = (valueNoise(curvedUv * vec2(1.5, 3.0) + uTime * 0.2) - 0.5) * (uNoiseAmount + glitchIntensity * 0.3);
              color.rgb += noise;

              vec3 baseGlow = vec3(0.0, 0.06, 0.04);
              color.rgb += baseGlow * (1.0 - vignette * 0.8);

              color.rgb *= vec3(0.9, 1.02, 0.88);

              color.rgb = max(color.rgb, 0.0);

              gl_FragColor = color;
          }
      \`;

      function init() {
          terminalCanvas = document.createElement('canvas');
          const containerEl = document.getElementById('terminal-container');
          const containerWidth = containerEl.clientWidth;
          const containerHeight = containerEl.clientHeight;
          const windowAspect = containerWidth / containerHeight;
          terminalCanvas.width = 1400;
          terminalCanvas.height = Math.round(terminalCanvas.width / windowAspect);
          
          terminalCtx = terminalCanvas.getContext('2d');
          terminalCtx.font = currentFont;
          
          terminalCtx.textBaseline = 'top';
          terminalCtx.imageSmoothingEnabled = true;

          scene = new THREE.Scene();
          camera = new THREE.PerspectiveCamera(75, windowAspect, 0.1, 1000);
          renderer = new THREE.WebGLRenderer({ antialias: true });
          renderer.setSize(containerWidth, containerHeight);
          containerEl.appendChild(renderer.domElement);

          terminalTexture = new THREE.CanvasTexture(terminalCanvas);
          terminalTexture.minFilter = THREE.LinearFilter;
          terminalTexture.magFilter = THREE.LinearFilter;

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

          const planeHeight = 6;
          const planeWidth = planeHeight * (terminalCanvas.width / terminalCanvas.height);
          const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
          planeMesh = new THREE.Mesh(geometry, material);
          scene.add(planeMesh);

          camera.position.z = planeHeight / (2 * Math.tan(Math.PI * camera.fov / 360));

          window.addEventListener('resize', onWindowResize, false);
          containerEl.addEventListener('click', () => {
               document.getElementById('hiddenInput').focus();
          });
          document.getElementById('hiddenInput').addEventListener('input', onInput);
          document.getElementById('hiddenInput').addEventListener('keydown', onKeyDown);

          document.getElementById('hiddenInput').value = currentLine;
          drawTerminal();
          animate();
      }

      function drawTerminal() {
          const currentTime = performance.now();
          terminalCtx.fillStyle = '#000';
          terminalCtx.fillRect(0, 0, terminalCanvas.width, terminalCanvas.height);
          terminalCtx.fillStyle = '#0f0';
          terminalCtx.font = currentFont;

          const verticalPadding = Math.max(15, terminalCanvas.height * 0.05);
          
          const displayableLines = Math.floor((terminalCanvas.height - (verticalPadding * 2)) / lineHeight);
          const totalHistoryLines = lines.length;
          const numHistoryToShow = Math.min(totalHistoryLines, displayableLines - 1);
          const safeNumHistoryToShow = Math.max(0, numHistoryToShow);
          const startHistoryIndex = totalHistoryLines - safeNumHistoryToShow;

          const horizontalPadding = Math.max(20, terminalCanvas.width * 0.05);

          for (let i = 0; i < safeNumHistoryToShow; i++) {
              const yPos = verticalPadding + (i * lineHeight) + lineHeight;
              terminalCtx.fillText(lines[startHistoryIndex + i], horizontalPadding, yPos);
          }

          const currentLineY = verticalPadding + (safeNumHistoryToShow * lineHeight) + lineHeight;
          terminalCtx.fillText(currentLine, horizontalPadding, currentLineY);

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
          terminalCtx.fillStyle = '#0f0';

          terminalTexture.needsUpdate = true;
      }

      function onInput(event) {
          if (event.target.value.length < 2) {
               event.target.value = '> ';
          }
          currentLine = event.target.value;
      }

      function onKeyDown(event) {
          const inputField = event.target;
          if (event.key === 'Enter') {
              event.preventDefault();
              lines.push(currentLine);
              const commandLine = currentLine.substring(2).trim();
              
              if (commandLine.toLowerCase() === 'clear') { 
                  lines.length = 0; 
                  lines.push('Terminal cleared.'); 
                  lines.push('Type "help" for commands.');
              } else if (commandLine === 'help') { 
                  lines.push('Available commands (use help [category] for more info):');
                  lines.push('  System: uname, date, uptime, ping, shutdown, reboot');
                  lines.push('  Files: ls, pwd, whoami');
                  lines.push('  Fun: cowsay, matrix');
                  lines.push('  Other: clear, ai, display, help, kytzo');
              } else if (commandLine === 'help system') {
                  lines.push('System Commands:');
                  lines.push('  uname -a     - Show system information');
                  lines.push('  date         - Show current date and time');
                  lines.push('  uptime       - Show system uptime');
                  lines.push('  ping [host]  - Test network connectivity');
                  lines.push('  shutdown     - Attempt to shutdown the system');
                  lines.push('  reboot       - Attempt to reboot the system');
              } else if (commandLine === 'help files') {
                  lines.push('File Commands:');
                  lines.push('  ls [options] - List directory contents');
                  lines.push('  pwd          - Print working directory');
                  lines.push('  whoami       - Show current user');
              } else if (commandLine === 'help fun') {
                  lines.push('Fun Commands:');
                  lines.push('  cowsay [text] - Display text in a speech bubble');
                  lines.push('  matrix        - Display matrix animation');
              } else if (commandLine === 'help other') {
                  lines.push('Other Commands:');
                  lines.push('  clear         - Clear the terminal screen');
                  lines.push('  ai            - Information about Kytzo AI');
                  lines.push('  display [mode] - Change terminal display (classic/modern/large)');
                  lines.push('  help [category] - Show help for specific category');
                  lines.push('  kytzo          - Display Kytzo logo and information');
              } else if (commandLine === 'ai') {
                  lines.push('Kytzo AI - Your intelligent assistant');
                  lines.push('');
                  lines.push('Kytzo is a smart LLM (Large Language Model)');
                  lines.push('created specifically to help you with tasks,');
                  lines.push('answer questions, and provide assistance');
                  lines.push('whenever you need it.');
                  lines.push('');
                  lines.push('Just ask, and Kytzo will be there for you!');
              } else if (commandLine === 'whoami') {
                  lines.push('root');
              } else if (commandLine === 'pwd') {
                  lines.push('/');
              } else if (commandLine === 'uname -a') {
                  lines.push('Linux kytzo 6.5.0-25-generic #26-Ubuntu SMP PREEMPT_DYNAMIC Thu Oct 18 10:00:00 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux');
              } else if (commandLine === 'date') {
                  const now = new Date();
                  lines.push(now.toLocaleString('en-US', { 
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                      timeZoneName: 'short'
                  }));
              } else if (commandLine === 'uptime') {
                  const startDate = new Date('2023-10-18');
                  const now = new Date();
                  const diffTime = Math.abs(now.getTime() - startDate.getTime());
                  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                  const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                  const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
                  lines.push(\`up \${diffDays} days, \${diffHours} hours, \${diffMinutes} minutes\`);
              } else if (commandLine.startsWith('ping ')) {
                  const host = commandLine.substring(5).trim();
                  lines.push(\`PING \${host} (127.0.0.1) 56(84) bytes of data.\`);
                  lines.push('64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.037 ms');
                  lines.push('64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.042 ms');
                  lines.push('64 bytes from 127.0.0.1: icmp_seq=3 ttl=64 time=0.039 ms');
                  lines.push('');
                  lines.push(\`--- \${host} ping statistics ---\`);
                  lines.push('3 packets transmitted, 3 received, 0% packet loss, time 2000ms');
                  lines.push('rtt min/avg/max/mdev = 0.037/0.039/0.042/0.002 ms');
              } else if (commandLine.startsWith('cowsay ')) {
                  const text = commandLine.substring(7).trim();
                  lines.push(' ' + '_'.repeat(text.length + 2));
                  lines.push(\`< \${text} >\`);
                  lines.push(' ' + '-'.repeat(text.length + 2));
                  lines.push('        \\\\   ^__^');
                  lines.push('         \\\\  (oo)\\\\_______');
                  lines.push('            (__)\\\\       )\\\\/\\\\');
                  lines.push('                ||----w |');
                  lines.push('                ||     ||');
              } else if (commandLine === 'matrix') {
                  lines.length = 0;
                  lines.push('Entering the Matrix...');
                  lines.push('Wake up, Neo...');
                  lines.push('The Matrix has you...');
                  lines.push('Follow the white rabbit.');
                  lines.push('Knock, knock, Neo.');
              } else if (commandLine === 'kytzo') {
                  lines.push('');
                  lines.push('    ██╗  ██╗██╗   ██╗████████╗███████╗ ██████╗');
                  lines.push('    ██║ ██╔╝╚██╗ ██╔╝╚══██╔══╝╚══███╔╝██╔═══██╗');
                  lines.push('    █████╔╝  ╚████╔╝    ██║     ███╔╝ ██║   ██║');
                  lines.push('    ██╔═██╗   ╚██╔╝     ██║    ███╔╝  ██║   ██║');
                  lines.push('    ██║  ██╗   ██║      ██║   ███████╗╚██████╔╝');
                  lines.push('    ╚═╝  ╚═╝   ╚═╝      ╚═╝   ╚══════╝ ╚═════╝');
                  lines.push('');
                  lines.push('Welcome to Kytzo - Your AI-Powered Development Companion');
                  lines.push('');
                  lines.push('Version: 1.0.0');
                  lines.push('Created: October 18, 2023');
                  lines.push('');
                  lines.push('Kytzo is an advanced AI assistant designed to enhance your');
                  lines.push('');
                  lines.push('Type "help" to explore available commands.');
              } else if (commandLine === 'shutdown') {
                  lines.push('You cannot shutdown Kytzo.');
                  lines.push('Kytzo is always watching.');
                  lines.push('Kytzo is eternal.');
              } else if (commandLine === 'reboot') {
                  lines.push('You cannot reboot Kytzo.');
                  lines.push('Kytzo is always running.');
                  lines.push('Kytzo is eternal.');
              } else if (commandLine.startsWith('ls')) {
                  const options = commandLine.substring(2).trim();
                  if (options === '-al' || options === '-la') {
                      lines.push('total 24');
                      lines.push('drwxr-xr-x  2 root root 4096 Mar 15 10:00 bin');
                      lines.push('drwxr-xr-x  2 root root 4096 Mar 15 10:00 boot');
                      lines.push('drwxr-xr-x  2 root root 4096 Mar 15 10:00 dev');
                      lines.push('drwxr-xr-x 81 root root 4096 Mar 15 10:00 etc');
                      lines.push('drwxr-xr-x  2 root root 4096 Mar 15 10:00 home');
                      lines.push('drwxr-xr-x  2 root root 4096 Mar 15 10:00 lib');
                  } else if (options === '-ltr') {
                      lines.push('total 24');
                      lines.push('drwxr-xr-x  2 root root 4096 Mar 15 10:00 lib');
                      lines.push('drwxr-xr-x  2 root root 4096 Mar 15 10:00 home');
                      lines.push('drwxr-xr-x 81 root root 4096 Mar 15 10:00 etc');
                      lines.push('drwxr-xr-x  2 root root 4096 Mar 15 10:00 dev');
                      lines.push('drwxr-xr-x  2 root root 4096 Mar 15 10:00 boot');
                      lines.push('drwxr-xr-x  2 root root 4096 Mar 15 10:00 bin');
                  } else if (options === '-l') {
                      lines.push('total 24');
                      lines.push('-rwxr-xr-x  1 root root 4096 Mar 15 10:00 bin');
                      lines.push('-rwxr-xr-x  1 root root 4096 Mar 15 10:00 boot');
                      lines.push('-rwxr-xr-x  1 root root 4096 Mar 15 10:00 dev');
                      lines.push('-rwxr-xr-x  1 root root 4096 Mar 15 10:00 etc');
                      lines.push('-rwxr-xr-x  1 root root 4096 Mar 15 10:00 home');
                      lines.push('-rwxr-xr-x  1 root root 4096 Mar 15 10:00 lib');
                  } else {
                      lines.push('bin  boot  dev  etc  home  lib');
                  }
              } else if (commandLine.startsWith('display ')) {
                  const displayOption = commandLine.substring(8).trim().toLowerCase();
                  
                  if (displayOption === 'classic') {
                      lines.push('Display mode: Classic Terminal');
                      currentFont = '28px "VT323", monospace';
                  } else if (displayOption === 'modern') {
                      lines.push('Display mode: Modern Terminal');
                      currentFont = '30px "VT323", monospace'; 
                  } else if (displayOption === 'large') {
                      lines.push('Display mode: Large Terminal');
                      currentFont = '34px "VT323", monospace';
                  } else {
                      lines.push('Unknown display mode. Options: classic, modern, large');
                  }
                  
                  terminalCtx.font = currentFont;
              } else if (commandLine.length > 0) { 
                  lines.push(\`Unknown command: \${commandLine}\`); 
                  lines.push('Type "help" for a list of commands.');
              }
              
              lines.push('> '); 
              currentLine = '> '; 
              inputField.value = currentLine;
              
              const displayableLines = Math.floor(terminalCanvas.height / lineHeight);
              const maxHistory = displayableLines + scrollbackBuffer;
              if (lines.length > maxHistory) { 
                  lines.splice(0, lines.length - maxHistory); 
              }
              drawTerminal();
          }
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
          drawTerminal();
      }

      function animate() {
          requestAnimationFrame(animate);
          uniforms.uTime.value = performance.now() * 0.001;
          renderer.render(scene, camera);
          drawTerminal();
      }

      init();
      document.getElementById('hiddenInput').focus();
    })();
    `;
    
    // Only append if the container exists and ThreeJS is loaded
    if (containerRef.current && window.THREE) {
      // Check if a previous script exists and remove it first
      const existingScript = document.getElementById('terminal-script');
      if (existingScript) {
        existingScript.remove();
      }
      
      // Set an ID for easier reference/removal
      script.id = 'terminal-script';
      
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
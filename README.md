# nlp-to-glsl

**nlp-to-glsl** is a web app that converts natural language into live-rendered GLSL fragment shaders on 3D geometries like cubes, spheres, and planes. It uses a React + Three.js frontend and a FastAPI backend that proxies Claude API requests.

## Features

- Type a prompt and generate a procedural GLSL shader
- Render shaders in real-time on different 3D geometries
- Geometry-aware system prompts for more accurate outputs
- Per-face cube logic using `vFaceIndex` for stable rendering during rotation
- Manual shader compilation with error handling
- Few-shot prompting to improve Claude’s shader generation

## Stack

- **Frontend**: React, Three.js, Monaco Editor
- **Backend**: FastAPI, Claude API (via proxy)
- **Deployment**: GitHub Pages (frontend), Render.com (backend)


## Example Prompts

- "A glowing plasma field"
- "Dice cube with per-face dots"
- "Minecraft dirt block"
- "Earth-like procedural sphere"

---

Built by Kyuhong using Claude and GLSL.

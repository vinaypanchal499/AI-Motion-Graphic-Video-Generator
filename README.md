# 🎬 Remotion Prompt to Motion Graphics

<p align="center">
  <a href="https://github.com/remotion-dev/logo">
    <picture>
      <source
        media="(prefers-color-scheme: dark)"
        srcset="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-dark.apng"
      />
      <img
        alt="Animated Remotion Logo"
        src="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-light.gif"
      />
    </picture>
  </a>
</p>

An **AI-powered motion graphics generator** that transforms natural-language prompts into Remotion animation code and dynamically generates motion graphics.

## 🚀 Features

* 🤖 AI-powered motion graphics generation
* 📝 Natural-language prompt processing
* 🎨 Animated typography and visual effects
* 📊 Animated data visualizations
* 💬 Messaging and UI animations
* 🔄 Smooth scene transitions
* 🌊 Spring-based natural animations
* 📱 Social-media-ready motion graphics
* 👀 Live animation preview
* 🎥 Client-side video rendering
* 💻 AI-generated Remotion code

## 🏗️ Architecture

```text
User Prompt
     ↓
Prompt Validation
     ↓
Skill Detection
     ↓
AI Code Generation
     ↓
Code Sanitization
     ↓
Live Preview
     ↓
Motion Graphic Rendering
```

## ⚙️ How It Works

### 1. Prompt Validation

Before sending a request to the AI model, the application determines whether the prompt describes valid motion-graphics content.

**Accepted:**

* Animated text
* Data visualizations
* UI animations
* Social media content
* Abstract motion graphics
* Logo animations
* Visual effects

**Rejected:**

* General questions
* Conversational requests
* Non-visual tasks
* Unrelated requests

### 2. Skill Detection

The system analyzes the user's prompt and identifies the skills required to generate the animation.

Skills are modular knowledge units that provide domain-specific guidance to the AI code-generation process.

There are two main types:

**Guidance Skills**

Pattern libraries containing best practices for specific animation domains.

**Example Skills**

Complete working code examples that demonstrate specific animation patterns.

This approach allows the application to provide only the relevant expertise for each request.

### 3. AI Code Generation

The system generates Remotion-compatible animation code using AI.

The generated code follows several principles:

* **Constants-first design** — Text, colors, timing, and other editable values are organized as constants.
* **Aesthetic defaults** — Guidance for spacing, typography, visual hierarchy, and animation quality.
* **Crossfade patterns** — Smooth transitions between visual states.
* **Spring physics** — Natural motion using Remotion's `spring()` function.
* **Reusable patterns** — Animation structures can be adapted to different prompts.

### 4. Sanitization & Compilation

The generated AI response is cleaned before execution.

The application removes unnecessary Markdown wrappers and trailing explanations, then prepares the generated component for rendering.

The generated animation code is compiled and displayed in the Remotion preview environment.

### 5. Web Rendering

The application uses Remotion's web rendering capabilities to generate motion graphics directly from the browser environment.

Users can preview the generated animation and render the final output through the application.

## 🧩 Skills System

Skills provide contextual animation expertise without adding unnecessary information to every AI prompt.

Skills are located in:

```text
src/skills/
```

### Guidance Skills

| Skill              | Purpose                                                                |
| ------------------ | ---------------------------------------------------------------------- |
| **charts**         | Bar charts, pie charts, axis labels, and animated data visualization   |
| **typography**     | Kinetic text, typewriter effects, word animations, and text highlights |
| **messaging**      | Chat UI, message bubbles, and staggered entrances                      |
| **transitions**    | Fade, slide, wipe, and scene transitions                               |
| **sequencing**     | Timing, sequences, delays, and staggered animations                    |
| **spring-physics** | Spring configurations, bounce effects, and natural motion              |
| **social-media**   | Social-media aspect ratios and safe zones                              |
| **3d**             | Three.js-based 3D scenes and camera animations                         |

### Example Skills

Example skills contain complete working animation references such as:

* Histogram animations
* Chat message animations
* Typewriter effects
* Data visualizations
* Transition examples
* Typography animations

These examples act as implementation patterns that can be adapted according to the user's prompt.

## 💡 Usage Tips

For better results, provide specific instructions in your prompt.

### Be specific about design

```text
Create green sent message bubbles on the right and gray received messages on the left.
```

### Include data for charts

```text
Create a bar chart showing monthly sales:
January: 20
February: 35
March: 50
April: 70
```

### Describe the animation style

```text
Create a smooth fade-in animation with a bouncy spring entrance.
```

## 🎨 What Works Well

The application is suitable for generating:

* Kinetic typography
* Animated text
* Data visualizations
* Chat and messaging UI
* Social media content
* Instagram Reels
* TikTok-style videos
* Logo animations
* Brand introductions
* Abstract motion graphics
* UI animations
* Scene transitions

## 🖼️ Images

The application supports referencing images through URLs in generated animation code.

For example:

```text
Create a DVD screensaver animation using this image:
https://example.com/logo.png
```

The generated Remotion code can use the image as part of the animation.

## 🛠️ Technology Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### Backend

* Next.js API Routes
* Node.js

### AI

* Google Gemini API

### Animation & Video

* Remotion
* Remotion Web Renderer

### Build & Development

* Next.js 16
* Turbopack
* npm
* TypeScript

## 📁 Project Structure

```text
prompt-to-motion-graphics-saas-main/
│
├── app/
│   ├── api/
│   │   └── generate/
│   ├── code-examples/
│   ├── generate/
│   ├── icon.png
│   ├── layout.*
│   └── page.*
│
├── src/
│   └── skills/
│
├── public/
│
├── package.json
├── package-lock.json
├── next.config.*
├── tsconfig.json
└── README.md
```

## ⚙️ Setup

### 1. Navigate to the project

```bash
cd prompt-to-motion-graphics-saas-main
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root and add your Google Gemini API key:

```env
GOOGLE_GENERATIVE_AI_API_KEY=your-key-here
```

> Never upload your `.env` file or expose your API key publicly.

## ▶️ Run the Application

### Development Mode

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

The terminal may also display a Network URL for accessing the application from another device on the same network.

## 🏭 Production Execution

### Step 1 — Create Production Build

```bash
npm run build
```

### Step 2 — Start Production Server

```bash
npm run start
```

The production application will be available at:

```text
http://localhost:3000
```

## ✅ Build Verification

The application has been successfully tested using:

```bash
npm run build
```

Successful build output included:

```text
✓ Compiled successfully
✓ Finished TypeScript
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization
```

The production server was also successfully started using:

```bash
npm run start
```

Successful server output:

```text
▲ Next.js 16.2.3

- Local: http://localhost:3000
- Network: http://192.168.1.41:3000
✓ Ready
```

## 📡 Application Routes

| Route            | Description                       |
| ---------------- | --------------------------------- |
| `/`              | Main application page             |
| `/generate`      | Generate motion graphics          |
| `/code-examples` | View animation examples           |
| `/api/generate`  | AI motion-graphics generation API |
| `/icon.png`      | Application icon                  |

## 🔄 Application Workflow

```text
User enters prompt
        ↓
Next.js Frontend
        ↓
Prompt Validation
        ↓
Skill Detection
        ↓
Google Gemini API
        ↓
Generate Remotion Code
        ↓
Code Sanitization
        ↓
Live Preview
        ↓
Motion Graphic Rendering
        ↓
Final Output
```

## ⚠️ Next.js Workspace Warning

During development and production builds, Next.js may display a warning about multiple lockfiles:

```text
Warning: Next.js inferred your workspace root, but it may not be correct.
We detected multiple lockfiles.
```

The project still builds and runs successfully.

The warning occurs because multiple `package-lock.json` files exist in the parent and project directories.

If required, the workspace configuration can be adjusted by removing the unnecessary lockfile or configuring the appropriate workspace root in the Next.js configuration.

## 📚 Commands

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Create production build

```bash
npm run build
```

### Start production server

```bash
npm run start
```

## 🎯 Project Objective

The objective of this project is to simplify motion-graphics creation by allowing users to describe animations using natural language.

Instead of manually writing complex animation code, users can provide a prompt and the AI generates the required Remotion animation code.

## 🔮 Future Enhancements

* User authentication
* Project history
* Cloud video storage
* More animation templates
* Image-to-video generation
* Voice-to-prompt generation
* Custom fonts and assets
* Multiple export formats
* Advanced video editing
* Team collaboration
* Improved AI animation generation

## 👨‍💻 Author

**Vinay**

Computer Science & Engineering Graduate

### Skills

* Java
* Python
* JavaScript
* TypeScript
* React.js
* Next.js
* Node.js
* SQL
* Full Stack Development
* AI Application Development

## 📄 License

This project is developed for educational and project purposes.

Third-party technologies used in this project may have their own licensing requirements. Refer to the respective project licenses before using this application commercially.

## 🙏 Acknowledgements

* Remotion
* Google Gemini
* Next.js
* React
* TypeScript
* Tailwind CSS

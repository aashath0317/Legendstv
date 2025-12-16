# Legendstv

This repository contains the front-end code for the LegendsTV landing page, a modern, high-impact website designed to promote the world's first Legend and fan-owned media company. The site showcases the mission, investment opportunity, traction, and key media features of the platform.

## Features

  * **Responsive Design:** Fully responsive layout built with Tailwind CSS.
  * **Athlete/Investor Showcase:** Animated marquee displaying 50+ professional Legend investors.
  * **Media Integration:** Dedicated sections for video content using the Vidstack media player.
  * **Traction & Roadmap:** Displays key business statistics and a visual roadmap of completed and upcoming milestones.
  * **Brand Marquees:** Animated scrolling tickers for breaking news and "As Seen In" media partners.
  * **Investor Call-to-Action (CTA):** Prominent buttons with a glow-pulse animation to drive investment.
  * **Custom Fonts:** Uses custom `Anton` and `Inter` fonts for distinct typography.

## Technologies Used

  * **Framework:** React v18
  * **Build Tool:** Vite
  * **Styling:** Tailwind CSS
  * **Media Player:** Vidstack (`@vidstack/react`)
  * **Icons:** Lucide React (`lucide-react`)

## Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/aashath0317/legendstvc.git
    cd legendstvc/Legendstvc-main
    ```

2.  **Install dependencies:**
    This project uses `npm` for dependency management:

    ```bash
    npm install
    ```

3.  **Run the development server:**
    The project will start on `http://localhost:5173/` (or another port if 5173 is busy).

    ```bash
    npm run dev
    ```

4.  **Build for production:**

    ```bash
    npm run build
    ```

## Project Structure

The key source files are organized as follows:

```
.
├── public/                 # Static assets (images, favicon, etc.)
│   ├── in-the-press/
│   ├── logos/
│   ├── poster/
│   ├── sliding_images/
│   └── thumbnail/
├── src/
│   ├── components/
│   │   ├── layout/         # Header, Footer, BreakingNewsTicker
│   │   ├── sections/       # Major page sections (Hero, Roadmap, Press, etc.)
│   │   └── ui/             # Reusable UI elements (Button, Section)
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global styles and Tailwind imports
│   └── main.jsx            # Entry point
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Deployment

The project includes a `vercel.json` file to configure single-page application routing on Vercel:

```json
{
    "rewrites": [
        {
            "source": "/(.*)",
            "destination": "/index.html"
        }
    ]
}
```

This ensures that all routes fall back to `index.html`, handling in-app navigation correctly.

## License

This project is licensed under the MIT License.

**MIT License**

Copyright (c) 2025 aashath0317

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

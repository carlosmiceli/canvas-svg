# Canvas Challenge for Carlos Miceli

### Day 1 (Saturday)

- I figured the first thing I needed to do was to read carefully and digest the Challenge instructions and new tech/tools/code I needed to get familiar with, which turned into this list:
    - SVG code
    - Drag, Drop, Rotate, Resize, change Colors, etc.
    - LocalStorage (used it before but will need to refresh my memory)
        - If I'm not mistaken, I can persist the SVG's values with LocalStorage only, and wouldn't need to use Redux, although I'll revisit this hypothesis later.
    - Create two pages: Login + Canvas
    - Download file
    - Next.js
    - React Konva
    - Tailwind (will use Material UI since I've used it before)
    - Vercel
    - Markdown

- After that, I made a sequence of steps that I imagined I'd go through:
    - Outline tech and milestones (step above).
    - Watch/read about the most important elements to start (Next.js, Markdown, etc.). Ended up choosing a Fireship tutorial that I'm following while I start building the Canvas.
    - Start project with NextJS boilerplate.
    - Create repo, Markdown log, and host boilerplate in Vercel to quickly test the tool.
    - Breakdown challenge into smaller goals that I can accomplish each day:
        - Login page
        - Canvas page
        - Login form + Functionality (check with Guille/Lucas if I should also build login/signup API's and setup DB, or just the frontend)
        - Canvas

- Created and published NextJS boilerplate in Vercel here: https://canvas-svg.vercel.app/
- Played around a bit to understand NextJS' api and pages(routes) functionality.
- Cleaned up the template so I can start building on top of it.
- Added aMaterial UI to style the app.
- Started building Login/Signup form.

### Day 2 (Sunday)

- Built signup/login page with conditional rendering (will add functionality later).
- Started building canvas layout.
- Had to spend some time dusting off some React/CSS concepts.
- At this moment, my idea is to complete the layout/styling of everything first, which should be the easiest part, and then jump into 1) learning properly about routes and apis in NextJS, 2) learn about svgs cods and all the asset manipulation (drag, reshape, etc.), 3) implement state persistance if user closes/opens app again, and finally 4) download the file.

### Day 3

- Built basic layout for Canvas page and sidebar, along with placeholders for mapping the SVG files and categories.
- Added a "More" functionality to expand categories if needed.
- Installed React Konva, tried quite a bit to make SVG files work with it but couldn't quite grasp the documentation for Konva's Path...
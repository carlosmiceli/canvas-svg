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

### Day 4

- After a LOT of testing stuff, finally figured out the way to get the right data from each SVG file. I had to make an axios request to the file's src property, which gave me the entire data of the file.
- Was able to parse the data from each SVG file but couldn't store the value returned, as I was struggling with async function returning pending promises. Tried a loooot of things.
- UPDATE: After talking with Guille, I will let go of any login functionality. The only thing related that I will build is data persistance after refreshing the page.

### Day 5

- Kept trying things to get the parsed data, until eventually learned that the best way to capture the value returned from the parse function was to do it inside useEffect and set it to the state of the component.
- The next thing I believe I should do is, despite only working with 3 files I could easily import, is to find an scalable way to import any number of files and put them in an array. I'm aware this is not how an application would actually run, since those files would be pulled from a DB and not stored locally, but I'd like to at least test if I can make it work :-)
- UPDATE: After testing a few things and thinking more about it, I realized that this would be unnecessary and very much outside of the project scope, so just imported the 3 files/modules and put them in an array in the component. Everything is working well so far.

### Day 6

- Troubleshooting and learning to use React Konva and render SVGs by mapping the file's attributes after parsing them. The file now renders fine in the canvas! I also was able to allow dragging the file around in the canvas.

### Day 7

- Built a quick conditional rendering process to filter svg files by categories, whether by clicking on the category icon, or by searching on the search bar. The search filters in real time depending on whether the category includes the substring being searched.
- Learned and implemented the dragging property, and was able to get pretty close to dragging and dropping between React components. The way it's working is that when I start dragging the data of the file is now on the parent "Dashboard" component, and gets sent down to the canvas child component. My idea is that if the onDrop event is fired, then I'd trigger the request of the file data and allow it to render, but haven't been able to make it work yet.

### Day 8

- Success! Files are now rendered after dropping them on the canvas! The next thing is to learn how to manipulate the svg files with Konva.


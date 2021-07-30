# Canvas Project by Carlos Miceli

### Day 1

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

### Day 2

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
- UPDATE: I will let go of any login functionality. The only thing related that I will build is data persistance after refreshing the page.

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
- Spent a loooooot of time trying to figure out how to attach the svg as a node of the Transformer component of Konva. Had to learn about the Group element of Konva, so all paths are grouped together and the transformer can modify the full image. But finally pulled it off!
- Wasn't able to reset the svg after the initial transformation if I continued dropping files, so that's left for the next day.

### Day 9

- Finally able to reset the transformation of a file after dropping new images on the canvas!
- Figured out how to persist dragged svg with localstorage. Only the original file for now, working now on capturing the edited values with the transformer.
- Figured out how to persist changes to the svg file. Next thing is to be able to reset those values on localstorage without breaking when a new svg is dragged onto the canvas.

### Day 10

- After testing quite a bit, was able to reset the values after dropping a new svg file, while still persisting the changes if the work was done on the same image.
- Learned and implemented how to download the image with the edits done!
- Project complete!

---

## Stage 2: UX/UI improvements

### Day 1 (Preparation)

- The goal now is to improve the application from a UX/UI and aesthetic perspective.
- The list of ideas that I'll attempt to improve/fix includes:
    - ~~Add "All" category button.~~
    - ~~Move sidebar from pages into components~~
    - ~~Remove login page/url (send straight to canvas)~~
    - ~~Same size for svgs on sidebar~~
    - ~~Fix search if no input~~
    - ~~Delete single SVGs from canvas with backspace~~
    - ~~Fix scroll~~
    - ~~Fixed height-width of canvas~~
    - ~~Close/Open sidebar~~
    - ~~Move download image button below.~~
    - ~~Add padding, ask confirmation to download~~
    - ~~Fix size of images after dropping them (fully visible)~~
    - ~~Change colors with color wheel of svgs fill~~
    - ~~Remove reset by dropping new svg~~
    - ~~Map dropping multiple SVGs~~
    - ~~Fix coordinates of dropping svgs~~
    - ~~Store multiple svgs and edits in local storage~~
    - ~~Ctrl + C/V to copy/paste same SVG with same edits~~
    - ~~Store color changes in local storage and state~~
    - ~~Reset all canvas button~~
    - ~~Change zIndex of images~~


### Day 1

- Added "All" category.
- Fixed moving sidebar into components.
- Fixed login page so it goes straight into canvas.
- Fixed same size for svgs on sidebar.
- Fixed search if no input and added "no results" rendering.
- Implemented deleting single SVGs from canvas with backspace.

### Day 2

- Fixed scroll in sidebar.
- Fixed height and width of canvas.
- Fixed categories uppercases.
- Fixed spacing and styling of categories.
- Added borders to the sidebar.
- Added pointer cursors.
- Implemented opening/closing sidebar.
- Fixed style for Error search.
- Improved design and layout of buttons in the Canvas.
- Added confirmation to download after clicking the button.
- Fixed scale and x/y attributes of image when dropping on the canvas (hardcoded values to work with example images).

### Day 3

- Implemented input for user to change colors of svg sections.

### Day 4

- Can drop multiple svgs, and also repeat the same svg.
- Can resize, rotate, etc. multiple svgs separately.
- Improved coordinates after dropping svgs.
- Fixed deleting any of the multiple svgs with backspace shortcut.
- Fixed coordinates being applied from one svg to many.
- Fixed multiplying svgs when transforming a single svg.
- Implemented storing multiple svgs and edits in localstorage.
- Implemented ctrl + c/v to copy/paste identical svgs.

### Day 5

-  Fixed download with multiple conditions.
-  Implemented being able to change colors and storing the changes in state and localstorage.
-  Added margins and border styling to the canvas editor.
-  Implemented "Delete All" button.
-  Implemented changing zIndex with dragging, but only in state, not localstorage.

## Issues

- Mapped all svg props but some not showing for some reason...
- Definitely could refactor code to make it shorter and less repetitive, but rushed to prioritize functionality in time.
- Performance! If I start doing many things, or want to do them quickly, like changing colors fast or copy/pasting many times, it starts to slow down and maybe even crash.
- Couldn't crack the code to persist zIndex positioning in localstorage... I tried to do it all "the React way" according to Konva's documentation, but it was simply not working (rendering before dragging), no matter how much I copied the documentation's code exactly. Eventually I resorted to the moveToTop() function, which is not ideal in React according to the documentation.
- - Download doesn't work if I just refresh and it pulls the data from localstorage and I don't make any edits.
- If I copy and paste an image, and then I change a color, it changes it to all the copies of that image (realized this too late!).
- There are issues with responsiveness, changing the screen size once canvas is loaded, etc., since I didn't have time to prioritize that part of the code.
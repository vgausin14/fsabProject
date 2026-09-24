1. This project is a slightly modified version of TicTacToe following the react.dev tutorial (https://react.dev/learn/tutorial-tic-tac-toe#setup-for-the-tutorial)
2. I wasn't able set my coding environment up traditionally so with Claude's help I did used Vite. After installing Vite and all dependencies, run the commands 'npm install' -> 'npm run dev' to load up the local host to see the project
3. After following the tutorial, I changed the game to intentionally have it so that the opposing players can 'steal' eachother's grid spaces. This presents the user a risky option in the middle of the game or can lead to both users leaving it up to odds at the end of the game when it seems like it's tied. As of now, there two lacks of functionality. One of them is that there can't be two steals in succession, which is how I wanted it to be, but I couldn't figure out how to make it so that the user just wouldn't be presented the option to, saving their turn as a result. Something else is that if a user were to misclick, they can also 'steal' a grid space that their own symbol is occupying. Besides this, I also made the background of the grid the same shade of brown as Brown University according to an online search. 
4. A problem I ran in to while trying to make my own twist was figuring out what variables were handled in each component. At first, I tried to make steal a 'let' variable in the game component since I searched online that it was mutable. I was then trying to incorportate it with current moves in the board component and the game component which led me to realize that I'd have to pass both as a prop to Board. I felt a bit more comfortable with the 'let' keyword and using it since you're able to assign it as you would in Java but it made the program as a whole a bit more confusing. As a result, I figured I'd set it as a const in the Board component since I didn't have to worry about it being forgotten on the re-render since no notable changes would happen unless the steal was successful and re-rendered it. This made me a bit more comfortable with the 'const' keyword.
5. References - React.dev tutorial listed above, Claude A.I. to set up environment, Google A.I. overview for help with keywords and Brown University color hexcode.



///////////////////////////////////////////////////////////////////////////////////////////////

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

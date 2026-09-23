# Dev Insights: Mini Blog

A small internal "Mini Blog" foundation for the fictional startup Dev Insights,
built with **React**, **TypeScript** and **Vite**.

## Install, run and test

This project uses **Vite** as its build tool and dev server.

```bash
git clone https://github.com/<your-username>/react-dev-1.git
cd react-dev-1/mini-blog
npm install
npm run dev
```

Open the local address Vite prints (usually http://localhost:5173/).

Testing (there is no automated test suite yet, so testing is done like this):

- `npm run lint` checks the code for problems.
- `npm run build` type checks with TypeScript and creates a production build.
- Manual check in the browser: the header shows, three posts show, one has a
  "New!" badge, one has a highlighted background and the console shows the
  `withLogger` mount messages. In dev mode React StrictMode mounts components
  twice on purpose, so the messages appear twice.

## Project structure

```
mini-blog/src/
├── components/   Header.tsx, PostList.tsx, Post.tsx
├── hoc/          withLogger.tsx
├── styles/       global.css, header.css, posts.css
├── types/        post.ts
├── utils/        dateHelpers.ts
├── App.tsx
└── main.tsx
```

## Design choices

### Functional vs class components
Every component is functional. The `Post` component only receives props and
renders them. It has no state and no lifecycle logic, so a class would only add
boilerplate (`extends`, `render()`, `this.props`). Functional components are
shorter, easier to read, work with hooks like `useEffect`, and work directly
with `React.memo`.

### Styling methods
1. **External CSS files** for layout, colours, spacing and hover states. They
   keep the JSX clean and the styles easy to find (BEM-style class names).
2. **Inline styles** for the conditional highlight on `Post`. The style depends
   on a value at render time (is this the featured author?), so it fits inline.

Conditional styling: posts by the featured author get an amber background, and
posts published in the last 24 hours get a red "New!" badge.

### Optimization
- **React.memo on `Post`**: it skips re-rendering when its props are unchanged.
  The sample posts are defined outside `PostList` so their references stay stable.
- **Unique `key` props**: each post is rendered with `key={post.id}` so React
  can track list items correctly.

### Higher-order component
`withLogger` takes a component and returns a new one that logs when it mounts
and unmounts, using `useEffect` with a cleanup function. It is generic
(`<P extends object>`), so it keeps the wrapped component's prop types. It is
applied to `Header` and `PostList`.

## Challenges and how I solved them

<!-- Edit this section so it matches what YOU actually ran into. -->
- **Console logs appeared twice.** I thought my HOC was buggy until I learned
  that React StrictMode mounts, unmounts and re-mounts components in dev.
- **Typing the HOC.** I needed a generic type so the wrapped component keeps its
  props. Using `ComponentType<P>` solved it.
- **Showing the "New!" badge.** A hardcoded old date never triggers it, so I
  wrote a small `hoursAgo` helper to create one recent sample post.

## Packages used

No extra libraries were installed. Everything comes from the Vite `react-ts` setup:

- react, react-dom
- vite, @vitejs/plugin-react
- typescript
- eslint, typescript-eslint and the React ESLint plugins
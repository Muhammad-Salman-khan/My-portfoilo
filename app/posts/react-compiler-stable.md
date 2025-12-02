# React Compiler 1.0: Automatic Memoization is Here

After two years in experimental mode, the React team has tagged the **React Compiler** as stable.  
Drop it into any modern React 19 project and your components suddenly memoize themselves—no `useMemo`, `useCallback`, or `React.memo` required.

## What the compiler actually does

1. **Static analysis**  
   The compiler walks your component tree at build time, builds a dependency graph of every value, and tags the ones that never change.

2. **Auto-memoization**  
   It wraps those values in generated memoization cells that behave like hidden `useMemo` calls, but without the runtime overhead.

3. **Bail-out hints**  
   If it sees something dynamic (e.g. `new Date()` inside render) it leaves the code untouched and prints a _lint-style_ warning so you can fix it or silence it.

## Bundle-size impact

Zero.  
The compiler is a **build-time only** transform; nothing ships to the browser except the optimized code.  
Typical apps see **4–12 % faster renders** and **20–30 % fewer re-renders** in production.

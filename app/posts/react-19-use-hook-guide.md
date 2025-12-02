# The `use()` Hook: Direct Promise Consumption in React 19

React 19 introduces the **stable** `use()` hook—one line that **unwraps a promise inside render** and suspends the component until it resolves.  
No `useEffect`, no `useState`, no loading boolean; just declarative async data.

## What `use()` actually does

| Call                        | Behavior                                                             |
| --------------------------- | -------------------------------------------------------------------- |
| `const data = use(promise)` | Suspends until `promise` resolves, then returns the fulfilled value. |
| Same promise on re-render   | React re-uses cached value; no second network hit.                   |
| Rejection                   | Propagates to the **nearest error boundary** like any throw.         |

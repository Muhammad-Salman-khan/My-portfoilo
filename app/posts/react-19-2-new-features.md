React 19.2 drops a fresh wave of primitives that make async data, forms, and performance feel magically simple. Below are the headline additions, why they matter, and copy-paste snippets you can run today.

---

## 1. The `use()` Hook – Promises _in_ JSX

No more `useEffect` + `useState` boiler-plate just to read an async value.

```tsx
import { use } from 'react';

// 1. Any async source
function getUser(id) {
  return fetch(`/api/user/${id}`).then(r =&gt; r.json());
}

// 2. Render it *inline*
export default function Profile({ id }) {
  const user = use(getUser(id));   // ← throws a promise, Suspense catches it
  return &lt;h1&gt;Hello {user.name}&lt;/h1&gt;;
}
```

# React 19 Async Forms: Native Form Handling Explained

React 19 ships first-class primitives for **async forms**—no `onSubmit`, no `setLoading`, no `catch` blocks.  
With **form actions**, `useActionState()`, and `useOptimistic()` you get **pending states**, **errors**, and **optimistic UI** from three lines of declarative code.

## What’s new (and stable)

| Hook / API         | Purpose                                                                                         |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| `<form action={}>` | Accepts an async function; React handles `preventDefault`, pending state, and error boundaries. |
| `useActionState()` | Returns `{ data, error, pending }` tied to the nearest form action.                             |
| `useOptimistic()`  | Instantly updates the UI while the action flies, rolls back automatically on rejection.         |

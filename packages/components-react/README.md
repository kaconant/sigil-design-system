# @sigil/components-react ⚛️

React wrapper components for the [Sigil Design System](https://github.com/kaconant/sigil-design-system). This package bridges Sigil’s Web Components — built with [Lit](https://lit.dev) — into idiomatic, accessible, and typed React components.

---

## ✨ Features

- 🔁 **Interop with Web Components**: Built-in support for Lit elements via `ref` and `useEffect`
- 🧪 **Testable**: Compatible with Testing Library and Vitest
- 💅 **Themed**: Uses CSS custom properties and design tokens from `@sigil/design-tokens`
- 📚 **Storybook-ready**: Components documented alongside their WC counterparts

---

## 🚀 Getting Started

```bash
pnpm add @sigil/components-react
```

Then in your React app:

```tsx
import { MyButton } from "@sigil/components-react";

function App() {
  return <MyButton label="Click me" />;
}
```

---

## 🧱 Architecture

This package wraps native Web Components (like `<my-button>`) and binds their properties/events into idiomatic React components using `ref`.

Each wrapper:

- Registers the Web Component (via `import '@sigil/components-wc/...'`)
- Binds `props` to underlying attributes or properties
- Re-emits DOM events via React `onEventName` props

---

## 🧩 Available Wrappers

| Component | React Component | Status         |
| --------- | --------------- | -------------- |
| Button    | `MyButton`      | ⏳ In Progress |
| Input     | `MyInput`       | ⏳ Planned     |
| Modal     | `MyModal`       | ⏳ Planned     |

---

## 🧪 Testing

This package supports testing with:

- [`@testing-library/react`](https://testing-library.com/)
- [`jest-axe`](https://github.com/nickcolley/jest-axe) for accessibility
- [`vitest`](https://vitest.dev/)

Run tests:

```bash
pnpm test
```

---

## 📚 Storybook

These components are documented alongside their WC counterparts in the root Storybook instance. Run:

```bash
pnpm storybook
```

And open [http://localhost:6006](http://localhost:6006)

---

## 📜 License

MIT – see [LICENSE](../../LICENSE)

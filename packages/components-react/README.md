# @sigil/components-react ⚛️

React component library for the [Sigil Design System](https://github.com/kaconant/sigil-design-system). Built with accessibility, themeability, and developer experience in mind.

---

## ✨ Features

- ⚛️ **Pure React**: Components written in idiomatic React with strong TypeScript support
- 🧪 **Testable**: Built for Testing Library, jest-axe, and Vitest
- 💅 **Themeable**: Uses CSS custom properties and tokens from `@sigil/design-tokens`
- 📚 **Documented**: Fully documented in Storybook with accessibility previews

---

## 🚀 Getting Started

Install

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

- Written in React 18+ with TypeScript
- Design tokens consumed from @sigil/design-tokens
- Storybook used for docs and local development
- Tested with Vitest, Testing Library, and jest-axe

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

Storybook includes live docs, props controls, and a11y checks. Run locally:

```bash
pnpm storybook
```

And open [http://localhost:6006](http://localhost:6006)

---

## 📜 License

MIT – see [LICENSE](../../LICENSE)

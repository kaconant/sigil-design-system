# 🔪 Sigil Demo App

A minimal React + TypeScript app powered by Vite. This app consumes the [`@sigil/design-tokens`](../design-tokens) and [`@sigil/components-react`](../components-react) packages to showcase the Sigil Design System in action.

---

## ⚙️ Tech Stack

- 🧬 **React 18** + **TypeScript**
- ⚡ **Vite** for fast dev experience
- 🎨 Design tokens from `@sigil/design-tokens`
- 🧱 Components from `@sigil/components-react`
- ✅ Ready for integration testing & visual QA

---

## 🚀 Getting Started

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Usage

Inside your `main.tsx` or `App.tsx`, you can:

```tsx
import "@sigil/design-tokens/dist/css/variables.css";
import { MyButton } from "@sigil/components-react";

function App() {
  return <MyButton label="Click me" />;
}
```

---

## 📚 Storybook + Docs

This demo is focused on consumer usage. For internal documentation and dev preview, see the root Storybook instance:

```bash
pnpm storybook
```

---

## 🧹 Linting & ESLint Tips

If you want to expand the ESLint rules for this app:

- Use type-aware linting via `@typescript-eslint`
- Optionally include `eslint-plugin-react-x` and `eslint-plugin-react-dom` for advanced rules

Example config setup available in [Vite docs](https://vitejs.dev) or the template README.

---

## 📜 License

MIT

# @sigil/components-wc ✴️

Web Components for the [Sigil Design System](https://github.com/your-org/sigil-design-system), built with [Lit](https://lit.dev). These are accessible, framework-agnostic UI elements designed for use across React, static sites, and any JavaScript frontend stack.

---

## ✨ Features

- ♿ **Accessible-by-default**: ARIA roles, keyboard support, WCAG contrast
- 🌗 **Themeable**: Uses CSS custom properties for styling and design tokens
- ⚙️ **Framework-agnostic**: Works in any frontend app (React, Vue, Astro, etc.)
- 🧪 **Tested**: Unit and accessibility tested with Vitest and `jest-axe`

---

## 🚀 Getting Started

Install the package via your monorepo or as a standalone dependency:

```bash
pnpm add @sigil/components-wc
```

Then import the component definitions:

```ts
import "@sigil/components-wc/button.js";
```

Use in HTML:

```html
<my-button label="Click Me"></my-button>
```

---

## 🛠️ Usage

Each component is registered as a custom element under the `my-` namespace (e.g., `my-button`, `my-modal`).

### Example: Button

```html
<my-button label="Buy Now" variant="primary" disabled></my-button>
```

---

## 🧩 Components

| Component | Tag Name      | Status         |
| --------- | ------------- | -------------- |
| Button    | `<my-button>` | ⏳ In Progress |
| Input     | `<my-input>`  | ⏳ Planned     |
| Modal     | `<my-modal>`  | ⏳ Planned     |

---

## 📚 Storybook

To see these components in action:

```bash
pnpm storybook
```

Opens [Storybook](http://localhost:6006) with live examples and accessibility tests.

---

## 🧪 Testing

This package uses:

- [`lit/testing`](https://lit.dev/docs/tools/tests/)
- [`@testing-library`](https://testing-library.com/)
- [`jest-axe`](https://github.com/nickcolley/jest-axe) for a11y

Run tests:

```bash
pnpm test
```

---

## 🗺 Roadmap

- [x] Vite + Lit setup
- [ ] Button implementation
- [ ] Storybook documentation
- [ ] Theme tokens
- [ ] Modal + Input

---

## 📜 License

MIT – see [LICENSE](../../LICENSE)

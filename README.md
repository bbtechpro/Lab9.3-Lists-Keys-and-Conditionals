# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
Activity Tasks
Component Implementation:

Implement each component according to its interface requirements.
Use proper TypeScript types and interfaces.
Implement list rendering with unique keys.
Add conditional rendering based on task properties.
List Management:

Render the task list with proper key props.
Implement filtering functionality.
Handle task status changes.
Implement task deletion.
Visual Feedback:

Show different styles based on task status and priority.
Implement hover and active states.
Add visual indicators for task properties.
Component Composition:

Compose components to create a complete task management interface.
Handle prop passing between components.
Implement proper event handling.

Reflection Questions:
How did you ensure unique keys for your list items?
- Unique keys for list items: I used each task’s stable id as the React key (key={task.id} in TaskList). Since IDs are unique per task and don’t change when filtering/toggling, React can correctly track each row across re-renders.

What considerations did you make when implementing the filtering functionality?
- Filtering considerations: I kept a dedicated filter state with a strict union type ('all' | 'active' | 'completed') so that only valid filter values are possible. Then I derived filteredTasks from tasks on render, which avoids duplicating source data and keeps filtering logic centralized and predictable.

How did you handle state updates for task status changes?
- State updates for task status changes: I used functional state updates (setTasks(prev => ...)) to avoid stale state issues. Toggling is done immutably with map, flipping isCompleted only for the matching id, which is the safest React pattern for list updates.

What challenges did you face when implementing conditional rendering?
- Conditional rendering challenges: The main challenge was keeping UI feedback clear without making logic messy. I separated concerns by: 
using class-based conditions (e.g., completed vs not completed),
preserving dynamic values like priority color through a CSS variable,
handling empty states separately (no tasks vs no tasks match this filter).
This made conditional rendering easier to understand and easier to style consistently.

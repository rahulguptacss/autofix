# Project Rules: Dynamic Data Pattern

When creating or updating pages and components in this project, you MUST strictly adhere to the dynamic data pattern:

1. **No Hardcoded Data**: Do not hardcode content strings, images, or metadata in `.tsx` files. All content must be pulled from `data.json`.
2. **Page Configuration**: Whenever a new page is created, its configuration must be added to the `pages` object inside `data.json` under `template-1`. This includes:
   - `breadcrumb` (title, paths, bgImage)
   - `components` (list of components used on the page)
   - `seo` (title, description, canonical URL)
3. **Component Data**: Whenever a new component (e.g. section) is built, its data model must be added under `sections` in `data.json`.
4. **Type Definitions**: After updating `data.json`, you MUST update `components/type/index.ts` to ensure all new data structures and pages are fully typed and perfectly synchronize with `data.json`.
5. **Page Implementation**: The `page.tsx` file for a route MUST extract its `breadcrumbData` and `metadata` from the corresponding `pages` entry in `data.json`.

Failure to follow this pattern breaks the architecture. Always verify that new pages/components read directly from `data.json`.

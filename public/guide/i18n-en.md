# How to Add Your Own Translation

This guide will walk you through the process of adding a new language to the XMCL website.

## 1. Create Translation File

- Navigate to the `src/translations/` directory.
- Create a new JSON file named after the language code you want to add (e.g., `fr.json` for French).
- Copy the entire structure from `en.json` into your new file.
- Translate all the string values into the new language.

**Example `fr.json`:**
```json
{
  "nav": {
    "home": "Accueil",
    "blog": "Blog",
    ...
  },
  ...
}
```

## 2. Update Language Configuration

- Open the `src/i18n/languageConfigs.ts` file.
- Add a new object to the `languageConfigs` array for the new language.

**The object should include:**
- `code`: The language code (e.g., 'fr').
- `name`: The name of the language in its own tongue (e.g., 'Français').

**Example:**
```typescript
export const languageConfigs = [
  // ... existing languages
  {
    code: 'fr',
    name: 'Français',
  },
];
```

## 3. Test Your Translation

- Start the development server by running `npm run dev` in your terminal.
- Open the website in your browser.
- Use the language switcher to select the new language.
- Thoroughly check the website to ensure all text is translated correctly and the layout is not broken.

## 4. Submit Your Contribution

- Commit your changes with a clear and descriptive message.
- Push your changes to your forked repository.
- Open a pull request to the main XMCL website repository.

Thank you for contributing to the XMCL project!
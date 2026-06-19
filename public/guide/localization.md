---
title: "Localization Guide"
excerpt: "How to add translations and localize XMCL"
author: "XMCL Team"
date: "2025-01-15"
tags: ["localization", "i18n", "translation", "intermediate"]
slug: "localization"
readTime: "10 min"
difficulty: "intermediate"
---

# Localization Guide

XMCL supports multiple languages and allows the community to contribute translations.

## Supported Languages

XMCL currently supports the following languages:
- English
- German
- Français
- 日本語
- Қазақша
- 한국어
- Polski
- Русский
- Українська
- 简体中文
- 繁體中文

## How to Add a Translation

1. **Fork the repository**
   - Go to our GitHub repository
   - Fork the project

2. **Find the translation files**
   - Translation files are located in the `locales` folder
   - Each language has its own JSON file

3. **Add your translations**
   - Copy the English translation file
   - Translate all strings to your language
   - Keep the JSON structure intact

4. **Submit your translation**
   - Create a pull request
   - We will review and merge your changes

## Translation File Structure

Translation files use the following structure:

```json
{
  "key": "translated value",
  "nested": {
    "key": "nested translated value"
  }
}
```

## Tips for Translators

- Keep the context in mind when translating
- Some strings may contain variables like `{name}` - keep these unchanged
- Test your translation in the launcher before submitting
- Ask for help if you're unsure about technical terms

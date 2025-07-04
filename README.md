# Gemini Shift Enter Blocker Extension

## 🧩 About This Extension

The **Gemini Shift Enter Blocker** is a lightweight Chrome extension designed to improve the user experience when typing prompts into [Gemini](https://gemini.google.com/app). By default, Gemini submits your message when you press **Enter**, which can be frustrating when you're trying to add a line break.

This extension **reverses that behavior**:
- Pressing **Enter** adds a new line.
- Pressing **Shift + Enter** adds a new line.
- Mouse click to submits the prompt.
- Enable/Disable the feature by toggling on/off via the popup.

It also includes a toggle in the extension popup, allowing you to quickly enable or disable the functionality as needed.

### ✅ Ideal for:
- Users who frequently write multi-line prompts
- Power users looking for more control over Gemini input
- Anyone frustrated by accidental prompt submissions while writing

---

## 🔧 Setup Instructions

1. Create a folder, e.g., `GeminiEnterBlocker`.

2. Add the following files inside it:
   - `manifest.json`
   - `content.js`
   - `popup.html`
   - `popup.js`

3. *(Optional)* Add icons:
   - `icon16.png`
   - `icon48.png`
   - `icon128.png`  
   Or use placeholders.

---

## 🚀 Load the Extension in Chrome

1. Open `chrome://extensions/` in your browser.
2. Enable **Developer Mode** (top-right).
3. Click **Load unpacked**.
4. Select the folder where you saved the extension.
5. ✅ Navigate to [https://gemini.google.com/app](https://gemini.google.com/app) and test:
   - `Shift+Enter`: works normally.
   - The extension can be toggled on/off via the popup.
   - You can toggle the block via the extension popup.

---

## 🛠 How It Works

- Go to [https://gemini.google.com/app](https://gemini.google.com/app).
- Start typing a prompt.
- Press **Enter** → creates a new line (does NOT submit).
- Press **Shift+Enter** → submits the prompt.

> ⚠️ **Note:**  
> You will need to use mouse click or `TAB` + `Enter` to send the message alternatively.

---

## 🌐 Browser Compatibility

### ✅ Fully Compatible (Chromium-based browsers)

- Chrome (your current browser)  
- Microsoft Edge (Chromium-based)  
- Brave Browser  
- Opera (Chromium-based)  
- Vivaldi  

### ⚠️ Partially Compatible / Requires Conversion

- Firefox  
  - Needs conversion to Manifest V2 or WebExtensions format  
- Safari  
  - Requires conversion to Safari Web Extension format  

---

## 📋 Summary

| Browser Type       | Compatibility                  | Notes                                            |
|--------------------|-------------------------------|--------------------------------------------------|
| Chromium-based     | Fully compatible               | No changes needed; load `.crx` or unpacked folder. |
| Firefox           | Partial (needs modification)  | Requires manifest and script changes; load `.xpi`. |
| Safari            | Partial (complex conversion)  | Requires full extension format conversion.        |

---

## 💡 Recommendation

Since over 90% of users are on Chromium-based browsers, the current extension will work out of the box for most users (Chrome, Edge, Brave, Opera, Vivaldi, etc.). Support for Firefox and Safari requires additional work and is optional.

---

*Feel free to open issues or submit PRs for improvements!*

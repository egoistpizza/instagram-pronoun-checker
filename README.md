# Instagram Pronoun Checker

This project is a simple web application that checks whether a given word can be composed using pronouns from multiple languages.  
If possible, it shows how the word can be broken down into pronoun-based "syllables" with the minimum number of components.

---

## ✨ Features

- Checks if the input word can be written using a predefined list of pronouns.  
- If possible, displays the decomposition of the word using pronouns.
- If not possible, shows a ❌ warning.  
- Toggle button to show or hide the full pronoun list.  
- Includes 200+ pronouns from **English, Spanish, Portuguese, French, German, Turkish, Scandinavian languages, and more**.  

---

## 🚀 Usage

1. Enter a word in the input field.  
2. Press **Enter** or click the **Check** button.  
3. The result will appear below:  
   - ✅ If the word can be written → the pronoun breakdown is displayed.  
   - ❌ If it cannot be written → an error message is shown.  

Additionally:  
- Click **Show Pronoun List** to view all pronouns included in the system.  

---

## 🛠️ Technologies

- **HTML + CSS + JavaScript (Vanilla JS)**  
- Dynamic Programming algorithm to split words into the minimum number of pronouns  
- Lightweight and mobile-friendly UI  

---

## 📂 Code Structure

- `pronouns` → Array of all supported pronouns  
- `decomposeWord(word, dict)` → Algorithm to check if a word can be built from pronouns  
- `checkWord()` → Handles word checking and displaying results  
- `showPronounList()` → Toggles pronoun list view  

---

## 📸 Example

**Input:**  

```
pronouns
```

**Output:**  

```
✅ 'pronouns' can be written as: pro-noun-s
```

---

## 🌐 Live Demo

👉 [Try it here](https://ig-pronoun-checker.netlify.app/)  

---

## 📜 License

This project is licensed under the **GNU GPLv3**.

---

© 2025 egoistpizza

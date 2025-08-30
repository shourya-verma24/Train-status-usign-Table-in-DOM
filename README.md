# 🚆 Train Status Table (DOM Project)

This project dynamically generates an HTML table using JavaScript and DOM manipulation. It displays train status records with headers and data rows, styled using basic CSS.

## 📋 Features<img width="1920" height="1080" alt="Screenshot (8)" src="https://github.com/user-attachments/assets/d07fd081-bad4-4970-846e-16f229f5d876" />


- Creates a table with headers: `Sr`, `Train No`, `Train_Name`, `Status`
- Populates rows with train data using JavaScript
- Uses `<thead>` and `<tbody>` for semantic structure
- Styled with borders for clarity

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (DOM API)

## 🧪 How to Run

1. Clone or download the project.
2. Open the `.html` file in any modern browser.
3. The table will be generated automatically when the page loads.

## 🧱 Code Structure

- **HTML**: Sets up the container and table element.
- **CSS**: Adds borders to the container, table, rows, and cells.
- **JavaScript**:
  - Defines headers and data arrays
  - Creates `<thead>` with column titles
  - Creates `<tbody>` with train records
  - Appends everything to the DOM

## 🧩 Sample Output

| Sr | Train No | Train_Name           | Status  |
|----|----------|----------------------|---------|
| 1  | 12345    | Kanpur Shatabdi      | Ontime  |
| 2  | 12344    | Vande Bharat Ex      | Ontime  |
| 3  | 23212    | Chitrakoot Intercity | Delayed |

## ✏️ Customization

You can easily update the `headings_array` and `data_array` in the `<script>` section to display different types of records—like hospital doctors, students, or inventory.

## 📚 Learning Goals

- Practice DOM manipulation
- Understand semantic table structure (`thead`, `tbody`)
- Learn how to dynamically generate HTML content with JavaScript

---


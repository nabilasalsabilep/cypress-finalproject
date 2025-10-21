# Final Project - Cypress

The objective is to automate user flows across multiple real-world websites — including **Agoda**, **Amazon**, and **YouTube** — while applying best practices such as Page Object Model (POM), environment variables, and automated reporting.

---

## 🧪 Project Scenarios

### 1. Flight Booking Automation (Agoda)
Automate the process of booking a flight on [agoda.com](https://www.agoda.com) with the following requirements:
- Flight route: **Jakarta → Singapore**
- Select the **earliest available flight** for **tomorrow’s date** (e.g., if today is May 25, choose May 26)
- Airline: **Malaysia Airlines**
- Fill in passenger details on the **Passenger Detail page**
- Verify:
  - ✅ Passenger data matches the input on the detail page  
  - ✅ Total price is displayed correctly  
  - ✅ Departure and arrival times match the selected flight  
  - ✅ All validations occur on the **Payment Selection page** (no actual payment required)

---

### 2. Product Search Automation (Amazon)
Automate product searching on [amazon.com](https://www.amazon.com) with the following requirements:
- Set **viewport** to `1920x1080`
- Search for the item **“chair”**
- Sort results by **Price: High to Low**
- Select the **rightmost item** in the first row **that is not sponsored**
- Verify:
  - ✅ The product name and price match between the **search page** and **product detail page**  
  - 💡 For price verification, match only the integer part (e.g., `$100.xx` → `$100`)

---

### 3. Trending Video Automation (YouTube)
Automate trending video validation on [youtube.com](https://www.youtube.com) with the following requirements:
- Navigate to the **Trending** videos section
- Select the **Movies** category
- Choose the **3rd trending video**
- Verify:
  - ✅ The **video title** and **channel name** on the video page match the data displayed on the trending page


---  

## 🧭 How to Run the Tests
1. **Clone this repository:**
   ```bash
   git clone https://github.com/nabilasalsabilep/cypress-finalproject.git
2. **Navigate to the project folder**
3. **Install dependencies:**
   ```bash
   npm install
4. **Open Cypress Test Runner (GUI mode):**
   ```bash
   npx cypress open
5. **Run all tests in headless mode (CLI):**
   ```bash
   npx cypress run
6. **View the test report:**  
Open the generated HTML report inside the cypress/reports folder.

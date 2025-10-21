# ✈️ Final Project - Cypress

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

## 📂 Project Structure
cypress
├── downloads/                     # Stores downloaded files during tests
│
├── e2e/                           # Contains all end-to-end (E2E) test scripts
│   ├── agoda/
│   │   └── agodaE2E.cy.js         # Agoda E2E test script
│   ├── amazon/
│   │   └── amazonE2E.cy.js        # Amazon E2E test script
│   ├── youtube/
│   │   └── youtubeE2E.cy.js       # YouTube E2E test script
│   │
│   └── fixtures/                  # Test data files used across test cases
│       ├── agodaCustomerData.json
│       ├── example.json
│       ├── flightInformationData.json
│       ├── profile.json
│       └── users.json
│
├── reports/                       # Test report files generated after execution
│   ├── assets/
│   ├── mochawesome_001.html
│   ├── mochawesome_001.json
│   ├── mochawesome_002.html
│   ├── mochawesome_002.json
│   ├── mochawesome.html
│   └── mochawesome.json
│
├── screenshots/                   # Captures screenshots of failed or passed tests
│
├── support/                       # Helper files, locators, and page object models
│   ├── locators/
│   │   ├── agoda/
│   │   ├── amazon/
│   │   └── youtube/
│   │
│   ├── page-object/               # Page Object Model (POM) files for each project
│   │   ├── agoda/
│   │   ├── amazon/
│   │   └── youtube/
│   │
│   ├── commands.js
│   └── e2e.js
│
└── videos/                        # Test execution recordings (Cypress built-in)
    ├── agoda/
    ├── amazon/
    └── youtube/

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
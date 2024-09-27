
# Personal Finance Dashboard

## Overview

The Personal Finance Dashboard allows users to manage and track their income, expenses, and investments in a simple, intuitive interface. This project is structured using microfrontend architecture, built with React and Redux for state management, and Webpack for bundling. Each microfrontend handles one aspect of the financial dashboard — Income, Expenses, and Investments — and they communicate seamlessly to provide a unified view of the user's financial data.

## Features

- **Income Tracking**: Add income sources and view a list of recorded incomes.
- **Expense Tracking**: Record and categorize expenses to track spending.
- **Investment Tracking**: Add and monitor various investment types.
- **Total Calculations**: Automatically updates and displays the total income, expenses, and investments.
- **Microfrontend Architecture**: Each financial section (Income, Expenses, Investments) is a separate microfrontend application.
- **Accessibility (A11y)**: Designed with accessibility in mind, including appropriate use of labels, roles, and keyboard navigation.

## Technologies Used

- **React**: For building UI components.
- **Redux**: For managing global state.
- **Webpack**: Module bundler for building microfrontends and assets.
- **Microfrontend Architecture**: Built with Webpack Module Federation to load individual apps (Income, Expenses, Investments) independently.
- **Accessibility (A11y)**: Ensures the app is accessible to all users.

## Project Structure

```bash
personal-finance-dashboard/
├── container/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └── Dashboard.js
│   │   ├── redux/
│   │   │   └── store.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── webpack.config.js
├── income-app/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   └── Income.js
│   ├── package.json
│   └── webpack.config.js
├── expenses-app/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   └── Expenses.js
│   ├── package.json
│   └── webpack.config.js
└── investments-app/
    ├── public/
    │   └── index.html
    ├── src/
    │   └── Investments.js
    ├── package.json
    └── webpack.config.js
```

## Installation

Clone the repository:

```bash
git clone https://github.com/padmapriyavoleti/personal-finance-app.git
cd personal-finance-dashboard
```

Install dependencies for each microfrontend and the container:

```bash
# For the container
cd container
yarn install

# For the income microfrontend
cd ../income-app
yarn install

# For the expenses microfrontend
cd ../expenses-app
yarn install

# For the investments microfrontend
cd ../investments-app
yarn install
```

## Running the Application

Start the main container app on port 3000:

```bash
cd container
yarn start
```

In separate terminals, start each microfrontend:

### Income Microfrontend on port 3001:

```bash
cd income-app
yarn start
```

### Expenses Microfrontend on port 3002:

```bash
cd expenses-app
yarn start
```

### Investments Microfrontend on port 3003:

```bash
cd investments-app
yarn start
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the dashboard. The microfrontends will be loaded dynamically from ports 3001, 3002, and 3003.

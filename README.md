## 🚀 Overview

This project is a simple Node.js Express API integrated with a Continuous Integration (CI) pipeline using GitHub Actions.

The pipeline automatically runs tests and validates the application every time code is pushed to the main branch.

## 🧰 Tech Stack

- Node.js — Backend runtime environment  
- Express.js — Web framework for building APIs  
- Jest — Testing framework for unit tests  
- GitHub Actions — CI automation tool  
- Docker — Containerization tool (used for build stage)

## 📁 Project Structure

cloudshop-api/
│── app.js                # Main Express application
│── package.json         # Project dependencies and scripts
│── tests/               # Automated test cases (Jest)
│   └── app.test.js
│── .github/
│   └── workflows/
│       └── ci.yml       # GitHub Actions CI pipeline
│── README.md            # Project documentation

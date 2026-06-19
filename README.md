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

## 🔁 CI Pipeline (GitHub Actions)

This project uses GitHub Actions to implement Continuous Integration (CI).

The pipeline is triggered automatically whenever code is pushed to the `main` branch.

### CI Workflow Steps:

1. Checkout repository code
2. Setup Node.js environment (version 20)
3. Install project dependencies using npm
4. Run automated tests using Jest
5. Build Docker image for the application

### CI Goal:

To ensure that every code change is tested and validated before being merged or deployed, improving code quality and reliability.

## 🏁 Results

- CI pipeline runs automatically on every push to the `main` branch
- All tests are executed using Jest before build stage
- Docker image is successfully built in CI environment
- Code quality is enforced through automated testing

---

## 📌 Key Learning Outcomes

- Understanding Continuous Integration (CI) workflows
- Building automated testing pipelines using GitHub Actions
- Working with Node.js backend in a DevOps pipeline
- Writing and executing unit tests using Jest
- Introduction to Docker image build automation in CI

---

## 🎯 Summary

This project demonstrates a complete CI workflow that ensures every code change is automatically tested and validated before integration. It is a foundational step in modern DevOps practices.

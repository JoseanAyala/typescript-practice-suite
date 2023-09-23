# TypeScript LeetCode Solutions

Welcome to my TypeScript LeetCode solutions repository! This project contains TypeScript solutions to various LeetCode problems, and it uses Node.js and Jest for testing.

## Table of Contents

- [Getting Started](#getting-started)
- [Directory Structure](#directory-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/JoseanAyala/typescript-practice-suite.git
   ```

1. Install the required dependencies:

   ```bash
   cd typescript-practice-suite
   pnpm install
   ```

1. Write your TypeScript solutions for LeetCode problems in the appropriate directories within the project.

1. Develop solutions problems with a node environment by running:

   ```bash
     pnpm dev ./src/problem-to-execute.ts
   ```

1. Write your Jest unit tests for LeetCode problems in the appropriate directories within the project.

1. Run the tests to verify the correctness of your solutions:

   ```bash
   pnpm test
   ```

## Directory Structure

The project directory structure is organized as follows:

```
typescript-leetcode-solutions/
├── src/
│   ├── problem1.ts
│   ├── problem2.ts
│   └── ...
├── tests/
│   ├── problem1.test.ts
│   ├── problem2.test.ts
│   └── ...
├── README.md
└── package.json
```

- The `src/` directory contains your TypeScript solutions for various LeetCode problems.
- The `tests/` directory contains Jest test files for each problem's solution.
- You can add more LeetCode problems and corresponding tests as needed.

## Usage

You can use this project as a template for your TypeScript LeetCode solutions. Add your solutions in the `src/` directory, write corresponding test cases in the `tests/` directory, and run the tests using `pnpm test`.

Feel free to customize this project to suit your needs and add additional features or documentation as necessary.

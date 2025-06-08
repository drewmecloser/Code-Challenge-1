# Code-Challenge-1
# SA.01: WK1: Code Challenge Solutions

## Description
This repository contains my solutions for the Week 1 Code Challenge (SA.01: WK1) assignments. The challenge involved creating three distinct JavaScript programs to solve specific real-world problems: a Chai Bora ingredient calculator, a Boda Boda ride fare estimator, and a simplified mobile money transaction fee estimator. Each solution is implemented in its own dedicated folder and JavaScript file.

## Project Structure
The repository is organized into folders for each challenge:
* `chaiCalculator/`: Contains the `chai.js` file for the Chai Bora Ingredient Calculator.
* `bodaFareCalculator/`: Contains the `fare.js` file for the Boda Boda Ride Fare Estimator.
* `mobileMoneyEstimator/`: Contains the `fee.js` file for the Simplified Mobile Money Transaction Fee Estimator.

## Project Setup
To run these solutions locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR_GITHUB_USERNAME/Code-Challenge-1.git](https://github.com/YOUR_GITHUB_USERNAME/Code-Challenge-1.git)
    ```
    (Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username and `Code-Challenge-1` with your repository name if different).

2.  **Navigate to the project directory:**
    ```bash
    cd Code-Challenge-1
    ```

3.  **Run the individual challenges:**
    Each challenge is implemented as a JavaScript file that uses the `prompt()` function for user input and `console.log()` for output. You can run them in a web browser's developer console or using Node.js if you have it installed.

    **Option A: Using a Web Browser (Recommended for this challenge's `prompt`/`console.log` interaction)**
    * Create a simple `index.html` file in the root of your `Code-Challenge-1` directory or within each challenge folder.
    * Link the respective JavaScript file to the `index.html`. For example, for the Chai Calculator:
        ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Chai Calculator</title>
        </head>
        <body>
            <h1>Open your browser's developer console (F12) to interact.</h1>
            <script src="chaiCalculator/chai.js"></script>
        </body>
        </html>
        ```
    * Open the `index.html` file in your web browser.
    * Open your browser's developer console (usually by pressing `F12` or `Ctrl+Shift+I`/`Cmd+Option+I`). The prompts will appear in the browser window, and the output will be displayed in the console.

    **Option B: Using Node.js (If `prompt` is polyfilled or for future challenges without browser prompts)**
    * Ensure you have Node.js installed on your system.
    * Navigate to the respective challenge folder in your terminal (e.g., `cd chaiCalculator`).
    * Run the JavaScript file using Node:
        ```bash
        node chai.js
        ```
        *Note: The `prompt()` function is typically a browser-specific global. For Node.js, you would need to use a package like `readline-sync` or implement your own input handling for the `prompt()` functionality to work as expected.*

## Author
* **[Your Name Here]** (e.g., Jane Doe)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details (if you choose to add a separate license file). If not, you can state "This project is open-source and free to use."
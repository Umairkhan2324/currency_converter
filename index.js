import inquirer from "inquirer";
let convertion = {
    "PKR": {
        "USD": 0.0035,
        "GBP": 0.0028,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.26,
        "PKR": 354.13,
        "GBP": 1.
    },
    "USD": {
        "PKR": 281.82,
        "GBP": 0.80,
        "USD": 1.
    }
};
const answers = await inquirer.prompt([
    { type: "list",
        name: "from",
        message: "Select Currency",
        choices: ["PKR", "GBP", "USD"]
    },
    { type: "list",
        name: "to",
        message: "Select Currency to convert into:",
        choices: ["PKR", "GBP", "USD"]
    },
    {
        type: "number",
        name: "amount",
        message: "Enter the amount you want to convert"
    }
]);
const { from, to, amount } = answers;
if (from && to && amount) {
    let result = convertion[from][to] * amount;
    console.log(`your convertion from ${from} to ${to} is ${result}`);
}
else {
    console.log("Invalid currency conversion");
}

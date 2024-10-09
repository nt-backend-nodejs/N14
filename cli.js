const fs = require("fs");
const path = require("path");
const readline = require("readline");

const filePath = path.join(__dirname, "tasks.json");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let tasks = [];

if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf8");
    tasks = JSON.parse(data);
}

function showMenu() {
    console.log("\n--- Todo CLI ---");
    console.log("1. Vazifalarni ko'rish");
    console.log("2. Vazifa qo'shish");
    console.log("3. Vazifani o'chirish");
    console.log("0. Chiqish\n");

    rl.question("Tanlovingizni kiriting: ", (choice) => {
        switch (choice.trim()) {
            case "1":
                listTasks();
                break;
            case "2":
                addTask();
                break;
            case "3":
                removeTask();
                break;
            case "0":
                exitCLI();
                break;
            default:
                console.log("Noto'g'ri tanlov. Qaytadan urinib ko'ring.");
                showMenu();
        }
    });
}
function listTasks() {
    if (tasks.length === 0) {
        console.log("\nVazifalar ro'yxati bo'sh.");
    } else {
        console.log("\n--- Vazifalar Ro'yxati ---");
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
    showMenu();
}

function addTask() {
    rl.question("\nYangi vazifani kiriting: ", (task) => {
        if (task.trim().length === 0) {
            console.log("Vazifa matni bo'sh bo'lishi mumkin emas.");
        } else {
            tasks.push(task.trim());
            saveTasks();
            console.log("Vazifa qo'shildi.");
        }
        showMenu();
    });
}

function removeTask() {
    if (tasks.length === 0) {
        console.log("\nVazifalar ro'yxati bo'sh.");
        showMenu();
    } else {
        listTasks();
        rl.question(
            "\nO'chirmoqchi bo'lgan vazifaning raqamini kiriting: ",
            (number) => {
                const index = parseInt(number.trim()) - 1;
                if (isNaN(index) || index < 0 || index >= tasks.length) {
                    console.log("Noto'g'ri raqam.");
                } else {
                    const removedTask = tasks.splice(index, 1);
                    saveTasks();
                    console.log(`Vazifa o\'chirildi: "${removedTask}"`);
                }
                showMenu();
            },
        );
    }
}

function saveTasks() {
    fs.writeFileSync(filePath, JSON.stringify(tasks), "utf8");
}

function exitCLI() {
    console.log("\nDastur tugatildi.");
    rl.close();
}

showMenu();

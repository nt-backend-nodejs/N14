const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "math");

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error("Katalogni o'qish xatosi:", err);
        return;
    }
    files.forEach((file) => {
        const filePath = path.join(directoryPath, file);
        fs.stat(filePath, (err, stats) => {
            if (err) {
                console.error("Fayl haqida ma'lumot olish xatosi:", err);
                return;
            }
            console.log(`Fayl: ${file}`);
            console.log(`  Hajmi: ${stats.size} bayt`);
            console.log(`  Yaratilgan: ${stats.birthtime}`);
            console.log(`  Oxirgi o'zgartirish: ${stats.mtime}`);
            console.log(`  Faylmi: ${stats.isFile()}`);
            console.log(`  Katalogmi: ${stats.isDirectory()} \n`);
        });
    });
});

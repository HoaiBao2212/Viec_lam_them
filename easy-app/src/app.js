// This file is the entry point of the application. It contains the main logic for the easy app.

import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (e.g., CSS, images) from a 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Simple HTML layout function
function renderLayout(content) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Easy App</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; background: #f9f9f9; }
                header { background: #0078d4; color: #fff; padding: 16px; border-radius: 8px 8px 0 0; }
                main { background: #fff; padding: 24px; border-radius: 0 0 8px 8px; }
            </style>
        </head>
        <body>
            <header>
                <h1>Easy App</h1>
            </header>
            <main>
                ${content}
            </main>
        </body>
        </html>
    `;
}

app.get('/', (req, res) => {
    res.send(renderLayout('<p>Welcome to the Easy App!</p>'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
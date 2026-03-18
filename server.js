const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en"></html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Lab 6 Deployment</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center;">
            <div style="max-width: 700px; width: 90%; margin: 20px; background: rgba(255, 255, 255, 0.95); border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); overflow: hidden; animation: fadeIn 0.6s ease-in;">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center; position: relative;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22none%22 stroke=%22rgba(255,255,255,0.1)%22 stroke-width=%220.5%22/></svg>'); opacity: 0.3;"></div>
                    <h1 style="color: white; margin: 0; font-size: 2.5em; font-weight: 700; text-shadow: 2px 2px 4px rgba(0,0,0,0.2); position: relative; z-index: 1;">🚀 Lab 6 Deployment</h1>
                    <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 1.1em; position: relative; z-index: 1;">Using Docker Containerization</p>
                </div>
                <div style="padding: 40px 30px;">
                    <div style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); padding: 25px; border-radius: 12px; margin-bottom: 20px; border-left: 5px solid #667eea; transition: transform 0.3s ease;">
                        <p style="font-size: 1.3em; margin: 0; color: #333; display: flex; align-items: center;">
                            <span style="margin-right: 10px;">👤</span>
                            <span><strong style="color: #667eea;">Name:</strong> Muhammad Muneeb Ur Rehman</span>
                        </p>
                    </div>
                    <div style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); padding: 25px; border-radius: 12px; border-left: 5px solid #764ba2; transition: transform 0.3s ease;">
                        <p style="font-size: 1.3em; margin: 0; color: #333; display: flex; align-items: center;">
                            <span style="margin-right: 10px;">🎓</span>
                            <span><strong style="color: #764ba2;">Reg No:</strong> FA22-BSE-011</span>
                        </p>
                    </div>
                    <div style="margin-top: 30px; text-align: center; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                        <p style="margin: 0; color: #666; font-size: 0.95em;">✨ DevOps Assignment • Docker Deployment ✨</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `);

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
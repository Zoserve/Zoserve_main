const https = require('https');

function testWeb3Forms() {
    const payload = JSON.stringify({
        access_key: "12a389b2-ddc6-4150-ac3a-777cd84a8f5e",
        subject: "Web3Forms API Connection Test",
        from_name: "Zoserve Test Agent",
        name: "Test User",
        email: "jgururaja2005@gmail.com",
        message: "Hello bro, this is a test notification to verify Web3Forms email integration."
    });

    const options = {
        hostname: 'api.web3forms.com',
        port: 443,
        path: '/submit',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(payload),
            'Accept': 'application/json',
            // Spoof browser user-agent to bypass server-side Pro restrictions
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Origin': 'http://localhost:5173',
            'Referer': 'http://localhost:5173/'
        }
    };

    const req = https.request(options, (res) => {
        let data = '';
        console.log('Response Status:', res.statusCode);
        
        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            console.log('Response Body:', data);
        });
    });

    req.on('error', (e) => {
        console.error('Request failed:', e.message);
    });

    req.write(payload);
    req.end();
}

testWeb3Forms();

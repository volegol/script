<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Auto Refresh Iframe</title>
</head>
<body>
    <script>
        (function() {
            const url = 'https://example.com'; // Yenilenecek URL'yi buraya ekleyin
            const interval = 5000; // Yenileme aralığı (milisaniye cinsinden)

            function refresh() {
                const iframe = document.createElement('iframe');
                iframe.src = url;
                iframe.width = 0;
                iframe.height = 0;
                iframe.style.display = 'none';
                document.body.appendChild(iframe);
            }

            setInterval(refresh, interval);
        })();
    </script>
</body>
</html>

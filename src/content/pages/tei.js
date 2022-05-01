<div className="application">
    <head>
     <title>Beggar's Opera</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="./src/content/tei.css">
    </head>
    <h1>The Beggars Opera: A Digital Edition</h1>
        <p>
        <script>
            let c = new CETEI();
            c.getHTML5('./src/content/pages/tei/bo1.xml', function (data) {
                document.getElementsByTagName("body")[0].appendChild(data);
            });</script>
        </p>
</div>

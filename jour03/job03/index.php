<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Runtrack 3 - Jour 3 - Job 3</title>
</head>
<body>
    <h1>Taquin</h1>
    <div id="board">
        <div class="part" id="1"></div>
        <div class="part" id="2"></div>
        <div class="part" id="3"></div>
        <div class="part" id="4"></div>
        <div class="part" id="5"></div>
        <div class="part" id="6"></div>
        <div class="part" id="7"></div>
        <div class="part" id="8"></div>
        <div class="part" id="9"></div>
    </div>
</body>
</html>
<script src="../jquery-3.4.1.js"></script>
<script src="script.js"></script>

<style>
body, html
{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    margin: 0;
    background-color: black;
    color: white;
    font-size: 1.4vw;
}
body h1
{
    margin: 0;
}
#board
{
    height: 513px;
    width: 510px;
    display: flex;
    flex-wrap: wrap;
    background-color: white;
}
#board .part
{
    /* background-color: blue; */
    height: 171px;
    width: 170px;
    /* border: 1px solid black; */
    color: black;
}
</style>
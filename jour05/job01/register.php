<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Runtrack 3 - Jour 5 - Job 1 | Inscription</title>
    <!-- <link rel="stylesheet" href="style.css"> -->
</head>
<body>
    <h1>Inscription</h1>
    <a href="index.php">Accueil</a>
    <a href="login.php">Connexion</a><br/><br/>

    <form method="POST">
        <input type="text" id="prename" placeholder="Prenom"/><br/>
        <input type="text" id="name" placeholder="Nom"/><br/>
        <input type="email" id="mail" placeholder="Addresse mail"/><br/>
        <input type="password" id="password" placeholder="Mot de passe"/><br/>
        <input type="password" id="cpassword" placeholder="Confirmation mot de passe"/><br/>
        <input type="button" id="register" value="Inscription"/><br/>
    </form>
</body>
</html>
<script src="api/jquery-3.4.1.min.js"></script>
<script src="api/script.js"></script>
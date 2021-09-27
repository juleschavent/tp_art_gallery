// Création d'une classe Import qui sert à importer les images pour un tag <img src:"" /> par exemple

// On lui donne 2 propriété value et path, on les appelles comme on veut 
const Import = (path, value) => {
    return (
        // On lui demande de nous retourner des valeurs
        // Ex : si Import("monLogo.png", "desktop/")
        // La fonction retourne ./dekstop/monLogo.png
        require(path + value + '.jpg').default
    );
}

export default Import;
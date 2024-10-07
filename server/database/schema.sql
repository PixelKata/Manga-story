CREATE TABLE Auteur (
    id_auteur INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100),
    date_naissance DATE,
);

CREATE TABLE Genre (
    id_genre INT PRIMARY KEY AUTO_INCREMENT,
    nom_genre VARCHAR(100) NOT NULL
);

CREATE TABLE Manga (
    id_manga INT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(255) NOT NULL,
    résumé TEXT,
    date_publication DATE,
    couverture_image VARCHAR(255),
    auteur_id INT FOREIGN KEY,
    genre_id INT FOREIGN KEY,
);

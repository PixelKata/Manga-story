CREATE TABLE Auteur (
    id_auteur INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100),
    date_naissance DATE,
    biographie TEXT,
);

INSERT INTO Auteur (nom, prenom, date_naissance, biographie) VALUES 
('Miura', 'Kentaro', '11-07-1966', 'Auteur de Berserk, un manga sombre et épique.'),
('Kawahara', 'Reki', '17-08-1974', 'Auteur de Sword Art Online, une célèbre série de light novels adaptée en manga.'),
('Oba', 'Tsugumi', NULL, 'Auteur de Death Note, une histoire sur la justice et le pouvoir de la mort.'),
('Ishida', 'Sui', '28-12-1986', 'Auteur de Tokyo Ghoul, une série sombre sur les goules dans le Tokyo moderne.'),
('Isayama', 'Hajime', '29-08-1986', 'Auteur de L''Attaque des Titans.'),
('Toriyama', 'Akira', '05-04-1955', 'Auteur de Dragon Ball Z.'),
('Kishimoto', 'Masashi', '08-11-1974', 'Auteur de Naruto et Naruto Shippuden, l''un des mangas les plus populaires.'),
('Gotouge', 'Koyoharu', '05-05-1989', 'Auteur de Demon Slayer, une série sur la lutte contre les démons.');


CREATE TABLE Genre (
    id_genre INT PRIMARY KEY AUTO_INCREMENT,
    nom_genre VARCHAR(100) NOT NULL
);

INSERT INTO Genre (nom_genre) VALUES 
('Shonen'),
('Seinen'),
('Isekai');


CREATE TABLE Manga (
    id_manga INT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(255) NOT NULL,
    résumé TEXT,
    date_publication DATE,
    couverture_image VARCHAR(255),
    auteur_id INT FOREIGN KEY,
    genre_id INT FOREIGN KEY,
);

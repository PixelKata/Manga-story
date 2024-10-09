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
('Isayama', 'Hajime', '29-08-1986', 'Auteur de L\'Attaque des Titans.'),
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
INSERT INTO Manga (titre, résumé, date_publication, couverture_image, id_auteur, id_genre) VALUES
('Berserk', 'Les aventures sombres et brutales de Guts, un mercenaire au destin tragique.', '25-08-1989', 'berserk.png', 4, 2),
('Sword Art Online', 'Les aventures des joueurs piégés dans un jeu de réalité virtuelle où la mort est définitive.', '10-04-2009', 'sao.png', 5, 3),
('Death Note', 'Un cahier surnaturel qui permet à son utilisateur de tuer quiconque en connaît le nom.', '01-12-2003', 'death_note.png', 6, 1),
('Tokyo Ghoul', 'Un étudiant se transforme en demi-goule après une attaque et doit apprendre à vivre entre deux mondes.', '08-09-2011', 'tokyo_ghoul.png', 7, 2),
('Demon Slayer', 'Un jeune garçon cherche à sauver sa sœur et se venger des démons après que sa famille ait été massacrée.', '15-02-2016', 'demon_slayer.png', 8, 1),
('Dragon Ball Z', 'Suite de Dragon Ball, Goku et ses amis combattent des ennemis encore plus puissants.', '26-04-1989', 'dragon_ball_z.png', 9, 1),
('Naruto Shippuden', 'La suite de Naruto, suivant son voyage pour devenir un ninja puissant et sauver ses amis.', '15-02-2007', 'naruto_shippuden.png', 10, 1),
('L\'Attaque des Titans', 'L''humanité lutte pour sa survie contre des titans gigantesques.', '09-09-2009', 'attaque_des_titans.png', 11, 2);

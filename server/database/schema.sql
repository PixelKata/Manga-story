CREATE TABLE author (
    author_id INT PRIMARY KEY AUTO_INCREMENT,
    last_name VARCHAR(100) NOT NULL,
    first_name VARCHAR(100),
    birth_date DATE,
    biography TEXT
);

INSERT INTO
    author (
        last_name,
        first_name,
        birth_date,
        biography
    )
VALUES (
        'Miura',
        'Kentaro',
        '1966-07-11',
        'Auteur de Berserk, un manga sombre et épique.'
    ),
    (
        'Kawahara',
        'Reki',
        '1974-08-17',
        'Auteur de Sword Art Online, une célèbre série de light novels adaptée en manga.'
    ),
    (
        'Oba',
        'Tsugumi',
        NULL,
        'Auteur de Death Note, une histoire sur la justice et le pouvoir de la mort.'
    ),
    (
        'Ishida',
        'Sui',
        '1986-12-28',
        'Auteur de Tokyo Ghoul, une série sombre sur les goules dans le Tokyo moderne.'
    ),
    (
        'Isayama',
        'Hajime',
        '1986-08-29',
        'Auteur de L\'Attaque des Titans.'
    ),
    (
        'Toriyama',
        'Akira',
        '1955-04-05',
        'Auteur de Dragon Ball Z.'
    ),
    (
        'Kishimoto',
        'Masashi',
        '1974-11-08',
        'Auteur de Naruto et Naruto Shippuden, l''un des mangas les plus populaires.'
    ),
    (
        'Gotouge',
        'Koyoharu',
        '1989-05-05',
        'Auteur de Demon Slayer, une série sur la lutte contre les démons.'
    );

CREATE TABLE genre (
    genre_id INT PRIMARY KEY AUTO_INCREMENT,
    genre_name VARCHAR(100) NOT NULL
);

INSERT INTO
    genre (genre_name)
VALUES ('Shonen'),
    ('Seinen'),
    ('Isekai');

CREATE TABLE manga (
    manga_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    summary TEXT,
    publication_date DATE,
    cover_image VARCHAR(255),
    author_id INT,
    genre_id INT,
    FOREIGN KEY (author_id) REFERENCES author (author_id),
    FOREIGN KEY (genre_id) REFERENCES genre (genre_id)
);

INSERT INTO
    manga (
        title,
        summary,
        publication_date,
        cover_image,
        author_id,
        genre_id
    )
VALUES (
        'Berserk',
        'Les aventures sombres et brutales de Guts, un mercenaire au destin tragique.',
        '1989-08-25',
        'berserk.png',
        1,
        2
    ),
    (
        'Sword Art Online',
        'Les aventures des joueurs piégés dans un jeu de réalité virtuelle où la mort est définitive.',
        '2009-04-10',
        'sao.png',
        2,
        3
    ),
    (
        'Death Note',
        'Un cahier surnaturel qui permet à son utilisateur de tuer quiconque en connaît le nom.',
        '2003-12-01',
        'death_note.png',
        3,
        1
    ),
    (
        'Tokyo Ghoul',
        'Un étudiant se transforme en demi-goule après une attaque et doit apprendre à vivre entre deux mondes.',
        '2011-09-08',
        'tokyo_ghoul.png',
        4,
        2
    ),
    (
        'Demon Slayer',
        'Un jeune garçon cherche à sauver sa sœur et se venger des démons après que sa famille ait été massacrée.',
        '2016-02-15',
        'demon_slayer.png',
        8,
        1
    ),
    (
        'Dragon Ball Z',
        'Suite de Dragon Ball, Goku et ses amis combattent des ennemis encore plus puissants.',
        '1989-04-26',
        'dragon_ball_z.png',
        6,
        1
    ),
    (
        'Naruto Shippuden',
        'La suite de Naruto, suivant son voyage pour devenir un ninja puissant et sauver ses amis.',
        '2007-02-15',
        'naruto_shippuden.png',
        7,
        1
    ),
    (
        'L\'Attaque des Titans',
        'L''humanité lutte pour sa survie contre des titans gigantesques.',
        '2009-09-09',
        'attaque_des_titans.png',
        5,
        2
    );
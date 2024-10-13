CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    role VARCHAR(20) NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO
    user (
        username,
        password,
        email,
        role
    )
VALUES (
        'Zeno-sama',
        '$argon2id$v=19$m=65536,t=3,p=4$7oqIRHp1C2WnBs4ix4WLnQ$0dsyOUHiCwkCRA7rScGNN7GGyu/I1Xp2rf68BtyAqgk',
        'guillaume@gmail.com',
        'admin'
    );

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
    volume_number INT,
    summary TEXT,
    description TEXT,
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
        volume_number,
        summary,
        description,
        publication_date,
        cover_image,
        author_id,
        genre_id
    )
VALUES (
        'Berserk',
        1,
        'Les aventures sombres et brutales de Guts, un mercenaire au destin tragique.',
        'Guts, le guerrier noir, promène son imposante silhouette de routes en villages. Sur son passage, les cadavres s''amoncellent et il laisse derrière lui des torrents de sang. Le corps vêtu de noir, il porte sur son dos une épée aussi haute qu''un homme. Sur son cou, une marque mystérieuse le condamne à être poursuivi jour et nuit par des démons. Puck, l''elfe facétieux, croise un jour le chemin de cette machine à tuer. Quelles horreurs a-t-il pu connaître pour être animé d''une telle soif de vengeance ? Alors que le monde sombre inextricablement dans le chaos, Guts règle ses comptes avec les forces démoniaques qui resserrent leur emprise sur le destin des hommes. Une époque s''achève... Au fil des années, « Berserk » est devenu au Japon un classique de l''heroic fantasy. Kentarô Miura y déploie les talents de scénariste et son imagination débordante. La série abonde de scènes d''anthologies et baigne dans une violence implacable : pas étonnant que « Berserk » soit devenu une référence pour les amoureux de Tolkien et de jeux de rôles. En France, la série a déjà ses fans, qui voient leur attente récompensée : la série est publiée en sens de lecture et format original, et les 7 premiers volumes sont prévus pour paraître mensuellement. L''un des mangas les plus attendus de l''année !',
        '1989-08-25',
        'berserk.png',
        1,
        2
    ),
    (
        'Sword Art Online',
        1,
        'Les aventures des joueurs piégés dans un jeu de réalité virtuelle où la mort est définitive.',
        'En 2022, Kirito, un adolescent sans histoire, se retrouve piégé avec 10 000 autres joueurs dans un MMORPG en réalité augmentée : Sword Art Online. Pour regagner leur liberté, les joueurs devront compléter les 100 étages qui composent l''Aincrad, leur prison virtuelle. Mais le moindre faux-pas pourrait être fatal, puisqu''un Game Over dans le jeu entraînera une mort réelle. Kirito, le joueur solo, se lance dans une course effrénée pour sa survie, dans un monde où l''art de l''épée dicte la loi des plus forts.',
        '2009-04-10',
        'sao.png',
        2,
        3
    ),
    (
        'Death Note',
        1,
        'Un cahier surnaturel qui permet à son utilisateur de tuer quiconque en connaît le nom.',
        'Light Yagami ramasse un étrange carnet oublié dans la cour de son lycée. Selon les instructions du carnet, la personne dont le nom est écrit dans les pages du Death Note mourra dans les 40 secondes !! Quelques jours plus tard, Light fait la connaissance de l''ancien propriétaire du carnet : Ryûk, un dieu de la mort ! Poussé par l''ennui, il a fait entrer le carnet sur terre. Ryûk découvre alors que Light a déjà commencé à remplir son carnet',
        '2003-12-01',
        'death_note.png',
        3,
        1
    ),
    (
        'Tokyo Ghoul',
        7,
        'Un étudiant se transforme en demi-goule après une attaque et doit apprendre à vivre entre deux mondes.',
        '«N''espérez pas revoir Ken.» C''est sur cette déclaration fracassante de M. Yoshimura que les membres de l''«Antique» se dirigent vers le 11e arrondissement pour tenter de sauver malgré tout leur ami. Une mission d''autant plus difficile que Ken se trouve en plein coeur du repaire d''Aogiri auquel les inspecteurs du C.C.G. s''apprêtent à donner l''assaut. Un repaire où Ken risque d''être changé à jamais par ce que les mains perverses de Yamori vont lui faire subir.',
        '2011-09-08',
        'tokyo_ghoul.png',
        4,
        2
    ),
    (
        'Demon Slayer',
        3,
        'Un jeune garçon cherche à sauver sa sœur et se venger des démons après que sa famille ait été massacrée.',
        'Nezuko et Tanjiro sont aux prises avec deux des “douze lunes démoniaques” qui servent de bataillon d’élite aux ordres du terrible Kibutsuji. L’une utilise de puissantes balles comme armes d’attaque qu’elle projette violemment sur ses adversaires, tandis que l’autre en dirige la trajectoire au moyen de flèches invisibles... La lutte est acharnée, mais grâce à l’aide de Tamayo et Yushiro, nos héros parviennent à s’en sortir victorieux... Tout en acquérant de précieux renseignements qui pourraient peut-être bien les aider à remonter la piste de Kibutsuji !',
        '2016-02-15',
        'demon_slayer.png',
        8,
        1
    ),
    (
        'Dragon Ball',
        1,
        'Dragon Ball suit les aventures de Goku, un guerrier puissant qui cherche les Dragon Balls pour exaucer des vœux.',
        'L''univers de Dragon Ball est inclassable. Aventure, magie, humour, technologie de pointe et arts martiaux ne font qu''agrémenter l''intérêt porté aux protagonistes de cette fabuleuse quête. Voici en quelque sorte la version moderne des chevaliers de la table ronde au pays du soleil levant. Les dragon balls sont des boules de cristal magiques. Celui qui les réunit invoque un dragon qui réalisera ses voeux. Sangoku, Dendé, Végéta et tous les protagonistes de cette grande saga tentent de trouver les sept dragon balls qui, une fois le voeu exaucé, s''éparpilleront à nouveau dans l''univers.',
        '1989-04-26',
        'dragon_ball_z.png',
        6,
        1
    ),
    (
        'Naruto',
        71,
        'La suite de Naruto, suivant son voyage pour devenir un ninja puissant et sauver ses amis.',
        'Naruto et Sasuke se retrouvent dotés d''un nouveau pouvoir que l''ermite Rikudo leur a transmis. Ils sont maintenant capable de sceller Kaguya ! Il leur reste tout de même à trouver un stratagème pour l''approcher ! De plus ils sont de nouveau séparés... Nos 2 héros réussiront ils à se retrouver et à mettre un terme au plan démoniaque de Kaguya ?',
        '2007-02-15',
        'naruto_shippuden.png',
        7,
        1
    ),
    (
        'L\'Attaque des Titans',
        1,
        'L''humanité lutte pour sa survie contre des titans gigantesques.',
        'Dans un monde ravagé par des titans mangeurs d’homme depuis plus d’un siècle, les rares survivants de l’Humanité n’ont d’autre choix pour survivre que de se barricader dans une cité-forteresse. Le jeune Eren, témoin de la mort de sa mère dévorée par un géant, n’a qu''un rêve : entrer dans le corps d’élite chargé de découvrir l’origine des titans, et les annihiler jusqu''au dernier…',
        '2009-09-09',
        'attaque_des_titans.png',
        5,
        2
    );
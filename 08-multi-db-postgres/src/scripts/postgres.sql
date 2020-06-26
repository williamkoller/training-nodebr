DROP TABLE IF EXISTS herois;
CREATE TABLE herois (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
    nome TEXT NOT NULL,
    poder TEXT NOT NULL
);
--create
INSERT INTO herois (nome, poder)
VALUES ('Flash', 'Velocidade'),
    ('Aquaman', 'Falar com animais aquáticos'),
    ('Batman', 'Dinheiro');
--read all
SELECT *
FROM herois;
-- read for nome
SELECT *
FROM herois
WHERE nome = 'Flash';
-- read for poder
SELECT *
FROM herois
WHERE poder = 'Dinheiro';
--update for id
UPDATE herois
SET nome = 'Goku',
    poder = 'Deus'
WHERE id = 2;
-- delete for id
DELETE FROM herois
WHERE id = 2;

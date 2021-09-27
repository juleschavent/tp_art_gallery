-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 27 sep. 2021 à 16:11
-- Version du serveur : 10.4.19-MariaDB
-- Version de PHP : 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `gallery`
--

-- --------------------------------------------------------

--
-- Structure de la table `art`
--

CREATE TABLE `art` (
  `id_art` int(11) NOT NULL,
  `name_art` varchar(255) DEFAULT NULL,
  `desc_art` mediumtext DEFAULT NULL,
  `auth_art` varchar(255) DEFAULT NULL,
  `image_art` varchar(255) NOT NULL,
  `currbid_art` int(11) NOT NULL,
  `currbuyer_art` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `art`
--

INSERT INTO `art` (`id_art`, `name_art`, `desc_art`, `auth_art`, `image_art`, `currbid_art`, `currbuyer_art`) VALUES
(1, 'Mona Lisa', 'L’œuvre de Léonard de Vinci « Mona Lisa » est l’œuvre d\'art la plus reconnue du monde. Elle est située dans le Louvre à Paris. Le chef-d\'œuvre qui attire peut-être plus de visites que d\'autres peintures célèbres est aussi connu sous le nom de Joconde. C\'est un portrait de del Giocondo l\'épouse du riche marchand florentin Francesco di Bartolomeo. Certains de spécialistes considèrent ce portrait de la mère de Léonard, d\'autres croient que c\'est un autoportrait de l\'artiste lui-même. Cette peinture est admirée par tous les amateurs de l\'art et des scientifiques. Elle donne au spectateur le sens de toucher l\'harmonie et l\'éternité. Elle a une grande renommée par de hautes qualités artistiques, mais aussi à l\'atmosphère de mystère qui entoure cette œuvre.', 'Léonard de Vinci', 'monalisa', 45000, '02yEvJ0bdSfWVIO0taGEAmUMygu1'),
(2, 'Ecole d\'Athènes', '« L\'École d\'Athènes » est l\'une des fresques les plus célèbres de Raphaël, l\'artiste de la Renaissance italienne. En 1508, Raphaël a été  officiellement nommé le peintre de la papauté et a peint les salles de cérémonie du palais du Vatican. Au centre du tableau, nous pouvons voir les deux penseurs Aristote (à droite) et Platon (à gauche). La signification de ces deux personnes était extrêmement grande pour la philosophie occidentale parce que les concepts de leurs écoles différentes ont été repris par le christianisme. ', 'Raphaël', 'ecoleathenes', 15000, '02yEvJ0bdSfWVIO0taGEAmUMygu1'),
(5, 'La création d\'Adam', '« La création d\'Adam » est une fresque de Michel-Ange, peinte en 1508-1512. Elle fait partie du plafond de la chapelle Sixtine. La fresque illustre l\'apparition d\'Adam le premier homme à qui Dieu a donné la vie. Le sujet de la création biblique de cette peinture a été retiré du livre de la Genèse. La fresque fait partie d\'un schéma iconographique complexe. Elle est chronologiquement la quatrième des neuf scènes de la série de panneaux représentant des épisodes de la Genèse qui sont peintes au centre du plafond de la chapelle. \n« La création d\'Adam » de Michel-Ange est l\'une des peintures religieuses les plus reproduites de tous les temps. L\'image des mains touchantes de Dieu et d\'Adam est devenue emblématique de l\'humanité. Le tableau a été reproduit dans d\'innombrables imitations et parodies. La fresque est située sur le plafond de la chapelle Sixtine dans la cité du Vatican, Rome.  ', 'Michel Ange', 'adam', 0, ''),
(6, 'La jeune fille à la perle', 'La peinture à l\'huile sur toile « La Jeune Fille à la perle » est l’une des œuvres les plus connues faites par l\'artiste hollandais Johannes Vermeer. Le tableau représente une jeune femme imaginaire en robe avec une très grande boucle d\'oreille en perle dans un espace sombre peu profond ce qui attire l\'attention du spectateur exclusivement sur la femme. Maintenant, l\'œuvre réside en permanence au musée Mauritshuis de La Haye. Vermeer a réalisé juste 36 œuvres, attentives et réfléchies dépeignant souvent des femmes à des tâches quotidiennes. Ce style de peinture avec des scènes de la vie ordinaire a été appelé plus tard peinture de “genre”. La femme regarde des spectateurs avec ses yeux grands. Il nous semble qu\'elle veut nous dire quelque chose parce que ses lèvres sont séparées. Certains experts comparent cette peinture avec la Joconde de Léonard de Vinci parce qu’elle a aussi un air énigmatique et mystère.', 'Johannes Vermeer', 'jeunefilleperle', 0, '');

-- --------------------------------------------------------

--
-- Structure de la table `event`
--

CREATE TABLE `event` (
  `id_event` int(11) NOT NULL,
  `name_event` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `email_user` varchar(255) DEFAULT NULL,
  `password_user` varchar(45) DEFAULT NULL,
  `name_user` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `art`
--
ALTER TABLE `art`
  ADD PRIMARY KEY (`id_art`);

--
-- Index pour la table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id_event`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `art`
--
ALTER TABLE `art`
  MODIFY `id_art` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

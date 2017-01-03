-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Apr 02, 2016 at 11:58 AM
-- Server version: 5.5.42
-- PHP Version: 5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `creso_test`
--
CREATE DATABASE IF NOT EXISTS `creso_test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `creso_test`;

-- --------------------------------------------------------

--
-- Table structure for table `creso_alerts`
--

CREATE TABLE `creso_alerts` (
  `isin` varchar(64) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `data` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `quotazione` float NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs COMMENT='Log degli avvisi della watchlist';

-- --------------------------------------------------------

--
-- Table structure for table `creso_cambi`
--

CREATE TABLE `creso_cambi` (
  `data` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `usd2eur` float NOT NULL DEFAULT '1',
  `aud2eur` float NOT NULL DEFAULT '1',
  `try2eur` float NOT NULL DEFAULT '1',
  `brl2eur` float NOT NULL DEFAULT '1',
  `gbp2eur` float NOT NULL DEFAULT '1',
  `huf2eur` float NOT NULL DEFAULT '1',
  `nok2eur` float NOT NULL DEFAULT '1',
  `zar2eur` float NOT NULL DEFAULT '1',
  `rub2eur` float NOT NULL DEFAULT '1',
  `nzd2eur` float NOT NULL DEFAULT '1',
  `pln2eur` float NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs COMMENT='Cambi valutari per data';

-- --------------------------------------------------------

--
-- Table structure for table `creso_categorie_titoli`
--

CREATE TABLE `creso_categorie_titoli` (
  `categoria` varchar(24) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `titolo_categoria` varchar(255) COLLATE latin1_general_cs NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs COMMENT='Categorie dei titoli';

-- --------------------------------------------------------

--
-- Table structure for table `creso_cedole`
--

CREATE TABLE `creso_cedole` (
  `id` int(11) NOT NULL,
  `isin` varchar(64) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `stacco` date NOT NULL,
  `tasso` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `creso_dividendi`
--

CREATE TABLE `creso_dividendi` (
  `id` int(10) unsigned NOT NULL,
  `isin` varchar(24) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `stacco` date NOT NULL DEFAULT '0000-00-00',
  `importo` float NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs COMMENT='Dividendi dei titoli';

-- --------------------------------------------------------

--
-- Table structure for table `creso_errors`
--

CREATE TABLE `creso_errors` (
  `id` int(11) NOT NULL,
  `text` text NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `creso_indici`
--

CREATE TABLE `creso_indici` (
  `data` date NOT NULL DEFAULT '0000-00-00',
  `euribor_1M` float NOT NULL DEFAULT '0',
  `euribor_2M` float NOT NULL DEFAULT '0',
  `euribor_3M` float NOT NULL DEFAULT '0',
  `euribor_6M` float NOT NULL DEFAULT '0',
  `euribor_1Y` float NOT NULL DEFAULT '0',
  `libor_eur_1M` float NOT NULL DEFAULT '0',
  `libor_eur_2M` float NOT NULL DEFAULT '0',
  `libor_eur_3M` float NOT NULL DEFAULT '0',
  `libor_eur_6M` float NOT NULL DEFAULT '0',
  `libor_eur_1Y` float NOT NULL DEFAULT '0',
  `libor_usd_1M` float NOT NULL DEFAULT '0',
  `libor_usd_2M` float NOT NULL DEFAULT '0',
  `libor_usd_3M` float NOT NULL DEFAULT '0',
  `libor_usd_6M` float NOT NULL DEFAULT '0',
  `libor_usd_1Y` float NOT NULL DEFAULT '0',
  `libor_gbp_1M` float NOT NULL DEFAULT '0',
  `libor_gbp_2M` float NOT NULL DEFAULT '0',
  `libor_gbp_3M` float NOT NULL DEFAULT '0',
  `libor_gbp_6M` float NOT NULL DEFAULT '0',
  `libor_gbp_1Y` float NOT NULL DEFAULT '0',
  `libor_jpy_1M` float NOT NULL DEFAULT '0',
  `libor_jpy_2M` float NOT NULL DEFAULT '0',
  `libor_jpy_3M` float NOT NULL DEFAULT '0',
  `libor_jpy_6M` float NOT NULL DEFAULT '0',
  `libor_jpy_1Y` float NOT NULL DEFAULT '0',
  `libor_chf_1M` float NOT NULL DEFAULT '0',
  `libor_chf_2M` float NOT NULL DEFAULT '0',
  `libor_chf_3M` float NOT NULL DEFAULT '0',
  `libor_chf_6M` float NOT NULL DEFAULT '0',
  `libor_chf_1Y` float NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs COMMENT='Tassi di riferimento per scambi valutari';

-- --------------------------------------------------------

--
-- Table structure for table `creso_obbligazioni`
--

CREATE TABLE `creso_obbligazioni` (
  `isin` varchar(64) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `emissione` date NOT NULL DEFAULT '0000-00-00',
  `scadenza` date NOT NULL DEFAULT '0000-00-00',
  `zero_coupon` tinyint(4) NOT NULL DEFAULT '0',
  `stacco` date NOT NULL DEFAULT '0000-00-00',
  `cadenza` tinyint(4) NOT NULL DEFAULT '0',
  `tasso` varchar(255) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `prezzo_rimborso` float NOT NULL DEFAULT '100'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs COMMENT='Dettagli sulle obbligazioni';

-- --------------------------------------------------------

--
-- Table structure for table `creso_portfolio`
--

CREATE TABLE `creso_portfolio` (
  `id` int(10) unsigned NOT NULL,
  `utente` varchar(24) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `isin` varchar(64) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `quantita` int(11) NOT NULL DEFAULT '0',
  `prezzo` double NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs COMMENT='Portfolio titoli';

-- --------------------------------------------------------

--
-- Table structure for table `creso_preferences`
--

CREATE TABLE `creso_preferences` (
  `alert_type` enum('email','visual') COLLATE latin1_general_cs NOT NULL DEFAULT 'email',
  `isin_lookup_tlx` text COLLATE latin1_general_cs NOT NULL,
  `rows_per_page` int(11) NOT NULL DEFAULT '21',
  `email` varchar(24) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `monitor_start` time NOT NULL DEFAULT '00:00:00',
  `monitor_end` time NOT NULL DEFAULT '00:00:00',
  `monitor_interval` int(11) NOT NULL DEFAULT '3600',
  `isin_lookup_ita` text COLLATE latin1_general_cs NOT NULL,
  `isin_lookup_eurotlx` text COLLATE latin1_general_cs NOT NULL,
  `comm_percent` float NOT NULL DEFAULT '0',
  `comm_percent_min` float NOT NULL DEFAULT '0',
  `comm_fissa` float NOT NULL DEFAULT '0',
  `capital_gain` float NOT NULL DEFAULT '0',
  `rit_fiscale` float NOT NULL DEFAULT '0',
  `scheda_titolo` text COLLATE latin1_general_cs NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs COMMENT='Preferenze di sistema';

-- --------------------------------------------------------

--
-- Table structure for table `creso_preferiti`
--

CREATE TABLE `creso_preferiti` (
  `id` int(11) NOT NULL,
  `utente` varchar(64) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `isin` varchar(64) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Preferiti degli utenti';

-- --------------------------------------------------------

--
-- Table structure for table `creso_quotazioni`
--

CREATE TABLE `creso_quotazioni` (
  `id` int(10) unsigned NOT NULL,
  `isin` varchar(64) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `data` date NOT NULL DEFAULT '0000-00-00',
  `ora` time NOT NULL DEFAULT '00:00:00',
  `quotazione` float NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs COMMENT='Storico quotazioni titoli';

-- --------------------------------------------------------

--
-- Table structure for table `creso_titoli`
--

CREATE TABLE `creso_titoli` (
  `isin` varchar(64) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `title` varchar(64) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `mercato` enum('ita','tlx','eurotlx') COLLATE latin1_general_cs NOT NULL DEFAULT 'ita',
  `divisa` enum('EUR','USD','TRY','JPY','GBP','NOK','CAD','SEK','AUD','NZD','BRL','ITL','MXN','ZAR','HUF','PLN','RUB') COLLATE latin1_general_cs NOT NULL DEFAULT 'EUR',
  `tipo` enum('azione','obbligazione','fondo','warrant','etf') COLLATE latin1_general_cs NOT NULL DEFAULT 'azione',
  `attivo` int(1) NOT NULL DEFAULT '1',
  `rating` varchar(5) COLLATE latin1_general_cs DEFAULT NULL COMMENT 'Rating S&P'
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs COMMENT='Catalogo titoli';

-- --------------------------------------------------------

--
-- Table structure for table `creso_transazioni`
--

CREATE TABLE `creso_transazioni` (
  `id` int(11) NOT NULL,
  `utente` varchar(24) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `isin` varchar(64) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `prezzo` float NOT NULL DEFAULT '0',
  `quantita` int(11) NOT NULL DEFAULT '0',
  `data` date NOT NULL DEFAULT '0000-00-00',
  `azione` enum('acquisto','vendita') COLLATE latin1_general_cs NOT NULL DEFAULT 'acquisto',
  `negot_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs COMMENT='Archivio compravendite';

-- --------------------------------------------------------

--
-- Table structure for table `creso_watchlist`
--

CREATE TABLE `creso_watchlist` (
  `id` int(10) unsigned NOT NULL,
  `utente` varchar(24) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `isin` varchar(64) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `alert` tinyint(4) NOT NULL DEFAULT '0',
  `min` float NOT NULL DEFAULT '0',
  `max` float NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs COMMENT='Watchlist titoli';

-- --------------------------------------------------------

--
-- Table structure for table `utenti`
--

CREATE TABLE `utenti` (
  `utente` varchar(24) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `nome` varchar(24) COLLATE latin1_general_cs NOT NULL DEFAULT '',
  `password` varchar(32) COLLATE latin1_general_cs NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs COMMENT='Utenti';

-- --------------------------------------------------------

--
-- Indexes for dumped tables
--

--
-- Indexes for table `creso_cambi`
--
ALTER TABLE `creso_cambi`
  ADD PRIMARY KEY (`data`);

--
-- Indexes for table `creso_categorie_titoli`
--
ALTER TABLE `creso_categorie_titoli`
  ADD PRIMARY KEY (`categoria`);

--
-- Indexes for table `creso_cedole`
--
ALTER TABLE `creso_cedole`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `isin_stacco` (`isin`,`stacco`) USING BTREE,
  ADD KEY `isin` (`isin`),
  ADD KEY `tasso` (`tasso`);

--
-- Indexes for table `creso_dividendi`
--
ALTER TABLE `creso_dividendi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `creso_errors`
--
ALTER TABLE `creso_errors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `creso_indici`
--
ALTER TABLE `creso_indici`
  ADD PRIMARY KEY (`data`);

--
-- Indexes for table `creso_obbligazioni`
--
ALTER TABLE `creso_obbligazioni`
  ADD PRIMARY KEY (`isin`);

--
-- Indexes for table `creso_portfolio`
--
ALTER TABLE `creso_portfolio`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `creso_preferiti`
--
ALTER TABLE `creso_preferiti`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `utente` (`utente`,`isin`),
  ADD KEY `isin` (`isin`),
  ADD KEY `utente_2` (`utente`);

--
-- Indexes for table `creso_quotazioni`
--
ALTER TABLE `creso_quotazioni`
  ADD PRIMARY KEY (`id`),
  ADD KEY `data` (`data`,`ora`),
  ADD KEY `isin` (`isin`,`data`,`ora`);

--
-- Indexes for table `creso_titoli`
--
ALTER TABLE `creso_titoli`
  ADD PRIMARY KEY (`isin`);

--
-- Indexes for table `creso_transazioni`
--
ALTER TABLE `creso_transazioni`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `creso_watchlist`
--
ALTER TABLE `creso_watchlist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `utenti`
--
ALTER TABLE `utenti`
  ADD PRIMARY KEY (`utente`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `creso_cedole`
--
ALTER TABLE `creso_cedole`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `creso_dividendi`
--
ALTER TABLE `creso_dividendi`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `creso_errors`
--
ALTER TABLE `creso_errors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `creso_portfolio`
--
ALTER TABLE `creso_portfolio`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `creso_preferiti`
--
ALTER TABLE `creso_preferiti`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `creso_quotazioni`
--
ALTER TABLE `creso_quotazioni`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `creso_transazioni`
--
ALTER TABLE `creso_transazioni`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `creso_watchlist`
--
ALTER TABLE `creso_watchlist`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT;

--

GRANT ALL ON `creso`.* TO 'creso'@'%'

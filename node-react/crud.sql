-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 11, 2023 at 04:07 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node`
--

-- --------------------------------------------------------

--
-- Table structure for table `crud`
--

CREATE TABLE `crud` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `crud`
--

INSERT INTO `crud` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(5, 'hello world', 'ikeugwfiwuegw4gg34', '2023-12-11 14:07:13', '2023-12-11 14:07:13'),
(6, 'hello world', 'ikeugwfiwuegw4gg34', '2023-12-11 14:07:13', '2023-12-11 14:07:13'),
(7, 'hello world', 'ikeugwfiwuegw4gg34', '2023-12-11 14:07:15', '2023-12-11 14:07:15'),
(8, 'hello world', 'hello world ujpdate', '2023-12-11 14:07:15', '2023-12-11 15:03:44'),
(14, 'saad ', 'tahirrrrr', '2023-12-11 14:14:18', '2023-12-11 14:14:18'),
(15, 'amaan  bhai', 'the great zindah bad', '2023-12-11 14:25:09', '2023-12-11 14:25:31'),
(16, 'tabish bhai ', 'zindah bad', '2023-12-11 15:04:32', '2023-12-11 15:05:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `crud`
--
ALTER TABLE `crud`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `crud`
--
ALTER TABLE `crud`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

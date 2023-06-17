-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 17, 2023 at 01:26 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `autosallon`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auth_group`
--

INSERT INTO `auth_group` (`id`, `name`) VALUES
(1, 'Admin'),
(3, 'Editor'),
(4, 'Financier');

-- --------------------------------------------------------

--
-- Table structure for table `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auth_group_permissions`
--

INSERT INTO `auth_group_permissions` (`id`, `group_id`, `permission_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 1, 7),
(8, 1, 8),
(9, 1, 9),
(10, 1, 10),
(11, 1, 11),
(12, 1, 12),
(13, 1, 13),
(14, 1, 14),
(15, 1, 15),
(16, 1, 16),
(17, 1, 17),
(18, 1, 18),
(19, 1, 19),
(20, 1, 20),
(21, 1, 21),
(22, 1, 22),
(23, 1, 23),
(24, 1, 24),
(25, 1, 25),
(26, 1, 26),
(27, 1, 27),
(28, 1, 28),
(29, 1, 29),
(30, 1, 30),
(31, 1, 31),
(32, 1, 32),
(33, 1, 33),
(34, 1, 34),
(35, 1, 35),
(36, 1, 36),
(37, 1, 37),
(38, 1, 38),
(39, 1, 39),
(40, 1, 40),
(41, 1, 41),
(42, 1, 42),
(43, 1, 43),
(44, 1, 44),
(45, 1, 45),
(46, 1, 46),
(47, 1, 47),
(48, 1, 48),
(49, 1, 49),
(50, 1, 50),
(51, 1, 51),
(52, 1, 52),
(53, 1, 53),
(54, 1, 54),
(55, 1, 55),
(56, 1, 56),
(57, 1, 57),
(58, 1, 58),
(59, 1, 59),
(60, 1, 60),
(61, 1, 61),
(62, 1, 62),
(63, 1, 63),
(64, 1, 64),
(65, 1, 65),
(66, 1, 66),
(67, 1, 67),
(68, 1, 68),
(69, 1, 69),
(70, 1, 70),
(71, 1, 71),
(72, 1, 72),
(73, 1, 73),
(74, 1, 74),
(75, 1, 75),
(76, 1, 76),
(77, 3, 25),
(78, 3, 26),
(79, 3, 27),
(80, 3, 28),
(81, 3, 29),
(82, 3, 30),
(83, 3, 31),
(84, 3, 32),
(85, 3, 33),
(86, 3, 34),
(87, 3, 35),
(88, 3, 36),
(89, 3, 37),
(90, 3, 38),
(91, 3, 39),
(92, 3, 40),
(93, 3, 45),
(94, 3, 46),
(95, 3, 47),
(96, 3, 48),
(97, 3, 49),
(98, 3, 50),
(99, 3, 51),
(100, 3, 52),
(101, 3, 57),
(102, 3, 58),
(103, 3, 59),
(104, 3, 60),
(105, 3, 61),
(106, 3, 62),
(107, 3, 63),
(108, 3, 64),
(109, 3, 73),
(110, 3, 74),
(111, 3, 75),
(112, 3, 76),
(113, 4, 41),
(114, 4, 42),
(115, 4, 43),
(116, 4, 44),
(117, 4, 53),
(118, 4, 54),
(119, 4, 55),
(120, 4, 56);

-- --------------------------------------------------------

--
-- Table structure for table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add car', 7, 'add_car'),
(26, 'Can change car', 7, 'change_car'),
(27, 'Can delete car', 7, 'delete_car'),
(28, 'Can view car', 7, 'view_car'),
(29, 'Can add category', 8, 'add_category'),
(30, 'Can change category', 8, 'change_category'),
(31, 'Can delete category', 8, 'delete_category'),
(32, 'Can view category', 8, 'view_category'),
(33, 'Can add distributor', 9, 'add_distributor'),
(34, 'Can change distributor', 9, 'change_distributor'),
(35, 'Can delete distributor', 9, 'delete_distributor'),
(36, 'Can view distributor', 9, 'view_distributor'),
(37, 'Can add worker', 10, 'add_worker'),
(38, 'Can change worker', 10, 'change_worker'),
(39, 'Can delete worker', 10, 'delete_worker'),
(40, 'Can view worker', 10, 'view_worker'),
(41, 'Can add sale', 11, 'add_sale'),
(42, 'Can change sale', 11, 'change_sale'),
(43, 'Can delete sale', 11, 'delete_sale'),
(44, 'Can view sale', 11, 'view_sale'),
(45, 'Can add review', 12, 'add_review'),
(46, 'Can change review', 12, 'change_review'),
(47, 'Can delete review', 12, 'delete_review'),
(48, 'Can view review', 12, 'view_review'),
(49, 'Can add favorite', 13, 'add_favorite'),
(50, 'Can change favorite', 13, 'change_favorite'),
(51, 'Can delete favorite', 13, 'delete_favorite'),
(52, 'Can view favorite', 13, 'view_favorite'),
(53, 'Can add dis_ transaction', 14, 'add_dis_transaction'),
(54, 'Can change dis_ transaction', 14, 'change_dis_transaction'),
(55, 'Can delete dis_ transaction', 14, 'delete_dis_transaction'),
(56, 'Can view dis_ transaction', 14, 'view_dis_transaction'),
(57, 'Can add contact info', 15, 'add_contactinfo'),
(58, 'Can change contact info', 15, 'change_contactinfo'),
(59, 'Can delete contact info', 15, 'delete_contactinfo'),
(60, 'Can view contact info', 15, 'view_contactinfo'),
(61, 'Can add car images', 16, 'add_carimages'),
(62, 'Can change car images', 16, 'change_carimages'),
(63, 'Can delete car images', 16, 'delete_carimages'),
(64, 'Can view car images', 16, 'view_carimages'),
(65, 'Can add product', 17, 'add_product'),
(66, 'Can change product', 17, 'change_product'),
(67, 'Can delete product', 17, 'delete_product'),
(68, 'Can view product', 17, 'view_product'),
(69, 'Can add payment history', 18, 'add_paymenthistory'),
(70, 'Can change payment history', 18, 'change_paymenthistory'),
(71, 'Can delete payment history', 18, 'delete_paymenthistory'),
(72, 'Can view payment history', 18, 'view_paymenthistory'),
(73, 'Can add message', 19, 'add_message'),
(74, 'Can change message', 19, 'change_message'),
(75, 'Can delete message', 19, 'delete_message'),
(76, 'Can view message', 19, 'view_message'),
(77, 'Can add apartamenti', 20, 'add_apartamenti'),
(78, 'Can change apartamenti', 20, 'change_apartamenti'),
(79, 'Can delete apartamenti', 20, 'delete_apartamenti'),
(80, 'Can view apartamenti', 20, 'view_apartamenti'),
(81, 'Can add ndertesa55994', 21, 'add_ndertesa55994'),
(82, 'Can change ndertesa55994', 21, 'change_ndertesa55994'),
(83, 'Can delete ndertesa55994', 21, 'delete_ndertesa55994'),
(84, 'Can view ndertesa55994', 21, 'view_ndertesa55994'),
(85, 'Can add apartamenti55994', 22, 'add_apartamenti55994'),
(86, 'Can change apartamenti55994', 22, 'change_apartamenti55994'),
(87, 'Can delete apartamenti55994', 22, 'delete_apartamenti55994'),
(88, 'Can view apartamenti55994', 22, 'view_apartamenti55994');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(4, 'pbkdf2_sha256$320000$F6uiByiemgUUlmr2sZqolE$yZZXd8EZ7mwRljCeCKHThki4wjDkvcn7uvDx+rA4jsg=', NULL, 0, 'blepoo', '', '', 'bleppo@gmail.com', 0, 1, '2023-06-05 11:11:45.447844'),
(5, 'pbkdf2_sha256$320000$KzPQvJuHd5zxjcxceQfKzp$/n4T/8Zwk/PJAdAXB1Xb3iuKa55hEm2aC4mblOHHakQ=', '2023-06-14 14:11:01.000000', 1, 'dionk', 'Dion', 'Kelmendi', 'dionkelmendi2003@gmail.com', 1, 1, '2023-06-05 11:13:56.000000'),
(6, 'pbkdf2_sha256$320000$4eMi7Gj1Pb281Jdqu784Fz$icD2iqlXpwoUWMQUHtl/Hyc8pduGk8266SZPBQ1ALUw=', '2023-06-05 11:16:19.574029', 1, 'Admin', '', '', 'admin@gmail.com', 1, 1, '2023-06-05 11:16:12.448823'),
(7, 'pbkdf2_sha256$320000$ohWbtIcG1XLPUSDTLixKWK$2V0/ZmLftZ1mz4rJSZdQjGNcCA3Ggt+ewjgsLpqHoLQ=', NULL, 0, 'erinibini', 'Erin', 'Orana', 'eo@gmail.com', 0, 1, '2023-06-05 11:17:12.000000'),
(9, 'pbkdf2_sha256$320000$T9Q1mGKUaCggIfS8Frsb1d$pZhdXq1kPpDKQwk/uu4hP5K+YBIgj/PVy89BndBr5Dk=', NULL, 0, 'kydudi', 'Dud', 'Llajkovci', 'dl@gmail.com', 0, 1, '2023-06-05 11:45:37.361302'),
(10, 'pbkdf2_sha256$320000$vygnnDz5ByQzCcQa0ddvIB$FgXuTT4EekwwiVJyB8GEjDtuTPu5XU9UaLdAdzQtD4A=', NULL, 0, 'Blendaa', 'Blenda', 'Blenda', 'bb58818@ubt-uni.net', 0, 1, '2023-06-06 11:21:25.000000'),
(11, 'pbkdf2_sha256$600000$iDoibfjuWxnIrzv7MWXDJa$QmpkUm2J25KXVuECLs+QPDqBHSmP52GhTPsAAQ/tjXU=', '2023-06-15 04:17:07.896370', 1, 'blepo', 'Blend', 'Podvorica', 'bpodvorica5@gmail.com', 1, 1, '2023-06-08 08:44:19.000000');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auth_user_groups`
--

INSERT INTO `auth_user_groups` (`id`, `user_id`, `group_id`) VALUES
(4, 5, 1),
(2, 7, 4),
(1, 10, 3),
(3, 11, 1);

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `autosallonapp_car`
--

CREATE TABLE `autosallonapp_car` (
  `id` bigint(20) NOT NULL,
  `make` varchar(50) NOT NULL,
  `model` varchar(50) NOT NULL,
  `price` int(11) NOT NULL,
  `mileage` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `color` varchar(50) NOT NULL,
  `registration_date` datetime(6) NOT NULL,
  `sold` tinyint(1) NOT NULL,
  `image` varchar(100) NOT NULL,
  `category_id` bigint(20) NOT NULL,
  `reservedlink` varchar(200) DEFAULT NULL,
  `engine` varchar(50) NOT NULL,
  `fuel` varchar(50) NOT NULL,
  `transmission` varchar(50) NOT NULL,
  `ads` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `autosallonapp_car`
--

INSERT INTO `autosallonapp_car` (`id`, `make`, `model`, `price`, `mileage`, `year`, `color`, `registration_date`, `sold`, `image`, `category_id`, `reservedlink`, `engine`, `fuel`, `transmission`, `ads`) VALUES
(71, 'Audi', 'A7', 75000, 132000, 2018, 'White', '2023-06-13 23:29:43.085174', 0, 'reactapp/src/images/IMG_1990-scaled.webp', 1, 'https://buy.stripe.com/test_4gw15S9Sn1QfbKw146', '3.0', 'Diesel', 'Automatic', 0),
(73, 'Volkswagen', 'Golf 8', 32000, 48000, 2021, 'Gray', '2023-06-14 09:23:25.655254', 0, 'reactapp/src/images/IMG_7843.webp', 3, 'https://buy.stripe.com/test_6oE7ugd4zfH529W6or', '2.0', 'Diesel', 'Automatic', 0),
(74, 'Volkswagen', 'Arteon', 35000, 102000, 2018, 'Red', '2023-06-14 11:29:57.563066', 0, 'reactapp/src/images/IMG_1379.webp', 1, 'https://buy.stripe.com/test_3cs01Oe8D0Mb3e0dRc', '2.0', 'Diesel', 'Automatic', 0),
(75, 'Mercedes', 'GLS', 120000, 10000, 2022, 'White', '2023-06-14 11:39:25.635228', 0, 'reactapp/src/images/IMG_8603-2.webp', 4, 'https://buy.stripe.com/test_eVag0M2pV3Yn6qc00f', '4.0', 'Petrol', 'Automatic', 0),
(76, 'BMW', 'M4', 98000, 12000, 2022, 'Green', '2023-06-14 11:45:23.726957', 0, 'reactapp/src/images/IMG_6714.webp', 10, 'https://buy.stripe.com/test_bIY8yk6GbamL7ug4gk', '3.0', 'Petrol', 'Automatic', 0),
(77, 'Mercedes', 'G-Class', 165000, 14000, 2022, 'Gray', '2023-06-14 11:51:26.321272', 0, 'reactapp/src/images/IMG_5614.webp', 4, 'https://buy.stripe.com/test_dR65m8e8DfH5aGs9AN', '4.0', 'Petrol', 'Automatic', 0),
(78, 'Ferrari', 'F8', 450000, 12000, 2018, 'Red', '2023-06-14 11:58:08.718039', 0, 'reactapp/src/images/IMG_5344.webp', 11, 'https://buy.stripe.com/test_8wM5m85C70Mb7ugbIY', '5.0', 'Petrol', 'Automatic', 0),
(79, 'Mercedes', 'GT63', 175000, 66000, 2019, 'Gray', '2023-06-14 12:02:21.952138', 0, 'reactapp/src/images/IMG_7600.webp', 6, 'https://buy.stripe.com/test_28o4i43tZ8eDcOA3ci', '4.0', 'Petrol', 'Automatic', 0),
(80, 'BMW', '5', 59000, 36000, 2021, 'White', '2023-06-14 12:05:43.621774', 0, 'reactapp/src/images/IMG_8330.webp', 1, 'https://buy.stripe.com/test_9AQ3e05C70Mb3e09AF', '3.0', 'Diesel', 'Automatic', 0),
(81, 'Audi', 'RS6', 125000, 0, 2022, 'Brown', '2023-06-14 12:10:21.952821', 0, 'reactapp/src/images/IMG_6637.webp', 2, 'https://buy.stripe.com/test_6oE6qc9Sn8eD5m86oz', '4.0', 'Petrol', 'Automatic', 0),
(82, 'Mercedes', 'GLE', 125000, 41000, 2020, 'Black', '2023-06-14 12:23:14.454705', 0, 'reactapp/src/images/IMG_3436.webp', 4, 'https://buy.stripe.com/test_00g15S0hN52raGs4gD', '3.0', 'Diesel', 'Automatic', 0),
(83, 'BMW', '7', 145000, 0, 2023, 'White', '2023-06-14 12:30:27.365099', 0, 'reactapp/src/images/IMG_6692.webp', 1, 'https://buy.stripe.com/test_3cs7ug2pV3Yn15SbIS', '3.0', 'Diesel', 'Automatic', 0),
(84, 'Lamborghini', 'Huracan', 250000, 15000, 2017, 'White', '2023-06-14 12:38:44.154521', 0, 'reactapp/src/images/IMG_2613.webp', 11, 'https://buy.stripe.com/test_8wM15SggLbqP8ykdQY', '6.0', 'Petrol', 'Automatic', 0),
(85, 'Porsche', 'Panamera 4s', 84000, 158000, 2017, 'Black', '2023-06-14 13:22:12.865238', 0, 'reactapp/src/images/IMG_7439.webp', 1, 'https://buy.stripe.com/test_8wMg0M5C7gL9dSE3cj', '4.0', 'Diesel', 'Automatic', 0),
(86, 'Lamborghini', 'Urus', 175000, 0, 2023, 'White', '2023-06-14 13:25:58.782937', 0, 'reactapp/src/images/IMG_7061.webp', 4, 'https://buy.stripe.com/test_fZedSE5C7fH54i4dR9', '4.0', 'Diesel', 'Automatic', 0),
(87, 'BMW', 'X6', 110000, 0, 2020, 'Black', '2023-06-14 13:33:11.585391', 0, 'reactapp/src/images/IMG_6008.webp', 4, 'https://buy.stripe.com/test_4gw7ug8Oj2Uj4i4cN3', '4.4', 'Petrol', 'Automatic', 0),
(88, 'Porsche', 'Cayene Turbo', 120000, 105000, 2018, 'Black', '2023-06-14 13:36:17.511660', 0, 'reactapp/src/images/IMG_3530-scaled.webp', 4, 'https://buy.stripe.com/test_3csbKw7KffH5aGs8wR', '4.0', 'Petrol', 'Automatic', 0),
(89, 'Maserati', 'Grecale', 98000, 0, 2022, 'Black', '2023-06-14 13:40:52.648905', 0, 'reactapp/src/images/IMG_1795-scaled.webp', 4, 'https://buy.stripe.com/test_28oaGsfcHcuT01O9AM', '3.0', 'Petrol', 'Automatic', 0),
(90, 'Audi', 'Q8', 95000, 0, 2023, 'Gray', '2023-06-14 13:45:36.423163', 0, 'reactapp/src/images/IMG_0890.webp', 4, 'https://buy.stripe.com/test_bIY3e09SnamLaGs4gu', '3.0', 'Diesel', 'Automatic', 0),
(91, 'Bentley', 'Bentayga', 178000, 0, 2023, 'Black', '2023-06-14 13:48:20.502316', 0, 'reactapp/src/images/IMG_6961.webp', 4, 'https://buy.stripe.com/test_fZe7ugggLdyXdSEbIR', '4.0', 'Petrol', 'Automatic', 0),
(92, 'Audi', 'A8', 92000, 13000, 2023, 'White', '2023-06-14 13:51:05.433631', 0, 'reactapp/src/images/IMG_1125.webp', 1, 'https://buy.stripe.com/test_5kA7ug7Kf9iHcOAbJ6', '3.0', 'Diesel', 'Automatic', 0),
(93, 'Ferrari', '296 GTB', 450000, 0, 2022, 'Black', '2023-06-14 13:56:12.255979', 0, 'reactapp/src/images/11.webp', 11, 'https://buy.stripe.com/test_4gwcOAc0v3Yng0M14o', '6.0', 'Petrol', 'Automatic', 0),
(94, 'Lamborghini', 'Huracan', 278000, 0, 2021, 'Black', '2023-06-14 13:58:37.496508', 0, 'reactapp/src/images/IMG_5928.webp', 11, 'https://buy.stripe.com/test_9AQcOAd4z2Uj29W4gy', '6.0', 'Petrol', 'Automatic', 0),
(95, 'McLaren', '600LT Spider', 254283, 11074, 2020, 'Gray', '2023-06-14 14:15:51.229608', 1, 'reactapp/src/images/mclaren_KFcfbeS_MGgz17A.webp', 11, 'https://buy.stripe.com/test_9AQGhkNVhNBmHhjj', '3.8', 'Gasoline', 'Automatic', 1),
(96, 'Ferrari', '812 Superfast', 330215, 5135, 2020, 'Red', '2023-06-14 14:19:02.988181', 1, 'reactapp/src/images/ferrari_Yu7Eyy8.webp', 11, 'https://buy.stripe.com/test_9AQcOAKMndnkJKWJ', '6.5', 'Petrol', 'Automatic', 1),
(97, 'Audi', 'R8', 166000, 1252, 2018, 'Black', '2023-06-14 14:20:45.324510', 1, 'reactapp/src/images/audiA8_q89FUQ7.webp', 10, 'https://buy.stripe.com/test_9lkndjwhBHUj29W4gy', '5.2', 'Petrol', 'Automatic', 1),
(98, 'Lamborghini', 'Aventador', 299900, 18800, 2017, 'Black', '2023-06-14 14:22:34.467268', 1, 'reactapp/src/images/ave.webp', 11, 'https://buy.stripe.com/test_9AQcOAhaSV2Uj29W4gy', '6.5', 'Petrol', 'Automatic', 1),
(99, 'Porsche', '718 Spyder', 197587, 1486, 2022, 'Black', '2023-06-14 14:25:35.433129', 1, 'reactapp/src/images/porscheCar_YHZVtaX.webp', 5, 'https://buy.stripe.com/test_4AQcdwjWBMwgJBDW', '4.0', 'Petrol', 'Manual', 1),
(100, 'Mercedes', 'V-Class', 240000, 0, 2021, 'Black', '2023-06-14 15:55:46.552134', 0, 'reactapp/src/images/1_hoESLak.webp', 7, 'https://buy.stripe.com/test_dR6dSEfcH9iHeWIeVj', '4.0', 'Petrol', 'Automatic', 0),
(101, 'Mercedes', 'X-Class', 74000, 45000, 2018, 'Black', '2023-06-14 16:04:20.503694', 0, 'reactapp/src/images/truck_CkEmGnV.webp', 8, 'https://buy.stripe.com/test_eVaaGsfcHbqPaGsfZo', '3.0', 'Diesel', 'Automatic', 0);

-- --------------------------------------------------------

--
-- Table structure for table `autosallonapp_carimages`
--

CREATE TABLE `autosallonapp_carimages` (
  `id` bigint(20) NOT NULL,
  `image` varchar(100) NOT NULL,
  `car_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `autosallonapp_carimages`
--

INSERT INTO `autosallonapp_carimages` (`id`, `image`, `car_id`) VALUES
(4, 'reactapp/src/images/IMG_1993-scaled.webp', 71),
(5, 'reactapp/src/images/IMG_2003-scaled.webp', 71),
(6, 'reactapp/src/images/IMG_2000-scaled.webp', 71),
(7, 'reactapp/src/images/IMG_2026-scaled.webp', 71),
(13, 'reactapp/src/images/IMG_7848.webp', 73),
(14, 'reactapp/src/images/IMG_7844.webp', 73),
(15, 'reactapp/src/images/IMG_7841.webp', 73),
(16, 'reactapp/src/images/IMG_7856.webp', 73),
(21, 'reactapp/src/images/IMG_8605.webp', 75),
(22, 'reactapp/src/images/IMG_8608.webp', 75),
(23, 'reactapp/src/images/IMG_8613.webp', 75),
(24, 'reactapp/src/images/IMG_8649.webp', 75),
(25, 'reactapp/src/images/IMG_6720.webp', 76),
(26, 'reactapp/src/images/IMG_6722.webp', 76),
(27, 'reactapp/src/images/IMG_6730.webp', 76),
(28, 'reactapp/src/images/IMG_6752.webp', 76),
(29, 'reactapp/src/images/IMG_5624.webp', 77),
(30, 'reactapp/src/images/IMG_5610.webp', 77),
(31, 'reactapp/src/images/IMG_5634.webp', 77),
(32, 'reactapp/src/images/IMG_5649.webp', 77),
(33, 'reactapp/src/images/IMG_1381.webp', 74),
(34, 'reactapp/src/images/IMG_1382.webp', 74),
(35, 'reactapp/src/images/IMG_1387.webp', 74),
(36, 'reactapp/src/images/IMG_1392.webp', 74),
(37, 'reactapp/src/images/IMG_5331.webp', 78),
(38, 'reactapp/src/images/IMG_5318.webp', 78),
(39, 'reactapp/src/images/IMG_5360.webp', 78),
(40, 'reactapp/src/images/IMG_5377.webp', 78),
(41, 'reactapp/src/images/IMG_7613.webp', 79),
(42, 'reactapp/src/images/IMG_7610.webp', 79),
(43, 'reactapp/src/images/IMG_7629.webp', 79),
(44, 'reactapp/src/images/IMG_7621.webp', 79),
(45, 'reactapp/src/images/IMG_8333.webp', 80),
(46, 'reactapp/src/images/IMG_8341.webp', 80),
(47, 'reactapp/src/images/IMG_8340.webp', 80),
(48, 'reactapp/src/images/IMG_8344.webp', 80),
(49, 'reactapp/src/images/IMG_6641.webp', 81),
(50, 'reactapp/src/images/IMG_6643.webp', 81),
(51, 'reactapp/src/images/IMG_6646.webp', 81),
(52, 'reactapp/src/images/IMG_6666.webp', 81),
(53, 'reactapp/src/images/IMG_3440-scaled.webp', 82),
(54, 'reactapp/src/images/IMG_3443-scaled.webp', 82),
(55, 'reactapp/src/images/IMG_3442-scaled.webp', 82),
(56, 'reactapp/src/images/IMG_3457-scaled.webp', 82),
(57, 'reactapp/src/images/IMG_6861.webp', 83),
(58, 'reactapp/src/images/IMG_6862.webp', 83),
(59, 'reactapp/src/images/IMG_6864.webp', 83),
(60, 'reactapp/src/images/IMG_6897.webp', 83),
(61, 'reactapp/src/images/IMG_2618.webp', 84),
(62, 'reactapp/src/images/IMG_2615.webp', 84),
(63, 'reactapp/src/images/IMG_2621.webp', 84),
(64, 'reactapp/src/images/IMG_2627.webp', 84),
(65, 'reactapp/src/images/IMG_7442.webp', 85),
(66, 'reactapp/src/images/IMG_7434.webp', 85),
(67, 'reactapp/src/images/IMG_7447.webp', 85),
(68, 'reactapp/src/images/IMG_7456.webp', 85),
(69, 'reactapp/src/images/IMG_7057.webp', 86),
(70, 'reactapp/src/images/IMG_7050.webp', 86),
(71, 'reactapp/src/images/IMG_7077.webp', 86),
(72, 'reactapp/src/images/IMG_7139.webp', 86),
(73, 'reactapp/src/images/IMG_6010.webp', 87),
(74, 'reactapp/src/images/IMG_6012.webp', 87),
(75, 'reactapp/src/images/IMG_6014.webp', 87),
(76, 'reactapp/src/images/IMG_6027.webp', 87),
(77, 'reactapp/src/images/IMG_3534-scaled.webp', 88),
(78, 'reactapp/src/images/IMG_3535-scaled.webp', 88),
(79, 'reactapp/src/images/IMG_3540-scaled.webp', 88),
(80, 'reactapp/src/images/IMG_3546-scaled.webp', 88),
(81, 'reactapp/src/images/IMG_1796-scaled.webp', 89),
(82, 'reactapp/src/images/IMG_1798-scaled.webp', 89),
(83, 'reactapp/src/images/IMG_1806-scaled.webp', 89),
(84, 'reactapp/src/images/IMG_1816-scaled.webp', 89),
(85, 'reactapp/src/images/IMG_0892.webp', 90),
(86, 'reactapp/src/images/IMG_0894.webp', 90),
(87, 'reactapp/src/images/IMG_0898.webp', 90),
(88, 'reactapp/src/images/IMG_0904.webp', 90),
(89, 'reactapp/src/images/IMG_6964.webp', 91),
(90, 'reactapp/src/images/IMG_6967.webp', 91),
(91, 'reactapp/src/images/IMG_6975.webp', 91),
(92, 'reactapp/src/images/IMG_7024.webp', 91),
(93, 'reactapp/src/images/IMG_1129.webp', 92),
(94, 'reactapp/src/images/IMG_1137.webp', 92),
(95, 'reactapp/src/images/IMG_1135.webp', 92),
(96, 'reactapp/src/images/IMG_1145.webp', 92),
(97, 'reactapp/src/images/6.webp', 93),
(98, 'reactapp/src/images/9.webp', 93),
(99, 'reactapp/src/images/13.webp', 93),
(100, 'reactapp/src/images/F.webp', 93),
(101, 'reactapp/src/images/IMG_5938.webp', 94),
(102, 'reactapp/src/images/IMG_5936.webp', 94),
(103, 'reactapp/src/images/IMG_5941.webp', 94),
(104, 'reactapp/src/images/IMG_5960.webp', 94),
(105, 'reactapp/src/images/m_1.webp', 95),
(106, 'reactapp/src/images/m_2.webp', 95),
(107, 'reactapp/src/images/m_3.webp', 95),
(108, 'reactapp/src/images/m_4.webp', 95),
(109, 'reactapp/src/images/m_5.webp', 95),
(110, 'reactapp/src/images/f_1.webp', 96),
(111, 'reactapp/src/images/f_2.webp', 96),
(112, 'reactapp/src/images/f_3.webp', 96),
(113, 'reactapp/src/images/f_4.webp', 96),
(114, 'reactapp/src/images/f_5.webp', 96),
(115, 'reactapp/src/images/r8_1.webp', 97),
(116, 'reactapp/src/images/r8_2.webp', 97),
(117, 'reactapp/src/images/r8_3.webp', 97),
(118, 'reactapp/src/images/r8_4.webp', 97),
(119, 'reactapp/src/images/r8_5.webp', 97),
(120, 'reactapp/src/images/a_1.webp', 98),
(121, 'reactapp/src/images/a_2.webp', 98),
(122, 'reactapp/src/images/a_3.webp', 98),
(123, 'reactapp/src/images/a_4.webp', 98),
(124, 'reactapp/src/images/a_5.webp', 98),
(125, 'reactapp/src/images/p_1.webp', 99),
(126, 'reactapp/src/images/p_2.webp', 99),
(127, 'reactapp/src/images/p_3.webp', 99),
(128, 'reactapp/src/images/p_4.webp', 99),
(129, 'reactapp/src/images/p_5.webp', 99),
(130, 'reactapp/src/images/2_Wm4SeKI.webp', 100),
(131, 'reactapp/src/images/3_fj8CO1G.webp', 100),
(132, 'reactapp/src/images/4_KDMB0hx.webp', 100),
(133, 'reactapp/src/images/5_eOs4gWH.webp', 100),
(135, 'reactapp/src/images/4_ZjYViqh.webp', 101),
(136, 'reactapp/src/images/3.webp', 101),
(137, 'reactapp/src/images/1.webp', 101),
(138, 'reactapp/src/images/2.webp', 101);

-- --------------------------------------------------------

--
-- Table structure for table `autosallonapp_category`
--

CREATE TABLE `autosallonapp_category` (
  `id` bigint(20) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `autosallonapp_category`
--

INSERT INTO `autosallonapp_category` (`id`, `name`) VALUES
(1, 'Sedan'),
(2, 'Station Wagon'),
(3, 'Hatchback'),
(4, 'SUV'),
(5, 'Convertible'),
(6, 'Muscle Car'),
(7, 'Minivan'),
(8, 'Pickup Truck'),
(10, 'Coupe'),
(11, 'Sport Car');

-- --------------------------------------------------------

--
-- Table structure for table `autosallonapp_contactinfo`
--

CREATE TABLE `autosallonapp_contactinfo` (
  `id` bigint(20) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `autosallonapp_contactinfo`
--

INSERT INTO `autosallonapp_contactinfo` (`id`, `address`, `phone`, `user_id`) VALUES
(2, 'PP', '', 4),
(3, 'Rr. Dervish Rozhaja', '049 104 108', 5),
(4, 'Adresa', '049 104 108', 7),
(7, 'Rr. 212, Zaim Muqa', '049 111 999', 9),
(9, 'Prishtina', '045365467', 11);

-- --------------------------------------------------------

--
-- Table structure for table `autosallonapp_distributor`
--

CREATE TABLE `autosallonapp_distributor` (
  `id` bigint(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `autosallonapp_distributor`
--

INSERT INTO `autosallonapp_distributor` (`id`, `name`, `email`, `address`, `phone`) VALUES
(1, 'MercedesCorp', 'mercedes@info.com', 'Germany, Sttugart', '+79459445465'),
(2, 'BMW', 'bmw@gmail.com', 'Germany', '+656565686'),
(3, 'Audi', 'audi@gmail.com', 'Germany', '+6465565654');

-- --------------------------------------------------------

--
-- Table structure for table `autosallonapp_dis_transaction`
--

CREATE TABLE `autosallonapp_dis_transaction` (
  `id` bigint(20) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `transaction_date` datetime(6) NOT NULL,
  `car_id` bigint(20) NOT NULL,
  `distributor_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `autosallonapp_dis_transaction`
--

INSERT INTO `autosallonapp_dis_transaction` (`id`, `amount`, `transaction_date`, `car_id`, `distributor_id`) VALUES
(2, 120000.00, '2023-06-14 17:43:09.826805', 75, 1),
(3, 90000.00, '2023-06-14 17:45:12.222105', 76, 2),
(4, 75000.00, '2023-06-14 17:46:05.101663', 71, 3);

-- --------------------------------------------------------

--
-- Table structure for table `autosallonapp_favorite`
--

CREATE TABLE `autosallonapp_favorite` (
  `id` bigint(20) NOT NULL,
  `favorite_date` datetime(6) NOT NULL,
  `car_id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `autosallonapp_favorite`
--

INSERT INTO `autosallonapp_favorite` (`id`, `favorite_date`, `car_id`, `user_id`) VALUES
(4, '2023-06-14 09:06:09.606525', 71, 5),
(7, '2023-06-14 17:36:00.904582', 75, 11),
(8, '2023-06-14 17:36:03.322294', 71, 11),
(9, '2023-06-15 11:43:36.200440', 81, 11),
(10, '2023-06-16 20:02:44.417177', 76, 11);

-- --------------------------------------------------------

--
-- Table structure for table `autosallonapp_message`
--

CREATE TABLE `autosallonapp_message` (
  `id` bigint(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `title` varchar(50) NOT NULL,
  `message` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `autosallonapp_message`
--

INSERT INTO `autosallonapp_message` (`id`, `name`, `email`, `phone`, `title`, `message`) VALUES
(1, 'Blend Podvorica', 'bpodvorica5@gmail.com', '045365467', 'Hello', 'I like this webapp');

-- --------------------------------------------------------

--
-- Table structure for table `autosallonapp_review`
--

CREATE TABLE `autosallonapp_review` (
  `id` bigint(20) NOT NULL,
  `rating` int(11) NOT NULL,
  `review_date` datetime(6) NOT NULL,
  `comment` longtext NOT NULL,
  `car_id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `autosallonapp_review`
--

INSERT INTO `autosallonapp_review` (`id`, `rating`, `review_date`, `comment`, `car_id`, `user_id`) VALUES
(7, 4, '2023-06-13 23:34:50.618981', 'Sleek design, powerful engine, and comfortable interior. This car delivers on style and performance.', 71, 5),
(8, 5, '2023-06-14 11:46:04.206773', 'Fuel-efficient and reliable. Perfect for daily commuting and long road trips.', 76, 5),
(9, 3, '2023-06-14 16:59:31.123047', 'Spacious cabin, smooth ride, and advanced safety features. A family-friendly car with a touch of luxury.', 88, 5),
(10, 5, '2023-06-14 17:35:40.712724', 'Luxurious and refined. Experience unparalleled comfort and a host of high-end amenities in this premium sedan.', 71, 11),
(11, 5, '2023-06-15 11:38:53.327839', 'nice car i like it for real i want to purchase one day to be honest one day it will be my car', 75, 11),
(12, 4, '2023-06-16 20:03:53.156180', 'nice car', 83, 11);

-- --------------------------------------------------------

--
-- Table structure for table `autosallonapp_sale`
--

CREATE TABLE `autosallonapp_sale` (
  `id` bigint(20) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `sale_date` datetime(6) NOT NULL,
  `car_id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `worker_id` bigint(20) NOT NULL,
  `iscompleted` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `autosallonapp_worker`
--

CREATE TABLE `autosallonapp_worker` (
  `id` bigint(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `salary` int(11) NOT NULL,
  `position` varchar(50) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `autosallonapp_worker`
--

INSERT INTO `autosallonapp_worker` (`id`, `name`, `email`, `address`, `phone`, `salary`, `position`, `image`) VALUES
(2, 'Erin Orana', 'eo@gmail.com', 'Kalabria', '04476565', 750, 'Seller', 'reactapp/src/images/Erin_Orana.webp'),
(3, 'Shqipe Hoxha', 'sh@gmail.com', 'Gjilan', '045989959', 850, 'Receptionist', 'reactapp/src/images/Shqipe_Hoxha.webp'),
(4, 'Zymer Bregtalia', 'zb@gmail.com', 'Prishtina', '048898565', 950, 'Manager', 'reactapp/src/images/Zymer_Bregtalia.webp'),
(5, 'Leotrim Shatri', 'lsh@gmail.com', 'Prizren', '045985658', 1100, 'Salesman', 'reactapp/src/images/Leotrim_Shatri.webp');

-- --------------------------------------------------------

--
-- Table structure for table `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(1, '2023-06-05 11:17:42.539034', '5', 'erinibini\'s Contact Info', 3, '', 15, 6),
(2, '2023-06-05 11:21:09.575978', '4', 'erinibini\'s Contact Info', 2, '[{\"changed\": {\"fields\": [\"Phone\"]}}]', 15, 6),
(3, '2023-06-05 11:47:16.491960', '1', '(1) Sedan', 1, '[{\"added\": {}}]', 8, 6),
(4, '2023-06-05 11:47:24.905230', '1', '(1) Audi A6 - 2020 - Not sold', 1, '[{\"added\": {}}]', 7, 6),
(5, '2023-06-05 11:47:39.877066', '1', '(1) dionk - Reviewed - (1) Audi A6 - 2020 - Not sold - Rating: 5', 1, '[{\"added\": {}}]', 12, 6),
(6, '2023-06-05 11:48:15.578960', '1', '(1) dionk : (1) Audi A6 - 2020 - Not sold', 1, '[{\"added\": {}}]', 13, 6),
(7, '2023-06-05 11:56:05.181793', '1', '(1) dionk - Reviewed - (1) Audi A6 - 2020 - Not sold - Rating: 5', 2, '[{\"changed\": {\"fields\": [\"Comment\"]}}]', 12, 6),
(8, '2023-06-05 12:17:02.382525', '2', '(2) dionk - Reviewed - (1) Audi A6 - 2020 - Not sold - Rating: 1', 1, '[{\"added\": {}}]', 12, 6),
(9, '2023-06-06 19:21:03.242595', '2', '(2) Station Wagon', 1, '[{\"added\": {}}]', 8, 6),
(10, '2023-06-06 19:21:13.770560', '2', '(2) Audi A4 Avant - 2023 - Sold', 1, '[{\"added\": {}}]', 7, 6),
(11, '2023-06-06 20:19:43.538321', '2', '(2) Audi A4 Avant - 2023 - Sold', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 7, 6),
(12, '2023-06-07 07:09:41.607808', '5', 'dionk', 2, '[{\"changed\": {\"fields\": [\"Staff status\"]}}]', 4, 6),
(13, '2023-06-07 07:55:02.423991', '8', '(8) BMW 3-Series - 2019 - Sold', 1, '[{\"added\": {}}]', 7, 6),
(14, '2023-06-07 11:18:53.237917', '12', '(12) Audi A3 - 2020 - Not sold', 3, '', 7, 6),
(15, '2023-06-07 11:18:53.239940', '13', '(13) Audi A3 - 2020 - Not sold', 3, '', 7, 6),
(16, '2023-06-07 11:18:53.241937', '14', '(14) Audi A3 - 2020 - Not sold', 3, '', 7, 6),
(17, '2023-06-07 11:18:53.243230', '15', '(15) Audi A3 - 2020 - Not sold', 3, '', 7, 6),
(18, '2023-06-07 17:05:50.796766', '9', '(9) Audi A6 - 2020 - Not sold', 3, '', 7, 6),
(19, '2023-06-07 17:05:50.798760', '17', '(17) Audi A6 - 2020 - Not sold', 3, '', 7, 6),
(20, '2023-06-07 17:05:50.800754', '25', '(25) Audi A6 - 2020 - Not sold', 3, '', 7, 6),
(21, '2023-06-07 17:08:06.890884', '1', '(1) Audi A6 - 2020 - Not sold', 3, '', 7, 6),
(22, '2023-06-07 17:08:06.892652', '2', '(2) Audi A4 Avant - 2023 - Sold', 3, '', 7, 6),
(23, '2023-06-07 17:08:06.894649', '3', '(3) Audi A4 - 2020 - Not sold', 3, '', 7, 6),
(24, '2023-06-07 17:08:06.896447', '4', '(4) Audi A3 - 2020 - Not sold', 3, '', 7, 6),
(25, '2023-06-07 17:08:06.898444', '5', '(5) Audi A3 - 2020 - Not sold', 3, '', 7, 6),
(26, '2023-06-07 17:08:06.899516', '6', '(6) Audi A3 - 2020 - Not sold', 3, '', 7, 6),
(27, '2023-06-07 17:08:06.901436', '7', '(7) Audi A3 - 2020 - Not sold', 3, '', 7, 6),
(28, '2023-06-07 17:08:06.902830', '8', '(8) BMW 3-Series - 2019 - Sold', 3, '', 7, 6),
(29, '2023-06-07 17:08:06.903518', '10', '(10) Audi A4 Avant - 2023 - Sold', 3, '', 7, 6),
(30, '2023-06-07 17:08:06.905417', '11', '(11) Audi A4 - 2020 - Not sold', 3, '', 7, 6),
(31, '2023-06-07 17:08:06.906330', '16', '(16) BMW 3-Series - 2019 - Sold', 3, '', 7, 6),
(32, '2023-06-07 17:08:06.907836', '18', '(18) Audi A4 Avant - 2023 - Sold', 3, '', 7, 6),
(33, '2023-06-07 17:08:06.908519', '19', '(19) Audi A4 - 2020 - Not sold', 3, '', 7, 6),
(34, '2023-06-07 17:08:06.909519', '20', '(20) Audi A3 - 2020 - Not sold', 3, '', 7, 6),
(35, '2023-06-07 17:08:06.911529', '21', '(21) Audi A3 - 2020 - Not sold', 3, '', 7, 6),
(36, '2023-06-07 17:08:06.912576', '22', '(22) Audi A3 - 2020 - Not sold', 3, '', 7, 6),
(37, '2023-06-07 17:08:06.913576', '23', '(23) Audi A3 - 2020 - Not sold', 3, '', 7, 6),
(38, '2023-06-07 17:08:06.914838', '24', '(24) BMW 3-Series - 2019 - Sold', 3, '', 7, 6),
(39, '2023-06-07 17:08:06.916264', '26', '(26) Audi A4 Avant - 2023 - Sold', 3, '', 7, 6),
(40, '2023-06-07 17:08:06.917262', '27', '(27) Audi A4 - 2020 - Not sold', 3, '', 7, 6),
(41, '2023-06-07 17:08:06.918259', '28', '(28) Audi A3 - 2020 - Not sold', 3, '', 7, 6),
(42, '2023-06-07 17:08:06.919260', '29', '(29) Audi A3 - 2020 - Not sold', 3, '', 7, 6),
(43, '2023-06-07 17:08:06.920293', '30', '(30) Audi A3 - 2020 - Not sold', 3, '', 7, 6),
(44, '2023-06-07 17:08:06.921546', '31', '(31) Audi A3 - 2020 - Not sold', 3, '', 7, 6),
(45, '2023-06-07 17:08:06.922464', '32', '(32) BMW 3-Series - 2019 - Sold', 3, '', 7, 6),
(46, '2023-06-07 17:08:49.904259', '33', '(33) Audi A0 - 2 - Sold', 1, '[{\"added\": {}}]', 7, 6),
(47, '2023-06-07 17:10:00.334759', '45', '(45) BMW 3-Series - 2 - Sold', 1, '[{\"added\": {}}]', 7, 6),
(48, '2023-06-07 17:17:34.274162', '57', '(57) Mercedes C36 AMG - 2 - Sold', 1, '[{\"added\": {}}]', 7, 6),
(49, '2023-06-09 08:55:14.369755', '33', '(33) Audi A0 - 2 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Sold\"]}}]', 7, 11),
(50, '2023-06-09 11:51:20.636998', '2', '(2) dionk : (33) Audi A0 - 2 - Not sold', 1, '[{\"added\": {}}]', 13, 11),
(51, '2023-06-09 12:19:35.089085', '59', '(59) Volkswagen Golf 7 - 2020 - Sold', 1, '[{\"added\": {}}]', 7, 11),
(52, '2023-06-09 12:23:33.408940', '60', '(60) Mitsubishi Evo - 2000 - Sold', 1, '[{\"added\": {}}]', 7, 11),
(53, '2023-06-09 12:51:07.575475', '3', '(3) Hatchback', 1, '[{\"added\": {}}]', 8, 11),
(54, '2023-06-09 13:13:56.746405', '61', '(61) Audi A5 - 2018 - Not sold', 1, '[{\"added\": {}}]', 7, 11),
(55, '2023-06-09 13:15:19.039264', '4', '(4) SUV', 1, '[{\"added\": {}}]', 8, 11),
(56, '2023-06-09 13:15:21.423238', '62', '(62) Audi A5 - 2 - Not sold', 1, '[{\"added\": {}}]', 7, 11),
(57, '2023-06-09 13:16:00.917554', '5', '(5) Convertible', 1, '[{\"added\": {}}]', 8, 11),
(58, '2023-06-09 13:16:02.447054', '63', '(63) Golf 7 - 2 - Not sold', 1, '[{\"added\": {}}]', 7, 11),
(59, '2023-06-09 13:16:29.804991', '63', '(63) Volkswagen 7 - 2 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Make\"]}}]', 7, 11),
(60, '2023-06-09 18:38:49.833924', '6', '(6) Muscle Car', 1, '[{\"added\": {}}]', 8, 11),
(61, '2023-06-09 18:39:36.159239', '7', '(7) Minivan', 1, '[{\"added\": {}}]', 8, 11),
(62, '2023-06-09 18:40:46.517991', '8', '(8) Pickup Truck', 1, '[{\"added\": {}}]', 8, 11),
(63, '2023-06-09 18:41:08.815471', '9', '(9) Other', 1, '[{\"added\": {}}]', 8, 11),
(64, '2023-06-09 18:41:46.081286', '64', '(64) Porsche A5 - 23 - Not sold', 1, '[{\"added\": {}}]', 7, 11),
(65, '2023-06-09 18:42:30.065253', '65', '(65) Ford aca - 12213 - Not sold', 1, '[{\"added\": {}}]', 7, 11),
(66, '2023-06-09 18:42:56.206673', '66', '(66) Seat A5 - 2323 - Not sold', 1, '[{\"added\": {}}]', 7, 11),
(67, '2023-06-09 18:43:37.875296', '10', '(10) Coupe', 1, '[{\"added\": {}}]', 8, 11),
(68, '2023-06-09 18:43:39.835263', '67', '(67) Hyndai A5 - 32 - Not sold', 1, '[{\"added\": {}}]', 7, 11),
(69, '2023-06-09 19:13:05.302657', '3', '(3) Admin - Reviewed - (33) Audi A0 - 2 - Not sold - Rating: 5', 1, '[{\"added\": {}}]', 12, 11),
(70, '2023-06-09 19:15:37.890936', '3', '(3) Admin - Reviewed - (33) Audi A0 - 2 - Not sold - Rating: 5', 2, '[]', 12, 11),
(71, '2023-06-09 19:16:02.630646', '3', '(3) Admin - Reviewed - (33) Audi A0 - 2 - Not sold - Rating: 5', 2, '[]', 12, 11),
(72, '2023-06-09 19:16:11.131057', '4', '(4) Baba123 - Reviewed - (34) Audi A0 - 2 - Sold - Rating: 5', 1, '[{\"added\": {}}]', 12, 11),
(73, '2023-06-09 19:32:39.217138', '67', '(67) Hyndai A5 - 32 - Not sold', 2, '[{\"added\": {\"name\": \"car images\", \"object\": \"(67) Hyndai A5 - 32 - Not sold -- maxresdefault_VBzgCsF.jpg\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(67) Hyndai A5 - 32 - Not sold -- viber_image_2023-01-10_20-57-32-501.jpg\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(67) Hyndai A5 - 32 - Not sold -- bus.jpg\"}}]', 7, 11),
(74, '2023-06-10 08:33:38.803782', '68', '(68) Opel xasx - 23 - Not sold', 1, '[{\"added\": {}}]', 7, 11),
(75, '2023-06-10 08:34:05.155730', '69', '(69) Other 7 - 234 - Not sold', 1, '[{\"added\": {}}]', 7, 11),
(76, '2023-06-10 08:34:55.093675', '69', '(69) Other 7 - 234 - Not sold', 3, '', 7, 11),
(77, '2023-06-10 08:35:49.361925', '9', '(9) Other', 3, '', 8, 11),
(78, '2023-06-10 12:27:36.657114', '1', 'car', 1, '[{\"added\": {}}]', 17, 11),
(79, '2023-06-10 12:27:49.726845', '1', 'car', 1, '[{\"added\": {}}]', 18, 11),
(80, '2023-06-10 13:33:53.710518', '70', '(70) Opel Astra - 1990 - Not sold', 1, '[{\"added\": {}}]', 7, 11),
(81, '2023-06-13 12:18:00.413793', '33', '(33) Audi A0 - 2 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Reservedlink\"]}}]', 7, 5),
(82, '2023-06-13 12:28:30.415257', '57', '(57) Mercedes C36 AMG - 2 - Sold', 2, '[{\"changed\": {\"fields\": [\"Reservedlink\"]}}]', 7, 5),
(83, '2023-06-13 13:46:57.242647', '1', '(1) Basri Seller', 1, '[{\"added\": {}}]', 10, 5),
(84, '2023-06-13 13:47:06.988516', '1', '(1) Admin : (34) Audi A0 - 2 - Sold : 100', 1, '[{\"added\": {}}]', 11, 5),
(85, '2023-06-13 13:48:42.623843', '1', '(1) MercedesCorp', 1, '[{\"added\": {}}]', 9, 5),
(86, '2023-06-13 13:49:03.331405', '1', '(1) (1) MercedesCorp : (57) Mercedes C36 AMG - 2 - Sold : 25000', 1, '[{\"added\": {}}]', 14, 5),
(87, '2023-06-13 13:49:39.410479', '8', 'Blendaa\'s Contact Info', 3, '', 15, 5),
(88, '2023-06-13 15:47:45.475268', '2', '(2) Admin : (33) Audi A0 - 2 - Not sold : 5', 1, '[{\"added\": {}}]', 11, 5),
(89, '2023-06-13 23:29:43.107310', '71', '(71) Audi A7 - 2018 - Not sold', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"car images\", \"object\": \"(71) Audi A7 - 2018 - Not sold -- IMG_1993-scaled.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(71) Audi A7 - 2018 - Not sold -- IMG_2003-scaled.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(71) Audi A7 - 2018 - Not sold -- IMG_2000-scaled.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(71) Audi A7 - 2018 - Not sold -- IMG_2026-scaled.webp\"}}]', 7, 5),
(90, '2023-06-14 08:53:01.158123', '33', '(33) Audi A0 - 2 - Not sold', 3, '', 7, 11),
(91, '2023-06-14 08:53:01.166152', '34', '(34) Audi A0 - 2 - Sold', 3, '', 7, 11),
(92, '2023-06-14 08:53:01.166152', '35', '(35) Audi A0 - 2 - Sold', 3, '', 7, 11),
(93, '2023-06-14 08:53:01.166152', '36', '(36) Audi A0 - 2 - Sold', 3, '', 7, 11),
(94, '2023-06-14 08:53:01.174181', '37', '(37) Audi A0 - 2 - Sold', 3, '', 7, 11),
(95, '2023-06-14 08:53:01.174181', '38', '(38) Audi A0 - 2 - Sold', 3, '', 7, 11),
(96, '2023-06-14 08:53:01.174181', '39', '(39) Audi A0 - 2 - Sold', 3, '', 7, 11),
(97, '2023-06-14 08:53:01.174181', '40', '(40) Audi A0 - 2 - Sold', 3, '', 7, 11),
(98, '2023-06-14 08:53:01.182184', '41', '(41) Audi A0 - 2 - Sold', 3, '', 7, 11),
(99, '2023-06-14 08:53:01.182184', '42', '(42) Audi A0 - 2 - Sold', 3, '', 7, 11),
(100, '2023-06-14 08:53:01.190224', '43', '(43) Audi A0 - 2 - Sold', 3, '', 7, 11),
(101, '2023-06-14 08:53:01.190224', '44', '(44) Audi A0 - 2 - Sold', 3, '', 7, 11),
(102, '2023-06-14 08:53:01.190224', '45', '(45) BMW 3-Series - 2 - Sold', 3, '', 7, 11),
(103, '2023-06-14 08:53:01.198180', '46', '(46) BMW 3-Series - 2 - Sold', 3, '', 7, 11),
(104, '2023-06-14 08:53:01.198180', '47', '(47) BMW 3-Series - 2 - Sold', 3, '', 7, 11),
(105, '2023-06-14 08:53:01.198180', '48', '(48) BMW 3-Series - 2 - Sold', 3, '', 7, 11),
(106, '2023-06-14 08:53:01.206194', '49', '(49) BMW 3-Series - 2 - Sold', 3, '', 7, 11),
(107, '2023-06-14 08:53:01.206194', '50', '(50) BMW 3-Series - 2 - Sold', 3, '', 7, 11),
(108, '2023-06-14 08:53:01.206194', '51', '(51) BMW 3-Series - 2 - Sold', 3, '', 7, 11),
(109, '2023-06-14 08:53:01.214395', '52', '(52) BMW 3-Series - 2 - Sold', 3, '', 7, 11),
(110, '2023-06-14 08:53:01.214395', '53', '(53) BMW 3-Series - 2 - Sold', 3, '', 7, 11),
(111, '2023-06-14 08:53:01.214395', '54', '(54) BMW 3-Series - 2 - Sold', 3, '', 7, 11),
(112, '2023-06-14 08:53:01.214395', '55', '(55) BMW 3-Series - 2 - Sold', 3, '', 7, 11),
(113, '2023-06-14 08:53:01.222423', '56', '(56) BMW 3-Series - 2 - Sold', 3, '', 7, 11),
(114, '2023-06-14 08:53:01.222423', '57', '(57) Mercedes C36 AMG - 2 - Sold', 3, '', 7, 11),
(115, '2023-06-14 08:53:01.222423', '58', '(58) Audi A0 - 2 - Sold', 3, '', 7, 11),
(116, '2023-06-14 08:53:01.230901', '59', '(59) Volkswagen Golf 7 - 2020 - Sold', 3, '', 7, 11),
(117, '2023-06-14 08:53:01.230901', '60', '(60) Mitsubishi Evo - 2000 - Sold', 3, '', 7, 11),
(118, '2023-06-14 08:53:01.230901', '61', '(61) Audi A5 - 2018 - Not sold', 3, '', 7, 11),
(119, '2023-06-14 08:53:01.238930', '62', '(62) Audi A5 - 2 - Not sold', 3, '', 7, 11),
(120, '2023-06-14 08:53:01.238930', '63', '(63) Volkswagen 7 - 2 - Not sold', 3, '', 7, 11),
(121, '2023-06-14 08:53:01.238930', '64', '(64) Porsche A5 - 23 - Not sold', 3, '', 7, 11),
(122, '2023-06-14 08:53:01.246945', '65', '(65) Ford aca - 12213 - Not sold', 3, '', 7, 11),
(123, '2023-06-14 08:53:01.250460', '66', '(66) Seat A5 - 2323 - Not sold', 3, '', 7, 11),
(124, '2023-06-14 08:53:01.250460', '67', '(67) Hyndai A5 - 32 - Not sold', 3, '', 7, 11),
(125, '2023-06-14 08:53:01.255031', '70', '(70) Opel Astra - 1990 - Not sold', 3, '', 7, 11),
(126, '2023-06-14 09:19:52.615338', '72', '(72) Volkswagen Golf 8 - 2021 - Not sold', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"car images\", \"object\": \"(72) Volkswagen Golf 8 - 2021 - Not sold -- IMG_7843.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(72) Volkswagen Golf 8 - 2021 - Not sold -- IMG_7848.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(72) Volkswagen Golf 8 - 2021 - Not sold -- IMG_7844.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(72) Volkswagen Golf 8 - 2021 - Not sold -- IMG_7841.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(72) Volkswagen Golf 8 - 2021 - Not sold -- IMG_7856.webp\"}}]', 7, 11),
(127, '2023-06-14 09:21:00.428734', '72', '(72) Volkswagen Golf 8 - 2021 - Not sold', 3, '', 7, 11),
(128, '2023-06-14 09:23:25.690070', '73', '(73) Volkswagen Golf 8 - 2021 - Not sold', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"car images\", \"object\": \"(73) Volkswagen Golf 8 - 2021 - Not sold -- IMG_7848.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(73) Volkswagen Golf 8 - 2021 - Not sold -- IMG_7844.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(73) Volkswagen Golf 8 - 2021 - Not sold -- IMG_7841.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(73) Volkswagen Golf 8 - 2021 - Not sold -- IMG_7856.webp\"}}]', 7, 11),
(129, '2023-06-14 11:23:21.361694', '71', '(71) Audi A7 - 2018 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Transmission\", \"Fuel\", \"Engine\"]}}]', 7, 11),
(130, '2023-06-14 11:23:36.664347', '73', '(73) Volkswagen Golf 8 - 2021 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Transmission\", \"Fuel\", \"Engine\"]}}]', 7, 11),
(131, '2023-06-14 11:29:57.623480', '74', '(74) Volkswagen Arteon - 2018 - Not sold', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"car images\", \"object\": \"(74) Volkswagen Arteon - 2018 - Not sold -- IMG_1382.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(74) Volkswagen Arteon - 2018 - Not sold -- IMG_1381.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(74) Volkswagen Arteon - 2018 - Not sold -- IMG_1387.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(74) Volkswagen Arteon - 2018 - Not sold -- IMG_1392.webp\"}}]', 7, 11),
(132, '2023-06-14 11:39:25.683721', '75', '(75) Mercedes GLS - 2022 - Not sold', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"car images\", \"object\": \"(75) Mercedes GLS - 2022 - Not sold -- IMG_8605.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(75) Mercedes GLS - 2022 - Not sold -- IMG_8608.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(75) Mercedes GLS - 2022 - Not sold -- IMG_8613.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(75) Mercedes GLS - 2022 - Not sold -- IMG_8649.webp\"}}]', 7, 11),
(133, '2023-06-14 11:45:23.749938', '76', '(76) BMW M4 - 2022 - Not sold', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"car images\", \"object\": \"(76) BMW M4 - 2022 - Not sold -- IMG_6720.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(76) BMW M4 - 2022 - Not sold -- IMG_6722.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(76) BMW M4 - 2022 - Not sold -- IMG_6730.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(76) BMW M4 - 2022 - Not sold -- IMG_6752.webp\"}}]', 7, 11),
(134, '2023-06-14 11:51:26.348415', '77', '(77) Mercedes G-Class - 2022 - Not sold', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"car images\", \"object\": \"(77) Mercedes G-Class - 2022 - Not sold -- IMG_5624.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(77) Mercedes G-Class - 2022 - Not sold -- IMG_5610.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(77) Mercedes G-Class - 2022 - Not sold -- IMG_5634.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(77) Mercedes G-Class - 2022 - Not sold -- IMG_5649.webp\"}}]', 7, 11),
(135, '2023-06-14 11:52:14.777121', '74', '(74) Volkswagen Arteon - 2018 - Not sold', 2, '[{\"deleted\": {\"name\": \"car images\", \"object\": \"(74) Volkswagen Arteon - 2018 - Not sold -- IMG_1382.webp\"}}, {\"deleted\": {\"name\": \"car images\", \"object\": \"(74) Volkswagen Arteon - 2018 - Not sold -- IMG_1381.webp\"}}, {\"deleted\": {\"name\": \"car images\", \"object\": \"(74) Volkswagen Arteon - 2018 - Not sold -- IMG_1387.webp\"}}, {\"deleted\": {\"name\": \"car images\", \"object\": \"(74) Volkswagen Arteon - 2018 - Not sold -- IMG_1392.webp\"}}]', 7, 11),
(136, '2023-06-14 11:52:59.307249', '74', '(74) Volkswagen Arteon - 2018 - Not sold', 2, '[{\"added\": {\"name\": \"car images\", \"object\": \"(74) Volkswagen Arteon - 2018 - Not sold -- IMG_1381.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(74) Volkswagen Arteon - 2018 - Not sold -- IMG_1382.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(74) Volkswagen Arteon - 2018 - Not sold -- IMG_1387.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(74) Volkswagen Arteon - 2018 - Not sold -- IMG_1392.webp\"}}]', 7, 11),
(137, '2023-06-14 11:56:38.667351', '11', '(11) Sport Car', 1, '[{\"added\": {}}]', 8, 11),
(138, '2023-06-14 11:58:08.729777', '78', '(78) Ferrari F8 - 2018 - Not sold', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"car images\", \"object\": \"(78) Ferrari F8 - 2018 - Not sold -- IMG_5331.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(78) Ferrari F8 - 2018 - Not sold -- IMG_5318.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(78) Ferrari F8 - 2018 - Not sold -- IMG_5360.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(78) Ferrari F8 - 2018 - Not sold -- IMG_5377.webp\"}}]', 7, 11),
(139, '2023-06-14 12:02:21.976133', '79', '(79) Mercedes GT63 - 2019 - Not sold', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"car images\", \"object\": \"(79) Mercedes GT63 - 2019 - Not sold -- IMG_7613.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(79) Mercedes GT63 - 2019 - Not sold -- IMG_7610.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(79) Mercedes GT63 - 2019 - Not sold -- IMG_7629.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(79) Mercedes GT63 - 2019 - Not sold -- IMG_7621.webp\"}}]', 7, 11),
(140, '2023-06-14 12:05:43.647144', '80', '(80) BMW 5 - 2021 - Not sold', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"car images\", \"object\": \"(80) BMW 5 - 2021 - Not sold -- IMG_8333.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(80) BMW 5 - 2021 - Not sold -- IMG_8341.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(80) BMW 5 - 2021 - Not sold -- IMG_8340.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(80) BMW 5 - 2021 - Not sold -- IMG_8344.webp\"}}]', 7, 11),
(141, '2023-06-14 12:10:21.976450', '81', '(81) Audi RS6 - 2022 - Not sold', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"car images\", \"object\": \"(81) Audi RS6 - 2022 - Not sold -- IMG_6641.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(81) Audi RS6 - 2022 - Not sold -- IMG_6643.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(81) Audi RS6 - 2022 - Not sold -- IMG_6646.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(81) Audi RS6 - 2022 - Not sold -- IMG_6666.webp\"}}]', 7, 11),
(142, '2023-06-14 12:23:14.487015', '82', '(82) Mercedes GLE - 2020 - Not sold', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"car images\", \"object\": \"(82) Mercedes GLE - 2020 - Not sold -- IMG_3440-scaled.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(82) Mercedes GLE - 2020 - Not sold -- IMG_3443-scaled.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(82) Mercedes GLE - 2020 - Not sold -- IMG_3442-scaled.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(82) Mercedes GLE - 2020 - Not sold -- IMG_3457-scaled.webp\"}}]', 7, 11),
(143, '2023-06-14 12:30:27.406547', '83', '(83) BMW 7 - 2023 - Not sold', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"car images\", \"object\": \"(83) BMW 7 - 2023 - Not sold -- IMG_6861.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(83) BMW 7 - 2023 - Not sold -- IMG_6862.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(83) BMW 7 - 2023 - Not sold -- IMG_6864.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(83) BMW 7 - 2023 - Not sold -- IMG_6897.webp\"}}]', 7, 11),
(144, '2023-06-14 12:38:44.172282', '84', '(84) Lamborghini Huracan - 2017 - Not sold', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"car images\", \"object\": \"(84) Lamborghini Huracan - 2017 - Not sold -- IMG_2618.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(84) Lamborghini Huracan - 2017 - Not sold -- IMG_2615.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(84) Lamborghini Huracan - 2017 - Not sold -- IMG_2621.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(84) Lamborghini Huracan - 2017 - Not sold -- IMG_2627.webp\"}}]', 7, 11),
(145, '2023-06-14 13:22:12.898663', '85', '(85) Porsche Panamera 4s - 2017 - Not sold', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"car images\", \"object\": \"(85) Porsche Panamera 4s - 2017 - Not sold -- IMG_7442.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(85) Porsche Panamera 4s - 2017 - Not sold -- IMG_7434.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(85) Porsche Panamera 4s - 2017 - Not sold -- IMG_7447.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(85) Porsche Panamera 4s - 2017 - Not sold -- IMG_7456.webp\"}}]', 7, 11),
(146, '2023-06-14 13:25:58.808154', '86', '(86) Lamborghini Urus - 2023 - Not sold', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"car images\", \"object\": \"(86) Lamborghini Urus - 2023 - Not sold -- IMG_7057.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(86) Lamborghini Urus - 2023 - Not sold -- IMG_7050.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(86) Lamborghini Urus - 2023 - Not sold -- IMG_7077.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(86) Lamborghini Urus - 2023 - Not sold -- IMG_7139.webp\"}}]', 7, 11),
(147, '2023-06-14 13:33:11.602390', '87', '(87) BMW X6 - 2020 - Not sold', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"car images\", \"object\": \"(87) BMW X6 - 2020 - Not sold -- IMG_6010.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(87) BMW X6 - 2020 - Not sold -- IMG_6012.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(87) BMW X6 - 2020 - Not sold -- IMG_6014.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(87) BMW X6 - 2020 - Not sold -- IMG_6027.webp\"}}]', 7, 11),
(148, '2023-06-14 13:36:17.528691', '88', '(88) Porsche Cayene Turbo - 2018 - Not sold', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"car images\", \"object\": \"(88) Porsche Cayene Turbo - 2018 - Not sold -- IMG_3534-scaled.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(88) Porsche Cayene Turbo - 2018 - Not sold -- IMG_3535-scaled.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(88) Porsche Cayene Turbo - 2018 - Not sold -- IMG_3540-scaled.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(88) Porsche Cayene Turbo - 2018 - Not sold -- IMG_3546-scaled.webp\"}}]', 7, 11),
(149, '2023-06-14 13:40:52.664949', '89', '(89) Maserati Grecale - 2022 - Not sold', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"car images\", \"object\": \"(89) Maserati Grecale - 2022 - Not sold -- IMG_1796-scaled.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(89) Maserati Grecale - 2022 - Not sold -- IMG_1798-scaled.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(89) Maserati Grecale - 2022 - Not sold -- IMG_1806-scaled.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(89) Maserati Grecale - 2022 - Not sold -- IMG_1816-scaled.webp\"}}]', 7, 11),
(150, '2023-06-14 13:45:36.440162', '90', '(90) Audi Q8 - 2023 - Not sold', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"car images\", \"object\": \"(90) Audi Q8 - 2023 - Not sold -- IMG_0892.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(90) Audi Q8 - 2023 - Not sold -- IMG_0894.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(90) Audi Q8 - 2023 - Not sold -- IMG_0898.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(90) Audi Q8 - 2023 - Not sold -- IMG_0904.webp\"}}]', 7, 11),
(151, '2023-06-14 13:48:20.519320', '91', '(91) Bentley Bentayga - 2023 - Not sold', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"car images\", \"object\": \"(91) Bentley Bentayga - 2023 - Not sold -- IMG_6964.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(91) Bentley Bentayga - 2023 - Not sold -- IMG_6967.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(91) Bentley Bentayga - 2023 - Not sold -- IMG_6975.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(91) Bentley Bentayga - 2023 - Not sold -- IMG_7024.webp\"}}]', 7, 11),
(152, '2023-06-14 13:51:05.450668', '92', '(92) Audi A8 - 2023 - Not sold', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"car images\", \"object\": \"(92) Audi A8 - 2023 - Not sold -- IMG_1129.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(92) Audi A8 - 2023 - Not sold -- IMG_1137.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(92) Audi A8 - 2023 - Not sold -- IMG_1135.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(92) Audi A8 - 2023 - Not sold -- IMG_1145.webp\"}}]', 7, 11),
(153, '2023-06-14 13:56:12.269985', '93', '(93) Ferrari 296 GTB - 2022 - Not sold', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"car images\", \"object\": \"(93) Ferrari 296 GTB - 2022 - Not sold -- 6.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(93) Ferrari 296 GTB - 2022 - Not sold -- 9.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(93) Ferrari 296 GTB - 2022 - Not sold -- 13.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(93) Ferrari 296 GTB - 2022 - Not sold -- F.webp\"}}]', 7, 11),
(154, '2023-06-14 13:58:37.511507', '94', '(94) Lamborghini Huracan - 2021 - Not sold', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"car images\", \"object\": \"(94) Lamborghini Huracan - 2021 - Not sold -- IMG_5938.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(94) Lamborghini Huracan - 2021 - Not sold -- IMG_5936.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(94) Lamborghini Huracan - 2021 - Not sold -- IMG_5941.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(94) Lamborghini Huracan - 2021 - Not sold -- IMG_5960.webp\"}}]', 7, 11),
(155, '2023-06-14 13:59:36.569693', '75', '(75) Mercedes GLS - 2022 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Fuel\"]}}]', 7, 11),
(156, '2023-06-14 13:59:56.284347', '76', '(76) BMW M4 - 2022 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Fuel\"]}}]', 7, 11),
(157, '2023-06-14 14:00:12.762547', '77', '(77) Mercedes G-Class - 2022 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Fuel\"]}}]', 7, 11),
(158, '2023-06-14 14:00:20.028512', '78', '(78) Ferrari F8 - 2018 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Fuel\"]}}]', 7, 11),
(159, '2023-06-14 14:00:26.765500', '79', '(79) Mercedes GT63 - 2019 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Fuel\"]}}]', 7, 11),
(160, '2023-06-14 14:00:33.314763', '81', '(81) Audi RS6 - 2022 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Fuel\"]}}]', 7, 11),
(161, '2023-06-14 14:00:41.314754', '84', '(84) Lamborghini Huracan - 2017 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Fuel\"]}}]', 7, 11),
(162, '2023-06-14 14:00:53.317063', '87', '(87) BMW X6 - 2020 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Fuel\"]}}]', 7, 11),
(163, '2023-06-14 14:15:51.230571', '95', '(95) McLaren 600LT Spider - 2020 - Not sold', 1, '[{\"added\": {}}]', 7, 5),
(164, '2023-06-14 14:19:02.989179', '96', '(96) Ferrari 812 Superfast - 2020 - Sold', 1, '[{\"added\": {}}]', 7, 5),
(165, '2023-06-14 14:20:45.324510', '97', '(97) Audi A8 - 2018 - Not sold', 1, '[{\"added\": {}}]', 7, 5),
(166, '2023-06-14 14:22:34.467988', '98', '(98) Lamorghini Aventador - 2017 - Not sold', 1, '[{\"added\": {}}]', 7, 5),
(167, '2023-06-14 14:25:35.433129', '99', '(99) Porsche 718 Spyder - 2022 - Not sold', 1, '[{\"added\": {}}]', 7, 5),
(168, '2023-06-14 14:26:52.600056', '95', '(95) McLaren 600LT Spider - 2020 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 7, 5),
(169, '2023-06-14 14:28:24.829592', '99', '(99) Porsche 718 Spyder - 2022 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 7, 5),
(170, '2023-06-14 14:28:41.343121', '96', '(96) Ferrari 812 Superfast - 2020 - Sold', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 7, 5),
(171, '2023-06-14 14:28:57.998316', '97', '(97) Audi A8 - 2018 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 7, 5),
(172, '2023-06-14 14:29:35.351578', '98', '(98) Lamorghini Aventador - 2017 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 7, 5),
(173, '2023-06-14 14:30:33.967365', '98', '(98) Lamorghini Aventador - 2017 - Not sold', 2, '[]', 7, 5),
(174, '2023-06-14 14:31:23.800946', '98', '(98) LamBorghini Aventador - 2017 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Make\"]}}]', 7, 5),
(175, '2023-06-14 14:31:31.961112', '98', '(98) Lamborghini Aventador - 2017 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Make\"]}}]', 7, 5),
(176, '2023-06-14 14:36:01.816952', '95', '(95) McLaren 600LT Spider - 2020 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Reservedlink\"]}}]', 7, 5),
(177, '2023-06-14 14:36:26.080394', '96', '(96) Ferrari 812 Superfast - 2020 - Sold', 2, '[{\"changed\": {\"fields\": [\"Reservedlink\"]}}]', 7, 5),
(178, '2023-06-14 14:36:35.839929', '97', '(97) Audi A8 - 2018 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Reservedlink\"]}}]', 7, 5),
(179, '2023-06-14 14:36:44.106040', '98', '(98) Lamborghini Aventador - 2017 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Reservedlink\"]}}]', 7, 5),
(180, '2023-06-14 14:36:55.256956', '99', '(99) Porsche 718 Spyder - 2022 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Reservedlink\"]}}]', 7, 5),
(181, '2023-06-14 14:37:06.015022', '99', '(99) Porsche 718 Spyder - 2022 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Reservedlink\"]}}]', 7, 5),
(182, '2023-06-14 14:41:26.713116', '95', '(95) McLaren 600LT Spider - 2020 - Sold', 2, '[{\"changed\": {\"fields\": [\"Sold\", \"Ads\"]}}]', 7, 5),
(183, '2023-06-14 14:41:34.955654', '96', '(96) Ferrari 812 Superfast - 2020 - Sold', 2, '[{\"changed\": {\"fields\": [\"Ads\"]}}]', 7, 5),
(184, '2023-06-14 14:41:43.724761', '97', '(97) Audi A8 - 2018 - Sold', 2, '[{\"changed\": {\"fields\": [\"Sold\", \"Ads\"]}}]', 7, 5),
(185, '2023-06-14 14:41:55.193896', '98', '(98) Lamborghini Aventador - 2017 - Sold', 2, '[{\"changed\": {\"fields\": [\"Sold\", \"Ads\"]}}]', 7, 5),
(186, '2023-06-14 14:42:04.951372', '99', '(99) Porsche 718 Spyder - 2022 - Sold', 2, '[{\"changed\": {\"fields\": [\"Sold\", \"Ads\"]}}]', 7, 5),
(187, '2023-06-14 14:42:41.913675', '95', '(95) McLaren 600LT Spider - 2020 - Sold', 2, '[{\"added\": {\"name\": \"car images\", \"object\": \"(95) McLaren 600LT Spider - 2020 - Sold -- m_1.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(95) McLaren 600LT Spider - 2020 - Sold -- m_2.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(95) McLaren 600LT Spider - 2020 - Sold -- m_3.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(95) McLaren 600LT Spider - 2020 - Sold -- m_4.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(95) McLaren 600LT Spider - 2020 - Sold -- m_5.webp\"}}]', 7, 5),
(188, '2023-06-14 14:43:22.640143', '96', '(96) Ferrari 812 Superfast - 2020 - Sold', 2, '[{\"added\": {\"name\": \"car images\", \"object\": \"(96) Ferrari 812 Superfast - 2020 - Sold -- f_1.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(96) Ferrari 812 Superfast - 2020 - Sold -- f_2.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(96) Ferrari 812 Superfast - 2020 - Sold -- f_3.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(96) Ferrari 812 Superfast - 2020 - Sold -- f_4.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(96) Ferrari 812 Superfast - 2020 - Sold -- f_5.webp\"}}]', 7, 5),
(189, '2023-06-14 14:44:12.160131', '97', '(97) Audi A8 - 2018 - Sold', 2, '[{\"added\": {\"name\": \"car images\", \"object\": \"(97) Audi A8 - 2018 - Sold -- r8_1.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(97) Audi A8 - 2018 - Sold -- r8_2.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(97) Audi A8 - 2018 - Sold -- r8_3.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(97) Audi A8 - 2018 - Sold -- r8_4.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(97) Audi A8 - 2018 - Sold -- r8_5.webp\"}}]', 7, 5),
(190, '2023-06-14 14:44:53.002996', '98', '(98) Lamborghini Aventador - 2017 - Sold', 2, '[{\"added\": {\"name\": \"car images\", \"object\": \"(98) Lamborghini Aventador - 2017 - Sold -- a_1.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(98) Lamborghini Aventador - 2017 - Sold -- a_2.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(98) Lamborghini Aventador - 2017 - Sold -- a_3.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(98) Lamborghini Aventador - 2017 - Sold -- a_4.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(98) Lamborghini Aventador - 2017 - Sold -- a_5.webp\"}}]', 7, 5),
(191, '2023-06-14 14:45:25.711070', '99', '(99) Porsche 718 Spyder - 2022 - Sold', 2, '[{\"added\": {\"name\": \"car images\", \"object\": \"(99) Porsche 718 Spyder - 2022 - Sold -- p_1.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(99) Porsche 718 Spyder - 2022 - Sold -- p_2.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(99) Porsche 718 Spyder - 2022 - Sold -- p_3.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(99) Porsche 718 Spyder - 2022 - Sold -- p_4.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(99) Porsche 718 Spyder - 2022 - Sold -- p_5.webp\"}}]', 7, 5),
(192, '2023-06-14 15:55:46.560121', '100', '(100) Mercedes V Class - 2021 - Not sold', 1, '[{\"added\": {}}]', 7, 5),
(193, '2023-06-14 15:56:48.364117', '100', '(100) Mercedes V Class - 2021 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 7, 5),
(194, '2023-06-14 15:59:23.329807', '100', '(100) Mercedes V Class - 2021 - Not sold', 2, '[{\"added\": {\"name\": \"car images\", \"object\": \"(100) Mercedes V Class - 2021 - Not sold -- 1_NgWFnhK.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(100) Mercedes V Class - 2021 - Not sold -- 2.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(100) Mercedes V Class - 2021 - Not sold -- 3.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(100) Mercedes V Class - 2021 - Not sold -- 3_SIWpqUu.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(100) Mercedes V Class - 2021 - Not sold -- 2_Cd60CjT.webp\"}}]', 7, 5),
(195, '2023-06-14 16:04:20.531621', '101', '(101) Mercedes X Class - 2018 - Not sold', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"car images\", \"object\": \"(101) Mercedes X Class - 2018 - Not sold -- 6.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(101) Mercedes X Class - 2018 - Not sold -- 4.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(101) Mercedes X Class - 2018 - Not sold -- 9.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(101) Mercedes X Class - 2018 - Not sold -- 4_dNUCNHU.webp\"}}, {\"added\": {\"name\": \"car images\", \"object\": \"(101) Mercedes X Class - 2018 - Not sold -- 5.webp\"}}]', 7, 5),
(196, '2023-06-14 16:12:37.871811', '100', '(100) Mercedes V Class - 2021 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}, {\"changed\": {\"name\": \"car images\", \"object\": \"(100) Mercedes V Class - 2021 - Not sold -- 2_Wm4SeKI.webp\", \"fields\": [\"Image\"]}}, {\"changed\": {\"name\": \"car images\", \"object\": \"(100) Mercedes V Class - 2021 - Not sold -- 3_fj8CO1G.webp\", \"fields\": [\"Image\"]}}, {\"changed\": {\"name\": \"car images\", \"object\": \"(100) Mercedes V Class - 2021 - Not sold -- 4_KDMB0hx.webp\", \"fields\": [\"Image\"]}}, {\"changed\": {\"name\": \"car images\", \"object\": \"(100) Mercedes V Class - 2021 - Not sold -- 5_eOs4gWH.webp\", \"fields\": [\"Image\"]}}, {\"deleted\": {\"name\": \"car images\", \"object\": \"(100) Mercedes V Class - 2021 - Not sold -- 2_Cd60CjT.webp\"}}]', 7, 5),
(197, '2023-06-14 16:13:35.518812', '101', '(101) Mercedes X Class - 2018 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}, {\"changed\": {\"name\": \"car images\", \"object\": \"(101) Mercedes X Class - 2018 - Not sold -- 4_ZjYViqh.webp\", \"fields\": [\"Image\"]}}, {\"changed\": {\"name\": \"car images\", \"object\": \"(101) Mercedes X Class - 2018 - Not sold -- 3.webp\", \"fields\": [\"Image\"]}}, {\"changed\": {\"name\": \"car images\", \"object\": \"(101) Mercedes X Class - 2018 - Not sold -- 1.webp\", \"fields\": [\"Image\"]}}, {\"changed\": {\"name\": \"car images\", \"object\": \"(101) Mercedes X Class - 2018 - Not sold -- 2.webp\", \"fields\": [\"Image\"]}}, {\"deleted\": {\"name\": \"car images\", \"object\": \"(101) Mercedes X Class - 2018 - Not sold -- 5.webp\"}}]', 7, 5),
(198, '2023-06-14 16:35:01.149549', '97', '(97) Audi R8 - 2018 - Sold', 2, '[{\"changed\": {\"fields\": [\"Model\"]}}]', 7, 5),
(199, '2023-06-14 16:40:51.105393', '100', '(100) Mercedes V-Class - 2021 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Model\"]}}]', 7, 5),
(200, '2023-06-14 16:41:07.989898', '101', '(101) Mercedes X-Class - 2018 - Not sold', 2, '[{\"changed\": {\"fields\": [\"Model\"]}}]', 7, 5),
(201, '2023-06-14 17:24:14.661432', '1', 'Admin', 1, '[{\"added\": {}}]', 3, 11),
(202, '2023-06-14 17:25:49.089158', '2', 'User', 1, '[{\"added\": {}}]', 3, 11),
(203, '2023-06-14 17:28:02.687562', '3', 'Editor', 1, '[{\"added\": {}}]', 3, 11),
(204, '2023-06-14 17:28:38.796233', '3', 'Editor', 2, '[{\"changed\": {\"fields\": [\"Permissions\"]}}]', 3, 11),
(205, '2023-06-14 17:29:09.668525', '4', 'Financier', 1, '[{\"added\": {}}]', 3, 11),
(206, '2023-06-14 17:29:31.098099', '10', 'Blendaa', 2, '[{\"changed\": {\"fields\": [\"Groups\"]}}]', 4, 11),
(207, '2023-06-14 17:30:08.947028', '2', 'User', 3, '', 3, 11),
(208, '2023-06-14 17:30:42.662409', '7', 'erinibini', 2, '[{\"changed\": {\"fields\": [\"Groups\"]}}]', 4, 11),
(209, '2023-06-14 17:30:55.648512', '8', 'Baba123', 3, '', 4, 11),
(210, '2023-06-14 17:32:47.043483', '11', 'blepo', 2, '[{\"changed\": {\"fields\": [\"Groups\"]}}]', 4, 11),
(211, '2023-06-14 17:32:59.064599', '5', 'dionk', 2, '[{\"changed\": {\"fields\": [\"Groups\"]}}]', 4, 11),
(212, '2023-06-14 17:34:21.909618', '9', 'blepo\'s Contact Info', 1, '[{\"added\": {}}]', 15, 11),
(213, '2023-06-14 17:43:09.834929', '2', '(2) (1) MercedesCorp : (75) Mercedes GLS - 2022 - Not sold : 200000', 1, '[{\"added\": {}}]', 14, 11),
(214, '2023-06-14 17:43:47.822250', '2', '(2) BMW', 1, '[{\"added\": {}}]', 9, 11),
(215, '2023-06-14 17:44:14.305300', '3', '(3) Audi', 1, '[{\"added\": {}}]', 9, 11),
(216, '2023-06-14 17:44:55.832530', '2', '(2) (1) MercedesCorp : (75) Mercedes GLS - 2022 - Not sold : 120000.00', 2, '[{\"changed\": {\"fields\": [\"Amount\"]}}]', 14, 11),
(217, '2023-06-14 17:45:12.224635', '3', '(3) (2) BMW : (76) BMW M4 - 2022 - Not sold : 90000', 1, '[{\"added\": {}}]', 14, 11),
(218, '2023-06-14 17:46:05.103779', '4', '(4) (3) Audi : (71) Audi A7 - 2018 - Not sold : 75000', 1, '[{\"added\": {}}]', 14, 11),
(219, '2023-06-14 17:50:02.866242', '2', '(2) Erin Orana Seller', 1, '[{\"added\": {}}]', 10, 11),
(220, '2023-06-14 17:50:16.556675', '1', '(1) Basri Seller', 3, '', 10, 11),
(221, '2023-06-14 17:51:30.888264', '3', '(3) Shqipe Hoxha Receptionist', 1, '[{\"added\": {}}]', 10, 11),
(222, '2023-06-14 17:52:17.624939', '4', '(4) Zymer Bregtalia Manager', 1, '[{\"added\": {}}]', 10, 11),
(223, '2023-06-14 17:53:25.892837', '5', '(5) Leotrim Shatri Salesman', 1, '[{\"added\": {}}]', 10, 11),
(224, '2023-06-14 18:00:58.267549', '7', '(7) dionk - Reviewed - (71) Audi A7 - 2018 - Not sold - Rating: 5', 2, '[{\"changed\": {\"fields\": [\"Comment\"]}}]', 12, 11),
(225, '2023-06-14 18:01:13.642107', '8', '(8) dionk - Reviewed - (76) BMW M4 - 2022 - Not sold - Rating: 5', 2, '[{\"changed\": {\"fields\": [\"Comment\"]}}]', 12, 11),
(226, '2023-06-14 18:01:34.386714', '9', '(9) dionk - Reviewed - (88) Porsche Cayene Turbo - 2018 - Not sold - Rating: 5', 2, '[{\"changed\": {\"fields\": [\"Comment\"]}}]', 12, 11),
(227, '2023-06-14 18:02:02.964321', '10', '(10) blepo - Reviewed - (71) Audi A7 - 2018 - Not sold - Rating: 5', 2, '[{\"changed\": {\"fields\": [\"Comment\"]}}]', 12, 11),
(228, '2023-06-14 18:02:47.695497', '7', '(7) dionk - Reviewed - (71) Audi A7 - 2018 - Not sold - Rating: 4', 2, '[{\"changed\": {\"fields\": [\"Rating\"]}}]', 12, 11),
(229, '2023-06-14 18:03:09.555359', '9', '(9) dionk - Reviewed - (88) Porsche Cayene Turbo - 2018 - Not sold - Rating: 3', 2, '[{\"changed\": {\"fields\": [\"Rating\"]}}]', 12, 11),
(230, '2023-06-15 09:12:44.368633', '1', 'Ndertesa55994 object (1)', 1, '[{\"added\": {}}]', 21, 11),
(231, '2023-06-15 09:12:48.693447', '2', 'Ndertesa55994 object (2)', 1, '[{\"added\": {}}]', 21, 11),
(232, '2023-06-15 09:12:53.139472', '3', 'Ndertesa55994 object (3)', 1, '[{\"added\": {}}]', 21, 11),
(233, '2023-06-15 09:13:07.236587', '1', 'Apartamenti55994 object (1)', 1, '[{\"added\": {}}]', 22, 11),
(234, '2023-06-15 09:20:42.959655', '4', 'Ndertesa55994 object (4)', 1, '[{\"added\": {}}]', 21, 11),
(235, '2023-06-15 09:20:57.448151', '2', 'Apartamenti55994 object (2)', 1, '[{\"added\": {}}]', 22, 11),
(236, '2023-06-15 09:32:39.600082', '2', 'Apartamenti55994 object (2)', 2, '[{\"changed\": {\"fields\": [\"Pershkrimi55994\"]}}]', 22, 11);

-- --------------------------------------------------------

--
-- Table structure for table `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(20, 'autosallonApp', 'apartamenti'),
(22, 'autosallonApp', 'apartamenti55994'),
(7, 'autosallonApp', 'car'),
(16, 'autosallonApp', 'carimages'),
(8, 'autosallonApp', 'category'),
(15, 'autosallonApp', 'contactinfo'),
(9, 'autosallonApp', 'distributor'),
(14, 'autosallonApp', 'dis_transaction'),
(13, 'autosallonApp', 'favorite'),
(19, 'autosallonApp', 'message'),
(21, 'autosallonApp', 'ndertesa55994'),
(12, 'autosallonApp', 'review'),
(11, 'autosallonApp', 'sale'),
(10, 'autosallonApp', 'worker'),
(5, 'contenttypes', 'contenttype'),
(18, 'payment', 'paymenthistory'),
(17, 'payment', 'product'),
(6, 'sessions', 'session');

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2023-06-05 11:02:05.380634'),
(2, 'auth', '0001_initial', '2023-06-05 11:02:05.984629'),
(3, 'admin', '0001_initial', '2023-06-05 11:02:06.108655'),
(4, 'admin', '0002_logentry_remove_auto_add', '2023-06-05 11:02:06.124658'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2023-06-05 11:02:06.144638'),
(6, 'contenttypes', '0002_remove_content_type_name', '2023-06-05 11:02:06.240623'),
(7, 'auth', '0002_alter_permission_name_max_length', '2023-06-05 11:02:06.308656'),
(8, 'auth', '0003_alter_user_email_max_length', '2023-06-05 11:02:06.344670'),
(9, 'auth', '0004_alter_user_username_opts', '2023-06-05 11:02:06.364658'),
(10, 'auth', '0005_alter_user_last_login_null', '2023-06-05 11:02:06.444623'),
(11, 'auth', '0006_require_contenttypes_0002', '2023-06-05 11:02:06.448624'),
(12, 'auth', '0007_alter_validators_add_error_messages', '2023-06-05 11:02:06.468635'),
(13, 'auth', '0008_alter_user_username_max_length', '2023-06-05 11:02:06.524630'),
(14, 'auth', '0009_alter_user_last_name_max_length', '2023-06-05 11:02:06.584634'),
(15, 'auth', '0010_alter_group_name_max_length', '2023-06-05 11:02:06.660627'),
(16, 'auth', '0011_update_proxy_permissions', '2023-06-05 11:02:06.688632'),
(17, 'auth', '0012_alter_user_first_name_max_length', '2023-06-05 11:02:06.744690'),
(18, 'auth', '0013_alter_user_email', '2023-06-05 11:02:06.772626'),
(19, 'autosallonApp', '0001_initial', '2023-06-05 11:02:07.668627'),
(20, 'autosallonApp', '0002_alter_contactinfo_address_alter_contactinfo_phone', '2023-06-05 11:02:07.708679'),
(21, 'sessions', '0001_initial', '2023-06-05 11:02:07.760633'),
(22, 'payment', '0001_initial', '2023-06-10 11:37:16.314875'),
(23, 'payment', '0002_alter_product_price', '2023-06-10 11:37:16.348266'),
(24, 'payment', '0003_alter_product_price', '2023-06-10 11:37:16.378264'),
(25, 'payment', '0004_product_book_url_paymenthistory', '2023-06-10 11:37:16.488987'),
(26, 'autosallonApp', '0003_car_resevedlink', '2023-06-13 09:23:19.922550'),
(27, 'autosallonApp', '0004_rename_resevedlink_car_reservedlink', '2023-06-13 09:32:58.113610'),
(28, 'autosallonApp', '0005_sale_iscompleted', '2023-06-13 13:43:01.276024'),
(29, 'autosallonApp', '0006_message', '2023-06-14 11:20:37.242979'),
(30, 'autosallonApp', '0007_car_engine_car_fuel_car_transmission', '2023-06-14 11:20:37.314793'),
(31, 'autosallonApp', '0008_worker_image', '2023-06-14 14:40:02.844571'),
(32, 'autosallonApp', '0009_car_ads', '2023-06-14 14:40:02.874492'),
(33, 'autosallonApp', '0010_ndertesa55994_apartamenti', '2023-06-15 09:07:36.435003'),
(34, 'autosallonApp', '0010_ndertesa55994_apartamenti55994', '2023-06-15 09:12:25.889857');

-- --------------------------------------------------------

--
-- Table structure for table `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('tm86ceg8feo6d49xzhefi10blgkx6x4w', '.eJxVjEEOwiAQAP_C2RCWLpT16N03ECiLVA0kpT0Z_25qetDrzGRewodtLX7rvPg5ibMAEKdfGMP04LqbdA_11uTU6rrMUe6JPGyX15b4eTnav0EJvXy_GFmPSFkzWmuQkQ0Dam2sU5YxjmCdIwpIJhMoBTEFM6BNhEN24v0B0s82mw:1q9ePz:mgWYEgvV7wGB1RCuulwjPeBzfMlb5ihseO92S-Q_gkQ', '2023-06-29 04:17:07.896370'),
('wuuoc6gun41d6fnjtkx65v106lddvo6k', '.eJxVjD0OwyAUg-_CXCH-IR275wzoAY-StgIpJFPVu5dIGdrJsj_bb-Jh34rfO65-SeRKDLn8ZgHiE-sB0gPqvdHY6rYugR4VetJO55bwdTu7fwcFehlraTIGlS0YER1wp6XCwBmzIkyapeFB2UlIJzBJa0XWItihDp1BjZx8vs_kNvk:1q68CB:LyEistfTwjN3f8mtJmIew9qJVYElk4r8JWBtxpRm3LE', '2023-06-19 11:16:19.578027'),
('xj60aq6w3mc8vw8uyloelznnsv6jkcn2', '.eJxVjDEOgzAQBP_iOrJsMGeTMj1vsPbsI5BEWMJQRfl7hESRtDsz-1YR-zbFvcoa56yuqlOX342RnrIcID-w3ItOZdnWmfWh6JNWPZQsr9vp_h1MqNNRizOAQ8hBEKxp4D3CGLIbmWgkazkw2ZZ6uL4FfEPJ9p3zllMnbNTnC_fKOAA:1q9RDB:Szxbg8ZTGOfHmCpopcGj6CzUhMlwavh3fV0oXWeO31Q', '2023-06-28 14:11:01.622514'),
('zkr47shk3ijcep0b3kwpcfq1eiuzej1o', '.eJxVjEEOwiAQAP_C2RCWLpT16N03ECiLVA0kpT0Z_25qetDrzGRewodtLX7rvPg5ibMAEKdfGMP04LqbdA_11uTU6rrMUe6JPGyX15b4eTnav0EJvXy_GFmPSFkzWmuQkQ0Dam2sU5YxjmCdIwpIJhMoBTEFM6BNhEN24v0B0s82mw:1q7ua4:AYSd5nxGBhGqHyLtP-s5aGf0zYuwf8ZaNCnUkG-vYUA', '2023-06-24 09:08:20.469380'),
('ztywl04nd277egm5xqqsb7mcf6cu1zvm', '.eJxVjEEOwiAQAP_C2RCWLpT16N03ECiLVA0kpT0Z_25qetDrzGRewodtLX7rvPg5ibMAEKdfGMP04LqbdA_11uTU6rrMUe6JPGyX15b4eTnav0EJvXy_GFmPSFkzWmuQkQ0Dam2sU5YxjmCdIwpIJhMoBTEFM6BNhEN24v0B0s82mw:1q7BGn:i-3knSjxtxspbmnl4JjKneLEr1Ecqdw4IhRcaHS5wFA', '2023-06-22 08:45:25.935089');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexes for table `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `autosallonapp_car`
--
ALTER TABLE `autosallonapp_car`
  ADD PRIMARY KEY (`id`),
  ADD KEY `autosallonApp_car_category_id_a5fe2a10_fk_autosallo` (`category_id`);

--
-- Indexes for table `autosallonapp_carimages`
--
ALTER TABLE `autosallonapp_carimages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `autosallonApp_carimages_car_id_214c4c93_fk_autosallonApp_car_id` (`car_id`);

--
-- Indexes for table `autosallonapp_category`
--
ALTER TABLE `autosallonapp_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `autosallonapp_contactinfo`
--
ALTER TABLE `autosallonapp_contactinfo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `autosallonApp_contactinfo_user_id_da294bc5_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `autosallonapp_distributor`
--
ALTER TABLE `autosallonapp_distributor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `autosallonapp_dis_transaction`
--
ALTER TABLE `autosallonapp_dis_transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `autosallonApp_dis_tr_car_id_0db43809_fk_autosallo` (`car_id`),
  ADD KEY `autosallonApp_dis_tr_distributor_id_8fb9ba80_fk_autosallo` (`distributor_id`);

--
-- Indexes for table `autosallonapp_favorite`
--
ALTER TABLE `autosallonapp_favorite`
  ADD PRIMARY KEY (`id`),
  ADD KEY `autosallonApp_favorite_car_id_b4d652b0_fk_autosallonApp_car_id` (`car_id`),
  ADD KEY `autosallonApp_favorite_user_id_d096e3b4_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `autosallonapp_message`
--
ALTER TABLE `autosallonapp_message`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `autosallonapp_review`
--
ALTER TABLE `autosallonapp_review`
  ADD PRIMARY KEY (`id`),
  ADD KEY `autosallonApp_review_car_id_5e5bd6f6_fk_autosallonApp_car_id` (`car_id`),
  ADD KEY `autosallonApp_review_user_id_883808b9_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `autosallonapp_sale`
--
ALTER TABLE `autosallonapp_sale`
  ADD PRIMARY KEY (`id`),
  ADD KEY `autosallonApp_sale_car_id_89c7a107_fk_autosallonApp_car_id` (`car_id`),
  ADD KEY `autosallonApp_sale_user_id_4ce6c36a_fk_auth_user_id` (`user_id`),
  ADD KEY `autosallonApp_sale_worker_id_1c68f406_fk_autosallonApp_worker_id` (`worker_id`);

--
-- Indexes for table `autosallonapp_worker`
--
ALTER TABLE `autosallonapp_worker`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;

--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- AUTO_INCREMENT for table `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `autosallonapp_car`
--
ALTER TABLE `autosallonapp_car`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `autosallonapp_carimages`
--
ALTER TABLE `autosallonapp_carimages`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=140;

--
-- AUTO_INCREMENT for table `autosallonapp_category`
--
ALTER TABLE `autosallonapp_category`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `autosallonapp_contactinfo`
--
ALTER TABLE `autosallonapp_contactinfo`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `autosallonapp_distributor`
--
ALTER TABLE `autosallonapp_distributor`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `autosallonapp_dis_transaction`
--
ALTER TABLE `autosallonapp_dis_transaction`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `autosallonapp_favorite`
--
ALTER TABLE `autosallonapp_favorite`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `autosallonapp_message`
--
ALTER TABLE `autosallonapp_message`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `autosallonapp_review`
--
ALTER TABLE `autosallonapp_review`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `autosallonapp_sale`
--
ALTER TABLE `autosallonapp_sale`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `autosallonapp_worker`
--
ALTER TABLE `autosallonapp_worker`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=237;

--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Constraints for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `autosallonapp_car`
--
ALTER TABLE `autosallonapp_car`
  ADD CONSTRAINT `autosallonApp_car_category_id_a5fe2a10_fk_autosallo` FOREIGN KEY (`category_id`) REFERENCES `autosallonapp_category` (`id`);

--
-- Constraints for table `autosallonapp_carimages`
--
ALTER TABLE `autosallonapp_carimages`
  ADD CONSTRAINT `autosallonApp_carimages_car_id_214c4c93_fk_autosallonApp_car_id` FOREIGN KEY (`car_id`) REFERENCES `autosallonapp_car` (`id`);

--
-- Constraints for table `autosallonapp_contactinfo`
--
ALTER TABLE `autosallonapp_contactinfo`
  ADD CONSTRAINT `autosallonApp_contactinfo_user_id_da294bc5_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `autosallonapp_dis_transaction`
--
ALTER TABLE `autosallonapp_dis_transaction`
  ADD CONSTRAINT `autosallonApp_dis_tr_car_id_0db43809_fk_autosallo` FOREIGN KEY (`car_id`) REFERENCES `autosallonapp_car` (`id`),
  ADD CONSTRAINT `autosallonApp_dis_tr_distributor_id_8fb9ba80_fk_autosallo` FOREIGN KEY (`distributor_id`) REFERENCES `autosallonapp_distributor` (`id`);

--
-- Constraints for table `autosallonapp_favorite`
--
ALTER TABLE `autosallonapp_favorite`
  ADD CONSTRAINT `autosallonApp_favorite_car_id_b4d652b0_fk_autosallonApp_car_id` FOREIGN KEY (`car_id`) REFERENCES `autosallonapp_car` (`id`),
  ADD CONSTRAINT `autosallonApp_favorite_user_id_d096e3b4_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `autosallonapp_review`
--
ALTER TABLE `autosallonapp_review`
  ADD CONSTRAINT `autosallonApp_review_car_id_5e5bd6f6_fk_autosallonApp_car_id` FOREIGN KEY (`car_id`) REFERENCES `autosallonapp_car` (`id`),
  ADD CONSTRAINT `autosallonApp_review_user_id_883808b9_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `autosallonapp_sale`
--
ALTER TABLE `autosallonapp_sale`
  ADD CONSTRAINT `autosallonApp_sale_car_id_89c7a107_fk_autosallonApp_car_id` FOREIGN KEY (`car_id`) REFERENCES `autosallonapp_car` (`id`),
  ADD CONSTRAINT `autosallonApp_sale_user_id_4ce6c36a_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  ADD CONSTRAINT `autosallonApp_sale_worker_id_1c68f406_fk_autosallonApp_worker_id` FOREIGN KEY (`worker_id`) REFERENCES `autosallonapp_worker` (`id`);

--
-- Constraints for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

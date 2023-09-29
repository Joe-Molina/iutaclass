-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-09-2023 a las 14:06:28
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `iutaclasss`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `aula_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archivos_alumnos`
--

CREATE TABLE `archivos_alumnos` (
  `id` int(11) NOT NULL,
  `archivo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `alumno_id` int(11) DEFAULT NULL,
  `evaluacion_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archivos_docentes`
--

CREATE TABLE `archivos_docentes` (
  `id` int(11) NOT NULL,
  `archivo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `evaluacion_id` int(11) DEFAULT NULL,
  `aula_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aulas`
--

CREATE TABLE `aulas` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `materia_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `aulas`
--

INSERT INTO `aulas` (`id`, `createdAt`, `updatedAt`, `user_id`, `materia_id`) VALUES
(1, '2023-09-28 14:51:47', '2023-09-28 14:51:47', 8, 1),
(2, '2023-09-28 14:52:33', '2023-09-28 14:52:33', 8, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificaciones`
--

CREATE TABLE `calificaciones` (
  `id` int(11) NOT NULL,
  `Calificacion` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `alumno_id` int(11) DEFAULT NULL,
  `evaluacion_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carreras`
--

CREATE TABLE `carreras` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `carreras`
--

INSERT INTO `carreras` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Publicidad y Mercadeo', '2023-09-28 14:48:45', '2023-09-28 14:48:45'),
(2, 'informatica', '2023-09-28 14:48:45', '2023-09-28 14:48:45'),
(3, 'Adiministracion', '2023-09-28 14:49:06', '2023-09-28 14:49:06'),
(4, 'Comercio Exterior', '2023-09-28 14:49:06', '2023-09-28 14:49:06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evaluacion_unidads`
--

CREATE TABLE `evaluacion_unidads` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `contenido` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `aula_id` int(11) DEFAULT NULL,
  `Tipos_evaluacion_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias`
--

CREATE TABLE `materias` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `seccion` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `carrera_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `materias`
--

INSERT INTO `materias` (`id`, `name`, `seccion`, `createdAt`, `updatedAt`, `carrera_id`) VALUES
(1, 'Matematicas', 'I1SA', '2023-09-28 13:03:38', '2023-09-28 13:03:38', 2),
(2, 'Logica', 'I2SA', '2023-09-28 13:04:21', '2023-09-28 13:04:21', 2),
(3, 'Informatica basica', 'I1SA', '2023-09-28 13:05:57', '2023-09-28 13:05:57', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_evaluacions`
--

CREATE TABLE `tipos_evaluacions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userType_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `email`, `createdAt`, `updatedAt`, `userType_id`) VALUES
(3, 'joe1', '12345', 'joe13@gmail.com', '2023-09-27 12:04:33', '2023-09-27 12:04:33', 1),
(4, 'joe1', '12345', 'joe134@gmail.com', '2023-09-27 12:39:55', '2023-09-27 12:39:55', 3),
(5, 'su', '1234', 'su@gmail.com', '2023-09-27 19:08:03', '2023-09-27 19:08:03', 4),
(6, 'jose', '1234', 'jose@gmail.com', '2023-09-28 11:56:16', '2023-09-28 11:56:16', 3),
(7, 'josep', '1234', 'josep@gmail.com', '2023-09-28 11:56:43', '2023-09-28 11:56:43', 1),
(8, 'juan', '1234', 'juan@gmail.com', '2023-09-28 14:48:00', '2023-09-28 14:48:00', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_types`
--

CREATE TABLE `user_types` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user_types`
--

INSERT INTO `user_types` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Estudiante', '2023-09-27 13:56:16', '2023-09-27 13:56:16'),
(2, ' Docente', '2023-09-27 13:56:49', '2023-09-27 13:56:49'),
(3, 'Coordinador', '2023-09-27 13:57:47', '2023-09-27 13:57:47'),
(4, 'Super Usuario', '2023-09-27 13:57:57', '2023-09-27 13:57:57');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `aula_id` (`aula_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `archivos_alumnos`
--
ALTER TABLE `archivos_alumnos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `alumno_id` (`alumno_id`),
  ADD KEY `evaluacion_id` (`evaluacion_id`);

--
-- Indices de la tabla `archivos_docentes`
--
ALTER TABLE `archivos_docentes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `evaluacion_id` (`evaluacion_id`),
  ADD KEY `aula_id` (`aula_id`);

--
-- Indices de la tabla `aulas`
--
ALTER TABLE `aulas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `materia_id` (`materia_id`);

--
-- Indices de la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `alumno_id` (`alumno_id`),
  ADD KEY `evaluacion_id` (`evaluacion_id`);

--
-- Indices de la tabla `carreras`
--
ALTER TABLE `carreras`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `evaluacion_unidads`
--
ALTER TABLE `evaluacion_unidads`
  ADD PRIMARY KEY (`id`),
  ADD KEY `aula_id` (`aula_id`),
  ADD KEY `Tipos_evaluacion_id` (`Tipos_evaluacion_id`);

--
-- Indices de la tabla `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `carrera_id` (`carrera_id`);

--
-- Indices de la tabla `tipos_evaluacions`
--
ALTER TABLE `tipos_evaluacions`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userType_id` (`userType_id`);

--
-- Indices de la tabla `user_types`
--
ALTER TABLE `user_types`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `archivos_alumnos`
--
ALTER TABLE `archivos_alumnos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `archivos_docentes`
--
ALTER TABLE `archivos_docentes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `aulas`
--
ALTER TABLE `aulas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `carreras`
--
ALTER TABLE `carreras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `evaluacion_unidads`
--
ALTER TABLE `evaluacion_unidads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `materias`
--
ALTER TABLE `materias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tipos_evaluacions`
--
ALTER TABLE `tipos_evaluacions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `user_types`
--
ALTER TABLE `user_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD CONSTRAINT `alumnos_ibfk_1` FOREIGN KEY (`aula_id`) REFERENCES `aulas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `alumnos_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `archivos_alumnos`
--
ALTER TABLE `archivos_alumnos`
  ADD CONSTRAINT `archivos_alumnos_ibfk_1` FOREIGN KEY (`alumno_id`) REFERENCES `alumnos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `archivos_alumnos_ibfk_2` FOREIGN KEY (`evaluacion_id`) REFERENCES `evaluacion_unidads` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `archivos_docentes`
--
ALTER TABLE `archivos_docentes`
  ADD CONSTRAINT `archivos_docentes_ibfk_1` FOREIGN KEY (`evaluacion_id`) REFERENCES `evaluacion_unidads` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `archivos_docentes_ibfk_2` FOREIGN KEY (`aula_id`) REFERENCES `aulas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `aulas`
--
ALTER TABLE `aulas`
  ADD CONSTRAINT `aulas_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `aulas_ibfk_2` FOREIGN KEY (`materia_id`) REFERENCES `materias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  ADD CONSTRAINT `calificaciones_ibfk_1` FOREIGN KEY (`alumno_id`) REFERENCES `alumnos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `calificaciones_ibfk_2` FOREIGN KEY (`evaluacion_id`) REFERENCES `evaluacion_unidads` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `evaluacion_unidads`
--
ALTER TABLE `evaluacion_unidads`
  ADD CONSTRAINT `evaluacion_unidads_ibfk_1` FOREIGN KEY (`aula_id`) REFERENCES `aulas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `evaluacion_unidads_ibfk_2` FOREIGN KEY (`Tipos_evaluacion_id`) REFERENCES `tipos_evaluacions` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `materias`
--
ALTER TABLE `materias`
  ADD CONSTRAINT `materias_ibfk_1` FOREIGN KEY (`carrera_id`) REFERENCES `carreras` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`userType_id`) REFERENCES `user_types` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-08-2023 a las 19:08:48
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
-- Base de datos: `iutaclass`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos_aula`
--

CREATE TABLE `alumnos_aula` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `aula_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `alumnos_aula`
--

INSERT INTO `alumnos_aula` (`id`, `user_id`, `aula_id`) VALUES
(2, 5, 1),
(3, 5, 2),
(4, 5, 3),
(5, 5, 4),
(6, 5, 5),
(1, 5, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archivos_evaluacion`
--

CREATE TABLE `archivos_evaluacion` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `archivo` varchar(255) NOT NULL,
  `evaluacion_unidad_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aulas`
--

CREATE TABLE `aulas` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `materia` varchar(60) NOT NULL,
  `seccion` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `aulas`
--

INSERT INTO `aulas` (`id`, `user_id`, `materia`, `seccion`) VALUES
(1, 1, 'matematica', 'i1sa'),
(2, 2, 'filosofia', 'i1sa'),
(3, 3, 'algoritmo', 'i1sa'),
(4, 4, 'algebra', 'i1sa'),
(5, 3, 'economia', 'i2sa'),
(6, 4, 'termodinamica', 'i6sa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificaciones`
--

CREATE TABLE `calificaciones` (
  `id` int(11) NOT NULL,
  `alumno_aula_id` int(11) NOT NULL,
  `evaluacion_unidad_id` int(11) NOT NULL,
  `calificacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evaluacion_unidad`
--

CREATE TABLE `evaluacion_unidad` (
  `id` int(11) NOT NULL,
  `aula_id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `contenido` text NOT NULL,
  `tipo_evaluacion` int(11) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `fecha_culminacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(60) NOT NULL,
  `tipo_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `tipo_usuario`) VALUES
(1, 'joe', 'joe@gmail.com', '1234', 1),
(2, 'joe', 'jo@gmail.com', '1234', 1),
(3, 'juan', 'juan@gmail.com', '1234', 1),
(4, 'jefferson', 'jefferson@gmail.com', '1234', 1),
(5, 'ruben', 'ruben@gmail.com', '1234', 2),
(6, 'josber', 'josber@gmail.com', '1234', 2),
(7, 'manuel', 'manuel@gmail.com', '1234', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos_aula`
--
ALTER TABLE `alumnos_aula`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`,`aula_id`),
  ADD KEY `aula_id` (`aula_id`);

--
-- Indices de la tabla `archivos_evaluacion`
--
ALTER TABLE `archivos_evaluacion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `evaluacion_unidad_id` (`evaluacion_unidad_id`);

--
-- Indices de la tabla `aulas`
--
ALTER TABLE `aulas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `alumno_aula_id` (`alumno_aula_id`,`evaluacion_unidad_id`),
  ADD KEY `evaluacion_unidad_id` (`evaluacion_unidad_id`);

--
-- Indices de la tabla `evaluacion_unidad`
--
ALTER TABLE `evaluacion_unidad`
  ADD PRIMARY KEY (`id`),
  ADD KEY `aula_id` (`aula_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumnos_aula`
--
ALTER TABLE `alumnos_aula`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `archivos_evaluacion`
--
ALTER TABLE `archivos_evaluacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `aulas`
--
ALTER TABLE `aulas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `evaluacion_unidad`
--
ALTER TABLE `evaluacion_unidad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumnos_aula`
--
ALTER TABLE `alumnos_aula`
  ADD CONSTRAINT `alumnos_aula_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `alumnos_aula_ibfk_2` FOREIGN KEY (`aula_id`) REFERENCES `aulas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `archivos_evaluacion`
--
ALTER TABLE `archivos_evaluacion`
  ADD CONSTRAINT `archivos_evaluacion_ibfk_1` FOREIGN KEY (`evaluacion_unidad_id`) REFERENCES `evaluacion_unidad` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `aulas`
--
ALTER TABLE `aulas`
  ADD CONSTRAINT `aulas_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  ADD CONSTRAINT `calificaciones_ibfk_1` FOREIGN KEY (`evaluacion_unidad_id`) REFERENCES `evaluacion_unidad` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `calificaciones_ibfk_2` FOREIGN KEY (`alumno_aula_id`) REFERENCES `alumnos_aula` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `evaluacion_unidad`
--
ALTER TABLE `evaluacion_unidad`
  ADD CONSTRAINT `evaluacion_unidad_ibfk_1` FOREIGN KEY (`aula_id`) REFERENCES `aulas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-09-2023 a las 21:24:18
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alumnos_aula`
--

INSERT INTO `alumnos_aula` (`id`, `user_id`, `aula_id`) VALUES
(2, 5, 1),
(4, 5, 3),
(6, 5, 5),
(13, 5, 9),
(14, 5, 10),
(16, 6, 1),
(12, 6, 9),
(17, 7, 1),
(11, 7, 5),
(8, 7, 7),
(18, 8, 1),
(7, 8, 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archivos_evaluacion`
--

CREATE TABLE `archivos_evaluacion` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `archivo` varchar(255) NOT NULL,
  `alumno_id` int(11) NOT NULL,
  `evaluacion_unidad_id` int(11) NOT NULL,
  `Calificacion` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `archivos_evaluacion`
--

INSERT INTO `archivos_evaluacion` (`id`, `descripcion`, `archivo`, `alumno_id`, `evaluacion_unidad_id`, `Calificacion`) VALUES
(1, 'descripcion', 'archivo-iuta1694101829136-874738663.sql', 2, 2, 3),
(2, 'descripcion', 'archivo-iuta1694176232131-317859913.sql', 2, 1, 6),
(3, 'hola', 'archivo-iuta1694176588512-442783179.sql', 16, 2, 0),
(4, 'descripcion', 'archivo-iuta1694176692150-314644114.sql', 16, 1, 11),
(5, 'descripcion', 'archivo-iuta1694176756291-342964796.sql', 12, 4, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aulas`
--

CREATE TABLE `aulas` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `materia` varchar(60) NOT NULL,
  `seccion` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `aulas`
--

INSERT INTO `aulas` (`id`, `user_id`, `materia`, `seccion`) VALUES
(1, 1, 'matematica', 'i1sa'),
(3, 3, 'algoritmo', 'i1sa'),
(5, 3, 'economia', 'i2sa'),
(7, 4, 'fisica', 'i5da'),
(8, 1, 'ingles', 'i3sa'),
(9, 1, 'informatica', 'i2da'),
(10, 1, 'logistica', 'i4sa');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `evaluacion_unidad`
--

INSERT INTO `evaluacion_unidad` (`id`, `aula_id`, `titulo`, `contenido`, `tipo_evaluacion`, `fecha_creacion`, `fecha_culminacion`) VALUES
(1, 1, 'CALCULO 1', 'ASI SE AHCE UNA SUMA MIRA 1 + 1 = 3', 1, '2023-08-30', '2023-09-15'),
(2, 1, 'Calculo 2', 'Menti 1 + 1 = 4 pipipipi', 1, '2023-08-30', '2023-09-22'),
(3, 8, 'verbo to be', '¿Qué es el verbo to be?\r\nEl verbo to be es el verbo más utilizado en la lengua inglesa y también el más importante. Se utiliza como verbo principal y como auxiliar, y es irregular en pasado y en presente. Tiene 4 significados aunque los principales son ser y estar. Los cuatro significados son:\r\n\r\nSer.\r\nEstar.\r\nHaber.\r\nPoder.\r\n\r\nI am a tall person. (Yo soy una persona alta).\r\nShe is sad. (Ella está triste).\r\nThere are four chairs in the room. (Hay cuatro sillas en la clase).\r\nYou are not to open your mouth in the meeting. (No puedes abrir la boca en el meeting).\r\n¿Cómo se usa el verbo to be?\r\nAl empezar a estudiar inglés encontrarás muchas frases que llevan el verbo to be, con significados diferentes, y podría resultar un poco difícil diferenciarlos. En general, verás el verbo to be usado de dos maneras:\r\n\r\nVerbo principal\r\nEl verbo to be aparecerá solo cuando sea el verbo que de sentido a la frase.\r\nEjemplos:\r\n\r\nThe car is red. (El coche es rojo)\r\nThere is a snake over there. (Hay una serpiente allí)', 1, '0000-00-00', '2023-09-14'),
(4, 9, 'inf basica', 'asdasd', 0, '0000-00-00', '2023-09-21'),
(5, 10, 'logistica 1', 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 1, '0000-00-00', '2023-09-18');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(7, 'manuel', 'manuel@gmail.com', '1234', 2),
(8, 'josee', 'josee@gmail.com', '1234', 2);

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
  ADD KEY `evaluacion_unidad_id` (`evaluacion_unidad_id`),
  ADD KEY `alumno_id` (`alumno_id`);

--
-- Indices de la tabla `aulas`
--
ALTER TABLE `aulas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `archivos_evaluacion`
--
ALTER TABLE `archivos_evaluacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `aulas`
--
ALTER TABLE `aulas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `evaluacion_unidad`
--
ALTER TABLE `evaluacion_unidad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

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
  ADD CONSTRAINT `archivos_evaluacion_ibfk_1` FOREIGN KEY (`evaluacion_unidad_id`) REFERENCES `evaluacion_unidad` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `archivos_evaluacion_ibfk_2` FOREIGN KEY (`alumno_id`) REFERENCES `alumnos_aula` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `aulas`
--
ALTER TABLE `aulas`
  ADD CONSTRAINT `aulas_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `evaluacion_unidad`
--
ALTER TABLE `evaluacion_unidad`
  ADD CONSTRAINT `evaluacion_unidad_ibfk_1` FOREIGN KEY (`aula_id`) REFERENCES `aulas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

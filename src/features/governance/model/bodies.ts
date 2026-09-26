export const BODIES = [
  {
    name: "Junta Directiva 2023 – 2025",
    description: "Órgano de administración permanente, encargado de la dirección estratégica del fondo.",
    headers: ["Titular", "Suplente"] as const,
    rows: [
      ["Silvio de Jesús Salcedo Franco", "Gina Paola Vergel Arévalo"],
      ["Ronny Alonso Canabal López", "Danyela Lizzeth Muñoz Castañeda"],
      ["Sharikh Dayana Tocarruncho Munevar", "Juan Pablo Blanco Vargas"],
      ["Guillermo Andrés Vela Beltrán", "María Patricia Domínguez Orjuela"],
    ],
  },
  {
    name: "Revisoría Fiscal",
    description: "Vigilancia independiente de la gestión contable y el cumplimiento normativo.",
    headers: ["Principal", "Suplente"] as const,
    rows: [
      ["Myriam Moreno Ramírez", "Cecilia Pérez Álvarez"],
    ],
  },
  {
    name: "Comité de Control Social 2023 – 2025",
    description: "Veeduría de los asociados sobre el funcionamiento del fondo.",
    headers: ["Principales", "Suplentes"] as const,
    rows: [
      ["Diana Yamile Martínez Riaño", "Sonia Marcela Clavijo Gutiérrez"],
      ["Libni Magdiel Villamil Aguirre", "Marcela Sarmiento Trigos"],
      ["Rosa Elena Díaz Giraldo", "Claudia Patricia Cruz Amezquita"],
    ],
  },
  {
    name: "Comité de Apelaciones 2023 – 2025",
    description: "Conoce y resuelve recursos de los asociados frente a decisiones internas.",
    headers: ["Principales", "Suplentes"] as const,
    rows: [
      ["Alejandro Pérez Reyes", "Silvia Dahiana Pita Torres"],
      ["Nohora Liliana Nieto Torres", "—"],
    ],
  },
] as const;

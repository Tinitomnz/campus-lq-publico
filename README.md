# Campus LQ — página pública

Versión depurada del ZIP original. Conserva el diseño azul, verde y el escudo del index principal. Un solo index.html, sin copias numeradas, sin dependencias ni compilación.

## Subir a GitHub
1. Crear un repositorio nuevo `campus-lq-publico`, separado de `campus-lq-admins`.
2. Descomprimir el ZIP entregado.
3. Add file → Upload files. Arrastrar TODOS los archivos y la carpeta assets, no el ZIP ni una carpeta contenedora. index.html debe quedar en la raíz.
4. Commit changes.

## Publicar en la misma cuenta de Cloudflare
Compute → Workers & Pages → Create application → Continue to Pages → Import an existing Git repository. Autorizar el nuevo repositorio.
- Project name: campus-lq (si está disponible).
- Production branch: main.
- Framework preset: None.
- Build command: exit 0.
- Build output directory: .
- Root directory: sin modificar.
- Environment variables: ninguna.
Save and Deploy. Usar la dirección pages.dev asignada. No hace falta comprar dominio. El proyecto de administración ya publicado continúa separado.

## Qué se cambió
- Se eliminaron las secciones duplicadas Propuesta y Categorías y las cinco copias de index.
- Se reemplazó el texto de captación/cobros/convenio con el complejo por información para alumnos y familias.
- Se destacaron jugadores de clubes, inferiores y reserva.
- WhatsApp para cada plan, contacto, horarios y acceso flotante.
- Dirección/mapa e Instagram conservados desde index (4).html.
- Sección de Lautaro Quintero con la información confirmada: exjugador y responsable de la propuesta. No se inventaron clubes, títulos ni logros.
- Se quitaron promesas de torneos, beneficios y charlas no confirmadas.
- Horarios de referencia sin tarjeta de Miércoles sin actividad.
- Menú móvil accesible, texto legible, título y descripción para buscadores; logo como archivo local.

## Datos para revisar antes de difundir
El ZIP contiene tarifas mensuales ($40.000, $60.000, $80.000, $100.000) en versiones alternativas; el principal solo decía valores referenciales. Se muestran como referencia mensual, sin prometer importe vigente.
Confirmar con Lautaro: precios, periodicidad, duración de sesión, si personalizado es individual o grupo reducido, grilla de horarios, dirección Salta 1485 y contacto 11 2887 8508. El sitio invita a consultar estos detalles.
Instagram original: @lautyquinteross. Nombre del entrenador usado: Lautaro Quintero, como lo informó el usuario.
No se incluyeron fotos ni una trayectoria detallada porque no fueron suministradas. Se conserva el escudo real.

## Editar más adelante
En index.html están todos los textos, precios, horarios y links de contacto. styles.css controla el diseño. app.js abre/cierra el menú móvil. assets/escudo.jpg es el escudo original.
Al guardar un cambio en la rama main, Cloudflare vuelve a publicar automáticamente.
Los planes de esta web pública y el catálogo de la administración se actualizan por separado: esta web no lee Supabase ni contiene datos de alumnos.

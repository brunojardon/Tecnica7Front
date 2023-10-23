'use strict';
(function(){
    var core;
    function init(){
        var theme = {
          primary: '#3f51b5',
          secondary: '#FF6F00',
          tertiary: '#f39722',
          accent: '#e91e63',
          error: '#f44336',
          warning: '#ffeb3b',
          info: '#607d8b',
          success: '#8bc34a'
        };
        var docRoot = "/";
        core = new Vue({
            el: '#app',
            vuetify: new Vuetify(theme),
            data(){
              return {
                theme: theme,
                docRoot: docRoot,
                dialog: true,
                logo: docRoot+"imagenes/logo-eest7.png",
                cover:{
                    srcDefault: docRoot+"imagenes/header.jpg",
                    src: docRoot+"imagenes/header.jpg",
                    color: '',
                    textColor: '',
                    height: '',
                    width: '',
                    contain: false,
                    text:''
                },
                title: "EEST7",
                menu: false,
                header:{
                    color: theme.primary,
                    menuColor: theme.secondary,
                    links:[
                        {
                            texto:'Página Principal',
                            href: docRoot,
                            subItems:[]
                        },
                        {
                            texto:'Inicio Ciclo Lectivo 2023',
                            href: '',
                            subItems:[
                               /* {texto: 'Declaración Jurada', href:docRoot+"ciclo2021.php"},*/         /* Ya no se utiliza declaracion jurada */
                                {texto:'Listados Primer Año 2023', href: docRoot+'listados1ros.php'},
                            ]
                        },
                        /* {
                             texto:'Pre Inscripción',
                             href: 'https://docs.google.com/forms/d/e/1FAIpQLSc3kcuude-awTTXjCTkfjOtxyyjPBm5jprVNn7F9my-MHnKpw/viewform',
                             subItems:[]
                         },*/
                        {
                            texto:'Alumnos',
                            href: '',
                            subItems:[
                                    {texto:'Alumnos', href: docRoot+'alumnos'},
                                    {texto:'Equivalencias', href: docRoot+'cbt-equivalencias.php'},
                                    {texto:'Intensificación 2022', href: docRoot+'cs-intensificacion.php'},
                                    ]
                        },
                        /*{
                            texto:'Blogs',
                            subItems:[
                                {texto:'Ciclo Básico Curricular', href: 'https://eest7-continuidad-cbc.blogspot.com/'},
                                {texto:'Ciclo Básico Taller', href: 'https://eest7-continuidad-cbt.blogspot.com/'},
                                {texto:'Administración Curricular', href: 'https://eest7-continuidad-ado.blogspot.com'},
                                {texto:'Administración Taller', href: 'https://eest7-continuidad-adot.blogspot.com'},
                                {texto:'Informática Curricular', href: 'https://eest7-continuidad-ipp.blogspot.com'},
                                {texto:'Informática Taller', href: 'https://eest7-continuidad-ippt.blogspot.com'},
                                {texto:'Programación Curricular', href: 'https://eest7-continuidad-prog.blogspot.com'},
                                {texto:'Programación Taller', href: 'https://eest7-continuidad-progt.blogspot.com'},
                            ]
                        },*/
                        {
                            texto:'Calendario',
                            href: docRoot+'calendario.php',
                            subItems:[]
                        },
                        {
                        texto:'Docentes',
                            href: '',
                            subItems:[
                                {texto:'Novedades y Comunicados', href: docRoot+'docentes-novedades.php'},
                            ]
                        },
                        // {
                        //     texto:'Madres/Padres/Tutores',
                        //     href: docRoot+'madres-padres-tutores',
                        //     subItems:[]
                        // },
                        // {
                        //     texto:'Docentes',
                        //     href: docRoot+'docentes',
                        //     subItems:[]
                        // },
                        // {
                        //     texto:'Ex Alumnos',
                        //     href: docRoot+'exalumnos',
                        //     subItems:[]
                        // },
                        {
                            texto:'Ciclo Básico',
                            href: '',
                            subItems:[
                                {texto:'Novedades y Comunicados', href: docRoot+'cbt-novedades.php'},
                                {texto:'Ciclo Básico Técnico', href: docRoot+'cbt.php'},
                            ]
                        },
                        {
                            texto:'Ciclo Superior',
                            subItems:[
                                {texto:'Administración', href: docRoot+'administracion.php'},
                                {texto:'Informática', href: docRoot+'informatica.php'},
                                {texto:'Programación', href: docRoot+'programacion.php'},
                            ]
                        },
                        /*{
                            texto:'Micro Sitios',
                            href:docRoot+'micrositios.php',
                            subItems:[]
                        },
                        {
                            texto:'Informes',
                            subItems:[
                                {texto:'Inscripción', href:docRoot+'inscripcion.php'},
                                {texto:'Calendario', href:docRoot+'calendario.php'},
                            ]
                        },*/
                        {
                            texto:'Contáctenos',
                            subItems:[
                                {texto:'Ubicación', href:docRoot+'ubicacion.php'},
                                {texto:'Contacto', href:docRoot+'contacto.php'},
                            ]
                        },
                    ]
                },
                footer: {
                    color: theme.primary,
                    links:[
                        {texto:'CBT', href:docRoot+'cbt.php'},
                        {texto:'Informática', href:docRoot+'informatica.php'},
                        {texto:'Administración', href:docRoot+'administracion.php'},
                        {texto:'Programación', href:docRoot+'programacion.php'},
                        {texto:'Calendario', href:docRoot+'calendario.php'},
                        {texto:'Ubicación', href:docRoot+'ubicacion.php'},
                        {texto:'Contacto', href:docRoot+'contacto.php'},
                        {texto:'Politicas de Privacidad', href:docRoot+'politicas.php'},
                    ],
                },
                mainCards:[
                    {
                        title:"Soy Alumno",
                        desc:"Si estás actualmente cursando, todo lo que necesitás se encuentra en esta sección!.",
                        img:"http://via.placeholder.com/640x360",
                        href:docRoot+"alumnos",
                        buttonText:"Explorar"
                    },
                    {
                        title:"Soy Madre/Padre/Tutor",
                        desc:"Estemos comunicados. Información, medios de contacto, formularios, trámites, y más.",
                        img:"http://via.placeholder.com/640x360",
                        href:docRoot+"madres-padres-tutores",
                        buttonText:"Ver"
                    },
                    {
                        title:"Soy Ex Alumno",
                        desc:"Si te recibiste, necesitás el pase, ó tenés que dar previas. Encontrá lo que necesitás.",
                        img:"http://via.placeholder.com/640x360",
                        href:docRoot+"docentes",
                        buttonText:"Ver"
                    },
                    {
                        title:"Soy Docente",
                        desc:"Si sos docente, vas a encontrar en esta sección, formularios, contactos, comunicados y más.",
                        img:"http://via.placeholder.com/640x360",
                        href:docRoot+"docentes",
                        buttonText:"Ver"
                    }
                ],
                interestCards:[
                    {
                        title:"Soy Alumno",
                        color:'',
                        dark:false,
                        desc:"Si estás actualmente cursando, todo lo que necesitás se encuentra en esta sección!.",
                        img:"http://via.placeholder.com/640x360",
                        href:docRoot+"alumnos",
                        buttonText:"Explorar",
                        target: ''

                    },
                    {
                        title:"Calendario",
                        color:'',
                        dark:false,
                        desc:"En esta sección encontrarás nuestra agenda escolar y  próximos eventos.",
                        img:"http://via.placeholder.com/640x360",
                        href:docRoot+"calendario.php",
                        buttonText:"Explorar",
                        target: ''

                    },
                    /*{
                        title:"Buscá tu Email",
                        color:theme.primary,
                        dark:true,
                        desc:"Si sos Alumno, buscá tu correo institucional o el correo de tu profe acá",
                        href: "https://search.eest7.com",
                        target: 'blank',
                        buttonText:"Buscar Correo",
                    },*/
                    {
                        title:"Encuentra a tus <br> Preceptores",
                        color:theme.accent,
                        dark:true,
                        desc:"Si sos Alumno, buscá quienes son tus preceptores y los email donde contactarlos ",
                        href: "https://tecnica7jhpreceptores.000webhostapp.com/",
                        target: 'blank',
                        buttonText:"Buscar Preceptores",
                    },
                    {
                        title:"Blogs y Micro Sitios",
                        color:'',
                        dark:false,
                        desc:"En esta sección encontrarás blogs y sitios de interés.",
                        img:"http://via.placeholder.com/640x360",
                        href:docRoot+"micrositios.php",
                        buttonText:"Explorar",
                        target: ''

                    },
                ],
                mainCallsToActions:[
                    /*{
                        title:"Declaración jurada <br> de salud",
                        color: theme.primary,
                        dark:true,
                        desc:"Los alumnos deberán descargar y traer firmada la declaración jurada de salud, la misma tiene una validez por 48hs.",
                        href: docRoot+"ciclo2021.php",
                        target: '',
                        buttonText:"Ver más",
                        buttonColor:theme.tertiary,
                    },*/
                    /* {
                        title:"LUNES 15-05",
                        color: theme.primary,
                        dark:true,
                        desc:"Apertura del Kiosco/Buffet",
                        href: docRoot+"calendario.php",
                        target: 'blank',
                        buttonText:"Más Información",
                        buttonColor: theme.tertiary,
                    },*/
                    /*{
                        title:"VIERNES 07 JULIO",
                        color: theme.primary,
                        dark:true,
                        desc:"LA ESCUELA PERMANECERA CERRADA POR DUELO",
                        href: docRoot+"calendario.php",
                        target: 'blank',
                        buttonText:"Más Información",
                        buttonColor: theme.tertiary,
                    },*/
                   /*{
                        title:"Inicio Ciclo lectivo <br>2023",
                        color: theme.primary,
                        dark:true,
                        desc:"Inicio clases y listados alumnos ingresantes 1er año 2023",
                        href: docRoot+"calendario.php",
                        target: 'blank',
                        buttonText:"Calendario",
                        buttonColor: theme.tertiary,
                    },*/
              
                    {
                        title:"MESAS PREVIOS<br>AGOSTO 2023",
                        color: theme.secondary,
                        dark:true,
                        desc:"Inscripción del 31 de Julio al 07 de Agosto. Las comisiones evaluadoras según calendario serán del 14 al 18 de AGOSTO. SOLO FINALIZACION DE CARRERA",
                        href: "https://forms.gle/VDdq1JkBLYuCNkdf7",
                        target: 'blank',
                        buttonText:"Inscribirme",
                        buttonColor: theme.accent,
                    },
                     {
                        title:"CICLO BÁSICO <br>INTEGRADORES",
                        color: theme.accent,
                        dark:true,
                        desc:"Accede a los contenidos de integradoras de Ciclo Básico Técnico.",
                        href: docRoot+"cbt-novedades.php",
                        target: 'blank',
                        buttonText:"Ver Más",
                        buttonColor: theme.primary,
                    },
                    {
                        title:"CICLO BÁSICO <br>EQUIVALENCIAS",
                        color: theme.primary,
                        dark:true,
                        desc:"Accede a los contenidos de previas/equivalencias de Ciclo Básico Técnico.",
                        href: docRoot+"cbt-equivalencias.php",
                        target: 'blank',
                        buttonText:"Más Información",
                        buttonColor:theme.tertiary,
                    },
                     {
                        title:"INTENSIFICACI&Oacute;N",
                        color: theme.accent,
                        dark:true,
                        desc:"Accede al material para la Intensificación 2022 de CBT, IPP, PROG y ADO, tanto de materias de taller como curriculares técnicas.",
                        href: docRoot+"cs-intensificacion.php",
                        target: 'blank',
                        buttonText:"Más Información",
                        buttonColor: theme.tertiary,
                    },
                ], 
                microSitios:[
                    {
                        title: "Hardware 4to",
                        desc: "Concepto de Hardware y Software. Breves antecedentes históricos. El sistema computadora personal basado en microprocesador.",
                        img: docRoot+"imagenes/micrositios/hardware.jpg",
                        href: "https://sites.google.com/tecnica7.edu.ar/4tohardware",
                        tags: ['ipp', 'prog']
                    },
                    /*{
                        title:'Programación de Video Juegos',
                        desc: "7mo Programación está preparando una sorpresa para vos. ¿Are you ready?",
                        href: '',
                        img: "",
                        tags: []
                    },
                    {
                        title:'Ciclo Básico Curricular',
                        desc: "El blog de tu especialidad y curso. Un canal para estar conectados y cerca tuyo. Encontrá tu curso y explorá el contenido.",
                        href: 'https://eest7-continuidad-cbc.blogspot.com/',
                        img: "",
                        tags: []
                    },
                    {
                        title:'Ciclo Básico Taller',
                        desc: "El blog de tu especialidad y curso. Un canal para estar conectados y cerca tuyo. Encontrá tu curso y explorá el contenido.",
                        href: 'https://eest7-continuidad-cbt.blogspot.com/',
                        img: "",
                        tags: []
                    },
                    {
                        title:'Administración Curricular',
                        desc: "El blog de tu especialidad y curso. Un canal para estar conectados y cerca tuyo. Encontrá tu curso y explorá el contenido.",
                        href: 'https://eest7-continuidad-ado.blogspot.com',
                        img: "",
                        tags: []
                    },
                    {
                        title:'Administración Taller',
                        desc: "El blog de tu especialidad y curso. Un canal para estar conectados y cerca tuyo. Encontrá tu curso y explorá el contenido.",
                        href: 'https://eest7-continuidad-adot.blogspot.com',
                        img: "",
                        tags: []
                    },
                    {
                        title:'Informática Curricular',
                        desc: "El blog de tu especialidad y curso. Un canal para estar conectados y cerca tuyo. Encontrá tu curso y explorá el contenido.",
                        href: 'https://eest7-continuidad-ipp.blogspot.com',
                        img: "",
                        tags: []
                    },
                    {
                        title:'Informática Taller',
                        desc: "El blog de tu especialidad y curso. Un canal para estar conectados y cerca tuyo. Encontrá tu curso y explorá el contenido.",
                        href: 'https://eest7-continuidad-ippt.blogspot.com',
                        img: "",
                        tags: []
                    },
                    {
                        title:'Programación Curricular',
                        desc: "El blog de tu especialidad y curso. Un canal para estar conectados y cerca tuyo. Encontrá tu curso y explorá el contenido.",
                        href: 'https://eest7-continuidad-prog.blogspot.com',
                        img: "",
                        tags: []
                    },
                    {
                        title:'Programación Taller',
                        desc: "El blog de tu especialidad y curso. Un canal para estar conectados y cerca tuyo. Encontrá tu curso y explorá el contenido.",
                        href: 'https://eest7-continuidad-progt.blogspot.com',
                        img: "",
                        tags: []
                    },*/
                ],
                paginas:{
                    home:{
                      /*  banner:{
                            message:`Los alumnos deberán descargar y traer firmada la declaración jurada de salud, la misma tiene una validez por 48hs.`,
                            actionText: "Descargar",
                            href: docRoot+"ciclo2021.php",
                            target: ''
                        }*/
                    },
                    alumnos: {
                        horarios: [
                            {
                                texto:'Ciclo Básico (CBT)',
                                href:docRoot+'cbth.php'
                            },
                            {
                                texto:'Administración (ADO)',
                                href:docRoot+'adoh.php'
                            },
                            {
                                texto:'Informática (IPP)',
                                href:docRoot+'ipph.php'
                            },
                            {
                                texto:'Programación (PROG)',
                                href:docRoot+'progh.php'
                            }
                        ],
                     /*   blogs: [
                            {texto:'Ciclo Básico Curricular', href: 'https://eest7-continuidad-cbc.blogspot.com/'},
                            {texto:'Ciclo Básico Taller', href: 'https://eest7-continuidad-cbt.blogspot.com/'},
                            {texto:'Administración Curricular', href: 'https://eest7-continuidad-ado.blogspot.com'},
                            {texto:'Administración Taller', href: 'https://eest7-continuidad-adot.blogspot.com'},
                            {texto:'Informática Curricular', href: 'https://eest7-continuidad-ipp.blogspot.com'},
                            {texto:'Informática Taller', href: 'https://eest7-continuidad-ippt.blogspot.com'},
                            {texto:'Programación Curricular', href: 'https://eest7-continuidad-prog.blogspot.com'},
                            {texto:'Programación Taller', href: 'https://eest7-continuidad-progt.blogspot.com'},
                        ],*/
                        interestCards:[
                            /* {
                                 title:"Pre Inscripción <br>Ciclo Lectivo 2021",
                                 color:theme.accent,
                                 dark:true,
                                 desc:"Completá el siguiente formulario",
                                 href: "https://docs.google.com/forms/d/e/1FAIpQLSc3kcuude-awTTXjCTkfjOtxyyjPBm5jprVNn7F9my-MHnKpw/viewform",
                                 target: 'blank',
                                 buttonText:"Inscribirme",

                             },*/
                            /*{
                                title:"Ciclo Básico<br>Actividades n°7 <br>finales del taller",
                                color:theme.primary,
                                dark:true,
                                desc:"Alumnos de 1°, 2° y 3° años, se encuentran disponibles las actividades n°7 finales del taller. <strong>Fecha de entrega 13/11</strong>",
                                href: docRoot+"cbt-novedades.php",
                                target: '',
                                buttonText:"Descargar Actividades",

                            },*/
                            {
                                title:"Equivalencia 2022 <br> Ciclo Básico",
                                color:theme.primary,
                                dark:true,
                                desc:"Fecha de entrega a confirmar. Vayan trabajando los cuadernillos. Próximamente los preceptores avisaran cómo y cuándo se entregaran",
                                href: "https://www.tecnica7.edu.ar/cbt-equivalencias.php",
                                target: 'blank',
                                buttonText:"Descargar Cuadernillos",

                            },
                            {
                                title:"Intensificación 2022 <br> Ciclo Superior",
                                color:theme.primary,
                                dark:true,
                                desc:"Fecha de entrega a confirmar. Vayan trabajando los cuadernillos.",
                                href: "https://www.tecnica7.edu.ar/cs-intensificacion.php",
                                target: 'blank',
                                buttonText:"Descargar Cuadernillos",

                            },
                            {
                                title:"Buscá tu Email",
                                color:theme.primary,
                                dark:true,
                                desc:"Si sos Alumno, buscá tu correo institucional o el correo de tu profe acá",
                                href: "https://search.eest7.com",
                                target: 'blank',
                                buttonText:"Buscar Correo",
                            },
                        ],
                    }
                },
                widgets:{
                    newsList:{
                        items:[
                            { header: 'Más Recientes' },
                            { divider: true, inset: true },
                            {
                              avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                              title: 'Ejemplo de titulo',
                              subtitle: "<span class='text--primary'>Directora Mariana</span> los certificados serán entregados ....",
                            },
                            {
                              avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                              title: 'Ejemplo de titulo',
                              subtitle: "<span class='text--primary'>Directora Mariana</span> los bolsones de comida ....",
                            },
                            {
                              avatar: docRoot+"imagenes/logo-eest7.png",
                              title: 'Ejemplo de titulo',
                              subtitle: "<span class='text--primary'>Secretaria</span> los docentes recibiran la nueva circular ",
                            },
                          ]
                    }
                }
              }
            }
        });
        window._core = core;
    };
    window.onload = init;
})();


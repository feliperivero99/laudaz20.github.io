var userLang = navigator.language || navigator.userLanguage;



function myspanish() {
	Cookies.set("idiom", "es");
	document.getElementById( 'flageng' ).style.display = 'block';
	document.getElementById( 'flagspa' ).style.display = 'none';
	$("#aboutli").text("Acerca");
	$("#servicesli").text("Servicios");
	$("#portli").text("Portafolio");
	$("#histoli").text("Historia");
	$("#introlead").text("Bienvenidos a mi Estudio!");
	$("#introhead").text("Es un placer");
	$("#tellmore").text("Dime Más");
	$("#sectheadabout").text("Acerca de mi");
	$("#sectheadabout2").text("Información Personal");
	$("#textoabout").text("En lo profesional, ingeniero en informática.  Siempre me he movido entre el desarrollo (web y de aplicaciones) como la ciencia de datos.  Mi pasatiempo es el de escribir, me gusta investigar sobre temas que me llaman la atención y redactar pequeños ensayos. A veces, escribo historias de ficción");
    $("#setservicesh2").text("Servicios");
	$("#setservicesh3").text("Mis perfiles laborales");
	$("#setservicesh4").text("Desarrollador Web");
	$("#setservicesh5").text("Durante mis primeros años en el mundo profesional trabaje como desarrollador frontend y backend. Trabajando con: HTML, JavaScript, CSS, Php, Ruby on Rails,Yii Framework,bootstrap, Angular.js. ");
	$("#setservicesh6").text("Cientifico de Datos");
	$("#setservicesh7").text("Como científico de datos trabajo mezclando estadisticas, informatica y mucha creatividad. En este apartado he trabajado con R y Python");
	$("#setservicesh8").text("Creador de Contenidos");
	$("#setservicesh9").text("Me gusta escribir como programar,  Por ello lleno mis blogs personales con mis escritos y codigos de programas que he realizado para compartirlos.");
	$("#portfolioset1").text("Portafolio");
	$("#portfolioset2").text("Mis proyectos");
	$("#secthisto1").text("Historia");
	$("#secthisto2").text("Mi evolucion");
	$("#secthisto3").text("Mis estudios: Ingenieria en Informatica");
	$("#secthisto4").text("Inicie mis estudios en la Universidad Nacional Experimental del Tachira, cursando la carrera de Ingenieria en Informatica. Donde aprendi los  fundamentos de la ciencia de la computación, la ingeniería electrónica y la ingeniería de software. ");
	$("#secthisto5").text("Primer empleo:  ERPcontable");
	$("#secthisto6").text("Durante el 2012 obtuve mi primer empleo donde ejerci el papel de desarrollador de aplicaciones utilzando la herramienta Velneo. Tambien ejerci el papel de desarrollador web, helpdesk y soporte ");
	$("#secthisto7").text("Tiempos de cambios: Can Polit");
	$("#secthisto8").text("A finales de 2014 decidir cambiar de perfil laboral, enfocando a trabajar en desarrollo web utilizando herramientas como Ruby on Rails, Bootstrap, etc.");
	$("#secthisto9").text("Evolucionando: Agropezim");
	$("#secthisto10").text("Empece  una nueva aventura,  ejerciendo mas el aspecto gerencial de la carrera al encargarme de supervisar la implementacion de la herramienta  Odoo dentro de la organización. Ademas empece adentrarme en el mundo de la Data Sciences");
	$("#secthisto11").text("Ubiot");
	$("#secthisto12").text("Ubiot Siendo una subsidiaria de Agropezim,  mi perfil ha estado enfocado exclusivamente en el trabajo como cientifico de datos (data scientist). Ocasionalmente participando en proyectos de desarrollo web");
	$("#secthisto13").text("Ubiot");
	$("#secthisto14").text("Una vez mas me enfoque al desarrollo web, fui el desarrollador principal del sitio web Rentadvisor, pagina dedicada al alquiler de inmuebles en Chile");
	$("#secthisto15").text("Desarrollo Web - Wordpress");
	$("#secthisto16").text("Dedicado al desarrollo web con wordpress y ruby on rails freelance realizando mas de 6 proyectos durante todo el año.  Fui responsable del desarrollo completo y de cada fase del proyecto de cada pagina web en los cuales participe");
	$("#secthisto17").text("Se parte de mi Historia");
	$("#metodo1").text("Metodologia SCRUM");
	$("#metodo2").text("Scrum es el nombre con el que se denomina a los marcos de desarrollo ágiles. Es un proceso en el que se aplican de manera regular un conjunto de buenas prácticas para trabajar colaborativamente, en equipo y obtener el mejor resultado posible de proyectos, caracterizado por: Adoptar una estrategia de desarrollo incremental, en lugar de la planificación y ejecución completa del producto. Basar la calidad del resultado más en el conocimiento tácito de las personas en equipos auto organizados, que en la calidad de los procesos empleados. Solapamiento de las diferentes fases del desarrollo, en lugar de realizar una tras otra en un ciclo secuencial o en cascada");
	$("#metodo3").text("Metodologia de trabajo");
	$("#metodo4").text("Expandir");
	$("#experitica1").text("Lenguajes y Herramientas");
	$("#experitica2").text("Lenguajes ");
	$("#experitica3").text("Herramientas");
	
	$("#experitica4").text("Base de datos / Cloud");
	$("#portfolioset3").text("Desarrollo Web Con Wordpress");
	$("#portfolioset4").text("Desarrollo Web Con Wordpress");
	$("#portfolioset6").text("Desarrollo Web Con Wordpress");
	$("#portfolioset7").text("Desarrollo Web Con Laravel");
	$("#portfolioset8").text("Desarrollo Web Con Laravel");
	$("#portfolioset9").text("Desarrollo Web Con Laravel");
	$("#textmodal1").text("Desarrollo Web Con Wordpress");
	$("#textmodal2").text("Desarrollo de una pagina web para la empresa LivingGreen, especializada en servicios de limpieza de inmuebles");
	$("#textmodal3").text("Año: 2019");
	$("#textmodal4").text("Cliente: LivingGreen");
	$("#textmodal5").text("Categoria: Desarrollo Web");
	$(".camcerrar").text("Cerrar");
	$("#textmodal6").text("Desarrollo Web Con Wordpress");
	$("#textmodal8").text("Año: 2019");
	$("#textmodal9").text("Cliente: Evolve Miami Beach");
	
	$("#textmodal10").text("Desarrollo Web Con Wordpress");
	$("#textmodal11").text("Desarrollo Web Con Laravel");
	$("#textmodal12").text("Parte del grupo de desarrollo encargado de crear un sistema de manejo de campañas de marketing y ventas a clientes en linea  para la compañia Santa Rita");
	$("#textmodal13").text("Año: 2019");
	$("#textmodal14").text("Cliente: Santa Rita");
	$("#textmodal15").text("Categoria: Desarrollo Web");
	$("#textmodal16").text("Desarrollo Web Con Wordpress");
	$("#textmodal17").text("Miembro del grupo de desarrollo de la landing page para la empresa The MIC of America. Mi rol fue desarrollador front end, con algunas responsabilidades como backend");
	$("#textmodal18").text("Año: 2019");
	$("#textmodal19").text("Cliente: The Mic of America");
	$("#textmodal20").text("Categoria: Desarrollo Web");
	$("#textmodal21").text("Desarrollo Web Con Java y Spring Tool Suite");
	$("#textmodal22").text("Año: 2019");
	$("#textmodal23").text("Cliente: Mexperience");
	$("#textmodal25").text("Miembro del grupo de desarrollo del CMS MEXperiencia para la administracion de clientes. Mi role principal fue de desarrollador backend usando el framework Spring Tool Suite");
	
	$("#textmodal26").text("Desarrollo Web Con Laravel");
	$("#textmodal27").text("Año: 2019");
	$("#textmodal28").text("Cliente: Valle Grande");
	$("#textmodal29").text("Categoria: Desarrollo Web");
	$("#textmodal30").text("Utilizando laravel se creo un sistema de admin para la actualización de la pagina, ademas, se modifico el estilo entero del sitio web");
	
	$("#textmodal31").text("Desarrollo Web Con Laravel");
	$("#textmodal32").text("Sistema de control de inscripciones y evaluaciones para cursos en linea,  se controla los procesos de evaluacion, clases y asistenciade alumnos, genera estadisticas");
	
	$("#textmodal33").text("Año: 2019");
	$("#textmodal34").text("Cliente: Protege");
	$("#textmodal35").text("Categoria: Desarrollo Web");
	
	$("#textmodal36").text("Desarrollo Web Con Wordpress");
	
	
	$("#textmodal37").text("Pagina del PSG para Estados Unidos, pagina enfocada en proporcionar informacion sobre  academias de futbol para niños y adolescentes.  Mi rol ha sido el de actualizar y hacer cambios en las pagina");
	$("#textmodal38").text("Año: 2019");
	$("#textmodal39").text("Cliente: PSG academy");
	$("#textmodal40").text("Categoria: Desarrollo Web");
	$('.curriculumesp').css('display','block');
	$('.curriculumeng').css('display','none');
	
	}

function myenglish() {
    Cookies.set("idiom", "en");
	document.getElementById( 'flageng' ).style.display = 'none';
	document.getElementById( 'flagspa' ).style.display = 'block';
	$("#aboutli").text("About");
	$("#servicesli").text("Services");
	$("#portli").text("Portfolios");
	$("#histoli").text("History");
	$("#introlead").text("Welcome to my Studio!");
	$("#introhead").text("It's a pleasure");
	$("#tellmore").text("Tell more");
	$("#sectheadabout").text("About");
	$("#sectheadabout2").text("Personal Information");
	$("#textoabout").text("In my professional life I am a software engineer working mostly as Web developer and Data Scientist My hobby is writing, I love to read and enjoy the internet");
	$("#setservicesh2").text("Services");
	$("#setservicesh3").text("Professional Profile");
	$("#setservicesh4").text("Web Developer");
	$("#setservicesh5").text("I have been working in web development for almost 8 years in the  frontend and backend areas.  I have been working with: HTML, JavaScript, CSS, Php, Ruby on Rails,Yii Framework,bootstrap, Wordpress, Angular.js. ");
	$("#setservicesh6").text("Data Scientist");
	$("#setservicesh7").text("I have been working as Data Scientist, My main project in this areas is my college Thesis is about aplying Data mining on criminal statistics using R and Python");
	$("#setservicesh8").text("Content Creator");
	$("#setservicesh9").text("I love to write as I love coding, I had run severals blogs and I like to answers questions on Quora and Reddit.");
	$("#portfolioset1").text("Portfolio");
	$("#portfolioset2").text("My Projects");	
	$("#secthisto1").text("History");
	$("#secthisto2").text("My Evolution");
	$("#secthisto3").text("My Studies: Software Engineering");
	$("#secthisto4").text("My academics studies started in the University of Tachira, The career I choose to study was Software engineering where I learned  the fundamentals of Computer Science, Web development, Coding and software Development");
	$("#secthisto5").text("My First Job:  ERPcontable");
	$("#secthisto6").text("During 2012 I worked in my first Job as Application Developer using the spanish framework Velneo.  During those days I also work as web developer improving the company's website, I did helpdesk and client support");
	$("#secthisto7").text("My second job: Can Polit");
	$("#secthisto8").text("In 2014 I change jobs and became full web developer working in several websites using Ruby on Rails, Bootstrap, Responsive desing and more");
	$("#secthisto9").text("Next step: Agropezim");
	$("#secthisto10").text("I started a  new adventure when I was hired to supervised the deployment of Odoo ERP in Agropezim.  And became junior engineering on the Data Science projects of the company");
    $("#secthisto11").text("Ubiot");
	$("#secthisto12").text("During this year I invested most of my time working in data science projects. Sometimes I lead web development inside the company");
	$("#secthisto13").text("Ubiot");	
	$("#secthisto14").text("Once again became a full web developer working with wordpress. Leading the development of Rentadvisor's website with the purpose of renting houses in Chile");
	$("#secthisto15").text("Web Development - Wordpress");
	$("#secthisto16").text("Dedicated to web development with wordpress and ruby ​​on rails freelance making more than 6 projects throughout the year. I was responsible for the complete development and each phase of the project of each web page in which I participated");
	$("#secthisto17").text("Be part of my history");
	$("#metodo1").text("Scrum Methodology");
	$("#metodo2").text("Scrum is an agile framework for managing knowledge work, with an emphasis on software development, although it has wide application in other fields and is slowly starting to be explored by traditional project teams more generally. It is designed for teams of three to nine members, who break their work into actions that can be completed within timeboxed iterations, called sprints, no longer than one month and most commonly two weeks, then track progress and re-plan in 15-minute time-boxed stand-up meetings, called daily scrum");
	$("#metodo3").text("Work Methodology");
	$("#metodo4").text("See More");
	$("#experitica1").text("Languages and Tools");
	$("#experitica2").text("Languages");
	
	$("#experitica3").text("Tools");
	
	$("#experitica4").text("Database / Cloud");
	$("#portfolioset3").text("Web Development with Wordpress");
	$("#portfolioset4").text("Web Development with Wordpress");
	$("#portfolioset6").text("Web Development with Wordpress");
	$("#portfolioset7").text("Web Development with Laravel");
	$("#portfolioset8").text("Web Development With Laravel");
	$("#portfolioset9").text("Web Development With Laravel");
	$("#portfolioset10").text("See More");
	$("#textmodal1").text("Web Development with Wordpress");
	
	$("#textmodal2").text("Development of a website for LivingGreenn, specialized in real estate cleaning services");
	$("#textmodal3").text("Year: 2019");
	$("#textmodal4").text("Client: LivingGreen");
	$("#textmodal5").text("Category: Web Development");
	$(".camcerrar").text("Close");
	$("#textmodal6").text("Web Development with Wordpress");
	$("#textmodal7").text("The wordpress theme were updated, it was made desing changes and the site was optimized in order to be responsive.");
	$("#textmodal8").text("Year: 2019");
	$("#textmodal9").text("Client: Evolve Miami Beach");
	$("#textmodal10").text("Category: Web Development");
	$("#textmodal1").text("Category: Web Development");
	$("#textmodal11").text("Web Development with Laravel");
	$("#textmodal12").text("Part of the development group in charge of creating a marketing and sales campaign management system for online customers for the Santa Rita company");
	$("#textmodal13").text("Year: 2019");
	$("#textmodal14").text("Client: Santa Rita");
	$("#textmodal15").text("Category: Web Development");
	$("#textmodal16").text("Web Development with Wordpress");
	$("#textmodal18").text("Year: 2019");
	$("#textmodal19").text("Client: The Mic of America");
	$("#textmodal20").text("Category: Web Development");
	$("#textmodal17").text("Member of the development group of the landing page for the company The MIC of America. My role was front end developer, with some responsibilities as a backend");
	
	$("#textmodal21").text("Web Development with Java and Spring Tool suite");
	$("#textmodal22").text("Year: 2019");
	$("#textmodal23").text("Client: Mexperience");
	$("#textmodal24").text("Web Development with Java");
	$("#textmodal25").text("Member of the CMS MEXperience development group for client management. My main role was developer backend using the Spring Tool Suite framework");
	
	
	$("#textmodal26").text("Web Development With Laravel");
	$("#textmodal27").text("Year: 2019");
	$("#textmodal28").text("Client: Valle Grande");
	$("#textmodal29").text("Category: Web Development");
	
	$("#textmodal30").text("Using laravel, an admin system was created for updating the page, and the entire style of the website was modified.");
	
	$("#textmodal31").text("Web Development With Laravel");
	$("#textmodal32").text("Registration and evaluation control system for online courses, the evaluation processes, classes and student attendance are managed, statistics are generated");
	$("#textmodal33").text("Year: 2019");
	$("#textmodal34").text("Client: Protege");
	$("#textmodal35").text("Category: Web Development");
	$("#textmodal37").text("PSG website for the United States, page focused on providing information on soccer academies for children and adolescents. My role has been to update and make changes in the pages");
	
	
	$("#textmodal36").text("Web Development with Wordpress");
	$("#textmodal38").text("Year: 2019");
	$("#textmodal39").text("Client: PSG academy");
	$("#textmodal40").text("Category: Web Development");
	$('.curriculumesp').css('display','none');
	$('.curriculumeng').css('display','block');

}






$(document).ready(function() {
	
   console.log(Cookies.get("idiom"));
   
   if(Cookies.get("idiom")){
		if(Cookies.get("idiom") == "es"){
			myspanish();
   
		}else{
			myenglish(); 
   
		}
   
   }else{
	    if(userLang.split('-')[0] == "es"){
			myspanish();
   
		}else{
			myenglish(); 
   
		}
   
   }
   
   
   
 
   
   
   
});

 $('#flagspa').click(function(){
	   myspanish();
	   
   });
   
    $('#flageng').click(function(){
	   myenglish();
	   
   });
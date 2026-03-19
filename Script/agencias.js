const centros = {
  Camarones: [
    {
      nombre: "02 Insurgentes",
      direccion: "Av. Insurgentes Centro 132, Tabacalera, Cuauhtémoc, 06030 Ciudad de México, CDMX",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235.1570625871232!2d-99.15836898121235!3d19.43343675468941!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f922d9adaa8d%3A0xb2b86688908e1583!2sVento%20Motorcycles%20U.S.A%20Insurgentes!5e0!3m2!1ses-419!2smx!4v1769018709595!5m2!1ses-419!2smx"
    },
    {
      nombre: "03 Condesa",
      direccion: "Av. Insurgentes Sur 393, Hipódromo, Cuauhtémoc, 06100 Ciudad de México, CDMX",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d470.3832980583428!2d-99.1676265!3d19.4095375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff572efba3ab%3A0xe129e1adb857aa03!2sVento%20Motorcycles%20U.S.A%20Condesa!5e0!3m2!1ses-419!2smx!4v1769018436735!5m2!1ses-419!2smx"

    },
    {
      nombre: "04 San Angel",
      direccion: "Dr. Elguero 16, San Ángel, Álvaro Obregón, 01000 Ciudad de México, CDMX",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235.28719994991337!2d-99.191141!3d19.3433642!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201c2fe81a419%3A0xa5f834a120386e31!2sVento%20Motorcycles%20U.S.A%20San%20%C3%81ngel!5e0!3m2!1ses-419!2smx!4v1769018861849!5m2!1ses-419!2smx" 
    },
    {
      nombre: "05 Tlalnepantla",
      direccion: "Av. Dr. Gustavo Baz 250 B, Miguel Hidalgo, 54060 Tlalnepantla, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d279.08460543817847!2d-99.2084029!3d19.5288225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21da8faa8d03d%3A0x5cf2e0e357a137ad!2sVento%20Motorcycles%20U.S.A%20Tlalnepantla!5e1!3m2!1ses-419!2smx!4v1769018930077!5m2!1ses-419!2smx"
    },
    {
      nombre: "09 Nicolas Romero",
      direccion: "C. Primera de Mayo 108, Hidalgo, 54434 Cdad. Nicolás Romero, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d234.88604775902215!2d-99.3154846!3d19.6197393!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2190963642751%3A0x886d9fd7a453508c!2sVento%20Motorcycles%20U.S.A%20Nicol%C3%A1s%20Romero!5e0!3m2!1ses-419!2smx!4v1769018983833!5m2!1ses-419!2smx"
    },
    {
      nombre: "10 Atizapán",
      direccion: "5 de Mayo 2A, Atizapan Centro, 52900 Cdad. López Mateos, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4464.498843091013!2d-99.2453629!3d19.5597241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21d2b6e9a56c7%3A0xdb26a6576c91f6a!2sVento%20Motorcycles%20U.S.A%20Atizap%C3%A1n%20de%20Zaragoza!5e1!3m2!1ses-419!2smx!4v1769019065590!5m2!1ses-419!2smx"
    },
    {
      nombre: "13 La Villa",
      direccion: "Calz de Guadalupe 145-Local E, Valle Gómez, Cuauhtémoc, 06240 Ciudad de México, CDMX",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15047.624247762535!2d-99.12691003991002!3d19.45961653032908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f9329dee12bd%3A0x6b6ecd827176396f!2sVento%20Motorcycles%20U.S.A%20La%20Villa!5e0!3m2!1ses-419!2smx!4v1769019192084!5m2!1ses-419!2smx" 
    },
    {
      nombre: "21 Vallejo",
      direccion: "Calz. Vallejo 1577, Ampliación Progreso Nacional, Gustavo A. Madero, 07650 Ciudad de México, CDMX",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235.03547608981484!2d-99.1624931!3d19.5172298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f91249aedb67%3A0xa2d847d347b883e8!2sVento%20Motorcycles%20U.S.A%20Vallejo!5e0!3m2!1ses-419!2smx!4v1769020008009!5m2!1ses-419!2smx"
    },
    {
      nombre: "28 Naucalpan",
      direccion: "Perif. Blvd. Manuel Ávila Camacho Manzana 011 Local 1, San Andres Atoto, 53500 Naucalpan de Juárez, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d940.4296748790466!2d-99.2265774!3d19.4676914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d203b3b9ea023b%3A0x729cf98ac8c24f4a!2sVento%20Motorcycles%20U.S.A%20Naucalpan!5e0!3m2!1ses-419!2smx!4v1769020060131!5m2!1ses-419!2smx" 
    },
    {
      nombre: "29 Oceania",
      direccion: "Av Oceanía 219, Pensador Mexicano, Venustiano Carranza, 15510 Ciudad de México, CDMX",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235.1456214079196!2d-99.0929794!3d19.4413364!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fbd076142333%3A0xdcd7ad6094a9d166!2sVento%20Motorcycles%20U.S.A%20Ocean%C3%ADa!5e0!3m2!1ses-419!2smx!4v1769020132804!5m2!1ses-419!2smx" 
    },
    {
      nombre: "30 Tecamachalco",
      direccion: "Fuente de Tritones 24, Lomas de Tecamachalco, 53950 Naucalpan de Juárez, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15050.398729001317!2d-99.22772623025196!3d19.42969508833043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d203a104b96a29%3A0x1e5579c59462118c!2sVento%20Motorcycles%20U.S.A%20Tecamachalco!5e0!3m2!1ses-419!2smx!4v1769020453509!5m2!1ses-419!2smx" 
    },
    {
      nombre: "31 La Cúspide",
      direccion: "Avenida Lomas Verdes 1200, La Cuspide, 53126 Mexico, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7521.290224449972!2d-99.2696987!3d19.5138985!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d203405def4e41%3A0x3254a96f13a6a3b!2sVento%20Motorcycles%20U.S.A%20La%20C%C3%BAspide!5e0!3m2!1ses-419!2smx!4v1769020517353!5m2!1ses-419!2smx" 
    },
    {
      nombre: "56 La Pastora",
      direccion: "Av. Puerto Mazatlan 173, Jorge Negrete, Gustavo A. Madero, 07280 Ciudad de México, CDMX",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d470.0424622508239!2d-99.1411764!3d19.5270243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f972934540d5%3A0x575e1333d5d61d0c!2sVento%20Motorcycles%20U.S.A%20La%20Pastora!5e0!3m2!1ses-419!2smx!4v1769020569045!5m2!1ses-419!2smx" 
    },
    {
      nombre: "76 Rio de los Remedios",
      direccion: "023, San Juan Ixhuatepec, 54180 Tlalnepantla, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.1320095382614!2d-99.10962239999999!3d19.518931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f900275e6e3b%3A0xe887463496232f5a!2sVento%20Motorcycles%20U.S.A%20R%C3%ADo%20de%20los%20Remedios!5e0!3m2!1ses-419!2smx!4v1769020618446!5m2!1ses-419!2smx" 
    },
    {
      nombre: "82 Insurgentes Sur",
      direccion: "Av. Insurgentes Sur 3771, La Fama, Tlalpan, 14268 Ciudad de México, CDMX",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d470.7187294373349!2d-99.1796834!3d19.2932422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce01007c36e37d%3A0xb95e0a98bdcb48c0!2sVento%20Motorcycles%20U.S.A%20Insurgentes%20Sur!5e0!3m2!1ses-419!2smx!4v1769020704544!5m2!1ses-419!2smx" 
    },
    {
      nombre: "83 Centenario",
      direccion: "Av. Centenario 2103, Pueblo de Santiago Atzacoalco, Gustavo A. Madero, 07040 Ciudad de México, CDMX",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235.05952879395224!2d-99.0943031!3d19.500681!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fb0065386dd7%3A0xf5a4b48d593ba388!2sVento%20Motorcycles%20U.S.A%20Centenario!5e0!3m2!1ses-419!2smx!4v1769020756016!5m2!1ses-419!2smx"
    },
    {
      nombre: "107 Vasco de Quiroga",
      direccion: "Vasco de Quiroga 1504-O, La Mexicana, Álvaro Obregón, 01250 Ciudad de México, CDMX",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.675995582767!2d-99.2347709!3d19.383177099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2010071654091%3A0xe1f0504a46640f3d!2sVento%20Motorcycles%20U.S.A%20Vasco%20de%20Quiroga!5e0!3m2!1ses-419!2smx!4v1769020841535!5m2!1ses-419!2smx" 
    },
    {
      nombre: "129 San Bernabe",
      direccion: "Av. San Jerónimo 2648, San Bernabé Ocotepec, La Magdalena Contreras, 10300 Ciudad de México, CDMX",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.3388926388775!2d-99.2592068!3d19.311095299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdff0064833157%3A0x9add148f29181902!2sVento%20Motorcycles%20U.S.A%20San%20Bernab%C3%A9!5e0!3m2!1sen!2smx!4v1769020945767!5m2!1sen!2smx" 
    },
    {
      nombre: "151 Casas Alemán",
      direccion: "Puerto Tuxpan 63, Casas Alemán, Gustavo A. Madero, 07580 Ciudad de México, CDMX",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.517614503254!2d-99.0814693!3d19.476354099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fb003d1ea9fb%3A0x1daf0f9831e68861!2sVento%20Motorcycles%20U.S.A%20Casas%20Alem%C3%A1n!5e0!3m2!1ses-419!2smx!4v1769021006844!5m2!1ses-419!2smx" 
    },
    {
      nombre: "153 Azcapotzalco",
      direccion: "Av. Cuitláhuac 3368, Jardín Azpeitia, Azcapotzalco, 02530 Ciudad de México, CDMX",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d940.4217961544898!2d-99.1753741!3d19.4690493!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f90044dc3f65%3A0x6e5668729ad9c15!2sVento%20Motorcycles%20U.S.A%20Azcapotzalco!5e0!3m2!1sen!2smx!4v1769021215761!5m2!1sen!2smx" 
    },
    {
      nombre: "154 Atizapán II",
      direccion: "Carr. Atizapán Villa Nicolás Romero 29, Lomas Lindas, 52947 Cdad. López Mateos, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d939.820460092666!2d-99.2566723!3d19.572422499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21d0050fb5c5f%3A0x871ce3b233e5d530!2sVento%20Motorcycles%20U.S.A%20Atizap%C3%A1n%20II!5e0!3m2!1sen!2smx!4v1769021273110!5m2!1sen!2smx" 
    },
    {
      nombre: "155 Tacuba",
      direccion: "Calzada México-Tacuba 638 Tacuba, Popotla, 11400 CDMX",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.946011124714!2d-99.183178!3d19.4578944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f90023ad41d9%3A0x24c0a6f15cbdaadc!2sVento%20Motorcycles%20U.S.A%20Tacuba!5e0!3m2!1ses-419!2smx!4v1769021310203!5m2!1ses-419!2smx" 
    },
    {
      nombre: "156 San Andres Totoltepec",
      direccion: "Carr. Federal A Cuernavaca 6235, San Andrés Totoltepec, Tlalpan, 14659 Ciudad de México, CDMX",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d470.8230749250098!2d-99.178163!3d19.2569275!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce01007d688fb1%3A0xd2a87b51de6e49da!2sVento%20Motorcycles%20U.S.A%20San%20Andr%C3%A9s%20Totoltepec!5e0!3m2!1ses-419!2smx!4v1769021371664!5m2!1ses-419!2smx" 
    },
    {
      nombre: "235 Portal Centenario",
      direccion: "Prol. 5 de Mayo 3121, Lomas de Tarango, Álvaro Obregón, 01618 Ciudad de México, CDMX",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d941.0446220610506!2d-99.2211377!3d19.3614227!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201dd3a5f2a15%3A0xe90e27bfbb57721e!2sVento%20Motorcycles%20U.S.A%20Portal%20Centenario!5e0!3m2!1ses-419!2smx!4v1769021416796!5m2!1ses-419!2smx" 
    },
    {
      nombre: "257 Las Armas",
      direccion: "Calz. de Las Armas 56, Ribera de Echegaray, 53330 Naucalpan de Juárez, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.2812709143172!2d-99.2175547!3d19.486531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d203e3c2f9a4bf%3A0x3fec1a17c8dbc428!2sVento%20Motorcycles%20U.S.A%20Las%20Armas!5e0!3m2!1ses-419!2smx!4v1769021468528!5m2!1ses-419!2smx" 
    },
    {
      nombre: "268 Picacho Ajusco",
      direccion: "Carr. Picacho-Ajusco 575, Lomas de Padierna, Tlalpan, 14240 Ciudad de México, CDMX",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d390.38753111633315!2d-99.21724710611747!3d19.2917404723143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdffd52b9bb14d%3A0xae5b552b72a8fd95!2sVento%20Motorcycles%20U.S.A%20Picacho%20Ajusco!5e0!3m2!1ses-419!2smx!4v1769021623994!5m2!1ses-419!2smx" 
    }
  ],

  Chalco: [
    {
      nombre: "01 Rojo Gomez",
      direccion: "Av. Javier Rojo Gomez 597, Dr Alfonso Ortiz Tirado, Iztapalapa, 09020 Ciudad de México, CDMX",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3763.6394835378296!2d-99.0771108!3d19.3847569!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fd3396f5f379%3A0x74190bd371034a98!2sVento%20Motorcycles%20U.S.A%20Rojo%20G%C3%B3mez!5e0!3m2!1ses-419!2smx!4v1769023025348!5m2!1ses-419!2smx" 
    },
    {
      nombre: "07 Nezahualcóyotl",
      direccion: "Av. Adolfo López Mateos 673, Benito Juárez, 57000 Cdad. Nezahualcóyotl, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d940.7342119828434!2d-99.0200752!3d19.4151344!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fd6a309ff44d%3A0xb65a9ad0592edd10!2sVento%20Motorcycles%20U.S.A%20Nezahualc%C3%B3yotl!5e0!3m2!1ses-419!2smx!4v1769023134217!5m2!1ses-419!2smx" 
    },
    {
      nombre: "08 Chimalhuacán",
      direccion: "Av. del Peñon 325, Tejedores, 56330 Chimalhuacán, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d940.6793654802257!2d-98.9687587!3d19.4246099!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e3e32868aa75%3A0x5c07baaa01d5e8c5!2sVento%20Motorcycles%20U.S.A%20Chimalhuac%C3%A1n!5e0!3m2!1ses-419!2smx!4v1769024597437!5m2!1ses-419!2smx"
    },
    {
      nombre: "14 Tláhuac",
      direccion: "Av. Tlahuac 4764, Cerro de la Estrella, Iztapalapa, 09860 Ciudad de México, CDMX",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235.32180988020298!2d-99.0784409!3d19.3193415!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce03dcc5d6ad43%3A0xc930e071fac7acae!2sVento%20Motorcycles%20U.S.A%20Tl%C3%A1huac!5e0!3m2!1ses-419!2smx!4v1769024799403!5m2!1ses-419!2smx" 
    },
    {
      nombre: "22 Valle de Chalco",
      direccion: "Av Cuauhtémoc Norte 20, Concepción, 56615 Valle de Chalco Solidaridad, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.35169027020225!2d-98.94903242408341!3d19.29857843347697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1d09451dcedb%3A0xfc7737dbdb21e126!2sVento%20Motorcycles%20U.S.A%20Valle%20de%20Chalco!5e0!3m2!1ses-419!2smx!4v1769024954151!5m2!1ses-419!2smx" 
    },
    {
      nombre: "23 Acatitla",
      direccion: "Calz. Ignacio Zaragoza 2929, Santa Martha Acatitla, Iztapalapa, 09510 Ciudad de México, CDMX",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15056.38668433068!2d-99.00655189439252!3d19.36496640964085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e34ad2bfd2cd%3A0xa434dc47e8564e01!2sVento%20Motorcycles%20U.S.A%20Acatitla!5e0!3m2!1ses-419!2smx!4v1769025001050!5m2!1ses-419!2smx" 
    },
    {
      nombre: "24 Texcoco",
      direccion: "Av Juárez Sur 369, San Lorenzo, 56140 Texcoco de Mora, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235.05050638658022!2d-98.8831589!3d19.5068902!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e7ee272258ad%3A0xd9460c609792c2f3!2sVento%20Motorcycles%20U.S.A%20Texcoco!5e0!3m2!1ses-419!2smx!4v1769025051931!5m2!1ses-419!2smx"
    },
    {
      nombre: "25 Chalco",
      direccion: "Calle Enseñanza Técnica 5, Centro, 56600 Chalco de Díaz Covarrubias, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235.4041296501082!2d-98.8984378!3d19.2620877!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1fba80e16d69%3A0x7ae6587b2180a02b!2sVento%20Motorcycles%20U.S.A%20Chalco!5e0!3m2!1ses-419!2smx!4v1769025126969!5m2!1ses-419!2smx" 
    },
    {
      nombre: "35 Puebla Sur",
      direccion: "C. 16 de Septiembre 10550, Arboledas de Loma Bella, 72474 Heroica Puebla de Zaragoza, Pue.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d471.58785388326544!2d-98.2292688!3d18.9887271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfb99d3975bfd1%3A0x8b6b56f5c1bcc984!2sVento%20Motorcycles%20U.S.A%20Puebla%20Sur!5e0!3m2!1ses-419!2smx!4v1769025181310!5m2!1ses-419!2smx" 
    },
    {
      nombre: "39 Los Volcanes",
      direccion: "Av. 31 Pte. 1315, Los Volcanes, 72410 Heroica Puebla de Zaragoza, Pue.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d942.8975957295152!2d-98.2155413!3d19.0377632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc1535afd7293%3A0x6061ba0493c83768!2sVento%20Motorcycles%20U.S.A%20Puebla%20Los%20Volcanes!5e0!3m2!1ses-419!2smx!4v1769025238397!5m2!1ses-419!2smx" 
    },
    {
      nombre: "40 Nezahualcoyotl Oriente",
      direccion: "Imploración Manzana 499, Col. Aurora Oriente, 57000 Cdad. Nezahualcóyotl, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235.21317361987758!2d-98.9911549!3d19.3946497!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e34ed941c75b%3A0x234a9cf7328bdd8c!2sVento%20Motorcycles%20U.S.A%20Nezahualc%C3%B3yotl%20Oriente!5e0!3m2!1ses-419!2smx!4v1769025298098!5m2!1ses-419!2smx" 
    },
    {
      nombre: "57 Chicoloapan",
      direccion: "Carr. Federal Texcoco-México Km 27, Revolucion, 56390 Chicoloapan de Juárez, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d470.3961148117948!2d-98.9267281!3d19.4051062!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e30053bb7679%3A0x693107fd9a4c71a6!2sVento%20Motorcycles%20U.S.A%20Chicoloapan!5e0!3m2!1ses-419!2smx!4v1769025342795!5m2!1ses-419!2smx" 
    },
    {
      nombre: "65 Ermita",
      direccion: "Ermita Iztapalapa 870, Sta Bárbara, Iztapalapa, 09000 Ciudad de México, CDMX",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7528.59683181428!2d-99.1121852!3d19.3562272!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3ed1b47301%3A0x71bbc73a1332f9cf!2sVento%20Motorcycles%20U.S.A%20Ermita!5e0!3m2!1ses-419!2smx!4v1769025387127!5m2!1ses-419!2smx" 
    },
    {
      nombre: "67 Xochimilco",
      direccion: "Av. Guadalupe I. Ramírez 182, San Marcos, Xochimilco, 16050 Ciudad de México, CDMX",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d470.80087992322655!2d-99.1098987!3d19.2646574!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0100030037fd%3A0x3b931aabbeb2427c!2sVento%20Motorcycles%20U.S.A%20Xochimilco!5e0!3m2!1ses-419!2smx!4v1769025431420!5m2!1ses-419!2smx" 
    },
    {
      nombre: "75 Ermita Santa Cruz",
      direccion: "Ermita Iztapalapa 2741-2, Col. Pueblo de, Santa Cruz Meyehualco, Iztapalapa, 09700 Ciudad de México, CDMX",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235.2883898045382!2d-99.0457911!3d19.3425388!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce03004f5e76ed%3A0xac6347750b7dacc8!2sVento%20Motorcycles%20U.S.A%20Ermita%20Santa%20Cruz!5e0!3m2!1ses-419!2smx!4v1769025481607!5m2!1ses-419!2smx" 
    },
    {
      nombre: "88 Puebla Capu",
      direccion: "Blvd. Norte, Blvd. Héroes del 5 de Mayo 2523-1, entre calle 23 norte y 27 norte, Zona Sin Asignación de Nombre de Col 1, 72050 Heroica Puebla de Zaragoza, Pue.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d942.6928564118227!2d-98.2008124!3d19.0737848!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc1003c40e36d%3A0x838914d50c22c55!2sVento%20Motorcycles%20U.S.A%20Puebla%20CAPU!5e0!3m2!1ses-419!2smx!4v1769025535092!5m2!1ses-419!2smx" 
    },
    {
      nombre: "105 Atlixco",
      direccion: "Blvd. 19 Ote. 0, Blvd. 19 Ote. O Blvd. Niños Héroes 810, Área de la la Alfonsina, 74290 Atlixco, Pue.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1887.3978269559186!2d-98.4321487!3d18.8961445!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfb3eed8058bc1%3A0x4534cb538cae3cbe!2sVento%20Motorcycles%20U.S.A%20Atlixco!5e0!3m2!1ses-419!2smx!4v1769025585206!5m2!1ses-419!2smx" 
    },
    {
      nombre: "112 Neza-Raúl Romero",
      direccion: "Av. Texcoco 8, Raul Romero, 57630 Cdad. Nezahualcóyotl, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235.21349764399278!2d-99.0439592!3d19.3944255!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fd00613ba609%3A0x759c850215990a51!2sVento%20Motorcycles%20U.S.A%20Ra%C3%BAl%20Romero!5e0!3m2!1ses-419!2smx!4v1769025629413!5m2!1ses-419!2smx"   
    },
    {
      nombre: "113 Maravillas",
      direccion: "Av. Chimalhuacán 91-MZ 019, Maravillas, 57410 Cdad. Nezahualcóyotl, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d940.7115257668196!2d-99.0463637!3d19.4190543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fd00568db621%3A0xaed69c5f49571ff0!2sVento%20Motorcycles%20U.S.A%20Maravillas!5e0!3m2!1ses-419!2smx!4v1769025703936!5m2!1ses-419!2smx" 
    },
    {
      nombre: "121 Chalco-Cuautzingo",
      direccion: "Av. Nacional 4, 56640 San Gregorio Cuautzingo, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.346719219236!2d-98.85192579999999!3d19.2672827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1f003dcb3c4b%3A0xbb0f4e448157aaf7!2sVento%20Motorcycles%20U.S.A%20Chalco%20Cuautzingo!5e0!3m2!1sen!2smx!4v1769025788820!5m2!1sen!2smx" 
    },
    {
      nombre: "123 Chalco-Mixquic",
      direccion: "Mixquic - Chalco Parcela 12, Marco Antonio Sosa Balderas, 56600 Chalco de Díaz Covarrubias, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.8230681290756!2d-98.9059075!3d19.2465413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce190051cbe497%3A0x56bc603ac2a417c2!2sVento%20Motorcycles%20U.S.A%20Chalco%20Mixquic!5e0!3m2!1sen!2smx!4v1769025828884!5m2!1sen!2smx" 
    },
    {
      nombre: "128 Ayotla",
      direccion: "Av. Cuauhtémoc 55, Ayotla, 56560 Ixtapaluca, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d285.24199216182956!2d-98.92680127144979!3d19.313520701522766!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1d005bd1a743%3A0x3746dbc95b5408e!2sVento%20Motorcycles%20U.S.A%20Ayotla!5e0!3m2!1ses-419!2smx!4v1769025881312!5m2!1ses-419!2smx" 
    },
    {
      nombre: "130 Las Margaritas",
      direccion: "Av. San Baltazar 3232, Centro Comercial Bodega Aurrera, Valle del Sol, 72560 Heroica Puebla de Zaragoza, Pue.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d279.9679216122835!2d-98.1875052!3d19.0109347!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc1007928a8c1%3A0x9c8f86ddb3a1aea0!2sVento%20Motorcycles%20U.S.A%20Las%20Margaritas!5e1!3m2!1ses-419!2smx!4v1769025934750!5m2!1ses-419!2smx" 
    },
    {
      nombre: "131 Tehuacán",
      direccion: "Av. Reforma Sur 330, Centro de la Ciudad, 75700 Tehuacán, Pue.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2247.0656439342292!2d-97.3948332!3d18.459564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c5bd004730d077%3A0xa36a19c40c26865d!2sVento%20Motorcycles%20U.S.A%20Tehuac%C3%A1n!5e1!3m2!1ses-419!2smx!4v1769029339612!5m2!1ses-419!2smx" 
    },
    {
      nombre: "137 Peñon",
      direccion: "Av. del Peñon Manzana 01 Lote 03, San Miguel, 56335 Chimalhuacán, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4468.097110244716!2d-98.9356648!3d19.429332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e30017d463fd%3A0x80e14346d019f790!2sVento%20Motorcycles%20U.S.A%20Pe%C3%B1%C3%B3n!5e1!3m2!1sen!2smx!4v1769029401128!5m2!1sen!2smx" 
    },
    {
      nombre: "143 Tlaxcala",
      direccion: "Guillermo Valle 94, COL, Centro, 90000 Tlaxcala de Xicohténcatl, Tlax.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d558.8566308977531!2d-98.2256375!3d19.3288921!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfd961e92498ed%3A0x39bd380e0cb0414a!2sVento%20Motorcycles%20U.S.A%20Tlaxcala!5e1!3m2!1ses-419!2smx!4v1769029444554!5m2!1ses-419!2smx" 
    },
    {
      nombre: "145 Plaza Castillotla",
      direccion: "C. 11 Sur 13501, Zona Sin Asignación de Nombre de Col 73, PLAZA CASTILLOTLA, 72498 Heroica Puebla de Zaragoza, Pue.",
      mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15091.864145768372!2d-98.25672006666716!3d18.97710730179744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfb90058f88483%3A0xb6cf004978e014bc!2sVento%20Motorcycles%20U.S.A%20Plaza%20Castillotla!5e0!3m2!1ses-419!2smx!4v1769029504521!5m2!1ses-419!2smx" 
    },
    {
      nombre: "146 Chiautempan",
      direccion: "Av. Ignacio Picazo Nte. 20, San Onofre, Centro, 90800 Santa Ana Chiautempan, Tlax.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.32654376022256!2d-98.19430097134861!3d19.31605348721371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfdf0012cd00a9%3A0x7378125bb55ce005!2sVento%20Motorcycles%20U.S.A%20Chiautempan!5e0!3m2!1ses-419!2smx!4v1769029607432!5m2!1ses-419!2smx" 
    },
    {
      nombre: "147 Chalco-Solidaridad",
      direccion: "Av. Solidaridad 1801, Covadonga, 56607 Chalco de Díaz Covarrubias, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.0602117292833!2d-98.9113335!3d19.2797476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1f005c87c6a7%3A0x19617b321b5ee460!2sVento%20Motorcycles%20U.S.A%20Chalco%20Solidaridad!5e0!3m2!1sen!2smx!4v1769029778939!5m2!1sen!2smx"
    },
    {
      nombre: "161 Santa Cecilia",
      direccion: "Av. Tlahuac 7341, Santa Cecilia, Tláhuac, 13010 Ciudad de México, CDMX",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d941.5128893373676!2d-99.0093937!3d19.280124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1dadc850239d%3A0xe637d53613b01dd!2sVento%20Motorcycles%20U.S.A%20Santa%20Cecilia!5e0!3m2!1ses-419!2smx!4v1769029824314!5m2!1ses-419!2smx" 
    },
    {
      nombre: "162 Chiconcuac",
      direccion: "Av. 16 de septiembre 1477, San Pablito Calmimilolco, 56272 Chiconcuac de Juárez, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3759.5439882507767!2d-98.9104368!3d19.5611818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e959189067b9%3A0x74a71890a8fac3f5!2sVento%20Motorcycles%20U.S.A%20Chiconcuac!5e0!3m2!1ses-419!2smx!4v1769029867399!5m2!1ses-419!2smx" 
    },
    {
      nombre: "166 Los Reyes la Paz",
      direccion: "Río Bravo 56, El Salado, 56525 La Magdalena Atlicpac, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d470.50269243944587!2d-98.955465!3d19.36822!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e30034c2c01f%3A0x27ef17409523292c!2sVento%20Motorcycles%20U.S.A%20Los%20Reyes%20La%20Paz!5e0!3m2!1ses-419!2smx!4v1769029914027!5m2!1ses-419!2smx" 
    },
    {
      nombre: "174 Cholula",
      direccion: "Av. 12 Ote. 609, Barrio de Jesús Tlatempa, 72770 Cholula de Rivadavia, Pue.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d471.3728398619261!2d-98.2995035!3d19.0644974!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc7287678f6a1%3A0x447e4a6804dfadbc!2sVento%20Motorcycles%20U.S.A%20Cholula!5e0!3m2!1sen!2smx!4v1769030010317!5m2!1sen!2smx" 
    },
    {
      nombre: "177 Amecameca",
      direccion: "Manzana 001, Amecameca, 56900 Amecameca, State of Mexico",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15078.449751289045!2d-98.77029757566106!3d19.12465090338359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce3d0075a97ea3%3A0xc5fef726b2d180c5!2sVento%20Motorcycles%20U.S.A%20Amecameca!5e0!3m2!1sen!2smx!4v1769030061739!5m2!1sen!2smx" 
    },
    {
      nombre: "185 Ixtapaluca",
      direccion: "Carr. Federal México-Puebla 15, Centro, 56530 Ixtapaluca, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d307.82772279216925!2d-98.88102615880764!3d19.314512789577062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1f007d35a9c7%3A0x2f99ab7b2fcda652!2sVento%20Motorcycles%20U.S.A%20Ixtapaluca!5e0!3m2!1ses-419!2smx!4v1769030131201!5m2!1ses-419!2smx" 
    },
    {
      nombre: "186 Puebla-Tecamachalco",
      direccion: "Blvd. Cuauhtémoc 610, San Nicolás, 75486 Tecamachalco, Pue.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d471.89639001851924!2d-97.7273526!3d18.8794883!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c5637a76e5d351%3A0x70147b0d403aa86b!2sVento%20Motorcycles%20U.S.A%20Puebla-Tecamachalco!5e0!3m2!1sen!2smx!4v1769030178050!5m2!1sen!2smx" 
    },
    {
      nombre: "195 Zacatelco",
      direccion: "Carr. Federal Puebla - Tlaxcala 14, Centro, Primera Secc, 90740 Zacatelco, Tlax.",
      mapa:"https://www.google.com/maps/embed?pb=!3m2!1ses-419!2smx!4v1769030799172!5m2!1ses-419!2smx!6m8!1m7!1sdbkRQNvbcy_e29zIFhqLsg!2m2!1d19.21640257625944!2d-98.24055446414519!3f303.4286010637098!4f-27.828604302032588!5f0.7820865974627469" 
    },
    {
      nombre: "198 Izúcar de Matamoros",
      direccion: "Junto a la bodega Aurrera, Boulevard Eje Poniente 19, Barrio de, Santa Cruz Tecoxco, 74440 Izúcar de Matamoros, Pue.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d236.33809454623412!2d-98.4760503!3d18.6006417!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cf017408bd9cb5%3A0xfb966df9d9500a02!2sVento%20Motorcycles%20U.S.A%20Iz%C3%BAcar%20de%20Matamoros!5e0!3m2!1ses-419!2smx!4v1769031119306!5m2!1ses-419!2smx" 
    },
    {
      nombre: "205 Valle de Chalco Tezozómoc",
      direccion: "Av Tezozomoc 187, Alfredo Baranda, 56610 Valle de Chalco Solidaridad, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d470.7635030022667!2d-98.9446545!3d19.277668!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1de26f979e07%3A0xc10935b3caebd758!2sVento%20Motorcycles%20U.S.A%20Valle%20de%20Chalco%20Tezoz%C3%B3moc!5e0!3m2!1ses-419!2smx!4v1769031170437!5m2!1ses-419!2smx" 
    },
    {
      nombre: "207 Ciudad de Libres",
      direccion: "Carretera Federal, Acajete-Teziutlán S/N, Tetela, 73780 Cdad. de Libres, Pue.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13446.591278023545!2d-97.69426089015576!3d19.45948389056978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85daadb2b7842027%3A0x1cc36605a69eafbe!2sVento%20Motorcycles%20U.S.A%20Ciudad%20de%20Libres!5e0!3m2!1ses-419!2smx!4v1769031244803!5m2!1ses-419!2smx"
    },
    {
      nombre: "210 San Francisco Totimehuacan",
      direccion: "XR96+WV7 Heroica Puebla de Zaragoza, Puebla",
      mapa:"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3773.1319809373977!2d-98.19040822411327!3d18.96977778221315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDU4JzExLjIiTiA5OMKwMTEnMTYuMiJX!5e0!3m2!1ses-419!2smx!4v1769031735464!5m2!1ses-419!2smx" 
    },
    {
      nombre: "212 Tepeaca Puebla",
      direccion: "Blvd. Cuauhtémoc 604, San José, 75200 Tepeaca, Pue.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3773.0292811380255!2d-97.9014355!3d18.9743142!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cf8d69d9df389d%3A0x63ea753182c77bad!2sVento%20Motorcycles%20U.S.A%20Tepeaca%20Puebla!5e0!3m2!1ses-419!2smx!4v1769031801934!5m2!1ses-419!2smx" 
    },
    {
      nombre: "218 Huamantla",
      direccion: "Matamoros Ote 101, Centro, 90500 Huamantla, Tlax.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d941.3357415796086!2d-97.92156469999999!3d19.3109184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cffd0019f98811%3A0x333530a809332488!2sVento%20Motorcycles%20U.S.A%20Huamantla!5e0!3m2!1ses-419!2smx!4v1769031846831!5m2!1ses-419!2smx" 
    },
    {
      nombre: "225 Apizaco",
      direccion: "Independencia 101, San Miguel, 90339 Cdad. de Apizaco, Tlax.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8759497210312!2d-98.1457417!3d19.417765099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d021905ee01a61%3A0xc3f81814d6d9d237!2sVento%20Motorcycles%20U.S.A%20Apizaco!5e0!3m2!1ses-419!2smx!4v1769031891036!5m2!1ses-419!2smx" 
    },
    {
      nombre: "241 Teziutlan",
      direccion: "Av Miguel Hidalgo 914, Centro, 73800 Teziutlán, Pue.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.5954940966917!2d-97.3603696!3d19.814740899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85daeb8277c3ccf3%3A0x8bdade1101f09ee2!2sVento%20Motorcycles%20U.S.A%20Teziutlan!5e0!3m2!1ses-419!2smx!4v1769031953155!5m2!1ses-419!2smx"
    },
    {
      nombre: "245 Acatlan de Osorio",
      direccion: "De La Independencia 27a, San Luis, 74949 Acatlán de Osorio, Pue.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d236.88959326253115!2d-98.0486723!3d18.1991909!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cf41a8318f9373%3A0xfb775277fc580ad3!2sVento%20Motorcycles%20U.S.A%20Acatl%C3%A1n%20de%20Osorio!5e0!3m2!1ses-419!2smx!4v1769031994522!5m2!1ses-419!2smx" 
    },
    {
      nombre: "270 Zacatlan",
      direccion: "AV. Chapultepec esquina Calle J González Ortega, Jesús González Ortega, 73310 Zacatlán, Pue.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d428.1025900920555!2d-97.96642404965475!3d19.93841926544537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d06f616c444147%3A0x382408ea97d519c9!2sVento%20Motorcycles%20U.S.A%20Zacatlan!5e0!3m2!1ses-419!2smx!4v1769032056044!5m2!1ses-419!2smx"
    }
    
  ],

  Tultepec: [
    {
      nombre: "06 Ecatepec",
      direccion: "Av. Carlos Hank González 205, Valle de Aragon 3ra Secc, 55280 Ecatepec de Morelos, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.91134446017!2d-99.0421738!3d19.502449700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fb915e17fc4b%3A0xb80c74c94d19dd92!2sVento%20Motorcycles%20U.S.A%20Ecatepec!5e0!3m2!1ses-419!2smx!4v1769032901520!5m2!1ses-419!2smx" 
    },
    {
      nombre: "11 Cuautitlán",
      direccion: "Niños Heroes 2, Tlaltepan, 54800 Cuautitlán, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d234.80786740691605!2d-99.1641318!3d19.6731674!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f5868ef4a4df%3A0x4020c087cec43afb!2sVento%20Motorcycles%20U.S.A%20Cuautitl%C3%A1n!5e0!3m2!1ses-419!2smx!4v1769032947473!5m2!1ses-419!2smx"
    },
    {
      nombre: "19 Cosmopol",
      direccion: "Av. José López Portillo 1, Bosques del Valle, 55717 San Francisco Coacalco, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1878.9430203564734!2d-99.1252761!3d19.6321692!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f5bbed1d95e3%3A0x81329ddfe8bd8c5d!2sVento%20Motorcycles%20U.S.A%20Cosmopol!5e0!3m2!1ses-419!2smx!4v1769032987260!5m2!1ses-419!2smx"
    },
    {
      nombre: "20 Tulpetlac",
      direccion: "Vía Morelos 176, Col La Mora, Sta Maria Tulpetlac, 55400 Ecatepec de Morelos, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d939.8493205932864!2d-99.0450151!3d19.5674732!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f1da62d0c04d%3A0xf4a0152d7ca24b04!2sVento%20Motorcycles%20U.S.A%20Tulpetlac!5e0!3m2!1ses-419!2smx!4v1769033028266!5m2!1ses-419!2smx"
    },
    {
      nombre: "26 Tecámac",
      direccion: "Carr. México - Pachuca S/N, Tecámac Centro, Tecamac, 55740 Tecámac de Felipe Villanueva, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3755.9752744709767!2d-98.9738628!3d19.7136768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1edce3519c96f%3A0x832df3e91acdd450!2sVento%20Motorcycles%20U.S.A%20Tec%C3%A1mac!5e0!3m2!1ses-419!2smx!4v1769033067785!5m2!1ses-419!2smx"
    },
    {
      nombre: "27 Zumpango",
      direccion: "Federico Gómez 32, Barrio de, Santiago 2da Secc., 55600 Zumpango de Ocampo, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d234.6228106812216!2d-99.09819!3d19.7990825!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d191b583fe9d8b%3A0x818eac5a1a25ea8d!2sVento%20Motorcycles%20U.S.A%20Zumpango!5e0!3m2!1ses-419!2smx!4v1769033111658!5m2!1ses-419!2smx"
    },
    {
      nombre: "32 Izcalli",
      direccion: "Dr. J. Jiménez Cantú 30-int k1, Centro Urbano, 54740 Cuautitlán Izcalli, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3757.205562046685!2d-99.2067338!3d19.6612336!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21fe3dccb46db%3A0xe672b871147fb791!2sVento%20Motorcycles%20U.S.A%20Izcalli!5e0!3m2!1ses-419!2smx!4v1769033153197!5m2!1ses-419!2smx"
    },
    {
      nombre: "48 Tula",
      direccion: "Calle Leandro Valle 144, Centro, 42800 Tula de Allende, Hgo.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d234.24265469506994!2d-99.3401732!3d20.0553648!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d22d6dae688ca9%3A0xa670f94ea17e3b21!2sVento%20Motorcycles%20U.S.A%20Tula!5e0!3m2!1ses-419!2smx!4v1769033196618!5m2!1ses-419!2smx"
    },
    {
      nombre: "49 Tulancingo",
      direccion: "Santa Ana, 43642 Tulancingo, Hgo.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1873.618824704639!2d-98.3829731!3d20.0823502!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d057327b919f4b%3A0xb8ebe3510a38ec9!2sVento%20Motorcycles%20U.S.A%20Tulancingo!5e0!3m2!1ses-419!2smx!4v1769033241244!5m2!1ses-419!2smx"
    },
    {
      nombre: "66 Macroplaza Tecamac",
      direccion: "Av. Bosques del Estado de México, C.P 2-Int. 105, Los Heroes Tecamac, 55764 Ojo de Agua, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1879.1097872654798!2d-99.03870549999999!3d19.617908300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f10033c64429%3A0x9727a990f18f196f!2sVento%20Motorcycles%20U.S.A%20Macro%20Plaza%20Tec%C3%A1mac!5e0!3m2!1ses-419!2smx!4v1769033286414!5m2!1ses-419!2smx" 
    },
    {
      nombre: "68 Teoloyucan",
      direccion: "Av. Hidalgo, 5 de Mayo 6-y, Tepanquiahuac, 54783 Teoloyucan, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d234.70343000184917!2d-99.1775675!3d19.7443228!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d18bcb4f174abd%3A0xa72f040d1f6bb5f3!2sVento%20Motorcycles%20U.S.A%20Teoloyucan!5e0!3m2!1ses-419!2smx!4v1769033361233!5m2!1ses-419!2smx" 
    },
    {
      nombre: "72 Lomas de Cuautitlan",
      direccion: "014, Ejido de San Francisco Tepojaco, 54720 Cuautitlán Izcalli, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d234.84279746556084!2d-99.2636899!3d19.6493136!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21f005a00fa15%3A0xc5541a1c91156e7c!2sVento%20Motorcycles%20U.S.A%20Lomas%20de%20Cuautitl%C3%A1n!5e0!3m2!1ses-419!2smx!4v1769033426307!5m2!1ses-419!2smx"
    },
    {
      nombre: "84 San Cristobal, Ecatepec",
      direccion: "Av Morelos 48-MZ 012, San Cristóbal Centro, 55000 Ecatepec de Morelos, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d234.9111866161704!2d-99.0504332!3d19.6025298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f100006f2e71%3A0xe114d0b3c37bbee4!2sVento%20Motorcycles%20U.S.A%20San%20Crist%C3%B3bal%20Ecatepec!5e0!3m2!1ses-419!2smx!4v1769033487933!5m2!1ses-419!2smx"
    },
    {
      nombre: "90 Ojo de Agua",
      direccion: "Blvr. Ojo de Agua & Calle Fresas, Ojo de Agua, 55770 Ojo de Agua, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d234.8054680582852!2d-99.030103!3d19.6748049!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f30043e2308f%3A0x221d0ab17756e415!2sVento%20Motorcycles%20U.S.A%20Ojo%20De%20Agua!5e0!3m2!1ses-419!2smx!4v1769033535352!5m2!1ses-419!2smx"
    },
    {
      nombre: "93 San Juan del Rio",
      direccion: "Paseo Central 76, Z/O Secc 8, San Cayetano, 76806 San Juan del Río, Qro.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d934.9704926987998!2d-99.9846037!3d20.3877558!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d30b0064362ed9%3A0xaa1326dd54275027!2sVento%20Motorcycles%20U.S.A%20San%20Juan%20del%20R%C3%ADo!5e0!3m2!1ses-419!2smx!4v1769033579045!5m2!1ses-419!2smx"
    },
    {
      nombre: "94 Plaza Huehuetoca",
      direccion: "Blvrd Huehuetoca - Jorobas 880, 54685 Jorobas, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d469.1464413899496!2d-99.2119078!3d19.8326938!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d227005b450647%3A0x4d69585e1afee7df!2sVento%20Motorcycles%20U.S.A%20Huehuetoca!5e0!3m2!1ses-419!2smx!4v1769033639337!5m2!1ses-419!2smx"
    },
    {
      nombre: "108 Querétaro",
      direccion: "Av. del Parque 1139, zona dos extendida, La Alhambra, 76074 Santiago de Querétaro, Qro.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d933.9158584594876!2d-100.3736416!3d20.5609473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d3450075007137%3A0x1c804f4210aada97!2sVento%20Motorcycles%20U.S.A%20Quer%C3%A9taro!5e0!3m2!1ses-419!2smx!4v1769033735793!5m2!1ses-419!2smx"
    },
    {
      nombre: "115 Tizayuca",
      direccion: "Eje Nte. - Sur Manzana 2 Lote 2, Zona Industrial, 43804 Tizayuca, Hgo.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.2758197164267!2d-98.9777697!3d19.828279099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1910073fcf38d%3A0x46c982cd1037e3ca!2sVento%20Motorcycles%20U.S.A%20Tizayuca!5e0!3m2!1sen!2smx!4v1769033778317!5m2!1sen!2smx" 
    },
    {
      nombre: "120 Zumpango Town Center",
      direccion: "Carr Zumpango - Tecamac 2000, San Sebastian, 55600 Zumpango de Ocampo, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.2000635439185!2d-99.05500289999999!3d19.789113099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d18d00346e1ae3%3A0x69fc6d505b5bca1e!2sVento%20Motorcycles%20U.S.A%20Zumpango%20Town%20Center!5e0!3m2!1sen!2smx!4v1769033833903!5m2!1sen!2smx" 
    },
    {
      nombre: "122 Boulevard de los Aztecas",
      direccion: "Av. Cvln. Sur 191, Jardines de Santa Clara, 55450 Ecatepec de Morelos, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d469.9870667954181!2d-99.0417447!3d19.5460551!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f1001518ccb1%3A0x70723f7902f7082a!2sVento%20Motorcycles%20U.S.A%20Boulevard%20de%20los%20Aztecas!5e0!3m2!1sen!2smx!4v1769033899087!5m2!1sen!2smx"
    },
    {
      nombre: "136 Jilotepec",
      direccion: "Avenida Vicente Guerrero Pte. 109, Jilotepec de Andres Molina Enriquez, 54240 Jilotepec de Molina Enríquez, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d937.5789487580472!2d-99.5357959!3d19.9532173!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2370039a2c141%3A0x3c3703dbd6c79918!2sVento%20Motorcycles%20U.S.A%20Jilotepec!5e0!3m2!1sen!2smx!4v1769033949133!5m2!1sen!2smx"
    },
    {
      nombre: "140 Ciudad Sahagún",
      direccion: "Esq Carlos Lazo 2, Centro, 43990 Cd Sahagún, Hgo.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.5060036531304!2d-98.58126469999999!3d19.776132099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1b70061d2f5a5%3A0x330de56f0ef6c9!2sVento%20Motorcycles%20U.S.A%20Ciudad%20Sahag%C3%BAn!5e0!3m2!1ses-419!2smx!4v1769033989335!5m2!1ses-419!2smx" 
    },
    {
      nombre: "141 Tepexpan",
      direccion: "Manzana 004, Real del Valle, 55883 Tepexpan, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.4965264348148!2d-98.97310189999999!3d19.606059100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ef003140fe15%3A0xf529d90301bb9a5a!2sVento%20Motorcycles%20U.S.A%20Tepexpan!5e0!3m2!1ses-419!2smx!4v1769034025538!5m2!1ses-419!2smx"
    },
    {
      nombre: "160 Pachuca Parotti",
      direccion: "Av Constituyentes 100, Constitución, 42080 Pachuca de Soto, Hgo.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d468.30185190520723!2d-98.7471259!3d20.1167347!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1090057202d4f%3A0xf67f3b310f77d32b!2sVento%20Motorcycles%20U.S.A%20Pachuca%20Parotti!5e0!3m2!1ses-419!2smx!4v1769034106500!5m2!1ses-419!2smx"
    },
    {
      nombre: "163 Pachuca",
      direccion: "c 16 de Septiembre, V Carranza Supermanzana Esquina, Sta Julia, 42080 Pachuca de Soto, Hgo.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7495.403050911387!2d-98.7903278!3d20.0629409!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1095d468b5889%3A0x66971ed3e9eed1a!2sVento%20Motorcycles%20U.S.A%20Pachuca%20de%20Soto!5e0!3m2!1ses-419!2smx!4v1769034150297!5m2!1ses-419!2smx" 
    },
    {
      nombre: "165 Visitación",
      direccion: "Centenario Himno Nacional Nte. 116-MZ 035, Visitacion, 54890 Melchor Ocampo, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d469.48909004999064!2d-99.1399939!3d19.7163397!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d18b001c1cceef%3A0xb00e9729af367c6d!2sVento%20Motorcycles%20U.S.A%20Visitaci%C3%B3n%20Melchor%20Ocampo!5e0!3m2!1ses-419!2smx!4v1769034198080!5m2!1ses-419!2smx" 
    },
    {
      nombre: "179 Ezequiel Montes",
      direccion: "Heroico Colegio Militar 183, Centro, Los Ángeles, 76650 Ezequiel Montes, Qro.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1866.5798354575297!2d-99.8997538!3d20.663082!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d383000691f5f9%3A0x96d4ba11dd64613b!2sVento%20Motorcycles%20U.S.A%20Ezequiel%20Montes!5e0!3m2!1ses-419!2smx!4v1769034236414!5m2!1ses-419!2smx"
    },
    {
      nombre: "180 Carrillo Puerto",
      direccion: "Av. San Diego 109, Felipe Carrillo Puerto, 76138 Santiago de Querétaro, Qro.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.6390498502924!2d-100.4271617!3d20.602793000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35b894537ba11%3A0xcd18b07b1cfdb968!2sVento%20Motorcycles%20U.S.A%20Carrillo%20Puerto!5e0!3m2!1ses-419!2smx!4v1769034290233!5m2!1ses-419!2smx" 
    },
    {
      nombre: "181 Tequisquiapan",
      direccion: "Carretera a, Ezequiel Montés 100-D-5, Pedregal de Hacienda Grande, Plaza Pedregal, 76750 Tequisquiapan, Qro.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2218.514404921424!2d-99.8978094!3d20.5289529!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d39d0041f89d0b%3A0x19915b9fe6e96e5e!2sVento%20Motorcycles%20U.S.A%20Tequisquiapan!5e1!3m2!1ses-419!2smx!4v1769034375449!5m2!1ses-419!2smx" 
    },
    {
      nombre: "201 Tultitlán",
      direccion: "Av. José López Portillo 36, Santa Clara Chilpan, 54944 México, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d278.94308600040563!2d-99.1812399!3d19.6105725!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f706ef4586c9%3A0xd77f505b44b7d407!2sVento%20Motorcyles%20U.S.A%20Tultitlan!5e1!3m2!1ses-419!2smx!4v1769034421309!5m2!1ses-419!2smx"
    },
    {
      nombre: "209 Progreso de Obregón",
      direccion: "Cda. Emiliano Zapata 80, Zenthe, 42730 Progreso de Obregón, Hgo.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d555.6609327169181!2d-99.1920457!3d20.2422404!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d3d70007d91bdb%3A0xf112a4a2c6001a2!2sVento%20Motorcycles%20U.S.A%20Progreso%20de%20Obreg%C3%B3n!5e1!3m2!1ses-419!2smx!4v1769034476935!5m2!1ses-419!2smx"
    },
    {
      nombre: "246 Tultitlan Oriente",
      direccion: "Blvd. Tultitlan Ote. 86A, San Juan, 54900 Tultitlán de Mariano Escobedo, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4462.136564783921!2d-99.1664479!3d19.6448748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f5bfecdc358f%3A0xc4850b37f9f3bd6!2sBlvd.%20Tultitlan%20Ote.%2086A%2C%20San%20Juan%2C%2054900%20Tultitl%C3%A1n%20de%20Mariano%20Escobedo%2C%20M%C3%A9x.!5e1!3m2!1ses-419!2smx!4v1769034518601!5m2!1ses-419!2smx" 
    },
    {
      nombre: "247 Ixmiquilpan",
      direccion: "Av. Insurgentes Ote. 59, El Carmen, 42302 Ixmiquilpan, Hgo.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1020.4231782681649!2d-99.2153934310195!3d20.47671124356411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d3e1b1bfb478f1%3A0xabfe30e4bec55cfc!2sVento%20Motorcycles%20U.S.A%20Ixmiquilpan!5e0!3m2!1ses-419!2smx!4v1769034572198!5m2!1ses-419!2smx"
    },
    {
      nombre: "254 Tepeji del Rio",
      direccion: "San Mateo 1ra, 42853 Tepeji del Río de Ocampo, Hgo.",
      mapa:"https://www.google.com/maps/embed?pb=!3m2!1ses-419!2smx!4v1769034725383!5m2!1ses-419!2smx!6m8!1m7!1sZwss0xOmNvuyO6_AcOhYJw!2m2!1d19.90271164473782!2d-99.33783812923643!3f66.15917042408458!4f-0.15548064876300316!5f0.7820865974627469" 
    },
    {
      nombre: "255 Nextlalpan",
      direccion: "Av. Chapultepec 111, Central Santa Ana, 55790 Santa Ana Nextlalpan, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.2956580213317!2d-99.08025669999999!3d19.7425893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d18dd959aeb609%3A0x35daef680e378f7d!2sVento%20Motorcycles%20U.S.A%20Nextlalpan!5e0!3m2!1ses-419!2smx!4v1769034768841!5m2!1ses-419!2smx"
    },
    {
      nombre: "258 Mixquiahuala",
      direccion: "Av Reforma S/N, Centro, 6ª Demarcación, 42700 Mixquiahuala de Juárez, Hgo.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d233.99205831108415!2d-99.2169934!3d20.2226006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d3d77a8f93cf0f%3A0x1983fac264f5468!2sVento%20Motorcycles%20U.S.A%20Mixquiahuala!5e0!3m2!1ses-419!2smx!4v1769034811270!5m2!1ses-419!2smx" 
    },
    {
      nombre: "273 Tezontepec de Aldama",
      direccion: "Av. Insurgentes 5 Panuaya, 42760 Tezontepec de Aldama, Hgo.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1354.081316305707!2d-99.27248079054355!3d20.1930245703576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d3d73408c73069%3A0x13f46a3131ff4cd4!2sVento%20Motorcycles%20U.S.A%20Tezontepec%20de%20Aldama!5e0!3m2!1ses-419!2smx!4v1769034894932!5m2!1ses-419!2smx" 
    },
    
  ],

  Toluca: [
    {
      nombre: "12 Metepec",
      direccion: "C. Manuel J. Clouthier 1101, Pilares, 52179 San Jerónimo Chicahualco, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d941.4851153790648!2d-99.5949778!3d19.2849552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd8b7d46f99d4d%3A0x5e6001a5d731dc28!2sVento%20Motorcycles%20U.S.A%20Metepec!5e0!3m2!1ses-419!2smx!4v1769035432654!5m2!1ses-419!2smx"
    },
    {
      nombre: "33 Zinacantepec",
      direccion: "P.º Pdte. Adolfo López Mateos 154, Las Joyas, 51355 San Luis Mextepec, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.8032058416593!2d-99.7074456!3d19.290922399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd89ec7bcf94ed%3A0x6f13b66493c8e5d5!2sVento%20Motorcycles%20U.S.A%20Zinacantepec!5e0!3m2!1ses-419!2smx!4v1769035473078!5m2!1ses-419!2smx"
    },
    {
      nombre: "44 Jiutepec Morelos",
      direccion: "Blvd. Paseo Cuauhnáhuac Km 4.5, Tejalpa, 62570 Jiutepec, Mor.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d471.8320254688414!2d-99.1738439!3d18.9023271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce7593da4d69b1%3A0x983fa4b590ec2e99!2sVento%20Motorcycles%20U.S.A%20Jiutepec!5e0!3m2!1ses-419!2smx!4v1769035509821!5m2!1ses-419!2smx"
    },
    {
      nombre: "70 Toluca Centro",
      direccion: "Av. J. M. Morelos Y P. 905, Barrio de la Merced, 50080 Toluca de Lerdo, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235.36720685790993!2d-99.6630819!3d19.2877879!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd89005ffcb5a1%3A0x48335c7989ac289a!2sVento%20Motorcycles%20U.S.A%20Toluca%20Centro!5e0!3m2!1ses-419!2smx!4v1769035560006!5m2!1ses-419!2smx" 
    },
    {
      nombre: "73 San Mateo Atenco",
      direccion: "Av. Independencia 609-2, Barrio de la Concepción, 52105 San Mateo Atenco, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.164505938246!2d-99.53705112110536!3d19.27521103548375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdf5c47b3d3525%3A0xa2dbb66cd91a2f17!2sVento%20Motorcycles%20U.S.A%20San%20Mateo%20Atenco!5e0!3m2!1ses-419!2smx!4v1769035630269!5m2!1ses-419!2smx" 
    },
    {
      nombre: "81 Santiago Tianguistenco",
      direccion: "Don Catarino González Benítez 2033, Tianguistenco de Galeana, 52600 Santiago Tianguistenco de Galeana, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235.52541609544517!2d-99.4655796!3d19.1774328!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdf3001644e91d%3A0xc03fa40bfe7450fc!2sVento%20Motorcycles%20U.S.A%20Tianguistenco!5e0!3m2!1ses-419!2smx!4v1769035670428!5m2!1ses-419!2smx" 
    },
    {
      nombre: "91 Tenancingo",
      direccion: "Morelos 102, Centro, 52400 Tenancingo de Degollado, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235.83217398049533!2d-99.5937932!3d18.9617005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd95003da8442f%3A0xe11aa9cbb73f8880!2sVento%20Motorcycles%20U.S.A%20Tenancingo!5e0!3m2!1ses-419!2smx!4v1769035709465!5m2!1ses-419!2smx"
    },
    {
      nombre: "100 Alfredo del Mazo",
      direccion: "Alfredo del Mazo 528. Col. San Lorenzo Tepaltitlán, 50010 Toluca de Lerdo, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235.34900619825032!2d-99.6274189!3d19.3004444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd8911d872d7b3%3A0xb10f0c16686b8ae9!2sVento%20Motorcycles%20U.S.A%20Toluca%20Alfredo%20del%20Mazo!5e0!3m2!1ses-419!2smx!4v1769035754107!5m2!1ses-419!2smx" 
    },
    {
      nombre: "101 Ixtlahuaca",
      direccion: "Av. Gustavo Baz Prada Manzana 010, Ixtlahuaca, 50740 Ixtlahuaca de Rayón, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d469.92419647694055!2d-99.7647586!3d19.5676323!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d265006839bdf7%3A0x801153067cb5016a!2sVento%20Motorcycles%20U.S.A.%20Ixtlahuaca!5e0!3m2!1ses-419!2smx!4v1769035814488!5m2!1ses-419!2smx" 
    },
    {
      nombre: "102 Toluca Santin",
      direccion: "Ave. José López Portillo Manzana 30, San Jose Guadalupe Otzacatipan, 50230 San José Guadalupe Otzacatipan, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7529.095244712858!2d-99.5999659!3d19.3454268!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d275fe316cea83%3A0x5c5d06eed2575f8e!2sVento%20Santin!5e0!3m2!1ses-419!2smx!4v1769035893271!5m2!1ses-419!2smx"
    },
    {
      nombre: "111 Xonacatlán",
      direccion: "Carr. Toluca-Naucalpan 74, Col. Centro, 52060 Xonacatlán, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.8092247061123!2d-99.5243095!3d19.402167700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20b000d89e93b%3A0xd45bb65b1861d2ce!2sVento%20Motorcycles%20U.S.A%20Xonacatl%C3%A1n!5e0!3m2!1ses-419!2smx!4v1769035949003!5m2!1ses-419!2smx"
    },
    {
      nombre: "114 Atlacomulco",
      direccion: "Mario Colin Sánchez 20, Las Fuentes, 50455 Atlacomulco de Fabela, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938.5203823043333!2d-99.8860504!3d19.7941403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d259b2f29be90b%3A0x342958744e2fd4c3!2sVento%20Motorcycles%20U.S.A%20Atlacomulco!5e0!3m2!1ses-419!2smx!4v1769036002299!5m2!1ses-419!2smx"
    },
    {
      nombre: "134 Valle de Bravo",
      direccion: "C. Francisco González Bocanegra 101, Sta Maria Ahuacatlan, 51200 Valle de Bravo, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d942.0108080621491!2d-100.1310359!3d19.193314!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd63002ab1f00b%3A0xf8d1afa13ae1c256!2sVento%20Motorcycles%20U.S.A%20Valle%20de%20Bravo!5e0!3m2!1sen!2smx!4v1769036059153!5m2!1sen!2smx"
    },
    {
      nombre: "169 Villa Guerrero",
      direccion: "Calle José Ma. García Nte. 40, Col. Centro, 51760 Villa Guerrero, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d943.3141672620105!2d-99.6425384!3d18.964268699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd976392045fad%3A0x255ce73905797320!2sVento%20Motorcycles%20U.S.A%20Villa%20Guerrero!5e0!3m2!1ses-419!2smx!4v1769036104766!5m2!1ses-419!2smx" 
    },
    {
      nombre: "170 Temoaya",
      direccion: "Avenida Reforma S/N. Col. Molino Abajo, 50850 Temoaya, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d279.19861633970726!2d-99.5953721!3d19.4627231!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2737a11064863%3A0x7be6c82a17e3cfc0!2sVento%20Motorcycles%20U.S.A%20Temoaya!5e1!3m2!1ses-419!2smx!4v1769036147349!5m2!1ses-419!2smx" 
    },
    {
      nombre: "172 La Estación-Lerma",
      direccion: "Av. Reolín Barejon 34, La Estacion, 52000 Lerma de Villada, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2236.0115693412063!2d-99.5187371!3d19.2860961!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdf58282ea2b03%3A0xf9a9e802dd67e171!2sVento%20Motorcycles%20U.S.A%20La%20Estaci%C3%B3n%20-%20Lerma!5e1!3m2!1ses-419!2smx!4v1769036252532!5m2!1ses-419!2smx" 
    },
    {
      nombre: "173 Temixco",
      direccion: "Centro, 62580 Temixco, Mor.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d560.4975309458904!2d-99.2242614!3d18.8434074!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddfddf095ee09%3A0xd66e59d12dd23f83!2sVento%20Motorcycles%20U.S.A%20Temixco!5e1!3m2!1ses-419!2smx!4v1769036324035!5m2!1ses-419!2smx" 
    },
    {
      nombre: "175 Coatepec Harinas",
      direccion: "María Luisa Ulloa 11. Col. Segunda de San Miguel, 51715 Coatepec Harinas, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d560.2367860276709!2d-99.7681242!3d18.9213541!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cda3002d571ecd%3A0xcb7ace790ac9df31!2sVento%20Motorcycles%20U.S.A%20Coatepec%20Harinas!5e1!3m2!1sen!2smx!4v1769036377192!5m2!1sen!2smx" 
    },
    {
      nombre: "182 Acambay",
      direccion: "Panamericana 763, 50300 Villa de Acambay de Ruíz Castañeda, Méx.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d468.8004318507173!2d-99.8449263!3d19.9495281!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2570064d1669d%3A0x669cb0fc04781370!2sVento%20Motorcycles%20U.S.A%20Acambay!5e0!3m2!1sen!2smx!4v1769036470223!5m2!1sen!2smx" 
    },
    {
      nombre: "193 Maravatío",
      direccion: "Av Francisco I. Madero 399, Centro, 61250 Maravatío de Ocampo, Mich.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d278.45196505200204!2d-100.438687!3d19.8917693!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2db2191b0f0ad%3A0x11ac1adbb4e73151!2sVento%20Motorcycles%20U.S.A%20Maravat%C3%ADo!5e1!3m2!1ses-419!2smx!4v1769036511382!5m2!1ses-419!2smx" 
    },
    {
      nombre: "197 Zitácuaro",
      direccion: "Av. Revolución Nte. 21, Centro, 61506 Zitácuaro, Mich.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1116.9733548081933!2d-100.3576315243876!3d19.436735695939273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2a5004e826213%3A0x89143706229958e2!2sVento%20Motorcycles%20U.S.A%20Zit%C3%A1cuaro!5e1!3m2!1ses-419!2smx!4v1769036582428!5m2!1ses-419!2smx" 
    },
    {
      nombre: "267 Lazaro Cardenas",
      direccion: "XR44+H67 Cdad. Lázaro Cárdenas, Michoacán",
      mapa:"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1126.7829657616112!2d-102.19508813038101!3d17.956416698939453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDU3JzIzLjEiTiAxMDLCsDExJzQwLjAiVw!5e1!3m2!1ses-419!2smx!4v1769036732389!5m2!1ses-419!2smx" 
    }
  ],

  Irapuato: [
    {
      nombre: "86 Irapuato",
      direccion: "Av. Juan José Torres Landa 838, Barrio de San Miguel, 36510 Irapuato, Gto.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d554.0809445593912!2d-101.3513148!3d20.6795102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c7f0075f624c7%3A0x55e64cf5cda1e7f!2sVento%20Motorcycles%20U.S.A%20Irapuato!5e1!3m2!1ses-419!2smx!4v1769037418985!5m2!1ses-419!2smx"
    },
    {
      nombre: "87 Moroleón",
      direccion: "C. 16 de Septiembre 100, Zona Centro, 38800 Moroleón, Gto.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d278.0286145977432!2d-101.1909836!3d20.1311373!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cfb001e795525%3A0x92df222d6fa2f7f!2sVento%20Motorcycles%20U.S.A%20Morole%C3%B3n!5e1!3m2!1ses-419!2smx!4v1769037500381!5m2!1ses-419!2smx" 
    },
    {
      nombre: "89 Torres Landa",
      direccion: "Blvd. J. J. Torres Landa Ote. 6203A, Jardines de Jerez, 37530 León de los Aldama, Gto.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d276.2690773116104!2d-101.6421776!3d21.0981171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbf0068a10ec5%3A0x6d4d969fc0351cb6!2sVento%20Motorcycles%20U.S.A%20Le%C3%B3n%20Torres%20Landa!5e1!3m2!1ses-419!2smx!4v1769037543929!5m2!1ses-419!2smx" 
    },
    {
      nombre: "99 Celaya Centro",
      direccion: "Blvrd Adolfo López Mateos Poniente 533, Col. Centro, 38000 Celaya, Gto.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2218.6364357715706!2d-100.8203293!3d20.5205349!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cbb002b9e4fcf%3A0x10d632d0faa28525!2sVento%20Motorcycles%20U.S.A%20Celaya!5e1!3m2!1ses-419!2smx!4v1769037595310!5m2!1ses-419!2smx"
    },
    {
      nombre: "109 Abasolo",
      direccion: "Guerrero Ote. 128, Centro, 36970 Abasolo, Gto.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d277.4512951939409!2d-101.5277443!3d20.4532322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c6f0011130753%3A0x9e32e8468f59d5f0!2sVento%20Motorcycles%20U.S.A%20Abasolo!5e1!3m2!1ses-419!2smx!4v1769037637429!5m2!1ses-419!2smx"
    },
    {
      nombre: "116 Salvatierra",
      direccion: "Celaya - Yuriria 112, Zona Centro, 38900 Salvatierra, Gto.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d555.7396414065756!2d-100.8825797!3d20.2202207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cc5001dacffdb%3A0x23d36c3ff17ef661!2sVento%20Motorcycles%20U.S.A%20Salvatierra!5e1!3m2!1ses-419!2smx!4v1769037685723!5m2!1ses-419!2smx"
    },
    {
      nombre: "117 Apaseo el Grande",
      direccion: "Guadalupe Victoria 108, Zona Centro, 38160 Apaseo el Grande, Gto.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4436.53263006907!2d-100.68861559999999!3d20.5460566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cb30011af8541%3A0xa89de9a980ddb84b!2sVento%20Motorcycles%20U.S.A%20Apaseo%20El%20Grande!5e1!3m2!1sen!2smx!4v1769037743389!5m2!1sen!2smx"
    },
    {
      nombre: "118 Alaia Gto.",
      direccion: "Carr. Guanajuato - Juventino Rosas 139, Loma del Padre, C.P. 36000 Yerbabuena, Gto.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4424.024918941669!2d-101.2809575!3d20.9727992!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b77007a313c8b%3A0x2cd9aedfebee84eb!2sVento%20Motorcycles%20U.S.A%20Alaia%20Guanajuato!5e1!3m2!1ses-419!2smx!4v1769037780788!5m2!1ses-419!2smx" 
    },
    {
      nombre: "125 Pénjamo",
      direccion: "Aldama 42-44, Zona Centro, 36900 Pénjamo, Gto.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2219.989552265682!2d-101.7235699!3d20.426971!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c130070cf6b87%3A0xfde433c51f50e6e9!2sVento%20Motorcycles%20U.S.A%20P%C3%A9njamo!5e1!3m2!1sen!2smx!4v1769037829899!5m2!1sen!2smx"
    },
    {
      nombre: "126 San Miguel de Allende",
      direccion: "Salida a Celaya 13-Int. 2, Zona Centro, 37765 San Miguel de Allende, Gto.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4426.255839923865!2d-100.75449739999999!3d20.897294199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b513e38dea505%3A0x4ba14c6e39ea8368!2sVento%20Motorcycles%20U.S.A%20San%20Miguel%20de%20Allende!5e1!3m2!1sen!2smx!4v1769037866941!5m2!1sen!2smx" 
    },
    {
      nombre: "148 Silao",
      direccion: "Álvaro Obregón Nte 148, Centro, 36100 Silao de la Victoria, Gto.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d232.88117548597745!2d-101.4327641!3d20.9485468!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b9d0066ac7a61%3A0x6274b247320e337e!2sVento%20Motorcycles%20U.S.A%20Silao!5e0!3m2!1ses-419!2smx!4v1769037898675!5m2!1ses-419!2smx" 
    },
    {
      nombre: "149 Apaseo el Alto",
      direccion: "Av. Independencia 321, Santa Elena Sur, 38505 Apaseo el Alto, Gto.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d554.9170587820021!2d-100.6146723!3d20.4492262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d34b6ab4bf325b%3A0x5b4571cf1b673f25!2sVento%20Motorcycles%20U.S.A%20Apaseo%20El%20Alto!5e1!3m2!1ses-419!2smx!4v1769037951956!5m2!1ses-419!2smx" 
    },
    {
      nombre: "150 Valle de Santiago",
      direccion: "Av. Arteaga 21, Centro, 38400 Valle de Santiago, Gto.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2220.4621355867835!2d-101.181699!3d20.3941965!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c8d007f54e33d%3A0xc105f3b5838358da!2sVento%20Motorcycles%20U.S.A%20Valle%20de%20Santiago!5e1!3m2!1ses-419!2smx!4v1769037997037!5m2!1ses-419!2smx" 
    },
    {
      nombre: "152 Acámbaro",
      direccion: "Calle Nicolas Bravo 491, Zona Centro, 38600 Acámbaro, Gto.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d556.4172034791258!2d-100.7256045!3d20.0297054!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cd7002fe93f95%3A0x9bb88a3b9b71a6bc!2sVento%20Motorcycles%20U.S.A%20Ac%C3%A1mbaro!5e1!3m2!1ses-419!2smx!4v1769038033871!5m2!1ses-419!2smx" 
    },
    {
      nombre: "158 San Luis de la Paz",
      direccion: "C. Sierra Gorda 101, Lindavista, 37906 San Luis de la Paz, Gto.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4414.37838143755!2d-100.5245101!3d21.296341299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d4cf0014c6731f%3A0xddf15923841b1931!2sVento%20Motorcycles%20U.S.A.%20San%20Luis%20De%20La%20Paz!5e1!3m2!1ses-419!2smx!4v1769038078472!5m2!1ses-419!2smx" 
    },
    {
      nombre: "159 Araucarias",
      direccion: "Av. Araucarias 715-739, Los Pinos II, 38028 Celaya, Gto.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4436.542735322815!2d-100.8417111!3d20.5457084!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cbb2c93a234ff%3A0xfa59b7ed1c24389b!2sVento%20Motorcycles%20U.S.A%20Araucarias!5e1!3m2!1ses-419!2smx!4v1769038115998!5m2!1ses-419!2smx" 
    },
    {
      nombre: "167 Salamanca",
      direccion: "Blvd. Faja de Oro 403, San Gonzalo, 36748 Salamanca, Gto.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d277.22513945468137!2d-101.1998062!3d20.5780915!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c85a30e0008b7%3A0xf51c4087adaa7a1!2sVento%20Motorcycles%20U.S.A%20Salamanca!5e1!3m2!1ses-419!2smx!4v1769038162349!5m2!1ses-419!2smx" 
    },
    {
      nombre: "168 Cortazar",
      direccion: "Calle Ignacio Allende 112, Centro, 38300 Cortazar, Gto.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4438.323598012834!2d-100.96253399999999!3d20.4842562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cbd7720ba0687%3A0x87b082f742da57e3!2sVento%20Motorcycles%20U.S.A%20Cortazar!5e1!3m2!1ses-419!2smx!4v1769038210400!5m2!1ses-419!2smx" 
    },
    {
      nombre: "187 Pátzcuaro",
      direccion: "Cto. General Ignacio Zaragoza 1475, Exhacienda San Nicolás, 61607 Pátzcuaro, Mich.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4465.339796531039!2d-101.61055499999999!3d19.529325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d970078237071%3A0x688bec4e6a47d478!2sVento%20Motorcycles%20U.S.A%20P%C3%A1tzcuaro!5e1!3m2!1ses-419!2smx!4v1769038263601!5m2!1ses-419!2smx" 
    },
    {
      nombre: "188 Paseo Poniente",
      direccion: "Av Francisco I. Madero Pte 11160-Interior 2, Villas de la Loma, 58336 Morelia, Mich.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1917.7394246693611!2d-101.29492654779374!3d19.686808518017752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d09d11f1a5b35%3A0x3457c018d6cb2fdc!2sVento%20Motorcycles%20U.S.A%20Paseo%20Poniente!5e1!3m2!1ses-419!2smx!4v1769038311927!5m2!1ses-419!2smx" 
    },
    {
      nombre: "189 San José Iturbide",
      direccion: "San Bernardino 8-104, Lomas Taurinas, 37984 San José Iturbide, Gto.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2211.5371709494875!2d-100.3817028!3d21.0048925!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d4bb0035a21f53%3A0xed61b6b46d3b779b!2sVento%20Motorcycles%20U.S.A%20San%20Jose%20Iturbe!5e1!3m2!1ses-419!2smx!4v1769038368156!5m2!1ses-419!2smx" 
    },
    {
      nombre: "191 Uruapan",
      direccion: "C. B. Uruapenses 39A, Centro, 60050 Uruapan, Mich.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d279.2726507973457!2d-102.0553485!3d19.4196848!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842de30060aa13ff%3A0xf645f8751423f001!2sVento%20Motorcycles%20U.S.A%20Uruapan!5e1!3m2!1ses-419!2smx!4v1769038410430!5m2!1ses-419!2smx" 
    },
    {
      nombre: "194 Manuel Doblado Gto.",
      direccion: "Calle Lic Benito Juarez Garcia 52-42, Centro, 36470 Cdad. Manuel Doblado, Gto.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2215.5881169758836!2d-101.9512148!3d20.7298361!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bf951103ccbfb%3A0xb90995f41aac8e57!2sVento%20Motorcycles%20U.S.A%20Manuel%20Doblado%20Gto.!5e1!3m2!1ses-419!2smx!4v1769038451530!5m2!1ses-419!2smx" 
    },
    {
      nombre: "196 Tarímbaro",
      direccion: "Av. El Prado 200, Fraccionamiento El Prado, 58880 Tarímbaro, Mich.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d234.65231799415383!2d-101.1303556!3d19.7790569!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d11ae97ecb8d5%3A0xa06c57f01369454e!2sVento%20Motorcycles%20U.S.A%20Tar%C3%ADmbaro!5e0!3m2!1ses-419!2smx!4v1769038495327!5m2!1ses-419!2smx" 
    },
    {
      nombre: "203 La Piedad",
      direccion: "C. Blvd. Lázaro Cárdenas 781, Peña, 59300 La Piedad de Cabadas, Mich.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2334.8047747182427!2d-102.03259074054104!3d20.348033582237075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c1f004e485651%3A0x1ea1243a6b0aefe7!2sVento%20Motorcycles%20U.S.A%20La%20Piedad!5e1!3m2!1ses-419!2smx!4v1769038545071!5m2!1ses-419!2smx" 
    },
    {
      nombre: "204 Zamora",
      direccion: "Avenue Virrey de Mendoza Ote. 416, Jardinadas, 59680 Zamora de Hidalgo, Mich.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d431.32089373150166!2d-102.28799110626416!3d19.975205798992764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842e89001823d989%3A0xb85063738fa35a52!2sVento%20Motorcycles%20U.S.A%20Zamora!5e1!3m2!1ses-419!2smx!4v1769038600294!5m2!1ses-419!2smx"
    },
    {
      nombre: "219 Leon Echeveste",
      direccion: "Blvrd Miguel Hidalgo 6596, Echeveste Nte., 37208 León de los Aldama, Gto.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2208.8102058159966!2d-101.6640045!3d21.1881305!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bb9000b27ed0f%3A0x7f13938ae051b766!2sVento%20Motorcycles%20U.S.A%20Le%C3%B3n%20Echeveste!5e1!3m2!1ses-419!2smx!4v1769038640206!5m2!1ses-419!2smx" 
    },
    {
      nombre: "220 Ciudad Hidalgo",
      direccion: "Av. Morelos Ote. 74, La Morita, 61140 Cdad. Hidalgo, Mich.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d278.8111941493907!2d-100.5489786!3d19.6864674!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2cb64119cc10f%3A0x79eff1f540ca2c02!2sVento%20Motorcycles%20U.S.A%20Ciudad%20Hidalgo!5e1!3m2!1ses-419!2smx!4v1769038684932!5m2!1ses-419!2smx" 
    },
    {
      nombre: "221 San Francisco del Rincon",
      direccion: "Blvd. Juventino Rosas 410, 8 OTE, 36310 San Francisco del Rincón, Gto.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1105.5889671539735!2d-101.85545189999999!3d21.0291185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842be9d870d95087%3A0x1d398efa060dac67!2sVento%20Motorcycles%20U.S.A%20San%20Francisco%20del%20Rinc%C3%B3n!5e1!3m2!1ses-419!2smx!4v1769038717342!5m2!1ses-419!2smx" 
    },
    {
      nombre: "224 Zacapu",
      direccion: "Portal Hidalgo, Centro, 58600 Zacapu, Mich.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d557.1599743692209!2d-101.7925526!3d19.8188379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842dc90040c691b5%3A0xdf26281a680d30a!2sVento%20Motorcycles%20U.S.A%20Zacapu!5e1!3m2!1ses-419!2smx!4v1769038753074!5m2!1ses-419!2smx" 
    },
    {
      nombre: "238 Villagran",
      direccion: "Vicente Guerrero 134, Zona Centro, 38260 Villagrán, Gto.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d449.71605765602027!2d-100.99630636137785!3d20.511998136310517!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c97cec1b38f53%3A0x868ff0581e1e2a1b!2sVicente%20Guerrero%20134%2C%20Zona%20Centro%2C%2038260%20Villagr%C3%A1n%2C%20Gto.!5e1!3m2!1ses-419!2smx!4v1769039039156!5m2!1ses-419!2smx" 
    },
    {
      nombre: "242 Los Reyes Michoacan",
      direccion: "16 de Septiembre 579, Centro, 60300 Los Reyes de Salgado, Mich.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.769611502733!2d-102.4729352!3d19.594368599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842e419a84ea2c35%3A0xc31e2d560d67a0ad!2s16%20de%20Septiembre%20579%2C%20Centro%2C%2060300%20Los%20Reyes%20de%20Salgado%2C%20Mich.!5e0!3m2!1ses-419!2smx!4v1769039230073!5m2!1ses-419!2smx"
    },
    {
      nombre: "252 Tacambaro",
      direccion: "6GJV+GRH Tacámbaro de Codallos, Michoacán",
      mapa:"https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d279.5948976432555!2d-101.4555256!3d19.2312751!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDEzJzUyLjciTiAxMDHCsDI3JzE5LjQiVw!5e1!3m2!1ses-419!2smx!4v1769039305841!5m2!1ses-419!2smx" 
    },
    {
      nombre: "253 Puruandiro",
      direccion: "Centro, 58500 Puruándiro, Mich.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d278.1063599262407!2d-101.5155171!3d20.0873841!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c517a284356bd%3A0x65a340a0e05d8358!2sVento%20Motorcycles%20U.S.A%20Puru%C3%A1ndiro!5e1!3m2!1ses-419!2smx!4v1769039398832!5m2!1ses-419!2smx" 
    },
    {
      nombre: "256 Zinapecuaro",
      direccion: "C. Ramón López Lara 1236, Centro, 58930 Zinapécuaro de Figueroa, Mich.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4456.236649214375!2d-100.82995749999999!3d19.8560111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d254c0177d793%3A0xdb6ae496395623fe!2sVento%20Motorcycles%20U.S.A%20Zinapecuaro!5e1!3m2!1ses-419!2smx!4v1769039447544!5m2!1ses-419!2smx" 
    },
    {
      nombre: "274 Morelia",
      direccion: "Av Pedregal 71, Linda Vista, 58150 Morelia, Mich.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d279.4533065972295!2d-101.21641548151636!3d19.70420295414355!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d0f00795477d9%3A0xb4b96eca11dd9080!2sVento%20Motorcycles%20U.S.A%20Agencia%20Oficial!5e1!3m2!1ses-419!2smx!4v1769039492770!5m2!1ses-419!2smx" 
    },
  ],

  Villahermosa: [
    {
      nombre: "42 Coatzacoalcos",
      direccion: "Av. Ignacio Zaragoza 907, Centro, 96400 Coatzacoalcos, Ver.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d236.96292634258708!2d-94.4259666!3d18.1451639!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85e9837fa4c53205%3A0xe64f6b65458a669f!2sVento%20Motorcycles%20U.S.A%20Coatzacoalcos!5e0!3m2!1ses-419!2smx!4v1769090688433!5m2!1ses-419!2smx"
    },
    {
      nombre: "43 Minatitlan",
      direccion: "Av Justo Sierra 24, Centro, 96700 Minatitlán, Ver.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d948.7064189757043!2d-94.548113!3d17.986845599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ea2922604da53d%3A0x1152c25cf4221ccf!2sVento%20Motorcycles%20U.S.A%20Minatitl%C3%A1n!5e0!3m2!1ses-419!2smx!4v1769090743660!5m2!1ses-419!2smx"
    },
    {
      nombre: "51 Villahermosa",
      direccion: "Av Universidad 385, Casa Blanca 2da Secc, 86090 Villahermosa, Tab.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9011.306195982572!2d-92.9169918!3d18.0143321!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85edd900402c0af1%3A0x4b5797b08a3a81c3!2sVento%20Motorcycles%20U.S.A%20Villahermosa!5e1!3m2!1ses-419!2smx!4v1769090788119!5m2!1ses-419!2smx"
    },
    {
      nombre: "52 Cardenas",
      direccion: "Lázaro Cárdenas del Río 1000, Centro, 86500 Cárdenas, Tab.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1126.6022496780045!2d-93.37819440000001!3d17.984750000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ec21a3285e7421%3A0x2808a2a5e2a342b1!2sVento%20Motorcycles%20U.S.A%20Cardenas!5e1!3m2!1ses-419!2smx!4v1769090844485!5m2!1ses-419!2smx"
    },
    {
      nombre: "53 Acayucan",
      direccion: "Pl. de Armas 105, Centro, 96000 Acayucan, Ver.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d237.22708597489677!2d-94.9127009!3d17.949246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ea0300316acf7f%3A0x5ac435fcc23dec9f!2sVento%20Motorcycles%20U.S.A%20Acayucan!5e0!3m2!1ses-419!2smx!4v1769090887183!5m2!1ses-419!2smx"
    },
    {
      nombre: "54 Comalcalco",
      direccion: "Ignacio López Rayón 124, Santa Amalia, 86360 Comalcalco, Tab.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d281.2129588075314!2d-93.217506!3d18.2569858!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ee8f556cb37ee5%3A0xf0f366f33933a5f0!2sVento%20Motorcycles%20U.S.A%20Comalcalco!5e1!3m2!1ses-419!2smx!4v1769090927766!5m2!1ses-419!2smx"
    },
    {
      nombre: "55 Cunduacan",
      direccion: "C. Ruiz Cortines Local 5, Centro, 86690 Cunduacán, Tab.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1126.064862638309!2d-93.17285723038088!3d18.068749598933724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ee81004789c88f%3A0x424fa3d50c4d043a!2sVento%20Motorcycles%20U.S.A%20Cunduac%C3%A1n!5e1!3m2!1ses-419!2smx!4v1769090995468!5m2!1ses-419!2smx"
    },
    {
      nombre: "79 Teapa",
      direccion: "C. Carlos Ramos 121, Centro, 86800 Teapa, Tab.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d282.3303621879146!2d-92.9506719!3d17.5537515!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85edb7007359dd13%3A0xd93f264936cc5b4b!2sVento%20Motorcycles%20U.S.A%20Teapa!5e1!3m2!1ses-419!2smx!4v1769091046032!5m2!1ses-419!2smx"
    },
    {
      nombre: "85 Huimanguillo",
      direccion: "Av Miguel Hidalgo Y C 334, Centro, 86400 Huimanguillo, Tab.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d281.88730794666753!2d-93.3921481!3d17.8357953!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ec230079eade3d%3A0xa358536fb163d47f!2sVento%20Motorcycles%20U.S.A%20Huimanguillo!5e1!3m2!1ses-419!2smx!4v1769091100673!5m2!1ses-419!2smx"
    },
    {
      nombre: "132 Paraíso",
      direccion: "Blvd. Manuel Antonio Romero Zurita 114, Quintin Arauz, 86608 Quintín Arauz, Tab.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15144.524072877723!2d-93.21980778895463!3d18.38688728160019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ee8d00694551f9%3A0xb4343828d51de64e!2sVento%20Motorcycles%20U.S.A%20Para%C3%ADso!5e0!3m2!1sen!2smx!4v1769091150749!5m2!1sen!2smx"
    },
    {
      nombre: "135 Frontera",
      direccion: "Grijalva 366-402, Centro, 86750 Frontera, Tab.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d472.8818173316043!2d-92.6494412!3d18.5264374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ee3beb634a1a4d%3A0x47683f6b0b2c022d!2sVento%20Motorcycles%20U.S.A%20Frontera!5e0!3m2!1sen!2smx!4v1769091202498!5m2!1sen!2smx"
    },
    {
      nombre: "139 Tamulte",
      direccion: "Av. Gregorio Méndez Magaña 2850, Col. Tamulte de las Barrancas, Vista Alegre, 86150 Villahermosa, Tab.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d237.19251483529322!2d-92.9541582!3d17.9750036!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85edd7006acda9b5%3A0xacf416bed4dc935c!2sVento%20Motorcycles%20U.S.A%20Tamulte!5e0!3m2!1sen!2smx!4v1769091249669!5m2!1sen!2smx"
    }
  ],

  Veracruz: [

    {
      nombre: "15 Tierra Blanca",
      direccion: "C. Pedro García 903, Centro, 95100 Tierra Blanca, Ver.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d473.09604912290644!2d-96.357457!3d18.4488221!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c389a1888ec57b%3A0xb0881f4023f95d67!2sVento%20Motorcycles%20U.S.A%20Tierra%20Blanca!5e0!3m2!1ses-419!2smx!4v1773962296785!5m2!1ses-419!2smx" 
    },

    {
      nombre: "16 Veracruz",
      direccion: "C. Pedro García 903, Centro, 95100 Tierra Blanca, Ver.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d473.09604912290644!2d-96.357457!3d18.4488221!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c389a1888ec57b%3A0xb0881f4023f95d67!2sVento%20Motorcycles%20U.S.A%20Tierra%20Blanca!5e0!3m2!1ses-419!2smx!4v1773962479217!5m2!1ses-419!2smx"
    },

    {
      nombre: "36 Xalapa",
      direccion: "Av. Manuel Ávila Camacho 166, Zona Centro, Centro, 91000 Xalapa-Enríquez, Ver.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235.00927966550998!2d-96.9321709!3d19.5352382!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2fc0004c1cd5%3A0x68b85632d48af76f!2sVento%20Motorcycles%20U.S.A%20Xalapa!5e0!3m2!1ses-419!2smx!4v1773962644984!5m2!1ses-419!2smx" 
    },

    {
      nombre: "37 Orizaba",
      direccion: "Pte. 7 1077, Centro, 94300 Centro, Ver.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2242.019479709791!2d-97.1132303!3d18.841209!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c503b8eff09e55%3A0xf00bc6dd27d5a0b4!2sVento%20Motorcycles%20U.S.A%20Orizaba!5e1!3m2!1ses-419!2smx!4v1773962925272!5m2!1ses-419!2smx" 
    },

    {
      nombre: "38 Cordoba",
      direccion: "Av 11 2217, San Jose, 94560 Córdoba, Ver.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d560.3170460149464!2d-96.9465995!3d18.8973943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c4e58a2ba05469%3A0x92981fd7e52c80ab!2sVento%20Motorcycles%20U.S.A%20C%C3%B3rdoba!5e1!3m2!1ses-419!2smx!4v1773962975709!5m2!1ses-419!2smx"
    },

    {
      nombre: "41 San Andrés Tuxtla",
      direccion: "Av. Benito Juárez, Centro, 95700 San Andrés Tuxtla, Ver.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15139.057956836758!2d-95.21257915967868!3d18.44899924823444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c2734b998d97ad%3A0xc17674d8f92973a7!2sVento%20Motorcycles%20U.S.A%20San%20Andr%C3%A9s%20Tuxtla!5e0!3m2!1ses-419!2smx!4v1773963027126!5m2!1ses-419!2smx" 
    },

    {
      nombre: "50 Veracruz Tejeria",
      direccion: "La Placita, Calzada Manuel De Jesús Clouthier S/N-Local 4, La Loma, 91727 Veracruz, Ver.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5952.728186979821!2d-96.22114000044688!3d19.16783937287216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c343a6cadb4c59%3A0x3eb3b6fb7ccf908a!2sVento%20Motorcycles%20U.S.A%20Tejer%C3%ADa!5e0!3m2!1ses-419!2smx!4v1773963117337!5m2!1ses-419!2smx" 
    },

    {
      nombre: "61 Boca del Rio",
      direccion: "Av Urano 585, Jardines de Mocambo, 94299 Boca del Río, Ver.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d559.4941996945695!2d-96.1104687!3d19.1416661!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c341004bd4676f%3A0x727509716755d529!2sVento%20Motorcycles%20U.S.A%20Boca%20del%20R%C3%ADo!5e1!3m2!1ses-419!2smx!4v1773963180834!5m2!1ses-419!2smx"
    },


    {
      nombre: "138 Plaza los Corales",
      direccion: "Dr. Rafael Cuervo X 248, Playa Linda, 91810 Veracruz, Ver.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877.3969625244634!2d-96.1750595999668!3d19.21563740244178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c3450016f9890b%3A0x6f3f36b978de8cf!2sVento%20Motorcycles%20U.S.A%20Plaza%20Los%20Corales!5e0!3m2!1ses-419!2smx!4v1773963243630!5m2!1ses-419!2smx" 
    },

    {
      nombre: "251 Coscomatepec",
      direccion: "Nacional 330, Coscomatepec de Bravo, Santa Rosa, 94140 Coscomatepec de Bravo, Ver.",
      mapa:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d279.8553214034495!2d-97.0397217!3d19.0777043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c4df006575b0a3%3A0x81974d25bd21ba45!2sVento%20Motorcycles%20U.S.A%20Coscomatepec!5e1!3m2!1ses-419!2smx!4v1773963288122!5m2!1ses-419!2smx" 
    },

    {
      nombre: "280 Perote",
      direccion: "Alejandro Von Humboldt Sur 24, Centro, 91273 Perote, Ver.",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4464.371466970018!2d-97.24965617410068!3d19.564324581743428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85dad1647c7c452f%3A0x9a89db33619b274f!2sVento%20Motorcycles%20U.S.A%20Perote!5e1!3m2!1ses-419!2smx!4v1773963364022!5m2!1ses-419!2smx" 
    }


  ],
};

function cargarAgencias(centro) {
  const tabla = document.getElementById("tablaAgencias");
  tabla.innerHTML = "";

  centros[centro].forEach(agencia => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${agencia.nombre}</td>
      <td>${agencia.direccion}</td>
    `;

    fila.onclick = () => {

  // Quitar selección previa
  document.querySelectorAll("#tablaAgencias tr")
    .forEach(tr => tr.classList.remove("agencia-activa"));

  // Marcar fila activa
  fila.classList.add("agencia-activa");

  // Cambiar mapa
  document.getElementById("mapa").src = agencia.mapa;
};


    tabla.appendChild(fila);
  });
}

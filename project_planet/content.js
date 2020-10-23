var use_keypad_entry = true;

var title_en = 'Project Planet';
var title_es = "Project Planet";

var nameDict_en = {
      '1': 'Barograph',
      '2': "Field Barograph",
      '3': 'Triple Register',
      '4': 'N.W.S. Balloon Kit',
      '5': 'Clinometer',
      '6': 'Sling psychrometer',
      '7': 'Radiosondes',
      '8': '1908 Fort Worth Flood',
      '9': 'Bioreactor',
      '10': 'Solar Panels',
      'error': 'Artifact Not Found!'
    };

var imageDict_en = {
      '1': 'images/1-Barometer.png',
      '2': 'images/2-Field Barograph.jpg',
      '3': 'images/3-Triple Register.png',
      '4': '',
      '5': 'images/5-Ceilometer.jpg',
      '6': 'images/6-heat_index.jpg',
      '7': '',
      '8': 'images/8-Flooding.jpg',
      '9': 'images/9-Prochlorococcus.jpg',
      '10': '',
      'error': ''
    };

var captionDict_en = {
  '1': "Drawing of a barometer from the 1893 Friez Instruments catalog.",
  '2': 'A woman makes atmospheric observations during World War II.',
  '3': 'Diagram showing how an early triple register would be connected to several instruments.',
  '4': "",
  '5': 'A modern-day laser ceilometer mounted in Ely, Nevada. These automated devices have largely replaced the clinometer for measuring cloud height. (Image credit: Famartin)',
  '6': 'The heat index describes how hot it feels for a given temperature and relative humidity. High relative humidity can create a dangerous situation even if the air temperature isn’t that high.',
  '7': '',
  '8': "An arial photograph showing the aftermath of the 1949 flood. Notice the Montgomery Ward building (now Montgomery Plazza) in today’s West 7th neighborhood near the top of the image. (Image credit: Lockheed Martin)",
  '9': "An electron microscope image of <i>Prochlorococcus</i>, a cyanobacteria responsible for producing around 20% of all oxygen on Earth.",
  '10': '',
  'error': ''
}

var textDict_en = {
  '1': 'Perhaps no measurement is more important to classical meteorology than pressure. Even today, TV meteorologists will mark “high-pressure systems” or “low-pressure fronts” on their weather maps. Pressure is the weight of the air above pushing down on us and it’s measured by a barometer.<p>The first barometers were developed in Italy in the mid-1600s, but it wasn’t until a century later that British inventor Alexander Cummings invented the first recording barometer, today called a barograph. And it wouldn’t be until after another century—now the mid-1800s—that practical barographs would be put into widespread use.<p>We don’t know exactly when this particular barograph was built, but an instrument catalog from 1893 shows very similar machines for sale. And they were used well into the 20th century, until digital recorders began to take over. Now, barometers are with us everywhere we go. If you’ve got a smartphone in your pocket or a fitness watch on your wrist, it’s got a tiny barometer on board to help refine your GPS position and measure the elevation you climb.',

  '2': `
    Accurate weather prediction is critical to operations during wartime. This field barograph was purchased by the U.S. Weather Bureau, but the model, a Friez ML-3, was also widely deployed with frontline troops.
    <p>
    A sensitive weather instrument was a valuable wartime material that couldn’t fall into enemy hands. That’s why the very first page of the operating manual lists instructions on how to effectively destroy it during a retreat or surrender. The options read as follows:
    <p>
    <b>Use anything immediately available for the destruction of this equipment<b>
    <p>
    <ol>
      <li>Smash—Case and entire instrument. Use sledges, axes, handaxes, pickaxes, hammers, crowbars, heavy tools.</li>
      <li>Break—Clock mechanisms, pen arm, and levers.</li>
      <li>Burn—Chart and technical manual. Use gasoline, kerosene, oil, flame throwers, incendiary grenades.</li>
      <li>Bury or scatter—All of the above pieces. Bury in slit trenches, fox holes, other holes. Throw in streams.</li>
    </ol>
    <b>Destroy Everything</b>
    <p>
    World War II laid the groundwork for modern weather forecasting, thanks in large part to the new importance of air combat. During air raids on Japan, American bombers discovered the existence of the jet stream. The war also saw the first practical use of radar and computers, both of which remain critical components of modern meteorology.
  `,

  '3': "This triple register was kind of like an analog hard drive. It didn’t measure anything itself; instead, multiple instruments could be attached via wires to the connection points on the front. Electrical signals traveling over the wires would cause one of the pen arms to move, tracing out a record of the data on a rotating paper cylinder.<p>The most common combination of measurements was wind speed and direction, hours of sunshine, and inches of rainfall. Single and double registers were also commonly used when fewer observations were needed. Some instruments, like the barographs in the case to the left, instead used a built-in register to record their measurements.",

  '4': "This kit was manufactured for use by the Fort Worth field office of the National Weather Service. Each kit consists of three parts: a weather balloon, a radiosonde, and a parachute. Every day, meteorologists release these devices from 92 locations in the United States and more than 800 around the world.<p>Unlike the ones you can buy at the store, the NWS often fills their balloons with hydrogen instead of helium. Hydrogen is highly flammable, but can be cheaper and is more plentiful. When the balloon is inflated on the ground, meteorologists fill it until it’s about 1.5 m (5’) in diameter. As it rises, the pressure of the air around it drops and the balloon expands to a size of up to 8 m (25’) before bursting at an altitude of around 35 km (22 mi).<p>The radiosonde is a small, battery-powered kit of instruments that hangs below the balloon and radios its data back to a recorder on the ground. Once the balloon pops, the parachute brings it safely back to Earth. Around 20% of radiosondes are later found, usually by ordinary citizens. If you find one, you can return it to the National Weather Service for reuse.",

  '5': "Understanding the altitude at which clouds are forming is a critical component of aviation safety. The clinometer provided a simple analog tool for making that measurement.<p>To use it, meteorologists would turn on a bright light that shined vertically into the sky. Then, they would walk a known distance away, like, say, a hundred meters. The clinometer is then pointed at the spot where the light beam appears to hit the clouds and the angle is read. Finally, a bit of simple trigonometry provides the height of the cloud.<p>Today, forecasters use an automated device, called the ceilometer, to measure the height of the cloud base. Ceilometers can work one of two ways. The first is exactly like the clinometer. The second is using LiDAR, which shines a laser beam vertically and measures the amount of time it takes to bounce back to the emitter. Since light travels at a specific speed, the beam’s travel time can be converted easily into a height. ",

  '6': "Relative humidity is an important property of the atmosphere and a key component of weather forecasting. It measures the air’s ability to absorb additional moisture. As the relative humidity increases, evaporation becomes more difficult. Since our body’s ability to sweat relies on evaporation, reducing its effectiveness increases how hot we feel. That’s why a muggy day can feel so hot, even if the air temperature is relatively low.<p>The sling psychrometer basically mimics sweat to measure relative humidity. To use it, a meteorologist would wet the bit of cloth connected to the top thermometer. Then, they would rapidly swing the psychrometer for several minutes. If the relative humidity was low, then the moisture in the cloth would easily evaporate, carrying away heat and reducing the temperature measured by the thermometer. The difference in temperature between that thermometer and the second, control thermometer could be looked up in a table and converted into an estimate of the relative humidity.<p>Modern weather instruments exploit another property of water: its ability to conduct electricity. Two wires are connected to an electronic component called a capacitor. The higher the humidity, the most easily the capacitor conducts electricity, allowing for a simple, digital measure of relative humidity.",

  '7': "The first remote atmospheric measurements were made in the 1800s using simple instruments attached to kites. These observations, however, were of limited utility since a tethered kite can’t get very high off the ground. A key breakthrough came with the invention of the radio. By 1929, simple radios could be made small enough to hang from a balloon and released to rise far higher than any kite. The first flight occurred in France and the term radiosonde comes to us from French.<p>By the late 30s, the U.S. Weather Bureau was regularly releasing radiosondes. Like many aspects of modern meteorology, the systematic and widespread use of weather balloons became entrenched during World War II. The devices seen here are representative of radiosondes used during the middle of the 20th century. The only major modification to the basic instrument package has been the addition of GPS tracking, which enables a much greater level of accuracy regarding where observations were made.<p>The radiosonde has even expanded beyond Earth. In 1985, the Soviet Union’s two Vega missions to Venus each released a radiosonde into the planet’s atmosphere. These observations remain some of our best measurements of our sister planet’s intense atmosphere.",

  '8': "Humans have lived and built on the banks of rivers for thousands of years. Fort Worth is no exception. But proximity to a river also means an increased risk of flood and the Trinity River has inundated Fort Worth numerous times. The photograph on display here shows the effects of a flood in 1908, which submerged parts of north Fort Worth. Bad floods in 1908, 1922, and 1936 led to the construction of Benbrook dam to help control the Trinity river. Although construction of the dam began in 1947, it wasn’t completed in time to prevent the disastrous 1949 flood.<p>After more than 11 inches of rain fell during the night of May 16th, the Trinity overflowed its banks and submerged much of central Fort Worth. Especially hard hit was the Linwood neighborhood and what is today the West 7th district. The flood caused ten deaths and left the city without drinkable water for three days. In the flood’s aftermath, the city constructed the levies that remain in place today. These levies, plus the Benbrook dam, have largely prevented serious flooding from happening since. They also made possible the amazing Trinity Trail bicycle path network.",

  '9': "We often think of trees as nature’s source of oxygen, but the large majority of it actually comes from the ocean. In fact, for most of Earth’s history, the atmosphere was almost entirely devoid of oxygen. Then, around 2.5 billion years ago, a microorganism in the ocean, cyanobacteria, evolved the ability to photosynthesize. That kicked off what scientists call the Great Oxygenation Event, which saw a permanent shift in the atmosphere’s composition. Today, billions of years later, cyanobacteria remain some of Earth’s most dominant species. One in particular, <i>Prochlorococcus</i>, is by itself responsible for around a fifth of all oxygen today.<p>Machines like the Hypergiant Bioreactor you see here are hoping the leverage that prowess to fight climate change. Within the bioreactor sits a mixture of algae, water, and other nutrients. As air is bubbled through the water, specialized machine learning algorithms control the level of light within the reactor to create optimal conditions for photosynthesis. A unit like this one is designed for use in a home or small business, but, one day, industrial scale bioreactors could help remove carbon dioxide from the atmosphere. ",

  '10': "Solar panels have seen an explosion of growth and innovation. The cost of a single solar panel today is around a quarter of what it was just ten years ago. At the same time, new panels have higher efficiency, meaning that each one generates more electricity for the same amount of sunlight. The end result is that home solar can be cost effective almost everywhere in Texas.<p>As more people put solar panels on their roofs, we will need to update the electrical grid to keep up. Solar power, of course, can only be produced during the day, so many people will still need to draw electricity from the grid at night. These larger swings between minimum and maximum grid usage can be offset with large, utility-scale batteries. And while there are definitely challenges for the grid, home solar may also lead to more resiliency. With fewer people dependent on a single, large power plant, the effects of that plant going offline will be reduced.<p>If you’re interested in putting solar panels on your roof, definitely check out <i>Project Planet</i> sponsor <a href='https://currentsolar.us' target='_blank'>Current Solar</a>. They’re based right here in Fort Worth and can help you get started. ",

  'error': "Oops, an artifact with that number does't seem to exist in this gallery. Please double check that you've selected the appropriate gallery and then try a different number!"
    };

var audioDict_en = {
  '1': 'audio/en/1-Barograph.mp3',
  '2': 'audio/en/2-Field barograph.mp3',
  '3': 'audio/en/3-triple register.mp3',
  '4': 'audio/en/4-balloon_kit.mp3',
  '5': 'audio/en/5-clinometer.mp3',
  '6': 'audio/en/6-psychrometer.mp3',
  '7': 'audio/en/7-radiosonde.mp3',
  '8': 'audio/en/8-flood.mp3',
  '9': 'audio/en/9-bioreactor.mp3',
  '10': 'audio/en/10-solar.mp3',
}

var nameDict_es = {
      '1': 'Núcleo de memoria UNIVAC 1105',
      '2': "Regla de cálculo de Alan Bean",
      '18': 'Pañal de contención de absorción desechable',
      '19': 'Dispositivo de recogida de orina',
      '22': 'Transbordador espacial portátil',
      '9': 'Parche de fugas de naves espaciales',
      '3': 'Preparación de alimentos pistola de agua',
      '8': 'Escudo de calor de la nave espacial Apollo',
      '10': '<i>Faith 7</i> Escudo térmico',
      '4': 'Mylar del Apollo 11',
      '7': 'Tarjeta de datos del módulo lunar',
      '6': 'Bandera de Fort Worth',
      '5': 'Bandera de estados unidos',
      '11': 'Toallas del módulo de comando Apollo',
      '12': 'Ventana del módulo de comando Apollo',
      '15': 'Bicicleta de ejercicio Skylab',
      '17': 'Panel de control del transbordador espacial',
      '16': 'Transbordador espacial baldosas térmicas',
      '21': 'Bebida De Piña Y Naranja',
      '20': 'Comida de fideos y pollo',
      '23': 'Overol de transbordador espacial',
      '13': "Traje de entrenamiento Apollo de Alan Bean",
      '14': "Traje térmico de traje espacial Apollo",
      'error': '¡Artefacto no encontrado!'
    };

var imageDict_es = {
      '1': 'images/S. UNIVAC.jpg',
      '2': 'images/T. Slide_rule.jpg',
      '18': 'images/U. Spacewalk.jpg',
      '19': 'images/V. ISS_toilet.jpg',
      '22': 'images/W. Shuttle_Computer.jpg',
      '9': '',
      '3': 'images/B. Gemini-3-food.jpg',
      '8': 'images/C. Apollo-heat-shield.jpg',
      '10': 'images/D. Mercury-capsule.jpeg',
      '4': 'images/E. A11-on-ship.jpg',
      '7': '',
      '6': '',
      '5': '',
      '11': 'images/I. Schmitt-shaving.jpg',
      '12': 'images/J. Skylab.jpg',
      '15': 'images/K. Conrad-on-bike.jpg',
      '17': 'images/L. Shuttle-flight-deck.jpg',
      '16': 'images/M. Shuttle-Discovery.jpg',
      '21': 'images/N. ISS-coffee.jpg',
      '20': 'images/O. ISS-chopsticks.jpg',
      '23': 'images/P. Sally-Ride.jpg',
      '13': 'images/Q. A12-training.jpg',
      '14': 'images/R. A11-suit.jpg',
      'error': ''
    };

var captionDict_es = {
  '1': 'La consola del operador en un UNIVAC 1105. Detrás, puede ver la computadora del tamaño de una habitación.',
  '2': 'Los ingenieros de la NASA usan una regla de cálculo como la que se ve aquí para hacer un cálculo.',
  '18': 'El astronauta Stephen Robinson realiza una caminata espacial como parte de la misión STS-114 del transbordador espacial.',
  '19': 'Uno de los dos baños disponibles a bordo de la Estación Espacial Internacional.',
  '22': 'El astronauta John Creighton usando una computadora GRiD a bordo del transbordador espacial Discovery en 1985.',
  '9': '',
  '3': 'La pistola de agua que se usa para rehidratar alimentos para Géminis 3.',
  '8': "Impresión artística de la NASA del Módulo de Comando que regresa a la Tierra.",
  '10': "<i>Faith 7</i> cápsula en exhibición en el Centro Espacial de Houston.",
  '4': 'Módulo de comando Apollo 11 después de la recuperación. Observe el oro Mylar en el exterior.',
  '7': '',
  '6': '',
  '5': '',
  '11': 'El astronauta del Apolo 17 Harrison Schmitt se afeita en el espacio.',
  '12': 'Skylab, la primera estación espacial estadounidense.',
  '15': 'El comandante de Skylab 2, Pete Conrad, monta la bicicleta estática a bordo.',
  '17': 'Cubierta de vuelo en el transbordador espacial <i>Endeavor</i>.',
  '16': 'Las baldosas térmicas oscuras son visibles cuando el transbordador espacial <i>Discovery</i> se acerca a la ISS.',
  '21': 'La astronauta italiana Samantha Cristoforetti toma café a bordo de la EEI.',
  '20': 'La astronauta Sunita Williams usando palillos mientras cenaba en 2007.',
  '23': 'La astronauta Sally Ride con overol a bordo del transbordador espacial <i>Challenger</i> en 1983.',
  '13': 'Los astronautas del Apollo 12 Pete Conrad y Alan Bean en sus trajes de entrenamiento.',
  '14': 'El equipo final utilizado por Neil Armstrong para caminar sobre la Luna.',
  'error': ''
}

var textDict_es = {
      '1': "En el momento de la carrera espacial, las computadoras llenaban habitaciones enteras. La ejecución del UNIVAC 1105 requería 160 kilovatios de potencia, suficiente para administrar 130 hogares modernos. En total, la computadora y el equipo necesarios para ejecutarlo utilizaron tanto espacio como todos los Innovation Studios. A pesar de estos enormes requisitos, su memoria solo podía contener aproximadamente 50 kb, suficiente para aproximadamente un tercio de segundo de música de un servicio de transmisión moderno. Sin embargo, computadoras como esta fueron una de las principales ventajas de Estados Unidos sobre la Unión Soviética durante la Carrera Espacial.",
      '2': "Las computadoras fueron la herramienta revolucionaria que hizo posible el aterrizaje en la Luna, pero muchos cálculos aún se hicieron mecánicamente. Aunque las calculadoras electrónicas comenzaban a estar disponibles, eran demasiado pesadas para llevarlas. Y alguien experto en la regla de cálculo puede hacer cálculos tan rápido o incluso más rápido que perforarlos en una máquina. Las reglas de deslizamiento permitieron al usuario multiplicar y dividir, así como calcular exponentes, logaritmos, raíces cuadradas y funciones trigonométricas como seno y coseno. Lo único que falta: ¡la capacidad de sumar o restar! El visto aquí era propiedad del astronauta Alan Bean durante su tiempo en el programa espacial.",
      '18': "Cuando estás en una caminata espacial, no hay oportunidad para tomar un baño. Para reducir la posibilidad de que tengan que ir, los astronautas regulan cuidadosamente su ingesta de alimentos y agua antes de una misión. Pero, dado que algunas caminatas espaciales pueden durar más de ocho horas, la llamada de la naturaleza a veces es inevitable. Las dos prendas que se ven aquí fueron fabricadas para su uso en misiones del transbordador espacial.",
      '19': "Durante la carrera espacial, los astronautas estadounidenses se aliviaron en bolsas sellables que luego fueron traídas para que los médicos en la Tierra las estudiaran. Pero, desde el lanzamiento de Skylab en 1973, los astronautas han tenido un camino más cómodo: el baño espacial. Como no hay gravedad en órbita, los tubos de succión se utilizan para arrastrar los desechos al sistema, donde se almacenan o se ventilan al espacio. La ISS tiene dos de estos inodoros, pero sus baños carecen de una amenidad que solo se encuentra en Skylab: una ducha. En cambio, los astronautas de hoy se dan baños de esponja y usan champú seco.",
      '22': "El espacio es un entorno desafiante para las computadoras. La radiación del sol puede alterar la memoria y desencadenar acciones inesperadas, mientras que la falta de gravedad causa problemas a los dispositivos con partes móviles. Para superar estos desafíos, las computadoras de vuelo en la mayoría de las naves espaciales usan procesadores endurecidos por radiación diseñados para su uso durante la guerra nuclear. A menudo también se usan varias computadoras, con una máquina de respaldo lista para asumir el control en un instante si se detecta un problema. Las computadoras portátiles modernas usan memoria de estado sólido en lugar de girar discos duros y se pueden usar de forma inmediata para funciones no esenciales como enviar correos electrónicos o mirar películas.",
      '9': "En el vacío del espacio, el aire es el recurso más preciado de un astronauta. Eso hace que una fuga sea una situación increíblemente grave. La nave espacial transportaba dispositivos como este parche, que podrían usarse para sellar rápidamente un pequeño pinchazo. Su parte inferior está cubierta de pegamento grueso para formar un sello hermético. La presión del aire dentro de la cápsula ayudaría a mantenerla en su lugar.",
      '3': "Los alimentos en el espacio se secan para reducir tanto su peso como su volumen. La mayoría de los alimentos contienen más del 50% de agua en peso e incluso las frutas secas como las pasas pueden ser casi un cuarto de agua. Los astronautas durante el programa Gemini rehidrataron sus alimentos utilizando un suministro de agua a bordo. La boquilla que ve aquí se colocaría dentro de una bolsa de comida para liberar una cantidad específica de agua. ¡No se proporcionó agua caliente hasta las misiones Apollo, por lo que los astronautas durante el Proyecto Géminis comerían su comida fría por hasta dos semanas a la vez!",
      '8': "Cuando los curadores del museo estaban seleccionando elementos para esta exposición, ¡casi se saltaron esta por completo! Se ingresó en nuestra base de datos no como un escudo térmico, sino como un pisapapeles, que definitivamente no suena tan interesante. Y el catálogo dice la verdad: la parte posterior de esta pieza está cubierta de fieltro. El escudo térmico en el interior proviene de AS-201, un vuelo de prueba sin tripulación del Módulo de Comando Apollo. La NASA cortó piezas del escudo y las convirtió en regalos para los astronautas del Apollo. Es un claro recordatorio de la delgada lámina de material que los protegió durante un ardiente regreso a la Tierra.",
      '10': "<i>Faith 7</i> fue la sexta y última misión del Proyecto Mercurio y transportó al astronauta Gordon Cooper en 22 órbitas de la Tierra. Cooper fue el primer astronauta estadounidense en pasar más de un día en el espacio. Cerca del final de su misión, la cápsula comenzó a experimentar varios fallos de funcionamiento que lo obligaron a iniciar un aterrizaje manual. Este escudo térmico lo protegió durante esa reentrada.",
      '4': "Aunque el espacio es extremadamente frío, perder calor es bastante difícil. En el vacío, la única forma de enfriarse es esperar a que su calor se irradie, un proceso que es relativamente ineficiente. Por eso, es importante evitar que una nave espacial se caliente demasiado. Al igual que aquí en la Tierra, una fuente importante de calor en el espacio es la luz del Sol. Este Mylar estaba cubierto por el exterior del Módulo de Comando Apolo 11 y reflejaba la luz del Sol para que no pudiera calentar la cápsula.<p>Entonces, ¿cómo terminamos con eso? Después de que el Módulo de Comando volviera a caer sobre la Tierra, los ingenieros quitaron pedazos de la lámina para llevarlos a casa como recuerdos. Dos de esas piezas finalmente terminaron en nuestra colección.",
      '7': "Las computadoras durante la carrera espacial fueron extremadamente primitivas para los estándares modernos. Aunque el Módulo de Comando Apollo y el Módulo Lunar llevaban una minicomputadora revolucionaria, muchos cálculos clave se realizaron en Control de Misión y luego se transmitieron por radio a los astronautas. Este libro proporcionó a los astronautas del Apollo 12 Alan Bean y Pete Conrad listas de verificación para el aterrizaje lunar y un lugar para anotar los datos enviados desde la Tierra. Puedes ver la letra de Bean en la página. Como piloto del módulo lunar, era su trabajo transmitir la información que Conrad necesitaba para aterrizar en la Luna.",
      '6': "Esta bandera de Fort Worth fue llevada a la superficie de la Luna por el astronauta del Apollo 12 y Alan Bean, nativo de Fort Worth. La NASA permitió que cada astronauta llevara consigo algunos efectos personales en la misión; muchos utilizaron esta asignación para llevar recuerdos para personas y organizaciones que eran importantes para ellos. Neil Armstrong estableció un capítulo de una fraternidad académica de la Universidad de Michigan, mientras que los astronautas del Apollo 15 dejaron un monumento a los astronautas asesinados durante la Carrera Espacial.",
      '5': "Alan Bean llevó esta bandera estadounidense a la superficie de la Luna en 1969. No fue la única: además de las dos banderas que se ven aquí, también tomó una bandera de Fort Worth para la Ciudad y una bandera de su alma mater, Escuela secundaria Paschal.",
      '11': "Además de todo el equipo especializado necesario para explorar el espacio, los astronautas también necesitaban herramientas más comunes. Estas pequeñas toallas vienen de serie con el módulo de comando Apollo y pasaron dos meses en el espacio cuando la cápsula sirvió como bote salvavidas para la estación espacial Skylab. En los viajes a la Luna, los astronautas usaban las toallas para la higiene personal, como lavarse la cara o afeitarse.",
      '12': "Skylab, la primera estación espacial estadounidense, se construyó a partir de los restos del programa Moon. Esta ventana pertenecía al Módulo de Comando Apollo que llevó a la tripulación del Skylab 3 a la estación, donde luego pasó dos meses en órbita. Después de que regresó a la Tierra, los científicos de la NASA examinaron el vidrio con un microscopio y descubrieron varios pequeños cráteres. Cada uno fue hecho por una mota de polvo que viajaba a más de 17,000 millas por hora.",
      '15': "El cuerpo humano y el espacio simplemente no se llevan bien. Casi tan pronto como alguien entra en órbita, su cuerpo comienza a descomponerse. Su vista empeora, sus huesos se vuelven más frágiles y sus músculos comienzan a debilitarse. Para combatir estos efectos, los astronautas en misiones espaciales de larga duración deben hacer ejercicio obsesivamente, a menudo durante horas al día. En Skylab, una bicicleta exactamente como esta era una herramienta que tenían a su disposición. Lo que no ves aquí es una computadora del tamaño de una maleta grande. Mientras los astronautas hacían ejercicio, la computadora midió su frecuencia cardíaca, consumo de oxígeno y producción de dióxido de carbono. Estos datos fueron transmitidos a los médicos en el terreno. Esta información informó a los científicos mientras se preparaban para que los astronautas pasaran meses o incluso un año a bordo de la Estación Espacial Internacional.",
      '17': "Aunque la cubierta de vuelo del transbordador espacial contenía nueve pantallas digitales, casi todos sus controles eran interruptores mecánicos como los que se ven aquí. Observe el anillo de metal a cada lado del interruptor. Estos sirvieron para dos propósitos. Una era reducir la probabilidad de activar accidentalmente el interruptor tropezando con él. El otro era proporcionar un lugar para enganchar un dedo mientras se usan los controles. Esto ayudó a evitar que un astronauta se alejara flotando mientras trabajaban los controles. Notará protectores de interruptor similares en la bicicleta de ejercicios Skylab a su izquierda.",
      '16': "Las baldosas térmicas fueron una innovación importante en el transbordador espacial, pero también una fuente de problemas recurrentes. Desde el principio, el Shuttle fue diseñado para viajes frecuentes al espacio, y la NASA en un momento estimó que podría haber más de 25 lanzamientos al año. Las baldosas térmicas fueron diseñadas para reemplazar los escudos térmicos tradicionales, como los que se muestran en la pared detrás de usted. En lugar de reemplazar con frecuencia un solo escudo voluminoso, las fichas individuales podrían reemplazarse a medida que se dañaran.<p>Desafortunadamente, aunque extremadamente resistentes al calor, las fichas eran bastante frágiles y necesitaban un reemplazo frecuente. Y en 2003, un azulejo fue derribado durante el lanzamiento por un trozo de hielo, causando la destrucción del transbordador espacial <i>Columbia</i> y la pérdida de su tripulación.",
      '21': "Al igual que aquí en la Tierra, la hidratación es clave para mantener una buena salud para los astronautas. Y una buena hidratación es más que solo agua: es importante obtener suficientes electrolitos o sales con sus bebidas. Los primeros astronautas simplemente recibieron agua pura y tabletas de sal, pero a menudo se usaron en una proporción incorrecta. Las bebidas espaciales modernas, como esta bebida de naranja y piña, pueden ser saludables y sabrosas, asegurando que los astronautas se mantengan bien hidratados.",
      '20': "La comida en las primeras misiones espaciales fue simplemente terrible. Las comidas típicas implicarían combinaciones de cubos deshidratados y pastas que, aunque nutritivas, apenas califican como alimento. Muchos astronautas encontraron las comidas tan desagradables que simplemente no comerían o comerían lo menos posible. Ese enfoque no es sostenible ahora que estamos enviando personas al espacio durante meses, por lo que la comida espacial moderna se ha mejorado drásticamente. Los astronautas de la Estación Espacial Internacional pueden elegir entre docenas de comidas diferentes, incluidos alimentos básicos multiculturales como el kimchi.",
      '23': "Overoles como estos fueron usados ​​por los astronautas en las primeras misiones de Shuttle durante las fases de lanzamiento y reentrada. Debido a que se suponía que el transbordador espacial representaría una nueva era más segura de los vuelos espaciales, la NASA no requirió los trajes de presión voluminosos que usaron los astronautas durante la carrera espacial. Todo eso cambió después del accidente de <i>Challenger</i> de 1986, que resultó en la pérdida de la tripulación.",
      '13': "De los doce hombres que caminaron en la Luna, solo uno era científico. El resto recibió una amplia formación científica, especialmente en geología. El astronauta del Apollo 12, Alan Bean, usó este traje mientras completaba actividades de entrenamiento de misión en el desierto. Los astronautas practicaban identificar y recolectar muestras de rocas, desplegar experimentos y simplemente maniobrar con sus voluminosos trajes.",
      '14': "Los primeros astronautas de la caminata espacial encontraron el mismo problema: el calor. Aunque el espacio puede ser muy frío, los trajes espaciales atrapan el calor de manera efectiva. En las primeras caminatas espaciales, los astronautas sudaban tanto que sus cascos se empañaron y algunos incluso se sobrecalentaron peligrosamente. La NASA sabía que los Moonwalkers no podían permitirse estos problemas, por lo que desarrollaron métodos para mantener a los astronautas frescos con su traje. Fue producido en 1965 para Edgar Mitchell, quien finalmente caminó en la Luna como parte del Apollo 14. Pero cuando lo hizo, no estaba usando esto. Para entonces, la NASA se había decidido por un diseño que hacía circular agua fría a través del traje y permitía a cada astronauta establecer su temperatura preferida.",
      'error': "Vaya, un artefacto con ese número no parece existir en esta galería. ¡Verifique que haya seleccionado la galería apropiada y luego intente con un número diferente!"
    };

var audioDict_es = {
}

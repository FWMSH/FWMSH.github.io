var use_keypad_entry = false;

var title_en = 'Changemakers';
var title_es = "Spanish Title";

var show_input_button_label_en = "Choose Story";
var inputLabel_text_en = "Choose a Story";
//  var inputLabel_text_en = 'Use the keypad to enter a label number';


var nameDict_en = {
      '1': 'Erika Anderson<br><small><small><i>Mechanical Engineer</small></small></i>',
      "2": "Bessie Coleman<br><small><small><i>Aviator</small></small></i>",
      "3": "Minerva Cordero, Ph.D.<br><small><small><i>Mathematician</small></small></i>",
      "4": "Jessica Esquivel, Ph.D.<br><small><small><i>Physicist</small></small></i>",
      "5": "Mary Keys Gipson<br><small><small><i>Nurse</small></small></i>",
      "6": "Erika Hamden, Ph.D.<br><small><small><i>Astrophysicist</small></small></i>",
      "7": "Opal Lee<br><small><small><i>Civil Rights Activist</small></small></i>",
      "8": "Jenn Makins<br><small><small><i>Educator</small></small></i>",
      "9": "Amanda Masino, Ph.D.<br><small><small><i>Geneticist</small></small></i>",
      "10": "<small>Julie Mirpuri-Hathiramani, M.D.</small><br><small><small><i>Neonatologist</small></small></i>",
      "11": "Harshini Mukundan, Ph.D.<br><small><small><i>Biomedical Researcher</small></small></i>",
      "12": "Charlie Mary Noble<br><small><small><i>Educator</small></small></i>",
      "13": "May Owen, M.D.<br><small><small><i>Pathologist</small></small></i>",
      "14": "Myria Perez<br><small><small><i>Fossil Preparator</small></small></i>",
      "15": "Nina Niu Sanford, M.D.<br><small><small><i>Radiation Oncologist</small></small></i>",
      "16": "Nikki Sereika<br><small><small><i>Aircraft Technician</small></small></i>",
      "17": "Jennifer Stimpson, Ed.D.<br><small><small><i>Educator</small></small></i>",
      "18": "<small>Kirsten Tulchin-Francis, Ph.D.</small><br><small><small><i>Engineer</small></small></i>",
      "19": "Jeana Lee Yeager<br><small><small><i>Aviator</small></small></i>",
      'error': 'Person Not Found!'
    };

var thumbDict_en = {
    '1': 'thumbs/1-Anderson.jpg',
    '2': 'thumbs/Coleman.jpg',
    '3': 'thumbs/3-Cordero.jpg',
    '4': 'thumbs/4-Esquivel.jpg',
    '5': 'thumbs/Gipson.jpg',
    '6': 'thumbs/Hamden.jpg',
    '7': 'thumbs/Lee.jpg',
    '8': 'thumbs/Makins.jpg',
    '9': 'thumbs/Masino.jpg',
    '10': 'thumbs/Mirpuri.jpg',
    '11': 'thumbs/Mukundan.jpg',
    '12': 'thumbs/Noble.jpg',
    '13': 'thumbs/Owen.jpg',
    '14': 'thumbs/Parez.jpg',
    '15': 'thumbs/Sanford.jpg',
    '16': 'thumbs/Sereika.jpg',
    '17': 'thumbs/Stimpson.jpg',
    '18': 'thumbs/Tulchin.jpg',
    '19': 'thumbs/Yeager.jpg',
}

var imageDict_en = {
  '2': "images/Coleman.jpg",
  '5': "images/Gipsom.jpeg",
  '7': "images/Lee.jpeg",
  '13': "images/Owen.jpg",
}

var captionDict_en = {
  '2': "Bessie Coleman, c. 1922. Bessie Coleman was the first African American and Native American woman to hold a pilot’s license.",
  '5': "Mary Keys Gipson, c. 1952. Mary Keys Gipson was the first black graduate of an accredited nursing school to work in the South. She is shown here with her diploma from the Chautauqua School of Nursing.",
  '7': "Opal Lee, c.2020. For over 40 years, Opal Lee has been attempting to get the federal government to recognize Juneteenth as a national holiday. Since 2016, Opal Lee has led her famous “Opal’s Walk 2 DC,” a Juneteenth walk intended to raise awareness for the cause.",
  '13': "May Owen, c. 1984. This photo was taken for the revised opening of the Dr. Louis Levy Physiology Hall. By this time Dr. Owen had already had her name on the Museum’s Dr. May Owen Hall of Medical History and Health (1965) and the Dr. May Owen Hall of Medical Science (1968). Dr. Owen died in 1988, so the photo was taken approximately 4 years before her death.",
  'error': ''
}

var youTubeDict_en = {
  '1': "https://www.youtube.com/embed/569y3EEUuBo",
  '3': "https://www.youtube.com/embed/tkLdJSvO2l8",
  '4': "https://www.youtube.com/embed/dP-d-vaEq8U",
  '6': "https://www.youtube.com/embed/z0a1p_oUDgE",
  '8': "https://www.youtube.com/embed/y_jniSvbpvE",
  '9': "https://www.youtube.com/embed/NvcYz8tGQIc",
  '10': "https://www.youtube.com/embed/aO2oN7WA_a8",
  '11': "https://www.youtube.com/embed/zUMp4ay8KKg",
  '12': "https://www.youtube.com/embed/RQSvYDpc4Mk",
  '14': "https://www.youtube.com/embed/Sa9ZNMYkYFc",
  '15': "https://www.youtube.com/embed/9i-b_7Gmk4k",
  '16': "https://www.youtube.com/embed/rSp_uunWvV0",
  '17': "https://www.youtube.com/embed/OdHHclDKMfc",
  '18': "https://www.youtube.com/embed/sS7DtwyS-Jk",
}

var textDict_en = {
  '1': "Atlanta native Erika Anderson is a self-proclaimed education enthusiast who graduated with honors with Bachelor’s degrees in Mathematics and Mechanical Engineering from Spelman College and Georgia Institute of Technology, respectively. While progressing through her college studies, Erika worked as a math tutor and teacher’s assistant, served as the Academic Excellence chair on the National Society of Black Engineers’ executive board, and performed biostatics research modeling cellular aging. Not only was she active on campus during the school year, she spent her summers gaining real industry experience, doing things like analyzing stress/strain data for liquid hydrogen tanks at NASA, performing flight data analysis on plane engines at GE Aviation, and calculating the probability of failure for heat exchangers at ExxonMobil. It was this experience that ultimately landed her a full-time job at ExxonMobil, the company for which she has now worked for the last 5 years. Being a Mechanical Engineer at ExxonMobil’s refinery in Beaumont, Texas presented plenty of opportunities to grow her technical and leadership skills. As a Fixed Equipment Strategy Facilitator, she led a cross functional team of Mechanical and Chemical Engineers, Unit Inspectors, and Process Operators to perform risk assessments on refinery equipment to identify and mitigate potential equipment failures. From small 2 inch pipe lines to 60 feet tall distillation towers and every type of process equipment in between, Erika’s team ensures that this refinery equipment is fit for service and able to safely refine crude oil to produce end products such as gasoline, diesel, jet fuel, waxes, asphalt and even plastic! As a result of her performance in that role, Erika was recently relocated to ExxonMobil’s Houston headquarters to join their Research and Engineering group as a Reliability Engineer. She now applies her refinery experience and technical expertise to provide engineering support to ExxonMobil’s refineries and chemical plants all across the globe!<p>In addition to her engineering role, she has also had the pleasure of fulfilling her passion for service by serving as the Community Outreach Chair of ExxonMobil’s Black Employee Success Team. In this role, she coordinates several of the company’s volunteer initiatives such as math tutoring at a local middle school and leading STEM design challenges for students in the Texas Alliance for Minorities in Engineering program (TAME). Inspired by a passion for education and love of music, Erika recently founded her own organization, The Math Lab, which offers an engaging alternative to traditional classroom and online teaching by presenting math lessons through a seamless combination of music and curriculum-based mathematics. In fact, The Math Lab is the brain child of she and her late husband, Wick Anderson. Even though he is no longer physically here to share in its success, Erika takes pride in knowing that she is cultivating the seeds they planted together by furthering their mission to prepare scholars for academic success.",

  '2': "Atlanta, Texas -- A talented student, Bessie Coleman quickly realized she yearned for an advanced education. In 1910, when Coleman was only 18 years old, she took all of the money she had saved to enroll in the \"Colored Agricultural and Normal University\" in Langston, Oklahoma. In 1915, Coleman moved to Chicago to live with her brother, who had served in the military in WWI. Her brother inspired her to become a pilot after he recounted stories of French female pilots he saw while stationed in France. In 1919, Coleman moved to France to seek out a flying instructor, realizing no one in the United States would be willing to teach her. After she returned, Coleman performed flight shows for curious audiences, and in 1925, Coleman put a down payment on a Jenny-JN-4 with an OX-5 engine at Dallas Love Field Airport. In 1926, during a test flight with her mechanic, the plane malfunctioned, tragically ending Coleman's life at the young age of 34. Her legacy lived on. After her death, the Bessie Coleman Aero Club (1929) and the Bessie Coleman Aviators Club (1977) used her namesake to honor her flying career. In 1995, the United States Postal Service issue a stamp, commemorating her accomplishments.",

  "3": "Arlington, Texas -- Mathematician and 2016 Ford Legendary Woman, Minerva Cordero, is a Professor of Mathematics and Associate Dean in the College of Science at the University of Texas at Arlington. She is a renowned researcher in the area of Finite Geometries and has presented her research at numerous national and international conferences. Her passion for mathematics began early in her life with what she calls “the sternest teacher ever”, her fourth-grade math teacher. She describes her research as creating the building blocks necessary to develop secure encrypting mechanisms. Her teaching career spans over 25 years, and her passion and excellence in the classroom have been recognized by several prestigious teaching awards. She is equally passionate about increasing the number of women and other underrepresented minorities in mathematics and science. Minerva holds three degrees in mathematics: a doctorate (PhD) from the University of Iowa, a Master of Arts from the University of California-Berkeley, and a Bachelor of Science degree from the University of Puerto Rico, her native land. She and her husband, who is also a mathematics professor, have two sons who also love mathematics!",

  "4": "Batavia, Illinois -- Dr. Jessica Esquivel is a Postdoctoral Research Associate at Fermi National Accelerator Laboratory working on the Muon g-2 Experiment which is tasked with observing physics beyond the standard model. She is one of ~150 black women with a PhD in physics in the country and the 2nd black woman to graduate with a PhD in physics from Syracuse University and has experience navigating spaces where she is “the first” or “the only”. Her graduate research focused on studying ghostly particles called neutrinos interacting in the MicroBooNE Experiment using innovative machine learning techniques like those used in facial recognition software. She received her bachelors in Electrical Engineering and Applied Physics from St. Mary’s University in San Antonio, TX. She identifies as female, black, afrolatinx, lesbian, a physicist, and Texan. Dr. Esquivel is an advocate for increasing diversity in physics and focuses on the intersections of race, gender and sexuality in her outreach efforts. She has been recognized by The Fermilab Friends for Science Education Organization for the exceptional contributions she’s made to Fermilab’s K-12 education and outreach programs, was featured in Adler Planetarium’s Chicago Black Women in STEAM series, interviewed by Lean In: Women of Color for Black Women’s Equal Pay Day discussing the gender wage gap for black women, and interviewed by Casual Space’s Beth Mund discussing neutrinos, what makes a scientist, and finding inspiration in weird places. Her most recent accomplishments include organizing the participation and sponsorship of Fermilab at Wakandacon, a 3-day afro-futuristic convention that strives to create a safe space for the black community to explore their interests from comic culture to STEM and being named The American Association for the Advancement of the Sciences IF/THEN Ambassador, a program that looks to inspire middle school girls to become the next generation of STEM pioneers. Dr. Esquivel is a Texas transplant living in Illinois with her wife and two furry rescue animals (Treadaway and Daisy Dukes Esquivel).",

  "5": "Fort Worth, Texas-- Mary Keys Gipson (also known as Mary Keys Gibson) was born into slavery in Mississippi in 1854. After the Civil War, Gipson and her family moved West to Sherman, Texas. After getting married, Gipson and her husband, Reverend Franklin Gipson, moved to Fort Worth in 1872. Little is known of her early years, but records show that in 1903, Gipson entered the Chautauqua School of Nursing Correspondence School based out of Jamestown, New York.<p>In 1907 Gipson graduated the Chautauqua School of Nursing and was awarded her nursing certificate at the age of 53. Gipson became the first black graduate of an accredited nursing school to work in the South. After earning her degree, Gipson became involved in the Texas Graduate Nurses Association and helped lobby the Texas legislature to standardize the requirements for nursing.<p>Gipson worked throughout her life to desegregate the field of nursing. She was a founder of the National Association of Colored Graduate Nurses, and, in 1948, Gipson’s work helped lead to the integration of the American Nurses’ Association. Gibson died in 1952 at the age of 98, and her impact on the field of nursing is incalculable.",

  "6": "Tucson, Arizona-- Dr. Erika Hamden is one of the few lucky people on earth whose job is to build telescopes. She is a professor of astrophysics at the University of Arizona, and lives in Tucson, Arizona with her cactuses. As an astrophysicist, she focuses on measuring and mapping some of the faintest stuff in the universe: diffuse clouds of hydrogen around distant galaxies and within star forming regions in our own galaxy. Her most recent project is developing Hyperion, a UV space telescope she has proposed to NASA for funding to build. Her work is driven by a desire to know and understand more about the universe around us, which can sometimes require building new telescopes and inventing new detectors to make telescopes better. After dropping out of MIT in the first semester, Erika went to Harvard, graduating in 2006 and earned a PhD from Columbia in 2014. She spent four years as a prize postdoctoral fellow at Caltech. She was awarded a Nancy Grace Roman Technology Fellowship for her detector work in 2016 and a PECASE in 2019. She is a TED Fellow and worked as a chef for a year before beginning grad school. She has a serious yoga practice and is learning to fly a plane.",

  "7": "Fort Worth, Texas -- When Opal Lee was only 12 years old, white supremacists vandalized and torched her family’s Fort Worth home on June 19, 1939, which left a lasting impact on her and her community. For over 40 years, Opal Lee has been attempting to get the federal government to recognize Juneteenth as a national holiday. Lee graduated college in 1953 and worked as an educator and counselor for Fort Worth ISD until her retirement in 1977. After her retirement, Lee became deeply involved in the Fort Worth community, and she helped establish the Tarrant County Black Historical & Genealogical Society. She also served on the Historic & Cultural Landmarks Commission, AIDS Outreach committee, Evans Avenue Business Association, Good Samaritans, and Riverside Neighborhood Advisory Council. Into her 90s, Opal Lee has continued to be active in the Fort Worth Community, and on top of all her other volunteer work, she heads the Annual Fort Worth Juneteenth Celebration. Since 2016, Lee has led her famous, “Opals Walk To DC,” which aims to generate support for her mission to get Juneteenth recognized at the national level.",

  "8": "Dallas, Texas -- Visit North Texas’s premier educational makerspace, the 8,500 sq. ft. Design Den inside Parish Episcopal School and you will likely find Jenn Makins tinkering with one of the many machines or coaching the school’s award-winning NASA Human Exploration Rover Challenge team. As Director of STEM Education, she is the architect and steward of the school’s nationally recognized STEM program and Executive Director of MAKERplay an educational service outreach program that brings STEM activities to children facing extended hospital stays. Her sixteen years as a STEM educator has led to impacts at both the national and regional levels. While at NASA, Jenn led the development of engineering challenges and teacher professional development workshops. At home in Dallas, Jenn consults for schools seeking to establish STEM programs and is a fixture of the FIRST LEGO League Robotics community. Jenn holds a Master of Arts in International Science & Technology Policy from The George Washington University and a Bachelor of Science in Kinesiology from Texas A&M University. In 2018 she received a patent (USPO 10,083,492 B2) for her work developing a social educational online platform.",

  "9": "Austin, Texas -- Amanda Masino, Ph.D., is a geneticist who believes science is stronger if everyone contributes. She applies this “Science+ Social Justice” model in her work as Associate Professor of Biology and Chair of Natural Science at Huston-Tillotson University (HT), a historically Black college in Austin, Texas. Amanda and her students in HT’s STEM Research Scholars Program apply scientific investigation to tackle a range of community problems. She studies heart disease patient data to understand the health disparities that impact African-American and Latinx communities. She engages lower income residents being displaced by gentrification to help improve affordable housing programs. And she studies urban wildlife to understand environmental contamination in distinct areas of the city. Amanda founded the Austin Community Data Coalition and is Co-Director of the Dumpster Project, a K-16 environmental learning experiment. She advocates frequently for environmental justice and diversity in science.",

  "10": "Dallas, Texas -- A doctor and a scientist, Julie Mirpuri has dedicated her life to saving newborn babies. A board-certified pediatrician, Julie underwent advanced training to specialize in neonatal care and as a scientist who can study immune cells and how they interact with bacteria. When she is not in the hospital taking care of sick babies, she works in her laboratory to develop new therapies to impact more babies’ lives. She has authored several original research publications and has received several awards in recognition of her contributions to neonatal research. Julie believes the key to preventing disease in babies lies in their poop. By studying how newborn babies become colonized with bacteria she hopes to be able to manipulate their bacteria to protect them from developing disease. She collects stool from newborn babies and mice to understand how the environment before and after birth affects bacterial gut colonization. In her world, stool is cool. Julie trained in neonatology at Emory University in Atlanta. She now lives in Dallas, Texas with her husband and 2 sons. She practices medicine and does her research at UT Southwestern Medical Center.",

  "11": "Los Alamos, New Mexico -- Can you imagine a scenario where one single test could diagnose any infection? There are currently no universal methods for the diagnosis of all infection! Currently, diagnosis of infection depends on symptoms, knowledge of what is “going around,” and available resources. Biologist Harshini Mukundan hopes to solve this problem by developing universal diagnostics to identify all infections, within minutes, in your doctor’s office. In her current role as team leader at the Los Alamos National Laboratory, Harshi is developing diagnostics that can be used in resource-poor regions of the world. Harshi Mukundan holds a Master’s Degree in Microbiology, and a Ph. D in Biomedical Sciences. She has worked on developing diagnostics for various diseases such as tuberculosis and cancer. She is a passionate research mentor to interns in various stages of their career, and an active STEM advocate. Harshi enjoys several hobbies including reading, dancing and hiking. She and her husband live in beautiful Los Alamos, New Mexico with their two wonderful children and their pet tortoise.",

  "12": "Fort Worth, Texas -- Charlie Mary Noble went to college in the 1890s when few women did, earning her Bachelor’s degree in science from the University of Texas and a Master’s degree in science from Texas Christian University (TCU).<p>Noble began her career as a math teacher at Pascal High school in 1897 and teaching became the greatest love of her life. After 22 years she became head of the math department. While there she started the Penta Club, one of the first science clubs for young people in Fort Worth. After 46 years of dedicated service, she retired from the high school—but not from teaching.<p>In the mid 1940s, during WWII, Noble was asked to teach a celestial navigation class for U.S. Navy officer trainees at TCU. In 1947 she began teaching an astronomy course at TCU. That same year she organized a Junior Astronomy Club at the Fort Worth Children’s Museum, which would later become the Fort Worth Museum of Science and History.<p>In recognition of her many years of service Noble received an honorary doctorate from TCU in 1950. In 1954 she received the Altrusa Civic Award as the “First Lady of Fort Worth” for stimulating interest of astronomy in young people. In 1955 the Museum’s planetarium was dedicated to her. And in 1956 she became the first woman to receive the Astronomical Leagues’ annual award for her advancement of astronomical knowledge.<p>In 1957 and 1958 Noble organized and ran the Moonwatch Program. Moon-watchers, who were all members of her Junior Astronomy Club at the museum, tracked the positions of Sputnik and other satellites for the U.S. government that allowed scientists to determine their precise orbits. The Moonwatch team was recognized for its work by the Smithsonian Astrophysical Observatory.<p>Noble passed away a year later in 1959, but her great heavenly achievements will never be forgotten. Her work continues at the Museum.",

  "13": "Fort Worth, Texas -- Born in Falls County, Texas, Owen was inspired to pursue a career in pathology during the 1918 Spanish Flu pandemic. Owen attended medical school at the University of Louisville School of Medicine, one of the few schools that allowed women at the time. After brief study in Minnesota and Wisconsin, Owen returned to Texas to practice medicine in Fort Worth. In 1933, Owen accepted a position at the Bellevue Hospital in New York City where she made the landmark discover that Talcum Powder used on surgical gloves caused infection. In 1947, the Tarrant County Medical Society elected Owen as president of the organization, making her the first woman to ever hold that position. In 1960, Owen became the first woman to be president of the Texas Medical Association, and in 1969, she became the first woman to receive the Distinguished Service Award of the Texas Medical Association. In 1986, Owen was inducted into the Texas Women's Hall of Fame.",

  "14": "Dallas, Texas -- Like most children, Myria Perez was fascinated with dinosaurs when she was young. Her passion for prehistoric life led her to volunteer at her local Houston Museum of Natural Science (HMNS) at the age of twelve. There, she found mentors, learned to prepare fossils, cared for museum specimens, and went on excavations with the paleo crew in North Texas. During this time, she was an active Girl Scout and completed her Gold Award project with the HMNS. Myria worked on a variety of fossil vertebrates as an undergraduate at Southern Methodist University including marine reptiles from across the globe. She conducted undergraduate research and was a part of a Smithsonian Institution exhibition on Cretaceous reptiles from Angola. During her collegiate years, she could be found competing SMU’s ballroom dance team. Myria graduated from Southern Methodist University with a Bachelor of Science in Geology and a Bachelor of Arts in Anthropology. She is now working as a Fossil Preparator at the Perot Museum of Natural Science in Dallas, Texas and has a rescue dog named Buddy.",

  "15": "Dallas, Texas -- Dr. Nina Niu Sanford is an attending radiation oncologist who cares for cancer patients receiving radiation therapy as part of their treatment plan. Nina describes radiation therapy as both an art and a science – it involves an understanding of math and physics on how radiation causes injury to the cancer cell on a molecular level, as well as the ability to think three dimensionally to design radiation plans that maximally target the cancer while sparing normal tissue. She’s currently a radiation oncologist at UT Southwestern in Dallas, TX where she’s involved in a combination of hands-on patient care and cutting-edge clinical research with the goal of improving outcomes for generations of patients to come. Nina was born in Beijing, China and immigrated to the United States at the age of 3. She was fluent in Mandarin upon arriving in the US and continued to speak Mandarin with her parents during her childhood when she lived in Boston, MA. She went on to attend Princeton University where she majored in Spanish and pre-medical studies. Her fluency in multiple languages has been an important asset to her now as a physician. After college, she attended Harvard Medical School, followed by training in radiation oncology at Massachusetts General Hospital and Brigham and Women’s Hospital in Boston, MA. Dr. Sanford currently resides in Dallas, TX with her husband, Dr. Ethan Sanford and their two daughters.",

  "16": "Sachse, Texas -- As the daughter of an engineer for the U.S. State Department, Nicole lived throughout the United States as well as Egypt and South Africa. Flying so often gave her the comfort level and confidence that has propelled her to become one of the few female Aircraft Maintenance Technicians at Southwest Airlines. After receiving her Bachelor of Arts in Communications from The Catholic University of America in Washington, D.C., Nicole started her career with Southwest Airlines. She then earned her Airframe and Powerplant Certifications, Boeing 737 Engine run and Taxi Qualifications and her ETOPS Qualifications. To date, she has maintained five types of Boeing 737 airplanes. Every year she and fellow Aircraft Maintenance Technicians attend the Women in Aviation Conference. Nicole brings her love of the job to middle school children during Southwest Airlines Aviation Days, and encourages young girls to pursue a field in aviation. Nicole has a loving family with her husband and three daughters. She is working on becoming a Certified Therapeutic Riding Instructor for people with special needs.",

  "17": "Dallas, Texas -- With a global vision to create change, educator and innovator Jennifer Stimpson is passionate about educating the next generation of scientists. For two decades, Ms. Stimpson has served as a science teacher and community volunteer, who blends science with substance and style. Jennifer currently teaches middle school science at the Hockaday School. Jennifer’s love of science sparked during childhood while working in her family’s pharmacy. After graduating from Dillard University with a BS in Chemistry, she made history as the first African American woman to graduate with an advanced STEM degree from the University of Northern Iowa, earning her MA in Environmental Chemistry. Jennifer, a life-long learner, is an award-winning globally-teaching educator, has received recognition for her leadership in education. Jennifer serves on the STEM advisory board for the Girl Scouts of Northeast TX. She holds membership in the American Educational Research Association, Dallas Summit, Delta Sigma Theta Sorority, The Links, the National Science Teacher Association, and Leadership Texas.",

  "18": "Dallas, Texas -- With over 23 years of experience in biomechanics, Dr. Kirsten Tulchin-Francis understands how kids move. As Division Director of Movement Science at Scottish Rite for Children she has been studying the science behind how children and young adults with orthopedic conditions walk, jump and play. Kirsten oversees two laboratories at Scottish Rite which use motion capture technology to measure how people move. MoCap, as it is frequently referred in the movie and video game industry, uses high speed cameras, special force sensing plates in the floor and computers to track the 3D movement of the head, arms, legs and feet as kids walk, squat, run and jump. Along with doctors, physical therapists and other researchers, Kirsten studies how surgery and other treatment improves the function and lives of young patients. Kirsten holds Bachelor and Master of Science degrees in biomedical engineering and a PhD in Kinesiology-Biomechanics. She and her husband reside in Denton TX with their son.",

  "19": "Fort Worth, Texas -- Jeana Lee Yeager was born in Fort Worth in 1952. After graduating from high school, Yeager worked as a draftsman and surveyor for a geothermal energy company in Santa Rosa, California. While living in California, she obtained her pilot's license and quickly became an accomplished pilot. In 1982, Jeana set a women's speed record for a 2,000-kilometer closed course and she set the open distance record of 2,427.1 miles. In 1986, Yeager and fellow pilot Dick Rutan formed Voyager Aircraft, Inc. in an attempt to fly around the world without refueling. She flew as a co-pilot on the 216-hour flight and set the world absolute distance record. Following the 1986 flight, Yeager received the Presidential Citizens Medal from Ronald Reagan and the Collier Trophy, the annual aviation award from the National Aeronautic Association, making her the first woman to receive this prestigious award.",

  'error': "Oops, an artifact with that number does't seem to exist in this gallery. Please double check that you've selected the appropriate gallery and then try a different number!"
    };

var audioDict_en = {
  '1': 'audio/en/Anderson Audio.mp3',
  '2': 'audio/en/Coleman Audio.mp3',
  '3': 'audio/en/Cordero Audio.mp3',
  '4': 'audio/en/Esquivel Audio.mp3',
  '5': 'audio/en/Gipson Audio.mp3',
  '6': 'audio/en/Hamden Audio.mp3',
  '7': 'audio/en/Lee Audio.mp3',
  '8': 'audio/en/Makins Audio.mp3',
  '9': 'audio/en/Masino Audio.mp3',
  '10': 'audio/en/Mipuri Audio.mp3',
  '11': 'audio/en/Mukundan Audio.mp3',
  '12': 'audio/en/Noble Audio.mp3',
  '13': 'audio/en/Owen Audio.mp3',
  '14': 'audio/en/Perez Audio.mp3',
  '15': 'audio/en/Niu Sanford Audio.mp3',
  '16': 'audio/en/Sereika Audio.mp3',
  '17': 'audio/en/Stimpson Audio.mp3',
  '18': 'audio/en/Tulchin-Francis Audio.mp3',
  '19': 'audio/en/Yeager Audio.mp3',
}

var nameDict_es = {
      '1': '',
      '2': '',
      '3': '',
      '4': '',
      'error': ''
    };

var imageDict_es = {
      '1': 'images/Mohenjo-daro.jpg',
      '2': 'images/Spiro_Craig_Mound_HRoe.jpg',
      '3': 'images/Massai_warriors.jpg',
      '4': 'images/Londons_Carnaby_Street,_1966.jpg',
      'error': ''
}

var captionDict_es = {
      '1': '',
      '2': '',
      '3': '',
      '4': '',
      'error': ''
}

var textDict_es = {
      '1': '',
      '2': '',
      '3': '',
      '4': '',
      'error': "Vaya, un artefacto con ese número no parece existir en esta galería. ¡Verifique que haya seleccionado la galería apropiada y luego intente con un número diferente!"
    };

var audioDict_es = {
      '1': '',
      '2': '',
      '3': '',
      '4': '',

}

let title_content = `
    <img src='Building.jpg' style='width:100%;'>
    <h3>Scavenger Hunt</h3>
    Our galleries are full of cool facts and amazing ideas. Can you find the answers to these questions?
`

function buildQuiz() {

  // Add the questions

  createHeader('General');
  createMultiChoice('Of which state is <i>Paluxysaurus</i> the official dinosaur?', ['Oklahoma', 'New Mexico', 'Texas'], 'Texas');
  createMultiChoice('<i>Paluxysaurus jonesi</i> is a _______ , a class of dinosaur that eats plants, has a long neck and tail, a small head, and walks on all four legs.', ['Carnivore', 'Herbivore', 'Omnivore'], 'Herbivore');
  //createMultiChoice('Something as small as a single tooth can help to identify a dinosaur as a herbivore or a _______.', ['Theropod', 'Carnivore', 'Ceratopsian'], 'Carnivore');
  //createMultiChoice('A _______ is a scientist that studies plants and animals that lived millions of years ago. They study fossils to learn about organisms and the environment in which they lived and what the Earth was like for them.', ['Paleontologist', 'Geologist', 'Astronomer'], 'Paleontologist');
  createMultiChoice('A painting called “A River Runs Through It” by local artist Cindi Holt is located outside of the Museum’s Oak Rooms East and West. What well-known Museum mascot is featured in the painting?', ['Museum Bear', 'Museum School Turtle', 'Museum Lizard'], 'Museum School Turtle');
  createMultiChoice('Where can the Heritage Tree be found? This tree was left from the original Museum building on this site.  The tree was left undisturbed and the building that you stand in today was designed and constructed around it.', ['The Oak Room', 'Stars Café', 'The courtyard'], 'The courtyard');

  createHeader('<i>Project Planet</i>');
  createMultiChoice('When a polar bear and a gizzly bear meet, they can sometimes mate. What is this hybrid bear called?', ['Pizzly bear', 'Yellow bear', 'Grozzly bear'], 'Pizzly bear');
  createMultiChoice("Which kind of energy creates pollution that contributes to climate change?", ['Coal', 'Solar', 'Nuclear'], 'Coal');
  createMultiChoice("When a meteorologist gives a weather report, what color screen do they stand in front of?", ['Red', 'White', 'Green'], 'Green');


  createHeader('<i>Beads: A Journey Across Cultures</i>');
  createMultiChoice("What item from Ida Loving Turner is on display from the Chicago World's Fair?", ['Her gown', 'Her shoes', 'Her hat'], 'Her gown');
  createMultiChoice('In the <i>Beads</i> exhibit, what egg, from the world’s largest bird, is used in the design of a necklace?', ['Penguin', 'Ostrich', 'Pterodactyl'], 'Ostrich');

  createHeader('<i>Natural Communities</i>');
  createMultiChoice('What is the State Bird of Texas?', ['Bluebird', 'Mockingbird', 'Hummingbird'], 'Mockingbird');
  createMultiChoice("Texas has two state animals, a small one and a large one. What's the smaller one?", ['Armadillo', 'Opossum', 'Racoon'], 'Armadillo');
  createMultiChoice('What is the Texas State Reptile??', ['Bearded Dragon', 'Horned Frog', 'Alligator'], 'Horned Frog');

  createHeader('<i>Launchpad</i>');
  createMultiChoice("By using infrared light, astronomers can study an object's _______.", ['Temperature', 'Weight', 'Age'], 'Temperature');
  createMultiChoice("On which space station did astronauts use a bike like the one on display in <i>Launchpad</i>?", ['International Space Station', 'Space Shuttle', 'Skylab'], 'Skylab');
  createMultiChoice("If you weigh 100 lbs on Earth, how much will you weigh on the Moon?", ['Less', 'About the same', 'More'], 'Less');

  createHeader('<i>Rolling Forward</i>');
  createMultiChoice("The Ford Model T is generally considered to be the first _______ car.", ['Electric', 'Affordable', 'Fast'], 'Affordable');
  createMultiChoice("Which source of energy powers a Soap Box Derby car?", ['Gravity', 'Electricity', 'Gasoline'], 'Gravity');

  createHeader('V-DROME');
  createMultiChoice("Which of your senses is V-DROME <i>not</i> designed to engage?", ['Smell', 'Sight', 'Sound', 'Taste'], 'Taste');
  createMultiChoice("V-DROME will be located _______.", ['Next to the Omni', 'Where the Omni is now', 'Next to the Noble Planetarium'], 'Next to the Omni');

  createHeader('Energy Blast');
  createMultiChoice("Which technology generates the most electricity in Texas?", ['Nuclear', 'Wind', 'Natural Gas', 'Solar'], 'Natural Gas');
  createMultiChoice("Which of these energy sources does not provide steady, consistent power?", ['Coal', 'Wind', 'Nuclear'], 'Wind');
  createMultiChoice("Which of these energy sources is not considered renewable energy?", ['Solar', 'Wind', 'Nuclear', "Hydroelectric"], 'Nuclear');

  createPaddingBlock();









}

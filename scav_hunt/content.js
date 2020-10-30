let title_content = `
    <img src='Building.jpg' style='width:100%;'>
    <h3>Can You Complete Our Spoooooky Quiz?</h3>
    Our galleries are full of cool facts and amazing ideas. Can you find the answers to these questions?
`

function buildQuiz() {

  // Add the questions

  createMultiChoice("Treat yourself to some creativity in the STEAM Lab, and make some Halloween themed art.", ["Creepy Creation", "Fantastically Frightening fun", "Spooktacular Art"], ["Creepy Creation", "Fantastically Frightening fun", "Spooktacular Art"]);

  createMultiChoice("What do you call a scientist that studies dinosaur bones?", ["Astronomer", "Paleontologist", "Geologist "], "Paleontologist");

  createMultiChoice("Go to the place where you can dig for bones at the Museum.  How many bones can you find?", ["One", "Two", "Three or more"], ["One", "Two", "Three or more"]);

  createMultiChoice("Where can you find the pumpkin patch on the trains in the Energy Gallery?", ["Baseball field", "Dairy farm", "Amusement park"], "Baseball field");

  createMultiChoice("Where can you find a footprint large enough to sit in?", ["STEAM Lab", "Launchpad", "DinoLabs"], "DinoLabs");

  createMultiChoice("Which vehicle can you find in the Wheels Exhibit that debuted the same year as the first <i>Dr. Jekyll and Mr. Hyde</i> film in 1908?", ["Original Model T car", "Antique donkey cart", "Classic Soapbox Derby racer"], "Original Model T car");

  createMultiChoice("In which exhibit can you find out how much you would weigh on the full moon? Be sure to test out the scale!", ["Beads", "Project Planet", "Launchpad"], "Launchpad");

  createMultiChoice("In the <i>Texas Ecosystems</i> exhibit, which region will you find a tarantula?", ["Piney woods", "Panhandle plain", "Cowtown"], "Panhandle plain");

  createMultiChoice("In the <i>Texas Ecosystems</i> exhibit, in which region will you find a nocturnal bird of prey, who has eyes that appear to glow in the night (owl)?", ["Piney woods", "Panhandle plain", "Cowtown"], "Piney woods");

  createMultiChoice("Use the green screen in <i>Project Planet</i> to give a Halloween weather report. Will it be:", ["Dark and with a chance of rain?", "A full moon and clear skies?", "Misty with a chance of a dense fog warning?"], ["Dark and with a chance of rain?", "A full moon and clear skies?", "Misty with a chance of a dense fog warning?"]);

  createMultiChoice("Which beaded masterpiece from the <i>Beads</i> gallery would you love to add to your costume?", ["Deerskin shirt", "Cree octopus beaded pouch", "Beaded moccasins", "Ostrich feather headdress"], ["Deerskin shirt", "Cree octopus beaded pouch", "Beaded moccasins", "Ostrich feather headdress"]);

  createMultiChoice("The DreamTime sculpture is on the ceiling between the Studios, can you find the following items: tricycle, red bull, dollhouse, broom, saxophone, and bumper.", ["Tricyle", "Red bull", "Dollhouse", "Broom", "Saxophone", "Bumper"], ["Tricyle", "Red bull", "Dollhouse", "Broom", "Saxophone", "Bumper"]);

  createPaddingBlock();









}

var use_keypad_entry = true;

var title_en = 'Energy Blast';
var title_es = "Energy Blast";

var nameDict_en = {
      '1': 'Nuclear',
      "2": "Coal",
      "3": "Wind",
      "4": "Hydropower",
      "5": "Solar",
      "6": "Natural Gas",
      "7": "Energy Storage",
      'error': 'Artifact Not Found!'
    };

var imageDict_en = {
      '1': 'images/1-Nuclear.jpg',
      '2': 'images/2-Coal.jpg',
      '3': 'images/3-Wind.jpg',
      '4': 'images/4-Hydro.jpg',
      '5': 'images/5-Solar.jpg',
      '6': 'images/6-Gas.jpg',
      '7': 'images/7-Storage.jpg',
      'error': ''
}

var captionDict_en = {
      '1': "A nuclear power plant sits within a village in Switzerland. This power plant, with an output of 1.2 GW, could power Boston. (Image credit: Hansueli Krapf)",
      '2': "A coal-fired power plant in Ohio. (Image credit: Analogue Kid)",
      '3': "An off-shore wind turbine in Portugal. This turbine generates 2 MW of electricty. (Image credit: Untrakdrover)",
      '4': "The O'Shaughnessy Dam in Yosemite National Park's Hetch Hetchy vallery. (Image credit: Inklein)",
      '5': "Two forms of solar thermal power installed Solnova Solar Power Station in Spain. (Image credit: Abengoa Solar)",
      '6': "A U.S. Geologic Survey map showing where fracking in using water resources.",
      '7': "The upper reservoir of the Ffestiniog Power Station's pumped storage system in Wales.",
      'error': ''
}


var textDict_en = {
      '1': "When we talk about reducing pollution and cutting back our production of harmful greenhouse gasses, we usually talk about renewable energy such as solar or wind power. But these sources have one big problem: they’re not consistent. We need power 24 hours a day, but the sun isn’t always shining or the wind blowing. There’s only one form of carbon-free power that can be built almost anywhere and produce large amounts of consistent power: nuclear energy.<p>It might surprise you to know that, by some measures, nuclear power is the safest form of energy production ever developed. It’s easy to remember events like Chernobyl or Three Mile Island, but we often overlook the accidents that happen on oil rigs or the broad health effects of air pollution. In fact, around five million people die every year from illnesses connected to the burning of fossil fuels like coal and natural gas. Take that into account and, per watt of power, nuclear is about 40 times safer than natural gas and a shocking 360 times safer than burning coal.<p>So why aren’t we going all-in on nuclear? Well, we can’t totally overlook the risks of a big accident. There are places around Chernobyl that won’t be livable for hundreds or even thousands of years. To stop that from happening again, modern nuclear plants must conform to an extraordinary number of safety regulations. That’s what makes nuclear power so safe, but it also means that it can take 10 or 15 years to build a single plant at a cost of billions of dollars. That means we can’t switch to nuclear quickly enough to reduce our greenhouse gas emissions today.<p>There’s also the matter of the waste that nuclear plants do produce. Nuclear fuel is among the more toxic substances ever developed and it’ll stay that way for thousands of years. Every nuclear plant we build today produces a burden that hundreds of future generations will have to deal with. In the face of climate change, that might be a trade-off worth making, but it’s not one that we should make lightly.",

      '2': "Coal is the foundation on which modern society has been built. As the first form of energy used in massive quantities, it drove the Industrial Revolution and powered the world through much of the 20th century. Now we have to reckon with the cost of all that advancement. Today we know that coal is the dirtiest source of power available. In fact, burning one ton of coal actually produces more than one ton of pollution. And it’s not just the greenhouse gases that lead to climate change; soot from coal-fired power plants also drives acid rain and contributes to health problems like asthma.<p>So, if coal is so bad, why do we keep using it? Well, we’re actually making pretty good progress in stopping. Since reaching a peak around 2007, our consumption of coal in the US has actually dropped by more than half. In its place is a lot more natural gas, as well as the increased use of renewable energy. With the price of these resources dropping, building a new coal-fired power plant today seems like a pretty bad investment. What we’re left with are the plants that are already in operation. As they reach the end of their lives, or get shut down for economic reasons, new plants aren’t replacing them. Five states already generate no power from coal—it’s only a matter of time before others join them.",

      '3': "It's not an exaggeration to say that wind power is the future of energy in Texas. Already, it makes up around 16% of all the electricity we generate. In fact, Texas leads the nation in wind power production, and, if it were its own country, would rank fifth in world. Nearly all that generation capacity has been built in just the last 15 years.<p>Most wind farms here are located in West Texas or the panhandle. Drive from Fort Worth to El Paso and you’ll pass around a dozen wind farms, including two of the ten largest in the world. Wind farms make a ton of sense in Texas for a couple of reasons. Most importantly, it’s windy here! Texas’ enormous flat prairies means that there isn’t much to slow the wind down. Wind farms are also great additions to cattle ranching. By installing wind turbines on their land, a rancher can substantially increase the money they earn without really impacting the ability of cattle to graze.<p>Texas might be well-positioned for the next generation of wind power, too. Wind turbines operate most efficiently when the wind blows at a steady, moderate speed for long periods of time. These are the conditions over huge swathes of Earth’s oceans. Off-shore wind farms, which are built directly in the ocean, can take advantage of that. And with our Gulf Coast shoreline, so too can Texas.",

      '4': "For thousands of years, water wheels were used to generate mechanical power. Today’s hydroelectric plants use the same basic principle to create electricity on an industrial scale. Just mostly not in Texas. Of all the forms of energy generation in use today, none is as region-dependent as hydropower. Half of all hydroelectricity generated in the US comes from just three western states: Washington, California, and Oregon.<p>Hydroelectricity is perhaps the most pollution-free way to generate power. It doesn’t produce greenhouse gasses or result in waste products and the technology it uses doesn’t rely on exotic or harmful materials. All that is great, but it doesn’t mean hydroelectricity is free from problems. The plants developed in the 20th and 21st centuries rely on huge dams to create artificial reservoirs capable of producing the water pressure needed to drive electric generators.<p>Creating those reservoirs can have a devastating impact on the environment. Restricting the flow of the river can disrupt ecosystems that depend on its natural cycles. A dam completed in 1923 in Yosemite National Park's Hetch Hetchy Valley provides drinking water for San Francisco and produces 230 megawatts of power. But its construction also obliterated historic Native American hunting grounds and buried what was considered one of the most beautiful places in America under 100 billion gallons of water.",

      '5': "No way of generating power is growing more quickly than solar. And unlike virtually all the other options out there, this is a choice that you can make for yourself. Solar panels can be a cost-effective addition to your house almost everywhere in Texas, including here in Fort Worth. On average, people here need to cover just half of their roof with panels to generate enough power to get off the electric grid.<p>But home panels are just the tip of the iceberg when it comes to solar. Today, Texas generates more than 100 times more solar power than it did just ten years ago. Almost all of that has come in the form of industrial-scale solar farms. In fact, parts of southwestern Texas between El Paso and San Antonio are some of the best places in the country for generating solar power.<p>When you think of solar power, you’re probably thinking of solar panels, which use specialized chemistry to convert light into electricity. But another way to harness the power of the Sun is through solar thermal energy. These plants use giant mirrors to concentrate the Sun’s light on a heating chamber, which can reach temperatures of up to 1,049 °F (565 °C). The superhot chamber heats a liquid to drive a generator that produces electricity. ",

      '6': "Natural gas is the energy source that has defined modern Texas. Today, we consume more than twice as much of it as any other state in the nation. We also produce more than anyone else. That’s driven in large part by the development of hydraulic fracturing, or fracking, which was developed right here in North Texas.<p>Natural gas has been an important transition fuel because it’s much cleaner than coal while relying on the same basic combustion technology that we’re used for a long time. The amount of pollution emitted by electricity production has been steadily declining since 2007 and that drop is largely due to the replacement of coal-fired power plants with ones that use natural gas. But natural gas is still a fossil fuel and one of the most important contributors to climate change. Moving from it to carbon-free energy like wind, solar, or nuclear power will be a key challenge in the coming decade.<p>The process of fracking also comes with its own environmental problems. An average natural gas well requires millions of gallons of water to operate and risks contaminating other water resources. And when wastewater is reinjected deep underground for disposal, it can trigger small earthquakes right here in Fort Worth. These events aren’t noticeable by people, but can damage or disturb structures nearby to a drilling site.",

      '7': "There are a lot of benefits to expanding our use of renewable energy, but it comes with challenges, too. Solar and wind power are by their very nature intermittent and unpredictable. Our need for power can also change a lot. Sometimes that means we need more power than we’re producing, like when a surprise heat wave causes everyone to turn on their AC at the same time. Other times it’s windy in the middle of the night when no one is using much electricity.<p>The solution to all these problems is energy storage. Storing some extra energy provides a buffer that means that the electric grid can still work even if everything isn’t going exactly as predicted.<p>When you think storage, your first thought is probably batteries. After all, that’s the main way we store energy around the house. And the number and size of grid-connected batteries is rapidly growing. When they’re used properly, batteries can even make the grid better than it was before we started using renewable energy. Batteries can release electricity in much less time that it takes to spin up the output of a coal or natural gas plant. That means that brownouts and other grid issues are less likely to occur.<p>Today, though, the vast majority of grid-connected energy storage actually isn’t batteries. Instead, it’s a technique called pumped storage. With pumped storage, excess electricity is used to run giant pumps, which lift a fluid like water from a lower tank to a higher one. This converts the electrical energy to gravitational potential energy. When that power is then needed, valves open and the fluid flows back into the lower tank, driving a generator along the way. These systems can make use of structures like abandoned mine shafts to reduce the cost and complexity of construction. ",
      'error': "Oops, an entry with that number does't seem to exist in this gallery. Please double check that you've selected the appropriate gallery and then try a different number!"
    };

var audioDict_en = {
      '1': 'audio/en/1-Nuclear.mp3',
      '2': 'audio/en/2-Coal.mp3',
      '3': 'audio/en/3-Wind.mp3',
      '4': 'audio/en/4-Hydropower.mp3',
      '5': 'audio/en/5-Solar.mp3',
      '6': 'audio/en/6-Gas.mp3',
      '7': 'audio/en/7-Storage.mp3',
}

var nameDict_es = {
      '1': '',
      '2': '',
      '3': '',
      '4': '',
      '5': '',
      '6': '',
      '7': '',
      'error': ''
    };

var captionDict_es = {
      '1': '',
      '2': '',
      '3': '',
      '4': '',
      '5': '',
      '6': '',
      '7': '',
      'error': ''
}

var textDict_es = {
      '1': '',
      '2': '',
      '3': '',
      '4': '',
      '5': '',
      '6': '',
      '7': '',
      'error': "Vaya, un artefacto con ese número no parece existir en esta galería. ¡Verifique que haya seleccionado la galería apropiada y luego intente con un número diferente!"
    };

var audioDict_es = {
      '1': '',
      '2': '',
      '3': '',
      '4': '',
      '5': '',
      '6': '',
      '7': '',
}

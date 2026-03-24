const isMenuPage = document.querySelector("#menu-hero");

const header = document.getElementById("navheader");

/* ================================
   LANGUAGE DATABASE
================================ */

/* ================================
   LANGUAGE DATABASE
================================ */

const translations = {

en: {

currency: "HUF",
guests: "Number of Guests (max. 16)",

nav:{
home:"Home",
about:"About Us",
reviews:"Reviews",
menu:"Menu",
restaurants:"Restaurants",
booking:"Reservation",
takeaway:"Delivery",
contact:"Contact"
},

hero:{
title:"Welcome To Rim Thanonh Thai Food!",
subtitle:"Authentic Thai Food from Authentic Thai chefs.",
menu:"Menu",
reserve:"Reservation",
takeaway:"Takeaway"
},

about:{
title:"From Buriram with love!",

text1:"Rim Thanonh is a small family-owned restaurant chain that began its journey in 2018 as an ambitious project with a simple goal: to introduce guests to the authentic flavors of Thai cuisine. What started from humble origins has grown through passion, dedication, and community, with family members and close friends from Buriram coming together to share their culinary heritage.",

text2:"Every dish reflects tradition, authenticity, and the warm spirit of Thai hospitality that defines Rim Thanonh."
},

menu:{
intro:"Check out our menu!",
backIntro:"Return to the main site",

nav:{
    soups:"Soups",
    appetizers:"Appetizers",
    noodles:"Noodle Dishes",
    rice:"Rice Dishes",
    curries:"Curries",
    specialities:"Thai Specialities",
    sides:"Side Dishes",
    desserts:"Desserts",
    drinks:"Drinks",
    fish:"Fish Dishes",
    back:"Main Page",
},
legend:{
  spiceTitle:"Spice Level:",
  mild:"Mild",
  medium:"Medium",
  verySpicy:"Very Spicy",
  vegetarian:"🌱 Vegetarian option available – This dish can be prepared in a vegetarian version with some tofu if you like!",
  chefNote:"You may ask the chef to not make your dish spicy, if you please! 😉",
  serviceNote:"Prices do not include a service fee – no extra charges will be added to your bill."
},

veg:"🌱 Vegetarian option available",

soups:{
title:"Soups",

tomYum:{
name:"A1 Tom Yum",
thai:"ต้มยำ",
desc:"A bold and aromatic Thai hot-and-sour soup with lemongrass, galangal, chili, mushrooms and your choice of meat or seafood in a flavorful broth.",
price1:"Chicken/Pork/Vegetarian",
price2:"Beef/Shrimp",
price3:"Seafood"
},

tomKha:{
name:"A2 Tom Kha",
thai:"ต้มข่า",
desc:"A creamy coconut milk soup infused with lemongrass, galangal and lime leaves, gently spiced and served with your choice of meat or seafood.",
price1:"Chicken/Pork/Vegetarian",
price2:"Beef/Shrimp",
price3:"Seafood"
},

kuaitiao:{
name:"A3 Kuaitiao",
thai:"ก๋วยเตี๋ยว",
desc:"Traditional Thai rice noodle soup in a rich savory broth with vegetables and your choice of chicken, pork, beef or shrimp.",
price1:"Chicken/Pork/Vegetarian",
price2:"Beef/Shrimp"
},

sukee:{
name:"A4 Sukee",
thai:"สุกี้",
desc:"Glass noodle soup with vegetables and egg in a mildly spicy chili broth, available with your choice of meat or seafood.",
price1:"Chicken/Pork/Vegetarian",
price2:"Beef/Shrimp",
price3:"Seafood"
},

kuaitiaoTomYum:{
name:"A5 Kuaitiao Tom Yum",
desc:"Spicy Tom Yum rice noodle soup combining tangy herbs, chili heat and vegetables with pork or seafood.",

price1:"Classic",
price2:"Seafood"
},

radnaa:{
name:"A6 Radnaa",
thai:"ราดหน้า",
desc:"Wide rice noodles topped with tender meat and vegetables in a rich, savory Thai gravy sauce, served as a comforting noodle soup-style dish.",

price1:"Chicken/Pork/Vegetarian",
price2:"Beef/Shrimp",
price3:"Seafood"
},

jok:{
name:"A7 Khao Tom Jok",
thai:"ข้าวต้มโจ๊ก",
desc:"Comforting Thai rice porridge soup with minced pork, ginger, spring onions and soft-boiled egg in a smooth savory broth."
},

},

appetizers:{
title:"Appetizers",

pikKaiThod:{
name:"F1 Pik Kai Thod",
thai:"ปีกไก่ทอด",
desc:"Crispy Thai-style fried chicken wings served with a spicy hot sauce dip.",

},

shrimpTempura:{
name:"F2 Shrimp Tempura",
thai:"กุ้งเทมปุระ",
desc:"Lightly battered and deep-fried shrimp served crispy with a delicate dipping sauce.",

},

lukChin:{
name:"F3 Luk Chin",
thai:"ลูกชิ้น",
desc:"Grilled Thai skewered meatballs served with a sweet and slightly spicy dipping sauce.",

},

springRolls:{
name:"F4 Spring Rolls",
thai:"ปอเปี๊ยะทอด",
desc:"Deep-fried crispy spring rolls filled with vegetables and glass noodles, served with sweet chili sauce.",

},

},

noodles:{
title:"Noodle Dishes",

padThai:{
name:"B1 Pad Thai",
thai:"ผัดไทย",
desc:"Thailand’s most famous stir-fried rice noodle dish with egg, vegetables and your choice of meat or seafood, tossed in a perfectly balanced sweet-savory tamarind sauce.",
price1:"Chicken/Pork",
price2:"Beef/Shrimp",
price3:"Seafood"
},

padMeeLuang:{
name:"B2 Pad Mee Luang",
desc:"Stir-fried yellow egg noodles with fresh vegetables and your choice of meat or seafood in a light savory Thai sauce.",
price1:"Chicken/Pork",
price2:"Beef/Shrimp",
price3:"Seafood"
},

padWunsen:{
name:"B3 Pad Wunsen",
desc:"Delicate glass noodles stir-fried with vegetables, egg and your choice of meat or seafood in a flavorful soy-based sauce.",

},

padSiIyu:{
name:"B4 Pad Si Iyu",
desc:"Wide rice noodles stir-fried with vegetables, egg and dark soy sauce, offering a rich and slightly smoky flavor with your choice of meat or seafood.",

},

padKeeMao:{
name:"B5 Pad Kee Mao",
desc:"Spicy stir-fried rice noodles with Thai basil, chili, bamboo shoots and vegetables, available with your choice of meat or seafood.",

}

},

rice:{
title:"Rice Dishes",

khaoPad:{
name:"C1 Khao Pad",
thai:"ข้าวผัด",
desc:"Classic Thai fried rice stir-fried with egg, vegetables and your choice of meat or seafood, seasoned to perfection.",
},

padKhing:{
name:"C2 Pad Khing",
desc:"Stir-fried ginger with vegetables and your choice of meat or seafood, served with steamed jasmine rice.",
},

padMedMamuang:{
name:"C3 Pad Med Mamuang",
desc:"Stir-fried cashew nuts with vegetables and your choice of meat or seafood in a savory Thai sauce, served with rice.",
},

padKaprao:{
name:"C4 Pad Kaprao",
desc:"Spicy Thai basil stir-fry with chili, vegetables and your choice of meat or seafood, served with steamed rice.",
egg:"with egg"
},

padKapraoMince:{
name:"C5 Pad Kaprao Minced Pork",
desc:"Authentic Thai basil stir-fried minced pork topped with a crispy fried egg and served with steamed rice.",
},

padKapraoCrispy:{
name:"C6 Pad Kaprao Crispy Pork",
desc:"Crispy roasted pork belly stir-fried with Thai basil, garlic and fresh chili, served over steamed jasmine rice for a bold and flavorful dish.",
},

padPakRuamMit:{
name:"C7 Pad Pak Ruam Mit",
desc:"Stir-fried mixed vegetables in a light savory sauce with your choice of meat or seafood, served with rice.",
}

},

curries:{
title:"Curries",

redCurry:{
name:"D1 Red Curry",
thai:"แกงเผ็ด",
desc:"A rich and mildly spicy coconut curry with bamboo shoots, vegetables and your choice of meat or seafood.",
},

yellowCurry:{
name:"D2 Yellow Curry",
thai:"แกงกะหรี่",
desc:"Mild and aromatic coconut curry with potatoes, onions and your choice of meat or seafood.",
},

greenCurry:{
name:"D3 Green Curry",
thai:"แกงเขียวหวาน",
desc:"Creamy and fragrant green coconut curry with Thai basil, bamboo shoots and your choice of meat or seafood.",
},

massaman:{
name:"D4 Massaman Curry",
thai:"แกงมัสมั่น",
desc:"A mildly spiced southern Thai curry with coconut milk, potatoes, beans and your choice of meat.",
},

panang:{
name:"D5 Panang Curry",
thai:"แกงพะแนง",
desc:"Thick and creamy red curry with kaffir lime leaves and your choice of meat in a rich coconut sauce.",
}

},

specialities:{
title:"Thai Specialities",

larb:{
name:"E1 Larb",
thai:"ลาบ",
desc:"A traditional northeastern Thai minced meat salad with lime juice, chili, toasted rice powder and fresh herbs.",
},

kahMooYang:{
name:"E2 Kah Moo Yang",
thai:"ขาหมูย่าง",
desc:"Crispy roasted pork knuckle seasoned with Thai spices and served with a flavorful dipping sauce.",
},

khaoKaiYang:{
name:"E3 Khao Kai Yang",
thai:"ข้าวไก่ย่าง",
desc:"Thai-style grilled marinated chicken served with steamed rice and a tangy dipping sauce.",
},

lukChin:{
name:"E4 Luk Chin",
thai:"ลูกชิ้น",
desc:"Grilled Thai meatballs served with a sweet and spicy chili dipping sauce.",
},

somTum:{
name:"E5 Som Tum",
thai:"ส้มตำ",
desc:"Spicy green papaya salad with lime, chili, fish sauce, tomatoes and peanuts in a refreshing dressing.",
},

tumPah:{
name:"E6 Tum Pah",
thai:"ตำป่า",
desc:"A bold and intensely flavored papaya salad with fermented ingredients and Thai herbs for an authentic taste.",
},

yum:{
name:"E7 Yum",
thai:"ยำ",
desc:"Thai spicy salad tossed with fresh herbs, chili, lime juice and your choice of meat or seafood.",
},

somTumTad:{
name:"E8 Som Tum Tad",
thai:"ส้มตำถาด",
desc:"A large sharing platter of spicy papaya salad served with assorted Thai side dishes and accompaniments.",
}

},

sides:{
title:"Side Dishes & Garnishes",

jasmineRice:{
name:"Steamed Jasmine Rice",
desc:"Fragrant Thai jasmine rice served as the perfect accompaniment to any curry or stir-fry.",
},

stickyRice:{
name:"Sticky Rice",
desc:"Traditional Thai glutinous rice with a naturally soft and slightly chewy texture, perfect as a sweet or savory accompaniment.",
},

friedEgg:{
name:"Fried Egg",
desc:"Crispy-edged Thai-style fried egg, ideal as an extra topping for rice dishes.",
},

riceNoodles:{
name:"Plain Rice Noodles",
desc:"Soft steamed rice noodles served plain, perfect as an extra base for sauces or curries.",
},

eggNoodles:{
name:"Plain Egg Noodles",
desc:"Tender yellow egg noodles served plain as a simple side or additional portion.",
},

glassNoodles:{
name:"Plain Glass Noodles",
desc:"Light and delicate glass noodles served plain as an extra accompaniment.",
}

},

desserts:{
title:"Desserts",

mangoStickyRice:{
name:"Sweet Sticky Rice with Mango",
desc:"Sweet coconut sticky rice served with fresh ripe mango and creamy coconut sauce.",
},

thaiCrepe:{
name:"Thai Crepe",
desc:"Soft Thai-style crepe filled with sweet cream and delicate shredded coconut.",
}

},

drinks:{
title:"Special Drinks",

thaiTea:{
name:"Thai Tea",
desc:"Authentic Thai tea brewed strong and served over ice with sweetened condensed milk for a rich and creamy flavor.",
},

thaiGreenTea:{
name:"Thai Green Tea",
desc:"Fragrant Thai green tea served chilled with condensed milk, offering a smooth and lightly sweet herbal taste.",
},

thaiIcedCoffee:{
name:"Thai Iced Coffee",
desc:"Sweet and creamy Thai-style iced coffee served chilled with condensed milk.",
},

thaiBlackCoffee:{
name:"Thai Iced Black Coffee",
desc:"Strong and refreshing Thai iced black coffee served over ice without milk.",
},

pinkMilk:{
name:"Pink Milk",
desc:"Sweet chilled milk flavored with Thai sala syrup for a bright pink, nostalgic treat.",
},

singha:{
  name:"Singha Beer",
  desc:"Thailand’s original premium lager, crisp and refreshing with a smooth malt flavor and a clean finish."
},

chang:{
  name:"Chang Beer",
  desc:"A popular Thai lager with a full-bodied taste, slightly sweet notes and a refreshing, easy-drinking finish."
},

},

fish:{
title:"Fish Dishes",
note:"Available only at Rim Thanonh 2 Restaurant!",

sweetChili:{
name:"Deep Fried Tilapia with Sweet Chili Sauce",
thai:"ปลาทอดซอสพริกหวาน",
desc:"Crispy deep-fried tilapia topped with sweet chili sauce."
},

lime:{
name:"Steamed Fish with Lime and Chili",
thai:"ปลานึ่งมะนาว",
desc:"Steamed tilapia with fresh lime, garlic and chili sauce."
},

sweetSour:{
name:"Deep Fried Tilapia with Sweet and Sour Sauce",
thai:"ปลาทอดเปรี้ยวหวาน",
desc:"Deep fried tilapia served with sweet and sour sauce."
},

garlic:{
name:"Deep Fried Tilapia with Garlic",
thai:"ปลาทอดกระเทียม",
desc:"Crispy tilapia topped with fragrant fried garlic."
}
},

unavailable:"Currently unavailable",

},

restaurants:{
title:"Restaurants",

labels:{
opening:"Opening Hours:",
days:"Mon–Sun:",
address:"Address:",
phone:"Phone:"
},

restaurantNotice:{
title:"Important Notice:",
text:"Rim Thanonh 3 is permanently closed. Our newest location, Rim Thanonh Thai Tea & Snacks, is now open and welcoming guests. Please note that Rim Thanonh Thai Tea & Snacks currently offers a smaller menu, and only dishes marked as available on the menu can be ordered at this location."
},

},

booking:{
title:"Reserve a Table!",
name:"Name",
phone:"Phone Number",
email:"Email Address",
chooseRestaurant:"Restaurant",
guests:"Number of Guests",
guestHint:"Please select a restaurant to see guest limits.",
date:"Select Date",
time:"Select Time",
message:"Extra message (optional)",
submit:"Reserve table!"
},

takeaway:{
woltText:"Order quickly and easily from",
foodoraText:"Find us and order from"
},

terms:{
nav:{
home:"Home",
menu:"Menu"
},

tagline:"Authentic Thai food from authentic Thai chefs.",

buttons:{
home:"Return to Main Page",
menu:"View Menu"
},

title:"Terms and Conditions",

text:`These Terms and Conditions govern the use of the website operated by <strong>Rim Thanonh Thai Food</strong>, located at addresses <strong>Rim Thanonh 1: Budapest, Dob u. 60, 1074; Rim Thanonh 2: Budapest, Akácfa u. 40, 1072; Rim Thanonh Thai Tea & Snacks: Budapest, Klauzál u. 35, 1072</strong>, and apply to all visitors, users, and customers accessing this website.

By accessing or using this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using this website and its services.

The content of this website, including text, images, menus, branding elements, and other materials, is provided for informational purposes only.

While Rim Thanonh Thai Food makes reasonable efforts to ensure that all information is accurate and up to date, the restaurant reserves the right to modify menu items, prices, opening hours, and services at any time without prior notice.

Users may use this website to view restaurant information, browse menus, make table reservations, or access external delivery platforms.

Reservations submitted through the website are considered requests and become valid only after confirmation by the restaurant.

This website may contain embedded services such as <strong>Google Maps</strong> in order to display restaurant locations. When accessing these services, certain technical data such as the user’s IP address may be transmitted to the respective service provider.

The website stores the user’s selected language in the browser’s <strong>local storage</strong> in order to remember the preferred language for future visits. This information is stored only on the user’s device and is not transmitted to the website operator.

External delivery services such as Wolt, Foodora, or other third-party platforms may be linked on this website for customer convenience. These services operate independently and the restaurant is not responsible for the functionality, content, or policies of those platforms.

Personal data submitted through this website, including information entered in the reservation form, will be handled in accordance with the European Union General Data Protection Regulation (GDPR) and Hungarian data protection laws. Detailed information about data processing can be found in the website’s Privacy Policy.

These Terms and Conditions shall be governed by the laws of Hungary. Any disputes arising from the use of this website shall fall under the jurisdiction of the competent Hungarian courts.

This website may display customer reviews from third-party platforms such as Google Reviews, which may be embedded using external services (e.g. Elfsight). These services operate independently and may collect technical data in accordance with their own policies.

Some product images displayed on this website are for illustrative purposes only and may not represent the exact appearance of the items served. All trademarks and product names (e.g. Chang, Singha) are the property of their respective owners.

For questions regarding these Terms please contact <strong>Rim Thanonh Thai Food</strong> at <strong>info@rimthanonh.hu</strong> or <strong>+36 20 536 5163</strong>.`

},

privacy:{
nav:{
home:"Home",
menu:"Menu"
},

tagline:"Authentic Thai food from authentic Thai chefs.",

buttons:{
home:"Return to Main Page",
menu:"View Menu"
},

title:"Privacy Policy",

text:`<strong>Last Updated:</strong> 2026<br><br>

This Privacy Policy explains how <strong>Rim Thanonh Thai Food</strong> collects, uses, and protects personal information when visitors use the official website of the restaurant.

This policy applies to all visitors and users of the website associated with the following restaurant locations:

<strong>
Rim Thanonh 1 – Budapest, Dob u. 60, 1074<br>
Rim Thanonh 2 – Budapest, Akácfa u. 40, 1072<br>
Rim Thanonh Thai Tea & Snacks – Budapest, Klauzál u. 35, 1072
</strong>

<br><br>

<strong>1. Information We Collect</strong><br><br>

When visitors use the reservation form on this website, the following personal data may be collected:<br>
• Name<br>
• Phone number<br>
• Email address<br>
• Reservation details such as restaurant location, number of guests, date and time<br>
• Optional message provided by the user<br><br>

<strong>2. Purpose of Data Collection</strong><br><br>

The information submitted through the reservation form is used solely for the purpose of:<br>
• Processing table reservation requests<br>
• Contacting customers regarding their reservation<br>
• Confirming or adjusting reservation details if necessary<br><br>

The restaurant does not sell, rent, or distribute personal information to third parties.<br><br>

<strong>3. Reservation Requests</strong><br><br>

Reservations submitted through this website are considered requests and become valid only after confirmation by the restaurant.<br><br>

<strong>4. Embedded Services</strong><br><br>

This website may embed third-party services such as <strong>Google Maps</strong> and external review widgets (e.g. Google Reviews via third-party providers like Elfsight) to enhance user experience.<br><br>

When interacting with these services, certain technical data such as the user’s IP address, browser information, and device data may be transmitted to the respective service providers.<br><br>

These services operate under their own privacy policies, and Rim Thanonh Thai Food has no control over how this data is processed by third parties.<br><br>

<strong>5. Language Preference Storage</strong><br><br>

The website stores the selected language in the browser's <strong>localStorage</strong> to remember the visitor’s preference for future visits. This information remains only on the visitor's device.<br><br>

<strong>6. Third-Party Services</strong><br><br>

The website may link to external delivery platforms such as <strong>Wolt</strong> or <strong>Foodora</strong>. These services operate independently and Rim Thanonh Thai Food is not responsible for their policies or functionality.<br><br>

<strong>7. Data Security</strong><br><br>

Reasonable technical and organizational measures are taken to protect personal information from unauthorized access, misuse, or disclosure.<br><br>

<strong>8. User Rights</strong><br><br>

Under the European Union General Data Protection Regulation (GDPR), users have the right to:<br>
• Access their personal data<br>
• Request correction of inaccurate data<br>
• Request deletion of personal data<br>
• Object to the processing of personal data<br><br>

<strong>9. Changes to This Policy</strong><br><br>

Rim Thanonh Thai Food reserves the right to update this Privacy Policy at any time.<br><br>

<strong>10. Contact</strong><br><br>

For questions regarding this Privacy Policy please contact:<br><br>

<strong>
Rim Thanonh Thai Food<br>
Email: info@rimthanonh.hu<br>
Phone: +36 20 536 5163
</strong>`
},


alerts: {
  reservationSent: "Your reservation request has been sent!\n\nPlease check your email for confirmation or further information."
},

footer:{
title:"Rim Thanonh Thai Food",
subtitle:"Authentic Thai food from authentic Thai chefs.",
locations:"Restaurants",
hours:"Opening Hours",
contact:"Contact",
terms:"Terms & Conditions",
copyright:"© 2026 Rim Thanonh Thai Food — All rights reserved.",

},
reviews: {
  "title": "What our guests say",
},

legal:{
privacyPolicy:"Privacy Policy",
privacyConsent:"I have read and accept the <a href='privacy.html' target='_blank'>Privacy Policy</a>"
},
},

hu:{

currency:"Ft",
guests: "Vendégek száma (max. 16)",

nav:{
home:"Főoldal",
about:"Rólunk",
reviews:"Értékeléseink",
menu:"Étlap",
restaurants:"Éttermeink",
booking:"Asztalfoglalás",
takeaway:"Házhoz szállítás",
contact:"Kapcsolat"
},

reviews: {
  "title": "Mit gondolnak a vendégeink?",
},

hero:{
title:"Üdvözlünk a Rim Thanonh Thai Étterem Weboldalán!",
subtitle:"Autentikus thai ételek autentikus thai séfektől.",
menu:"Menü",
reserve:"Foglalás",
takeaway:"Kiszállítás"
},

about:{
title:"Buriramból szeretettel!",

text1:"A Rim Thanonh egy családi tulajdonban lévő étteremlánc, amely 2018-ban indult ambiciózus projektként egy egyszerű céllal: bemutatni vendégeinknek az autentikus thai konyha ízeit. A szerény kezdetekből szenvedéllyel, elhivatottsággal és közösségi összefogással fejlődött tovább, ahol Buriramból érkező családtagok és közeli barátok együtt dolgoztak, hogy megosszák kulináris örökségüket.",

text2:"Minden egyes étel a hagyományt, az autentikusságot és a thai vendégszeretet melegségét tükrözi, amely a Rim Thanonh szellemiségének alapja."
},

menu:{intro:"Tekintsd meg étlapunkat!",

  backIntro:"Vissza a főoldalra",

    nav:{
    soups:"Levesek",
    appetizers:"Előételek",
    noodles:"Tésztás ételek",
    rice:"Rizses ételek",
    curries:"Curryk",
    specialities:"Thai különlegességek",
    fish:"Halételek",
    sides:"Köretek",
    desserts:"Desszertek",
    drinks:"Italok",
    back:"Főoldal"
},

  legend:{
  spiceTitle:"Csípősségi szint:",
  mild:"Enyhe",
  medium:"Közepes",
  verySpicy:"Nagyon csípős",
  vegetarian:"🌱 Vegetáriánus opció elérhető – Az étel kérésre tofuval vegetáriánus változatban is elkészíthető!",
  chefNote:"Megkérheted a séfet, hogy ne csinálja csípősre! 😉",
  serviceNote:"Az árak nem tartalmaznak szervizdíjat – nem számítunk fel extra költségeket."
},

veg:"🌱 Vegetáriánus opció elérhető",

soups:{
title:"Levesek",

tomYum:{
name:"A1 Tom Yum",
thai:"ต้มยำ",
desc:"Erőteljes és aromás thai csípős-savanyú leves citromfűvel, galangával, chilivel, gombával és választható hússal vagy rákkal.",
price1:"Csirke/Sertés/Vegetáriánus",
price2:"Marha/Rák",
price3:"Tenger gyümölcsei"
},

tomKha:{
name:"A2 Tom Kha",
thai:"ต้มข่า",
desc:"Krémes kókusztejes leves citromfűvel, galangával és kaffir lime levéllel, enyhén fűszerezve, választható hússal vagy rákkal.",
price1:"Csirke/Sertés/Vegetáriánus",
price2:"Marha/Rák",
price3:"Tenger gyümölcsei"
},

kuaitiao:{
name:"A3 Kuaitiao",
thai:"ก๋วยเตี๋ยว",
desc:"Hagyományos thai rizstésztaleves gazdag alaplében zöldségekkel és választható csirkével, sertéssel, marhával vagy rákkal.",
price1:"Csirke/Sertés/Vegetáriánus",
price2:"Marha/Rák"
},

sukee:{
name:"A4 Sukee",
thai:"สุกี้",
desc:"Üvegtésztaleves zöldségekkel és tojással enyhén csípős chili alaplében, választható hússal vagy rákkal.",
price1:"Csirke/Sertés/Vegetáriánus",
price2:"Marha/Rák",
price3:"Tenger gyümölcsei"
},

kuaitiaoTomYum:{
name:"A5 Kuaitiao Tom Yum",
desc:"Csípős Tom Yum rizstésztaleves savanykás fűszerekkel, chilivel és zöldségekkel sertéssel vagy rákkal.",
price1:"Hagyományos",
price2:"Tenger gyümölcsei"
},

radnaa:{
name:"A6 Radnaa",
thai:"ราดหน้า",
desc:"Széles rizstészta puha hússal és zöldségekkel gazdag thai mártásban, leves jellegű fogásként tálalva.",
price1:"Chicken/Pork/Vegetarian",
price2:"Beef/Shrimp",
price3:"Tenger gyümölcsei",
},

jok:{
name:"A7 Khao Tom Jok",
thai:"ข้าวต้มโจ๊ก",
desc:"Krémes thai rizskásaleves darált sertéssel, gyömbérrel, újhagymával és lágy tojással.",

},

},

appetizers:{
title:"Előételek",

pikKaiThod:{
name:"F1 Pik Kai Thod",
thai:"ปีกไก่ทอด",
desc:"Ropogós thai sült csirkeszárnyak csípős mártogatóssal tálalva.",
},

shrimpTempura:{
name:"F2 Garnéla Tempura",
thai:"กุ้งเทมปุระ",
desc:"Könnyű tésztában bundázott, ropogósra sült garnélarák finom mártogatóssal.",

},

lukChin:{
name:"F3 Luk Chin",
thai:"ลูกชิ้น",
desc:"Grillezett thai húsgolyók nyárson, édeskés-csípős mártogatóssal.",

},

springRolls:{
name:"F4 Tavaszi Tekercs",
thai:"ปอเปี๊ยะทอด",
desc:"Ropogósra sült tavaszi tekercsek zöldséges és üvegtésztás töltelékkel, édes chili szósszal.",

},

},

noodles:{
title:"Tésztás ételek",

padThai:{
name:"B1 Pad Thai",
thai:"ผัดไทย",
desc:"Thaiföld legismertebb sült rizstésztája tojással, zöldségekkel és választható hússal vagy rákkal, édes-savanykás tamarind szósszal.",
price1:"Csirke/Sertés",
price2:"Marha/Rák",
price3:"Tenger gyümölcsei"
},

padMeeLuang:{
name:"B2 Pad Mee Luang",
desc:"Sült sárga tojásos tészta friss zöldségekkel és választható hússal vagy rákkal könnyű thai szósszal.",
price1:"Csirke/Sertés ",
price2:"Marha/Rák",
price3:"Tenger gyümölcsei"
},

padWunsen:{
name:"B3 Pad Wunsen",
desc:"Üvegtészta pirítva zöldségekkel, tojással és választható hússal vagy rákkal szójaszószos ízesítéssel.",

},

padSiIyu:{
name:"B4 Pad Si Iyu",
desc:"Széles rizstészta zöldségekkel, tojással és sötét szójaszósszal pirítva, választható hússal vagy rákkal.",

},

padKeeMao:{
name:"B5 Pad Kee Mao",
desc:"Csípős pirított rizstészta thai bazsalikommal, chilivel, bambuszrüggyel és zöldségekkel, választható hússal vagy rákkal.",
},

},

rice:{
title:"Rizses ételek",

khaoPad:{
name:"C1 Khao Pad",
thai:"ข้าวผัด",
desc:"Klasszikus thai sült rizs tojással, zöldségekkel és választható hússal vagy rákkal.",

},

padKhing:{
name:"C2 Pad Khing",
desc:"Gyömbérrel és zöldségekkel pirított étel választható hússal vagy rákkal, párolt jázmin rizzsel tálalva.",

},

padMedMamuang:{
name:"C3 Pad Med Mamuang",
desc:"Kesudióval pirított zöldségek és választható hús vagy rák, ízletes thai szósszal, rizzsel tálalva.",

},

padKaprao:{
name:"C4 Pad Kaprao",
desc:"Csípős thai bazsalikomos pirított étel chilivel, zöldségekkel és választható hússal vagy rákkal, rizzsel tálalva.",
egg:"Tojással"

},

padKapraoMince:{
name:"C5 Pad Kaprao darált sertéshússal",
desc:"Autentikus thai bazsalikomos pirított darált sertéshús ropogós tükörtojással, párolt rizzsel tálalva.",

},

padKapraoCrispy:{
name:"C6 Pad Kaprao ropogós sertéshússal",
desc:"Ropogós sertéshas thai bazsalikommal, fokhagymával és friss chilivel pirítva, jázmin rizzsel tálalva.",

},

padPakRuamMit:{
name:"C7 Pad Pak Ruam Mit",
desc:"Pirított vegyes zöldségek könnyű thai szósszal, választható hússal vagy rákkal, rizzsel tálalva.",
}

},

curries:{
title:"Curryk",

redCurry:{
name:"D1 Vörös Curry",
thai:"แกงเผ็ด",
desc:"Gazdag, enyhén csípős kókusztejes curry bambuszrüggyel, zöldségekkel és választható hússal vagy rákkal.",
price1:"Csirke / Sertés / Vegetáriánus",
price2:"Marha / Rák"
},

yellowCurry:{
name:"D2 Sárga Curry",
thai:"แกงกะหรี่",
desc:"Enyhe és aromás kókusztejes curry burgonyával, hagymával és választható hússal vagy rákkal.",
price1:"Csirke / Sertés / Vegetáriánus",
price2:"Marha / Rák"
},

greenCurry:{
name:"D3 Zöld Curry",
thai:"แกงเขียวหวาน",
desc:"Krémes és illatos zöld kókusztejes curry thai bazsalikommal, bambuszrüggyel és választható hússal vagy rákkal.",
price1:"Csirke / Sertés / Vegetáriánus",
price2:"Marha / Rák"
},

massaman:{
name:"D4 Massaman Curry",
thai:"แกงมัสมั่น",
desc:"Enyhén fűszeres dél-thai curry kókusztejjel, burgonyával, babbal és választható hússal.",
price1:"Csirke / Sertés",
price2:"Marha"
},

panang:{
name:"D5 Panang Curry",
thai:"แกงพะแนง",
desc:"Sűrű és krémes vörös curry kaffir lime levéllel és választható hússal gazdag kókuszos szószban.",
price1:"Csirke / Sertés",
price2:"Marha"
}

},

specialities:{
title:"Thai különlegességek",

larb:{
name:"E1 Larb",
thai:"ลาบ",
desc:"Hagyományos északkelet-thai darált hús saláta lime-lével, chilivel, pirított rizsporral és friss fűszernövényekkel.",
price:"Csirke / Sertés"
},

kahMooYang:{
name:"E2 Kah Moo Yang",
thai:"ขาหมูย่าง",
desc:"Ropogósra sült sertéscsülök thai fűszerekkel, ízletes mártogatóssal tálalva.",
},

khaoKaiYang:{
name:"E3 Khao Kai Yang",
thai:"ข้าวไก่ย่าง",
desc:"Thai módra pácolt grillezett csirke párolt rizzsel és savanykás mártogatóssal.",
},

lukChin:{
name:"E4 Luk Chin",
thai:"ลูกชิ้น",
desc:"Grillezett thai húsgolyók édes-csípős chili szósszal tálalva.",
},

somTum:{
name:"E5 Som Tum",
thai:"ส้มตำ",
desc:"Csípős zöld papaya saláta lime-mal, chilivel, halszósszal, paradicsommal és földimogyoróval.",
},

tumPah:{
name:"E6 Tum Pah",
thai:"ตำป่า",
desc:"Erőteljes ízű papaya saláta erjesztett alapanyagokkal és thai fűszerekkel.",
},

yum:{
name:"E7 Yum",
thai:"ยำ",
desc:"Csípős thai saláta friss fűszernövényekkel, chilivel és lime-lével, választható hússal vagy rákkal.",
},

somTumTad:{
name:"E8 Som Tum Tad",
thai:"ส้มตำถาด",
desc:"Nagy megosztható tál csípős papaya salátával és különféle thai köretekkel.",
}

},

sides:{
title:"Köretek és kiegészítők",

jasmineRice:{
name:"Párolt jázmin rizs",
desc:"Illatos thai jázmin rizs, tökéletes köret currykhez és wokban készült ételekhez.",
},

stickyRice:{
name:"Ragacsos rizs",
desc:"Hagyományos thai ragacsos rizs puha és enyhén rágós állaggal, édes vagy sós ételek mellé is kiváló.",
},

friedEgg:{
name:"Tükörtojás",
desc:"Ropogós szélű thai stílusú tükörtojás, tökéletes feltét rizses ételekhez.",
},

riceNoodles:{
name:"Natúr rizstészta",
desc:"Párolt rizstészta natúr formában, ideális alap szószokhoz vagy currykhez.",
},

eggNoodles:{
name:"Natúr tojásos tészta",
desc:"Puha sárga tojásos tészta egyszerű köretként vagy extra adagként.",
},

glassNoodles:{
name:"Natúr üvegtészta",
desc:"Könnyű és finom üvegtészta natúr formában köretként.",
}

},

desserts:{
title:"Desszertek",

mangoStickyRice:{
name:"Édes ragacsos rizs mangóval",
desc:"Édes kókuszos ragadós rizs friss érett mangóval és krémes kókusz szósszal.",
},

thaiCrepe:{
name:"Thai palacsinta",
desc:"Puha thai stílusú palacsinta édes krémmel és finom reszelt kókusszal töltve.",
}

},

drinks:{
title:"Különleges italok",

thaiTea:{
name:"Thai tea",
desc:"Autentikus thai tea erősen főzve, jéggel és sűrített tejjel tálalva a gazdag és krémes ízért.",
},

thaiGreenTea:{
name:"Thai zöld tea",
desc:"Illatos thai zöld tea hidegen tálalva sűrített tejjel, lágy és enyhén édes ízzel.",
},

thaiIcedCoffee:{
name:"Thai jeges kávé",
desc:"Édes és krémes thai stílusú jeges kávé sűrített tejjel.",
},

thaiBlackCoffee:{
name:"Thai jeges fekete kávé",
desc:"Erős és frissítő thai jeges fekete kávé jéggel, tej nélkül.",
},

pinkMilk:{
name:"Rózsaszín tej",
desc:"Édes hideg tej thai sala sziruppal ízesítve, jellegzetes rózsaszín színnel.",
},

singha:{
  name:"Singha sör",
  desc:"Thaiföld eredeti prémium lager söre, frissítő és ropogós ízvilággal, lágy malátás karakterrel és tiszta lecsengéssel."
},

chang:{
  name:"Chang sör",
  desc:"Népszerű thai lager sör telt ízzel, enyhén édeskés jegyekkel és frissítő, könnyen iható lecsengéssel."
},

},

fish:{
title:"Halételek",
note:"Csak a Rim Thanonh 2 étteremben elérhető.",

sweetChili:{
name:"Sült tilápia édes chili szósszal",
thai:"ปลาทอดซอสพริกหวาน",
desc:"Ropogósra sült tilápia édes chili szósszal."
},

lime:{
name:"Gőzölt hal lime-mal és chilivel",
thai:"ปลานึ่งมะนาว",
desc:"Gőzölt tilápia lime-mal, fokhagymával és chilivel."
},

sweetSour:{
name:"Sült tilápia édes-savanyú szósszal",
thai:"ปลาทอดเปรี้ยวหวาน",
desc:"Sült tilápia édes-savanyú szósszal."
},

garlic:{
name:"Sült tilápia fokhagymával",
thai:"ปลาทอดกระเทียม",
desc:"Ropogós tilápia pirított fokhagymával."
}
},

unavailable:"Jelenleg nem elérhető",


},

restaurants:{
title:"Éttermeink",

labels:{
opening:"Nyitvatartás:",
days:"H–V:",
address:"Cím:",
phone:"Telefon:"
},

restaurantNotice:{
title:"Fontos információ:",
text:"A Rim Thanonh 3 éttermünk véglegesen bezárt. Új éttermünk, a Rim Thanonh Thai Tea & Snacks, már nyitva áll vendégeink előtt. Fontos tudni, hogy a Rim Thanonh Thai Tea & Snacks jelenleg kisebb étlappal működik, és csak az étlapon elérhetőként jelölt ételek rendelhetők."
}

},

booking:{
title:"Asztalfoglalás",
name:"Név",
email:"Email cím",
phone:"Telefonszám",
chooseRestaurant:"Válassz éttermet!",
guests:"Vendégek száma",
guestHint:"Kérjük válassz éttermet a vendéglimit megtekintéséhez.",
date:"Dátum kiválasztása",
time:"Időpont kiválasztása",
message:"Megjegyzés (opcionális)",
submit:"Asztal foglalása"
},

takeaway:{
woltText:"Rendelj gyorsan és egyszerűen innen:",
foodoraText:"Rendelj az alábbi éttermekből:"
},

terms:{
nav:{
home:"Főoldal",
menu:"Étlap"
},

tagline:"Autentikus thai ételek autentikus thai séfektől.",

buttons:{
home:"Vissza a főoldalra",
menu:"Étlap megtekintése"
},

title:"Felhasználási feltételek",

text:`Jelen Felhasználási feltételek szabályozzák a <strong>Rim Thanonh Thai Food</strong> által üzemeltetett weboldal használatát, amely az alábbi címeken található éttermekhez kapcsolódik: <strong>Rim Thanonh 1: Budapest, Dob u. 60, 1074; Rim Thanonh 2: Budapest, Akácfa u. 40, 1072; Rim Thanonh Thai Tea & Snacks: Budapest, Klauzál u. 35, 1072</strong>, és minden látogatóra, felhasználóra és ügyfélre vonatkozik, aki a weboldalt használja.

A weboldal elérésével vagy használatával Ön elfogadja, hogy betartja a jelen Felhasználási feltételeket. Amennyiben nem ért egyet a feltételek bármely részével, kérjük, tartózkodjon a weboldal és szolgáltatásainak használatától.

A weboldalon található tartalom, beleértve a szövegeket, képeket, étlapokat, arculati elemeket és egyéb anyagokat, kizárólag tájékoztató jellegű.

A Rim Thanonh Thai Food mindent megtesz annak érdekében, hogy a weboldalon szereplő információk pontosak és naprakészek legyenek, azonban fenntartja a jogot arra, hogy az étlapot, árakat, nyitvatartási időket és szolgáltatásokat előzetes értesítés nélkül módosítsa.

A felhasználók a weboldalt éttermi információk megtekintésére, az étlap böngészésére, asztalfoglalás kezdeményezésére, valamint külső ételkiszállítási platformok elérésére használhatják.

A weboldalon keresztül leadott asztalfoglalások foglalási kérésnek minősülnek, és csak az étterem visszaigazolását követően válnak érvényessé.

A weboldal bizonyos beágyazott szolgáltatásokat használhat, például a <strong>Google Maps</strong> térképszolgáltatást az éttermek elhelyezkedésének megjelenítésére. E szolgáltatások használata során technikai adatok – például a felhasználó IP-címe – továbbításra kerülhetnek a szolgáltató felé.

A weboldal a felhasználó által kiválasztott nyelvet a böngésző <strong>local storage</strong> tárhelyén tárolja annak érdekében, hogy a következő látogatás során is a kiválasztott nyelven jelenjen meg. Ez az adat kizárólag a felhasználó eszközén kerül tárolásra.

A weboldalon külső ételkiszállítási szolgáltatások, például Wolt vagy Foodora platformjai is elérhetők lehetnek. Ezek a szolgáltatások függetlenül működnek, és az étterem nem vállal felelősséget ezen platformok működéséért vagy szabályzataiért.

A weboldalon keresztül megadott személyes adatok – például az asztalfoglalási űrlapon megadott adatok – kezelése az Európai Unió Általános Adatvédelmi Rendeletének (GDPR) és a hatályos magyar adatvédelmi jogszabályoknak megfelelően történik. A részletes adatkezelési tájékoztató a weboldal Adatvédelmi Szabályzatában található.

Jelen Felhasználási feltételekre Magyarország jogszabályai az irányadóak. A weboldal használatából eredő jogviták elbírálására a hatáskörrel rendelkező magyar bíróságok jogosultak.

A weboldal harmadik fél által biztosított értékeléseket is megjeleníthet (például Google értékelések), amelyek külső szolgáltatásokon (pl. Elfsight) keresztül kerülnek beágyazásra. Ezek a szolgáltatások függetlenül működnek, és saját szabályzataik szerint kezelhetnek adatokat.

A weboldalon megjelenített egyes termékképek illusztrációként szolgálnak, és eltérhetnek a ténylegesen felszolgált termékek megjelenésétől. A márkanevek és védjegyek (pl. Chang, Singha) a tulajdonosaik tulajdonát képezik.

A feltételekkel kapcsolatos kérdések esetén kérjük vegye fel a kapcsolatot a <strong>Rim Thanonh Thai Food</strong> étteremmel az alábbi elérhetőségeken: <strong>info@rimthanonh.hu</strong> vagy <strong>+36 20 536 5163</strong>.`

},


privacy:{
nav:{
home:"Főoldal",
menu:"Étlap"
},

tagline:"Autentikus thai ételek autentikus thai séfektől.",

buttons:{
home:"Vissza a főoldalra",
menu:"Étlap megtekintése"
},

title:"Adatvédelmi Irányelvek",

text:`<strong>Utolsó frissítés:</strong> 2026<br><br>

Ez az adatvédelmi tájékoztató ismerteti, hogy a <strong>Rim Thanonh Thai Food</strong> hogyan gyűjti, használja és védi a személyes adatokat a weboldal látogatása során.

A szabályzat az alábbi éttermekhez kapcsolódó weboldal használóira vonatkozik:

<strong>
Rim Thanonh 1 – Budapest, Dob u. 60, 1074<br>
Rim Thanonh 2 – Budapest, Akácfa u. 40, 1072<br>
Rim Thanonh Thai Tea & Snacks – Budapest, Klauzál u. 35, 1072
</strong>

<br><br>

<strong>1. Gyűjtött adatok</strong><br><br>

A weboldalon található foglalási űrlap használata során az alábbi adatok kerülhetnek megadásra:<br>
• Név<br>
• Telefonszám<br>
• Email cím<br>
• Foglalási adatok (étterem, vendégek száma, dátum, időpont)<br>
• Opcionális megjegyzés<br><br>

<strong>2. Az adatkezelés célja</strong><br><br>

Az adatokat kizárólag az alábbi célokra használjuk:<br>
• Asztalfoglalási kérelmek kezelése<br>
• Kapcsolattartás a foglalással kapcsolatban<br>
• A foglalás visszaigazolása vagy módosítása<br><br>

A Rim Thanonh Thai Food nem értékesíti és nem adja bérbe a személyes adatokat.<br><br>

<strong>3. Foglalások</strong><br><br>

A weboldalon keresztül leadott foglalások foglalási kérésnek minősülnek, és csak az étterem visszaigazolását követően válnak érvényessé.<br><br>

<strong>4. Beágyazott szolgáltatások</strong><br><br>

A weboldal harmadik féltől származó szolgáltatásokat használhat, például <strong>Google Maps</strong> térképet és külső értékelési rendszereket (pl. Google értékelések Elfsight szolgáltatáson keresztül) a felhasználói élmény javítása érdekében.<br><br>

Ezen szolgáltatások használata során bizonyos technikai adatok – például IP-cím, böngésző adatok és eszközinformációk – továbbításra kerülhetnek a szolgáltatók felé.<br><br>

Ezek a szolgáltatások saját adatvédelmi szabályzattal rendelkeznek, amelyek felett a Rim Thanonh Thai Food nem rendelkezik ellenőrzéssel.<br><br>

<strong>5. Nyelvi beállítások tárolása</strong><br><br>

A weboldal a kiválasztott nyelvet a böngésző <strong>localStorage</strong> tárhelyén tárolja, hogy a következő látogatáskor is megőrizze a felhasználó beállítását.<br><br>

<strong>6. Külső szolgáltatások</strong><br><br>

A weboldal külső ételkiszállítási platformokra is mutathat, például <strong>Wolt</strong> vagy <strong>Foodora</strong>. Ezek a szolgáltatások függetlenül működnek.<br><br>

<strong>7. Adatbiztonság</strong><br><br>

A Rim Thanonh Thai Food megfelelő technikai és szervezési intézkedéseket alkalmaz az adatok védelmére.<br><br>

<strong>8. Felhasználói jogok</strong><br><br>

A GDPR szerint a felhasználók jogosultak:<br>
• hozzáférni személyes adataikhoz<br>
• kérni azok helyesbítését<br>
• kérni azok törlését<br>
• tiltakozni az adatkezelés ellen<br><br>

<strong>9. A szabályzat módosítása</strong><br><br>

Az adatvédelmi szabályzat időről időre frissülhet.<br><br>

<strong>10. Kapcsolat</strong><br><br>

Kérdés esetén lépjen kapcsolatba velünk:<br><br>

<strong>
Rim Thanonh Thai Food<br>
Email: info@rimthanonh.hu<br>
Telefon: +36 20 536 5163
</strong>`
},

alerts: {
  reservationSent: "Foglalási kérelmét elküldtük!\n\nKérjük ellenőrizze e-mail fiókját a visszaigazolásért vagy további információkért."
},

footer:{
title:"Rim Thanonh Thai Food",
subtitle:"Autentikus thai ételek thai séfektől.",
locations:"Éttermek",
hours:"Nyitvatartás",
contact:"Kapcsolat",
terms:"Felhasználási feltételek",
copyright:"© 2026 Rim Thanonh Thai Food — Minden jog fenntartva."
},

legal:{
privacyPolicy:"Adatvédelmi irányelvek",
privacyConsent:"Elolvastam és elfogadom az <a href='privacy.html' target='_blank'>Adatvédelmi irányelveket</a>"
},

},

th:{

currency:"HUF",
guests: "จำนวนแขก (สูงสุด 16 คน)",

nav:{
home:"หน้าแรก",
about:"เกี่ยวกับเรา",
reviews:"รีวิว",
menu:"เมนู",
restaurants:"ร้านอาหาร",
booking:"จองโต๊ะ",
takeaway:"สั่งกลับบ้าน",
contact:"ติดต่อ"
},

reviews: {
  "title": "ความคิดเห็นจากลูกค้าของเรา",
},

hero:{
title:"ยินดีต้อนรับสู่ Rim Thanonh Thai Food!",
subtitle:"อาหารไทยแท้จากเชฟชาวไทยแท้",
menu:"เมนู",
reserve:"จองโต๊ะ",
takeaway:"สั่งกลับบ้าน"
},

about:{
title:"จากบุรีรัมย์ด้วยความรัก",

text1:"Rim Thanonh เป็นร้านอาหารครอบครัวที่เริ่มต้นขึ้นในปี 2018 ด้วยเป้าหมายง่าย ๆ คือการนำเสนอรสชาติอาหารไทยแท้ให้กับแขกทุกคน จากจุดเริ่มต้นเล็ก ๆ ร้านได้เติบโตขึ้นด้วยความหลงใหล ความทุ่มเท และความร่วมมือของครอบครัวและเพื่อนสนิทจากจังหวัดบุรีรัมย์ที่มาร่วมแบ่งปันมรดกทางอาหารของพวกเขา",

text2:"ทุกจานอาหารสะท้อนถึงประเพณี ความเป็นต้นตำรับ และเสน่ห์ของการต้อนรับแบบไทย ซึ่งเป็นหัวใจของ Rim Thanonh"
},

menu:{intro:"ดูเมนูของเรา!",

  backIntro:"กลับไปยังหน้าหลัก",


  nav:{
    soups:"ซุป",
    appetizers:"อาหารว่าง",
    noodles:"เมนูก๋วยเตี๋ยว",
    rice:"เมนูข้าว",
    curries:"แกง",
    specialities:"อาหารพิเศษไทย",
    sides:"เครื่องเคียง",
    desserts:"ของหวาน",
    drinks:"เครื่องดื่ม",
    fish:"เมนูปลา",
    back:"หน้าแรก"
  },

  legend:{
  spiceTitle:"ระดับความเผ็ด:",
  mild:"เผ็ดน้อย",
  medium:"เผ็ดปานกลาง",
  verySpicy:"เผ็ดมาก",
  vegetarian:"🌱 มีตัวเลือกมังสวิรัติ – เมนูนี้สามารถทำแบบมังสวิรัติพร้อมเต้าหู้ได้ตามต้องการ!",
  chefNote:"สามารถแจ้งเชฟไม่ใส่พริกได้ 😉",
  serviceNote:"ราคายังไม่รวมค่าบริการ – ไม่มีค่าใช้จ่ายเพิ่มเติมในบิลของคุณ"
},

veg:"🌱 มีตัวเลือกมังสวิรัติ",

soups:{
title:"ซุป",

tomYum:{
name:"A1 ต้มยำ",
thai:"ต้มยำ",
desc:"ซุปต้มยำรสจัดจ้านแบบไทย ใส่ตะไคร้ ข่า พริก เห็ด และสามารถเลือกเนื้อสัตว์หรืออาหารทะเลได้",
price1:"ไก่/หมู/มังสวิรัติ",
price2:"เนื้อ/กุ้ง",
price3:"อาหารทะเล"
},

tomKha:{
name:"A2 ต้มข่า",
thai:"ต้มข่า",
desc:"ซุปกะทิหอมมันใส่ตะไคร้ ข่า และใบมะกรูด ปรุงรสอ่อน ๆ สามารถเลือกเนื้อสัตว์หรืออาหารทะเลได้",
price1:"ไก่/หมู/มังสวิรัติ",
price2:"เนื้อ/กุ้ง",
price3:"อาหารทะเล"
},

kuaitiao:{
name:"A3 ก๋วยเตี๋ยว",
thai:"ก๋วยเตี๋ยว",
desc:"ซุปก๋วยเตี๋ยวแบบไทยในน้ำซุปเข้มข้น ใส่ผักและสามารถเลือกไก่ หมู เนื้อ หรือกุ้งได้",
price1:"ไก่/หมู/มังสวิรัติ",
price2:"เนื้อ/กุ้ง"
},

sukee:{
name:"A4 สุกี้",
thai:"สุกี้",
desc:"ซุปวุ้นเส้นใส่ผักและไข่ในน้ำซุปพริกเล็กน้อย สามารถเลือกเนื้อสัตว์หรืออาหารทะเลได้",
price1:"ไก่/หมู/มังสวิรัติ",
price2:"เนื้อ/กุ้ง",
price3:"อาหารทะเล"
},

kuaitiaoTomYum:{
name:"A5 ก๋วยเตี๋ยวต้มยำ",
desc:"ก๋วยเตี๋ยวต้มยำรสเผ็ดเปรี้ยวใส่สมุนไพรและผัก สามารถเลือกหมูหรืออาหารทะเลได้",
price1:"แบบดั้งเดิม",
price2:"อาหารทะเล"
},

radnaa:{
name:"A6 ราดหน้า",
thai:"ราดหน้า",
desc:"เส้นใหญ่ราดด้วยเนื้อสัตว์และผักในน้ำเกรวี่แบบไทยรสเข้มข้น",
price3:"อาหารทะเล"
},

jok:{
name:"A7 ข้าวต้มโจ๊ก",
thai:"ข้าวต้มโจ๊ก",
desc:"โจ๊กข้าวเนื้อนุ่มใส่หมูสับ ขิง ต้นหอม และไข่ลวก",
},

},

appetizers:{
title:"อาหารเรียกน้ำย่อย",

pikKaiThod:{
name:"F1 ปีกไก่ทอด",
thai:"ปีกไก่ทอด",
desc:"ปีกไก่ทอดกรอบสไตล์ไทย เสิร์ฟพร้อมซอสเผ็ดสำหรับจิ้ม",
},

shrimpTempura:{
name:"F2 กุ้งเทมปุระ",
thai:"กุ้งเทมปุระ",
desc:"กุ้งชุบแป้งทอดกรอบ เสิร์ฟพร้อมซอสสำหรับจิ้ม",
},

lukChin:{
name:"F3 ลูกชิ้น",
thai:"ลูกชิ้น",
desc:"ลูกชิ้นย่างเสียบไม้สไตล์ไทย เสิร์ฟพร้อมซอสหวานเผ็ด",
},

springRolls:{
name:"F4 ปอเปี๊ยะทอด",
thai:"ปอเปี๊ยะทอด",
desc:"ปอเปี๊ยะทอดกรอบไส้ผักและวุ้นเส้น เสิร์ฟพร้อมซอสพริกหวาน",
},

},

noodles:{
title:"เมนูก๋วยเตี๋ยว",

padThai:{
name:"B1 ผัดไทย",
thai:"ผัดไทย",
desc:"เมนูเส้นผัดชื่อดังของไทย ใส่ไข่ ผัก และสามารถเลือกเนื้อสัตว์หรืออาหารทะเล คลุกเคล้ากับซอสมะขามรสหวานเค็มกลมกล่อม",
price1:"ไก่/หมู",
price2:"เนื้อ/กุ้ง",
price3:"อาหารทะเล"
},

padMeeLuang:{
name:"B2 ผัดหมี่เหลือง",
desc:"เส้นหมี่เหลืองผัดกับผักสดและสามารถเลือกเนื้อสัตว์หรืออาหารทะเล ปรุงรสด้วยซอสไทยรสกลมกล่อม",
price1:"ไก่/หมู",
price2:"เนื้อ/กุ้ง",
price3:"อาหารทะเล"
},

padWunsen:{
name:"B3 ผัดวุ้นเส้น",
desc:"วุ้นเส้นผัดกับผัก ไข่ และสามารถเลือกเนื้อสัตว์หรืออาหารทะเล ปรุงรสด้วยซอสถั่วเหลืองหอมอร่อย",
},

padSiIyu:{
name:"B4 ผัดซีอิ๊ว",
desc:"เส้นใหญ่ผัดกับผัก ไข่ และซีอิ๊วดำ ให้รสชาติกลมกล่อมและหอมกระทะ สามารถเลือกเนื้อสัตว์หรืออาหารทะเลได้",
},

padKeeMao:{
name:"B5 ผัดขี้เมา",
desc:"ก๋วยเตี๋ยวผัดเผ็ดกับโหระพา พริก หน่อไม้ และผัก สามารถเลือกเนื้อสัตว์หรืออาหารทะเลได้",
},

},

rice:{
title:"เมนูข้าว",

khaoPad:{
name:"C1 ข้าวผัด",
thai:"ข้าวผัด",
desc:"ข้าวผัดสไตล์ไทยใส่ไข่ ผัก และสามารถเลือกเนื้อสัตว์หรืออาหารทะเล ปรุงรสอย่างลงตัว",
},

padKhing:{
name:"C2 ผัดขิง",
desc:"ผัดขิงกับผักและสามารถเลือกเนื้อสัตว์หรืออาหารทะเล เสิร์ฟพร้อมข้าวหอมมะลิ",
},

padMedMamuang:{
name:"C3 ผัดเม็ดมะม่วง",
desc:"ผัดเม็ดมะม่วงกับผักและสามารถเลือกเนื้อสัตว์หรืออาหารทะเลในซอสไทยรสกลมกล่อม เสิร์ฟพร้อมข้าว",
},

padKaprao:{
name:"C4 ผัดกะเพรา",
desc:"ผัดกะเพรารสเผ็ดกับพริก ผัก และสามารถเลือกเนื้อสัตว์หรืออาหารทะเล เสิร์ฟพร้อมข้าวสวย",
egg:"กับไข่"
},

padKapraoMince:{
name:"C5 ผัดกะเพราหมูสับ",
desc:"ผัดกะเพราหมูสับแบบไทยแท้ เสิร์ฟพร้อมไข่ดาวกรอบและข้าวสวย",
price:"พร้อมไข่ดาว"
},

padKapraoCrispy:{
name:"C6 ผัดกะเพราหมูกรอบ",
desc:"หมูกรอบผัดกับใบกะเพรา กระเทียม และพริก เสิร์ฟพร้อมข้าวหอมมะลิ",
},

padPakRuamMit:{
name:"C7 ผัดผักรวมมิตร",
desc:"ผัดผักรวมในซอสไทยรสอ่อน สามารถเลือกเนื้อสัตว์หรืออาหารทะเล เสิร์ฟพร้อมข้าว",
}

},

curries:{
title:"แกง",

redCurry:{
name:"D1 แกงเผ็ด",
thai:"แกงเผ็ด",
desc:"แกงกะทิรสเข้มข้นเผ็ดเล็กน้อย ใส่หน่อไม้ ผัก และสามารถเลือกเนื้อสัตว์หรืออาหารทะเลได้",
price1:"ไก่ / หมู / มังสวิรัติ",
price2:"เนื้อ / กุ้ง"
},

yellowCurry:{
name:"D2 แกงกะหรี่",
thai:"แกงกะหรี่",
desc:"แกงกะทิรสอ่อนหอมเครื่องเทศ ใส่มันฝรั่ง หัวหอม และสามารถเลือกเนื้อสัตว์หรืออาหารทะเลได้",
price1:"ไก่ / หมู / มังสวิรัติ",
price2:"เนื้อ / กุ้ง"
},

greenCurry:{
name:"D3 แกงเขียวหวาน",
thai:"แกงเขียวหวาน",
desc:"แกงกะทิสีเขียวหอมมัน ใส่โหระพา หน่อไม้ และสามารถเลือกเนื้อสัตว์หรืออาหารทะเลได้",
price1:"ไก่ / หมู / มังสวิรัติ",
price2:"เนื้อ / กุ้ง"
},

massaman:{
name:"D4 แกงมัสมั่น",
thai:"แกงมัสมั่น",
desc:"แกงมัสมั่นรสอร่อย ปรุงด้วยกะทิ มันฝรั่ง และถั่ว มีเมนูเนื้อสัตว์ให้เลือกด้วย",
price1:"ไก่ / หมู",
price2:"เนื้อ"
},

panang:{
name:"D5 แกงพะแนง",
thai:"แกงพะแนง",
desc:"แกงพะแนงรสเข้มข้นใส่ใบมะกรูดและเนื้อสัตว์ในซอสกะทิ",
price1:"ไก่ / หมู",
price2:"เนื้อ"
}

},

specialities:{
title:"อาหารพิเศษไทย",

larb:{
name:"E1 ลาบ",
thai:"ลาบ",
desc:"สลัดเนื้อสับแบบอีสาน ปรุงรสด้วยน้ำมะนาว พริก ข้าวคั่ว และสมุนไพรสด",
price:"ไก่ / หมู"
},

kahMooYang:{
name:"E2 ขาหมูย่าง",
thai:"ขาหมูย่าง",
desc:"ขาหมูย่างกรอบปรุงรสด้วยเครื่องเทศไทย เสิร์ฟพร้อมน้ำจิ้มรสจัด",
},

khaoKaiYang:{
name:"E3 ข้าวไก่ย่าง",
thai:"ข้าวไก่ย่าง",
desc:"ไก่ย่างหมักสไตล์ไทย เสิร์ฟพร้อมข้าวสวยและน้ำจิ้มรสเปรี้ยวหวาน",
},

lukChin:{
name:"E4 ลูกชิ้น",
thai:"ลูกชิ้น",
desc:"ลูกชิ้นย่างสไตล์ไทย เสิร์ฟพร้อมซอสพริกหวานเผ็ด",
},

somTum:{
name:"E5 ส้มตำ",
thai:"ส้มตำ",
desc:"สลัดมะละกอรสเผ็ดเปรี้ยว ใส่มะนาว พริก น้ำปลา มะเขือเทศ และถั่วลิสง",
},

tumPah:{
name:"E6 ตำป่า",
thai:"ตำป่า",
desc:"ส้มตำรสจัดเข้มข้น ใส่วัตถุดิบหมักและสมุนไพรไทย",
},

yum:{
name:"E7 ยำ",
thai:"ยำ",
desc:"ยำรสเผ็ดแบบไทย คลุกกับสมุนไพรสด พริก น้ำมะนาว และสามารถเลือกเนื้อสัตว์หรืออาหารทะเลได้",
},

somTumTad:{
name:"E8 ส้มตำถาด",
thai:"ส้มตำถาด",
desc:"ส้มตำจานใหญ่สำหรับแบ่งปัน เสิร์ฟพร้อมเครื่องเคียงแบบไทยหลากหลาย",
}

},

sides:{
title:"เครื่องเคียง",

jasmineRice:{
name:"ข้าวหอมมะลิ",
desc:"ข้าวหอมมะลิหุงสุกหอมกรุ่น เหมาะสำหรับทานคู่กับแกงหรืออาหารผัด",
},

stickyRice:{
name:"ข้าวเหนียว",
desc:"ข้าวเหนียวแบบไทย เนื้อนุ่มและเหนียวเล็กน้อย เหมาะทั้งกับอาหารคาวและหวาน",
},

friedEgg:{
name:"ไข่ดาว",
desc:"ไข่ดาวกรอบสไตล์ไทย เหมาะสำหรับเพิ่มลงบนเมนูข้าว",
},

riceNoodles:{
name:"เส้นก๋วยเตี๋ยว",
desc:"เส้นก๋วยเตี๋ยวนึ่งแบบธรรมดา เหมาะเป็นฐานสำหรับซอสหรือแกง",
},

eggNoodles:{
name:"บะหมี่ไข่",
desc:"เส้นบะหมี่ไข่สีเหลืองนุ่ม เสิร์ฟแบบธรรมดาเป็นเครื่องเคียง",
},

glassNoodles:{
name:"วุ้นเส้น",
desc:"วุ้นเส้นเนื้อเบาและละเอียด เสิร์ฟแบบธรรมดาเป็นเครื่องเคียง",
}

},

desserts:{
title:"ของหวาน",

mangoStickyRice:{
name:"ข้าวเหนียวมะม่วง",
desc:"ข้าวเหนียวมูนหวานเสิร์ฟพร้อมมะม่วงสุกและซอสกะทิหอมมัน",
},

thaiCrepe:{
name:"เครปไทย",
desc:"เครปสไตล์ไทยเนื้อนุ่ม ไส้ครีมหวานและมะพร้าวฝอย",
}

},

drinks:{
title:"เครื่องดื่มพิเศษ",

thaiTea:{
name:"ชาไทย",
desc:"ชาไทยแท้ชงเข้ม เสิร์ฟเย็นพร้อมนมข้นหวาน ให้รสชาติหวานมันและกลมกล่อม",
},

thaiGreenTea:{
name:"ชาเขียวไทย",
desc:"ชาเขียวไทยหอมกรุ่น เสิร์ฟเย็นพร้อมนมข้นหวาน ให้รสชาติหวานละมุน",
},

thaiIcedCoffee:{
name:"กาแฟเย็นไทย",
desc:"กาแฟเย็นสไตล์ไทยรสหวานมัน เสิร์ฟพร้อมนมข้นหวาน",
},

thaiBlackCoffee:{
name:"กาแฟดำเย็นไทย",
desc:"กาแฟดำเย็นรสเข้ม สดชื่น เสิร์ฟพร้อมน้ำแข็งโดยไม่ใส่นม",
},

pinkMilk:{
name:"นมชมพู",
desc:"นมเย็นหวานผสมไซรัปศาลา ให้สีชมพูสดใสและรสชาติหอมหวาน",
},

singha:{
  name:"เบียร์สิงห์",
  desc:"เบียร์ลาเกอร์พรีเมียมของไทย รสชาติสดชื่น หอมมอลต์ และดื่มง่าย มีความกลมกล่อมลงตัว"
},

chang:{
  name:"เบียร์ช้าง",
  desc:"เบียร์ลาเกอร์ยอดนิยมของไทย รสชาติเข้มข้นเล็กน้อย มีความหวานนิด ๆ และดื่มง่ายสดชื่น"
},

},

fish:{
title:"เมนูปลา",
note:"มีจำหน่ายเฉพาะบางสาขา",

sweetChili:{
name:"ปลาทอดซอสพริกหวาน",
thai:"ปลาทอดซอสพริกหวาน",
desc:"ปลาทอดกรอบราดซอสพริกหวาน"
},

lime:{
name:"ปลานึ่งมะนาว",
thai:"ปลานึ่งมะนาว",
desc:"ปลานึ่งกับมะนาว กระเทียม และพริก"
},

sweetSour:{
name:"ปลาทอดเปรี้ยวหวาน",
thai:"ปลาทอดเปรี้ยวหวาน",
desc:"ปลาทอดเสิร์ฟพร้อมซอสเปรี้ยวหวาน"
},

garlic:{
name:"ปลาทอดกระเทียม",
thai:"ปลาทอดกระเทียม",
desc:"ปลาทอดกรอบโรยกระเทียม"
}
},

unavailable:"ขณะนี้ไม่มีจำหน่าย",

},


restaurants:{title:"ร้านอาหาร",

labels:{
opening:"เวลาเปิดทำการ:",
days:"จันทร์–อาทิตย์:",
address:"ที่อยู่:",
phone:"โทรศัพท์:"
},

restaurantNotice:{
title:"ประกาศสำคัญ:",
text:"ร้าน Rim Thanonh 3 ได้ปิดให้บริการถาวรแล้ว ร้านใหม่ของเรา Rim Thanonh 4 เปิดให้บริการแล้วและยินดีต้อนรับลูกค้าทุกท่าน โปรดทราบว่า Rim Thanonh Thai Tea & Snacks มีเมนูขนาดเล็กกว่า และสามารถสั่งได้เฉพาะเมนูที่ระบุว่าเปิดให้บริการในเมนูเท่านั้น"
}

},

booking:{
title:"จองโต๊ะ",
name:"ชื่อของคุณ",
email:"อีเมลของคุณ",
phone:"หมายเลขโทรศัพท์",
chooseRestaurant:"เลือกร้านอาหาร",
guests:"จำนวนแขก",
guestHint:"โปรดเลือกร้านอาหารเพื่อดูจำนวนแขกสูงสุด",
date:"เลือกวันที่",
time:"เลือกเวลา",
message:"ข้อความเพิ่มเติม (ไม่บังคับ)",
submit:"จองโต๊ะ"
},

takeaway:{
woltText:"สั่งอาหารได้ง่ายผ่าน",
foodoraText:"ค้นหาและสั่งอาหารจาก"
},

terms:{
nav:{
home:"หน้าแรก",
menu:"เมนู"
},

tagline:"อาหารไทยแท้จากเชฟชาวไทยแท้",

buttons:{
home:"กลับไปยังหน้าแรก",
menu:"ดูเมนู"
},

title:"ข้อกำหนดและเงื่อนไข",

text:`ข้อกำหนดและเงื่อนไขนี้ควบคุมการใช้งานเว็บไซต์ที่ดำเนินการโดย <strong>Rim Thanonh Thai Food</strong> ซึ่งมีที่ตั้งร้านดังต่อไปนี้: <strong>Rim Thanonh 1: Budapest, Dob u. 60, 1074; Rim Thanonh 2: Budapest, Akácfa u. 40, 1072; Rim Thanonh Thai Tea & Snacks: Budapest, Klauzál u. 35, 1072</strong> และมีผลบังคับใช้กับผู้เยี่ยมชม ผู้ใช้งาน และลูกค้าทุกคนที่เข้าถึงเว็บไซต์นี้

การเข้าถึงหรือใช้งานเว็บไซต์นี้ถือว่าท่านยอมรับและตกลงที่จะปฏิบัติตามข้อกำหนดและเงื่อนไขเหล่านี้ หากท่านไม่เห็นด้วยกับส่วนใดส่วนหนึ่งของข้อกำหนด โปรดงดเว้นจากการใช้เว็บไซต์และบริการของเว็บไซต์

เนื้อหาบนเว็บไซต์นี้ รวมถึงข้อความ รูปภาพ เมนู และองค์ประกอบอื่น ๆ จัดทำขึ้นเพื่อวัตถุประสงค์ในการให้ข้อมูลเท่านั้น

แม้ว่า Rim Thanonh Thai Food จะพยายามอย่างสมเหตุสมผลเพื่อให้ข้อมูลถูกต้องและเป็นปัจจุบัน ร้านอาหารขอสงวนสิทธิ์ในการเปลี่ยนแปลงเมนู ราคา เวลาเปิดทำการ และบริการต่าง ๆ ได้ทุกเมื่อโดยไม่ต้องแจ้งให้ทราบล่วงหน้า

ผู้ใช้สามารถใช้เว็บไซต์นี้เพื่อดูข้อมูลร้านอาหาร เรียกดูเมนู ทำการจองโต๊ะ หรือเข้าถึงแพลตฟอร์มจัดส่งอาหารภายนอก

การจองโต๊ะผ่านเว็บไซต์ถือเป็นเพียงคำขอ และจะสมบูรณ์เมื่อได้รับการยืนยันจากทางร้านแล้วเท่านั้น

เว็บไซต์อาจใช้บริการภายนอก เช่น <strong>Google Maps</strong> เพื่อแสดงตำแหน่งของร้านอาหาร ซึ่งอาจมีการส่งข้อมูลทางเทคนิค เช่น ที่อยู่ IP ของผู้ใช้ ไปยังผู้ให้บริการดังกล่าว

เว็บไซต์นี้จัดเก็บภาษาที่ผู้ใช้เลือกไว้ใน <strong>local storage</strong> ของเบราว์เซอร์ เพื่อจดจำภาษาที่ต้องการสำหรับการเข้าชมครั้งถัดไป ข้อมูลนี้ถูกเก็บไว้เฉพาะบนอุปกรณ์ของผู้ใช้เท่านั้น

เว็บไซต์อาจมีลิงก์ไปยังบริการจัดส่งอาหารภายนอก เช่น Wolt หรือ Foodora เพื่อความสะดวกของลูกค้า บริการเหล่านี้ดำเนินการโดยบุคคลที่สามและทางร้านไม่รับผิดชอบต่อการทำงานหรือข้อกำหนดของแพลตฟอร์มดังกล่าว

ข้อมูลส่วนบุคคลที่ส่งผ่านเว็บไซต์นี้ รวมถึงข้อมูลที่กรอกในแบบฟอร์มจองโต๊ะ จะถูกจัดการตามกฎระเบียบการคุ้มครองข้อมูลส่วนบุคคลของสหภาพยุโรป (GDPR) และกฎหมายคุ้มครองข้อมูลของประเทศฮังการี รายละเอียดเพิ่มเติมสามารถดูได้ในนโยบายความเป็นส่วนตัวของเว็บไซต์

ข้อกำหนดและเงื่อนไขนี้อยู่ภายใต้กฎหมายของประเทศฮังการี และข้อพิพาทใด ๆ ที่เกิดจากการใช้เว็บไซต์นี้จะอยู่ภายใต้เขตอำนาจศาลของศาลฮังการีที่เกี่ยวข้อง

เว็บไซต์นี้อาจแสดงรีวิวจากแพลตฟอร์มภายนอก เช่น Google Reviews ซึ่งอาจถูกฝังผ่านบริการของบุคคลที่สาม (เช่น Elfsight) โดยบริการเหล่านี้ทำงานแยกจากเว็บไซต์และอาจมีการเก็บข้อมูลตามนโยบายของตนเอง

รูปภาพสินค้าบางรายการบนเว็บไซต์นี้ใช้เพื่อการแสดงตัวอย่างเท่านั้น และอาจแตกต่างจากสินค้าจริง เครื่องหมายการค้าและชื่อแบรนด์ทั้งหมด (เช่น Chang, Singha) เป็นทรัพย์สินของเจ้าของที่เกี่ยวข้อง

หากมีคำถามเกี่ยวกับข้อกำหนดเหล่านี้ กรุณาติดต่อ <strong>Rim Thanonh Thai Food</strong> ที่ <strong>info@rimthanonh.hu</strong> หรือ <strong>+36 20 536 5163</strong>.`

},

privacy:{
nav:{
home:"หน้าแรก",
menu:"เมนู"
},

tagline:"อาหารไทยแท้จากเชฟชาวไทยแท้",

buttons:{
home:"กลับไปหน้าแรก",
menu:"ดูเมนู"
},

title:"นโยบายความเป็นส่วนตัว",

text:`<strong>อัปเดตล่าสุด:</strong> 2026<br><br>

นโยบายความเป็นส่วนตัวนี้อธิบายวิธีที่ <strong>Rim Thanonh Thai Food</strong> รวบรวม ใช้ และปกป้องข้อมูลส่วนบุคคลของผู้เยี่ยมชมเว็บไซต์

นโยบายนี้ใช้กับผู้ใช้เว็บไซต์ที่เกี่ยวข้องกับร้านอาหารดังต่อไปนี้:

<strong>
Rim Thanonh 1 – Budapest, Dob u. 60, 1074<br>
Rim Thanonh 2 – Budapest, Akácfa u. 40, 1072<br>
Rim Thanonh Thai Tea & Snacks – Budapest, Klauzál u. 35, 1072
</strong>

<br><br>

<strong>1. ข้อมูลที่เราเก็บรวบรวม</strong><br><br>

เมื่อผู้ใช้กรอกแบบฟอร์มจองโต๊ะ อาจมีการเก็บข้อมูลดังต่อไปนี้:<br>
• ชื่อ<br>
• หมายเลขโทรศัพท์<br>
• อีเมล<br>
• รายละเอียดการจอง เช่น จำนวนแขก วันที่ และเวลา<br>
• ข้อความเพิ่มเติม (ถ้ามี)<br><br>

<strong>2. วัตถุประสงค์ของการใช้ข้อมูล</strong><br><br>

ข้อมูลที่ให้ไว้จะถูกใช้เพื่อ:<br>
• จัดการคำขอจองโต๊ะ<br>
• ติดต่อผู้ใช้เกี่ยวกับการจอง<br>
• ยืนยันหรือปรับเปลี่ยนรายละเอียดการจอง<br><br>

<strong>3. การจองโต๊ะ</strong><br><br>

การจองผ่านเว็บไซต์ถือเป็นคำขอจอง และจะสมบูรณ์เมื่อได้รับการยืนยันจากร้านอาหารแล้วเท่านั้น<br><br>

<strong>4. บริการจากบุคคลที่สาม</strong><br><br>

เว็บไซต์นี้อาจมีการฝังบริการจากบุคคลที่สาม เช่น <strong>Google Maps</strong> และระบบรีวิวจากภายนอก (เช่น Google Reviews ผ่านผู้ให้บริการอย่าง Elfsight) เพื่อเพิ่มประสบการณ์ของผู้ใช้งาน<br><br>

เมื่อมีการใช้งานบริการเหล่านี้ อาจมีการส่งข้อมูลทางเทคนิค เช่น IP address ข้อมูลเบราว์เซอร์ และข้อมูลอุปกรณ์ ไปยังผู้ให้บริการนั้น ๆ<br><br>

บริการเหล่านี้มีนโยบายความเป็นส่วนตัวของตนเอง ซึ่ง Rim Thanonh Thai Food ไม่สามารถควบคุมการประมวลผลข้อมูลของบุคคลที่สามได้<br><br>

<strong>5. การบันทึกภาษาที่เลือก</strong><br><br>

เว็บไซต์จะบันทึกภาษาที่ผู้ใช้เลือกไว้ใน <strong>localStorage</strong> ของเบราว์เซอร์เพื่อใช้ในการเข้าชมครั้งถัดไป<br><br>

<strong>6. แพลตฟอร์มภายนอก</strong><br><br>

เว็บไซต์อาจมีลิงก์ไปยังแพลตฟอร์มจัดส่งอาหาร เช่น <strong>Wolt</strong> หรือ <strong>Foodora</strong> ซึ่งดำเนินการโดยอิสระจากร้านอาหาร<br><br>

<strong>7. ความปลอดภัยของข้อมูล</strong><br><br>

ทางร้านมีมาตรการที่เหมาะสมในการปกป้องข้อมูลจากการเข้าถึงโดยไม่ได้รับอนุญาต<br><br>

<strong>8. สิทธิของผู้ใช้</strong><br><br>

ตามกฎหมาย GDPR ผู้ใช้มีสิทธิ:<br>
• เข้าถึงข้อมูลของตนเอง<br>
• ขอแก้ไขข้อมูล<br>
• ขอให้ลบข้อมูล<br>
• คัดค้านการประมวลผลข้อมูล<br><br>

<strong>9. การเปลี่ยนแปลงนโยบาย</strong><br><br>

ร้านอาจปรับปรุงนโยบายนี้เป็นระยะ<br><br>

<strong>10. ติดต่อเรา</strong><br><br>

หากมีคำถามเกี่ยวกับนโยบายนี้ กรุณาติดต่อ:<br><br>

<strong>
Rim Thanonh Thai Food<br>
Email: info@rimthanonh.hu<br>
Phone: +36 20 536 5163
</strong>`
},

alerts: {
  reservationSent: "คำขอจองโต๊ะของคุณถูกส่งแล้ว!\n\nโปรดตรวจสอบอีเมลของคุณเพื่อดูการยืนยันหรือข้อมูลเพิ่มเติม"
},

footer:{
title:"Rim Thanonh Thai Food",
subtitle:"อาหารไทยแท้จากเชฟไทย",
locations:"สาขา",
hours:"เวลาเปิดทำการ",
contact:"ติดต่อ",
terms:"ข้อกำหนดและเงื่อนไข",
copyright:"© 2026 Rim Thanonh Thai Food"
},

legal:{
privacyPolicy:"นโยบายความเป็นส่วนตัว",
privacyConsent:"ฉันได้อ่านและยอมรับ <a href='privacy.html' target='_blank'>นโยบายความเป็นส่วนตัว</a>"
}

},



};



/* ================================
   LANGUAGE ENGINE
================================ */

function setLanguage(lang){

document.documentElement.lang=lang;
localStorage.setItem("language",lang);

/* normal text */
document.querySelectorAll("[data-i18n]").forEach(el=>{
const keys=el.dataset.i18n.split(".");
let text=translations[lang];
keys.forEach(k=>text=text?.[k]);
if(text) el.innerHTML = text;
});

/* placeholders */
document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
const keys=el.dataset.i18nPlaceholder.split(".");
let text=translations[lang];
keys.forEach(k=>text=text?.[k]);
if(text) el.placeholder=text;
});

/* active button */
document.querySelectorAll(".languagebutton").forEach(btn=>{
btn.style.fontWeight=
btn.dataset.lang===lang?"700":"400";
});
}

document.querySelectorAll(".languagebutton")
.forEach(btn=>{
btn.addEventListener("click",()=>{
setLanguage(btn.dataset.lang);
});
});

setLanguage(localStorage.getItem("language")||"hu");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        header.classList.add("show");
    } else {
        header.classList.remove("show");
    }

});

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

const aboutSection = document.querySelector("#aboutus");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aboutSection.classList.add("about-visible");
        }
    });
}, {
    threshold: 0.3
});

if (aboutSection) observer.observe(aboutSection);

const menuSection = document.querySelector("#menusection");

if (menuSection) {

const menuObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            menuSection.classList.add("menu-visible");
        }
    });
}, {
    threshold: 0.35
});

menuObserver.observe(menuSection);

}

const restaurantsSection = document.querySelector("#restaurants");

if (restaurantsSection) {
    const restaurantsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("restaurants-visible");
            }
        });
    }, { threshold: 0.25 });

    restaurantsObserver.observe(restaurantsSection);
}

const takeawaySection = document.querySelector("#takeaway");

if (takeawaySection) {
    const takeawayObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("takeaway-visible");
            }
        });
    }, {
        threshold: 0.3
    });

    takeawayObserver.observe(takeawaySection);
}

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    console.log("🚀 Form submit triggered");

    try {
      const formData = Object.fromEntries(new FormData(e.target));

      console.log("📦 Data:", formData);

      const res = await fetch("/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      console.log("🌐 Response:", res);

      if (!res.ok) {
        const text = await res.text();
        console.error("❌ Server error:", text);
        alert("Error: " + text);
        return;
      }

      // ✅ SUCCESS
      const lang = localStorage.getItem("language") || "hu";
      alert(translations[lang].alerts.reservationSent);

      // ✅ RESET FORM AFTER SUCCESS
      bookingForm.reset();

    } catch (err) {
      console.error("🔥 FETCH FAILED:", err);
      alert("Network error. Please try again.");
    }
  });
}

/* ================================
   PREVENT PAST TIMES TODAY
================================ */
const dateInput = document.getElementById("bookingDate");

function setMinDate() {
  const today = new Date();

  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");

  dateInput.min = `${yyyy}-${mm}-${dd}`;
}

if (dateInput) setMinDate();


/* ================================
   BLOCK PAST TIMES
================================ */

const timeInput = document.getElementById("bookingTime");

function updateTimeLimits() {

  if (!dateInput || !timeInput) return;
  if (!dateInput.value) return;

  const now = new Date();
  const todayStr = now.toISOString().split("T")[0];

  let minTime = "11:00";

  if (dateInput.value === todayStr) {

    let hours = now.getHours();
    let minutes = now.getMinutes();

    // round UP to next 15 min slot
    minutes = Math.ceil(minutes / 15) * 15;

    if (minutes === 60) {
      hours++;
      minutes = 0;
    }

    const hh = String(hours).padStart(2, "0");
    const mm = String(minutes).padStart(2, "0");

    const currentTime = `${hh}:${mm}`;

    if (currentTime > "11:00") {
      minTime = currentTime;
    }
  }

  timeInput.min = minTime;

  // auto-correct invalid selected time
  if (timeInput.value && timeInput.value < minTime) {
    timeInput.value = minTime;
  }
}

if (dateInput) {
  dateInput.addEventListener("change", updateTimeLimits);
}

document.querySelectorAll(".input-icon").forEach(wrapper => {
  const input = wrapper.querySelector("input");
  wrapper.addEventListener("click", () => input.showPicker?.());
});

document.querySelectorAll('.footer-logo').forEach(logo => {
  logo.addEventListener('click', (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

/* ================================
   RESPONSIVE HEADER DROPDOWNS
================================ */

const menuToggle = document.getElementById("menuToggle");
const langToggle = document.getElementById("langToggle");

const mobileNav = document.getElementById("mobileNav");
const mobileLang = document.getElementById("mobileLang");

function closeAllDropdowns(){
  mobileNav.classList.remove("dropdown-open");
  mobileLang.classList.remove("dropdown-open");
}

menuToggle?.addEventListener("click", () => {

  const isOpen = mobileNav.classList.contains("dropdown-open");

  closeAllDropdowns();

  if(!isOpen){
    mobileNav.classList.add("dropdown-open");
  }
});

langToggle?.addEventListener("click", () => {

  const isOpen = mobileLang.classList.contains("dropdown-open");

  closeAllDropdowns();

  if(!isOpen){
    mobileLang.classList.add("dropdown-open");
  }
});

/* close if clicking outside */
document.addEventListener("click", (e) => {

  if(
    !e.target.closest(".nav-wrapper") &&
    !e.target.closest(".lang-wrapper")
  ){
    closeAllDropdowns();
  }

});

/* ================================
   DYNAMIC GUEST LIMIT BY RESTAURANT
================================ */

const restaurantSelect = document.getElementById("restaurantSelect");
const guestInput = document.getElementById("guestInput");

// capacity per restaurant
const restaurantLimits = {
  "1": 14, // Rim Thanonh 1
  "2": 16, // Rim Thanonh 2
  "3": 10  // Rim Thanonh 3 (example)
};

function updateGuestLimit() {

  const selected = restaurantSelect.value;
  const maxGuests = restaurantLimits[selected];

  if (!maxGuests) return;

  // update max attribute
  guestInput.max = maxGuests;

  // auto-correct if current value too large
  if (guestInput.value > maxGuests) {
    guestInput.value = maxGuests;
  }

  // optional: update placeholder hint
  guestInput.placeholder = `Number of Guests (max ${maxGuests})`;
}

if (restaurantSelect && guestInput) {
  restaurantSelect.addEventListener("change", updateGuestLimit);
}

const guestHint = document.getElementById("guestHint");




/* ================================
   MENU PAGE HERO ANIMATION
================================ */
const menuHero = document.querySelector("#menu-hero");

if(menuHero){
  window.addEventListener("load", () => {
    menuHero.classList.add("menu-hero-visible");
  });
}

/* ================================
   CLOSE MOBILE DROPDOWNS ON DESKTOP
================================ */

function handleResize() {

  if (window.innerWidth > 1200) {

    mobileNav.classList.remove("dropdown-open");
    mobileLang.classList.remove("dropdown-open");

  }

}

window.addEventListener("resize", handleResize);
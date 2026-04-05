
export const NAV_LINKS = [
  { label: "Home",         href: "#"        },
  { label: "Menu",         href: "#menu"    },
  { label: "About",        href: "#about"   },
  { label: "Gallery",      href: "#gallery" },
];

export const HERO = {
  eyebrow:    "Est. 2008 · Fine Dining Experience",
  heading:    ["Where Every ", "Meal", "\nTells a Story"],
  subheading: "Crafted with passion, served with elegance. Discover seasonal menus inspired by the finest local ingredients.",
  ctaPrimary: { label: "Reserve a Table", href: "#reserve" },
  ctaOutline: { label: "View Our Menu",   href: "#menu"    },
  bgImage:    "./photo-1414235077428-338989a2e8c0.jpeg",
};

export const ABOUT = {
  label:    "Our Story",
  heading:  ["Passion on\nEvery ", "Plate"],
  body: [
    "Founded in the heart of the city, Ember and Oak was born from a single belief that great food is the language of connection. Our chefs source only the finest seasonal ingredients from local farms and artisan producers.",
    "Each dish is a carefully composed experience, balancing bold flavours with delicate technique. From the first bite to the last, every visit is designed to be unforgettable.",
  ],
  stats: [
    { value: "16+",    label: "Years of Service"  },
    { value: "42",     label: "Signature Dishes"  },
    { value: "3 Star", label: "Michelin Stars"    },
  ],
  image: "./african-american-female-chef-having-600nw-2150289105.jpg",
  imageAlt: "Chef at work",
};

export const MENU_ITEMS = [
  {
    id: 1,
    tag:   "Starter",
    name:  "Heirloom Tomato Salad",
    desc:  "Vine-ripened heirloom tomatoes, buffalo mozzarella, fresh basil oil, and aged balsamic reduction.",
    price: "$18",
    image: "./images (3).jpeg",
    alt:   "Fresh Salad",
  },
  {
    id: 2,
    tag:   "Main Course",
    name:  "Oak-Grilled Ribeye",
    desc:  "28-day dry-aged prime ribeye, truffle butter, roasted bone marrow, and seasonal greens.",
    price: "$68",
    image: "./1382539247827.webp",
    alt:   "Grilled Steak",
  },
  {
    id: 3,
    tag:   "Main Course",
    name:  "Wood-Fired Margherita",
    desc:  "San Marzano tomatoes, fresh fior di latte, wild basil, and extra virgin olive oil on a 72-hour dough.",
    price: "$28",
    image: "./images (4).jpeg",
    alt:   "Pizza",
  },
  {
    id: 4,
    tag:   "Brunch",
    name:  "Ricotta Pancakes",
    desc:  "Fluffy ricotta pancakes layered with fresh berries, whipped cream, and warm maple syrup.",
    price: "$22",
    image: "./images (5).jpeg",
    alt:   "Pancakes",
  },
  {
    id: 5,
    tag:   "Casual",
    name:  "Ember Smash Burger",
    desc:  "Double smash patty, aged cheddar, house pickles, ember aioli, and a toasted brioche bun.",
    price: "$24",
    image: "./images (6).jpeg",
    alt:   "Burger",
  },
  {
    id: 6,
    tag:   "Dessert",
    name:  "Valrhona Chocolate Fondant",
    desc:  "Warm dark chocolate fondant, salted caramel core, vanilla bean ice cream, and gold dust.",
    price: "$16",
    image: "./images (7).jpeg",
    alt:   "Dessert",
  },
];

export const EXPERIENCE = {
  label:   "The Ember and Oak Experience",
  heading: ["More Than a Meal,\nIt is a ", "Memory"],
  body:    "From intimate dinners to grand celebrations, our space transforms every occasion into something truly extraordinary. Let us take care of everything.",
  cta:     { label: "Plan Your Evening", href: "#reserve" },
  bgImage: "./photo-1559339352-11d035aa65de.jpeg",
};

export const GALLERY_IMAGES = [
  { src: "./InteriorDesign_March2024_Brave-New-World-11-1024x768.jpg", alt: "Restaurant interior", span: 2 },
  { src: "./chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg",       alt: "Food dish",          span: 1 },
  { src: "./images (8).jpeg",                                           alt: "Food close-up",      span: 1 },
  { src: "./MS_sunsetroom.jpg",                                         alt: "Fine dining",        span: 1 },
  { src: "./retro-cocktails-b12b00d.jpg",                               alt: "Cocktails",          span: 2 },
  { src: "./chef-cooking-flambe-stockcake.jpg",                         alt: "Chef cooking",       span: 1 },
  { src: "./food-plating-ideas-scaled.jpeg",                            alt: "Plating",            span: 1 },
  { src: "./images (9).jpeg",                                           alt: "Breakfast",          span: 1 },
];

export const CONTACT = {
  phone:   "+234 706 774 4429",
  email:   "info@emberandoak.com",
  hours:   "Mon to Sun, 9am to 10pm",
  address: "14, Orchid road, Lagos.",
};

export const GUEST_OPTIONS = [
  "1 Guest",
  "2 Guests",
  "3 Guests",
  "4 Guests",
  "5 to 7 Guests",
  "8 or more Guests",
];

export const FOOTER_LINKS = {
  navigate: [
    { label: "Home",         href: "#"        },
    { label: "Menu",         href: "#menu"    },
    { label: "About Us",     href: "#about"   },
    { label: "Gallery",      href: "#gallery" },
    { label: "Reservations", href: "#reserve" },
  ],
  hours: [
    { label: "Mon to Fri: 12pm to 11pm"  },
    { label: "Saturday: 11am to 11pm"    },
    { label: "Sunday: 11am to 10pm"      },
    { label: "Private Events: 24 hours"  },
  ],
  social: [
    { label: "Instagram"  },
    { label: "Facebook"   },
    { label: "TripAdvisor"},
    { label: "OpenTable"  },
  ],
};

export function handleAnchorClick(e) {
  const href = e.currentTarget.getAttribute("href");
  if (!href || !href.startsWith("#")) return;
  const target = document.querySelector(href);
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  }
}

export function validateReservation(formData) {
  const errors = [];
  if (!formData.firstName?.trim())  errors.push("First name is required.");
  if (!formData.lastName?.trim())   errors.push("Last name is required.");
  if (!formData.email?.trim())      errors.push("Email address is required.");
  else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.push("Enter a valid email address.");
  if (!formData.phone?.trim())      errors.push("Phone number is required.");
  if (!formData.date)               errors.push("Please select a date.");
  if (!formData.time)               errors.push("Please select a time.");
  if (!formData.guests)             errors.push("Please select the number of guests.");
  return { valid: errors.length === 0, errors };
}

export function initialFormState() {
  return {
    firstName: "",
    lastName:  "",
    email:     "",
    phone:     "",
    date:      "",
    time:      "",
    guests:    "",
    requests:  "",
  };
}

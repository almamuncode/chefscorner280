export const site = {
  name: "Chef's Corner",
  tagline: "Lunch – Dinner – Catering",
  phone: "570-569-2591",
  tel: "tel:+15705692591",
  email: "chefscorneronmain@gmail.com",
  address: "320 RT 315 HWY, STE #280",
  city: "Pittston, PA 18640",
  landmark: "Pittston Crossings, next to Wine & Spirits",
  directionsNote: "Around the corner on the corner!",
  facebook: "https://www.facebook.com/ChefsCorneronMain/",
  doordash: "https://www.doordash.com/store/24952489/",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=320+Route+315+Suite+280+Pittston+PA+18640",
  map: "https://maps.google.com/maps?q=320+Route+315+Suite+280+Pittston+PA+18640&output=embed",
  timezone: "America/New_York",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://chefscorneronmain.com",
  hours: [
    { days: "Monday – Friday", label: "10:30 AM – 8:00 PM" },
    { days: "Saturday", label: "11:00 AM – 8:00 PM" },
    { days: "Sunday", label: "11:00 AM – 7:00 PM" },
  ],
  weeklyHours: [
    { day: 0, open: 660, close: 1140, label: "11:00 AM – 7:00 PM" },
    ...Array.from({ length: 5 }, (_, i) => ({
      day: i + 1,
      open: 630,
      close: 1200,
      label: "10:30 AM – 8:00 PM",
    })),
    { day: 6, open: 660, close: 1200, label: "11:00 AM – 8:00 PM" },
  ],
  disclaimer:
    "*Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions.",
};

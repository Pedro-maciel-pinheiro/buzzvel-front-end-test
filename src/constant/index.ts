import icon_1 from "@/assets/icon/icon-1.png";
import icon_2 from "@/assets/icon/icon-2.png";
import icon_3 from "@/assets/icon/icon-3.png";
import icon_4 from "@/assets/icon/icon-4.png";
import icon_5 from "@/assets/icon/icon-5.png";
import heart from "@/assets/icon/heart-circle-sharp.png";
import diamond from "@/assets/icon/diamond.png";
import studyhead from "@/assets/icon/Icon.png";
import slider_1 from "@/assets/Col.png";
import {
  companyIconsProps,
  NavBarMenuProps,
  NumberOfUsersProps,
  UserCommentProps,
} from "@/types";

// icons for hero page

export const company_icons: companyIconsProps[] = [
  {
    name: "one",
    href: "#",
    icon: icon_1,
  },
  {
    name: "two",
    href: "#",
    icon: icon_2,
  },
  {
    name: "three",
    href: "#",
    icon: icon_3,
  },
  {
    name: "four",
    href: "#",
    icon: icon_4,
  },
  {
    name: "five",
    href: "#",
    icon: icon_5,
  },
];

// mid section text
export const mid_section_text = [
  {
    text: "Est et in pharetra magna adipiscing ornare aliquam.",
  },
  {
    text: "Tellus arcu sed consequat ac velit ut eu blandit.",
  },
  {
    text: "Ullamcorper ornare in et egestas dolor orci.",
  },
] as const;

export const number_of_users: NumberOfUsersProps[] = [
  {
    image: heart,
    number: "195",
    title: "user countries",
  },
  {
    image: diamond,
    number: "1M",
    title: "valued teachers",
  },
  {
    image: studyhead,
    number: "17M",
    title: "happy students",
  },
];

// slider information

export const slider_data = [
  {
    text: "Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.",
    subtitle: "Marie Poirot, Big",
    image: slider_1,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio praesentium, magnam voluptatum eos possimus voluptates sequi delectus aut, a saepe esse quam. Minima, quae expedita voluptate odio exercitationem facilis libero!",
    subtitle: "Marie Poirot, Bapp",
    image: slider_1,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio praesentium, magnam voluptatum eos possimus voluptates sequi delectus aut, a saepe esse quam. Minima, quae expedita voluptate odio exercitationem facilis libero!.",
    subtitle: "Marie Poirot, app",
    image: slider_1,
  },
];

// users comments

export const comments: UserCommentProps[] = [
  {
    name: "Elena García",
    career: "Spanish Language Teacher",
    comment:
      "Learning here has truly transformed my perspective. The teachers are incredible, and the classes are engaging. I’ve grown so much both personally and academically through this platform.",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Omar Hussein",
    career: "Computer Science Student",
    comment:
      "I’ve connected with people from around the world, gained skills in my field, and received support from mentors who care. This school has been a fantastic experience overall.",
    imageUrl: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Chloe Martin",
    career: "English Teacher",
    comment:
      "Teaching online has been incredibly rewarding. The students are motivated, the platform is smooth to use, and I love being part of such a diverse international learning environment.",
    imageUrl: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Takumi Watanabe",
    career: "International Business Student",
    comment:
      "The curriculum is modern and well-designed. I enjoy collaborating with students from different countries and backgrounds. It’s the perfect mix of flexibility, support, and global interaction.",
    imageUrl: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

export const navbar_menu: NavBarMenuProps[] = [
  {
    name: "Products",
    href: "#",
  },
  {
    name: "Solutions",
    href: "#",
  },
  {
    name: "Pricing",
    href: "#",
  },
  {
    name: "Resources",
    href: "#",
    options: [
      { name: "Blog", href: "#" },
      { name: "Webinars", href: "#" },
      { name: "Case Studies", href: "#" },
    ],
  },
];

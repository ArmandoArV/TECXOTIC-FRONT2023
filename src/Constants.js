import BlueHead from "./Images/Fishes/blue_headed.jpg";
import BlueTang from "./Images/Fishes/blue_tang.jpg";
import Dusky from "./Images/Fishes/dusky_damselfish.jpg";
import FourEye from "./Images/Fishes/four_eye_butterflyfish.jpg"
import French from "./Images/Fishes/french_angelfish.jpg";
import Goliath from "./Images/Fishes/goliath_grouper.jpg";
import QueenParrot from "./Images/Fishes/queen_parrotfish.jpg";
import RockBeauty from "./Images/Fishes/rock_beauty.jpg";
import SargentMajor from "./Images/Fishes/sargent_major.jpg";
import YellowTail from "./Images/Fishes/yellowtail_snapper.jpg";

export const socket_address = "ws://192.168.5.1:55000"
export const flask_address = "http://192.168.5.1:8080"


// EN LAS CÁMARAS SOLO CAMBIEN EL IMAGE Y YA NO LE MUEVAN AL ID
export const arrayOfCameras = [
    {
        image: `${flask_address}/video1`,
        idImg: "Main1",
      },
      {
        image: `${flask_address}/video2`,
        idImg: "Main2",
      }
];


export const arrayOfFishes = [
    {
        common_name: "Blue Headed Wrasse",
        scientific_name: "Thalassoma bifasciatum",
        image: "../../Images/Fishes/blue_headed.jpg"
    },
    {
        common_name: "Blue Tang",
        scientific_name: "Acanthurus coeruleus",
        image: "../../Images/Fishes/blue_tang.jpg",
    },
    {
        common_name: "Dusky Damselfish",
        scientific_name: "Stegastes adustus",
        image: "../../Images/Fishes/dusky_damselfish.jpg",
    },
    {
        common_name: "Four Eye Butterflyfish",
        scientific_name: "Chaetodon capistratus",
        image: "../../Images/Fishes/four_eye_butterflyfish.jpg",
    },
    {
        common_name: "French Angelfish",
        scientific_name: "Pomacanthus paru",
        image: "../../Images/Fishes/french_angelfish.jpg",
    },
    {
        common_name: "Goliath Grouper",
        scientific_name: "Epinephus itajara",
        image: "../../Images/Fishes/goliath_grouper.jpg",
    },
    {
        common_name: "Queen Parrotfish",
        scientific_name: "Scarus vetula",
        image: "../../Images/Fishes/queen_parrotfish.jpg",
    },
    {
        common_name: "Rock Beauty",
        scientific_name: "Holacanthus tricolor",
        image: "../../Images/Fishes/rock_beauty.jpg",
    },
    {
        common_name: "Sargent Major",
        scientific_name: "Abudefduf saxitilis",
        image: "../../Images/Fishes/sargent_major.jpg",
    },
    {
        common_name: "Yellowtail Snapper",
        scientific_name: "Ocyurus chrysurus",
        image: "../../Images/Fishes/yellowtail_snapper.jpg",
    },
];

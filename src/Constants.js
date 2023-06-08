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
        name: "Blue Headed Wrasse",
        image: BlueHead,
        id: "BlueHead",
    },
    {
        name: "Blue Tang",
        image: BlueTang,
        id: "BlueTang",
    },
    {
        name: "Dusky Damselfish",
        image: Dusky,
        id: "Dusky",
    },
    {
        name: "Four Eye Butterflyfish",
        image: FourEye,
        id: "FourEye",
    },
    {
        name: "French Angelfish",
        image: French,
        id: "French",
    },
    {
        name: "Goliath Grouper",
        image: Goliath,
        id: "Goliath",
    },
    {
        name: "Queen Parrotfish",
        image: QueenParrot,
        id: "QueenParrot",
    },
    {
        name: "Rock Beauty",
        image: RockBeauty,
        id: "RockBeauty",
    },
    {
        name: "Sargent Major",
        image: SargentMajor,
        id: "SargentMajor",
    },
    {
        name: "Yellowtail Snapper",
        image: YellowTail,
        id: "YellowTail",
    },
];

export const socket_address = "ws://192.168.5.1:55000"
export const flask_address = "http://192.168.5.1:8080"


// EN LAS CÁMARAS SOLO CAMBIEN EL IMAGE Y YA NO LE MUEVAN AL ID
export const arrayOfCameras = [
      {
        pictureMessage: "Picture for camera 1",
        image: `${flask_address}/video1`,
        idImg: "Main1",
      },
      {
        pictureMessage: "Picture for camera 2",
        image: `${flask_address}/video1`,
        idImg: "Main1",
      }
];


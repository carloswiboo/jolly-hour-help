/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { MessengerChat } from "react-messenger-chat-plugin";
import Popup from "reactjs-popup";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import FacebookIcon from "@mui/icons-material/Facebook";
const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

export default function Home() {
  return (
    <>
      <main className={styles.containerPrincipal}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <Popup
                trigger={
                  <button className="btn btn-primary">
                    {" "}
                    <ContactSupportIcon /> Obtener Ayuda
                  </button>
                }
                position="bottom center"
              >
                <small>Correo:</small>
                <br />
                <a
                  href="mailto:ayuda@jollyhour.com.mx"
                  className="text-black fw-bold"
                >
                  ayuda@jollyhour.com.mx
                </a>
                <hr className="my-2" />
                <small>Facebook:</small>
                <br />
                <a
                  href="https://www.facebook.com/Jolly-Hour-109406864905472"
                  target="_blank"
                  rel="noreferrer"
                  className=" fw-bold"
                >
                  <FacebookIcon /> Facebook Jolly Hour
                </a>
                <hr className="my-2" />
              </Popup>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {/* Aqui ponemos la imagen */}
              <br />
              <br />
              <br />
              <Image
                className="pb-3"
                width={100}
                height={120}
                src="https://wiboo.com.mx/wp-content/uploads/2022/02/logoJollyHour.png"
                alt="Logo Jolly"
                priority
              />
              <br />
              <br />
              <h6>
                Te invitamos a conocer y usar <br /> nuestra App:
              </h6>
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="container" style={{ borderRadius: "15px" }}>
          <div className="row">
            <div className="col-12">
              <div
                style={{
                  position: "relative",
                  paddingBottom: "50%",
                  height: "0",
                  width: "100%",
                  paddingTop: "25px",
                }}
              >
                <iframe
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "0",
                    width: "100%",
                    height: "100%",
                  }}
                  src="https://www.youtube.com/embed/v8Huuu2AUsc"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <br />
              <hr />
              Si necesitas ayuda adicional puedes mandarnos un correo
              electrónico a: <br />{" "}
              <a
                href="mailto:ayuda@jollyhour.com.mx"
                className="text-white fw-bold"
              >
                ayuda@jollyhour.com.mx
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

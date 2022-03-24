import Image from "next/image";

export default function Footer() {
    return (
      <footer className="text-center text-lg-start bg-dark">
        <div className="container d-flex justify-content-center py-3">
          <button
            type="button"
            className="btn btn-lg btn-floating mx-2"
          >
           <a href="https://wa.link/ouufpu" target={"new"}>
            <Image
                src="/whats.png"
                alt="celular"
                width={45}
                height={45}
           /></a>
          </button>
          <button
            type="button"
            className="btn btn-lg btn-floating mx-2"
          >
            <a href="https://www.linkedin.com/in/mita-cervantes/" target={"new"}>
            <Image
                src="/linkedin.png"
                alt="linkedin"
                width={45}
                height={45}
           /></a>
          </button>
          <button
            type="button"
            className="btn btn-lg btn-floating mx-2"
          >
            <a href="mailto:mita_cervantes@hotmail.com" target={"new"}>
            <Image
                src="/email.png"
                alt="email"
                width={45}
                height={45}
           /></a>
          </button>
          <button
            type="button"
            className="btn btn-lg btn-floating mx-2"
          >
            <a href="https://www.instagram.com/mita_cervantes/?hl=es-la" target={"new"}>
            <Image
                src="/insta.png"
                alt="instagram"
                width={45}
                height={45}
           /></a>
          </button>
        </div>
        
        <div className="text-center text-white p-3">
            <p> MitaCervantes © 2022 Copyright</p>
        </div>
      </footer>
      
    );
}



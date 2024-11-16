import landingpage from "../assets/landing.png";
import appdownload from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-purple-600">Welcome to DadoStore</h1>
        <span className="text-xl">Chaos Products for everyone</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingpage} alt="" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">Your lovecraftian bit inside your house</span>
          <span>Never run out of spiced goblin eyes and lamenting echoes of the damned again</span>
          <img src={appdownload} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="HeroContainer">
      <div className="HeroText">
        <div>100 Thousand Songs, ad-free</div>
        <div>Over thousands podcast episodes</div>
      </div>
      {/* Using the PNG file from the public folder */}
      <img src="/vibratingHeadphone.png" alt="Vibrating Headphone" className="HeroImage" />
    </div>
  );
};

export default HeroSection;

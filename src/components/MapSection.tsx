const MapSection = () => {
  return (
    <section className="py-20 bg-yellow-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Find Me <span className="text-gradient">Here</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Located in Dir Upper Pakistan, but available for remote work worldwide. 
            Let's connect and create something amazing together.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
          <div className="relative w-full h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.571118691136!2d72.0378977!3d34.992405999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db81072cf50d2b%3A0x9b1e1e83395672a1!2sAbid%20Ali%20Web%20Developer!5e0!3m2!1sen!2s!4v1751023064169!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Location Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 rounded-xl bg-card border animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h4 className="font-semibold mb-2">Address</h4>
            <p className="text-muted-foreground">Dir Upper, Pakistan<br />Available Worldwide</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <h4 className="font-semibold mb-2">Timezone</h4>
            <p className="text-muted-foreground">Pakistan Standard Time<br />(UTC+5)</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <h4 className="font-semibold mb-2">Availability</h4>
            <p className="text-muted-foreground">sat - thu: 6AM - 9PM<br />Friday: By appointment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;

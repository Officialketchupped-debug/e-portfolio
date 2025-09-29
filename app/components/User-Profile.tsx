export default function UserProfile() {
    return (
    <div className="flex-1 max-w-7xl mx-auto px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl text-white mb-6">Jamesnel C. Chavez</h1>
            <p className="text-gray-400 text-sm">
              BSCS Student of Visayas State University | Tbh I don't have
              no idea what I'm doing lmao but I'm mediocrely ok at coding
              and stuff.
            </p>
          </div>
          
          <button 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-md transition-colors duration-300"
          >
            Let's connect →
          </button>
        </div>

        <div className="flex justify-center lg:justify-end">
            <img src="/profile.jpg" 
                 alt="Profile photo"
                 className="w-80 h-80 rounded-full object-cover"/>
        </div>
      </div>
    </div>
  );
}
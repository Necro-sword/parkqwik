import React from 'react'

const Home = () => {
  return (
    <div className=''>
      <div>
       <div className="p-3 bg-gray-100 min-h-screen">
      {/* Services Section */}
        <div className="bg-white p-4 rounded-2xl shadow-md mb-4">
         <h2 className="text-lg font-semibold mb-3">Services</h2>
         <div className="grid grid-cols-4 gap-4">
          {[
            { name: "Nearby Parking", icon: "📍" },
            { name: "EV Parking", icon: "🚗" },
            { name: "Car Wash", icon: "🚿" },
            { name: "Vehicle Insurance", icon: "📜" },
            { name: "Road Assistance", icon: "🚛" },
            { name: "Pay Challan", icon: "💳" },
            { name: "Toll Estimator", icon: "🛣️" },
            { name: "Valet Parking", icon: "🅿️" },
          ].map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-100 p-3 rounded-xl"
            >
              <span className="text-2xl">{service.icon}</span>
              <p className="text-xs text-center">{service.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FASTag Recharge Section */}
      <div className="bg-white p-4 rounded-2xl shadow-md">
        <h2 className="text-lg font-semibold mb-2">FASTag Recharge</h2>
        <p className="text-sm text-gray-600 mb-3">
          Get up to 100% cashback on the first 3 FASTag recharges.
        </p>
        <div className="flex items-center gap-2 mb-3">
          <input
            type="text"
            placeholder="Add vehicle or chassis number"
            className="flex-1 border p-2 rounded-lg text-sm"
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Recharge
          </button>
        </div>
        <p className="text-xs text-gray-500">Powered by NETC & Bharat BillPay</p>
       </div>
     </div>
      </div>
    </div>
  )
}

export default Home
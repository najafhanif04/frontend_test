import React from 'react';
import backgroundImage from '../../assets/students.png';
import userImage from '../../assets/user.png';

const UserProfile = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      {/* Background Image */}
      <div className="h-24 w-full">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile Image - overlapping */}
      <div className="flex justify-center -mt-10">
        <img
          src={userImage}
          alt="User"
          className="w-20 h-20 rounded-full border-4 border-white object-cover"
        />
      </div>

      {/* Profile Info */}
      <div className="text-center px-4 py-2">
        <h2 className="text-lg font-semibold text-black">Albert Flores</h2>
        <p className="text-sm text-black font-medium mt-1">
          Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
        </p>
        <p className="text-sm text-gray font-medium mt-2">Clinton, Maryland</p>
      </div>
    </div>
  );
};

export default UserProfile;

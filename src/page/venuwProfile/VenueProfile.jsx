import React from "react";
import { Navigate } from "../../Navigate";
import { FiEye, FiDownload } from "react-icons/fi";
import QRCode from "react-qr-code"; // optional if you want dynamic QR
import { Link } from "react-router-dom";
import EditIco from "../../components/icon/EditIco";
import CopyIco from "../../components/icon/CopyIco";
import ShareIco from "../../components/icon/ShareIco";

const VenueProfile = () => {
  const venueLink = "https://flonx-progressive-web-app.vercel.app/shiftDetails";
  const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(venueLink);
    alert("Link copied!");
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};
const handleShare = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Venue Order Link",
        text: "Check this venue",
        url: venueLink,
      });
    } catch (err) {
      console.error("Share failed:", err);
    }
  } else {
    // fallback (desktop browser)
    await navigator.clipboard.writeText(venueLink);
    alert("Sharing not supported. Link copied instead!");
  }
};
  const venue = {
    name: "Midnight Lounge",
    owner: "Daniel Roberts",
    email: "daniel@midnightlounge.com",
    contact: "+1 (512) 555-0199",
    location: "Austin, Texas, USA",
  };

  return (
    <div className="p-3 h-[87vh] overflow-auto">
      <Navigate title="Venue Profile" />
      <div className="flex items-center gap-4">
        <img
          src={"https://i.pravatar.cc/150?img=1"}
          alt="Venue Logo"
          className="w-20 h-20 object-cover rounded-lg"
        />
      </div>
      {/* Venue Details */}
      <div className="mt-6 border text-white border-[#2A2448] rounded-xl  space-y-3">
        <div className="border-b border-[#2A2448] p-3">
          <h1>Venue Details </h1>
        </div>

        <div className="grid p-3 grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-400">Venue Name</p>
            <p>{venue.name}</p>
          </div>
          <div>
            <p className="text-gray-400">Owner Name</p>
            <p>{venue.owner}</p>
          </div>
          <div>
            <p className="text-gray-400">Email</p>
            <p>{venue.email}</p>
          </div>
          <div>
            <p className="text-gray-400">Contact Number</p>
            <p>{venue.contact}</p>
          </div>
          <div className="col-span-2">
            <p className="text-gray-400">Location</p>
            <p>{venue.location}</p>
          </div>
        </div>
      </div>

      {/* QR Code Section */}
      <div className="mt-6 border border-[#2A2448] rounded-xl ">
        <div className="border-b border-[#2A2448] text-white p-3">
          <h1>Venue QR Code </h1>
        </div>
        <div className="p-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded">
              <QRCode value={venue.name} size={64} />
            </div>
            <div>
              <p className="font-semibold text-white">{venue.name}</p>
              <p className="text-gray-400 text-sm">
                Share this QR code so customers can quickly view your Venue
                profile and menu.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="bg-[#2A2448] p-3 rounded-lg hover:bg-[#3A2B5C]">
              <FiEye className="text-gray-300" />
            </button>
            <button className="bg-[#2A2448] p-3 rounded-lg hover:bg-[#3A2B5C]">
              <FiDownload className="text-gray-300" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 border border-[#2A2448] rounded-xl ">
        <div className="border-b border-[#2A2448] text-white p-3">
          <h1>Venue Order Manage Link </h1>
        </div>
        <div className="p-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="border border-[#2A2448] p-2 rounded">
              <EditIco />
            </div>
            <div>
              <p className="font-semibold text-white">{venue.name}</p>
              <p className="text-gray-400 text-sm">
                Copy the ordering link or Redirects you to your venue’s live
                order page
              </p>
            </div>
          </div>
        <div className="flex gap-2">
  <button
    onClick={handleCopy}
    className="border border-[#2A2448] bg-[#3D8BFF1A] p-3 rounded-lg hover:bg-[#3A2B5C]"
  >
    <CopyIco className="text-gray-300" />
  </button>

  <button
    onClick={handleShare}
    className="border border-[#2A2448] bg-[#822CE71A] p-3 rounded-lg hover:bg-[#3A2B5C]"
  >
    <ShareIco className="text-gray-300" />
  </button>
</div>
        </div>
      </div>
      {/* Update Details Button */}
      <div className="mt-6">
        <Link to={"/dashboard/UpdateVenueProfile"}>
          <button className="bg-gradient-to-tr w-[185px] from-[#822CE7] to-[#BB82FF] text-white shadow-md px-3 py-2 rounded-full">
            Update Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VenueProfile;

import Card from "./Card";
import image1 from "../assets/sky-dental.jpg";
import image2 from "../assets/res-pic (1).jpg";
import image3 from "../assets/res-pic (2).jpg";
import image4 from "../assets/res-pic (3).jpg";
import image5 from "../assets/res-pic (4).jpg";
import image6 from "../assets/res-pic (5).jpg";
import image7 from "../assets/res-pic (6).jpg";
import image8 from "../assets/res-pic (7).jpg";
import image9 from "../assets/gym.jpg";

const Categories = () => {
  return (
    <>
      <div>
        <div className="bg-gray-50 py-12">
          <div className="w-9/12 mx-auto">
            <div className="text-center mb-12">
              <p className="text-4xl font-bold text-gray-600 mb-3">
                Popular Places
              </p>
              <p className="text-gray-600">Discover most searched places</p>
            </div>
            <div className="">
              <div className="grid grid-cols-3 gap-6 mx-auto">
                {/* Card 1 */}
                <Card
                  image={image1}
                  locationName="Dr. Dentist Clinic"
                  address="Somewhere, CA"
                  tags="Clinic,Hospital,$$"
                />
                <Card
                  image={image2}
                  locationName="Restaurant"
                  address="San Francisco, CA"
                  tags="Restaurant,Food,$$"
                />
                <Card
                  image={image3}
                  locationName="Restaurant"
                  address="San Francisco, CA"
                  tags="Restaurant,Food,$$"
                />
                <Card
                  image={image4}
                  locationName="Restaurant"
                  address="San Francisco, CA"
                  tags="Restaurant,Food,$$"
                />
                <Card
                  image={image5}
                  locationName="Restaurant"
                  address="San Francisco, CA"
                  tags="Restaurant,Food,$$"
                />
                <Card
                  image={image6}
                  locationName="Restaurant"
                  address="San Francisco, CA"
                  tags="Restaurant,Food,$$"
                />
                <Card
                  image={image7}
                  locationName="Restaurant"
                  address="San Francisco, CA"
                  tags="Restaurant,Food,$$"
                />
                <Card
                  image={image8}
                  locationName="Restaurant"
                  address="San Francisco, CA"
                  tags="Restaurant,Food,$$"
                />
                <Card
                  image={image9}
                  locationName="Weightlifting"
                  address="Somewhere, CA"
                  tags="Gym,Cardio,Weights,$"
                />
              </div>
              <div className="mt-12 text-center">
                <button className="py-2.5 px-6 bg-white border border-gray-100 text-lg shadow hover:shadow-lg hover:text-gray-600">
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;

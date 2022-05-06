import { Place } from "@mui/icons-material";
import GradeIcon from "@mui/icons-material/Grade";
import StarHalfIcon from "@mui/icons-material/StarHalf";

const Card = ({ locationName, address, tags, image }) => {
  const randomInt = () => {
    let min = Math.ceil(0);
    let max = Math.floor(500);
    return Math.floor(Math.random() * (max - min) + min);
  };
  return (
    <>
      <div className="bg-white rounded-md shadow max-w-xl max-h-80 overflow-hidden">
        <div className="h-1/2">
          <img src={image} className="h-full w-full object-cover" alt="hero" />
        </div>
        <div className="px-6 py-4 space-y-2">
          {/* Stars */}
          <div className="flex items-center text-sm">
            <span className="text-amber-400">
              <GradeIcon />
            </span>
            <span className="text-amber-400">
              <GradeIcon />
            </span>
            <span className="text-amber-400">
              <GradeIcon />
            </span>
            <span className="text-amber-400">
              <GradeIcon />
            </span>
            <span className="text-amber-400">
              <StarHalfIcon />
            </span>
            <span className="ml-2 text-xs text-gray-600">
              {randomInt()} Reviews
            </span>
          </div>
          <p className="text-lg font-bold text-gray-600">{locationName}</p>
          <p className="text-sm text-gray-600">
            <span className="align-middle -ml-1 text-gray-500">
              <Place /> {address}
            </span>
          </p>
          {tags.split(",").map((tag, idx) => {
            return (
              <span
                key={idx}
                className="text-xs px-2 py-0.5 bg-amber-100 border-amber-200 border rounded-full text-amber-700"
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;

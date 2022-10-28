import { monthStringFormat, yearFormat } from "../commons/constants";
import prevIcon from "../assets/prev.png";
import nextIcon from "../assets/next.png";
import { HeaderProps } from "../commons/types";

const Header = ({ day, handlePrevClick, handleNextClick }: HeaderProps) => {
    return (
      <div className="header">
          <h3 className="month">{day.format(monthStringFormat)} {day.format(yearFormat)}</h3>
          <div className="nav">
        <span className="btn prev">
          <img src={prevIcon} alt="next weekdays" onClick={handlePrevClick} />
        </span>
              <span className="btn next">
          <img src={nextIcon} alt="prev weekdays" onClick={handleNextClick} />
        </span>
          </div>
      </div>);
};
export default Header;
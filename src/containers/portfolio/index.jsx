import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsClipboard } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import "./styles.scss";
import { useState } from "react";
const portfolioData = [
  {
    id: 2,
    name: "Ecommerce",
    image: ImageOne,
    link: "https://inquisitive-semifreddo-393191.netlify.app/",
  },
  {
    id: 3,
    name: "NumberGuessing Game App",
    image: ImageTwo,
    link: "https://musical-shortbread-6227d3.netlify.app/",
  },
  {
    id: 2,
    name: "To-Do List App",
    image: ImageThree,
    link: "https://coruscating-panda-9d4b7b.netlify.app/index2",
  },
  {
    id: 2,
    name: "Demo User Api",
    image: ImageFour,
    link: "https://cruidapi.netlify.app/",
  },
  {
    id: 3,
    name: "Shopping cart design",
    image: ImageFive,
    link: "https://magnificent-florentine-c47045.netlify.app/",
  },
];
const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];
const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);
  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }
  function handleHover(index) {
    setHoveredValue(index);
  }
  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");
  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);
  console.log(filteredItems);
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsClipboard size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
  <a href="/">
    <img alt="dummy data" src={item.image} />
  </a>
</div>
<div className="overlay">
  {index === hoveredValue && (
    <div>
      <p>{item.name}</p>
      {item.link ? (
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <button>Visit</button>
        </a>
      ) : (
        <button disabled>Link Unavailable</button>
      )}
    </div>
  )}
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
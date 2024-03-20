import React, { useRef } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Call({ numDivs }) {
  const carouselRef = useRef(null); // Reference to the carousel element

  const generateDivs = (count) => {
    const divs = [];
    for (let i = 0; i < count; i++) {
      divs.push(
        <Box key={i} bg="purple.500" h="100px" w="100px" m="2">
          {i + 1}
        </Box>
      );
    }
    return divs;
  };

  const renderCarousel = (count) => {
    const carouselDivs = [];
    const numCarouselItems = Math.ceil(count / 3); // Calculate the number of carousel items
    for (let i = 0; i < numCarouselItems; i++) {
      const startIndex = i * 3;
      const endIndex = Math.min(startIndex + 3, count);
      const carouselItems = generateDivs(count).slice(startIndex, endIndex);
      carouselDivs.push(
        <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
          <Flex justifyContent="center">
            {carouselItems}
          </Flex>
        </div>
      );
    }
    return carouselDivs;
  };

  const mainDiv = (
    <Box bg="red.500" h="50vh" w="40vw" m="2" />
  );

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Flex justifyContent="center">
        {mainDiv}
      </Flex>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" ref={carouselRef}>
        <div className="carousel-inner">
          {renderCarousel(numDivs)}
        </div>
        <button className="carousel-control-prev" type="button" onClick={handlePrevClick}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={handleNextClick}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Flex>
  );
}

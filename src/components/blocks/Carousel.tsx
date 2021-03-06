import React, { useState } from 'react';
import { Image, Box, Text, Button, Flex } from '@chakra-ui/react';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CarouselInterface {
	images: Array<string>;
}

function Carousel({ images }: CarouselInterface) {
	const [ index, setIndex ] = useState(0);

	const goLeft = () => {
		setIndex(Math.abs((index - 1) % images.length));
	};

	const goRight = () => {
		setIndex((index + 1) % images.length);
	};

	return (
		<Box maxW={[ 'sm', 'lg' ]} borderRadius="lg">
			<Image
				bg="secondary-light"
				p="2"
				m="auto"
				boxSize={[ 'sm', 'lg' ]}
				objectFit="cover"
				src={images[index]}
				alt={`carousel-${index}`}
				borderRadius="lg"
			/>
			{/* Arrows for carousel */}
			{images.length > 1 && (
				<Flex mt="1" justifyContent="space-between">
					{/* Left arrow */}
					<Button
						bg="InactiveBorder"
						color="secondary-dark"
						variant="outline"
						fontSize="2xl"
						onClick={goLeft}
						w="40%"
					>
						<FontAwesomeIcon icon={faArrowLeft} />
					</Button>

					{/* Index of current image */}
					<Text color="white" fontSize="2xl">
						{index + 1}/{images.length}
					</Text>

					{/* Right arrow */}
					<Button
						bg="InactiveBorder"
						color="secondary-dark"
						variant="outline"
						fontSize="2xl"
						onClick={goRight}
						w="40%"
					>
						<FontAwesomeIcon icon={faArrowRight} />
					</Button>
				</Flex>
			)}
		</Box>
	);
}

export default Carousel;

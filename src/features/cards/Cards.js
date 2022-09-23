import React, { useState } from 'react';
import { fetchCards } from './cardsSlice';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../cart/cartSlice';
import { TailSpin } from 'react-loading-icons'

const Cards = () => {
	const cards = useSelector((state) => state.cards.cards);
	const [loading, setLoading] = useState(false);

	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(fetchCards());
		setLoading(true)
	}, []);

	const handleAddToCart = (card) => {
		dispatch(addToCart(card));
	};

	return loading ? (
		<div className="all-cards-container">
			{cards.map((card) => (
				<div key={card.id} className="card">
					<div className="card-image">
						<img src={card.imgAll} alt="" />
					</div>
					<div className="all-cards-info">
						{' '}
						<Link to={`/cards/${card.id}`}>
							<div className="card-title">
								{card.name}
							</div>
						</Link>
						<div className='card-tags'>
							{card.tag2 ? (
								<div className="tag-wrapper">
									<img className="tag" src={`${card.tag1}.png`} />
									<img className="tag" src={`${card.tag2}.png`}/>
								</div>
							) : (
								<div className="tag-wrapper">
									<img className="tag" src={`${card.tag1}.png`}/>
								</div>
							)}
						</div>
					</div>
					<button onClick={() => handleAddToCart({productId: card.id, qty: 1})}> Add to Cart </button>
				</div>
			))}
		</div>
	) : (
		<div className="all-cards-container">
			<TailSpin stroke="#FF00B0" strokeWidth="3"/>
		</div>
	);
};

export default Cards;

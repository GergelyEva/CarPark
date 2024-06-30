
type FavoriteProps = {
    favoritedCars: string[];
    onToggleFavorite: (vin: string) => void; 
};

const Favorite = ({ favoritedCars, onToggleFavorite }: FavoriteProps) => {
    return (
        <div>
                {favoritedCars.map(vin => (
                        <button onClick={() => onToggleFavorite(vin)}>
                            {favoritedCars.includes(vin) ? 'Unfavorite' : 'Favorite'}
                        </button>
                ))}
        </div>
    );
};

export default Favorite;
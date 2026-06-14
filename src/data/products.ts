export type TimberOption = {
	label: string;
	price: number;
	availability: string;
};

export type Product = {
	id: string;
	range: 'Essential' | 'Ground' | 'Lift';
	name: string;
	image: string;
	options: Record<'ash' | 'whiteOak' | 'swarthout', TimberOption>;
};

const options = (ash: number, whiteOak: number, swarthout: number): Product['options'] => ({
	ash: { label: 'Ash', price: ash, availability: 'Made to order' },
	whiteOak: { label: 'White Oak', price: whiteOak, availability: 'Made to order' },
	swarthout: { label: 'Swarthout', price: swarthout, availability: 'Made to order' },
});

export const products: Product[] = [
	{ id: 'essential-dining-table', range: 'Essential', name: 'Essential Dining Table', image: '/images/products/essential-dining-table.png', options: options(14900, 16900, 18900) },
	{ id: 'essential-bench', range: 'Essential', name: 'Essential Bench', image: '/images/products/essential-bench.png', options: options(6200, 7200, 8400) },
	{ id: 'essential-sideboard', range: 'Essential', name: 'Essential Sideboard', image: '/images/products/essential-sideboard.png', options: options(13900, 16900, 19900) },
	{ id: 'ground-dining-table', range: 'Ground', name: 'Ground Dining Table', image: '/images/products/ground-dining-table.png', options: options(16900, 18900, 21900) },
	{ id: 'ground-coffee-table', range: 'Ground', name: 'Ground Coffee Table', image: '/images/products/ground-coffee-table.png', options: options(7900, 8900, 10900) },
	{ id: 'ground-console', range: 'Ground', name: 'Ground Console', image: '/images/products/ground-console.png', options: options(8900, 10900, 12900) },
	{ id: 'lift-sideboard', range: 'Lift', name: 'Lift Sideboard', image: '/images/products/lift-sideboard.png', options: options(21900, 24900, 28900) },
	{ id: 'lift-coffee-table', range: 'Lift', name: 'Lift Coffee Table', image: '/images/products/lift-coffee-table.png', options: options(6900, 7900, 9400) },
	{ id: 'lift-dining-table', range: 'Lift', name: 'Lift Dining Table', image: '/images/products/lift-dining-table.png', options: options(15900, 17900, 20900) },
];

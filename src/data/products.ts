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
	options: Record<'ash' | 'whiteOak', TimberOption>;
};

const options = (ash: number, whiteOak: number): Product['options'] => ({
	ash: { label: 'Ash', price: ash, availability: 'Made to order' },
	whiteOak: { label: 'White Oak', price: whiteOak, availability: 'Made to order' },
});

export const products: Product[] = [
	{ id: 'essential-dining-table', range: 'Essential', name: 'Essential Dining Table', image: '/images/products/essential-dining-table.png', options: options(14900, 16900) },
	{ id: 'essential-bench', range: 'Essential', name: 'Essential Bench', image: '/images/products/essential-bench.png', options: options(6200, 7200) },
	{ id: 'essential-coffee-table', range: 'Essential', name: 'Essential Coffee Table', image: '/images/products/ground-coffee-table.png', options: options(7900, 8900) },
	{ id: 'ground-dining-table', range: 'Ground', name: 'Ground Dining Table', image: '/images/products/ground-dining-table.png', options: options(16900, 18900) },
	{ id: 'ground-coffee-table', range: 'Ground', name: 'Ground Coffee Table', image: '/images/products/ground-coffee-table.png', options: options(7900, 8900) },
	{ id: 'lift-coffee-table', range: 'Lift', name: 'Lift Coffee Table', image: '/images/products/lift-coffee-table.png', options: options(6900, 7900) },
	{ id: 'lift-pedestal', range: 'Lift', name: 'Lift Pedestal', image: '/images/products/lift-sideboard.png', options: options(21900, 24900) },
];

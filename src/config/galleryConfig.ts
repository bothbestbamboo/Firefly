import type { GalleryConfig } from "@/types/galleryConfig";

// Gallery Configuration
export const galleryConfig: GalleryConfig = {
	// Albums list
	albums: [
		// Supported formats: jpg/png/webp/avif/gif
		// id: Unique identifier for the album (used for directory naming and URL path). E.g., id: "factory-tour" corresponds to public/gallery/factory-tour/
		// cover: Manually specify the cover image (optional). If not specified, the cover.* file in the directory will be used. If no cover.* exists, the first image will be used.
		// name: Album name
		// description: Album description
		// location: Location where photos were taken
		// date: Album date, format YYYY-MM-DD, used for sorting and display
		// tags: Album tags, used for categorization and filtering
		// password: Access password (optional)
		// passwordHint: Password hint (optional, requires password)
		// Remember to create the corresponding subdirectory in public/gallery/ and put images inside.
		{
			id: "factory-tour",
			name: "Factory Tour",
			description: "Take a look inside our advanced production lines, quality control labs, and massive warehouse facilities in China.",
			location: "China Factory",
			date: "2026-01-01",
			tags: ["Manufacturing", "Quality Control", "Warehouse"],
		},
		{
			id: "product-showcase",
			name: "Product Showcase",
			description: "High-resolution details of our premium strand-woven bamboo flooring, plywood, and outdoor decking.",
			location: "Showroom",
			date: "2026-02-01",
			tags: ["Strand Woven", "Bamboo Plywood", "Outdoor Decking"],
		},
		{
			id: "global-projects",
			name: "Global Projects & Exhibitions",
			description: "Meet our team at international building material exhibitions and explore our completed projects worldwide.",
			location: "Global",
			date: "2026-03-01",
			tags: ["Exhibition", "Commercial Projects", "Global Partners"],
		},
	],

	// Masonry minimum column width (px). Browser automatically calculates columns based on container width. Default 240.
	// Smaller value = more columns; larger value = fewer columns.
	columnWidth: 240,
};
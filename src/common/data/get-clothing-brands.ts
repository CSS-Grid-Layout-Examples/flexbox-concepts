/* interface */
interface IBrand {
  src: string;
  alt: string;
  title: string;
}

/* module */
function getClothingBrands(): IBrand[] {
  return [
    {src: "/clothing-brand-icons/fila.svg?updatedAt=1729594979920", alt: "Fila", title: "Fila"},
    {src: "/clothing-brand-icons/speedo.svg?updatedAt=1729594979969", alt: "Speedo", title: "Speedo"},
    {src: "/clothing-brand-icons/lacoste.svg?updatedAt=1729594979854", alt: "Lacoste", title: "Lacoste"},
    {src: "/clothing-brand-icons/nike.svg?updatedAt=1729594979773", alt: "Nike", title: "Nike"},
    {src: "/clothing-brand-icons/puma.svg?updatedAt=1729594979823", alt: "Puma", title: "Puma"},
    {src: "/clothing-brand-icons/diesel.svg?updatedAt=1729594979752", alt: "Diesel", title: "Diesel"},
    {src: "/clothing-brand-icons/basics.svg?updatedAt=1729594979848", alt: "Basics", title: "Basics"},
    {src: "/clothing-brand-icons/gucci.svg?updatedAt=1729594979732", alt: "Gucci", title: "Gucci"},
    {src: "/clothing-brand-icons/rei.svg?updatedAt=1729594979471", alt: "REI", title: "REI"},
    {src: "/clothing-brand-icons/stussy.svg?updatedAt=1729594979597", alt: "Stussy", title: "Stussy"}
  ];
}

/* exports */
export default getClothingBrands;

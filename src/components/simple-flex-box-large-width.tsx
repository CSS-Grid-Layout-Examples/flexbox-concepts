/* app imports */
import getClothingBrands from "@common/data/get-clothing-brands";

/* component */
function SimpleFlexBoxLargeWidth(): JSX.Element {
  /* env */
  const IMG_ROOT = import.meta.env.VITE_IMG_SRC;
  /* data */
  const brands = getClothingBrands();

  return (
    <>
      <section className="demo flexboxRow">
        <div className="container">
          <ul className="list-unstyled">
            {
              brands.slice(0, 8).map((item, index) => {
                const classNameStr: string | undefined = (index === 0 || index === 7) ? "big" : undefined;
                return (
                  <>
                    <li key={index} className={classNameStr}>
                      <div className="item">
                        <div className="image">
                          <img src={`${IMG_ROOT}${item.src}`} className="img-fluid" alt={item.alt} title={item.title}/>
                        </div>
                        <span className="text-center">{item.title}</span>
                      </div>
                    </li>
                  </>
                );
              })
            }
          </ul>
          <p className="text-center">
            Simple Flex Box Layout with Flex Row Wrap, with 2 items having a bigger width
          </p>
        </div>
      </section>
    </>
  );
}

/* exports */
export default SimpleFlexBoxLargeWidth;

/* app imports */
import getClothingBrands from "@common/data/get-clothing-brands";

/* component */
function SimpleFlexBoxGrow(): JSX.Element {
  /* env */
  const IMG_ROOT = import.meta.env.VITE_IMG_SRC;
  /* data */
  const brands = getClothingBrands();

  return (
    <>
      <section className="demo flexboxRow growBox">
        <div className="container">
          <ul className="list-unstyled">
            {
              brands.slice(0, 4).map((item, index) => {
                return (
                  <>
                    <li key={index}>
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
            Simple Flex Box Layout with Flex Row Wrap. It has the first and the third item in the list
            with a Flex Grow property.
          </p>
        </div>
      </section>
    </>
  );
}

/* exports */
export default SimpleFlexBoxGrow;

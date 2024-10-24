/* app imports */
import getClothingBrands from "@common/data/get-clothing-brands";

/* component */
function FlexBoxCentralizeElements(): JSX.Element {
  /* env */
  const IMG_ROOT = import.meta.env.VITE_IMG_SRC;
  /* data */
  const brands = getClothingBrands();

  return (
    <>
      <section className="demo flexBoxCentralize">
        <div className="container">
          <ul className="list-unstyled">
            {
              brands.map((item, index) => {
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
            Elements from the Unordered List aligned centrally (both veritcal and horizontal)
            using Justify Content and Align Content Center
          </p>
        </div>
      </section>
    </>
  );
}

/* exports */
export default FlexBoxCentralizeElements;

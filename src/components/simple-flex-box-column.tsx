/* app imports */
import getClothingBrands from "@common/data/get-clothing-brands";

/* component */
function SimpleFlexBoxColumn(): JSX.Element {
  /* env */
  const IMG_ROOT = import.meta.env.VITE_IMG_SRC;
  /* data */
  const brands = getClothingBrands();

  return (
    <>
      <section className="demo flexboxColumn growBox">
        <div className="container">
          <div className="lists">
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
            <ul className="list-unstyled">
              {
                brands.slice(1, 5).map((item, index) => {
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
            <ul className="list-unstyled">
              {
                brands.slice(2, 6).map((item, index) => {
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
            <ul className="list-unstyled">
              {
                brands.slice(3, 7).map((item, index) => {
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
          </div>
          <p className="text-center">
            Simple Flex Box Layout where each column of brand items uses the Flex Column direction.
            Inspect the CSS Code for more information.
          </p>
        </div>
      </section>
    </>
  );
}

/* exports */
export default SimpleFlexBoxColumn;

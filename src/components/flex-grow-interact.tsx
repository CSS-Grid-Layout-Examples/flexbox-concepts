/* app imports */
import getClothingBrands from "@common/data/get-clothing-brands";
import FlexGrowInteractiveItem from "./flex-grow-interact-item/index.tsx";

/* component */
function FlexGrowInteractive(): JSX.Element {
  /* data */
  const brands = getClothingBrands().splice(0, 3);

  return (
    <>
      <section className="demo flexGrowInteractive">
        <div className="container">
          <ul className="list-unstyled">
            {
              brands.slice(0, 3).map((item, index) => {
                return (
                  <>
                    <FlexGrowInteractiveItem
                      key={index}
                      index={index}
                      {...item}
                    />
                  </>
                );
              })
            }
          </ul>
          <p className="text-center">
            3 Card Flex Box Layout with each list item marked with a Flex Grow initial value.
            Interact with the arrow buttons to see the changes
          </p>
        </div>
      </section>
    </>
  );
}

/* exports */
export default FlexGrowInteractive;

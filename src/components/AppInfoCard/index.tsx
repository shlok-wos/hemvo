import { appInfoCardData } from "@/static";
import { cx } from "class-variance-authority";

export const AppInfoCard = () => {
  return (
    <>
      {appInfoCardData.map((appInfoCardItem: any, appInfoCardIndex: number) => {
        return (
          <div
            className={cx(
              "row align-items-center mb-4 mb-sm-5 justify-content-between",
              appInfoCardItem.rowReverse
            )}
            key={`appskf-${appInfoCardIndex}`}
          >
            <div className="img-wrapper pt-3 col-md-6 col-lg-5 mb-sm-2 mb-md-0 d-flex justify-content-center">
              <img src={appInfoCardItem.appImgae} className="" />
            </div>
            <div className="col-md-6 pt-3 pt-sm-4 pt-md-0">
              <h2 className="text-3xl mb-2 mb-xxl-3">
                {appInfoCardItem.title}
              </h2>
              <p className="text-md text-gray lh-base">
                {appInfoCardItem.description}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

import clsx from "clsx";
import styles from "../AddQueue.module.css";
interface AddQueueTitleProps {
  stepNo: number;
  title: string;
  text: string;
}
export const AddQueueTitle: React.FC<AddQueueTitleProps> = ({
  stepNo,
  title,
  text,
}) => {
  return (
    <>
      <div className="d-flex justify-content-start gap-xs align-items-start">
        <div
          className={clsx(
            styles.collapsNumber,
            "bg-theme d-flex justify-content-start align-items-center radius-full"
          )}
        >
          <h4 className="text-2xl text-center align-content-center text-white fw-semibold h-100 w-100">
            {stepNo}
          </h4>
        </div>
        <div>
          <p className="text-xl fw-bold text-black mb-1">{title}</p>
          <p className="text-base text-gray fe-mediun">{text}</p>
        </div>
      </div>
    </>
  );
};

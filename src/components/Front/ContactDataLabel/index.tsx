"use client";
import { cx } from "class-variance-authority";
import { contactLabelData } from "@/static";
import { Button } from "@/components";
import styles from "./ContactDataLabel.module.css";

export const ContactDataLabel = () => {
    return (
        <div className="d-flex gap-2 gap-md-3 gap-xl-4 flex-wrap justify-content-center mt-4 mt-xl-5">
            {contactLabelData.map((labelItem: any, labelIndex: number) => {
                return (
                    <Button
                        variant={"accent"}
                        href={labelItem.link}
                        className={cx(
                            styles.heroLabelList,
                            "text-base text-dark fw-bold bg-sugar-crystal px-4 py-2 list-style-none d-flex align-items-center justify-content-center gap-1"
                        )}
                        key={`labad-${labelIndex}`}
                        target={labelItem.labelTitle === "Instagram" ? "_blank" : "_self"}
                    >
                        {labelItem.icon}
                        {labelItem.labelTitle}
                    </Button>
                );
            })}
        </div>
    );
};
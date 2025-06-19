import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import * as Acc from "@radix-ui/react-accordion";
import { cx } from "class-variance-authority";
import { ReactNode, forwardRef } from "react";
import styles from "./Accordion.module.css";

export const Accordion: React.FC<any> = ({
  data,
  className,
  defaultActiveId,
  itemClassName,
  ...rest
}: AccordionProps) => {
  return (
    <Acc.Root
      type="single"
      defaultValue={defaultActiveId}
      className={cx(styles.accordion, className)}
      collapsible
      {...rest}
    >
      {data ? (
        data.map((item: any, index: number) => {
          return (
            <Acc.Item
              key={`${item.id}-${index}`}
              value={item.id}
              className={cx(styles.item, itemClassName)}
            >
              <AccordionTrigger>{item?.question}</AccordionTrigger>
              <Acc.Content className={cx(styles.content)}>
                <div dangerouslySetInnerHTML={{ __html: item?.answer }} />
              </Acc.Content>
            </Acc.Item>
          );
        })
      ) : (
        <h2>No data Available</h2>
      )}
    </Acc.Root>
  );
};

const AccordionTrigger = forwardRef<
  HTMLButtonElement,
  Acc.AccordionTriggerProps
>(({ children, className, ...props }, forwardedRef) => (
  <Acc.Header className={styles.header}>
    <Acc.Trigger
      className={cx(styles.trigger, "text-start")}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <CaretDown
        color="text-dark"
        size={24}
        className={cx(styles.icon, "flex-shrink-0")}
      />
    </Acc.Trigger>
  </Acc.Header>
));

export interface AccordionItem {
  id: string;
  question: ReactNode;
  answer: ReactNode;
}

export interface AccordionProps {
  data: AccordionItem[];
  className?: string;
  itemClassName?: string;
  defaultActiveId?: string;
}

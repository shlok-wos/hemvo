"use client";
import { Accordion, Card, Loader } from "@/components";
import { faqIcons } from "@/static";
import * as Tabs from "@radix-ui/react-tabs";
import { cx } from "class-variance-authority";
import styles from "./Faq.module.css";
import { useFaqHook } from "@/hooks/user/faq.hook";

export const Faq = () => {
  const { faqsData, isLoader, activeFaq, onChangeFaq } = useFaqHook();
  const faqContent = faqsData?.pageContent;

  return (
    <div>
      <Loader show={isLoader} />
      <Card>
        <div className="mb-5 text-center">
          <h1 className="text-2xl mb-2">{faqsData?.title}</h1>
          <p>{faqsData?.description}</p>
        </div>
        {activeFaq && (
          <Tabs.Root defaultValue={activeFaq} onValueChange={onChangeFaq}>
            <Tabs.List className={cx(styles.listGrid, "mb-5")}>
              {faqContent?.map((category: any, index: number) => {
                return (
                  <Tabs.Trigger
                    key={`opsd-${category.id}-${index}`}
                    value={category.id}
                    className="bg-transparent border-0 px-0 d-flex align-items-center justify-content-center flex-column w-100"
                  >
                    <Card
                      className={cx(styles.trigger, "w-100", {
                        [styles.active]: category.id === activeFaq,
                      })}
                      active={category.id === activeFaq}
                    >
                      <div className="d-flex justify-content-center mb-2">
                        {faqIcons[index]?.icon}
                      </div>
                      <h5 className="text-lg mb-2">{category?.type}</h5>
                      <p className="text-gray text-sm">
                        {category?.description}
                      </p>
                    </Card>
                  </Tabs.Trigger>
                );
              })}
            </Tabs.List>

            {faqContent?.map((category: any, index: number) => {
              return (
                <Tabs.Content
                  key={`cadf-${category.id}-${index}`}
                  value={category.id}
                >
                  <h3 className="text-xl mb-2">{category?.type}</h3>

                  <Accordion
                    data={category?.questions}
                    className={cx(styles.dashboardFaqAccordionMainWrap, "mt-4")}
                    itemClassName={cx(
                      styles.dashboardFaqAccordion,
                      "radius-sm py-2 py-xl-3 px-2 px-xl-3"
                    )}
                  />
                </Tabs.Content>
              );
            })}
          </Tabs.Root>
        )}
      </Card>
    </div>
  );
};

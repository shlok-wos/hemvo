"use client"
import { cx } from "class-variance-authority";
import { flatQuestData, rentOutHeroLabelData } from "@/static";
import {
    AssistanceSlider,
    Button,
    CustomerParallax,
    Hero,
    HowCanWeHelp,
    Input,
    Loader,
    PhoneInput,
    ReviewSlider,
} from "@/components";
import {
    ArrowRight,
    Envelope,
    House,
    Phone,
    SealCheck,
    User,
} from "@phosphor-icons/react";
import { CityDome, WhatCustomersSayAboutUs } from "@/assets/images";
import styles from "./RentOut.module.css";
import { useBlogListHook } from "@/hooks/user/blogs/blogList.hook";
import { useRentHook } from "@/hooks/common/rentOut.hook";
export const RentOut = () => {
    const { blogListData } = useBlogListHook();
    const {
        userData,
        errorMessage,
        onSubmit,
        handleInputChange,
        handleOnChangeCountryCode,
    } = useRentHook();
    return (
        <div>
            <section
                className={cx(
                    styles.hero,
                    "d-flex align-items-center py-4 py-sm-5 py-lg-4"
                )}
            >
                <div className="container">
                    <Hero
                        title={
                            "Hemvo hjälper dig att hitta din nästa hyresgäst - helt utan kostnad"
                        }
                        description={
                            "Frigör din tid med Hemvo och låt oss hitta din hyresgäst."
                        }
                        isShowBtn={false}
                        heroLabel={rentOutHeroLabelData}
                    />
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="w-100">
                        <h2 className="text-3xl mb-2 mb-xxl-3">
                            Hemvo gör det enkelt.
                        </h2>
                        <p className="text-md text-gray">
                            Vi sköter det administrativa och matchar din bostad med
                            kvalificerade hyresgäster inom 24 timmar. Med vår expertis och
                            marknadskunskap hjälper vi dig att maximera din hyresinkomst och
                            frigöra tid för det som betyder mest för dig.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mt-4 pt-md-3">
                            <div className={cx(styles.flatQuestRow, "d-grid")}>
                                <div className="w-100">
                                    <Input
                                        icon={<User size={20} weight="duotone" />}
                                        id="flatQuestFörnamn"
                                        type="text"
                                        name="firstName"
                                        label="Förnamn *"
                                        placeholder="Förnamn"
                                        errorMessage={errorMessage?.firstName}
                                        value={userData?.firstName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="w-100">
                                    <Input
                                        icon={<User size={20} weight="duotone" />}
                                        id="flatQuestEfternamn"
                                        type="text"
                                        name="lastName"
                                        label="Efternamn *"
                                        placeholder="Efternamn"
                                        errorMessage={errorMessage?.lastName}
                                        value={userData?.lastName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="w-100">
                                    <Input
                                        icon={<Envelope size={20} weight="duotone" />}
                                        id="flatQuestEpostadress"
                                        type="email"
                                        name="email"
                                        label="E-postadress *"
                                        placeholder="E-postadress"
                                        iconClassCommon="email-ico-translateY"
                                        errorMessage={errorMessage?.email}
                                        value={userData?.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="w-100">
                                    <PhoneInput
                                        name={"phoneNumber"}
                                        label="Telefonnummer*"
                                        placeholder="Ange ditt mobilnummer"
                                        selectedCountry={userData?.phoneCode}
                                        onCountryChange={handleOnChangeCountryCode}
                                        value={userData?.phoneNumber}
                                        errorMessage={errorMessage?.phoneNumber}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <Button
                                icon={<ArrowRight size={20} weight="duotone" />}
                                iconPosition="end"
                                className="mt-4 w-auto"
                                full
                                onClick={onSubmit}
                            >
                                Anmäl intresse
                            </Button>
                        </div>
                        <div className="col-lg-6 mt-4 pt-3">
                            {Array.isArray(flatQuestData) && flatQuestData.map((listItem, listIndex) => (
                                <p
                                    className="d-flex align-items-start mb-3 text-md text-gray"
                                    key={`anmal-${listIndex}`}
                                >
                                    <SealCheck
                                        size={22}
                                        color="#a023fb"
                                        weight="duotone"
                                        className="flex-shrink-0 me-2 icon-top-translateY"
                                    />
                                    {listItem.title}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <HowCanWeHelp />
            <section className={cx(styles.customers, "space-top-lg")}>
                <div className={styles.customersIllustration}>
                    <div className="container position-relative text-center">
                        <h2 className="text-4xl mb-2 mb-xxl-3">
                            Vad våra medlemmar säger om oss
                        </h2>
                        <p className="text-md text-gray">Så tycker våra medlemmar</p>
                        <img
                            src={WhatCustomersSayAboutUs.src}
                            alt={"IPhone with notifications"}
                            className={cx(
                                styles.customersSayImg,
                                "mx-auto position-relative z-1 mt-4 mt-lg-5"
                            )}
                        />
                        <CustomerParallax />
                    </div>
                </div>
                <ReviewSlider />
            </section>
            <section className="space-top-lg position-relative">
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="section-title-right-space w-100">
                        <h2 className="text-4xl fw-bold mb-2 mb-xxl-3">Hyreshjälpen</h2>
                        <p className="text-md text-gray">
                            Guider, inspiration, tips och intervjuer för ditt nya hem.
                        </p>
                    </div>
                </div>
                <div className="mt-4 mt-sm-5">
                    <AssistanceSlider blogListData={blogListData} />
                </div>
            </section>
            <section className="space-top-lg space-bottom-lg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-xl-6 pe-xxl-5">
                            <div className="ratio ratio-16x9 overflow-hidden">
                                <img
                                    src={CityDome.src}
                                    alt="Large dome in center of the city"
                                    className={cx(styles.dome, "object-fit-cover radius-md")}
                                    width={615}
                                />
                            </div>
                        </div>
                        <div className="col-lg-5 col-xl-6 ps-xl-5 mt-4 mt-lg-0">
                            <h2 className="text-3xl fw-bold mb-4">
                                Vill du hyra ut med oss?
                            </h2>
                            <p className="text-md text-gray">
                                Registrera dig, så kommer en av våra medarbetare att kontakta
                                dig snarast via telefon eller e-post.
                            </p>
                            <Button
                                icon={<House size={20} weight="duotone" />}
                                className="mt-4"
                                href="/create-account"
                            >
                                Bli medlem
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
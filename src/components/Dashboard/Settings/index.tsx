"use client";
import { Button, Card, Input, Loader, PhoneInput } from "@/components";
import { useSettingsHook } from "@/hooks/user/settings.hook";
import { Envelope, FloppyDisk, Password, User } from "@phosphor-icons/react";

export const Settings = () => {
	const {
		isLoader,
		userData,
		errorMessage,
		passwordData,
		passwordErrorMessage,
		handleInputChange,
		onSubmit,
		handlePasswordChange,
		onSubmitPassword,
		handleOnChangeCountryCode,
	} = useSettingsHook();
	return (
		<div>
			<Loader show={isLoader} />
			<Card className="mb-3 mb-xl-4">
				<h2 className="text-xl mb-3 mb-sm-4">Kontaktuppgifter</h2>
				<form>
					<div className="row gy-3">
						<div className="col-md-6">
							<Input
								id="firstName"
								label="Förnamn *"
								name="firstName"
								placeholder="Ange ditt förnamn"
								icon={<User weight="duotone" size={22} />}
								errorMessage={errorMessage?.firstName}
								value={userData?.firstName}
								onChange={handleInputChange}
							/>
						</div>
						<div className="col-md-6">
							<Input
								id="lastname"
								name="lastName"
								label="Efternamn *"
								placeholder="Ange ditt efternamn"
								icon={<User weight="duotone" size={22} />}
								errorMessage={errorMessage?.lastName}
								value={userData?.lastName}
								onChange={handleInputChange}
							/>
						</div>
						<div className="col-md-6">
							<Input
								id="email"
								name="email"
								label="E-post *"
								placeholder="Ange din e-postadress"
								type="email"
								icon={<Envelope weight="duotone" size={22} />}
								errorMessage={errorMessage?.email}
								value={userData?.email}
								disabled
								onChange={handleInputChange}
							/>
						</div>
						<div className="col-md-6">
							<PhoneInput
								name={"phoneNumber"}
								label="Telefonnummer"
								placeholder="Välj landskod och telefonnummer"
								selectedCountry={userData?.phoneCode}
								onCountryChange={handleOnChangeCountryCode}
								value={userData?.phoneNumber}
								errorMessage={errorMessage?.phoneNumber}
								onChange={handleInputChange}
							/>
						</div>
						<div className="col-12 d-flex justify-content-end">
							<Button
								variant={"accent"}
								icon={<FloppyDisk weight="duotone" size={20} />}
								iconPosition="end"
								onClick={onSubmit}
							>
								Spara
							</Button>
						</div>
					</div>
				</form>
			</Card>

			<Card>
				<h2 className="text-xl mb-3 mb-sm-4">Byt lösenord</h2>

				<form>
					<div className="row gy-3">
						<div className="col-md-6">
							<Input
								id="password"
								label="Nuvarande lösenord*"
								name="oldPassword"
								type="password"
								placeholder="Ange lösenord"
								icon={<Password weight="duotone" size={22} />}
								errorMessage={passwordErrorMessage?.oldPassword}
								value={passwordData?.oldPassword}
								onChange={handlePasswordChange}
							/>
						</div>
						<div className="col-md-6">
							<Input
								type="password"
								id="newPassword"
								name="newPassword"
								label="Nytt lösenord *"
								placeholder="Ange nytt lösenord"
								icon={<Password weight="duotone" size={22} />}
								errorMessage={passwordErrorMessage?.newPassword}
								value={passwordData?.newPassword}
								onChange={handlePasswordChange}
							/>
						</div>
						<div className="col-12 d-flex justify-content-end">
							<Button
								variant={"accent"}
								icon={<FloppyDisk weight="duotone" size={20} />}
								iconPosition="end"
								onClick={onSubmitPassword}
							>
								Spara
							</Button>
						</div>
					</div>
				</form>
			</Card>
		</div>
	);
};

"use client";
import { FloppyDisk } from "@phosphor-icons/react";
import {
	Card,
	Button,
	Select,
	Switch,
	Range,
	Modal,
	TextArea,
	Loader,
	SelectOption,
} from "@/components";
import { useRentalProfileHook } from "@/hooks/user/rental-profile/rentalProfile.hook";
import { SealCheck, XCircle } from "@phosphor-icons/react";

export const RentalProfile = () => {
	const {
		isLoader,
		cities,
		rentalProfileData,
		isSuccessModalOpen,
		errorMessage,
		handleConfirmModal,
		handleOnchangeRange,
		handleOnchangeSwitch,
		handleOnChangeSelect,
		onSaveRentalData,
		handleOnChangeTextArea,
	} = useRentalProfileHook();

	return (
		<>
			<Loader show={isLoader} />

			<Card className="overflow-x-hidden">
				<h2 className="text-xl mb-2">Hyresprofil</h2>
				<p className="text-gray text-md">
					Sätt upp din hyresprofil så att vår robot kan börja leta efter din
					lägenhet.
				</p>

				<hr
					style={{
						border: "1px solid var(--lightgray)",
					}}
					className="my-4"
				/>

				<form>
					<div className="mb-3 mb-md-5">
						<div className="mb-3">
							<h5 className="text-lg fw-bold mb-2">Typ av lägenhet</h5>
							<p className="text-gray">
								Vad för typ av lägenhet är du intresserad av?
							</p>
						</div>

						<div className="row gy-3 gy-md-0 mb-3 mt-md-0">
							<div className="col-md-4 col-xl-3">
								<Select
									options={cities}
									placeholder="Välj stad"
									errorMessage={errorMessage?.cityId}
									value={rentalProfileData?.cityId}
									customItemToString={(item: SelectOption | null) => {
										return item ? item.label : "";
									}}
									selectedItem={
										rentalProfileData?.cityId
											? cities?.find((city: any) => {
													return city?.id == rentalProfileData?.cityId;
											  })
											: undefined
									}
									onChange={(value: any) => {
										handleOnChangeSelect(value, "cityId");
									}}
								/>
							</div>
							<div className="col-md-4 col-xl-4 offset-xl-1 d-flex align-items-center">
								<Switch
									label="Förstahandskontrakt"
									checked={rentalProfileData?.isFirstHand}
									onChange={(value: any) =>
										handleOnchangeSwitch(value, "isFirstHand")
									}
								/>
							</div>
							<div className="col-md-4 col-xl-3 d-flex align-items-center">
								<Switch
									label="Andrahandskontrakt"
									checked={rentalProfileData?.isSubContract}
									onChange={(value: any) =>
										handleOnchangeSwitch(value, "isSubContract")
									}
								/>
							</div>
						</div>
						<TextArea
							label="Personliga önskemål"
							name="personalPrefrence"
							placeholder="Skriv in personliga önskemål"
							rows={3}
							id=""
							value={rentalProfileData?.personalPrefrence}
							onChange={(event: any) => handleOnChangeTextArea(event)}
						/>
					</div>
					<div className="mb-3 mb-md-5">
						<h5 className="text-lg fw-bold mb-2">Antal rum</h5>
						<p className="text-gray">Ange minimum- och maximumantalet rum</p>
						<Range
							min={1}
							max={6}
							value={rentalProfileData?.noOfRooms}
							valueSuffix={`rum`}
							className="mt-2"
							onChange={(value: any) => handleOnchangeRange(value, "noOfRooms")}
						/>
					</div>

					<div className="mb-3 mb-md-5 pt-3">
						<h5 className="text-lg fw-bold mb-2">Storlek</h5>
						<p className="text-gray">
							Ställ in minst och högst antal kvadratmeter.
						</p>

						<Range
							min={10}
							max={250}
							value={rentalProfileData?.size}
							valueSuffix={`kvm`}
							step={10}
							className="mt-2"
							onChange={(value: any) => handleOnchangeRange(value, "size")}
						/>
					</div>

					<div className="mb-3 mb-md-5 pt-3">
						<h5 className="text-lg fw-bold mb-2">Hyra</h5>
						<p className="text-gray">Ställ in minimum- och maximumhyra</p>

						<Range
							min={1000}
							max={40000}
							value={rentalProfileData?.rent}
							valueSuffix={`KR`}
							step={1000}
							className="mt-2"
							onChange={(value: any) => handleOnchangeRange(value, "rent")}
						/>
					</div>

					<div className="row mt-5 mt-md-0">
						<div className="col-12 d-flex justify-content-center">
							<Modal
								open={isSuccessModalOpen}
								size="small"
								showClose={false}
								closeOnOverlayClick={false}
								trigger={
									<Button
										variant={"accent"}
										icon={<FloppyDisk weight="duotone" size={20} />}
										iconPosition="end"
										onClick={onSaveRentalData}
									>
										Spara
									</Button>
								}
							>
								<div className="text-center">
									<div
										className="bg-accent d-flex align-items-center justify-content-center rounded-circle text-g2 mx-auto mb-3 p-2"
										style={{
											width: "4em",
											height: "4em",
										}}
									>
										<SealCheck weight="duotone" size={40} />
									</div>

									<h5 className="text-lg fw-bold mb-5">
										Din hyresprofil har skapats framgångsrikt.
									</h5>

									<Button
										icon={<XCircle weight="duotone" size={22} />}
										onClick={handleConfirmModal}
									>
										Stäng
									</Button>
								</div>
							</Modal>
						</div>
					</div>
				</form>
			</Card>
		</>
	);
};

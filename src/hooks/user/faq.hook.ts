import { fetchFaqs } from "@/actions"
import { blogsList, faqs } from "@/reducers/staticData.reducer"
import { useAppDispatch, useAppSelector } from "@/store"
import { FaqDataTypes } from "@/types/common.types"
import { useEffect, useState } from "react"

export const useFaqHook = () => {
   const [faqsData, setFaqsData] = useState<FaqDataTypes>({} as FaqDataTypes)
   const [isLoader, setIsLoader] = useState<boolean>(true);
   const [activeFaq, setActiveFaq] = useState<string | null>(null);
   const storedFaqs = useAppSelector((state) => state.staticData.faqs);
   const dispatch = useAppDispatch()

   useEffect(() => {
      getfaqs()
   }, [])

   const getfaqs = async () => {
      try {
         setIsLoader(true)
         let fetchedfaqs: any = {}
         if (Object.keys(storedFaqs).length === 0) {
            const faqsResponse = await fetchFaqs()
            fetchedfaqs = await JSON.parse(faqsResponse?.data?.content)
            dispatch(faqs(fetchedfaqs))
            setFaqsData(fetchedfaqs)
         } else {
            fetchedfaqs = storedFaqs
            setFaqsData(storedFaqs)
         }
         const faqContent = fetchedfaqs?.pageContent;
         setActiveFaq(faqContent && faqContent?.length > 0 ? faqContent[0]?.id : null)
         setIsLoader(false)
      } catch (error) {
         setIsLoader(false)
         console.log(error)
      }
   }

   const onChangeFaq = (activeFaqId: string) => {
      setActiveFaq(activeFaqId)
   }
   return {
      faqsData,
      isLoader,
      onChangeFaq,
      activeFaq
   }
}